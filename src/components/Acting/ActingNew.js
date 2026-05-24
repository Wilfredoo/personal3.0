// ActingNew.js — casting-director-first layout
// Face immediately visible. Reel above the fold. Stats scannable. Contact obvious.
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
    descriptor: 'Actor · Berlin',
    tagline: 'Emerging Indigenous-Peruvian actor. Improvisational skills and a wide acting range.',
    stats: [
      { label: 'Height',     value: '175 cm' },
      { label: 'Build',      value: 'Athletic' },
      { label: 'Appearance', value: 'Indigenous Peruvian / Hispanic' },
      { label: 'Languages',  value: 'DE · EN · ES · Quechua · DGS' },
      { label: 'Sports',     value: 'Parkour · Martial Arts' },
      { label: 'Dance',      value: 'Contemporary · Improv · Ballet · Salsa · Tango' },
      { label: 'License',    value: 'Class B (EU)' },
      { label: 'Base',       value: 'Berlin — available worldwide' },
    ],
    lastJobLabel: 'Last credit',
    lastJob: 'First Love (Pierwsza Miłość) — Prisoner 2 — ATM Grupa / Polsat — Feb 2026',
    nextJobLabel: 'Upcoming',
    nextJob: 'The Human Experience — The Human Tiger — Dir. Natalie McMahon — June 2026',
    reelNote: 'Short films, Berlin · Aachen · Cologne — 2025. More material coming soon.',
    resume: 'Download Resume (PDF)',
    contact: 'WhatsApp / Signal / Telegram',
    contactNumber: '+49 175 702 5622',
    lang: 'Auf Deutsch',
    nextPhoto: 'Next →',
  },
  DE: {
    descriptor: 'Schauspieler · Berlin',
    tagline: 'Indigen-peruanischer Schauspieler. Improvisationsfähigkeiten und breite schauspielerische Bandbreite.',
    stats: [
      { label: 'Größe',        value: '175 cm' },
      { label: 'Körperbau',    value: 'Athletisch' },
      { label: 'Erscheinung',  value: 'Indigen Peruanisch / Hispanisch' },
      { label: 'Sprachen',     value: 'DE · EN · ES · Quechua · DGS' },
      { label: 'Sport',        value: 'Parkour · Kampfsport' },
      { label: 'Tanz',         value: 'Zeitgenössisch · Improv · Ballett · Salsa · Tango' },
      { label: 'Führerschein', value: 'Klasse B (EU)' },
      { label: 'Standort',     value: 'Berlin — weltweit einsetzbar' },
    ],
    lastJobLabel: 'Letzter Job',
    lastJob: 'First Love (Pierwsza Miłość) — Prisoner 2 — ATM Grupa / Polsat — Feb 2026',
    nextJobLabel: 'Nächster Job',
    nextJob: 'The Human Experience — The Human Tiger — Regie: Natalie McMahon — Juni 2026',
    reelNote: 'Kurzfilme in Berlin · Aachen · Köln — 2025. Mehr Material folgt.',
    resume: 'Lebenslauf herunterladen (PDF)',
    contact: 'WhatsApp / Signal / Telegram',
    contactNumber: '+49 175 702 5622',
    lang: 'In English',
    nextPhoto: 'Nächstes →',
  },
};

/* ─── Animations ─────────────────────────────────────────── */

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

/* ─── Gate ───────────────────────────────────────────────── */

const GateWrap = styled.div`
  min-height: 100vh;
  background: #080808;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`;

const GateBox = styled.div`
  width: 100%;
  max-width: 340px;
  text-align: center;
`;

const GateLabel = styled.div`
  font-size: 0.62rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #333;
  margin-bottom: 1.8rem;
  font-weight: 700;
`;

const GateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 1rem;
`;

const GateInput = styled.input`
  padding: 0.8rem 1rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 3px;
  color: #e0dbd5;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  &:focus { border-color: rgba(255,255,255,0.2); }
  &::placeholder { color: #2a2a2a; }
`;

const GateBtn = styled.button`
  padding: 0.75rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 3px;
  color: #888;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
  &:hover { background: rgba(255,255,255,0.1); color: #ccc; }
`;

const GateHint = styled.p`
  font-size: 0.75rem;
  color: #2a2a2a;
  margin: 0.5rem 0 0;
`;

const GateError = styled.p`
  color: #884040;
  font-size: 0.78rem;
  margin: 0.4rem 0 0;
`;

/* ─── Page shell ─────────────────────────────────────────── */

const Page = styled.div`
  min-height: 100vh;
  background: #080808;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #e0dbd5;
  animation: ${fadeIn} 0.4s ease-out;
`;

/* ─── Top strip ──────────────────────────────────────────── */

const TopStrip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2rem;
  border-bottom: 1px solid rgba(255,255,255,0.05);

  @media (max-width: 600px) { padding: 1rem 1.2rem; }
`;

const Descriptor = styled.div`
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #333;
  font-weight: 700;
`;

const LangBtn = styled.button`
  font-family: inherit;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: none;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 999px;
  padding: 0.3rem 0.9rem;
  color: #444;
  cursor: pointer;
  transition: all 0.2s;
  &:hover { color: #aaa; border-color: rgba(255,255,255,0.2); }
`;

/* ─── Hero: photo left, info right ──────────────────────── */

const Hero = styled.div`
  display: grid;
  grid-template-columns: 42% 1fr;
  min-height: calc(100vh - 53px);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

/* sticky photo panel */
const PhotoPanel = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  background: #040404;

  @media (max-width: 768px) {
    position: relative;
    height: 70vw;
    max-height: 480px;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: opacity 0.3s ease;
`;

const NextPhotoBtn = styled.button`
  position: absolute;
  bottom: 1.2rem;
  right: 1.2rem;
  font-family: inherit;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  background: rgba(0,0,0,0.6);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 999px;
  padding: 0.4rem 0.9rem;
  color: #888;
  cursor: pointer;
  transition: all 0.2s;
  backdrop-filter: blur(8px);
  &:hover { color: #fff; border-color: rgba(255,255,255,0.4); }
`;

const PhotoCount = styled.div`
  position: absolute;
  bottom: 1.2rem;
  left: 1.2rem;
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  color: rgba(255,255,255,0.2);
  font-weight: 700;
`;

/* scrollable right panel */
const InfoPanel = styled.div`
  padding: 3rem 3rem 5rem;
  border-left: 1px solid rgba(255,255,255,0.05);
  overflow-y: auto;

  @media (max-width: 1024px) { padding: 2.5rem 2rem 4rem; }
  @media (max-width: 768px)  { padding: 2rem 1.4rem 4rem; border-left: none; }
`;

/* ─── Tagline ────────────────────────────────────────────── */

const Tagline = styled.p`
  font-size: 1.05rem;
  line-height: 1.75;
  color: #6a6460;
  margin: 0 0 2.5rem;
  font-style: italic;
`;

/* ─── Contact CTA — shown early and again at bottom ─────── */

const ContactBlock = styled.div`
  margin-bottom: 2.5rem;
`;

const ContactLabel = styled.div`
  font-size: 0.6rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #2e2e2e;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;

const ContactNumber = styled.a`
  display: block;
  font-size: 1.4rem;
  font-weight: 700;
  color: #e0dbd5;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.2s;
  margin-bottom: 0.3rem;

  &:hover { color: #fff; }
`;

const ContactSub = styled.div`
  font-size: 0.72rem;
  color: #2e2e2e;
  letter-spacing: 0.08em;
`;

/* ─── Divider / section label ────────────────────────────── */

const SectionLabel = styled.div`
  font-size: 0.58rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: #2a2a2a;
  font-weight: 700;
  margin-bottom: 0.9rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid rgba(255,255,255,0.04);
`;

const Spacer = styled.div`
  height: ${p => p.h || '2rem'};
`;

/* ─── Video ──────────────────────────────────────────────── */

const VideoWrap = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 3px;
  background: #000;
  margin-bottom: 0.6rem;

  iframe {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    border: none;
  }
`;

const VideoNote = styled.p`
  font-size: 0.72rem;
  color: #2e2e2e;
  margin: 0;
  font-style: italic;
  line-height: 1.5;
`;

/* ─── Credits ────────────────────────────────────────────── */

const CreditsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const CreditRow = styled.div`
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);

  &:last-child { border-bottom: none; }
`;

const CreditTag = styled.div`
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #2a2a2a;
  font-weight: 700;
  margin-bottom: 0.3rem;
`;

const CreditText = styled.div`
  font-size: 0.88rem;
  color: #666;
  line-height: 1.55;
`;

/* ─── Stats ──────────────────────────────────────────────── */

const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatRow = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  align-items: baseline;

  &:last-child { border-bottom: none; }
`;

const StatLabel = styled.div`
  font-size: 0.6rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #2e2e2e;
  font-weight: 700;
  padding-top: 1px;
`;

const StatValue = styled.div`
  font-size: 0.88rem;
  color: #666;
  line-height: 1.5;
`;

/* ─── Resume + links ─────────────────────────────────────── */

const ResumeLink = styled.a`
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #444;
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 2px;
  transition: color 0.2s, border-color 0.2s;
  &:hover { color: #ccc; border-color: rgba(255,255,255,0.3); }
`;

const LinkRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const ExtLink = styled.a`
  font-size: 0.78rem;
  color: #333;
  text-decoration: none;
  transition: color 0.2s;
  &:hover { color: #aaa; }
`;

/* ─── Component ──────────────────────────────────────────── */

const ActingNew = () => {
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
    document.body.style.backgroundColor = '#080808';
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
          <GateLabel>Acting Portfolio</GateLabel>
          <GateForm onSubmit={handleUnlock}>
            <GateInput
              type="password"
              value={passwordInput}
              onChange={e => setPasswordInput(e.target.value)}
              placeholder="Password"
              autoComplete="current-password"
            />
            <GateBtn type="submit">Unlock</GateBtn>
          </GateForm>
          <GateHint>Request access: inbox@wilfredocasas.com</GateHint>
          {passwordError && <GateError>{passwordError}</GateError>}
        </GateBox>
      </GateWrap>
    );
  }

  return (
    <Page>

      {/* ── Top strip ── */}
      <TopStrip>
        <Descriptor>{t.descriptor}</Descriptor>
        <LangBtn onClick={() => setLanguage(l => l === 'EN' ? 'DE' : 'EN')}>
          {t.lang}
        </LangBtn>
      </TopStrip>

      {/* ── Hero: sticky photo + scrollable info ── */}
      <Hero>

        {/* Left: sticky photo */}
        <PhotoPanel>
          <Photo src={photos[currentIndex]} alt={`Photo ${currentIndex + 1}`} />
          <PhotoCount>{currentIndex + 1} / {photos.length}</PhotoCount>
          <NextPhotoBtn onClick={() => setCurrentIndex(i => (i + 1) % photos.length)}>
            {t.nextPhoto}
          </NextPhotoBtn>
        </PhotoPanel>

        {/* Right: all the content */}
        <InfoPanel>

          <Tagline>{t.tagline}</Tagline>

          {/* Contact — right at the top */}
          <ContactBlock>
            <ContactLabel>{t.contact}</ContactLabel>
            <ContactNumber href="https://wa.me/491757025622" target="_blank" rel="noopener noreferrer">
              {t.contactNumber}
            </ContactNumber>
            <ContactSub>WhatsApp · Signal · Telegram</ContactSub>
          </ContactBlock>

          {/* Resume */}
          <ResumeLink
            href={`${process.env.PUBLIC_URL}/Resume_Acting_Wilfredo_Casas.pdf`}
            download="Resume_Acting_Wilfredo_Casas.pdf"
          >
            {t.resume}
          </ResumeLink>

          <Spacer h="2.5rem" />

          {/* Reel — above the fold on desktop */}
          <SectionLabel>Showreel</SectionLabel>
          <VideoWrap>
            <iframe src="https://www.youtube.com/embed/1EH66VoBrZY" title="Acting Reel" allowFullScreen />
          </VideoWrap>
          <VideoNote>{t.reelNote}</VideoNote>

          <Spacer h="2.5rem" />

          {/* Credits */}
          <SectionLabel>Recent Credits</SectionLabel>
          <CreditsGrid>
            <CreditRow>
              <CreditTag>{t.lastJobLabel}</CreditTag>
              <CreditText>{t.lastJob}</CreditText>
            </CreditRow>
            <CreditRow>
              <CreditTag>{t.nextJobLabel}</CreditTag>
              <CreditText>{t.nextJob}</CreditText>
            </CreditRow>
          </CreditsGrid>

          <Spacer h="2.5rem" />

          {/* Video 2 */}
          <SectionLabel>Additional Work</SectionLabel>
          <VideoWrap>
            <iframe src="https://www.youtube.com/embed/lRrJgTUSww0" title="Additional Work" allowFullScreen />
          </VideoWrap>

          <Spacer h="2.5rem" />

          {/* Stats */}
          <SectionLabel>Profile</SectionLabel>
          <StatsGrid>
            {t.stats.map((s, i) => (
              <StatRow key={i}>
                <StatLabel>{s.label}</StatLabel>
                <StatValue>{s.value}</StatValue>
              </StatRow>
            ))}
          </StatsGrid>

          <Spacer h="2.5rem" />

          {/* Video 3 */}
          <VideoWrap>
            <iframe src="https://www.youtube.com/embed/7UNN4vHY5CU" title="Acting Video 3" allowFullScreen />
          </VideoWrap>

          <Spacer h="2.5rem" />

          {/* Links */}
          <SectionLabel>Profiles</SectionLabel>
          <LinkRow>
            <ExtLink href="https://www.filmmakers.eu/en/actors/wilfredo-casas" target="_blank" rel="noopener noreferrer">
              Filmmakers.eu ↗
            </ExtLink>
            <ExtLink href="https://www.etalenta.eu/members/profile/wilfredo-casas" target="_blank" rel="noopener noreferrer">
              etalenta.eu ↗
            </ExtLink>
            <ExtLink href="https://www.instagram.com/wilfredocasas.actor/" target="_blank" rel="noopener noreferrer">
              Instagram ↗
            </ExtLink>
          </LinkRow>

          <Spacer h="3rem" />

          {/* Contact repeated at the bottom */}
          <ContactBlock>
            <ContactLabel>{t.contact}</ContactLabel>
            <ContactNumber href="https://wa.me/491757025622" target="_blank" rel="noopener noreferrer">
              {t.contactNumber}
            </ContactNumber>
            <ContactSub>WhatsApp · Signal · Telegram</ContactSub>
          </ContactBlock>

        </InfoPanel>
      </Hero>

    </Page>
  );
};

export default ActingNew;
