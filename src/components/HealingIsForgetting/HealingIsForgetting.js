// HealingIsForgetting.jsx
import { useState } from 'react';
import { Mail } from 'lucide-react';
import {
  Container,
  Header,
  HeaderContent,
  FilmBadge,
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
  ImageCaption
} from './Styles';

export default function HealingIsForgetting() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

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
    <Paragraph>
      Sophie is a psychotherapist in a world where Neuro-Emotional Editing (NEE)—a technology originally developed by the Israeli military to treat PTSD—has just gone mainstream. Everyone is talking about it: at parties, on trains, in viral influencer videos. Clinics have months-long waiting lists. The promise is seductively simple: write down your traumatic memories, and they can be erased with a click.
    </Paragraph>
    <Paragraph>
      As NEE gains widespread adoption, people begin using it not only to erase severe trauma, but also minor discomforts—an argument with a stranger, a cringey moment from high school, even stepping in dog shit on the way to work—all in pursuit of the perfect day, every day.
    </Paragraph>
    <Paragraph>
      Sophie's practice collapses. Her last remaining patient chooses erasure over therapy. Her partner, Chen Wei-hao, leaves for Taiwan to assist soldiers suffering from PTSD amid an ongoing Chinese invasion, embracing the very technology Sophie distrusts. Meanwhile, a community in Peru rejects NEE entirely, insisting that memory—painful or not—is essential to identity.
    </Paragraph>
    <Paragraph>
      Unemployed and increasingly alienated in a world that no longer seems to need her, Sophie is forced to confront a deeper question: other than memories, what is lost in the process of forgetting at will? And if the absence of pain equals happiness, is it still worth pursuing happiness at the cost of identity and self?
    </Paragraph>
  </Card>
</Section>

    <Section>
  <Card>
    <SectionTitle>Project Status</SectionTitle>
    <List>
      <ListItem>Researching memory, trauma, and therapy.</ListItem>
      <ListItem>Outlining the screenplay; first draft not written yet.</ListItem>
      <ListItem>Looking at potential producers.</ListItem>
    </List>
  </Card>
</Section>

        <Section>
          <IdeaBoardImage src={require('../../assets/images/idea_board.jpeg')} alt="Idea Board" />
          <ImageCaption>Idea board</ImageCaption>
        </Section>

        <Section>
          <ContactCard>
            <SectionTitle> </SectionTitle>
            <Paragraph center>
              Reach out to discuss.
            </Paragraph>
            <ContactButton href="mailto:inbox@wilfredocasas.com">
              <Mail size={20} />
              inbox@wilfredocasas.com
            </ContactButton>
          </ContactCard>
        </Section>
      </Main>

      <Footer>
        <p>© 2026 Wilfredo Casas. All rights reserved.</p>
      </Footer>
    </Container>
  );
}
