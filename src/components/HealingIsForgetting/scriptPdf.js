// scriptPdf.js — builds a screenplay-formatted PDF from script.js (loaded on demand)
import { jsPDF } from 'jspdf';
import scripts from './script';
import scriptVersion from './scriptVersion';

// Screenplay layout on A4, in inches
const PAGE_H = 11.69;
const TOP = 1;
const BOTTOM = 1;
const LEFT = 1.5;
const RIGHT_EDGE = 7.27;
const LINE = 12 / 72; // 12pt Courier, single spaced

const layout = {
  scene: { x: LEFT, width: 5.77, before: 2 },
  action: { x: LEFT, width: 5.77, before: 1 },
  note: { x: LEFT, width: 5.77, before: 1, style: 'italic' },
  character: { x: 3.7, width: 3.2, before: 1 },
  parenthetical: { x: 3.1, width: 2.3, before: 0 },
  dialogue: { x: 2.5, width: 3.5, before: 0 },
  transition: { x: RIGHT_EDGE, width: 2.5, before: 1, align: 'right' },
  titlecard: { x: LEFT, width: 5.77, before: 2, align: 'center', style: 'bold' },
  definition: { x: 2.2, width: 4.4, before: 0, align: 'center', style: 'italic' },
};

export default function downloadScriptPdf() {
  const script = scripts[0];
  const doc = new jsPDF({ unit: 'in', format: 'a4' });
  doc.setFont('courier', 'normal');
  doc.setFontSize(12);

  // Title page
  doc.setFont('courier', 'bold');
  doc.text('HEALING IS FORGETTING', 4.13, 4.2, { align: 'center' });
  doc.setFont('courier', 'normal');
  doc.text('A Short Film', 4.13, 4.45, { align: 'center' });
  doc.text('Written by', 4.13, 5.05, { align: 'center' });
  doc.text('Wilfredo Casas', 4.13, 5.3, { align: 'center' });
  doc.text(`${scriptVersion.version} — ${scriptVersion.date}`, 1.5, 10.2);
  doc.text('inbox@wilfredocasas.com', 1.5, 10.45);

  let page = 1;
  let y = TOP;
  const newPage = () => {
    doc.addPage();
    page += 1;
    y = TOP;
    doc.setFont('courier', 'normal');
    doc.text(`${page - 1}.`, RIGHT_EDGE, 0.5, { align: 'right' });
  };
  newPage();

  script.blocks.forEach((block, i) => {
    const spec = layout[block.type] || layout.action;
    const text = block.type === 'scene' || block.type === 'character' || block.type === 'transition'
      ? block.text.toUpperCase()
      : block.text;
    doc.setFont('courier', spec.style || 'normal');
    const lines = doc.splitTextToSize(text, spec.width);
    const before = i === 0 ? 0 : spec.before * LINE;
    // Keep a character cue together with its first dialogue line
    const keep = ['character', 'scene', 'titlecard', 'note'].includes(block.type) ? 2 : 1;
    if (y + before + (lines.length + keep - 1) * LINE > PAGE_H - BOTTOM) {
      newPage();
      doc.setFont('courier', spec.style || 'normal');
    } else {
      y += before;
    }
    lines.forEach((line) => {
      if (y > PAGE_H - BOTTOM) {
        newPage();
        doc.setFont('courier', spec.style || 'normal');
      }
      const x = spec.align === 'center' ? spec.x + spec.width / 2 : spec.x;
      doc.text(line, x, y, { align: spec.align || 'left' });
      y += LINE;
    });
  });

  doc.save(`Healing_is_Forgetting_Script_${scriptVersion.version}.pdf`);
}
