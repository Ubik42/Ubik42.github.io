import { useEffect, useRef } from 'react';

import type { PortfolioSystem } from '../data/content';
import { useLanguage } from '../i18n/LanguageContext';

interface EvidenceDialogProps {
  system: PortfolioSystem;
  open: boolean;
  onClose: () => void;
}

export function EvidenceDialog({ system, open, onClose }: EvidenceDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { copy } = useLanguage();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="evidence-dialog"
      aria-label={`${copy.atlas.dialogLabel}: ${system.title}`}
      onClose={onClose}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="dialog-frame">
        <header className="dialog-header">
          <div>
            <span>{copy.atlas.dialogLabel}</span>
            <h2>{system.title}</h2>
          </div>
          <button type="button" className="dialog-close" onClick={onClose}>
            {copy.atlas.close}
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="dialog-evidence-layout">
          <figure className="dialog-figure">
            <img
              src={system.image}
              alt={system.imageAlt}
              width={system.imageWidth}
              height={system.imageHeight}
              loading="lazy"
            />
            <figcaption>{system.summary}</figcaption>
          </figure>

          <div className="dialog-facts">
            <section>
              <h3>{copy.atlas.problem}</h3>
              <p>{system.problem}</p>
            </section>
            <section>
              <h3>{copy.atlas.core}</h3>
              <p>{system.core}</p>
            </section>
            <section>
              <h3>{copy.atlas.aiBoundary}</h3>
              <p>{system.aiBoundary}</p>
            </section>
            <section>
              <h3>{copy.atlas.evidence}</h3>
              <ul>
                {system.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </dialog>
  );
}
