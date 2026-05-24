import React, { useState } from 'react';
import {
  Container,
  Title,
  Subtitle,
  Section,
  Paragraph,
  List,
  ListItem,
  ContactLink,
  HeroImage,
  GalleryRow,
  SmallImage,
  Spacer,
  LanguageSelect,
} from './styles';

import cloud1 from '../../assets/images/cloud1.jpg';
import cloud2 from '../../assets/images/cloud2.jpg';

const texts = {
  EN: {
    subtitle: 'A tactical game designed for both blind and sighted players.',
    storyTitle: 'Story',
    storyP1: 'What if a game could be designed for both blind and sighted players alike?',
    storyP2:
      "A game of chess with a blind man in Budapest inspired me to create this game. Once it's ready, it will be playable by blind-only groups, sighted-only groups, and mixed blind and sighted groups.",
    keyInfoTitle: 'Key Information',
    playersLabel: 'Players',
    playtimeLabel: 'Playtime',
    hookLabel: 'Core hook',
    hookText: "everyone sees all scoring rules, but doesn't know which rule the others have.",
    overviewTitle: 'Game Overview',
    overviewP1:
      'Tree Cloud Mountain Sea is a quick pattern-and-deduction game for 3 to 5 players. There are 12 scoring rules in the game. The full rule set is public, but each player secretly receives a different rule and tries to score it while keeping it hidden.',
    howTitle: 'How It Plays',
    howList: [
      'All 12 scoring rules are visible to everyone.',
      "Each player gets 1 secret scoring rule (others don't know which one).",
      'Players fill slots on a shared board with pieces (tree / cloud / mountain / sea).',
      'Once per game, each player can move one placed piece to a different slot.',
      'When the last slot is filled, the game ends.',
    ],
    contactTitle: 'Contact and links',
    emailLabel: 'Email',
    instagramLabel: 'Instagram',
    morePicsTitle: 'More Pictures',
  },
  DE: {
    subtitle: 'Ein taktisches Spiel, entwickelt fuer blinde und sehende Spieler.',
    storyTitle: 'Geschichte',
    storyP1: 'Was waere, wenn ein Spiel sowohl fuer blinde als auch fuer sehende Menschen gemacht werden koennte?',
    storyP2:
      'Eine Schachpartie mit einem blinden Mann in Budapest hat mich dazu inspiriert, dieses Spiel zu entwickeln. Sobald es fertig ist, wird es in rein blinden Gruppen, rein sehenden Gruppen und in gemischten Gruppen spielbar sein.',
    keyInfoTitle: 'Eckdaten',
    playersLabel: 'Spieler',
    playtimeLabel: 'Spieldauer',
    hookLabel: 'Grundidee',
    hookText: 'alle sehen alle Wertungsregeln, aber niemand weiss, welche Regel die anderen haben.',
    overviewTitle: 'Spieluebersicht',
    overviewP1:
      'Tree Cloud Mountain Sea ist ein schnelles Muster- und Deduktionsspiel fuer 3 bis 5 Spieler. Es gibt 12 Wertungsregeln. Das gesamte Regelset ist oeffentlich, aber jeder Spieler bekommt heimlich eine andere Regel und versucht, sie zu erfuellen, ohne sie zu verraten.',
    howTitle: 'Ablauf',
    howList: [
      'Alle 12 Wertungsregeln sind fuer alle sichtbar.',
      'Jeder Spieler erhaelt 1 geheime Wertungsregel (die anderen wissen nicht welche).',
      'Spieler fuellen Felder auf einem gemeinsamen Brett mit Steinen (Baum / Wolke / Berg / Meer).',
      'Einmal pro Spiel darf jeder Spieler einen gelegten Stein auf ein anderes Feld verschieben.',
      'Sobald das letzte Feld belegt ist, endet das Spiel.',
    ],
    contactTitle: 'Kontakt und Links',
    emailLabel: 'E-Mail',
    instagramLabel: 'Instagram',
    morePicsTitle: 'Mehr Bilder',
  },
  PT: {
    subtitle: 'Um jogo tático desenvolvido para jogadores cegos e videntes.',
    storyTitle: 'História',
    storyP1: 'E se um jogo pudesse ser desenhado tanto para cegos como para videntes?',
    storyP2:
      'Uma partida de xadrez com um homem cego em Budapeste inspirou-me a criar este jogo. Quando estiver pronto, poderá ser jogado por grupos de cegos, grupos de videntes ou grupos mistos.',
    keyInfoTitle: 'Informações',
    playersLabel: 'Jogadores',
    playtimeLabel: 'Duração',
    hookLabel: 'Ideia central',
    hookText: 'todos veem todas as regras de pontuação, mas ninguém sabe qual regra os outros têm.',
    overviewTitle: 'Visão Geral',
    overviewP1:
      'Tree Cloud Mountain Sea é um jogo rápido de padrões e dedução para 3 a 5 jogadores. Existem 12 regras de pontuação. O conjunto completo de regras é público, mas cada jogador recebe secretamente uma regra diferente e tenta cumpri-la sem a revelar.',
    howTitle: 'Como se Joga',
    howList: [
      'Todas as 12 regras de pontuação são visíveis para todos.',
      'Cada jogador recebe 1 regra de pontuação secreta (os outros não sabem qual).',
      'Os jogadores preenchem espaços num tabuleiro partilhado com peças (árvore / nuvem / montanha / mar).',
      'Uma vez por jogo, cada jogador pode mover uma peça já colocada para outro espaço.',
      'Quando o último espaço for preenchido, o jogo termina.',
    ],
    contactTitle: 'Contacto e Links',
    emailLabel: 'Email',
    instagramLabel: 'Instagram',
    morePicsTitle: 'Mais Fotos',
  },
};

const TreeCloudMountainSea = () => {
  const [language, setLanguage] = useState('EN');
  const [showKeyInfo, setShowKeyInfo] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showHowItPlays, setShowHowItPlays] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const t = texts[language];
  const closeLightbox = () => setLightbox(null);

  return (
    <Container>
      <style>{`
        .top-nav {
          margin-bottom: 14px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          color: #555;
        }
        .top-nav a {
          color: #555;
          text-decoration: none;
        }
        .top-nav a:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.78);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          z-index: 9999;
        }

        .lightbox-content {
          position: relative;
          width: min(980px, 96vw);
          max-height: 92vh;
        }

        .lightbox-img {
          width: 100%;
          max-height: 92vh;
          object-fit: contain;
          border-radius: 12px;
          background: #000;
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
        }

        .lightbox-close {
          position: absolute;
          top: -12px;
          right: -12px;
          width: 38px;
          height: 38px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(0, 0, 0, 0.55);
          color: #fff;
          cursor: pointer;
          font-size: 18px;
          line-height: 1;
        }
      `}</style>
      <div className="top-nav">
        <a href="/board-games">← Board games</a> <span aria-hidden="true">·</span>{' '}
        <a href="/">Home</a>
      </div>
      <Title>Tree Cloud Mountain Sea</Title>
      <Subtitle>{t.subtitle}</Subtitle>
      <LanguageSelect value={language} onChange={e => setLanguage(e.target.value)}>
        <option value="EN">🇬🇧 English</option>
        <option value="DE">🇩🇪 Deutsch</option>
        <option value="PT">🇵🇹 Português</option>
      </LanguageSelect>

      <HeroImage src={cloud1} alt="Tree Cloud Mountain Sea" />

      <Section>
        <h3>{t.storyTitle}</h3>
        <Paragraph>{t.storyP1}</Paragraph>
        <Paragraph>{t.storyP2}</Paragraph>
      </Section>

      <Section>
        <h3 onClick={() => setShowKeyInfo(!showKeyInfo)}>
          {t.keyInfoTitle} {showKeyInfo ? '▲' : '▼'}
        </h3>
        {showKeyInfo && (
          <>
            <Paragraph><strong>{t.playersLabel}:</strong> 3 to 5</Paragraph>
            <Paragraph><strong>{t.playtimeLabel}:</strong> ~15 minutes</Paragraph>
            <Paragraph><strong>{t.hookLabel}:</strong> {t.hookText}</Paragraph>
          </>
        )}
      </Section>

      <Section>
        <h3 onClick={() => setShowOverview(!showOverview)}>
          {t.overviewTitle} {showOverview ? '▲' : '▼'}
        </h3>
        {showOverview && (
          <>
            <Paragraph>{t.overviewP1}</Paragraph>
          
          </>
        )}
      </Section>

      <Section>
        <h3 onClick={() => setShowHowItPlays(!showHowItPlays)}>
          {t.howTitle} {showHowItPlays ? '▲' : '▼'}
        </h3>
        {showHowItPlays && (
          <List>
            {t.howList.map((item, idx) => (
              <ListItem key={idx}>{item}</ListItem>
            ))}
          </List>
        )}
      </Section>



      <Section>
        <h3 onClick={() => setShowContact(!showContact)}>
          {t.contactTitle} {showContact ? '▲' : '▼'}
        </h3>
        {showContact && (
          <>
            <Paragraph>
              <strong>{t.emailLabel}:</strong>{' '}
              <ContactLink href="mailto:inbox@wilfredocasas.com">inbox@wilfredocasas.com</ContactLink>
            </Paragraph>
            <Paragraph>
              <strong>{t.instagramLabel}:</strong>{' '}
              <ContactLink
                href="https://www.instagram.com/ayakuchogamelab/"
                target="_blank"
                rel="noreferrer noopener"
              >
                @ayakuchogamelab
              </ContactLink>
            </Paragraph>
          </>
        )}
      </Section>

      <Section>
        <h3>{t.morePicsTitle}</h3>
        <GalleryRow>
          <SmallImage
            src={cloud2}
            alt="Tree Cloud Mountain Sea (photo 2)"
            onClick={() => setLightbox({ src: cloud2, alt: 'Tree Cloud Mountain Sea (photo 2)' })}
          />
        </GalleryRow>
      </Section>

      <Spacer />

      {lightbox && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeLightbox();
          }}
          tabIndex={-1}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" type="button" onClick={closeLightbox} aria-label="Close">
              ×
            </button>
            <img className="lightbox-img" src={lightbox.src} alt={lightbox.alt} />
          </div>
        </div>
      )}

    </Container>
  );
};

export default TreeCloudMountainSea;
