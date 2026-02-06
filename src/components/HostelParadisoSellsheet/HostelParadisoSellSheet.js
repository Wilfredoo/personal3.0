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
  WhatsAppLink,
  HeroImage,
} from './styles';
import hostelParadisoImage from '../../assets/images/Hostel_paradiso.jpeg';

const HostelParadisoSellSheet = () => {
  const [showKeyInfo, setShowKeyInfo] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showHowItPlays, setShowHowItPlays] = useState(false);
  const [showScoring, setShowScoring] = useState(false);
  const [showUnique, setShowUnique] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <Container>
      <Title>Hostel Paradiso</Title>
      <Subtitle>Aim to take ownership of the quirkiest hostel in town.</Subtitle>

      <HeroImage src={hostelParadisoImage} alt="Hostel Paradiso prototype" />

      <Section>
        <h3 onClick={() => setShowKeyInfo(!showKeyInfo)}>Key Information {showKeyInfo ? '▲' : '▼'}</h3>
        {showKeyInfo && (
          <>
            <Paragraph><strong>Players:</strong> 3 to 10</Paragraph>
            <Paragraph><strong>Playtime:</strong> 20 minutes</Paragraph>
            <Paragraph><strong>Genre:</strong> Party, creative writing, clue-guessing</Paragraph>
          </>
        )}
      </Section>

      <Section>
        <h3 onClick={() => setShowOverview(!showOverview)}>Game Overview {showOverview ? '▲' : '▼'}</h3>
        {showOverview && (
          <Paragraph>
            The group draws one sentence. Each player writes a line that either replies to it or could have led to it, and
            anchors that line to a specific hostel image featuring a dialogue between two characters. When sentences are revealed, everyone tries to guess the right
            floor for each line. You want most people to find your floor, but not everyone.
          </Paragraph>
        )}
      </Section>

      <Section>
        <h3 onClick={() => setShowHowItPlays(!showHowItPlays)}>How It Plays {showHowItPlays ? '▲' : '▼'}</h3>
        {showHowItPlays && (
          <List>
            <ListItem>Draw a shared sentence.</ListItem>
            <ListItem>Draw a lead word (optional bonus).</ListItem>
            <ListItem>Each player writes a reply or prompt that fits the group sentence and one image.</ListItem>
            <ListItem>Players record the floor number of their chosen image.</ListItem>
            <ListItem>One after one, players read out the dialogues (group sentence + written sentence), then everyone guesses the intended apartment where this dialogue took place.</ListItem>
          </List>
        )}
      </Section>

      <Section>
        <h3 onClick={() => setShowScoring(!showScoring)}>Scoring {showScoring ? '▲' : '▼'}</h3>
        {showScoring && (
          <Paragraph>
            If everyone guesses your floor correctly, or if no one does, you score no points and the others do. Aim for a
            strong majority with at least one miss. After three rounds, the player with the most points becomes the new owner of Hostel Paradiso.
          </Paragraph>
        )}
      </Section>

      <Section>
        <h3 onClick={() => setShowUnique(!showUnique)}>What makes it special {showUnique ? '▲' : '▼'}</h3>
        {showUnique && (
          <List>
            <ListItem><strong>100 Unique Situations:</strong> Each image captures an unconventional two-character moment that begs for an explanation and invites multiple interpretations.</ListItem>
            <ListItem><strong>Double-Fit Writing:</strong> One line must make sense for both the shared sentence and the chosen image—bringing associative storytelling to a whole new level.</ListItem>
          </List>
        )}
      </Section>

      <Section>
        <h3 onClick={() => setShowContact(!showContact)}> Contact {showContact ? '▲' : '▼'}</h3>
        {showContact && (
          <>
            <Paragraph>If you’re interested in publishing or distributing Hostel Paradiso, feel free to reach out:</Paragraph>
            <Paragraph><strong>Email:</strong> <ContactLink href="mailto:inbox@wilfredocasas.com">inbox@wilfredocasas.com</ContactLink></Paragraph>
            <Paragraph><strong>WhatsApp:</strong> <WhatsAppLink href="https://wa.me/491757025622?text=Hi%20Wilfredo%2C%20I%20came%20across%20Hostel%20Paradiso%20and%20would%20love%20to%20talk%20publishing." target="_blank">+49 175 702 5622</WhatsAppLink></Paragraph>
          </>
        )}
      </Section>
    </Container>
  );
};

export default HostelParadisoSellSheet;
