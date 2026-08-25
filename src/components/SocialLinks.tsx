import { useLanguage } from '../i18n/LanguageContext';

export function SocialLinks() {
  const { copy } = useLanguage();
  return (
    <section id="links" className="links-section" aria-labelledby="links-title">
      <div className="links-lead"><div className="section-heading"><h2 id="links-title">{copy.personal.linksTitle}</h2><span aria-hidden="true" /></div><p>{copy.personal.linksIntro}</p></div>
      <nav className="social-list" aria-label={copy.personal.linksTitle}>
        {copy.personal.social.map((link) => (
          <a key={link.name} href={link.href} target={link.href.startsWith('#') ? undefined : '_blank'} rel={link.href.startsWith('#') ? undefined : 'noreferrer'}>
            <span className="social-mark" aria-hidden="true">{link.mark}</span>
            <span className="social-copy"><strong>{link.name}</strong><span>{link.detail}</span></span>
            <span className="social-arrow" aria-hidden="true">{link.href.startsWith('#') ? '↑' : '↗'}</span>
          </a>
        ))}
      </nav>
    </section>
  );
}
