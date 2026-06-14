import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// BRUTALISM — monospace, hard black rules, uppercase labels.
//
// The owner fills the form, then "Generate printable PDF" opens the browser
// print dialog. The PDF comes out as multiple sheets:
//   • Sheet 1  — EMERGENCY CARD (the sitter carries this)
//   • Sheet 2+ — CARE CHECKLIST (left at home): a 10-row grid with one column
//                per day of the sit, plus the emergency info repeated as a
//                reminder. Long sits split across extra sheets automatically.
// No dependencies — dates drive the columns, CSS drives the page breaks.

const ROWS = 10;                 // blank task rows the sitter fills by hand
const COLS_PER_SHEET = 14;       // day-columns per (landscape) page before splitting
const MAX_DAYS = 120;            // hard safety cap for column building
const MAX_SIT_DAYS = 40;         // longest sitting an owner can book
const WD = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function parseLocal(s) {
  if (!s) return null;
  const [y, m, d] = s.split('-').map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

function buildDays(startStr, endStr) {
  const s = parseLocal(startStr);
  const e = parseLocal(endStr);
  if (!s || !e || e < s) return [];
  const out = [];
  const cur = new Date(s);
  while (cur <= e && out.length < MAX_DAYS) {
    out.push(new Date(cur));
    cur.setDate(cur.getDate() + 1);
  }
  return out;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function fmtDate(d) {
  return `${WD[d.getDay()]} ${d.getMonth() + 1}/${d.getDate()}`;
}

function namePhone(name, phone) {
  return [name, phone].map((x) => (x || '').trim()).filter(Boolean).join('  ·  ');
}

function composeAddress(f) {
  const clean = (x) => (x || '').trim();
  const streetLine = [clean(f.street), clean(f.houseNumber)].filter(Boolean).join(' ');
  const co = clean(f.careOf) ? `c/o ${clean(f.careOf)}` : '';
  return [streetLine, clean(f.postalCode), co].filter(Boolean).join(', ');
}

// A filled value, or a blank underline so the sheet still works hand-filled.
function Val({ v }) {
  const has = v && String(v).trim();
  return has ? <span className="val">{v}</span> : <span className="val val--blank" />;
}

function Reminders({ f, rangeLabel }) {
  return (
    <div className="reminders">
      <div className="rem-grid">
        <div><span className="rem-k">Pets</span><Val v={f.petNames} /></div>
        <div><span className="rem-k">Dates</span><span className="val">{rangeLabel}</span></div>
        <div><span className="rem-k">Primary</span><Val v={namePhone(f.primary, f.primaryPhone)} /></div>
        <div><span className="rem-k">Backup</span><Val v={namePhone(f.backup, f.backupPhone)} /></div>
        <div><span className="rem-k">Address</span><Val v={composeAddress(f)} /></div>
        <div><span className="rem-k">Landmark</span><Val v={f.landmark} /></div>
        <div className="rem-wide rem-blank"><span className="rem-k">Other things to remember</span><span className="val val--blank rem-blank-line" /></div>
      </div>
    </div>
  );
}

function PetSitterChecklist() {
  const [f, setF] = useState({
    petNames: '', startDate: '', endDate: '',
    primary: '', primaryPhone: '',
    backup: '', backupPhone: '',
    street: '', houseNumber: '', postalCode: '', careOf: '',
    landmark: '', notes: '',
  });
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));

  const [dialog, setDialog] = useState(false);
  const [status, setStatus] = useState('choose'); // 'choose' | 'working' | 'saved' | 'wilfredo'
  const [sendError, setSendError] = useState('');
  const [formError, setFormError] = useState('');

  const mmToPx = (v) => Math.round((v * 96) / 25.4); // CSS mm → px at 96dpi

  const generatePDFs = async () => {
    const sheetsEl = document.querySelector('.sheets');
    // Render off-screen with the print-equivalent A4 layout applied as a real
    // class (html2canvas does NOT honor @media print, so we mirror it here).
    sheetsEl.classList.add('sheets--capture');
    sheetsEl.style.position = 'absolute';
    sheetsEl.style.top = '-99999px';
    sheetsEl.style.left = '0';

    const shoot = (el, wMm, hMm) => html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      width: mmToPx(wMm),
      height: mmToPx(hMm),
      windowWidth: mmToPx(wMm),
      windowHeight: mmToPx(hMm),
    });

    const emergencyEl = document.querySelector('.sheet--emergency');
    const checklistEls = document.querySelectorAll('.sheet--checklist');

    const emImg = (await shoot(emergencyEl, 210, 297)).toDataURL('image/jpeg', 0.92);
    const taskImgs = [];
    for (let i = 0; i < checklistEls.length; i++) {
      taskImgs.push((await shoot(checklistEls[i], 297, 210)).toDataURL('image/jpeg', 0.92));
    }

    sheetsEl.classList.remove('sheets--capture');
    sheetsEl.style.position = '';
    sheetsEl.style.top = '';
    sheetsEl.style.left = '';

    // Emergency card (portrait) — email attachment 1
    const emPdf = new jsPDF('p', 'mm', 'a4');
    emPdf.addImage(emImg, 'JPEG', 0, 0, 210, 297);
    const emergencyB64 = emPdf.output('datauristring').split(',')[1];

    // Task checklist (landscape) — email attachment 2
    const taskPdf = new jsPDF('l', 'mm', 'a4');
    taskImgs.forEach((img, i) => {
      if (i > 0) taskPdf.addPage();
      taskPdf.addImage(img, 'JPEG', 0, 0, 297, 210);
    });
    const taskB64 = taskPdf.output('datauristring').split(',')[1];

    // Combined pack (one file) — the owner's single download, prints in one job
    const combined = new jsPDF('p', 'mm', 'a4');
    combined.addImage(emImg, 'JPEG', 0, 0, 210, 297);
    taskImgs.forEach((img) => {
      combined.addPage('a4', 'l');
      combined.addImage(img, 'JPEG', 0, 0, 297, 210);
    });
    const combinedB64 = combined.output('datauristring').split(',')[1];

    return { emergencyB64, taskB64, combinedB64 };
  };

  const downloadB64 = (b64, filename) => {
    const a = document.createElement('a');
    a.href = 'data:application/pdf;base64,' + b64;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const openDialog = () => {
    if (!f.petNames.trim() || !f.startDate || !f.endDate) {
      setFormError('Please fill in at least the pet name(s) and the start and end dates first.');
      return;
    }
    const s = parseLocal(f.startDate);
    const e = parseLocal(f.endDate);
    const today = parseLocal(todayStr);
    if (s < today) {
      setFormError('The start date can’t be in the past.');
      return;
    }
    if (e < s) {
      setFormError('The end date must be on or after the start date.');
      return;
    }
    const dayCount = Math.round((e - s) / 86400000) + 1;
    if (dayCount > MAX_SIT_DAYS) {
      setFormError(`A sitting can be at most ${MAX_SIT_DAYS} days long.`);
      return;
    }
    setFormError('');
    setSendError('');
    setStatus('choose');
    setDialog(true);
  };

  const closeDialog = () => {
    setDialog(false);
    setStatus('choose');
    setSendError('');
  };

  const handleChoice = async (choiceLabel, opts = {}) => {
    setSendError('');
    setStatus('working');
    // Yield so React paints the "working" screen before html2canvas blocks.
    await new Promise((r) => setTimeout(r, 60));
    try {
      const { emergencyB64, taskB64, combinedB64 } = await generatePDFs();

      // Download a single combined file to the owner's device (options 1 and 2).
      // One file avoids browsers blocking a second programmatic download.
      if (opts.download) {
        const pet = (f.petNames || 'pet').trim().replace(/\s+/g, '-');
        downloadB64(combinedB64, `pet-sitter-pack-${pet}.pdf`);
      }

      // Email both PDFs to Wilfredo
      const res = await fetch('/.netlify/functions/notify-petsitter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...f, ownerChoice: choiceLabel, emergencyB64, taskB64 }),
      });
      if (!res.ok) throw new Error((await res.text()) || `HTTP ${res.status}`);

      setStatus(opts.download ? 'saved' : 'wilfredo');
      if (opts.print) setTimeout(() => window.print(), 600);
    } catch (err) {
      setSendError(`Could not send: ${err.message}`);
      setStatus('choose');
    }
  };

  // Browsers stamp the page <title> + date into the print header/footer. The
  // date we can't change, but @page { margin: 0 } below makes Chromium drop the
  // header entirely; this also swaps the title for browsers that still show it.
  useEffect(() => {
    const original = document.title;
    const setTitle = () => { document.title = 'Pet-Sitter Pack'; };
    const resetTitle = () => { document.title = original; };
    window.addEventListener('beforeprint', setTitle);
    window.addEventListener('afterprint', resetTitle);
    return () => {
      window.removeEventListener('beforeprint', setTitle);
      window.removeEventListener('afterprint', resetTitle);
      document.title = original;
    };
  }, []);

  const days = buildDays(f.startDate, f.endDate);
  // No valid range yet → still print one usable checklist with blank headers.
  const dayChunks = days.length ? chunk(days, COLS_PER_SHEET) : [new Array(COLS_PER_SHEET).fill(null)];
  const rangeLabel = days.length
    ? `${fmtDate(days[0])} → ${fmtDate(days[days.length - 1])}  ·  ${days.length} day${days.length > 1 ? 's' : ''}`
    : 'Dates not set';

  // Date input bounds: no past dates, sitting capped at MAX_SIT_DAYS.
  const pad = (n) => String(n).padStart(2, '0');
  const toStr = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const todayStr = toStr(new Date());
  const maxEndStr = f.startDate
    ? (() => { const d = parseLocal(f.startDate); d.setDate(d.getDate() + (MAX_SIT_DAYS - 1)); return toStr(d); })()
    : '';

  return (
    <main className="card-root">
      <style>{`
        html, body { margin: 0; background: #fff; }

        .card-root {
          max-width: 680px;
          margin: 0 auto;
          padding: 40px 24px 140px;
          color: #000;
          font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
        }

        .card-back {
          display: inline-block;
          margin-bottom: 40px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #000;
          text-decoration: none;
          border: 2px solid #000;
          padding: 5px 11px;
        }
        .card-back:hover { background: #000; color: #fff; }

        .card-instruction {
          margin: 24px 0 0;
          font-size: 13px;
          line-height: 1.7;
          max-width: 58ch;
        }

        /* ---- BUILDER FORM (screen only) ---- */
        .block { margin-top: 40px; }
        .block-label {
          margin: 0 0 14px;
          display: flex;
          align-items: baseline;
          gap: 10px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding-bottom: 10px;
          border-bottom: 2px solid #000;
        }
        .block-num {
          display: inline-block;
          min-width: 22px;
          height: 22px;
          line-height: 22px;
          text-align: center;
          background: #000;
          color: #fff;
        }
        .field { margin: 0 0 18px; }
        .field-name {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #555;
          margin-bottom: 4px;
        }
        .field input,
        .field textarea {
          width: 100%;
          box-sizing: border-box;
          border: 0;
          border-bottom: 2px solid #000;
          background: transparent;
          font-family: inherit;
          font-size: 1.05rem;
          font-weight: 700;
          color: #000;
          padding: 4px 0;
          border-radius: 0;
          -webkit-appearance: none;
        }
        .field textarea { resize: vertical; line-height: 1.6; min-height: 3.2em; }
        /* let date inputs use their native widget (typing + calendar icon) */
        .field input[type="date"] { -webkit-appearance: auto; appearance: auto; }
        .field input[type="date"]::-webkit-calendar-picker-indicator { opacity: 1; cursor: pointer; }
        .field input:focus,
        .field textarea:focus { outline: none; background: #f3f3f3; }
        .row2 { display: flex; gap: 20px; }
        .row2 > * { flex: 1; }

        .print-btn {
          display: block;
          width: 100%;
          margin-top: 48px;
          padding: 18px;
          font-family: inherit;
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #fff;
          background: #000;
          border: 4px solid #000;
          cursor: pointer;
        }
        .print-btn:hover { color: #000; background: #fff; }
        .print-hint {
          margin-top: 12px;
          font-size: 11px;
          color: #888;
          text-align: center;
          letter-spacing: 0.03em;
        }
        .form-error {
          margin-top: 12px;
          font-size: 12px;
          color: #c00;
          text-align: center;
          font-weight: 700;
        }

        /* ---- DIALOG ---- */
        .dlg-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex; align-items: center; justify-content: center;
          z-index: 9999; padding: 24px;
        }
        .dlg {
          background: #fff;
          border: 3px solid #000;
          padding: 36px 32px;
          max-width: 440px;
          width: 100%;
          font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
        }
        .dlg-title {
          margin: 0 0 12px;
          font-size: 1.2rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .dlg-body {
          margin: 0 0 28px;
          font-size: 13px;
          line-height: 1.7;
          color: #333;
        }
        .dlg-btns {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .dlg-btn {
          width: 100%;
          padding: 14px 16px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          cursor: pointer;
          border: 2px solid #000;
          background: #fff;
          color: #000;
          text-align: left;
        }
        .dlg-btn:hover { background: #f3f3f3; }
        .dlg-btn--primary { background: #000; color: #fff; }
        .dlg-btn--primary:hover { background: #333; }

        /* ---- SHEETS (print output only; hidden on screen) ---- */
        .sheets { display: none; }

        /* PDF capture: mirrors @media print so html2canvas renders true A4. */
        .sheets--capture { display: block !important; background: #fff; }
        .sheets--capture .sheet { border: 0 !important; margin: 0 !important; background: #fff; }
        .sheets--capture .sheet--emergency {
          position: relative;
          width: 210mm; height: 297mm;
          padding: 13mm 0 0;
          box-sizing: border-box;
          overflow: hidden;
        }
        .sheets--capture .sheet--emergency .ecard { margin: 0 13mm; }
        .sheets--capture .cutline {
          position: absolute; left: 0; right: 0; top: 168mm; margin: 0;
        }
        .sheets--capture .sheet--checklist {
          width: 297mm; height: 210mm;
          padding: 11mm 12mm;
          box-sizing: border-box;
        }
        .sheets--capture .chk-table td { height: 11mm; }
        .sheets--capture .val--blank { min-width: 40mm; }
        .sheet {
          background: #fff;
          border: 3px solid #000;
          padding: 30px 28px;
          margin: 0 auto 26px;
        }
        .sheet-h {
          margin: 0;
          font-size: 1.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1;
        }
        .sheet-meta {
          margin: 8px 0 0;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* emergency card — a bordered box you cut out and carry */
        .ecard {
          border: 2.5px solid #000;
          padding: 22px 24px;
          box-sizing: border-box;
        }
        .cutline {
          margin-top: 26px;
          border-top: 2px dashed #000;
          text-align: center;
        }
        .cutline span {
          display: inline-block;
          transform: translateY(-50%);
          background: #fff;
          padding: 0 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .val { font-weight: 700; }
        .val--blank {
          display: inline-block;
          min-width: 140px;
          border-bottom: 1px solid #000;
          height: 1.1em;
          vertical-align: bottom;
        }

        /* emergency card body */
        .ec-block { margin-top: 22px; }
        .ec-head {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding-bottom: 8px;
          margin: 0 0 12px;
          border-bottom: 2px solid #000;
        }
        .ec-head b {
          display: inline-block;
          min-width: 20px; height: 20px; line-height: 20px;
          text-align: center; background: #000; color: #fff;
          margin-right: 8px;
        }
        .ec-line { display: flex; gap: 12px; align-items: baseline; margin: 0 0 12px; font-size: 13px; }
        .ec-k {
          min-width: 88px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #555;
        }
        .ec-note {
          border: 2px solid #000;
          padding: 8px 10px;
          min-height: 2.2em;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.5;
        }

        /* note above checklist table */
        .chk-note {
          margin: 16px 0 4px;
          text-align: right;
          font-size: 11px;
          font-style: italic;
          letter-spacing: 0.04em;
          color: #555;
        }

        /* checklist table */
        .chk-table {
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
          margin-top: 20px;
        }
        .chk-table th, .chk-table td { border: 1.5px solid #000; }
        .chk-table th {
          padding: 5px 2px;
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1.1;
        }
        .chk-table .task-col { width: 20%; text-align: left; padding-left: 6px; }
        .chk-table .wd { display: block; }
        .chk-table .dm { display: block; font-size: 11px; }
        .chk-table td { height: 30px; }
        .chk-table .task-cell { background: #fafafa; }

        /* reminders under checklist */
        .reminders { margin-top: 22px; border-top: 3px solid #000; padding-top: 14px; }
        .rem-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px 24px;
          font-size: 12px;
        }
        .rem-grid > div { display: flex; gap: 8px; align-items: baseline; }
        .rem-wide { grid-column: 1 / -1; }
        .rem-blank-line { min-width: 100%; }
        .rem-k {
          min-width: 64px;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #555;
        }

        @media (max-width: 460px) {
          .row2 { flex-direction: column; gap: 0; }
          .rem-grid { grid-template-columns: 1fr; }
        }

        /* ---- PRINT ---- */
        @media print {
          /* margin:0 makes Chromium drop its date/title header & footer */
          @page { size: A4 portrait; margin: 0; }
          @page landscape { size: A4 landscape; margin: 0; }
          html, body { background: #fff; }
          .card-root { padding: 0; max-width: none; }
          .no-print { display: none !important; }
          .sheets { display: block; }

          .sheet {
            border: 0 !important;
            margin: 0 !important;
            break-after: page;
            break-inside: avoid;
          }
          .sheet:last-child { break-after: auto; }

          /* Emergency: top half of a portrait page, cut line at the middle */
          .sheet--emergency {
            position: relative;
            height: 296mm;
            padding: 13mm 0 0;
            box-sizing: border-box;
            overflow: hidden;
          }
          .sheet--emergency .ecard {
            margin: 0 13mm;
          }
          .cutline {
            position: absolute;
            left: 0; right: 0;
            top: 168mm;
            margin: 0;
          }

          /* Care checklist: rotate to landscape, full width */
          .sheet--checklist {
            page: landscape;
            padding: 11mm 12mm;
            box-sizing: border-box;
          }

          .chk-table td { height: 11mm; }
          .val--blank { min-width: 40mm; }
        }
      `}</style>

      {/* ---------- BUILDER (screen only) ---------- */}
      <a href="/" className="card-back no-print">← Back</a>

      <p className="card-instruction no-print">
        Dear owner, please fill this in. It will generate two documents: one that I will carry with me at all times with emergency information, and one that I will use as a checklist that I will fill in as you walk me through the house and introduce me to your pets. If you can print them, that'd be great — otherwise just fill this in and I will print them myself. Thanks!
      </p>

      <div className="no-print">
        <section className="block">
          <p className="block-label">Basics</p>
          <div className="field">
            <span className="field-name">Pet name(s)</span>
            <input type="text" value={f.petNames} onChange={set('petNames')} autoComplete="off" />
          </div>
          <div className="row2">
            <div className="field">
              <span className="field-name">Start date</span>
              <input
                type="date"
                value={f.startDate}
                min={todayStr}
                onChange={set('startDate')}
              />
            </div>
            <div className="field">
              <span className="field-name">End date</span>
              <input
                type="date"
                value={f.endDate}
                min={f.startDate || todayStr}
                max={maxEndStr || undefined}
                onChange={set('endDate')}
              />
            </div>
          </div>
        </section>

        <section className="block">
          <p className="block-label"><span className="block-num">1</span> Who to call</p>
          <div className="row2">
            <div className="field">
              <span className="field-name">Name of primary contact</span>
              <input type="text" value={f.primary} onChange={set('primary')} autoComplete="off" />
            </div>
            <div className="field">
              <span className="field-name">Phone</span>
              <input type="tel" value={f.primaryPhone} onChange={set('primaryPhone')} autoComplete="off" />
            </div>
          </div>
          <div className="row2">
            <div className="field">
              <span className="field-name">Name of backup contact (or vet)</span>
              <input type="text" value={f.backup} onChange={set('backup')} autoComplete="off" />
            </div>
            <div className="field">
              <span className="field-name">Phone</span>
              <input type="tel" value={f.backupPhone} onChange={set('backupPhone')} autoComplete="off" />
            </div>
          </div>
        </section>

        <section className="block">
          <p className="block-label"><span className="block-num">2</span> Where this is</p>
          <div className="field">
            <span className="field-name">Street name</span>
            <input type="text" value={f.street} onChange={set('street')} autoComplete="off" />
          </div>
          <div className="row2">
            <div className="field">
              <span className="field-name">House number</span>
              <input type="text" value={f.houseNumber} onChange={set('houseNumber')} autoComplete="off" />
            </div>
            <div className="field">
              <span className="field-name">Postal code</span>
              <input type="text" value={f.postalCode} onChange={set('postalCode')} autoComplete="off" />
            </div>
          </div>
          <div className="field">
            <span className="field-name">c/o (name on the doorbell)</span>
            <input type="text" value={f.careOf} onChange={set('careOf')} autoComplete="off" />
          </div>
          <div className="field">
            <span className="field-name">Nearest landmark (supermarket, station…)</span>
            <input type="text" value={f.landmark} onChange={set('landmark')} autoComplete="off" />
          </div>
        </section>

      </div>

      {/* ---------- SHEETS (preview + print) ---------- */}
      <div className="sheets">
        {/* Sheet 1 — EMERGENCY CARD (carry) */}
        <section className="sheet sheet--emergency">
          <div className="ecard">
            <h2 className="sheet-h">Emergency Card</h2>

            <div className="ec-block">
              <p className="ec-head">Basics</p>
              <div className="ec-line"><span className="ec-k">Pets</span><Val v={f.petNames} /></div>
            </div>

            <div className="ec-block">
              <p className="ec-head"><b>1</b> Who to call</p>
              <div className="ec-line"><span className="ec-k">Primary</span><Val v={namePhone(f.primary, f.primaryPhone)} /></div>
              <div className="ec-line"><span className="ec-k">Backup</span><Val v={namePhone(f.backup, f.backupPhone)} /></div>
            </div>

            <div className="ec-block">
              <p className="ec-head"><b>2</b> Where this is</p>
              <div className="ec-line"><span className="ec-k">Address</span><Val v={composeAddress(f)} /></div>
              <div className="ec-line"><span className="ec-k">Landmark</span><Val v={f.landmark} /></div>
            </div>

            <div className="ec-block">
              <p className="ec-head"><b>3</b> Anything else</p>
              <div className="ec-note">{(f.notes || '').trim()}</div>
            </div>
          </div>
          <div className="cutline"><span>✂ cut here</span></div>
        </section>

        {/* Sheet 2+ — CARE CHECKLIST (leave at home) */}
        {dayChunks.map((cols, idx) => (
          <section className="sheet sheet--checklist" key={idx}>
            <h2 className="sheet-h">Care Checklist</h2>
            <p className="sheet-meta"><Val v={f.petNames} /> · {rangeLabel}</p>

            <p className="chk-note">Wilfredo will fill this based on your instructions</p>

            <table className="chk-table">
              <thead>
                <tr>
                  <th className="task-col">Task</th>
                  {cols.map((d, i) => (
                    <th key={i}>
                      {d ? (
                        <>
                          <span className="wd">{WD[d.getDay()]}</span>
                          <span className="dm">{d.getMonth() + 1}/{d.getDate()}</span>
                        </>
                      ) : (
                        <span className="dm">&nbsp;</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: ROWS }).map((_, r) => (
                  <tr key={r}>
                    <td className="task-cell" />
                    {cols.map((_, c) => <td key={c} />)}
                  </tr>
                ))}
              </tbody>
            </table>

            <Reminders f={f} rangeLabel={rangeLabel} />
          </section>
        ))}
      </div>

      <div className="no-print">
        <button
          type="button"
          className="print-btn"
          onClick={openDialog}
        >
          Generate printable PDF
        </button>
        {formError && <p className="form-error">{formError}</p>}
      </div>

      {/* Dialog */}
      {dialog && (
        <div className="dlg-overlay" onClick={() => status === 'choose' && closeDialog()}>
          <div className="dlg" onClick={e => e.stopPropagation()}>
            {status === 'choose' && (
              <>
                <p className="dlg-title">Almost done!</p>
                <p className="dlg-body">
                  Please print it and have it ready for Wilfredo's arrival. What will you do?
                </p>
                <div className="dlg-btns">
                  <button className="dlg-btn dlg-btn--primary" onClick={() => handleChoice('Owner will print it', { download: true, print: true })}>
                    I will print it
                  </button>
                  <button className="dlg-btn" onClick={() => handleChoice('You have to print it')}>
                    I can't print — please bring it
                  </button>
                </div>
                {sendError && <p style={{marginTop:16,fontSize:11,color:'red'}}>{sendError}</p>}
              </>
            )}

            {status === 'working' && (
              <>
                <p className="dlg-title">Working…</p>
                <p className="dlg-body" style={{margin:0}}>
                  Generating your PDFs. This takes a few seconds — please wait.
                </p>
              </>
            )}

            {status === 'saved' && (
              <>
                <p className="dlg-title">PDF saved!</p>
                <p className="dlg-body">
                  Please print it. Looking forward!
                </p>
                <button className="dlg-btn dlg-btn--primary" onClick={closeDialog}>
                  Close
                </button>
              </>
            )}

            {status === 'wilfredo' && (
              <>
                <p className="dlg-title">Got it!</p>
                <p className="dlg-body">
                  The PDFs have been sent to Wilfredo, who will bring the printed sheets. Looking forward!
                </p>
                <button className="dlg-btn dlg-btn--primary" onClick={closeDialog}>
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default PetSitterChecklist;
