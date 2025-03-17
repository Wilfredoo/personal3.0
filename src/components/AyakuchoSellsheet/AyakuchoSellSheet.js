import React, { useState } from 'react';
import { 
  Container, Title, Subtitle, Section, Paragraph, List, ListItem, ContactLink, ImageLink, VideoLink, WhatsAppLink, VideoEmbed
} from './styles';

const SellSheet = () => {
  // State to toggle each section
  const [showKeyInfo, setShowKeyInfo] = useState(false);
  const [showGameOverview, setShowGameOverview] = useState(false);
  const [showUniqueFeatures, setShowUniqueFeatures] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showDemons, setShowDemons] = useState(false);

  return (
    <Container>
      <Title>Ayakucho</Title>
      <Subtitle>An attempt to make the ultimate game of social deduction.</Subtitle>

      {/* Embedded Video */}
      <VideoEmbed 
          src="https://www.youtube.com/embed/KSrXyIQeAUo" 
          title="Ayakucho Board Game Overview" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
      />

      {/* Key Information Section */}
      <Section>
        <h3 onClick={() => setShowKeyInfo(!showKeyInfo)}>Key Information {showKeyInfo ? '▲' : '▼'}</h3>
        {showKeyInfo && (
          <>
            <Paragraph><strong>Players:</strong> 6 to 12</Paragraph>
            <Paragraph><strong>Playtime:</strong> 20 to 50 minutes</Paragraph>
            <Paragraph><strong>Age Range:</strong> 12+</Paragraph>
            <Paragraph><strong>Game Components:</strong> 18 Gossip Event cards, 15 Stress Event cards, 12 Role cards, 4 Team reveal cards, 12 Voting wheels, 12 Number tokens, 1 Game board, 6 Game modes, 1 Rulebook.</Paragraph>
          </>
        )}
      </Section>

      {/* Game Overview Section */}
      <Section>
        <h3 onClick={() => setShowGameOverview(!showGameOverview)}>Game Overview {showGameOverview ? '▲' : '▼'}</h3>
        {showGameOverview && (
          <Paragraph>
            Ayakucho is a social deduction game for 6 to 12 players, set in the mystical Peruvian village of Ayakucho. Players take on hidden roles, forming alliances and engaging in strategic deception. With themes based on Peruvian demonology, varied game modes, and dynamic event cards that influence the flow of information, each game session is a unique and fast-paced experience with high replayability.
          </Paragraph>
        )}
      </Section>

      {/* Unique Selling Points */}
      <Section>
        <h3 onClick={() => setShowUniqueFeatures(!showUniqueFeatures)}>3 Unique Features {showUniqueFeatures ? '▲' : '▼'}</h3>
        {showUniqueFeatures && (
          <List>
            <ListItem>
              <strong>Infinite Paths:</strong> Each player randomly receives a public number token, determining their information exchanges. This creates endless possibilities, ensuring no two games are alike.
            </ListItem>
            <ListItem>
              <strong>Anonymous Voting:</strong> Ever wondered how different Werewolf would be if players could somehow vote anonymously for which players to kill? Ayakucho introduces this possibility for the first time seen in a social deduction game.
            </ListItem>
            <ListItem>
              <strong>Custom Modes:</strong> While there are general rules as a foundation, players can choose from different game modes based on their experience level and time availability. Plus, they can even create their own!
            </ListItem>
           
          </List>
        )}
      </Section>
  {/* Demons of Peru Section */}
  <Section>
        <h3 onClick={() => setShowDemons(!showDemons)}>Demons of Peru {showDemons ? '▲' : '▼'}</h3>
        {showDemons && (
          <Paragraph>
            Inspired by Peruvian folklore and demonology, the game immerses players in a mystical world filled with eerie creatures, fear and wonder, for ancient spirits and supernatural events.
          </Paragraph>
        )}
      </Section>
      {/* More Section */}
      <Section>
  <h3 onClick={() => setShowMore(!showMore)}>Links of Interest {showMore ? '▲' : '▼'}</h3>
  {showMore && (
    <List>
      <ListItem>
        <VideoLink href="https://www.youtube.com/playlist?list=PLmT80T_P4eJb4IzNmhMLs0QHrnNKyphD5" target="_blank" rel="noreferrer noopener">
          More video impressions of Ayakucho
        </VideoLink>
      </ListItem>
      <ListItem>
        <ImageLink href="https://www.instagram.com/play_ayakucho/" target="_blank" rel="noreferrer noopener">
          Instagram Page
        </ImageLink>
      </ListItem>
      <ListItem>
        <a href="https://boardgamegeek.com/boardgame/342455/bamberg" target="_blank" rel="noreferrer noopener">
          BGG page of Bamberg (previous name of the game)
        </a>
      </ListItem>
      <ListItem>
        <a href="https://boardgamegeek.com/thread/3128189/werewolves-done-right-english-german-review" target="_blank" rel="noreferrer noopener">
          Review by one of our most passionate backers
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.youtube.com/watch?v=MFkhvvn7TAw&t=395" target="_blank" rel="noreferrer noopener">
          An unsolicited review by content creator BrettBallet (minute 6:35)
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.kickstarter.com/projects/bamberg/bamberg-a-thrilling-game-of-social-deduction" target="_blank" rel="noreferrer noopener">
          Small but successful Kickstarter for Bamberg
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.instagram.com/ma.stak/" target="_blank" rel="noreferrer noopener">
          Instagram artist Maria Stankevich
        </a>
      </ListItem>
    </List>
  )}
</Section>


    

      {/* Contact Information */}
      <Section>
        <h3>Contact Information</h3>
        <Paragraph>If you’re interested in publishing, distributing or reviewing Ayakucho, feel free to reach out:</Paragraph>
        <Paragraph><strong>Name:</strong> Wilfredo Casas</Paragraph>
        <Paragraph><strong>Email:</strong> <ContactLink href="mailto:inbox@wilfredocasas.com">inbox@wilfredocasas.com</ContactLink></Paragraph>
        <Paragraph><strong>Signal/WhatsApp:</strong> <WhatsAppLink href="https://wa.me/4915781295360?text=Hi%20Wilfredo%2C%20I%20came%20across%20Ayakucho%20and%20I%20think%20it%27s%20an%20amazing%20concept!%20Let%27s%20discuss%20how%20we%20can%20work%20together%20to%20bring%20this%20game%20to%20a%20wider%20audience." target="_blank">+49 157 8129 5360</WhatsAppLink></Paragraph>
      </Section>
    </Container>
  );
};

export default SellSheet;
