// Read GPX files (exported from other tracking apps) into {lat, lng, t}.

export function parseGPX(text) {
  const doc = new DOMParser().parseFromString(text, 'application/xml');
  if (doc.querySelector('parsererror')) throw new Error('This file is not valid GPX');
  const nodes = doc.querySelectorAll('trkpt, rtept, wpt');
  const fixes = [];
  let fallbackT = 0;
  nodes.forEach((n) => {
    const lat = parseFloat(n.getAttribute('lat'));
    const lng = parseFloat(n.getAttribute('lon'));
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
    const timeEl = n.getElementsByTagName('time')[0];
    const t = timeEl ? Date.parse(timeEl.textContent) : NaN;
    // Points without a time are treated as very old, a second apart.
    fixes.push({ lat, lng, t: Number.isFinite(t) ? t : (fallbackT += 1000) });
  });
  return fixes.sort((a, b) => a.t - b.t);
}
