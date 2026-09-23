import { useState, useEffect } from 'react';
import { Eye, EyeOff, ChevronDown, ChevronUp } from 'lucide-react';
import synopses from './synopses';
import treatments from './treatment';
import scripts from './script';
import { world, glossary } from './world';
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
  CollapsibleCard,
  CollapsibleButton,
  CollapsibleContent,
  PasswordForm,
  PasswordInputWrapper,
  PasswordInput,
  TogglePasswordButton,
  SubmitButton,
  ErrorMessage,
  Screenplay,
  ScriptCredit,
  ScriptLine
} from './Styles';

export default function HealingIsForgetting() {
  const [expandedPastSynopses, setExpandedPastSynopses] = useState({});
  const [isSynopsisExpanded, setIsSynopsisExpanded] = useState(false);
  const [isTreatmentExpanded, setIsTreatmentExpanded] = useState(false);
  const [expandedPastTreatments, setExpandedPastTreatments] = useState({});
  const [isScriptExpanded, setIsScriptExpanded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const latestSynopsis = synopses[0];
  const pastSynopses = synopses.slice(1);
  const synopsisPreviewCount = 3;
  const isTreatmentHeading = (text) => /^[A-Z0-9 ,'-]+$/.test(text) && text.length <= 40;
  const latestTreatment = treatments[0];
  const pastTreatments = treatments.slice(1);
  const treatmentPreviewCount = 5;
  const latestScript = scripts[0];
  const renderTreatmentBlock = (block, i) => (
    <Paragraph key={i}>
      {typeof block === 'object'
        ? <><strong>{block.heading}:</strong> {block.text}</>
        : isTreatmentHeading(block) ? <strong>{block}</strong> : block}
    </Paragraph>
  );
  const protectedSectionId = 'healing-protected-materials';

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

  const togglePastSynopsis = (version) => {
    setExpandedPastSynopses((prev) => ({
      ...prev,
      [version]: !prev[version]
    }));
  };

  const togglePastTreatment = (version) => {
    setExpandedPastTreatments((prev) => ({
      ...prev,
      [version]: !prev[version]
    }));
  };

  const scrollToProtectedMaterials = () => {
    const el = document.getElementById(protectedSectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            Last updated: September 23, 2026
          </Paragraph>
        </HeaderContent>
      </Header>

      <Main>
        <Section>
          <Card>
            <SectionTitle>Logline</SectionTitle>
            <Paragraph>
              In a near-future Berlin where painful memories are edited away, a Record Keeper spends her last day at work and her last night with her boyfriend before he leaves for the war, a night she will later choose to rewrite.
            </Paragraph>
          </Card>
        </Section>

        <Section>
          <Card>
            <SectionTitle>Synopsis – {latestSynopsis.version}</SectionTitle>
            <div id="synopsis-latest">
              {((isAuthenticated && isSynopsisExpanded)
                ? latestSynopsis.paragraphs
                : latestSynopsis.paragraphs.slice(0, synopsisPreviewCount)
              ).map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
            </div>

            {latestSynopsis.paragraphs.length > synopsisPreviewCount && (
              isAuthenticated ? (
                <CollapsibleButton
                  onClick={() => setIsSynopsisExpanded(!isSynopsisExpanded)}
                  aria-expanded={isSynopsisExpanded}
                  aria-controls="synopsis-latest"
                >
                  <span>{isSynopsisExpanded ? 'Hide Full Synopsis' : 'Read Full Synopsis'}</span>
                  {isSynopsisExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </CollapsibleButton>
              ) : (
                <CollapsibleButton
                  onClick={scrollToProtectedMaterials}
                  aria-expanded={false}
                  aria-controls={protectedSectionId}
                >
                  <span>Unlock to read full synopsis</span>
                  <ChevronDown size={18} />
                </CollapsibleButton>
              )
            )}

            {isAuthenticated && pastSynopses.length > 0 && (
              <>
                <Paragraph><strong>Past Versions</strong></Paragraph>
                {pastSynopses.map((syn, index) => {
                  const isExpanded = Boolean(expandedPastSynopses[syn.version]);
                  const contentId = `synopsis-past-${index}`;

                  return (
                    <CollapsibleCard key={syn.version}>
                      <CollapsibleButton
                        onClick={() => togglePastSynopsis(syn.version)}
                        aria-expanded={isExpanded}
                        aria-controls={contentId}
                      >
                        <span>{syn.title} – {syn.version}</span>
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </CollapsibleButton>
                      {isExpanded && (
                        <CollapsibleContent id={contentId}>
                          {syn.paragraphs.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
                        </CollapsibleContent>
                      )}
                    </CollapsibleCard>
                  );
                })}
              </>
            )}
          </Card>
        </Section>

        {!isAuthenticated && (
          <Section id={protectedSectionId}>
            <Card>
              <SectionTitle>Protected Materials</SectionTitle>
              <Paragraph>
              Treatment, script and the rest of this page are password-protected.
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
                <SectionTitle>Treatment – {latestTreatment.version}</SectionTitle>
                {!isTreatmentExpanded &&
                  latestTreatment.blocks.slice(0, treatmentPreviewCount).map(renderTreatmentBlock)
                }

                <CollapsibleCard>
                  <CollapsibleButton
                    onClick={() => setIsTreatmentExpanded(!isTreatmentExpanded)}
                    aria-expanded={isTreatmentExpanded}
                    aria-controls="treatment-latest"
                  >
                    <span>{isTreatmentExpanded ? 'Hide Full Treatment' : 'Read Full Treatment'} – {latestTreatment.version}</span>
                    {isTreatmentExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </CollapsibleButton>
                  {isTreatmentExpanded && (
                    <CollapsibleContent id="treatment-latest">
                      {latestTreatment.blocks.map(renderTreatmentBlock)}
                    </CollapsibleContent>
                  )}
                </CollapsibleCard>

                {pastTreatments.length > 0 && (
                  <>
                    <Paragraph><strong>Past Versions</strong></Paragraph>
                    {pastTreatments.map((t, index) => {
                      const isExpanded = Boolean(expandedPastTreatments[t.version]);
                      const contentId = `treatment-past-${index}`;

                      return (
                        <CollapsibleCard key={t.version}>
                          <CollapsibleButton
                            onClick={() => togglePastTreatment(t.version)}
                            aria-expanded={isExpanded}
                            aria-controls={contentId}
                          >
                            <span>{t.title} – {t.version}</span>
                            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </CollapsibleButton>
                          {isExpanded && (
                            <CollapsibleContent id={contentId}>
                              {t.blocks.map(renderTreatmentBlock)}
                            </CollapsibleContent>
                          )}
                        </CollapsibleCard>
                      );
                    })}
                  </>
                )}
              </Card>
            </Section>

            <Section>
              <Card>
                <SectionTitle>Script – {latestScript.version}</SectionTitle>
                <CollapsibleCard>
                  <CollapsibleButton
                    onClick={() => setIsScriptExpanded(!isScriptExpanded)}
                    aria-expanded={isScriptExpanded}
                    aria-controls="script-latest"
                  >
                    <span>{isScriptExpanded ? 'Hide Full Script' : 'Read Full Script'} – {latestScript.version}</span>
                    {isScriptExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </CollapsibleButton>
                  {isScriptExpanded && (
                    <CollapsibleContent id="script-latest">
                      <Screenplay>
                        <ScriptLine $kind="titlecard">HEALING IS FORGETTING</ScriptLine>
                        <ScriptCredit>{latestScript.credit}</ScriptCredit>
                        {latestScript.blocks.map((block, i) => (
                          <ScriptLine key={i} $kind={block.type}>{block.text}</ScriptLine>
                        ))}
                      </Screenplay>
                    </CollapsibleContent>
                  )}
                </CollapsibleCard>
              </Card>
            </Section>

            <Section>
              <Card>
                <SectionTitle>World</SectionTitle>
                {world.paragraphs.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
              </Card>
            </Section>

            <Section>
              <Card>
                <SectionTitle>Extended Glossary</SectionTitle>
                <Paragraph><em>Definitions not mentioned during the film.</em></Paragraph>
                <List>
                  {glossary.map(({ term, definition }) => (
                    <ListItem key={term}><strong>{term}:</strong> {definition}</ListItem>
                  ))}
                </List>
              </Card>
            </Section>

            <Section>
              <Card>
                <SectionTitle>Project Status</SectionTitle>
                <Paragraph><strong>Development:</strong></Paragraph>
                <List>
                  <ListItem>Synopsis: {latestSynopsis.version} - draft complete</ListItem>
                  <ListItem>Treatment: {latestTreatment.version} - in progress</ListItem>
                  <ListItem>Script: {latestScript.version} - first draft</ListItem>
                </List>

                <Paragraph><strong>Looking for key collaborators:</strong></Paragraph>
                <List>
                  <ListItem>Producer - in progress</ListItem>
                  <ListItem>Screenwriting mentor - in progress</ListItem>
                  <ListItem>Cinematographer - not yet started</ListItem>
                  <ListItem>Neuroscience advisor - not yet started</ListItem>
                  <ListItem>Psychotherapy advisor - not yet started</ListItem>
                </List>

                <Paragraph><strong>Books to read:</strong></Paragraph>
                <List>
                  <ListItem>"Searching for Memory" by Daniel Schacter - in progress</ListItem>
                  <ListItem>"The Hero with a Thousand Faces" by Joseph Campbell - not yet started</ListItem>
                  <ListItem>"Maybe You Should Talk to Someone" by Lori Gottlieb - not yet started</ListItem>
                  <ListItem>"Reasons and Persons" (part 3) by Derek Parfit - not yet started</ListItem>
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
          </>
        )}
      </Main>

      <Footer>
        <p>© 2026 Wilfredo Casas. All rights reserved.</p>
      </Footer>
    </Container>
  );
}
