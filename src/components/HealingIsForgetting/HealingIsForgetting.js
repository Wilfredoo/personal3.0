import { useState, useEffect } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';
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
  CollapsibleContent,
  PasswordOverlay,
  PasswordContainer,
  PasswordCard,
  PasswordTitle,
  PasswordDescription,
  PasswordForm,
  PasswordInputWrapper,
  PasswordInput,
  TogglePasswordButton,
  SubmitButton,
  ErrorMessage
} from './Styles';

export default function HealingIsForgetting() {
  const [showPastSynopses, setShowPastSynopses] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const latestSynopsis = synopses[0];

  const CORRECT_PASSWORD = 'healing2026';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      // Store authentication in session storage
      sessionStorage.setItem('healing-auth', 'true');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Check if user is already authenticated on component mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem('healing-auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <PasswordOverlay>
        <PasswordContainer>
          <PasswordCard>
            <Lock size={48} color="#000" style={{ margin: '0 auto 16px' }} />
            <PasswordTitle>Protected Content</PasswordTitle>
            <PasswordDescription>
              This page is password protected. Please enter the password to access the content.
            </PasswordDescription>
            <PasswordForm onSubmit={handleSubmit}>
              <PasswordInputWrapper>
                <PasswordInput
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
                <TogglePasswordButton
                  type="button"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </TogglePasswordButton>
              </PasswordInputWrapper>
              <SubmitButton type="submit">
                Access Content
              </SubmitButton>
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </PasswordForm>
          </PasswordCard>
        </PasswordContainer>
      </PasswordOverlay>
    );
  }

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
            <SectionTitle>Synopsis – {latestSynopsis.version}</SectionTitle>
            {synopses.map((syn, index) => {
              if (index === 0) {
                return (
                  <div key={syn.version}>
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
            <Paragraph><strong>Books to read:</strong></Paragraph>
            <List>
              <ListItem>"Maybe You Should Talk to Someone" by Lori Gottlieb - not yet started</ListItem> 
              <ListItem>"Reasons and Persons" (part 3) by Derek Parfit  - not yet started</ListItem>
              <ListItem>"Searching for Memory" by Daniel Schacter - in progress</ListItem> 
              <ListItem>"The Hero with a Thousand Faces" by Joseph Campbell - in progress</ListItem> 
            </List>

            <Paragraph><strong>Development:</strong></Paragraph>
              <List>
  <ListItem>Synopsis: version 3 — in progress</ListItem>
  <ListItem>Treatment: initial draft — starting</ListItem>
</List>


            <Paragraph><strong>Looking for key collaborators:</strong></Paragraph>
            <List>
              <ListItem>Cinematographer</ListItem>
              <ListItem>Producer</ListItem>
              <ListItem>Neuroscience advisor</ListItem>
              <ListItem>Psychotherapy advisor</ListItem>
              <ListItem>Writing mentor</ListItem>
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
           <strong> inbox@wilfredocasas.com</strong>

            </Paragraph>
          </ContactCard>
        </Section>
      </Main>

      <Footer>
        <p>© 2026 Wilfredo Casas. All rights reserved.</p>
      </Footer>
    </Container>
  );
}
