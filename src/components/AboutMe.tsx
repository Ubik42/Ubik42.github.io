import { useLanguage } from '../i18n/LanguageContext';

export function AboutMe() {
  const { copy } = useLanguage();
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="section-heading"><h2 id="about-title">{copy.personal.aboutTitle}</h2><span aria-hidden="true" /></div>
      <div className="about-copy">
        {copy.personal.aboutBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <ul className="trait-list">
        {copy.personal.traits.map((trait) => <li key={trait.title}><i aria-hidden="true" /><div><strong>{trait.title}</strong><span>{trait.detail}</span></div></li>)}
      </ul>
    </section>
  );
}
