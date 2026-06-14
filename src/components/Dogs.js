import React from 'react';
import { packs, dogCount, intro, introSub } from './dogsData';

// BRUTALISM — a notch louder.
// Monospace, hard black rules, uppercase, inverted place bars. Raw and
// structural without tipping into the oversized first draft.
function Dogs() {
  return (
    <main className="dogs-root">
      <style>{`
        html, body { margin: 0; background: #fff; }

        .dogs-root {
          max-width: 680px;
          margin: 0 auto;
          padding: 40px 24px 140px;
          color: #000;
          font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
        }

        .dogs-back {
          display: inline-block;
          margin-bottom: 40px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #000;
          text-decoration: none;
          border: 2px solid #000;
          padding: 5px 11px;
        }
        .dogs-back:hover { background: #000; color: #fff; }

        .dogs-head {
          border-top: 4px solid #000;
          border-bottom: 4px solid #000;
          padding: 20px 0;
        }
        .dogs-title {
          margin: 0;
          font-size: clamp(1.8rem, 6vw, 2.6rem);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 0.95;
        }
        .dogs-sub {
          margin: 10px 0 0;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .dogs-intro {
          margin: 24px 0 8px;
          font-size: 13px;
          line-height: 1.7;
          max-width: 58ch;
        }

        .pack {
          margin-top: 48px;
        }
        .pack-place {
          margin: 0 0 4px;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding-bottom: 10px;
          border-bottom: 2px solid #000;
        }

        .dog-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          padding: 12px 0;
          border-bottom: 1px solid #ccc;
        }

        .dog-name {
          font-size: 1.1rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.01em;
        }
        .dog-meta {
          font-size: 12px;
          text-transform: uppercase;
          text-align: right;
          white-space: nowrap;
        }

        .pack-note {
          margin: 12px 0 0;
          font-size: 12px;
          line-height: 1.6;
          color: #555;
        }
      `}</style>

      <a href="/" className="dogs-back">← Back</a>

      <div className="dogs-head">
        <h1 className="dogs-title">Dogs I've Cared For</h1>
        <p className="dogs-sub">{dogCount} dogs / {packs.length} homes</p>
      </div>

      <p className="dogs-intro">{intro}</p>
      <p className="dogs-intro">{introSub}</p>

      {packs.map((pack, i) => (
        <section className="pack" key={i}>
          <p className="pack-place">
            <span>{pack.place}</span>
            {pack.year && <span>{pack.year}</span>}
          </p>

          {pack.dogs.map((dog, j) => (
            <div className="dog-row" key={j}>
              <span className="dog-name">{dog.name}</span>
              <span className="dog-meta">
                {dog.breed}{dog.age ? ` / ${dog.age}YR` : ''}
              </span>
            </div>
          ))}

          {pack.note && <p className="pack-note">{pack.note}</p>}
        </section>
      ))}
    </main>
  );
}

export default Dogs;
