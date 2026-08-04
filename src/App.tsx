import { EvidenceAtlas } from './components/EvidenceAtlas';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OngoingProject } from './components/OngoingProject';
import { PracticeRange } from './components/PracticeRange';
import { useLanguage } from './i18n/LanguageContext';

export default function App() {
  const { locale, copy } = useLanguage();

  return (
    <div className="site" data-locale={locale}>
      <a className="skip-link" href="#main">
        {locale === 'zh' ? '跳到主要内容' : 'Skip to main content'}
      </a>
      <Header />
      <main id="main">
        <span id="top" />
        <Hero />
        <EvidenceAtlas />
        <PracticeRange />
        <OngoingProject />
      </main>
      <Footer />
      <div className="locale-status sr-only" aria-live="polite">
        {copy.language.changed}
      </div>
    </div>
  );
}
