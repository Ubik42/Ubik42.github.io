import { career, localize } from '../data/showcase';
import { useLanguage } from '../i18n/LanguageContext';

export function CareerFocus() {
  const { locale, copy } = useLanguage();
  return (
    <section id="career" className="career-section" aria-labelledby="career-title">
      <div className="career-intro">
        <span className="eyebrow">{localize(career.eyebrow, locale)}</span>
        <h2 id="career-title">{localize(career.title, locale)}</h2>
        <p>{localize(career.intro, locale)}</p>
      </div>
      <div className="career-pillar-grid">
        {career.pillars.map((pillar, index) => <article key={pillar.title.en}><span>0{index + 1}</span><h3>{localize(pillar.title, locale)}</h3><p>{localize(pillar.detail, locale)}</p></article>)}
      </div>
      <ul className="career-timeline" aria-label={copy.practice.title}>
        {copy.practice.items.map((item) => <li key={item.period}><time>{item.period}</time><div><h3>{item.title}</h3><strong>{item.place}</strong><p>{item.detail}</p></div></li>)}
      </ul>
    </section>
  );
}
