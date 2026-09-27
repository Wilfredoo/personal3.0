import React from 'react';

const pageStyle = {
  maxWidth: '860px',
  margin: '0 auto',
  padding: '48px 20px 64px',
  lineHeight: 1.7,
  color: '#111827',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const h1Style = { fontSize: '2.2rem', margin: '0 0 0.75rem' };
const pStyle = { margin: '0.75rem 0' };

function TheExplorationMap() {
  return (
    <main style={pageStyle}>
      <p style={{ ...pStyle, marginBottom: '16px' }}>
        <a href="/apps" style={{ color: '#111827', textDecoration: 'none', fontWeight: 600 }}>← Apps</a>
        {'  '}·{'  '}
        <a href="/" style={{ color: '#111827', textDecoration: 'none', fontWeight: 600 }}>Home</a>
      </p>
      <h1 style={h1Style}>The Exploration Map</h1>
      <p style={pStyle}>
        A map that starts covered in fog. Wherever you go, it lifts, forever. No
        endless information, just the world you have discovered yourself,
        travelled by a little soulleaf.
      </p>
      <p style={pStyle}>
        <a
          href="/exploration-map/"
          style={{
            display: 'inline-block',
            marginTop: '8px',
            padding: '12px 24px',
            borderRadius: '999px',
            background: '#2c7a55',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Open the map (prototype)
        </a>
      </p>
      <p style={{ ...pStyle, fontSize: '0.9rem', color: '#6b7280' }}>
        On iPhone or iPad: open it in Safari, then Share → Add to Home Screen.
      </p>
    </main>
  );
}

export default TheExplorationMap;
