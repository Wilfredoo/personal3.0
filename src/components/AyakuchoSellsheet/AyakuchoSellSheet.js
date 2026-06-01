import React, { useState } from 'react';
import {
  PageWrapper, Container, TopNav, Title, Subtitle, VideoEmbed,
  StaticSection, Section, SectionToggle, SectionBody,
  Paragraph, List, ListItem, ContactLink, ImageLink, VideoLink, WhatsAppLink,
  PhotoGrid, Photo, LightboxOverlay, LightboxImg,
} from './styles';

const SellSheet = () => {
  const [showKeyInfo, setShowKeyInfo] = useState(false);
  const [showGameOverview, setShowGameOverview] = useState(false);
  const [showUniqueFeatures, setShowUniqueFeatures] = useState(false);
  const [showDemons, setShowDemons] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  return (
    <PageWrapper>
    <Container>
      <TopNav>
        <a href="/board-games">← Board games</a>
        <span aria-hidden="true">·</span>
        <a href="/">Home</a>
      </TopNav>

      <Title>Ayakucho</Title>
      <Subtitle>Trust, betrayal, and Peruvian folklore.</Subtitle>

      <VideoEmbed
        src="https://www.youtube.com/embed/KSrXyIQeAUo"
        title="Ayakucho Board Game Overview"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <PhotoGrid>
        <Photo src="/images/ayakucho/1.JPG" alt="Ayakucho box cover" onClick={() => setLightbox('/images/ayakucho/1.JPG')} />
        <Photo src="/images/ayakucho/2.JPG" alt="Ayakucho game board with tokens" onClick={() => setLightbox('/images/ayakucho/2.JPG')} />
        <Photo src="/images/ayakucho/3.JPG" alt="Ayakucho role cards" onClick={() => setLightbox('/images/ayakucho/3.JPG')} />
      </PhotoGrid>

      {lightbox && (
        <LightboxOverlay onClick={() => setLightbox(null)}>
          <LightboxImg src={lightbox} alt="Ayakucho enlarged" />
        </LightboxOverlay>
      )}

      <StaticSection>
        <h3>Story</h3>
        <Paragraph>
          One day, after a game of Werewolf, I wondered: what if the voting was anonymous? Three years of work later, this is
          the result.
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
            <Paragraph><strong>Players:</strong> 5 to 12</Paragraph>
            <Paragraph><strong>Playtime:</strong> 25 minutes</Paragraph>
            <Paragraph><strong>Age Range:</strong> 16+</Paragraph>
            <Paragraph><strong>Status:</strong> Advanced Prototype</Paragraph>
            <Paragraph><strong>Components:</strong> 12 Stressful Event cards, 12 Role cards, 4 Team reveal cards, 12 Voting wheels, 12 Number tokens, 1 Game board, 1 unlucky bag with 12 tokens, 1 Rulebook.</Paragraph>
          </SectionBody>
        )}
      </Section>

      <Section>
        <SectionToggle
          type="button"
          onClick={() => setShowGameOverview(!showGameOverview)}
          aria-expanded={showGameOverview}
        >
          Game Overview <span className="chevron">▼</span>
        </SectionToggle>
        {showGameOverview && (
          <SectionBody>
            <Paragraph>
              Ayakucho is a social deduction game set in the mystical Peruvian village of Ayakucho. Players take on hidden roles,
              forming alliances and engaging in deception. With two different game modes and dynamic events that influence the flow
              of information shared among players, the game offers endless replayability.
            </Paragraph>
          </SectionBody>
        )}
      </Section>

      <Section>
        <SectionToggle
          type="button"
          onClick={() => setShowUniqueFeatures(!showUniqueFeatures)}
          aria-expanded={showUniqueFeatures}
        >
          3 Unique Features <span className="chevron">▼</span>
        </SectionToggle>
        {showUniqueFeatures && (
          <SectionBody>
            <List>
              <ListItem>
                <strong>Infinite Paths:</strong> Each player randomly receives a public number token, determining their information
                exchanges. This creates endless possibilities, ensuring no two games are alike.
              </ListItem>
              <ListItem>
                <strong>Anonymous Voting System:</strong> Ever wondered how different Werewolf would be if players could somehow
                vote anonymously for which players to kill? Ayakucho introduces this possibility.
              </ListItem>
              <ListItem>
                <strong>Two Game Modes:</strong> Players can choose between two modes — one for groups as small as 5, and another
                for up to 12 players, featuring 3 teams and praised by social deduction enthusiasts.
              </ListItem>
            </List>
          </SectionBody>
        )}
      </Section>

      <Section>
        <SectionToggle
          type="button"
          onClick={() => setShowDemons(!showDemons)}
          aria-expanded={showDemons}
        >
          Demons of Peru <span className="chevron">▼</span>
        </SectionToggle>
        {showDemons && (
          <SectionBody>
            <Paragraph>
              Inspired by Peruvian folklore and demonology, the game immerses players in a mystical world filled with eerie
              creatures, fear and wonder, ancient spirits and supernatural events.
            </Paragraph>
          </SectionBody>
        )}
      </Section>

      <Section>
        <SectionToggle
          type="button"
          onClick={() => setShowMore(!showMore)}
          aria-expanded={showMore}
        >
          Links of Interest <span className="chevron">▼</span>
        </SectionToggle>
        {showMore && (
          <SectionBody>
            <List>
              <ListItem>
                <VideoLink href="https://www.youtube.com/playlist?list=PLmT80T_P4eJb4IzNmhMLs0QHrnNKyphD5" target="_blank" rel="noreferrer noopener">
                  Video impressions of Ayakucho
                </VideoLink>
              </ListItem>
              <ListItem>
                <ImageLink href="https://www.instagram.com/play_ayakucho/" target="_blank" rel="noreferrer noopener">
                  Official Instagram page
                </ImageLink>
              </ListItem>
              <ListItem>
                <a href="https://boardgamegeek.com/boardgame/342455/bamberg" target="_blank" rel="noreferrer noopener">
                  BGG page of Bamberg (the previous name of the game)
                </a>
              </ListItem>
              <ListItem>
                <a href="https://boardgamegeek.com/thread/3128189/werewolves-done-right-english-german-review" target="_blank" rel="noreferrer noopener">
                  Review by one of our most passionate backers
                </a>
              </ListItem>
              <ListItem>
                <a href="https://www.youtube.com/watch?v=MFkhvvn7TAw&t=395" target="_blank" rel="noreferrer noopener">
                  A review by content creator BrettBallet (minute 6:35)
                </a>
              </ListItem>
              <ListItem>
                <a href="https://www.kickstarter.com/projects/bamberg/bamberg-a-thrilling-game-of-social-deduction" target="_blank" rel="noreferrer noopener">
                  Small but successful Kickstarter for Bamberg
                </a>
              </ListItem>
              <ListItem>
                <a href="https://www.instagram.com/ma.stak/" target="_blank" rel="noreferrer noopener">
                  Instagram of the game's artist Maria Stankevich
                </a>
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
            <Paragraph><strong>WhatsApp:</strong> <WhatsAppLink href="https://wa.me/491757025622?text=Hi%20Wilfredo%2C%20I%20came%20across%20Ayakucho%20and%20I%20think%20it%27s%20an%20amazing%20concept!%20Let%27s%20discuss%20how%20we%20can%20work%20together%20to%20bring%20this%20game%20to%20a%20wider%20audience." target="_blank">+49 175 702 5622</WhatsAppLink></Paragraph>
          </SectionBody>
        )}
      </Section>
    </Container>
    </PageWrapper>
  );
};

export default SellSheet;
