import { lazy, Suspense } from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { Magnet } from './Magnet';
import { useLanguage } from '../i18n/LanguageContext';

const ToolConstellation3D = lazy(() => import('./ProtocolCore3D'));

export function Hero() {
  const { copy, locale } = useLanguage();
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy"
        initial={reducedMotion ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="identity-cluster">
          <img src="/media/avatar.jpg" alt="Lucas Shen hand-drawn avatar" width="640" height="640" fetchPriority="high" />
          <div>
            <h1 id="hero-title"><span lang="zh-CN">沈裕焱</span><span>Lucas Shen</span></h1>
            <p className="hero-role">{copy.hero.role}</p>
          </div>
        </div>
        <p className={`hero-intro ${locale === 'zh' ? 'is-chinese' : ''}`}>{copy.personal.intro}</p>
        <div className="hero-actions">
          <Magnet wrapperClassName="magnet-wrapper" innerClassName="magnet-inner">
            <a className="action action-primary" href="#projects">{copy.hero.primaryAction}<span aria-hidden="true">↘</span></a>
          </Magnet>
          <a className="action action-secondary" href="#about">{copy.personal.storyAction}<span aria-hidden="true">↓</span></a>
        </div>
      </motion.div>

      <motion.div
        className="hero-world"
        role="img"
        initial={reducedMotion ? false : { opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.95, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        aria-label={locale === 'zh' ? '我连接的三个工作领域' : 'Three areas of my practice'}
      >
        <Suspense fallback={<div className="constellation-fallback" aria-hidden="true" />}>
          <ToolConstellation3D reducedMotion={reducedMotion} />
        </Suspense>
        <div className="world-label world-label-dcc"><i aria-hidden="true" /> <strong>{locale === 'zh' ? 'DCC 工具' : 'DCC tools'}</strong><span>Maya / Blender</span></div>
        <div className="world-label world-label-ai"><i aria-hidden="true" /> <strong>{locale === 'zh' ? 'AI 工作流' : 'AI workflows'}</strong><span>LLM / Vision / Agents</span></div>
        <div className="world-label world-label-engine"><i aria-hidden="true" /> <strong>{locale === 'zh' ? '引擎与应用' : 'Engines & apps'}</strong><span>Unreal / Unity / Web</span></div>
      </motion.div>
    </section>
  );
}
