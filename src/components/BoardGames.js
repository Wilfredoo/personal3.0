import React from 'react';

const games = [
  { href: 'https://www.ayakucho.com', title: 'Ayakucho', accent: '#e53e3e', external: true },
  { href: '/treecloudmountainsea', title: 'Tree Cloud Mountain Sea', accent: '#38bdf8' },
  { href: '/hostelparadiso', title: 'The Humbiverse', accent: '#a78bfa' },
];

function BoardGames() {
  return (
    <main style={styles.page}>
      <style>{`
        body { background: #fff; margin: 0; }

        .back-link {
          display: inline-block;
          margin-bottom: 56px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #bbb;
          text-decoration: none;
          transition: color 0.2s;
        }
        .back-link:hover { color: #111; }

        .game-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 32px 0;
          border-top: 1px solid #eee;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }
        .game-card:last-child { border-bottom: 1px solid #eee; }

        .game-title {
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 800;
          letter-spacing: -1px;
          margin: 0;
          color: #111;
          transition: color 0.2s;
        }
        .game-card:hover .game-title { color: var(--accent); }

        .game-arrow {
          font-size: 1.3rem;
          color: #ddd;
          flex-shrink: 0;
          transition: transform 0.25s, color 0.2s;
        }
        .game-card:hover .game-arrow {
          transform: translateX(6px);
          color: var(--accent);
        }
      `}</style>

      <a href="/" className="back-link">← Home</a>

      <h1 style={styles.heading}>Board Games</h1>

      <div style={{ marginTop: 48 }}>
        {games.map(game => (
          <a
            key={game.href}
            href={game.href}
            className="game-card"
            style={{ '--accent': game.accent }}
            {...(game.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
          >
            <span className="game-title">{game.title}</span>
            <span className="game-arrow">→</span>
          </a>
        ))}
      </div>
    </main>
  );
}

const styles = {
  page: {
    maxWidth: '780px',
    margin: '0 auto',
    padding: '60px 24px 100px',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  heading: {
    fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
    fontWeight: 700,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: '#bbb',
    margin: 0,
  },
};

export default BoardGames;
