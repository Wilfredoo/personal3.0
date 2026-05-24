import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── Page shell ─────────────────────────────────────────── */

export const Container = styled.div`
  min-height: 100vh;
  background: #080808;
  color: #9a9088;
  font-family: 'Georgia', 'Times New Roman', serif;
  line-height: 1.8;
`;

/* ─── Header ─────────────────────────────────────────────── */

export const Header = styled.header`
  max-width: 720px;
  margin: 0 auto;
  padding: 5rem 2rem 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 640px) {
    padding: 3.5rem 1.4rem 2.5rem;
  }
`;

export const HeaderContent = styled.div`
  animation: ${fadeUp} 0.5s ease-out;
`;

export const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 400;
  font-style: italic;
  color: #f0ebe4;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
`;

export const Byline = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  font-size: 0.68rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #383030;
  margin: 0;
`;

/* ─── Main content ───────────────────────────────────────── */

export const Main = styled.main`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 2rem 6rem;
  animation: ${fadeUp} 0.55s ease-out;

  @media (max-width: 640px) {
    padding: 0 1.4rem 4rem;
  }
`;

export const Section = styled.section`
  margin-top: 3.5rem;

  &:last-child { margin-bottom: 0; }
`;

export const Card = styled.div``;

/* ─── Section titles ─────────────────────────────────────── */

export const SectionTitle = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #c9a84c;
  margin: 0 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(201, 168, 76, 0.15);
`;

/* ─── Body text ──────────────────────────────────────────── */

export const Paragraph = styled.p`
  font-size: 1.02rem;
  color: #8a8278;
  line-height: 1.85;
  margin: 0 0 1.2rem;
  text-align: ${props => props.center ? 'center' : 'left'};

  &:last-child { margin-bottom: 0; }

  strong {
    color: #c0b8ae;
    font-weight: 600;
  }

  em { font-style: italic; }
`;

/* ─── Lists ──────────────────────────────────────────────── */

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.2rem;
`;

export const ListItem = styled.li`
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  font-size: 0.93rem;
  color: #6a6260;
  padding: 0.5rem 0 0.5rem 1.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  position: relative;
  line-height: 1.65;

  &::before {
    content: '—';
    position: absolute;
    left: 0;
    color: rgba(201, 168, 76, 0.35);
    font-size: 0.78rem;
    top: 0.55rem;
  }

  &:last-child { border-bottom: none; }
`;

/* ─── Collapsible ────────────────────────────────────────── */

export const CollapsibleCard = styled.div`
  margin-top: 1rem;
`;

export const CollapsibleButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #484040;
  text-align: left;
  transition: color 0.2s;

  span { flex: 1; }
  svg { flex-shrink: 0; }

  &:hover { color: #c9a84c; }
`;

export const CollapsibleContent = styled.div`
  border-left: 2px solid rgba(201, 168, 76, 0.18);
  padding: 1.2rem 0 0.8rem 1.5rem;
  margin-bottom: 0.5rem;
`;

/* ─── Password gate ──────────────────────────────────────── */

export const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 320px;
  margin-top: 0.5rem;
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const PasswordInput = styled.input`
  width: 100%;
  padding: 0.8rem 3rem 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  font-size: 0.95rem;
  color: #c8c0b6;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  transition: border-color 0.2s, background 0.2s;
  box-sizing: border-box;
  outline: none;

  &::placeholder { color: #2e2826; }

  &:focus {
    border-color: rgba(201, 168, 76, 0.4);
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #2e2826;
  display: flex;
  align-items: center;
  padding: 4px;
  transition: color 0.2s;

  &:hover { color: #7a7068; }
`;

export const SubmitButton = styled.button`
  align-self: flex-start;
  padding: 0.65rem 1.4rem;
  background: rgba(201, 168, 76, 0.08);
  border: 1px solid rgba(201, 168, 76, 0.32);
  border-radius: 4px;
  color: #c9a84c;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(201, 168, 76, 0.15);
    border-color: rgba(201, 168, 76, 0.55);
  }
`;

export const ErrorMessage = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  color: #a05050;
  font-size: 0.8rem;
  margin: 0;
  letter-spacing: 0.02em;
`;

/* ─── Contact ────────────────────────────────────────────── */

export const ContactCard = styled.div`
  padding: 2rem 0 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
`;

/* ─── Footer ─────────────────────────────────────────────── */

export const Footer = styled.footer`
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.04);

  p {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    font-size: 0.65rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #1e1a18;
    margin: 0;
  }
`;

/* ─── Idea board ─────────────────────────────────────────── */

export const IdeaBoardImage = styled.img`
  width: 75%;
  max-width: 480px;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 3px;
  opacity: 0.8;
  transform: rotate(-90deg);

  @media (max-width: 640px) {
    width: 100%;
    margin: -20px auto;
  }
`;

export const ImageCaption = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  text-align: center;
  font-style: italic;
  font-size: 0.72rem;
  color: #2e2826;
  margin-top: 0.8rem;
  letter-spacing: 0.08em;
`;
