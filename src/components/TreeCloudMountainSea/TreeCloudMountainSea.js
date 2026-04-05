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
} from './styles';

import cloud1 from '../../assets/images/cloud1.jpg';
import cloud2 from '../../assets/images/cloud2.jpg';

const rules = [
  { id: 1, text: '3 of the same element in a straight line', points: 15 },
  { id: 2, text: '4 of the same element in a straight line', points: 30 },
  { id: 3, text: '3 of the same element diagonally', points: 25 },
  { id: 4, text: '4 of the same element diagonally', points: 45 },
  { id: 5, text: 'All 4 corners are different elements', points: 80 },
  { id: 6, text: 'cloud - mountain - sea in a straight or diagonal line', points: 25 },
  { id: 7, text: 'mountain - tree - mountain in a straight or diagonal line', points: 25 },
  { id: 8, text: 'sea - sea - cloud in a straight or diagonal line', points: 25 },
  { id: 9, text: '2x2 square with all different elements', points: 40 },
  { id: 10, text: 'sea - tree - mountain - cloud in a straight line', points: 75 },
  { id: 11, text: 'cloud - cloud - tree - tree in a straight line', points: 75 },
  { id: 12, text: 'Star: 4 different elements (one in each corner)', points: 100 },
];

const TreeCloudMountainSea = () => {
  const [showKeyInfo, setShowKeyInfo] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showHowItPlays, setShowHowItPlays] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showInteraction, setShowInteraction] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showMorePictures, setShowMorePictures] = useState(false);

  return (
    <Container>
      <Title>Tree Cloud Mountain Sea</Title>
      <Subtitle>A tactical game designed for both blind and sighted players.</Subtitle>

      <HeroImage src={cloud1} alt="Tree Cloud Mountain Sea" />

      <Section>
        <h3>Story</h3>
        <Paragraph>
          What if a game could be designed for both blind and sighted players alike?
        </Paragraph>
        <Paragraph>
          A game of chess with a blind man in Budapest inspired me to create this game. Once it&apos;s ready, it will be playable
          by blind-only groups, sighted-only groups, and mixed blind and sighted groups.
        </Paragraph>
      </Section>

      <Section>
        <h3 onClick={() => setShowKeyInfo(!showKeyInfo)}>
          Key Information {showKeyInfo ? '▲' : '▼'}
        </h3>
        {showKeyInfo && (
          <>
            <Paragraph><strong>Players:</strong> 3 to 5</Paragraph>
            <Paragraph><strong>Playtime:</strong> ~15 minutes</Paragraph>
            <Paragraph><strong>Core hook:</strong> everyone sees all scoring rules, but not which rule each player has.</Paragraph>
          </>
        )}
      </Section>

      <Section>
        <h3 onClick={() => setShowOverview(!showOverview)}>
          Game Overview {showOverview ? '▲' : '▼'}
        </h3>
        {showOverview && (
          <>
            <Paragraph>
              Tree Cloud Mountain Sea is a quick pattern-and-deduction game for 3 to 5 players. There are 12 scoring rules in
              the game. The full rule set is public, but each player secretly receives a different rule and tries to score it
              while keeping it hidden.
            </Paragraph>
          
          </>
        )}
      </Section>

      <Section>
        <h3 onClick={() => setShowHowItPlays(!showHowItPlays)}>
          How It Plays {showHowItPlays ? '▲' : '▼'}
        </h3>
        {showHowItPlays && (
          <List>
            <ListItem>All 12 scoring rules are visible to everyone.</ListItem>
            <ListItem>Each player gets 1 secret scoring rule (others don&apos;t know which one).</ListItem>
            <ListItem>Players fill slots on a shared board with pieces (tree / cloud / mountain / sea).</ListItem>
            <ListItem>Once per game, each player can move one placed piece to a different slot.</ListItem>
            <ListItem>When the last slot is filled, the game ends.</ListItem>
          </List>
        )}
      </Section>



      <Section>
        <h3 onClick={() => setShowContact(!showContact)}>
          Contact and links {showContact ? '▲' : '▼'}
        </h3>
        {showContact && (
          <>
            <Paragraph>
              <strong>Email:</strong>{' '}
              <ContactLink href="mailto:inbox@wilfredocasas.com">inbox@wilfredocasas.com</ContactLink>
            </Paragraph>
            <Paragraph>
              <strong>Instagram:</strong>{' '}
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
        <h3 onClick={() => setShowMorePictures(!showMorePictures)}>
          More Pictures {showMorePictures ? '▲' : '▼'}
        </h3>
        {showMorePictures && (
          <GalleryRow>
            <SmallImage src={cloud2} alt="Tree Cloud Mountain Sea (photo 2)" />
          </GalleryRow>
        )}
      </Section>

      <Spacer />


    </Container>
  );
};

export default TreeCloudMountainSea;
