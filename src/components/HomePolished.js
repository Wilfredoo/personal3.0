// HomePolished.js — Option A: same concept, state-of-the-art execution
import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import picture1 from '../assets/images/picture_1.png';
import picture2 from '../assets/images/picture_2.png';
import WhatImUpTo from './WhatImUpTo';
import Services from './Services';

/* ─── Animations ─────────────────────────────────────────── */

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shake = keyframes`
  0%,100% { transform: rotate(0deg) scale(1); }
  20%      { transform: rotate(-2.5deg) scale(1.02); }
  40%      { transform: rotate(2.5deg) scale(1.02); }
  60%      { transform: rotate(-1.5deg) scale(1.01); }
  80%      { transform: rotate(1.5deg) scale(1.01); }
`;

const toastIn = keyframes`
  from { opacity: 0; transform: translateX(-50%) translateY(10px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
`;

/* ─── Layout ─────────────────────────────────────────────── */

const Page = styled.div`
  min-height: 100vh;
  background: #FDF4F5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Lunasima', sans-serif;
  padding: 2rem;
  box-sizing: border-box;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;
  animation: ${fadeUp} 0.5s ease-out;

  @media (max-width: 580px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

/* ─── Photo ──────────────────────────────────────────────── */

const Photo = styled.img`
  width: 110px;
  height: 110px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  border: 2px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.09);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  animation: ${props => props.$shaking ? css`${shake} 0.55s ease` : 'none'};

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);
  }
`;

/* ─── Right column ───────────────────────────────────────── */

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 580px) {
    align-items: center;
  }
`;


const NavLink = styled.button`
  background: none;
  border: none;
  font-family: 'Lunasima', sans-serif;
  font-size: 1.75rem;
  color: #222;
  cursor: pointer;
  padding: 0.15rem 0;
  text-align: left;
  position: relative;
  width: fit-content;
  line-height: 1.45;
  transition: color 0.2s;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1.5px;
    background: #222;
    transition: width 0.28s ease;
  }

  &:hover { color: #000; }
  &:hover::after { width: 100%; }

  @media (max-width: 580px) {
    font-size: 1.5rem;
    &::after { display: none; }
  }
`;

/* ─── Content / back ─────────────────────────────────────── */

const ContentArea = styled.div`
  animation: ${fadeUp} 0.4s ease-out;
  width: 100%;
  max-width: 600px;
`;

const BackBtn = styled.button`
  background: none;
  border: none;
  font-family: 'Lunasima', sans-serif;
  font-size: 0.82rem;
  color: #aaa;
  cursor: pointer;
  padding: 0;
  margin-top: 2.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.15s;

  &:hover { color: #333; }
`;

/* ─── Toast ──────────────────────────────────────────────── */

const Toast = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: #1c1c1c;
  color: #e8e8e8;
  font-family: 'Lunasima', sans-serif;
  font-size: 0.82rem;
  line-height: 1.55;
  padding: 0.7rem 1.5rem;
  border-radius: 999px;
  max-width: min(460px, 90vw);
  text-align: center;
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.22);
  z-index: 999;
  animation: ${toastIn} 0.3s ease-out;
`;

/* ─── Component ──────────────────────────────────────────── */

const HomePolished = () => {
  const [photo] = useState(() => Math.random() < 0.5 ? picture1 : picture2);
  const [view, setView] = useState(null);
  const [shaking, setShaking] = useState(false);
  const [toast, setToast] = useState(null);

  const handlePhotoClick = () => {
    navigator.clipboard.writeText('inbox@wilfredocasas.com')
      .then(() => {
        setToast('inbox@wilfredocasas.com copied to clipboard');
        setTimeout(() => setToast(null), 3500);
      })
      .catch(() => {});
    if (navigator.vibrate) navigator.vibrate(400);
    setShaking(true);
    setTimeout(() => setShaking(false), 600);
  };

  return (
    <Page>
      {view ? (
        <ContentArea>
          {view === 'up-to' ? <WhatImUpTo /> : <Services />}
          <BackBtn onClick={() => setView(null)}>← back</BackBtn>
        </ContentArea>
      ) : (
        <Card>
          <Photo
            src={photo}
            alt="Wilfredo Casas"
            $shaking={shaking}
            onClick={handlePhotoClick}
            title="Click to copy email"
          />
          <Right>
            <NavLink onClick={() => setView('up-to')}>What I'm Up To</NavLink>
            <NavLink onClick={() => setView('work')}>Work with me</NavLink>
          </Right>
        </Card>
      )}
      {toast && <Toast>{toast}</Toast>}
    </Page>
  );
};

export default HomePolished;
