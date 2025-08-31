import React, { useState } from 'react';
import { 
  Container, Title, Subtitle, Section, Paragraph, List, ListItem, ContactLink, WhatsAppLink, CoverImage, ImageNote
} from './styles';
import woodlandsCover from '../../assets/images/woodlands_cover.png';

const SellSheet = () => {
  const [showKeyInfo, setShowKeyInfo] = useState(false);
  const [showGameOverview, setShowGameOverview] = useState(false);
  const [showUniqueFeatures, setShowUniqueFeatures] = useState(false);
  const [showWoodlandWar, setShowWoodlandWar] = useState(false);

  return (
    <Container> 
      <Title>The Woodlands</Title>
      <Subtitle>A brutal tactical card game of woodland warfare where only one player survives.</Subtitle>
      
      <CoverImage src={woodlandsCover} alt="The Woodlands Game Cover" />
      <ImageNote>AI generated image</ImageNote>

      <Section>
        <h3 onClick={() => setShowKeyInfo(!showKeyInfo)}>Key Information {showKeyInfo ? '▲' : '▼'}</h3>
        {showKeyInfo && (
          <>
            <Paragraph><strong>Players:</strong> 2 to 8</Paragraph>
            <Paragraph><strong>Playtime:</strong> 15 to 25 minutes</Paragraph>
            <Paragraph><strong>Age Range:</strong> 10+</Paragraph>
            <Paragraph><strong>Status:</strong> Early Testing</Paragraph>
            <Paragraph><strong>Game Components:</strong> 1 box, 25 cards, 30 fruit tokens, 10 dam tokens (beaver-built structures).</Paragraph>
          </>
        )}
      </Section>

      <Section>
        <h3 onClick={() => setShowGameOverview(!showGameOverview)}>Game Overview {showGameOverview ? '▲' : '▼'}</h3>
        {showGameOverview && (
          <Paragraph>
            In a brutal woodland war, monkeys steal fruit, beavers fortify their defenses by building dams, and otters launch deadly raids to kill their neighbours. Players begin with 3 animal cards (their lives) and 5 fruit tokens—but you need fruit equal to your lives or you starve. Each round, everyone simultaneously chooses and plays a card: monkeys steal first, then beavers fortify, finally otters attack. The more you use each species, the better they become at their specialty. After each round, random events like floods or rainbows shake up the battlefield, forcing players to adapt their survival strategy.
          </Paragraph>
        )}
      </Section>

      {/* Unique Selling Points */}
      <Section>
        <h3 onClick={() => setShowUniqueFeatures(!showUniqueFeatures)}>3 Unique Features {showUniqueFeatures ? '▲' : '▼'}</h3>
        {showUniqueFeatures && (
          <List>
            <ListItem>
              <strong>Simultaneous Actions:</strong> All players choose and reveal their cards at the same time, creating exciting moments of anticipation.
            </ListItem>
            <ListItem>
              <strong> Specialization:</strong> The more you use each animal type, the more powerful they become at their specific abilities, getting players to commit to their chosen strategies.
            </ListItem>
            <ListItem>
              <strong>Environmental Events:</strong> Floods and rainbows shake up the battlefield after each round, ensuring no two games are the same.
            </ListItem>
          </List>
        )}
      </Section>

      <Section>
        <h3 onClick={() => setShowWoodlandWar(!showWoodlandWar)}>The Woodland War {showWoodlandWar ? '▲' : '▼'}</h3>
        {showWoodlandWar && (
          <Paragraph>
            Three factions battle for dominance in the woodlands: monkeys who steal fruit, beavers who build defensive dams, and otters who launch lethal raids on their rivals. Only one player can survive by either starving their enemies, building impregnable defenses, or sending their best otters on murder missions.
          </Paragraph>
        )}
      </Section>

      <Section>
        <Paragraph>If you're interested in publishing or distributing The Woodlands, feel free to reach out:</Paragraph>
        <Paragraph><strong>Name:</strong> Wilfredo Casas</Paragraph>
        <Paragraph><strong>Email:</strong> <ContactLink href="mailto:inbox@wilfredocasas.com">inbox@wilfredocasas.com</ContactLink></Paragraph>
        <Paragraph><strong>WhatsApp:</strong> <WhatsAppLink href="https://wa.me/4915781295360?text=Hi%20Wilfredo%2C%20I%20came%20across%20The%20Woodlands%20and%20I%20think%20it%27s%20an%20amazing%20concept!%20Let%27s%20discuss%20how%20we%20can%20work%20together%20to%20bring%20this%20game%20to%20a%20wider%20audience." target="_blank">+49 157 8129 5360</WhatsAppLink></Paragraph>
      </Section>
    </Container>
  );
};

export default SellSheet;
