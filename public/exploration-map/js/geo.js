// Geometry helpers and the discovery grid.
//
// The world is divided into square-ish cells. Level 0 cells are ~22 m wide
// (a few footsteps); every level above is 8x wider. We keep all levels so the
// fog can be drawn cheaply at any zoom: street view uses level 0, the whole
// world view uses level 4 (~90 km cells).

export const BASE_CELL_DEG = 0.0002; // ~22 m of latitude
export const LEVELS = 5;
export const REVEAL_RADIUS_M = 50; // how far around you the fog lifts
export const DWELL_LEVEL = 1; // ~180 m cells for "where did I spend time"

const EARTH_R = 6371008.8;
const toRad = (d) => (d * Math.PI) / 180;

export function distanceM(a, b) {
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * EARTH_R * Math.asin(Math.min(1, Math.sqrt(s)));
}

export function cellSizeDeg(level) {
  return BASE_CELL_DEG * 8 ** level;
}

export function cellSizeM(level) {
  return cellSizeDeg(level) * 111320;
}

function rowGeometry(level, row) {
  const s = cellSizeDeg(level);
  const latC = (row + 0.5) * s - 90;
  const sLng = s / Math.max(Math.cos(toRad(latC)), 0.05);
  return { s, latC, sLng };
}

export function cellKey(level, lat, lng) {
  const s = cellSizeDeg(level);
  const row = Math.floor((lat + 90) / s);
  const { sLng } = rowGeometry(level, row);
  const col = Math.floor((lng + 180) / sLng);
  return row + ':' + col;
}

export function cellCenter(level, key) {
  const i = key.indexOf(':');
  const row = +key.slice(0, i);
  const col = +key.slice(i + 1);
  const { latC, sLng } = rowGeometry(level, row);
  return [(col + 0.5) * sLng - 180, latC]; // [lng, lat] like MapLibre
}

// Points every `stepM` metres along a -> b (excluding a, including b).
export function interpolate(a, b, stepM) {
  const d = distanceM(a, b);
  const n = Math.max(1, Math.ceil(d / stepM));
  const out = [];
  for (let i = 1; i <= n; i++) {
    const f = i / n;
    out.push({ lat: a.lat + (b.lat - a.lat) * f, lng: a.lng + (b.lng - a.lng) * f });
  }
  return out;
}

// Metres per CSS pixel at a given zoom/latitude (Web Mercator, 512px tiles).
export function metersPerPixel(zoom, lat) {
  return (40075016.686 * Math.cos(toRad(lat))) / (512 * 2 ** zoom);
}

export function startOfDay(t) {
  const d = new Date(t);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}
