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
          <a href="#career">{copy.nav.practice}</a>
          <a href="#repositories">GitHub</a>
          <a href="#artstation">ArtStation</a>
          <a href="#links">{copy.nav.links}</a>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}
