import * as store from './store.js';
import { World } from './world.js';
import { Fog } from './fog.js';
import { addTrailLayers, updateTrails } from './trails.js';
import { createAvatarElement, soulleafSVG } from './avatar.js';
import { parseGPX } from './gpx.js';
import { distanceM, interpolate } from './geo.js';

const maplibregl = window.maplibregl;
const STYLE_URL = 'https://tiles.openfreemap.org/styles/positron';
const $ = (id) => document.getElementById(id);

// Fallback when the map style can't be loaded (offline): just paper.
const BLANK_STYLE = {
  version: 8,
  sources: {},
  layers: [{ id: 'background', type: 'background', paint: { 'background-color': '#efeae0' } }],
};

async function loadStyle() {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 8000);
    const res = await fetch(STYLE_URL, { signal: ctrl.signal });
    clearTimeout(timer);
    if (!res.ok) throw new Error(res.status);
    return simplifyStyle(await res.json());
  } catch (e) {
    console.warn('Map style unavailable, using blank paper', e);
    return BLANK_STYLE;
  }
}

// Less is more: drop points of interest, house numbers and one-way arrows.
function simplifyStyle(style) {
  style.layers = style.layers.filter((l) => !/poi|housenum|oneway|aeroway/.test(l.id));
  style.layers.forEach((l) => {
    if (l.type === 'background') l.paint = { ...l.paint, 'background-color': '#efeae0' };
  });
  return style;
}

let status = { timer: null };
function showStatus(text, ms = 4000) {
  const el = $('status');
  el.textContent = text;
  el.hidden = false;
  clearTimeout(status.timer);
  if (ms) status.timer = setTimeout(() => (el.hidden = true), ms);
}

async function main() {
  const world = new World();
  const [birth, style] = await Promise.all([
    store.getMeta('birth'),
    loadStyle(),
    world.load(),
  ]);
  let birthDate = birth;

  const map = new maplibregl.Map({
    container: 'map',
    style,
    center: [10, 25],
    zoom: 1.2,
    minZoom: 0.5,
    maxZoom: 18,
    attributionControl: { compact: true },
    renderWorldCopies: false,
    pitchWithRotate: false,
    dragRotate: false,
  });
  map.touchZoomRotate.disableRotation();

  new Fog(map, world);

  // Soulleaf avatar
  const avatar = new maplibregl.Marker({ element: createAvatarElement(), anchor: 'center' });
  let avatarShown = false;
  const placeAvatar = (lng, lat) => {
    avatar.setLngLat([lng, lat]);
    if (!avatarShown) {
      avatar.addTo(map);
      avatarShown = true;
    }
  };

  // Trails (throttled; also refreshed periodically so ages roll over at midnight)
  let trailTimer = null;
  const refreshTrails = () => {
    if (trailTimer) return;
    trailTimer = setTimeout(() => {
      trailTimer = null;
      updateTrails(map, world.points);
    }, 1500);
  };
  map.on('load', () => {
    addTrailLayers(map);
    updateTrails(map, world.points);
  });
  world.onChange(refreshTrails);
  setInterval(() => updateTrails(map, world.points), 10 * 60 * 1000);

  // Camera follows the soulleaf until you pan away.
  let following = true;
  let firstFix = true;
  let flying = false; // the first dramatic fly-in shouldn't be interrupted
  const recenterBtn = $('recenter');
  const setFollowing = (v) => {
    following = v;
    recenterBtn.classList.toggle('following', v);
  };
  map.on('dragstart', () => setFollowing(false));
  const current = () => world.lastFix;
  recenterBtn.onclick = () => {
    const p = current();
    if (!p) return showStatus('Waiting for your location…');
    setFollowing(true);
    map.flyTo({ center: [p.lng, p.lat], zoom: Math.max(map.getZoom(), 15) });
  };

  const onFix = (fix) => {
    world.addLiveFix(fix);
    placeAvatar(fix.lng, fix.lat);
    if (firstFix) {
      firstFix = false;
      flying = true;
      map.once('moveend', () => (flying = false));
      map.flyTo({ center: [fix.lng, fix.lat], zoom: 15.5, duration: 3500 });
    } else if (following && !flying) {
      map.easeTo({ center: [fix.lng, fix.lat], duration: 600 });
    }
  };

  // --- Real location -------------------------------------------------------
  let wandering = false;
  let hiddenAt = 0;
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      hiddenAt = Date.now();
    } else if (hiddenAt && Date.now() - hiddenAt > 2 * 60 * 1000) {
      // We don't know the path taken while closed; don't draw a straight
      // line across it.
      world.lastFix = null;
    }
  });

  const startTracking = () => {
    if (!('geolocation' in navigator)) return showStatus('This device has no location.', 0);
    navigator.geolocation.watchPosition(
      (pos) => {
        if (wandering) return;
        $('status').hidden = true;
        const { latitude: lat, longitude: lng, accuracy } = pos.coords;
        if (accuracy > 100) {
          placeAvatar(lng, lat);
          return showStatus('Finding you… (weak GPS signal)', 2500);
        }
        onFix({ lat, lng, t: pos.timestamp || Date.now() });
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          showStatus(
            'Location is off. Allow it in Settings → Privacy → Location Services → Safari Websites.',
            0
          );
        } else {
          showStatus('Still looking for you…', 3000);
        }
      },
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 30000 }
    );
  };

  // --- Intro / birth -------------------------------------------------------
  $('intro').querySelector('.intro-leaf').innerHTML = soulleafSVG();
  $('open-profile').innerHTML = soulleafSVG();
  $('profile').querySelector('.profile-leaf').innerHTML = soulleafSVG();

  if (!birthDate) {
    $('intro').hidden = false;
    $('begin').onclick = async () => {
      birthDate = Date.now();
      await store.setMeta('birth', birthDate);
      await store.persist();
      $('intro').hidden = true;
      startTracking();
    };
  } else {
    store.persist();
    startTracking();
  }

  // --- Profile -------------------------------------------------------------
  const fmtDate = (t) =>
    new Date(t).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
  const renderProfile = () => {
    const s = world.stats();
    const age = Math.floor((Date.now() - birthDate) / 86400000);
    $('born').textContent = birthDate
      ? `Born ${fmtDate(birthDate)} · ${age === 0 ? 'today' : age === 1 ? '1 day old' : age + ' days old'}`
      : '';
    $('stat-area').textContent =
      s.areaKm2 < 10 ? s.areaKm2.toFixed(2) + ' km²' : Math.round(s.areaKm2) + ' km²';
    $('stat-distance').textContent =
      s.distanceKm < 10 ? s.distanceKm.toFixed(1) + ' km' : Math.round(s.distanceKm) + ' km';
    $('stat-days').textContent = s.days;
  };
  $('open-profile').onclick = () => {
    renderProfile();
    $('profile').hidden = false;
  };
  $('close-profile').onclick = () => ($('profile').hidden = true);
  $('profile').onclick = (e) => {
    if (e.target === $('profile')) $('profile').hidden = true;
  };

  // Keep screen awake
  let wakeLock = null;
  const wantWake = () => $('wake').checked;
  const acquireWake = async () => {
    try {
      if (wantWake() && navigator.wakeLock && !document.hidden) {
        wakeLock = await navigator.wakeLock.request('screen');
      }
    } catch (_) {}
  };
  $('wake').onchange = async () => {
    if (wantWake()) {
      if (!navigator.wakeLock) showStatus('This browser cannot keep the screen awake.');
      await acquireWake();
    } else if (wakeLock) {
      wakeLock.release();
      wakeLock = null;
    }
  };
  document.addEventListener('visibilitychange', acquireWake);

  // Wander mode: tap to walk, to try the app without leaving home.
  let walkTimer = null;
  $('wander').onchange = () => {
    wandering = $('wander').checked;
    $('wander-banner').hidden = !wandering;
    if (wandering) {
      $('profile').hidden = true;
      $('status').hidden = true;
    }
    clearInterval(walkTimer);
  };
  map.on('click', (e) => {
    if (!wandering) return;
    const to = { lat: e.lngLat.lat, lng: e.lngLat.lng };
    const from = current();
    clearInterval(walkTimer);
    if (!from || distanceM(from, to) > 20000) {
      onFix({ ...to, t: Date.now() });
      return;
    }
    const steps = interpolate(from, to, 10);
    walkTimer = setInterval(() => {
      const next = steps.shift();
      if (!next) return clearInterval(walkTimer);
      onFix({ ...next, t: Date.now() });
    }, 50);
  });

  // --- Files: GPX import, backup, restore ----------------------------------
  let fileMode = null;
  const fileInput = $('file');
  $('import-gpx').onclick = () => {
    fileMode = 'gpx';
    fileInput.value = '';
    fileInput.click();
  };
  $('import-backup').onclick = () => {
    fileMode = 'backup';
    fileInput.value = '';
    fileInput.click();
  };
  fileInput.onchange = async () => {
    const file = fileInput.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      if (fileMode === 'gpx') {
        const fixes = parseGPX(text);
        if (!fixes.length) throw new Error('No points found in this file');
        world.importTrack(fixes);
        fitTo(fixes);
        showStatus(`Imported ${fixes.length} points. The fog has lifted there.`);
      } else {
        const data = JSON.parse(text);
        world.importJSON(data);
        if (data.birth && (!birthDate || data.birth < birthDate)) {
          birthDate = data.birth;
          await store.setMeta('birth', birthDate);
        }
        showStatus('Your world has been restored.');
      }
      renderProfile();
      $('profile').hidden = true;
    } catch (e) {
      showStatus('Could not import: ' + e.message);
    }
  };

  const fitTo = (fixes) => {
    const b = new maplibregl.LngLatBounds();
    fixes.forEach((f) => b.extend([f.lng, f.lat]));
    setFollowing(false);
    map.fitBounds(b, { padding: 60, maxZoom: 15 });
  };

  $('export').onclick = async () => {
    const json = JSON.stringify(world.exportJSON(birthDate));
    const name = `exploration-map-${new Date().toISOString().slice(0, 10)}.json`;
    const file = new File([json], name, { type: 'application/json' });
    try {
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: 'The Exploration Map backup' });
        return;
      }
    } catch (e) {
      if (e.name === 'AbortError') return;
    }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  };

  // If there's history but no live fix yet, start by looking at your world.
  const last = world.points[world.points.length - 1];
  if (last) {
    placeAvatar(last.lng, last.lat);
    map.jumpTo({ center: [last.lng, last.lat], zoom: 14 });
    firstFix = false;
  }
  setFollowing(true);

  // Debug handle for the console.
  window.explorationMap = { map, world };
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/exploration-map/sw.js', { scope: '/exploration-map/' }).catch(() => {});
}

main();
