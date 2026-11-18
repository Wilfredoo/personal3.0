import { useState, useEffect } from 'react';
import { Eye, EyeOff, Download } from 'lucide-react';
import sketch from '../../assets/images/healing_sketch_maja_ola.jpg';
import {
  Page,
  Sheet,
  Header,
  Eyebrow,
  Title,
  Subtitle,
  Meta,
  Figure,
  Sketch,
  Caption,
  Logline,
  Synopsis,
  Status,
  StatusItem,
  Footer,
  Label,
  Tags,
  Tag,
  Contact,
  ContactName,
  ContactEmail,
  ScriptBox,
  ScriptTitle,
  ScriptNote,
  ScriptForm,
  PasswordWrapper,
  PasswordInput,
  ToggleButton,
  DownloadButton,
  ErrorMessage,
  Copyright
} from './Styles';

const CORRECT_PASSWORD = 'healing2026';
const FONTS_URL = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@400;600&display=swap';

const openTo = [
  { label: 'Co-producer', primary: true },
  { label: 'Cinematographer', primary: true },
  { label: 'Script feedback', primary: true },
  { label: 'Funding' },
  { label: 'Residency' }
];

export default function HealingIsForgetting() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  // Light paper background and fonts for this page
  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#faf8f4';

    if (!document.querySelector(`link[href="${FONTS_URL}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = FONTS_URL;
      document.head.appendChild(link);
    }

    return () => { document.body.style.backgroundColor = prev; };
  }, []);

  const handleDownload = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== CORRECT_PASSWORD) {
      setError('Incorrect password. Please try again.');
      setPassword('');
      return;
    }

    setIsDownloading(true);
    try {
      // Loaded on demand so the script text isn't part of the main bundle
      const { default: downloadScriptPdf } = await import('./scriptPdf');
      downloadScriptPdf();
    } catch (_) {
      setError('Something went wrong creating the PDF. Please try again.');
    }
    setIsDownloading(false);
  };

  return (
    <Page>
      <Sheet>
        <Header>
          <div>
            <Eyebrow>Short film — Berlin, 2027</Eyebrow>
            <Title>Healing is Forgetting</Title>
            <Subtitle>Heilung ist Vergessen</Subtitle>
          </div>
          <Meta>approx. 15 min · Fiction / <span style={{ whiteSpace: 'nowrap' }}>Near-future</span> · German / English</Meta>
        </Header>

        <Figure>
          <Sketch src={sketch} alt="Pencil sketch of U-Bahn commuters wearing visors, with Sophie knitting in the middle" />
          <Caption>Sketch by Maja Ola</Caption>
        </Figure>

        <Logline>
          Berlin, late 2030s. Memory editing has hit the mainstream. Sophie, 39, has spent her last
          years working as a Recordkeeper — collecting what people leave behind before they get
          their memories deleted at will. A new law makes her job obsolete. Her partner ships out
          to Taiwan. Their last night together splits into two versions of itself — one real and
          deleted, another edited and improved.
        </Logline>

        <Synopsis>
          Sophie works as a Recordkeeper at <em>Healing is Forgetting</em> — the leading Neuro Emotional
          Editing company in Germany, whose name has become both a brand and a new paradigm: that erasing
          painful memories of the past is a form of care. Her job is to archive people’s memories before
          they permanently forget. A new law ends the archive requirement and makes her job obsolete
          overnight. The same week, Eric ships out to Taiwan on a mission she can’t support. His birthday
          party becomes their last night together: a room full of ropes, friends, laughter, discussion —
          and then a split. Two versions of the same scene run in parallel. In one, an argument surfaces
          everything they never said — a bitter end that she chooses to forget. In the other, a warm,
          sensual, and unhurried night together — a beautiful moment that she chooses to remember.
        </Synopsis>

        <Status>
          <StatusItem>Script complete <span>— Nov 2026</span></StatusItem>
          <StatusItem>Funding applied <span>— Kuratorium junger deutscher Film (pending)</span></StatusItem>
          <StatusItem>Special Mention <span>— Interfilm Berlin 2023</span></StatusItem>
        </Status>

        <Footer>
          <div>
            <Label>Open to</Label>
            <Tags>
              {openTo.map(({ label, primary }) => (
                <Tag key={label} $primary={primary}>{label}</Tag>
              ))}
            </Tags>
          </div>
          <Contact>
            <ContactName>Wilfredo Casas</ContactName>
            <ContactEmail href="mailto:inbox@wilfredocasas.com">inbox@wilfredocasas.com</ContactEmail>
          </Contact>
        </Footer>

        <ScriptBox>
          <ScriptTitle>Read the script</ScriptTitle>
          <ScriptNote>
            The script is password-protected. Email{' '}
            <a href="mailto:inbox@wilfredocasas.com">inbox@wilfredocasas.com</a> to request access.
          </ScriptNote>
          <ScriptForm onSubmit={handleDownload}>
            <PasswordWrapper>
              <PasswordInput
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="current-password"
                aria-label="Script password"
                required
              />
              <ToggleButton
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </ToggleButton>
            </PasswordWrapper>
            <DownloadButton type="submit" disabled={isDownloading}>
              <Download size={16} />
              {isDownloading ? 'Preparing…' : 'Download script'}
            </DownloadButton>
          </ScriptForm>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </ScriptBox>

        <Copyright>© 2026 Wilfredo Casas. All rights reserved.</Copyright>
      </Sheet>
    </Page>
  );
}
