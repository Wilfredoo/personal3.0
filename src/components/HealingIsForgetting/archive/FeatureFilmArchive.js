// The feature-film version of Healing Is Forgetting (Jan–Jun 2026), as it was
// shown on the page until June 6, 2026.
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import synopses from './synopses';
import treatments from './treatment';
import {
  Paragraph,
  List,
  ListItem,
  IdeaBoardImage,
  ImageCaption,
  CollapsibleCard,
  CollapsibleButton,
  CollapsibleContent
} from '../Styles';

const isTreatmentHeading = (text) => /^[A-Z0-9 ,'-]+$/.test(text) && text.length <= 40;

function Collapsible({ id, label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <CollapsibleCard>
      <CollapsibleButton onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={id}>
        <span>{label}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </CollapsibleButton>
      {open && <CollapsibleContent id={id}>{children}</CollapsibleContent>}
    </CollapsibleCard>
  );
}

export default function FeatureFilmArchive() {
  const latestSynopsis = synopses[0];
  const latestTreatment = treatments[0];

  return (
    <>
      <Collapsible id="archive-logline" label="Logline">
        <Paragraph>
          Sophie is a psychotherapist whose job is quickly becoming redundant in the face of a new paradigm - that traumas are no longer something to be confronted and worked through, but should instead be erased, even replaced and improved.
        </Paragraph>
      </Collapsible>

      {synopses.map((syn, index) => (
        <Collapsible key={syn.version} id={`archive-synopsis-${index}`} label={`${syn.title} – ${syn.version}`}>
          {syn.paragraphs.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
        </Collapsible>
      ))}

      {treatments.map((t, index) => (
        <Collapsible key={t.version} id={`archive-treatment-${index}`} label={`${t.title} – ${t.version}`}>
          {t.blocks.map((block, i) => (
            <Paragraph key={i}>
              {isTreatmentHeading(block) ? <strong>{block}</strong> : block}
            </Paragraph>
          ))}
        </Collapsible>
      ))}

      <Collapsible id="archive-status" label="Project Status">
        <Paragraph><strong>Development:</strong></Paragraph>
        <List>
          <ListItem>Synopsis: {latestSynopsis.version} - draft complete</ListItem>
          <ListItem>Treatment: {latestTreatment.version} - in progress</ListItem>
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
      </Collapsible>

      <Collapsible id="archive-idea-board" label="Idea board">
        <IdeaBoardImage src={require('../../../assets/images/idea_board.jpeg')} alt="Idea Board" />
        <ImageCaption>Idea board</ImageCaption>
      </Collapsible>
    </>
  );
}
