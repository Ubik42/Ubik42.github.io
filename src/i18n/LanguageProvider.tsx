import { startTransition, useEffect, useMemo, useState, type ReactNode } from 'react';

import { siteCopy, type Locale } from '../data/content';
import { LanguageContext, type LanguageContextValue } from './LanguageContext';

const STORAGE_KEY = 'portfolio.locale.v1';

function getInitialLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'zh') return stored;
  } catch {
    // Storage can be unavailable in privacy modes. Browser language remains a safe fallback.
  }

  return window.navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

function updateDescription(description: string) {
  const element = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (element) element.content = description;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const copy = siteCopy[locale];

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    document.title = copy.meta.title;
    updateDescription(copy.meta.description);
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // The visible language still works when persistence is unavailable.
    }
  }, [copy.meta.description, copy.meta.title, locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      copy,
      setLocale(nextLocale) {
        startTransition(() => setLocaleState(nextLocale));
      },
    }),
    [copy, locale],
  );

  return <LanguageContext value={value}>{children}</LanguageContext>;
}
