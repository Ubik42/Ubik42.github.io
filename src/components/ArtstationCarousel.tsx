import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { artWorks, localize } from '../data/showcase';
import { useLanguage } from '../i18n/LanguageContext';

export function ArtstationCarousel() {
  const { locale } = useLanguage();
  const reducedMotion = useReducedMotion() ?? false;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % artWorks.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);
  const work = artWorks[active];
  const move = (delta: number) => setActive((active + delta + artWorks.length) % artWorks.length);
  return (
    <section id="artstation" className="artstation-section" aria-labelledby="artstation-title" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="artstation-heading"><div><span className="eyebrow">ArtStation / visual practice</span><h2 id="artstation-title">{locale === 'zh' ? '图形、美术与工具练习' : 'Graphics, art & tool practice'}</h2></div><p>{locale === 'zh' ? '这些作品补充了我对材质、Shader、程序化内容、实时场景和 DCC 工具的视觉理解。' : 'These works complement my tooling practice with material, shader, procedural, realtime, and DCC studies.'}</p></div>
      <div className="carousel-shell">
        <div className="carousel-viewport" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.a key={work.href} href={work.href} target="_blank" rel="noreferrer" initial={reducedMotion ? false : { opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} exit={reducedMotion ? undefined : { opacity: 0, x: -24 }} transition={{ duration: .45, ease: [0.16, 1, 0.3, 1] }}>
              <img src={work.image} alt={work.title} />
              <span className="carousel-caption"><small>{localize(work.category, locale)}</small><strong>{work.title}</strong><b aria-hidden="true">↗</b></span>
            </motion.a>
          </AnimatePresence>
        </div>
        <div className="carousel-controls">
          <button type="button" onClick={() => move(-1)} aria-label={locale === 'zh' ? '上一件作品' : 'Previous artwork'}>←</button>
          <div role="tablist" aria-label={locale === 'zh' ? '选择作品' : 'Select artwork'}>{artWorks.map((item, index) => <button key={item.href} type="button" role="tab" aria-selected={index === active} aria-label={item.title} className={index === active ? 'is-active' : ''} onClick={() => setActive(index)} />)}</div>
          <span>{String(active + 1).padStart(2, '0')} / {String(artWorks.length).padStart(2, '0')}</span>
          <button type="button" onClick={() => move(1)} aria-label={locale === 'zh' ? '下一件作品' : 'Next artwork'}>→</button>
        </div>
      </div>
    </section>
  );
}
