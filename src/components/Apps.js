import React from 'react';

const pageStyle = {
  maxWidth: '860px',
  margin: '0 auto',
  padding: '48px 20px 64px',
  lineHeight: 1.7,
  color: '#111827',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'grid',
  gap: '14px',
  fontSize: '20px',
  fontWeight: 600,
};

function Apps() {
  return (
    <main style={pageStyle}>
      <style>{`
        .simple-links a {
          color: #111827;
          text-decoration: none;
        }
        .simple-links a:hover {
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-underline-offset: 4px;
        }
      `}</style>
      <div className="simple-links" style={{ marginBottom: '18px', fontSize: '16px', fontWeight: 600 }}>
        <a href="/">← Home</a>
      </div>
      <ul className="simple-links" style={listStyle}>
        <li>
          <a href="https://jobdirecto.com" target="_blank" rel="noopener noreferrer">
            Jobdirecto
          </a>
        </li>
        <li>
          <a href="/the-exploration-map">The exploration map</a>
        </li>
        <li>
          <a href="/decameron">Decameron</a>
        </li>
      </ul>
    </main>
  );
}

export default Apps;
