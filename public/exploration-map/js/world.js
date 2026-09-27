// The explorer's world: where they've been, what they've uncovered, and where
// they lingered. Kept in memory for drawing and mirrored to IndexedDB.

import * as geo from './geo.js';
import * as store from './store.js';

const MIN_STEP_M = 8; // record a trail point after moving this far…
const MIN_STEP_MS = 120000; // …or after this long standing still
const MAX_GAP_MS = 30 * 60 * 1000; // longer gaps are separate journeys
const MAX_GAP_M = 50000; // bigger jumps (flights) don't lift the fog in between
const MAX_DWELL_MS = 5 * 60 * 1000;

export class World {
  constructor() {
    this.points = [];
    this.levels = Array.from({ length: geo.LEVELS }, () => new Map());
    // children[L]: parent key at level L+2 -> centers of level-L cells inside it.
    // Lets the fog renderer skip everything off-screen.
    this.children = Array.from({ length: geo.LEVELS - 2 }, () => new Map());
    this.dwell = new Map();
    this.lastFix = null;
    this.listeners = new Set();
    this.pending = { points: [], cells: [], dwell: new Map() };
    this.flushTimer = null;
  }

  async load() {
    const [points, cells, dwell] = await Promise.all([
      store.getAll('points'),
      store.getAll('cells'),
      store.getAll('dwell'),
    ]);
    this.points = points.sort((a, b) => a.t - b.t);
    cells.forEach((c) => this.addCell(c.k));
    dwell.forEach((d) => this.dwell.set(d.k, d.s));
  }

  onChange(fn) {
    this.listeners.add(fn);
  }

  emit() {
    this.listeners.forEach((fn) => fn());
  }

  // Register a level-0 cell (and its coarser parents) in memory.
  addCell(key0) {
    if (this.levels[0].has(key0)) return false;
    const center = geo.cellCenter(0, key0);
    this.levels[0].set(key0, center);
    const [lng, lat] = center;
    for (let L = 1; L < geo.LEVELS; L++) {
      const k = geo.cellKey(L, lat, lng);
      if (!this.levels[L].has(k)) this.levels[L].set(k, geo.cellCenter(L, k));
    }
    for (let L = 0; L < geo.LEVELS - 2; L++) {
      const c = L === 0 ? center : this.levels[L].get(geo.cellKey(L, lat, lng));
      const parent = geo.cellKey(L + 2, lat, lng);
      let list = this.children[L].get(parent);
      if (!list) this.children[L].set(parent, (list = []));
      if (L === 0 || !list.includes(c)) list.push(c);
    }
    return true;
  }

  reveal(lat, lng, t) {
    const k = geo.cellKey(0, lat, lng);
    if (this.addCell(k)) this.pending.cells.push({ k, t });
  }

  // Feed one position into the world. `prev` is the previous position of the
  // same journey (live tracking or an imported file).
  ingest(fix, prev) {
    const connected =
      prev &&
      fix.t - prev.t < MAX_GAP_MS &&
      geo.distanceM(prev, fix) < MAX_GAP_M;

    if (connected) {
      geo.interpolate(prev, fix, 15).forEach((p) => this.reveal(p.lat, p.lng, fix.t));
    } else {
      this.reveal(fix.lat, fix.lng, fix.t);
    }

    const last = this.points[this.points.length - 1];
    if (
      !last ||
      fix.t < last.t || // imported history
      geo.distanceM(last, fix) >= MIN_STEP_M ||
      fix.t - last.t >= MIN_STEP_MS
    ) {
      const p = { lat: fix.lat, lng: fix.lng, t: fix.t };
      this.points.push(p);
      this.pending.points.push(p);
    }

    if (connected) {
      const ms = Math.min(fix.t - prev.t, MAX_DWELL_MS);
      if (ms > 0) {
        const k = geo.cellKey(geo.DWELL_LEVEL, fix.lat, fix.lng);
        const s = (this.dwell.get(k) || 0) + ms / 1000;
        this.dwell.set(k, s);
        this.pending.dwell.set(k, s);
      }
    }
  }

  addLiveFix(fix) {
    this.ingest(fix, this.lastFix);
    this.lastFix = fix;
    this.scheduleFlush();
    this.emit();
  }

  // Import a list of {lat, lng, t} (e.g. from a GPX file), oldest first.
  importTrack(fixes) {
    let prev = null;
    fixes.forEach((f) => {
      this.ingest(f, prev);
      prev = f;
    });
    this.points.sort((a, b) => a.t - b.t);
    this.scheduleFlush(0);
    this.emit();
  }

  scheduleFlush(delay = 2000) {
    clearTimeout(this.flushTimer);
    this.flushTimer = setTimeout(() => this.flush(), delay);
  }

  async flush() {
    const { points, cells, dwell } = this.pending;
    this.pending = { points: [], cells: [], dwell: new Map() };
    await store.write({
      points,
      cells,
      dwell: [...dwell].map(([k, s]) => ({ k, s })),
    });
  }

  stats() {
    let distance = 0;
    for (let i = 1; i < this.points.length; i++) {
      const a = this.points[i - 1];
      const b = this.points[i];
      if (b.t - a.t < MAX_GAP_MS) {
        const d = geo.distanceM(a, b);
        if (d < MAX_GAP_M) distance += d;
      }
    }
    const days = new Set(this.points.map((p) => geo.startOfDay(p.t))).size;
    // Each discovered cell uncovers roughly a reveal-radius disc; neighbours
    // overlap, so count one cell's area plus a bit.
    const cellArea = geo.cellSizeM(0) ** 2;
    const area = (this.levels[0].size * cellArea * 3.5) / 1e6;
    return { distanceKm: distance / 1000, areaKm2: area, days, cells: this.levels[0].size };
  }

  exportJSON(birth) {
    return {
      app: 'exploration-map',
      version: 1,
      birth,
      points: this.points.map((p) => [+p.lat.toFixed(6), +p.lng.toFixed(6), p.t]),
      cells: [...this.levels[0].keys()],
      dwell: Object.fromEntries(this.dwell),
    };
  }

  importJSON(data) {
    if (!data || data.app !== 'exploration-map') throw new Error('Not an Exploration Map backup');
    const known = new Set(this.points.map((p) => p.t + ':' + p.lat));
    data.points.forEach(([lat, lng, t]) => {
      if (known.has(t + ':' + lat)) return;
      const p = { lat, lng, t };
      this.points.push(p);
      this.pending.points.push(p);
    });
    this.points.sort((a, b) => a.t - b.t);
    data.cells.forEach((k) => {
      if (this.addCell(k)) this.pending.cells.push({ k, t: Date.now() });
    });
    Object.entries(data.dwell || {}).forEach(([k, s]) => {
      const v = Math.max(this.dwell.get(k) || 0, s);
      this.dwell.set(k, v);
      this.pending.dwell.set(k, v);
    });
    this.scheduleFlush(0);
    this.emit();
  }
}
