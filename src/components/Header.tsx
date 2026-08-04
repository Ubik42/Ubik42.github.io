import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../i18n/LanguageContext';

export function Header() {
  const { copy } = useLanguage();

  return (
    <header className="site-header">
      <a className="brand-link" href="#top" aria-label="Lucas Shen, home">
        <span>Lucas Shen</span>
        <span className="brand-divider" aria-hidden="true" />
        <span className="brand-role">AI Tool TA</span>
      </a>

      <div className="header-actions">
        <nav className="site-nav" aria-label={copy.nav.aria}>
          <a href="#atlas">{copy.nav.work}</a>
          <a href="#practice">{copy.nav.practice}</a>
          <a href="#connect">{copy.nav.connect}</a>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}
