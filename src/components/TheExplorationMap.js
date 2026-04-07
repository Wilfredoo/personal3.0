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
      <p style={pStyle}>Coming soon.</p>
    </main>
  );
}

export default TheExplorationMap;
