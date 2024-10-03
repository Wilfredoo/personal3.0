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
          src="https://www.youtube.com/embed/YwN1Q7n6njA" 
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
            <Paragraph><strong>Playtime:</strong> 30 to 45 minutes</Paragraph>
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
              <strong>Unique Sessions:</strong> Every game round is different, thanks to the dynamic exchange of information through event cards and varied game modes, ensuring no two games are ever the same.
            </ListItem>
            <ListItem>
              <strong>Flexible Game Modes:</strong> Multiple game modes cater to different player preferences, offering a range of dynamics and complexity suitable for both casual and experienced players.
            </ListItem>
            <ListItem>
              <strong>First Non-Binary Anonymous Voting System:</strong> Ayakucho introduces the first-ever non-binary anonymous voting, allowing players to vote for any individual in secret—something never seen in a social deduction game.
            </ListItem>
          </List>
        )}
      </Section>
  {/* Demons of Peru Section */}
  <Section>
        <h3 onClick={() => setShowDemons(!showDemons)}>Demons of Peru {showDemons ? '▲' : '▼'}</h3>
        {showDemons && (
          <Paragraph>
            Inspired by Peruvian folklore, Ayakucho features Andean and Amazonian demonology. Players encounter mythical creatures and ancient spirits, adding depth to the game's strategic and immersive experience.
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
          Video impressions of Ayakucho
        </VideoLink>
      </ListItem>
      <ListItem>
        <ImageLink href="https://www.instagram.com/play_ayakucho/" target="_blank" rel="noreferrer noopener">
          Instagram Page of Ayakucho
        </ImageLink>
      </ListItem>
      <ListItem>
        <a href="https://boardgamegeek.com/boardgame/342455/bamberg" target="_blank" rel="noreferrer noopener">
          Bamberg's BGG page
        </a>
      </ListItem>
      <ListItem>
        <a href="https://boardgamegeek.com/thread/3128189/werewolves-done-right-english-german-review" target="_blank" rel="noreferrer noopener">
          An unsolicited written review of Bamberg by one of our most passionate backers
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.youtube.com/watch?v=MFkhvvn7TAw&t=395" target="_blank" rel="noreferrer noopener">
          An unsolicited video review by YouTuber BrettBallet
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.kickstarter.com/projects/bamberg/bamberg-a-thrilling-game-of-social-deduction" target="_blank" rel="noreferrer noopener">
          No-budget successful Kickstarter for Bamberg
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.instagram.com/ma.stak/" target="_blank" rel="noreferrer noopener">
          Instagram of the artist Maria Stankievič
        </a>
      </ListItem>
    </List>
  )}
</Section>


    

      {/* Contact Information */}
      <Section>
        <h3>Contact Information</h3>
        <Paragraph>If you’re interested in publishing or distributing Ayakucho, feel free to reach out:</Paragraph>
        <Paragraph><strong>Name:</strong> Wilfredo Casas</Paragraph>
        <Paragraph><strong>Email:</strong> <ContactLink href="mailto:inbox@wilfredocasas.com">inbox@wilfredocasas.com</ContactLink></Paragraph>
        <Paragraph><strong>WhatsApp:</strong> <WhatsAppLink href="https://wa.me/4915781295360?text=Hi%20Wilfredo%2C%20I%20came%20across%20Ayakucho%20and%20I%20think%20it%27s%20an%20amazing%20concept!%20Let%27s%20discuss%20how%20we%20can%20work%20together%20to%20bring%20this%20game%20to%20a%20wider%20audience." target="_blank">+49 157 8129 5360</WhatsAppLink></Paragraph>
      </Section>
    </Container>
  );
};

export default SellSheet;
