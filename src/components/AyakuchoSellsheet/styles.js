import styled from 'styled-components';

const RED = '#8b1515';
const NAVY = '#1e3a8a';
const TAN = '#c4a06a';

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f2e8d8;
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
    color: #b0906a;
    text-decoration: none;
    transition: color 0.2s;
  }
  a:hover { color: ${RED}; }
  span { margin: 0 10px; color: #d4c0a0; }
`;

export const Title = styled.h1`
  font-size: clamp(2.4rem, 7vw, 4rem);
  font-weight: 900;
  color: ${RED};
  letter-spacing: -2px;
  line-height: 1;
  margin: 0 0 14px;
`;

export const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #8a6a4a;
  font-weight: 400;
  margin: 0 0 36px;
  line-height: 1.5;
  font-style: italic;
`;

export const VideoEmbed = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
  border-radius: 10px;
  margin: 0 0 48px;
  display: block;
  box-shadow: 0 8px 32px rgba(139, 21, 21, 0.12);
`;

export const StaticSection = styled.div`
  margin: 0 0 48px;

  h3 {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${TAN};
    margin: 0 0 14px;
  }
`;

export const Section = styled.div`
  border-top: 1px solid #d4b896;

  &:last-of-type { border-bottom: 1px solid #d4b896; }
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
  color: #4a2e18;
  text-align: left;
  font-family: inherit;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: color 0.2s;

  &:hover { color: ${RED}; }

  .chevron {
    font-size: 0.65rem;
    color: ${RED};
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
  color: #5c4030;
  margin: 0 0 10px;

  strong { color: #3d2518; font-weight: 600; }

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
  color: #5c4030;
  padding-left: 22px;
  position: relative;

  strong { color: #3d2518; font-weight: 600; }

  &::before {
    content: '—';
    position: absolute;
    left: 0;
    color: ${RED};
    font-weight: 700;
  }
`;

export const ContactLink = styled.a`
  color: ${NAVY};
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;

  &:hover { color: ${RED}; }
`;

export const ImageLink = styled(ContactLink)``;
export const VideoLink = styled(ContactLink)``;
export const WhatsAppLink = styled(ContactLink)``;
