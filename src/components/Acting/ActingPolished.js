// ActingPolished.js — Option A: same bold energy, properly controlled
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import wilfredo1  from '../../assets/images/wilfredo_1.png';
import wilfredo2  from '../../assets/images/wilfredo_2.png';
import wilfredo3  from '../../assets/images/wilfredo_3.png';
import wilfredo4  from '../../assets/images/wilfredo_4.jpeg';
import wilfredo5  from '../../assets/images/wilfredo_5.jpeg';
import wilfredo8  from '../../assets/images/wilfredo_8.jpg';
import wilfredo14 from '../../assets/images/wilfredo_14.jpg';
import wilfredo15 from '../../assets/images/wilfredo_15.jpg';
import wilfredo17 from '../../assets/images/wilfredo_17.jpg';
import wilfredo19 from '../../assets/images/wilfredo_19.jpg';
import wilfredo22 from '../../assets/images/wilfredo_22.jpg';
import wilfredo24 from '../../assets/images/wilfredo_24.jpg';
import wilfredo30 from '../../assets/images/wilfredo_30.jpg';
import wilfredo31 from '../../assets/images/wilfredo_31.png';
import wilfredo32 from '../../assets/images/wilfredo_32.png';
import wilfredo40 from '../../assets/images/wilfredo_40.png';
import wilfredo41 from '../../assets/images/wilfredo_41.png';
import wilfredo42 from '../../assets/images/wilfredo_42.png';

const photos = [
  wilfredo1, wilfredo2, wilfredo40, wilfredo41, wilfredo14, wilfredo42,
  wilfredo3, wilfredo22, wilfredo4, wilfredo5, wilfredo8, wilfredo15,
  wilfredo17, wilfredo19, wilfredo24, wilfredo30, wilfredo31, wilfredo32,
];

const ACCESS_PASSWORD    = 'gingertea';
const ACCESS_STORAGE_KEY = 'acting_page_unlocked';

const texts = {
  EN: {
    line1em: 'INDIGENOUS', line1post: ' Actor',
    line2pre: 'with ', line2em: 'IMPROVISATIONAL', line2post: ' Skills',
    line3pre: 'and a ', line3em: 'WIDE', line3post: ' Acting Range.',
    declPre: 'Looking for',
    declMain: 'Looking for Challenging Roles.',
    lastJobLabel: 'Last Job',
    lastJob: 'First Love (Pierwsza Miłość) — Prisoner 2 — ATM Grupa / Polsat — Feb 2026',
    nextJobLabel: 'Next Job',
    nextJob: 'The Human Experience — The Human Tiger — Dir. Natalie McMahon — June 2026',
    resumeButton: 'Download Acting Resume',
    reelText: 'Film acting jobs from 2025 — short films in Berlin, Aachen and Cologne. Material of 2026 coming soon.',
    agenciesLabel: 'Collaborations (non-exclusive)',
    moreLinks: 'More Links',
    moreAbout: 'More About Me',
    directContact: 'Signal · Telegram · WhatsApp: +491757025622',
    info: [
      'Height: 175 cm',
      'Build: Athletic',
      'Appearance: Indigenous Peruvian / Hispanic',
      'Languages: German, English, Spanish, Quechua, DGS',
      'Sports: Parkour, Martial Arts',
      'Dance: Contemporary, Improvisational, Salsa, Tango, Ballet',
      "Driver's License: B (EU)",
      'Location: Berlin-based — open to work anywhere.',
    ],
    toggleBtn: 'Zur deutschen Version',
  },
  DE: {
    line1em: 'INDIGENER', line1post: ' Schauspieler',
    line2pre: 'mit ', line2em: 'IMPROVISATIONS­FÄHIGKEITEN', line2post: '',
    line3pre: 'und ', line3em: 'BREITER', line3post: ' schauspielerischer Bandbreite.',
    declPre: 'Auf der Suche nach',
    declMain: 'Herausfordernden Rollen.',
    lastJobLabel: 'Letzter Job',
    lastJob: 'First Love (Pierwsza Miłość) — Prisoner 2 — ATM Grupa / Polsat — Feb 2026',
    nextJobLabel: 'Nächster Job',
    nextJob: 'The Human Experience — The Human Tiger — Regie: Natalie McMahon — Juni 2026',
    resumeButton: 'Schauspiel-Lebenslauf herunterladen',
    reelText: 'Kurzfilme aus 2025 in Berlin, Aachen und Köln. Material aus 2026 folgt.',
    agenciesLabel: 'Agentur-Kooperationen (nicht exklusiv)',
    moreLinks: 'Mehr Links',
    moreAbout: 'Mehr über mich',
    directContact: 'Signal · Telegram · WhatsApp: +491757025622',
    info: [
      'Größe: 175 cm',
      'Körperbau: Athletisch',
      'Erscheinungsbild: Indigen Peruanisch / Hispanisch',
      'Sprachen: Deutsch, Englisch, Spanisch, Quechua, DGS',
      'Sport: Parkour, Kampfsport',
      'Tanz: Zeitgenössisch, Improvisation, Salsa, Tango, Ballett',
      'Führerschein: B (EU)',
      'Standort: Berlin — weltweit einsetzbar.',
    ],
    toggleBtn: 'English version',
  },
};

/* ─── Animations ─────────────────────────────────────────── */

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── Layout ─────────────────────────────────────────────── */

const Page = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  color: #e8e4e0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`;

const Inner = styled.div`
  max-width: 620px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
  animation: ${fadeUp} 0.5s ease-out;
`;

/* ─── Gate ───────────────────────────────────────────────── */

const GateWrap = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const GateBox = styled.div`
  width: 100%;
  max-width: 380px;
  padding: 2.5rem 2rem;
  border: 1px solid rgba(255,255,255,0.08);
  border-top: 2px solid #e63946;
  border-radius: 6px;
  background: #111;
  text-align: center;
`;

const GateTitle = styled.h2`
  font-size: 0.68rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #e63946;
  margin: 0 0 1.2rem;
  font-weight: 700;
`;

const GateText = styled.p`
  color: #555;
  font-size: 0.85rem;
  line-height: 1.6;
  margin: 0 0 1rem;
`;

const GateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

const GateInput = styled.input`
  padding: 0.75rem 1rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 4px;
  color: #e8e4e0;
  font-size: 0.95rem;
  outline: none;
  &:focus { border-color: rgba(230,57,70,0.5); }
  &::placeholder { color: #333; }
`;

const GateButton = styled.button`
  padding: 0.7rem;
  background: rgba(230,57,70,0.1);
  border: 1px solid rgba(230,57,70,0.4);
  border-radius: 4px;
  color: #e63946;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  &:hover { background: rgba(230,57,70,0.18); }
`;

const GateError = styled.p`
  color: #a04040;
  font-size: 0.8rem;
  margin: 0;
`;

/* ─── Header / tagline ───────────────────────────────────── */

const Tagline = styled.h1`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 900;
  line-height: 1.2;
  text-transform: uppercase;
  color: #e8e4e0;
  letter-spacing: -0.01em;
  margin: 0 0 0.5rem;
  text-align: center;

  em {
    font-style: normal;
    color: #e63946;
  }
`;

const Declaration = styled.div`
  text-align: center;
  margin: 2rem 0 2rem;
  line-height: 1;
`;

const DeclPre = styled.div`
  font-size: 0.68rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #3a3a3a;
  font-weight: 700;
  margin-bottom: 0.35rem;
`;

const DeclMain = styled.div`
  font-size: clamp(2.2rem, 8vw, 4rem);
  font-weight: 900;
  color: #e63946;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  font-style: italic;
  line-height: 0.95;
`;

const LangBtn = styled.button`
  display: block;
  margin: 0 auto 2.5rem;
  padding: 0.5rem 1.2rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: transparent;
  color: #444;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 999px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
  &:hover { color: #ccc; border-color: rgba(255,255,255,0.3); }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent);
  margin: 2rem 0;
`;

/* ─── Section label ──────────────────────────────────────── */

const Label = styled.div`
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #e63946;
  margin-bottom: 1rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid rgba(230,57,70,0.18);
`;

/* ─── Video ──────────────────────────────────────────────── */

const VideoWrap = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 4px;
  background: #000;
  margin-bottom: 0.6rem;
  border: 1px solid rgba(255,255,255,0.05);

  iframe {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    border: none;
  }
`;

const ReelNote = styled.p`
  font-size: 0.8rem;
  color: #444;
  line-height: 1.6;
  margin: 0;
  letter-spacing: 0.02em;
`;

/* ─── Resume ─────────────────────────────────────────────── */

const ResumeBtn = styled.a`
  display: block;
  width: fit-content;
  margin: 0 auto;
  padding: 0.7rem 1.6rem;
  background: rgba(249,199,79,0.1);
  border: 1px solid rgba(249,199,79,0.4);
  border-radius: 4px;
  color: #f9c74f;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s;
  &:hover { background: rgba(249,199,79,0.18); border-color: rgba(249,199,79,0.65); }
`;

/* ─── Jobs ───────────────────────────────────────────────── */

const JobsCard = styled.div`
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 4px;
  overflow: hidden;
`;

const JobRow = styled.div`
  padding: 0.9rem 1.2rem;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  &:last-child { border-bottom: none; }
`;

const JobTag = styled.div`
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #f9c74f;
  font-weight: 700;
  margin-bottom: 0.3rem;
`;

const JobText = styled.div`
  font-size: 0.88rem;
  color: #888;
  line-height: 1.55;
`;

/* ─── Photo ──────────────────────────────────────────────── */

const PhotoWrap = styled.div`
  text-align: center;
`;

const Photo = styled.img`
  width: 100%;
  max-width: 500px;
  max-height: 72vh;
  object-fit: contain;
  display: block;
  margin: 0 auto 1rem;
  border-radius: 4px;
  opacity: 0.92;
`;

const NextBtn = styled.button`
  display: block;
  margin: 0 auto;
  padding: 0.55rem 1.4rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  background: transparent;
  color: #555;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 999px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
  &:hover { color: #ccc; border-color: rgba(255,255,255,0.3); }
`;

/* ─── Info ───────────────────────────────────────────────── */

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  font-size: 0.9rem;
  color: #666;
  padding: 0.5rem 0 0.5rem 1.1rem;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  position: relative;
  line-height: 1.55;

  &::before {
    content: '—';
    position: absolute;
    left: 0;
    color: rgba(230,57,70,0.4);
    font-size: 0.75rem;
    top: 0.55rem;
  }

  &:last-child { border-bottom: none; }
`;

/* ─── Links ──────────────────────────────────────────────── */

const AgencyCard = styled.div`
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const AgencyLink = styled.a`
  display: block;
  padding: 1rem 1.2rem;
  color: #c0b8b0;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: color 0.2s, background 0.2s;

  &:last-child { border-bottom: none; }
  &:hover { color: #fff; background: rgba(255,255,255,0.03); }
`;

const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ExtLink = styled.a`
  font-size: 0.85rem;
  color: #555;
  text-decoration: none;
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: color 0.2s;

  &:hover { color: #ccc; }
  &:last-child { border-bottom: none; }
`;

const ContactLine = styled.p`
  font-size: 0.82rem;
  color: #f9c74f;
  letter-spacing: 0.04em;
  margin: 0;
  padding: 1rem 0;
  border-top: 1px solid rgba(249,199,79,0.15);
`;

/* ─── Component ──────────────────────────────────────────── */

const ActingPolished = () => {
  const [isUnlocked, setIsUnlocked]       = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [language, setLanguage]           = useState('EN');
  const [currentIndex, setCurrentIndex]   = useState(0);
  const t = texts[language];

  useEffect(() => {
    if (sessionStorage.getItem(ACCESS_STORAGE_KEY) === 'true') setIsUnlocked(true);
  }, []);

  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#0a0a0a';
    return () => { document.body.style.backgroundColor = prev; };
  }, []);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (passwordInput === ACCESS_PASSWORD) {
      sessionStorage.setItem(ACCESS_STORAGE_KEY, 'true');
      setIsUnlocked(true);
    } else {
      setPasswordError('Wrong password.');
      setPasswordInput('');
    }
  };

  if (!isUnlocked) {
    return (
      <GateWrap>
        <GateBox>
          <GateTitle>Acting Portfolio</GateTitle>
          <GateText>This page is password protected.</GateText>
          <GateForm onSubmit={handleUnlock}>
            <GateInput
              type="password"
              value={passwordInput}
              onChange={e => setPasswordInput(e.target.value)}
              placeholder="Password"
              autoComplete="current-password"
            />
            <GateButton type="submit">Unlock</GateButton>
          </GateForm>
          <GateText>Request access: inbox@wilfredocasas.com</GateText>
          {passwordError && <GateError>{passwordError}</GateError>}
        </GateBox>
      </GateWrap>
    );
  }

  return (
    <Page>
      <Inner>

        {/* ── Tagline ── */}
        <Tagline>
          <em>{t.line1em}</em>{t.line1post}<br />
          {t.line2pre}<em>{t.line2em}</em>{t.line2post}<br />
          {t.line3pre}<em>{t.line3em}</em>{t.line3post}
        </Tagline>
        <Declaration>
          <DeclMain>{t.declMain}</DeclMain>
        </Declaration>

        <LangBtn onClick={() => setLanguage(l => l === 'EN' ? 'DE' : 'EN')}>
          {t.toggleBtn}
        </LangBtn>

        {/* ── Reel ── */}
        <Label>Showreel</Label>
        <VideoWrap>
          <iframe src="https://www.youtube.com/embed/1EH66VoBrZY" title="Acting Reel" allowFullScreen />
        </VideoWrap>
        <ReelNote>{t.reelText}</ReelNote>

        <Divider />

        {/* ── Resume ── */}
        <ResumeBtn
          href={`${process.env.PUBLIC_URL}/Resume_Acting_Wilfredo_Casas.pdf`}
          download="Resume_Acting_Wilfredo_Casas.pdf"
        >
          {t.resumeButton}
        </ResumeBtn>

        <Divider />

        {/* ── Jobs ── */}
        <Label>Jobs</Label>
        <JobsCard>
          <JobRow>
            <JobTag>{t.lastJobLabel}</JobTag>
            <JobText>{t.lastJob}</JobText>
          </JobRow>
          <JobRow>
            <JobTag>{t.nextJobLabel}</JobTag>
            <JobText>{t.nextJob}</JobText>
          </JobRow>
        </JobsCard>

        <Divider />

        {/* ── Photo ── */}
        <Label>Photos</Label>
        <PhotoWrap>
          <Photo src={photos[currentIndex]} alt={`Photo ${currentIndex + 1}`} />
          <NextBtn onClick={() => setCurrentIndex(i => (i + 1) % photos.length)}>
            Next photo
          </NextBtn>
        </PhotoWrap>

        <Divider />

        {/* ── Video 2 ── */}
        <Label>Additional Work</Label>
        <VideoWrap>
          <iframe src="https://www.youtube.com/embed/lRrJgTUSww0" title="Acting Video 2" allowFullScreen />
        </VideoWrap>

        <Divider />

        {/* ── Info ── */}
        <Label>{t.moreAbout}</Label>
        <InfoList>
          {t.info.map((item, i) => <InfoItem key={i}>{item}</InfoItem>)}
        </InfoList>

        <Divider />

        {/* ── Video 3 ── */}
        <VideoWrap>
          <iframe src="https://www.youtube.com/embed/7UNN4vHY5CU" title="Acting Video 3" allowFullScreen />
        </VideoWrap>

        <Divider />

        {/* ── Links ── */}
        <Label>{t.moreLinks}</Label>
        <LinksList>
          <ExtLink href="https://www.filmmakers.eu/en/actors/wilfredo-casas" target="_blank" rel="noopener noreferrer">
            Filmmakers.eu Profile →
          </ExtLink>
          <ExtLink href="https://www.etalenta.eu/members/profile/wilfredo-casas" target="_blank" rel="noopener noreferrer">
            etalenta.eu Profile →
          </ExtLink>
          <ExtLink href="https://www.instagram.com/wilfredocasas.actor/" target="_blank" rel="noopener noreferrer">
            Instagram →
          </ExtLink>
        </LinksList>

        <ContactLine>{t.directContact}</ContactLine>

      </Inner>
    </Page>
  );
};

export default ActingPolished;
