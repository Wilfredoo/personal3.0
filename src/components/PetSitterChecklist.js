import React, { useState, useEffect } from 'react';

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
const MAX_DAYS = 120;            // safety cap
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
        <div><span className="rem-k">Address</span><Val v={f.address} /></div>
        <div><span className="rem-k">Landmark</span><Val v={f.landmark} /></div>
        <div className="rem-wide"><span className="rem-k">Notes</span><Val v={f.notes} /></div>
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
    address: '', landmark: '', notes: '',
  });
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));

  const [dialog, setDialog] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState('');

  const notifyWilfredo = async (choiceLabel) => {
    const res = await fetch('/.netlify/functions/notify-petsitter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...f, ownerChoice: choiceLabel }),
    });
    if (!res.ok) {
      const msg = await res.text();
      throw new Error(msg || `HTTP ${res.status}`);
    }
  };

  const handleChoice = async (choiceLabel, action) => {
    setSendError('');
    try {
      await notifyWilfredo(choiceLabel);
      setSubmitted(true);
      if (action) action();
    } catch (err) {
      setSendError(`Could not send notification: ${err.message}`);
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
        Dear owner, please fill this in and print it. Thanks!
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
              <input type="date" value={f.startDate} onChange={set('startDate')} />
            </div>
            <div className="field">
              <span className="field-name">End date</span>
              <input type="date" value={f.endDate} onChange={set('endDate')} />
            </div>
          </div>
        </section>

        <section className="block">
          <p className="block-label"><span className="block-num">1</span> Who to call</p>
          <div className="row2">
            <div className="field">
              <span className="field-name">Primary</span>
              <input type="text" value={f.primary} onChange={set('primary')} autoComplete="off" />
            </div>
            <div className="field">
              <span className="field-name">Phone</span>
              <input type="tel" value={f.primaryPhone} onChange={set('primaryPhone')} autoComplete="off" />
            </div>
          </div>
          <div className="row2">
            <div className="field">
              <span className="field-name">Backup (or vet)</span>
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
            <span className="field-name">Full address</span>
            <input type="text" value={f.address} onChange={set('address')} autoComplete="off" />
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
              <div className="ec-line"><span className="ec-k">Dates</span><span className="val">{rangeLabel}</span></div>
            </div>

            <div className="ec-block">
              <p className="ec-head"><b>1</b> Who to call</p>
              <div className="ec-line"><span className="ec-k">Primary</span><Val v={namePhone(f.primary, f.primaryPhone)} /></div>
              <div className="ec-line"><span className="ec-k">Backup</span><Val v={namePhone(f.backup, f.backupPhone)} /></div>
            </div>

            <div className="ec-block">
              <p className="ec-head"><b>2</b> Where this is</p>
              <div className="ec-line"><span className="ec-k">Address</span><Val v={f.address} /></div>
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

            <p className="chk-note">To be filled in together with Wilfredo</p>

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
          onClick={() => setDialog(true)}
        >
          Generate printable PDF
        </button>
        <p className="print-hint">On mobile: use your browser's Share → Print option to save as PDF</p>
      </div>

      {/* Dialog */}
      {dialog && (
        <div className="dlg-overlay" onClick={() => !submitted && setDialog(false)}>
          <div className="dlg" onClick={e => e.stopPropagation()}>
            {!submitted ? (
              <>
                <p className="dlg-title">The PDF is ready!</p>
                <p className="dlg-body">
                  Please print it and have it ready for my arrival. What will you do?
                </p>
                <div className="dlg-btns">
                  <button className="dlg-btn dlg-btn--primary" onClick={() => handleChoice('Print now', () => { setDialog(false); setTimeout(() => window.print(), 100); })}>
                    I will print it now
                  </button>
                  <button className="dlg-btn" onClick={() => handleChoice('Save to print later', () => { setDialog(false); setTimeout(() => window.print(), 100); })}>
                    I'll save it and print it later
                  </button>
                  <button className="dlg-btn" onClick={() => handleChoice('Asked Wilfredo to print')}>
                    I can't print — please bring it
                  </button>
                </div>
                {sendError && <p style={{marginTop:16,fontSize:11,color:'red'}}>{sendError}</p>}
              </>
            ) : (
              <>
                <p className="dlg-title">Got it!</p>
                <p className="dlg-body">
                  Wilfredo has been notified. See you soon!
                </p>
                <button className="dlg-btn dlg-btn--primary" onClick={() => { setDialog(false); setSubmitted(false); }}>
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
