import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../i18n/LanguageContext';

export function Header() {
  const { copy } = useLanguage();

  return (
    <header className="site-header">
      <a className="brand-link" href="#top" aria-label="Lucas Shen, home">
        <span lang="zh-CN">沈裕焱</span>
        <span>Lucas Shen</span>
      </a>
      <div className="header-actions">
        <nav className="site-nav" aria-label={copy.nav.aria}>
          <a href="#portfolio">{copy.nav.work}</a>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}
