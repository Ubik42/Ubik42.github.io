import { lazy, Suspense, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { Magnet } from './Magnet';
import { useLanguage } from '../i18n/LanguageContext';

const ProtocolCore3D = lazy(() => import('./ProtocolCore3D'));

const entrance = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function StaticCoreFallback() {
  return (
    <div className="core-fallback" aria-hidden="true">
      {['plum', 'ink', 'green', 'surface', 'blue', 'plum'].map((color, index) => (
        <span key={`${color}-${index}`} className={`fallback-${color}`} />
      ))}
    </div>
  );
}

export function Hero() {
  const { copy, locale } = useLanguage();
  const reducedMotion = useReducedMotion() ?? false;
  const [loadThreeDimensionalCore, setLoadThreeDimensionalCore] = useState(false);

  useEffect(() => {
    const handle = window.setTimeout(() => setLoadThreeDimensionalCore(true), 700);
    return () => window.clearTimeout(handle);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <motion.div
        className="hero-identity"
        initial={reducedMotion ? false : 'hidden'}
        animate="visible"
        variants={entrance}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero-avatar-stamp">
          <img
            src="/media/avatar.jpg"
            alt="Lucas Shen hand-drawn avatar"
            width="640"
            height="640"
            fetchPriority="high"
          />
          <span aria-hidden="true">ID / LSHEN</span>
        </div>

        <div className="hero-name-block">
          <p className="hero-signal">AI / DCC / ENGINE / EVIDENCE</p>
          <h1 id="hero-title">Lucas Shen</h1>
          <p className="hero-chinese-name" lang="zh-CN">沈裕焱</p>
          <p className="hero-role">{copy.hero.role}</p>
          <span className="hero-rule" aria-hidden="true" />
          <p className={`hero-statement ${locale === 'zh' ? 'is-chinese' : ''}`}>{copy.hero.statement}</p>
        </div>

        <div className="hero-actions">
          <Magnet wrapperClassName="magnet-wrapper" innerClassName="magnet-inner">
            <a className="action action-light" href="#atlas">
              {copy.hero.primaryAction}
              <span aria-hidden="true">↘</span>
            </a>
          </Magnet>
          <a className="action action-ghost" href="https://github.com/Ubik42" target="_blank" rel="noreferrer">
            {copy.hero.secondaryAction}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-instrument"
        initial={reducedMotion ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="instrument-heading">
          <h2>{copy.hero.methodTitle}</h2>
          <div className="instrument-status">
            <span>{copy.hero.coreLabel}</span>
            <strong>{copy.hero.coreStatus}</strong>
          </div>
        </div>

        <div className="protocol-stage" aria-label={copy.hero.coreStatus}>
          {loadThreeDimensionalCore ? (
            <Suspense fallback={<StaticCoreFallback />}>
              <ProtocolCore3D reducedMotion={reducedMotion} />
            </Suspense>
          ) : (
            <StaticCoreFallback />
          )}
          <div className="stage-axis stage-axis-x" aria-hidden="true" />
          <div className="stage-axis stage-axis-y" aria-hidden="true" />
          <span className="stage-coordinate stage-coordinate-a" aria-hidden="true">X 06.24</span>
          <span className="stage-coordinate stage-coordinate-b" aria-hidden="true">Y 03.18</span>
        </div>

        <ol className="method-index">
          {copy.method.map((stage, index) => (
            <li key={stage.id} className={`method-${stage.id}`}>
              <span className="method-number">{String(index + 1).padStart(2, '0')}</span>
              <strong>{stage.label}</strong>
              <span>{stage.detail}</span>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
