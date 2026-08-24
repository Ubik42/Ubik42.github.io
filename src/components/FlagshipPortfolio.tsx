import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { localize, portfolioOverview, productLines } from '../data/showcase';
import { useLanguage } from '../i18n/LanguageContext';

export function FlagshipPortfolio() {
  const { locale } = useLanguage();
  const reducedMotion = useReducedMotion() ?? false;
  const [activeId, setActiveId] = useState(productLines[0].id);
  const activeLine = productLines.find((line) => line.id === activeId) ?? productLines[0];

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
            <a href="https://github.com/Ubik42/AIToolTA" target="_blank" rel="noreferrer">{localize(portfolioOverview.sourceLabel, locale)} <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </header>

      <div className="portfolio-facts" role="group" aria-label={locale === 'zh' ? '作品集概览' : 'Portfolio overview'}>
        {portfolioOverview.facts.map((fact) => <div key={fact.value + fact.label.en}><strong>{fact.value}</strong><span>{localize(fact.label, locale)}</span></div>)}
      </div>

      <div className="tool-browser">
        <div className="tool-index" role="tablist" aria-label={locale === 'zh' ? '选择产品线' : 'Select a product line'}>
          {productLines.map((line) => (
            <button key={line.id} type="button" role="tab" aria-selected={line.id === activeId} aria-controls="tool-detail" className={line.id === activeId ? 'is-active' : ''} onClick={() => setActiveId(line.id)}>
              <span>{line.order}</span><strong>{localize(line.title, locale)}</strong><i aria-hidden="true">→</i>
            </button>
          ))}
        </div>

        <div id="tool-detail" className="tool-detail" role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.div key={activeLine.id} initial={reducedMotion ? false : { opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={reducedMotion ? undefined : { opacity: 0, x: -12 }} transition={{ duration: .35, ease: [0.16, 1, 0.3, 1] }}>
              <figure className="tool-detail-image"><img src={activeLine.image} alt={localize(activeLine.imageAlt, locale)} width={activeLine.imageWidth} height={activeLine.imageHeight} /></figure>
              <div className="tool-detail-copy">
                <div className="tool-detail-title"><span>{activeLine.order} / 05</span><h3>{localize(activeLine.title, locale)}</h3></div>
                <dl>
                  <div><dt>{locale === 'zh' ? '解决什么' : 'Purpose'}</dt><dd>{localize(activeLine.purpose, locale)}</dd></div>
                  <div><dt>{locale === 'zh' ? '工作流' : 'Workflow'}</dt><dd>{localize(activeLine.workflow, locale)}</dd></div>
                  <div><dt>{locale === 'zh' ? '可查证内容' : 'Review evidence'}</dt><dd>{localize(activeLine.proof, locale)}</dd></div>
                  <div><dt>{locale === 'zh' ? '当前边界' : 'Current boundary'}</dt><dd>{localize(activeLine.stage, locale)}</dd></div>
                </dl>
                <ul>{activeLine.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="repository-links" aria-label={locale === 'zh' ? '关联 GitHub 仓库' : 'Related GitHub repositories'}>
                  <strong>{locale === 'zh' ? '关联仓库' : 'Repositories'}</strong>
                  <div>{activeLine.repositories.map((repository) => <a key={repository.href} href={repository.href} target="_blank" rel="noreferrer">{repository.name}<span aria-hidden="true">↗</span></a>)}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <p className="portfolio-disclaimer">{locale === 'zh' ? '展示口径：页面先列出仓库入口与现有截图，仓库可见范围按发布节奏逐项开放。完成度以各仓 README、测试记录和发布说明为准；原型、合成样例或局部验证不会描述为完整生产交付。' : 'Presentation policy: the page lists repository destinations and current screenshots first, while repository visibility is opened in stages. Maturity follows each README, test record, and release note; prototypes, synthetic fixtures, and partial validation are not presented as finished production delivery.'}</p>
    </section>
  );
}
