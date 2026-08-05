import { useLanguage } from '../i18n/LanguageContext';

export function ThingsIMake() {
  const { copy } = useLanguage();
  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <div className="work-lead">
        <div className="section-heading"><h2 id="work-title">{copy.personal.workTitle}</h2><span aria-hidden="true" /></div>
        <p>{copy.personal.workIntro}</p>
        <a href="https://github.com/Ubik42?tab=repositories" target="_blank" rel="noreferrer">{copy.hero.secondaryAction}<span aria-hidden="true">↗</span></a>
      </div>
      <div className="work-list">
        {copy.personal.workItems.map((item, index) => (
          <article key={item.title}>
            <div className="work-image"><img src={item.image} alt={item.imageAlt} width={item.imageWidth} height={item.imageHeight} loading="lazy" /></div>
            <div className="work-copy"><span className="work-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.detail}</p><small>{item.meta}</small></div>
          </article>
        ))}
      </div>
    </section>
  );
}
