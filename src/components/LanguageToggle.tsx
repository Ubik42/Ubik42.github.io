import { useState } from 'react';

import { useLanguage } from '../i18n/LanguageContext';

export function LanguageToggle() {
  const { locale, copy, setLocale } = useLanguage();
  const [announcement, setAnnouncement] = useState('');

  const changeLanguage = (nextLocale: 'en' | 'zh') => {
    if (nextLocale === locale) return;
    setLocale(nextLocale);
    setAnnouncement(nextLocale === 'zh' ? '语言已切换为中文。' : 'Language changed to English.');
  };

  return (
    <>
      <div className="language-toggle" role="group" aria-label={copy.language.label}>
        <button
          type="button"
          className={locale === 'en' ? 'is-active' : undefined}
          aria-pressed={locale === 'en'}
          onClick={() => changeLanguage('en')}
        >
          EN
          <span className="sr-only">{copy.language.english}</span>
        </button>
        <button
          type="button"
          className={locale === 'zh' ? 'is-active' : undefined}
          aria-pressed={locale === 'zh'}
          onClick={() => changeLanguage('zh')}
        >
          中文
        </button>
      </div>
      <span className="sr-only" aria-live="polite">
        {announcement}
      </span>
    </>
  );
}
