// FilmEquipmentStyles.js
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 6px rgba(201, 168, 76, 0.25); }
  50%       { box-shadow: 0 0 18px rgba(201, 168, 76, 0.6); }
`;

/* ─── Layout ─────────────────────────────────────────────── */

export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #000000;
`;

export const EquipmentContainer = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  padding: 3.5rem 3rem;
  background: #000000;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  color: #e0e0e0;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-top: 1px solid rgba(201, 168, 76, 0.35);
  animation: ${fadeIn} 0.55s ease-out;
  position: relative;
  overflow: hidden;

  /* subtle top glow */
  &::before {
    content: '';
    position: absolute;
    top: -120px;
    left: 50%;
    transform: translateX(-50%);
    width: 700px;
    height: 320px;
    background: radial-gradient(ellipse at center, rgba(201, 168, 76, 0.05) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  & > * { position: relative; z-index: 1; }

  @media (max-width: 640px) {
    margin: 0.75rem;
    padding: 2rem 1.4rem;
  }
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.08), transparent);
  margin: 2.8rem 0;
`;

/* ─── Header ─────────────────────────────────────────────── */

export const EquipmentHeader = styled.h2`
  font-size: 2.7rem;
  text-align: center;
  margin-bottom: 0.4rem;
  color: #ffffff;
  letter-spacing: -0.03em;
  font-weight: 700;
  line-height: 1.1;

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #444;
  font-size: 0.78rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin: 0 0 2rem;
`;

/* ─── Location ───────────────────────────────────────────── */

export const LocationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
`;

export const LocationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: rgba(201, 168, 76, 0.08);
  border: 1px solid rgba(201, 168, 76, 0.4);
  color: #c9a84c;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 0.38rem 0.95rem;
  border-radius: 999px;
  animation: ${pulseGlow} 3.5s ease infinite;
`;

export const HomeBase = styled.span`
  color: #3a3a3a;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
`;

/* ─── Language select ────────────────────────────────────── */

export const LanguageSelect = styled.select`
  display: block;
  margin: 0 auto 2rem;
  padding: 0.5rem 1.4rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: #000;
  color: #555;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Montserrat', sans-serif;
  appearance: none;
  text-align: center;

  &:hover {
    color: #ccc;
    border-color: rgba(255, 255, 255, 0.28);
  }

  &:focus {
    outline: none;
    color: #fff;
    border-color: rgba(201, 168, 76, 0.45);
  }

  option {
    background: #0d0d0d;
    color: #bbb;
    letter-spacing: 0.04em;
  }
`;

/* ─── Section titles ─────────────────────────────────────── */

export const SectionTitle = styled.h3`
  font-size: 0.68rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #c9a84c;
  margin: 2.8rem 0 1.2rem;
  padding-bottom: 0.45rem;
  border-bottom: 1px solid rgba(201, 168, 76, 0.15);
  font-weight: 700;
`;

/* ─── Equipment list ─────────────────────────────────────── */

export const EquipmentList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
`;

export const EquipmentItem = styled.li`
  font-size: 0.93rem;
  padding: 0.65rem 0 0.65rem 1.1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  color: #777;
  line-height: 1.6;
  position: relative;
  transition: color 0.15s;

  &::before {
    content: '—';
    position: absolute;
    left: 0;
    color: rgba(201, 168, 76, 0.35);
    font-size: 0.75rem;
    top: 0.72rem;
  }

  &:hover { color: #bbb; }

  &:last-child { border-bottom: none; }
`;

/* ─── Videos ─────────────────────────────────────────────── */

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 1rem;
`;

export const VideoEmbed = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 6px;
  background: #000;
  border: 1px solid rgba(255,255,255,0.05);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const VideoLabel = styled.p`
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #363636;
  text-align: center;
  margin: 0.6rem 0 0;
`;

/* ─── Skills ─────────────────────────────────────────────── */

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
  margin-bottom: 1rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled.div`
  padding: 1.1rem 1.2rem;
  background: rgba(255, 255, 255, 0.018);
  border: 1px solid rgba(255, 255, 255, 0.055);
  border-left: 2px solid rgba(201, 168, 76, 0.45);
  border-radius: 0 6px 6px 0;
  transition: background 0.2s, border-left-color 0.2s;

  &:hover {
    background: rgba(201, 168, 76, 0.04);
    border-left-color: rgba(201, 168, 76, 0.8);
  }
`;

export const SkillCardTitle = styled.div`
  font-size: 0.78rem;
  font-weight: 700;
  color: #d8d8d8;
  letter-spacing: 0.04em;
  margin-bottom: 0.35rem;
`;

export const SkillCardDesc = styled.div`
  font-size: 0.8rem;
  color: #555;
  line-height: 1.55;
`;

/* ─── Contact / Info ─────────────────────────────────────── */

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  padding: 0.5rem 0;
`;

export const PriceStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

export const PriceAmount = styled.span`
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.04em;
  line-height: 1;
`;

export const PriceNote = styled.span`
  font-size: 0.72rem;
  color: #444;
  text-transform: uppercase;
  letter-spacing: 0.12em;
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.6rem;
  background: rgba(201, 168, 76, 0.08);
  border: 1px solid rgba(201, 168, 76, 0.38);
  border-radius: 999px;
  color: #c9a84c;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background: rgba(201, 168, 76, 0.16);
    border-color: rgba(201, 168, 76, 0.65);
    color: #e8c86a;
    transform: translateY(-1px);
  }
`;

