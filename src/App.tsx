import { AboutMe } from './components/AboutMe';
import { ArtstationCarousel } from './components/ArtstationCarousel';
import { CareerFocus } from './components/CareerFocus';
import { Footer } from './components/Footer';
import { FlagshipPortfolio } from './components/FlagshipPortfolio';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RepositoryGallery } from './components/RepositoryGallery';
import { SocialLinks } from './components/SocialLinks';
import { useLanguage } from './i18n/LanguageContext';

export default function App() {
  const { locale, copy } = useLanguage();
  return (
    <div className="site" data-locale={locale}>
      <a className="skip-link" href="#main">{locale === 'zh' ? '跳到主要内容' : 'Skip to main content'}</a>
      <span id="top" />
      <Header />
      <main id="main"><Hero /><FlagshipPortfolio /><CareerFocus /><AboutMe /><RepositoryGallery /><ArtstationCarousel /><SocialLinks /></main>
      <Footer />
      <div className="locale-status sr-only" aria-live="polite">{copy.language.changed}</div>
    </div>
  );
}
