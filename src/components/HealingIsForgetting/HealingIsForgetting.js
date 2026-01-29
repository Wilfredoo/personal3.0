import { useState } from 'react';
import synopses from './synopses';
import {
  Container,
  Header,
  HeaderContent,
  Title,
  Byline,
  Main,
  Section,
  Card,
  SectionTitle,
  Paragraph,
  List,
  ListItem,
  ContactCard,
  Footer,
  IdeaBoardImage,
  ImageCaption,
  CollapsibleButton,
  CollapsibleContent
} from './Styles';

export default function HealingIsForgetting() {
  const [showPastSynopses, setShowPastSynopses] = useState(false);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Title>Healing is Forgetting</Title>
          <Byline>A film in progress</Byline>
          <Paragraph style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>
  Last updated: January 29, 2026
</Paragraph>
        </HeaderContent>
      </Header>

      <Main>
        <Section>
          <Card>
            <SectionTitle>Logline</SectionTitle>
            <Paragraph>
              When a psychotherapist loses her last patient to an emerging technology called NEE—Neuro-Emotional Editing, which allows people to delete painful memories—she must confront whether her life's work of helping others process trauma is becoming obsolete.
            </Paragraph>
          </Card>
        </Section>

        <Section>
          <Card>
            <SectionTitle>Synopsis</SectionTitle>
            {synopses.map((syn, index) => {
              if (index === 0) {
                return (
                  <div key={syn.version}>
                    <Paragraph><strong>{syn.title} – {syn.version}</strong></Paragraph>
                    {syn.paragraphs.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
                  </div>
                );
              }
              return null;
            })}

            <CollapsibleButton onClick={() => setShowPastSynopses(!showPastSynopses)}>
              {showPastSynopses ? 'Hide Past Versions' : 'Show Past Versions'}
            </CollapsibleButton>

            {showPastSynopses &&
              synopses.slice(1).map((syn) => (
                <CollapsibleContent key={syn.version}>
                  <Paragraph><strong>{syn.title} – {syn.version}</strong></Paragraph>
                  {syn.paragraphs.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
                </CollapsibleContent>
              ))
            }
          </Card>
        </Section>

        <Section>
          <Card>
          <SectionTitle>Project Status</SectionTitle>
<Paragraph><strong>Research – Books I'm reading:</strong></Paragraph>
<List>
  <ListItem>"Maybe You Should Talk to Someone" by Lori Gottlieb</ListItem>
  <ListItem>"Reasons and Persons" by Derek Parfit</ListItem>
  <ListItem>"Searching for Memory" by Daniel Schacter</ListItem>
  <ListItem>"The Hero with a Thousand Faces" by Joseph Campbell</ListItem>
</List>

<Paragraph><strong>Development:</strong></Paragraph>
<List>
  <ListItem>Outlining the screenplay.</ListItem>
</List>

<Paragraph><strong>Looking for key collaborators:</strong></Paragraph>
<List>
  <ListItem>Cinematography</ListItem>
  <ListItem>Production</ListItem>
  <ListItem>Financing</ListItem>
  <ListItem>Neuroscience advisor</ListItem>
  <ListItem>Clinical psychotherapy advisor</ListItem>
  <ListItem>Writing mentorship</ListItem>
</List>
          </Card>
        </Section>

        <Section>
          <IdeaBoardImage src={require('../../assets/images/idea_board.jpeg')} alt="Idea Board" />
          <ImageCaption>Idea board</ImageCaption>
        </Section>

        <Section>
          <ContactCard>
            <Paragraph center>
              Reach out to discuss:             
            </Paragraph>
            <strong></strong>
             inbox@wilfredocasas.com
          </ContactCard>
        </Section>
      </Main>

      <Footer>
        <p>© 2026 Wilfredo Casas. All rights reserved.</p>
      </Footer>
    </Container>
  );
}