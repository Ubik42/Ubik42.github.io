import { motion, useReducedMotion } from 'motion/react';

import { useLanguage } from '../i18n/LanguageContext';

export function PracticeRange() {
  const { copy } = useLanguage();
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section id="practice" className="practice-section" aria-labelledby="practice-title">
      <div className="section-intro practice-intro">
        <h2 id="practice-title">{copy.practice.title}</h2>
        <p>{copy.practice.intro}</p>
      </div>

      <ol className="practice-track">
        {copy.practice.items.map((item, index) => (
          <motion.li
            key={`${item.period}-${item.title}`}
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.46, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="track-node" aria-hidden="true" />
            <time>{item.period}</time>
            <h3>{item.title}</h3>
            <strong>{item.place}</strong>
            <p>{item.detail}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
