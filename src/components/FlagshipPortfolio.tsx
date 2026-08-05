import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { coreTools, integratedTools, localize, portfolioOverview } from '../data/showcase';
import { useLanguage } from '../i18n/LanguageContext';

export function FlagshipPortfolio() {
  const { locale } = useLanguage();
  const reducedMotion = useReducedMotion() ?? false;
  const [activeId, setActiveId] = useState(coreTools[0].id);
  const activeTool = coreTools.find((tool) => tool.id === activeId) ?? coreTools[0];

  return (
    <section id="portfolio" className="tool-portfolio-section" aria-labelledby="tool-portfolio-title">
      <header className="tool-portfolio-header">
        <div>
          <p className="section-label">AI Tool TA Portfolio</p>
          <h2 id="tool-portfolio-title">{localize(portfolioOverview.title, locale)}</h2>
        </div>
        <div className="tool-portfolio-intro">
          <p>{localize(portfolioOverview.summary, locale)}</p>
          <div className="portfolio-source-row">
            <span><i aria-hidden="true" />{localize(portfolioOverview.status, locale)}</span>
            <a href="https://github.com/Ubik42/ai-tool-ta-portfolio" target="_blank" rel="noreferrer">{localize(portfolioOverview.sourceLabel, locale)} <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </header>

      <div className="portfolio-facts" role="group" aria-label={locale === 'zh' ? '作品集概览' : 'Portfolio overview'}>
        {portfolioOverview.facts.map((fact) => <div key={fact.value + fact.label.en}><strong>{fact.value}</strong><span>{localize(fact.label, locale)}</span></div>)}
      </div>

      <div className="tool-browser">
        <div className="tool-index" role="tablist" aria-label={locale === 'zh' ? '选择核心工具' : 'Select a core tool'}>
          {coreTools.map((tool) => (
            <button key={tool.id} type="button" role="tab" aria-selected={tool.id === activeId} aria-controls="tool-detail" className={tool.id === activeId ? 'is-active' : ''} onClick={() => setActiveId(tool.id)}>
              <span>{tool.order}</span><strong>{tool.title}</strong><i aria-hidden="true">→</i>
            </button>
          ))}
        </div>

        <div id="tool-detail" className="tool-detail" role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.div key={activeTool.id} initial={reducedMotion ? false : { opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={reducedMotion ? undefined : { opacity: 0, x: -12 }} transition={{ duration: .35, ease: [0.16, 1, 0.3, 1] }}>
              <figure className="tool-detail-image"><img src={activeTool.image} alt={localize(activeTool.imageAlt, locale)} width={activeTool.imageWidth} height={activeTool.imageHeight} /></figure>
              <div className="tool-detail-copy">
                <div className="tool-detail-title"><span>{activeTool.order} / 05</span><h3>{activeTool.title}</h3></div>
                <dl>
                  <div><dt>{locale === 'zh' ? '解决什么' : 'Purpose'}</dt><dd>{localize(activeTool.purpose, locale)}</dd></div>
                  <div><dt>{locale === 'zh' ? '工作流' : 'Workflow'}</dt><dd>{localize(activeTool.workflow, locale)}</dd></div>
                  <div><dt>{locale === 'zh' ? '可查证内容' : 'Review evidence'}</dt><dd>{localize(activeTool.proof, locale)}</dd></div>
                </dl>
                <ul>{activeTool.stack.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="integrated-tools">
        <header><h3>{locale === 'zh' ? '集成工具、门禁与运行时适配器' : 'Integrated tools, gates & runtime adapters'}</h3><p>{locale === 'zh' ? '这些能力不是附注，它们把五个核心工作台接到真实 DCC、引擎与交付决策中。' : 'These capabilities connect the five core workbenches to real DCCs, engines, and delivery decisions.'}</p></header>
        <div className="integrated-tool-list">
          {integratedTools.map((tool) => <article key={tool.title}><div><span>{localize(tool.family, locale)}</span><h4>{tool.title}</h4></div><p>{localize(tool.purpose, locale)}</p><div className="tool-runtime"><span>{tool.runtime}</span><strong>{tool.maturity}</strong></div></article>)}
        </div>
      </div>
    </section>
  );
}
