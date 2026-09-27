// The fog: a canvas laid over the map. We paint the whole screen with fog,
// then erase soft holes wherever the explorer has been.

import * as geo from './geo.js';

const FOG_COLOR = 'rgba(212, 214, 212, 0.95)';
const TEXTURE_SIZE = 1024;
const MIN_HOLE_PX = 3; // keep tiny discoveries visible from far away

function makeSprite() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(0,0,0,1)');
  grad.addColorStop(0.5, 'rgba(0,0,0,1)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return c;
}

// Soft cloudy texture that tiles seamlessly.
function makeTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = TEXTURE_SIZE;
  const g = c.getContext('2d');
  let seed = 7;
  const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 260; i++) {
    const x = rand() * TEXTURE_SIZE;
    const y = rand() * TEXTURE_SIZE;
    const r = 30 + rand() * 220;
    const light = rand() > 0.5;
    const a = 0.03 + rand() * 0.06;
    for (const dx of [-TEXTURE_SIZE, 0, TEXTURE_SIZE]) {
      for (const dy of [-TEXTURE_SIZE, 0, TEXTURE_SIZE]) {
        const grad = g.createRadialGradient(x + dx, y + dy, 0, x + dx, y + dy, r);
        const rgb = light ? '250,251,250' : '150,156,158';
        grad.addColorStop(0, `rgba(${rgb},${a})`);
        grad.addColorStop(1, `rgba(${rgb},0)`);
        g.fillStyle = grad;
        g.fillRect(x + dx - r, y + dy - r, r * 2, r * 2);
      }
    }
  }
  return c;
}

export class Fog {
  constructor(map, world) {
    this.map = map;
    this.world = world;
    this.sprite = makeSprite();
    this.texture = makeTexture();
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'fog';
    // Inside the canvas container, right after the map, so markers sit on top.
    map.getCanvas().after(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.pattern = this.ctx.createPattern(this.texture, 'repeat');
    this.queued = false;

    const redraw = () => this.requestDraw();
    map.on('move', redraw);
    map.on('resize', redraw);
    world.onChange(redraw);
    this.requestDraw();
  }

  requestDraw() {
    if (this.queued) return;
    this.queued = true;
    requestAnimationFrame(() => {
      this.queued = false;
      this.draw();
    });
  }

  draw() {
    const { map, ctx, canvas } = this;
    const dpr = window.devicePixelRatio || 1;
    const container = map.getContainer();
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, w, h);

    // Fog base + texture pinned to the world so it drifts with the map.
    ctx.fillStyle = FOG_COLOR;
    ctx.fillRect(0, 0, w, h);
    // Two layers of the same texture at different scales hide the repetition.
    const origin = map.project([0, 0]);
    ctx.fillStyle = this.pattern;
    for (const scale of [1, 1.618]) {
      const t = TEXTURE_SIZE * scale;
      const ox = ((origin.x % t) + t) % t;
      const oy = ((origin.y % t) + t) % t;
      ctx.save();
      ctx.translate(ox, oy);
      ctx.scale(scale, scale);
      ctx.fillRect(-TEXTURE_SIZE, -TEXTURE_SIZE, w / scale + TEXTURE_SIZE * 2, h / scale + TEXTURE_SIZE * 2);
      ctx.restore();
    }

    // Holes.
    const lat = map.getCenter().lat;
    const mpp = geo.metersPerPixel(map.getZoom(), lat);
    let level = 0;
    while (level < geo.LEVELS - 1 && geo.cellSizeM(level) / mpp < 2.5) level++;
    const worldR = level === 0 ? geo.REVEAL_RADIUS_M : geo.cellSizeM(level) * 0.75;
    const r = Math.max(worldR / mpp, MIN_HOLE_PX) / 0.75; // sprite's solid core is 75%
    const size = r * 2;

    ctx.globalCompositeOperation = 'destination-out';
    const drawCenter = (c) => {
      const p = map.project(c);
      if (p.x < -r || p.y < -r || p.x > w + r || p.y > h + r) return;
      ctx.drawImage(this.sprite, p.x - r, p.y - r, size, size);
    };

    if (level < geo.LEVELS - 2) {
      const parentLevel = level + 2;
      const margin = geo.cellSizeM(parentLevel) / mpp + r;
      for (const [key, center] of this.world.levels[parentLevel]) {
        const p = map.project(center);
        if (p.x < -margin || p.y < -margin || p.x > w + margin || p.y > h + margin) continue;
        const kids = this.world.children[level].get(key);
        if (kids) kids.forEach(drawCenter);
      }
    } else {
      this.world.levels[level].forEach(drawCenter);
    }
    ctx.globalCompositeOperation = 'source-over';
  }
}
