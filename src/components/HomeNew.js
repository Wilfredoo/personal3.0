// HomeNew.js — Option B: completely different, editorial / film-director aesthetic
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import picture1 from '../assets/images/picture_1.png';
import picture2 from '../assets/images/picture_2.png';
import WhatImUpTo from './WhatImUpTo';
import Services from './Services';

/* ─── Animations ─────────────────────────────────────────── */

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-16px); }
  to   { opacity: 1; transform: translateX(0); }
`;

/* ─── Page shell ─────────────────────────────────────────── */

const Page = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  display: flex;
  font-family: 'Montserrat', 'Helvetica Neue', sans-serif;
  animation: ${fadeIn} 0.6s ease-out;
  position: relative;
`;

/* ─── Left: photo panel ──────────────────────────────────── */

const PhotoPanel = styled.div`
  width: 38%;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Photo = styled.img`
  width: 200px;
  height: 260px;
  object-fit: cover;
  object-position: center top;
  display: block;
  border-radius: 4px;
  opacity: 0.75;
  filter: grayscale(10%);
`;

const PhotoEdge = styled.div``;

/* ─── Right: content panel ───────────────────────────────── */

const ContentPanel = styled.div`
  margin-left: 38%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 5rem 4rem 4rem;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 3rem 2.5rem 3rem 3rem;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 3rem 1.8rem;
    justify-content: flex-start;
    padding-top: 5rem;
  }
`;

const Role = styled.div`
  font-size: 0.65rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #2e2e2e;
  margin-bottom: 3rem;
  font-weight: 700;
`;

/* ─── Nav rows ───────────────────────────────────────────── */

const NavList = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavRow = styled.button`
  background: none;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.1rem, 2.2vw, 1.65rem);
  font-weight: 600;
  color: #3a3a3a;
  cursor: pointer;
  padding: 1.2rem 0;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: color 0.2s;
  letter-spacing: -0.01em;

  &:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  &:hover { color: #ffffff; }
`;

const Arrow = styled.span`
  font-size: 1.1rem;
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.2s, transform 0.2s;

  ${NavRow}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

/* ─── Content view ───────────────────────────────────────── */

const ContentView = styled.div`
  animation: ${slideIn} 0.38s ease-out;
`;

const ContentLabel = styled.div`
  font-size: 0.65rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #c9a84c;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

/* override shared component styles for dark background */
const DarkWrapper = styled.div`
  p {
    color: #888;
    font-size: 1rem;
    line-height: 1.8;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
  a {
    color: #c9a84c;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
  /* hide TextContainer margins that assume light layout */
  > div { margin: 0 !important; text-align: left !important; }
`;

const BackBtn = styled.button`
  background: none;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #3a3a3a;
  cursor: pointer;
  padding: 0;
  margin-bottom: 2.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.15s;

  &:hover { color: #fff; }
`;

/* ─── Footer ─────────────────────────────────────────────── */

const FooterMark = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2.5rem;
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #222;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;

  @media (max-width: 768px) { display: none; }
`;

/* ─── Component ──────────────────────────────────────────── */

const HomeNew = () => {
  const [photo] = useState(() => Math.random() < 0.5 ? picture1 : picture2);
  const [view, setView] = useState(null);

  return (
    <Page>
      {/* Fixed left photo */}
      <PhotoPanel>
        <Photo src={photo} alt="Wilfredo Casas" />
        <PhotoEdge />
      </PhotoPanel>

      {/* Scrollable right content */}
      <ContentPanel>
        {view ? (
          <ContentView>
            <BackBtn onClick={() => setView(null)}>← Back</BackBtn>
            <ContentLabel>
              {view === 'up-to' ? "What I'm Up To" : 'Work with me'}
            </ContentLabel>
            <DarkWrapper>
              {view === 'up-to' ? <WhatImUpTo /> : <Services />}
            </DarkWrapper>
          </ContentView>
        ) : (
          <>
            <Role>Filmmaker</Role>

            <NavList>
              <NavRow onClick={() => setView('up-to')}>
                What I'm Up To
                <Arrow>→</Arrow>
              </NavRow>
              <NavRow onClick={() => setView('work')}>
                Work with me
                <Arrow>→</Arrow>
              </NavRow>
            </NavList>
          </>
        )}
      </ContentPanel>

      <FooterMark>wilfredocasas.com</FooterMark>
    </Page>
  );
};

export default HomeNew;
