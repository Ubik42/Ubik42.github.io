import { motion } from 'motion/react';
import { flagship, localize } from '../data/showcase';
import { useLanguage } from '../i18n/LanguageContext';

const images = [
  { src: '/media/portfolio/overview.png', className: 'flagship-shot-main', alt: 'AI Tool TA portfolio overview' },
  { src: '/media/portfolio/asset-protocol.png', className: '', alt: 'Asset Protocol Workbench' },
  { src: '/media/portfolio/cross-dcc-rules.png', className: '', alt: 'Cross-DCC Rule Matrix' },
];

export function FlagshipPortfolio() {
  const { locale } = useLanguage();
  return (
    <section id="portfolio" className="flagship-section" aria-labelledby="flagship-title">
      <div className="flagship-copy">
        <span className="eyebrow">{localize(flagship.eyebrow, locale)}</span>
        <h2 id="flagship-title">{localize(flagship.title, locale)}</h2>
        <p className="flagship-summary">{localize(flagship.summary, locale)}</p>
        <p className="status-line"><i aria-hidden="true" />{localize(flagship.status, locale)}</p>
        <ul className="module-list">
          {flagship.modules.map((module) => <li key={module.en}>{localize(module, locale)}</li>)}
        </ul>
        <div className="flagship-actions">
          <a className="action action-primary" href="https://github.com/Ubik42/ai-tool-ta-portfolio" target="_blank" rel="noreferrer">{localize(flagship.primary, locale)} <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="https://github.com/Ubik42/ai-tool-ta-portfolio/blob/main/PUBLIC_RELEASE.md" target="_blank" rel="noreferrer">{localize(flagship.secondary, locale)} <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="flagship-evidence">
        <div className="metric-row">
          {flagship.metrics.map((metric) => <div key={metric.value + metric.en}><strong>{metric.value}</strong><span>{locale === 'zh' ? metric.zh : metric.en}</span></div>)}
        </div>
        <div className="flagship-gallery">
          {images.map((image, index) => (
            <motion.figure key={image.src} className={image.className} whileHover={{ y: -4 }} transition={{ duration: .25, delay: index * 0 }}>
              <img src={image.src} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
