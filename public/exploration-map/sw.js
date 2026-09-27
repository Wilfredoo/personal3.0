// Offline support: keep the app and the map pieces you've seen.
// Stale-while-revalidate: answer from cache, refresh in the background.
const VERSION = 'v1';
const SHELL = `em-shell-${VERSION}`;
const TILES = 'em-tiles';
const MAX_TILES = 3000;

const SHELL_FILES = [
  '/exploration-map/',
  '/exploration-map/app.css',
  '/exploration-map/vendor/maplibre-gl.js',
  '/exploration-map/vendor/maplibre-gl.css',
  '/exploration-map/js/main.js',
  '/exploration-map/js/world.js',
  '/exploration-map/js/store.js',
  '/exploration-map/js/geo.js',
  '/exploration-map/js/fog.js',
  '/exploration-map/js/trails.js',
  '/exploration-map/js/avatar.js',
  '/exploration-map/js/gpx.js',
  '/exploration-map/manifest.webmanifest',
  '/exploration-map/icons/icon.svg',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(SHELL).then((c) => c.addAll(SHELL_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('em-shell-') && k !== SHELL).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function trim(cache) {
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - MAX_TILES; i++) await cache.delete(keys[i]);
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isShell = url.origin === location.origin && url.pathname.startsWith('/exploration-map/');
  const isMap = url.hostname.endsWith('openfreemap.org');
  if (!isShell && !isMap) return;

  const cacheName = isShell ? SHELL : TILES;
  e.respondWith(
    caches.open(cacheName).then(async (cache) => {
      const cached = await cache.match(req, { ignoreSearch: isShell });
      const network = fetch(req)
        .then((res) => {
          if (res.ok || res.type === 'opaque') {
            cache.put(req, res.clone());
            if (isMap && Math.random() < 0.02) trim(cache);
          }
          return res;
        })
        .catch(() => cached);
      if (cached) {
        e.waitUntil(network);
        return cached;
      }
      return network;
    })
  );
});
