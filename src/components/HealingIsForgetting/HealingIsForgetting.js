import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
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
  ContactButton,
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
            <List>
              <ListItem>Researching memory, trauma, and therapy.</ListItem>
              <ListItem>Outlining the screenplay.</ListItem>
              <ListItem>Looking for key collaborators—cinematography, production, financing, and writing mentorship </ListItem>
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