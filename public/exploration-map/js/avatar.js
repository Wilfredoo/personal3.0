// The soulleaf: part soul, part leaf. Replaces the usual GPS dot.

let uid = 0;

export function soulleafSVG() {
  const id = 'sl' + uid++;
  return `
<svg viewBox="0 0 64 84" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <radialGradient id="${id}-aura" cx="50%" cy="45%" r="50%">
      <stop offset="0%" stop-color="#e9fff0" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="#bff0cf" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#bff0cf" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${id}-leaf" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#9be3b0"/>
      <stop offset="55%" stop-color="#4fae7c"/>
      <stop offset="100%" stop-color="#2c7a55"/>
    </linearGradient>
  </defs>
  <ellipse class="aura" cx="32" cy="38" rx="31" ry="34" fill="url(#${id}-aura)"/>
  <path class="wisp" d="M32 62 C 27 68, 38 71, 33 78 C 31 81, 28 80, 29 77"
        fill="none" stroke="#dff7e7" stroke-width="2.4" stroke-linecap="round" opacity="0.9"/>
  <path d="M32 8 C 50 21, 54 45, 32 63 C 10 45, 14 21, 32 8 Z"
        fill="url(#${id}-leaf)" stroke="#23654a" stroke-width="1.2"/>
  <path d="M32 14 Q 30.5 36 32 58" fill="none" stroke="#dff7e7" stroke-width="1.2" opacity="0.7"/>
  <path d="M32 30 L 24 24 M32 40 L 41 33 M32 50 L 25 45" stroke="#dff7e7" stroke-width="0.9" opacity="0.45"/>
  <circle cx="27.5" cy="39" r="2.3" fill="#123826"/>
  <circle cx="36.5" cy="39" r="2.3" fill="#123826"/>
  <circle cx="28.2" cy="38.2" r="0.7" fill="#fff"/>
  <circle cx="37.2" cy="38.2" r="0.7" fill="#fff"/>
</svg>`;
}

export function createAvatarElement() {
  const el = document.createElement('div');
  el.className = 'soulleaf';
  el.innerHTML = `<div class="soulleaf-float">${soulleafSVG()}</div>`;
  return el;
}
