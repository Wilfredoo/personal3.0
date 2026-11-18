import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const serif = `'Cormorant Garamond', 'Garamond', 'Georgia', serif`;
const sans = `'DM Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif`;

const ink = '#1d1b18';
const body = '#3a3631';
const muted = '#8a837a';
const accent = '#8a6a2e';
const rule = '#ddd6cb';
const paper = '#faf8f4';

/* ─── Page shell ─────────────────────────────────────────── */

export const Page = styled.div`
  min-height: 100vh;
  background: ${paper};
  color: ${body};
  font-family: ${sans};
  -webkit-font-smoothing: antialiased;
`;

export const Sheet = styled.main`
  max-width: 820px;
  margin: 0 auto;
  padding: 4.5rem 2.5rem 3rem;
  animation: ${fadeUp} 0.5s ease-out;

  @media (max-width: 640px) {
    padding: 2.5rem 1rem 2rem;
  }
`;

/* ─── Header ─────────────────────────────────────────────── */

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5rem;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid ${rule};

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
`;

export const Eyebrow = styled.p`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${accent};
  margin: 0 0 0.5rem;
`;

export const Title = styled.h1`
  font-family: ${serif};
  font-size: clamp(2.4rem, 7vw, 3.4rem);
  font-weight: 500;
  line-height: 1.05;
  color: ${ink};
  margin: 0;

  @media (min-width: 641px) {
    white-space: nowrap;
  }
`;

export const Subtitle = styled.p`
  font-family: ${serif};
  font-style: italic;
  font-size: 1.25rem;
  color: ${muted};
  margin: 0.35rem 0 0;
`;

export const Meta = styled.p`
  font-family: ${serif};
  font-size: 1.05rem;
  color: ${muted};
  margin: 0;
  max-width: 230px;
  text-align: right;

  @media (max-width: 640px) {
    max-width: none;
    text-align: left;
  }
`;

/* ─── Sketch ─────────────────────────────────────────────── */

export const Figure = styled.figure`
  margin: 2rem 0 0;
`;

export const Sketch = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 2 / 1;
  object-fit: cover;
  object-position: center 40%;

  @media (max-width: 640px) {
    aspect-ratio: 16 / 9;
  }
`;

export const Caption = styled.figcaption`
  font-family: ${serif};
  font-style: italic;
  font-size: 0.85rem;
  color: ${muted};
  text-align: right;
  margin-top: 0.4rem;
`;

/* ─── Text ───────────────────────────────────────────────── */

export const Logline = styled.blockquote`
  font-family: ${serif};
  font-size: clamp(1.25rem, 3.2vw, 1.5rem);
  line-height: 1.55;
  color: ${ink};
  margin: 1.6rem 0 2rem;
  padding: 0.2rem 0 0.2rem 1.4rem;
  border-left: 2px solid ${ink};

  @media (max-width: 640px) {
    padding-left: 1rem;
  }
`;

export const Synopsis = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  margin: 0 0 2rem;

  em {
    font-family: ${serif};
    font-size: 1.08em;
  }
`;

/* ─── Status rows ────────────────────────────────────────── */

export const Status = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0.6rem;
  border-top: 1px solid ${rule};
  border-bottom: 1px solid ${rule};
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 2.5rem;
  font-size: 0.92rem;

  @media (max-width: 640px) {
    flex-direction: column;
    padding: 1rem 0;
  }
`;

export const StatusItem = styled.li`
  color: ${ink};

  span { color: ${muted}; }
`;

/* ─── Bottom row: open to + contact ──────────────────────── */

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  margin-top: 1.4rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Label = styled.p`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${accent};
  margin: 0 0 0.6rem;
`;

export const Tags = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.li`
  font-size: 0.88rem;
  padding: 0.3rem 0.65rem;
  border: 1px solid ${({ $primary }) => ($primary ? accent : rule)};
  color: ${({ $primary }) => ($primary ? accent : muted)};
  border-radius: 3px;
`;

export const Contact = styled.div`
  text-align: right;
  flex-shrink: 0;

  @media (max-width: 640px) {
    text-align: left;
  }
`;

export const ContactName = styled.p`
  font-family: ${serif};
  font-size: 1.3rem;
  color: ${ink};
  margin: 0;
`;

export const ContactEmail = styled.a`
  font-size: 0.92rem;
  color: ${muted};
  text-decoration: none;

  &:hover { color: ${accent}; }
`;

/* ─── Script download ────────────────────────────────────── */

export const ScriptBox = styled.section`
  margin-top: 2.6rem;
  padding: 1.6rem;
  background: #f2eee6;
  border-radius: 4px;

  @media (max-width: 640px) {
    padding: 1.2rem 1rem;
  }
`;

export const ScriptTitle = styled.h2`
  font-family: ${serif};
  font-size: 1.5rem;
  font-weight: 500;
  color: ${ink};
  margin: 0 0 0.3rem;
`;

export const ScriptNote = styled.p`
  font-size: 0.92rem;
  color: ${muted};
  margin: 0 0 1rem;

  a { color: ${accent}; }
`;

export const ScriptForm = styled.form`
  display: flex;
  gap: 0.6rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const PasswordInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-family: ${sans};
  font-size: 1rem;
  padding: 0.7rem 2.8rem 0.7rem 0.85rem;
  border: 1px solid ${rule};
  border-radius: 3px;
  background: ${paper};
  color: ${ink};

  &:focus {
    outline: none;
    border-color: ${accent};
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0.3rem;
  cursor: pointer;
  color: ${muted};
  display: flex;
`;

export const DownloadButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: ${sans};
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 3px;
  background: ${ink};
  color: ${paper};
  cursor: pointer;

  &:hover { background: ${accent}; }
  &:disabled { opacity: 0.6; cursor: wait; }
`;

export const ErrorMessage = styled.p`
  font-size: 0.88rem;
  color: #a0402f;
  margin: 0.6rem 0 0;
`;

export const Copyright = styled.p`
  font-size: 0.78rem;
  color: ${muted};
  text-align: center;
  margin: 3rem 0 0;
`;
