// Trails: today's path is bold, yesterday's softer, everything older a thin
// thread.

import * as geo from './geo.js';

const MAX_GAP_MS = 30 * 60 * 1000;
const MAX_GAP_M = 50000;
const DAY = 24 * 3600 * 1000;

export function buildTrails(points, now = Date.now()) {
  const today = geo.startOfDay(now);
  const ageOf = (t) => (t >= today ? 0 : t >= today - DAY ? 1 : 2);
  const features = [];
  let line = null;
  let age = null;

  const finish = () => {
    if (line && line.length > 1) {
      features.push({
        type: 'Feature',
        properties: { age },
        geometry: { type: 'LineString', coordinates: line },
      });
    }
    line = null;
  };

  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const prev = points[i - 1];
    const a = ageOf(p.t);
    const broken =
      !prev || p.t - prev.t > MAX_GAP_MS || geo.distanceM(prev, p) > MAX_GAP_M;
    if (broken) {
      finish();
      line = [[p.lng, p.lat]];
      age = a;
    } else if (a !== age) {
      // Crossing midnight: end the old line at this point and start anew.
      line.push([p.lng, p.lat]);
      finish();
      line = [[prev.lng, prev.lat], [p.lng, p.lat]];
      age = a;
    } else {
      line.push([p.lng, p.lat]);
    }
  }
  finish();
  return { type: 'FeatureCollection', features };
}

export function addTrailLayers(map) {
  map.addSource('trails', { type: 'geojson', data: buildTrails([]) });
  const line = { 'line-cap': 'round', 'line-join': 'round' };
  map.addLayer({
    id: 'trail-older',
    type: 'line',
    source: 'trails',
    filter: ['==', ['get', 'age'], 2],
    layout: line,
    paint: { 'line-color': '#5e6b63', 'line-width': 1.2, 'line-opacity': 0.55 },
  });
  map.addLayer({
    id: 'trail-yesterday',
    type: 'line',
    source: 'trails',
    filter: ['==', ['get', 'age'], 1],
    layout: line,
    paint: { 'line-color': '#3f8a68', 'line-width': 2.6, 'line-opacity': 0.7 },
  });
  map.addLayer({
    id: 'trail-today-glow',
    type: 'line',
    source: 'trails',
    filter: ['==', ['get', 'age'], 0],
    layout: line,
    paint: { 'line-color': '#8fd6a8', 'line-width': 12, 'line-blur': 8, 'line-opacity': 0.6 },
  });
  map.addLayer({
    id: 'trail-today',
    type: 'line',
    source: 'trails',
    filter: ['==', ['get', 'age'], 0],
    layout: line,
    paint: { 'line-color': '#2c7a55', 'line-width': 4.5 },
  });
}

export function updateTrails(map, points) {
  const src = map.getSource('trails');
  if (src) src.setData(buildTrails(points));
}
