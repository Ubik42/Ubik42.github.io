import { createContext, use } from 'react';

import type { Locale, SiteCopy } from '../data/content';

export interface LanguageContextValue {
  locale: Locale;
  copy: SiteCopy;
  setLocale: (locale: Locale) => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const context = use(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider.');
  return context;
}

