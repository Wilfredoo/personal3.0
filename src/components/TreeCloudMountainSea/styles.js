import styled from 'styled-components';

const SKY = '#0284c7';
const DEEP = '#0c4a6e';

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(170deg, #d6eaf8 0%, #e8f4fd 50%, #f4f9ff 100%);
`;

export const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 52px 24px 100px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const TopNav = styled.nav`
  margin-bottom: 48px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  a {
    color: #4a90b8;
    text-decoration: none;
    transition: color 0.2s;
  }
  a:hover { color: ${DEEP}; }
  span { margin: 0 10px; color: #a8d4ea; }
`;

export const Title = styled.h1`
  font-size: clamp(2.4rem, 7vw, 4rem);
  font-weight: 900;
  color: ${DEEP};
  letter-spacing: -2px;
  line-height: 1;
  margin: 0 0 14px;
`;

export const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #2a6a8a;
  font-weight: 400;
  margin: 0 0 16px;
  line-height: 1.5;
  font-style: italic;
`;

export const LangTabs = styled.div`
  display: inline-flex;
  gap: 4px;
  margin-bottom: 36px;
  padding: 4px;
  background: rgba(255,255,255,0.4);
  border-radius: 10px;
  backdrop-filter: blur(4px);
`;

export const LangTab = styled.button`
  padding: 7px 16px;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: 0.3px;
  transition: background 0.15s, color 0.15s;
  background: ${p => p.$active ? '#fff' : 'transparent'};
  color: ${p => p.$active ? DEEP : '#4a90b8'};
  box-shadow: ${p => p.$active ? '0 1px 4px rgba(0,0,0,0.12)' : 'none'};

  &:hover { color: ${DEEP}; }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
  margin: 0 0 44px;
  display: block;
  box-shadow: 0 8px 32px rgba(0,80,140,0.18);
`;

export const StaticSection = styled.div`
  margin: 0 0 44px;

  h3 {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #4a90b8;
    margin: 0 0 14px;
  }
`;

export const Section = styled.div`
  border-top: 1px solid rgba(12, 74, 110, 0.2);

  &:last-of-type { border-bottom: 1px solid rgba(12, 74, 110, 0.2); }
`;

export const SectionToggle = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${DEEP};
  text-align: left;
  font-family: inherit;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: color 0.2s;

  &:hover { color: ${SKY}; }

  .chevron {
    font-size: 0.65rem;
    color: ${SKY};
    transition: transform 0.2s;
    flex-shrink: 0;
  }

  &[aria-expanded='true'] .chevron { transform: rotate(180deg); }
`;

export const SectionBody = styled.div`
  padding: 4px 0 24px;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.85;
  color: #1e5f7a;
  margin: 0 0 10px;

  strong { color: ${DEEP}; font-weight: 600; }

  &:last-child { margin-bottom: 0; }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  line-height: 1.75;
  color: #1e5f7a;
  padding-left: 22px;
  position: relative;

  &::before {
    content: '—';
    position: absolute;
    left: 0;
    color: ${SKY};
    font-weight: 700;
  }
`;

export const ContactLink = styled.a`
  color: ${DEEP};
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;

  &:hover { color: ${SKY}; }
`;

export const GalleryRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin-top: 16px;
`;

export const SmallImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  cursor: zoom-in;
  transition: opacity 0.2s, transform 0.2s;
  box-shadow: 0 4px 16px rgba(0,80,140,0.12);

  &:hover { opacity: 0.88; transform: scale(1.01); }
`;

export const Spacer = styled.div`
  height: 20px;
`;

/* kept for backwards compat, unused */
export const LanguageSelect = styled.select``;
