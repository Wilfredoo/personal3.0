// Tiny IndexedDB wrapper. Everything stays on this device.
//
// Stores:
//   meta   – key/value (birth date, settings)
//   points – every recorded position {lat, lng, t}
//   cells  – discovered level-0 cells {k, t}
//   dwell  – seconds spent per ~180 m cell {k, s}

const DB_NAME = 'exploration-map';
const DB_VERSION = 1;

let dbPromise;

function open() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      db.createObjectStore('meta');
      db.createObjectStore('points', { autoIncrement: true });
      db.createObjectStore('cells', { keyPath: 'k' });
      db.createObjectStore('dwell', { keyPath: 'k' });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}

function done(tx) {
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = tx.onabort = () => reject(tx.error);
  });
}

export async function getAll(store) {
  const db = await open();
  return new Promise((resolve, reject) => {
    const req = db.transaction(store).objectStore(store).getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function getMeta(key) {
  const db = await open();
  return new Promise((resolve, reject) => {
    const req = db.transaction('meta').objectStore('meta').get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function setMeta(key, value) {
  const db = await open();
  const tx = db.transaction('meta', 'readwrite');
  tx.objectStore('meta').put(value, key);
  return done(tx);
}

// Write a batch of changes in one transaction.
export async function write({ points = [], cells = [], dwell = [] }) {
  if (!points.length && !cells.length && !dwell.length) return;
  const db = await open();
  const tx = db.transaction(['points', 'cells', 'dwell'], 'readwrite');
  const p = tx.objectStore('points');
  const c = tx.objectStore('cells');
  const d = tx.objectStore('dwell');
  points.forEach((x) => p.add(x));
  cells.forEach((x) => c.put(x));
  dwell.forEach((x) => d.put(x));
  return done(tx);
}

export async function persist() {
  // Ask the browser not to evict our data under storage pressure.
  try {
    if (navigator.storage && navigator.storage.persist) await navigator.storage.persist();
  } catch (_) {}
}
