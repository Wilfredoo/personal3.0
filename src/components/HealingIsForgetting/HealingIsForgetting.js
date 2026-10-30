import { useState, useEffect } from 'react';
import { Eye, EyeOff, ChevronDown, ChevronUp } from 'lucide-react';
import { treatment, world, glossary, script } from './shortFilm';
import FeatureFilmArchive from './archive/FeatureFilmArchive';
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
  CollapsibleCard,
  CollapsibleButton,
  CollapsibleContent,
  PasswordForm,
  PasswordInputWrapper,
  PasswordInput,
  TogglePasswordButton,
  SubmitButton,
  ErrorMessage
} from './Styles';

// Shows text between underscores in italics.
const withItalics = (text) =>
  text.split(/_([^_]+)_/).map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part));

const renderScriptEntry = (entry, i) => {
  if (typeof entry === 'string') return <Paragraph key={i}>{entry}</Paragraph>;
  if (entry.scene) return <Paragraph key={i} style={{ marginTop: '2rem' }}><strong>{entry.scene}</strong></Paragraph>;
  if (entry.list) {
    return (
      <List key={i}>
        {entry.list.map((item, j) => <ListItem key={j}>{item}</ListItem>)}
      </List>
    );
  }
  return (
    <Paragraph key={i} style={{ paddingLeft: '1.5rem' }}>
      <strong>{entry.who}</strong>
      <br />
      {entry.line}
    </Paragraph>
  );
};

export default function HealingIsForgetting() {
  const [isScriptExpanded, setIsScriptExpanded] = useState(false);
  const [isArchiveExpanded, setIsArchiveExpanded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const CORRECT_PASSWORD = 'healing2026';
  const AUTH_STORAGE_KEY = 'healing-auth-v2';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      // Store authentication in session storage
      sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Dark background for this page
  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#080808';
    return () => { document.body.style.backgroundColor = prev; };
  }, []);

  // Check if user is already authenticated on component mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Title>Healing is Forgetting</Title>
          <Byline>A short film in progress</Byline>
          <Paragraph style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>
            Last updated: September 30, 2026
          </Paragraph>
        </HeaderContent>
      </Header>

      <Main>
        {!isAuthenticated && (
          <Section>
            <Card>
              <SectionTitle>Protected Materials</SectionTitle>
              <Paragraph>
                This page is password-protected.
                Email <strong>inbox@wilfredocasas.com</strong> to request access.
              </Paragraph>
              <PasswordForm onSubmit={handleSubmit}>
                <PasswordInputWrapper>
                  <PasswordInput
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    autoComplete="current-password"
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
                  Unlock
                </SubmitButton>
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </PasswordForm>
            </Card>
          </Section>
        )}

        {isAuthenticated && (
          <>
            <Section>
              <Card>
                <SectionTitle>Treatment</SectionTitle>
                {treatment.scenes.map((scene, i) => (
                  <Paragraph key={i}>
                    <strong>{i + 1}. {scene.title}</strong> {withItalics(scene.text)}
                  </Paragraph>
                ))}
                {treatment.footnotes.map((note, i) => (
                  <Paragraph key={`note-${i}`} style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                    <em>{note}</em>
                  </Paragraph>
                ))}
              </Card>
            </Section>

            <Section>
              <Card>
                <SectionTitle>World</SectionTitle>
                {world.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
              </Card>
            </Section>

            <Section>
              <Card>
                <SectionTitle>Extended Glossary</SectionTitle>
                <Paragraph><em>{glossary.intro}</em></Paragraph>
                {glossary.terms.map(([term, definition]) => (
                  <Paragraph key={term}>
                    <strong>{term}:</strong> {withItalics(definition)}
                  </Paragraph>
                ))}
              </Card>
            </Section>

            <Section>
              <Card>
                <SectionTitle>Script</SectionTitle>
                {!isScriptExpanded && script.slice(0, 5).map(renderScriptEntry)}
                <CollapsibleCard>
                  <CollapsibleButton
                    onClick={() => setIsScriptExpanded(!isScriptExpanded)}
                    aria-expanded={isScriptExpanded}
                    aria-controls="script-full"
                  >
                    <span>{isScriptExpanded ? 'Hide Full Script' : 'Read Full Script'}</span>
                    {isScriptExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </CollapsibleButton>
                  {isScriptExpanded && (
                    <CollapsibleContent id="script-full">
                      {script.map(renderScriptEntry)}
                    </CollapsibleContent>
                  )}
                </CollapsibleCard>
              </Card>
            </Section>

            <Section>
              <Card>
                <SectionTitle>Archive</SectionTitle>
                <CollapsibleCard>
                  <CollapsibleButton
                    onClick={() => setIsArchiveExpanded(!isArchiveExpanded)}
                    aria-expanded={isArchiveExpanded}
                    aria-controls="feature-film-archive"
                  >
                    <span>Feature film version (Jan–Jun 2026)</span>
                    {isArchiveExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </CollapsibleButton>
                  {isArchiveExpanded && (
                    <CollapsibleContent id="feature-film-archive">
                      <FeatureFilmArchive />
                    </CollapsibleContent>
                  )}
                </CollapsibleCard>
              </Card>
            </Section>

            <Section>
              <ContactCard>
                <Paragraph center>
                  Reach out to discuss:
                  <strong> inbox@wilfredocasas.com</strong>
                </Paragraph>
              </ContactCard>
            </Section>
          </>
        )}
      </Main>

      <Footer>
        <p>© 2026 Wilfredo Casas. All rights reserved.</p>
      </Footer>
    </Container>
  );
}
