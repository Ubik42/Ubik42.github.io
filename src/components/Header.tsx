import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../i18n/LanguageContext';

export function Header() {
  const { copy, locale } = useLanguage();

  return (
    <header className="site-header">
      <a className="brand-link" href="#top" aria-label="Lucas Shen, home">
        <span lang="zh-CN">沈裕焱</span>
        <span>Lucas Shen</span>
      </a>
      <div className="header-actions">
        <nav className="site-nav" aria-label={copy.nav.aria}>
          <a href="#portfolio">{copy.nav.work}</a>
          <a href="#portfolio">AI ToolTA</a>
          <a href="#noemancer">Noemancer</a>
          <a href="#career">{copy.nav.practice}</a>
          <a href="#visual-work">{locale === 'zh' ? '视觉作品' : 'Visual work'}</a>
          <a href="#links">{copy.nav.links}</a>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}
