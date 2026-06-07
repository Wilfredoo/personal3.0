import React, { useState } from 'react';
import {
  PageWrapper, Container, TopNav, Title, Subtitle, HeroImage,
  StaticSection, Section, SectionToggle, SectionBody,
  Paragraph, List, ListItem, ContactLink, WhatsAppLink,
  GalleryRow, SmallImage, RotatedSmallImage,
} from './styles';
import hostelParadisoImage from '../../assets/images/Hostel_paradiso.jpeg';
import hostel1 from '../../assets/images/hostel1.jpg';
import hostel2 from '../../assets/images/hostel2.jpg';
import hostel3 from '../../assets/images/hostel3.jpeg';
import multiverse1 from '../../assets/images/multiverse1.jpg';
import multiverse2 from '../../assets/images/multiverse2.jpg';

const HostelParadisoSellSheet = () => {
  const [showKeyInfo, setShowKeyInfo] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showHowItPlays, setShowHowItPlays] = useState(false);
  const [showScoring, setShowScoring] = useState(false);
  const [showUnique, setShowUnique] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const closeLightbox = () => setLightbox(null);

  return (
    <PageWrapper>
    <Container>
      <style>{`
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.82);
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
        }
        .lightbox-close {
          position: absolute;
          top: -14px;
          right: -14px;
          width: 36px;
          height: 36px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(0,0,0,0.6);
          color: #fff;
          cursor: pointer;
          font-size: 18px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <TopNav>
        <a href="/board-games">← Board games</a>
        <span aria-hidden="true">·</span>
        <a href="/">Home</a>
      </TopNav>

      <Title>The Humbiverse</Title>
      <Subtitle>Aim to take ownership of the quirkiest hostel in town.</Subtitle>

      <HeroImage src={hostelParadisoImage} alt="The Humbiverse prototype" />

      <StaticSection>
        <h3>Story</h3>
        <Paragraph>
          Loving Codenames and Dixit, and having played them hundreds of times, I wanted to create a game that challenged
          me even more. This is the result.
        </Paragraph>
        <Paragraph>
          Art by <ContactLink href="https://www.theoddlittleworld.com/" target="_blank" rel="noreferrer noopener">Ashbee Wong</ContactLink>.
        </Paragraph>
      </StaticSection>

      <Section>
        <SectionToggle
          type="button"
          onClick={() => setShowKeyInfo(!showKeyInfo)}
          aria-expanded={showKeyInfo}
        >
          Key Information <span className="chevron">▼</span>
        </SectionToggle>
        {showKeyInfo && (
          <SectionBody>
            <Paragraph><strong>Players:</strong> 3 to 10</Paragraph>
            <Paragraph><strong>Playtime:</strong> 20 minutes</Paragraph>
            <Paragraph><strong>Genre:</strong> Party, creative writing, clue-guessing</Paragraph>
          </SectionBody>
        )}
      </Section>

      <Section>
        <SectionToggle
          type="button"
          onClick={() => setShowOverview(!showOverview)}
          aria-expanded={showOverview}
        >
          Game Overview <span className="chevron">▼</span>
        </SectionToggle>
        {showOverview && (
          <SectionBody>
            <Paragraph>
              The Humbiverse is a party game of misdirection, deduction and creative writing. Players craft short dialogue
              lines that must fit both a shared sentence and a quirky two-character scene. When all dialogues are revealed,
              the group tries to figure out where in the hostel each exchange took place. Your goal is to be clear enough
              to convince most players, but ambiguous enough to fool at least one.
            </Paragraph>
          </SectionBody>
        )}
      </Section>

      <Section>
        <SectionToggle
          type="button"
          onClick={() => setShowHowItPlays(!showHowItPlays)}
          aria-expanded={showHowItPlays}
        >
          How It Plays <span className="chevron">▼</span>
        </SectionToggle>
        {showHowItPlays && (
          <SectionBody>
            <List>
              <ListItem>Draw a shared sentence.</ListItem>
              <ListItem>Draw a lead word (optional bonus).</ListItem>
              <ListItem>Each player writes a reply or prompt that fits the group sentence and one image.</ListItem>
              <ListItem>Players record the floor number of their chosen image.</ListItem>
              <ListItem>One after one, players read out the dialogues, then everyone guesses the intended apartment.</ListItem>
            </List>
          </SectionBody>
        )}
      </Section>

      <Section>
        <SectionToggle
          type="button"
          onClick={() => setShowScoring(!showScoring)}
          aria-expanded={showScoring}
        >
          Scoring <span className="chevron">▼</span>
        </SectionToggle>
        {showScoring && (
          <SectionBody>
            <Paragraph>
              If everyone guesses your floor correctly, or if no one does, you score no points and the others do. Aim for a
              strong majority with at least one miss. After three rounds, the player with the most points becomes the new
              owner of The Humbiverse.
            </Paragraph>
          </SectionBody>
        )}
      </Section>

      <Section>
        <SectionToggle
          type="button"
          onClick={() => setShowUnique(!showUnique)}
          aria-expanded={showUnique}
        >
          What Makes It Special <span className="chevron">▼</span>
        </SectionToggle>
        {showUnique && (
          <SectionBody>
            <List>
              <ListItem>
                <strong>100 Unique Situations:</strong> Each image captures an unconventional two-character moment that begs
                for an explanation and invites multiple interpretations. Illustrated by{' '}
                <ContactLink href="https://www.theoddlittleworld.com/" target="_blank" rel="noreferrer noopener">Ashbee Wong</ContactLink>.
              </ListItem>
              <ListItem>
                <strong>Double-Fit Writing:</strong> One line must make sense for both the shared sentence and the chosen
                image — bringing associative storytelling to a whole new level.
              </ListItem>
            </List>
          </SectionBody>
        )}
      </Section>

      <Section>
        <SectionToggle
          type="button"
          onClick={() => setShowContact(!showContact)}
          aria-expanded={showContact}
        >
          Contact <span className="chevron">▼</span>
        </SectionToggle>
        {showContact && (
          <SectionBody>
            <Paragraph><strong>Email:</strong> <ContactLink href="mailto:inbox@wilfredocasas.com">inbox@wilfredocasas.com</ContactLink></Paragraph>
            <Paragraph>
              <strong>Instagram:</strong>{' '}
              <ContactLink href="https://www.instagram.com/ayakuchogamelab/" target="_blank" rel="noreferrer noopener">
                @ayakuchogamelab
              </ContactLink>
            </Paragraph>
            <Paragraph><strong>Signal / Telegram / WhatsApp:</strong>{' '}
              <WhatsAppLink href="https://wa.me/491757025622?text=Hi%20Wilfredo%2C%20I%20came%20across%20Humbiverse%20and%20would%20love%20to%20talk%20publishing." target="_blank">
                +491757025622
              </WhatsAppLink>
            </Paragraph>
          </SectionBody>
        )}
      </Section>

      <StaticSection style={{ marginTop: 36 }}>
        <h3>More Pictures</h3>
        <GalleryRow>
          <SmallImage
            src={hostel1}
            alt="The Humbiverse (1)"
            onClick={() => setLightbox({ src: hostel1, alt: 'The Humbiverse (1)' })}
          />
          <RotatedSmallImage
            src={hostel2}
            alt="The Humbiverse (2)"
            onClick={() => setLightbox({ src: hostel2, alt: 'The Humbiverse (2)', rotate: true })}
          />
          <SmallImage
            src={hostel3}
            alt="The Humbiverse (3)"
            onClick={() => setLightbox({ src: hostel3, alt: 'The Humbiverse (3)' })}
          />
          <SmallImage
            src={multiverse1}
            alt="The Humbiverse (4)"
            onClick={() => setLightbox({ src: multiverse1, alt: 'The Humbiverse (4)' })}
          />
          <SmallImage
            src={multiverse2}
            alt="The Humbiverse (5)"
            onClick={() => setLightbox({ src: multiverse2, alt: 'The Humbiverse (5)' })}
          />
        </GalleryRow>
      </StaticSection>

      {lightbox && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          onKeyDown={e => { if (e.key === 'Escape') closeLightbox(); }}
          tabIndex={-1}
        >
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" type="button" onClick={closeLightbox} aria-label="Close">×</button>
            <img
              className="lightbox-img"
              src={lightbox.src}
              alt={lightbox.alt}
              style={lightbox.rotate ? { transform: 'rotate(180deg)' } : undefined}
            />
          </div>
        </div>
      )}
    </Container>
    </PageWrapper>
  );
};

export default HostelParadisoSellSheet;
