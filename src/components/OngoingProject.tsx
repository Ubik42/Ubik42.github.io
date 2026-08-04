import { motion, useReducedMotion } from 'motion/react';

import { Magnet } from './Magnet';
import { useLanguage } from '../i18n/LanguageContext';

export function OngoingProject() {
  const { copy } = useLanguage();
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section className="ongoing-section" aria-labelledby="ongoing-title">
      <motion.div
        className="ongoing-panel"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.985 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="ongoing-heading">
          <span>{copy.ongoing.title}</span>
          <span className="ongoing-status"><i aria-hidden="true" />{copy.ongoing.status}</span>
        </div>
        <div className="ongoing-body">
          <h2 id="ongoing-title">{copy.ongoing.name}</h2>
          <p>{copy.ongoing.detail}</p>
          <Magnet wrapperClassName="magnet-wrapper" innerClassName="magnet-inner">
            <a href="https://github.com/Ubik42/MayaCraft" target="_blank" rel="noreferrer">
              {copy.ongoing.action}
              <span aria-hidden="true">↗</span>
            </a>
          </Magnet>
        </div>
        <div className="ongoing-technical" aria-hidden="true">
          <span>PY 3.11</span>
          <span>MAYA API 2.0</span>
          <span>PYSIDE6</span>
          <span>AURORAVIEW</span>
        </div>
      </motion.div>
    </section>
  );
}
