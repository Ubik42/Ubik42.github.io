import '@fontsource-variable/archivo/wdth.css';
import '@fontsource-variable/atkinson-hyperlegible-next';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { LanguageProvider } from './i18n/LanguageProvider';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
