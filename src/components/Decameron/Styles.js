import React from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400&display=swap');

  .dec-root {
    --ink:   #111110;
    --mid:   #777772;
    --faint: #c4c4c0;
    --line:  #e8e8e4;
    --bg:    #ffffff;

    background: var(--bg);
    color: var(--ink);
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 18px;
    min-height: 100vh;
  }

  /* ── SINGLE COLUMN ── */
  .dec-page {
    margin: 0 auto;
    padding: 96px 32px 120px;
  }

  /* ── EPIGRAPH ── */
  .dec-epigraph {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--mid);
    margin-bottom: 12px;
  }

  .dec-attribution {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 300;
    color: var(--faint);
    letter-spacing: 0.04em;
    margin-bottom: 64px;
  }

  /* ── TITLE ── */
  .dec-title {
    font-family: 'EB Garamond', serif;
    font-size: clamp(2.6rem, 6vw, 4.5rem);
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.01em;
    color: var(--ink);
    margin-bottom: 20px;
  }

  /* ── STATUS ── */
  .dec-status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 300;
    color: var(--faint);
    letter-spacing: 0.03em;
  }

  .dec-status-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--faint);
    display: inline-block;
    animation: decPulse 3s infinite;
  }

  @keyframes decPulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.2; }
  }

  /* ── RULE ── */
  .dec-rule {
    border: none;
    border-top: 1px solid black;
    margin: 52px 0;
  }

  /* ── BODY TEXT ── */
  .dec-page p {
    font-size: 1.1rem;
    line-height: 1.85;
    color: var(--ink);
    margin-bottom: 1.4em;
  }

  .dec-page p:last-of-type { margin-bottom: 50px; }
  .dec-page em { font-style: italic; }

  /* ── PHONE MOCKUP ── */
  .dec-phone {
    width: 220px;
    height: 440px;
    background: #fff;
    border-radius: 28px;
    box-shadow:
      0 0 0 1px var(--line),
      0 0 0 8px var(--ink),
      0 24px 48px rgba(0,0,0,0.07);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin: 0;
      position: relative; /* add this */

  }

  .dec-phone-notch {
    width: 56px;
    height: 15px;
    background: var(--ink);
    border-radius: 0 0 8px 8px;
    margin: 0 auto;
  }

  .dec-phone-screen {
    flex: 1;
    padding: 16px 18px;
    overflow: hidden;
    position: relative;
  }

  .dec-phone-book-title {
    font-family: 'Inter', sans-serif;
    font-size: 0.55rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--mid);
    text-align: center;
    margin-bottom: 14px;
  }

  .dec-phone-text {
    font-family: 'EB Garamond', serif;
    font-size: 0.78rem;
    line-height: 1.85;
    color: var(--ink);
  }

  .dec-phone-highlight {
    background: #f2f2ee;
    position: relative;
  }

  .dec-phone-tooltip {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--ink);
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 0.52rem;
    font-weight: 300;
    padding: 6px 10px;
    white-space: nowrap;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    gap: 5px;
    z-index: 20;
  }

  .dec-phone-tooltip::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid var(--ink);
  }

  .dec-magic-icon {
    font-size: 0.6rem;
    opacity: 0.7;
  }

  .dec-magic-icon img {
    width: 11px;
    height: 11px;
    object-fit: contain;
    filter: invert(1);
    display: inline;
    vertical-align: middle;
  }

  .dec-magic-icon-inline {
    font-size: 0.75rem;
    color: var(--mid);
    margin-left: 2px;
  }


  /* ── PHONE PAIR ── */
.dec-phones {
  display: flex;
  gap: 28px;
  margin-bottom: 52px;
  align-items: flex-start;
}

@media (max-width: 640px) {
  .dec-phones {
    flex-direction: column;
    align-items: center;
  }
}

.dec-phone-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dec-phone-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.6rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--faint);
  text-align: center;
  margin-bottom: 10px;
}

.dec-phone-text-faded {
  color: #ccc;
}

/* ── EXPLANATION SHEET ── */
.dec-sheet {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  border-top: 1px solid var(--line);
  padding: 12px 16px 18px;
}

.dec-sheet-handle {
  width: 28px;
  height: 3px;
  background: var(--line);
  border-radius: 2px;
  margin: 0 auto 12px;
}

.dec-sheet-selected {
  font-family: 'EB Garamond', serif;
  font-size: 0.7rem !important;
  font-style: italic;
  color: var(--mid);
  border-left: 2px solid var(--line);
  padding-left: 8px;
  margin-bottom: 8px !important;
  line-height: 1.6;
}

.dec-sheet-divider {
  height: 1px;
  background: var(--line);
  margin: 8px 0;
}

.dec-sheet-explanation {
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem !important;
  font-weight: 300;
  color: var(--ink);
  line-height: 1.7;
  margin: 0 !important;
}

  /* ── HOW IT WORKS ── */
  .dec-how {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 52px;
  }

  .dec-how-step {
    display: flex;
    gap: 20px;
    align-items: baseline;
  }

  .dec-step-num {
    font-family: 'Inter', sans-serif;
    font-size: 0.6rem;
    font-weight: 300;
    color: var(--faint);
    letter-spacing: 0.05em;
    min-width: 16px;
    padding-top: 2px;
  }

  .dec-step-body {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--mid);
  }

  .dec-step-body strong {
    color: var(--ink);
    font-weight: 500;
    display: block;
    font-style: normal;
  }

  /* ── SCREENSHOTS ── */
  .dec-screenshot-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    align-items: end;
    margin-bottom: 0;
  }

  .dec-screenshot-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .dec-screenshot-frame {
    border-radius: 16px;
    overflow: hidden;
    box-shadow:
      0 0 0 1px var(--line),
      0 0 0 5px var(--ink),
      0 12px 32px rgba(0,0,0,0.06);
    aspect-ratio: 9 / 19;
    width: 100%;
    background: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dec-screenshot-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .dec-screenshot-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 16px;
    text-align: center;
    color: var(--faint);
  }

  .dec-screenshot-placeholder p {
    font-family: 'Inter', sans-serif;
    font-size: 0.55rem !important;
    font-weight: 300;
    letter-spacing: 0.06em;
    color: var(--faint) !important;
    text-transform: uppercase;
    line-height: 1.5;
    margin: 0 !important;
  }

  .dec-screenshot-caption {
    font-family: 'EB Garamond', serif;
    font-size: 0.85rem;
    font-style: italic;
    color: var(--faint);
    margin: 0 !important;
  }

  /* ── CONTACT ── */
  .dec-contact-line {
    color: black;
  }

  .dec-contact-line a {
    color: var(--ink);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: var(--line);
    transition: text-decoration-color 0.15s;
  }

  .dec-contact-line a:hover {
    text-decoration-color: var(--ink);
  }

  /* ── DEV NOTE ── */
  .dec-dev-note {
    font-family: 'Inter', sans-serif;
    font-size: 0.6rem !important;
    font-weight: 300;
    color: var(--faint) !important;
    border-left: 1px solid var(--line);
    padding-left: 12px;
    line-height: 1.7;
    margin-top: 8px !important;
  }

  .dec-dev-note code {
    font-family: monospace;
    font-size: 0.62rem;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 600px) {
    .dec-page { padding: 56px 24px 80px; }
    .dec-phone { width: 180px; height: 360px; }
    .dec-screenshot-grid { grid-template-columns: 1fr; max-width: 180px; margin: 0 auto; }
  }

  .text-body {
    margin-bottom: 15px;
}

`;


function Styles() {
  return <style>{css}</style>;
}

export default Styles;
