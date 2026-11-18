import styled from 'styled-components';

const VIOLET = '#6d28d9';
const GRAPE = '#3b0764';
const GOLD = '#d97706';

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #fef3c7;
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
    color: #b8882a;
    text-decoration: none;
    transition: color 0.2s;
  }
  a:hover { color: ${VIOLET}; }
  span { margin: 0 10px; color: #f0d080; }
`;

export const Title = styled.h1`
  font-size: clamp(2.4rem, 7vw, 4rem);
  font-weight: 900;
  color: ${GRAPE};
  letter-spacing: -2px;
  line-height: 1;
  margin: 0 0 14px;
`;

export const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #92610a;
  font-weight: 400;
  margin: 0 0 36px;
  line-height: 1.5;
  font-style: italic;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
  margin: 0 0 44px;
  display: block;
  box-shadow: 0 8px 40px rgba(109, 40, 217, 0.2);
`;

export const StaticSection = styled.div`
  margin: 0 0 44px;

  h3 {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${GOLD};
    margin: 0 0 14px;
  }
`;

export const Section = styled.div`
  border-top: 1px solid #fbd96a;

  &:last-of-type { border-bottom: 1px solid #fbd96a; }
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
  color: ${GRAPE};
  text-align: left;
  font-family: inherit;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: color 0.2s;

  &:hover { color: ${VIOLET}; }

  .chevron {
    font-size: 0.65rem;
    color: ${VIOLET};
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
  color: #5c3d0a;
  margin: 0 0 10px;

  strong { color: ${GRAPE}; font-weight: 600; }

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
  color: #5c3d0a;
  padding-left: 22px;
  position: relative;

  strong { color: ${GRAPE}; font-weight: 600; }

  &::before {
    content: '—';
    position: absolute;
    left: 0;
    color: ${VIOLET};
    font-weight: 700;
  }
`;

export const ContactLink = styled.a`
  color: ${VIOLET};
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;

  &:hover { color: ${GRAPE}; }
`;

export const WhatsAppLink = styled(ContactLink)``;

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
  box-shadow: 0 4px 16px rgba(109,40,217,0.15);

  &:hover { opacity: 0.88; transform: scale(1.01); }
`;

export const RotatedSmallImage = styled(SmallImage)`
  transform: rotate(180deg);
  &:hover { opacity: 0.88; transform: rotate(180deg) scale(1.01); }
`;
