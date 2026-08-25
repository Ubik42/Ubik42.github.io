import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { localize } from '../data/showcase';
import { visualWorks, type VisualWork } from '../data/visualWorks';
import { visualWorkStories } from '../data/visualWorkStories';
import { useLanguage } from '../i18n/LanguageContext';
import { MarkdownStory } from './MarkdownStory';

export function VisualWorkArchive() {
  const { locale } = useLanguage();
  const reducedMotion = useReducedMotion() ?? false;
  const [activeWork, setActiveWork] = useState<VisualWork | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeWork) {
      if (!dialog.open) dialog.showModal();
      document.body.classList.add('has-project-dialog');
    } else {
      if (dialog.open) dialog.close();
      document.body.classList.remove('has-project-dialog');
    }

    return () => document.body.classList.remove('has-project-dialog');
  }, [activeWork]);

  const closeWork = () => setActiveWork(null);

  return (
    <section id="visual-work" className="art-archive-section" aria-labelledby="visual-work-title">
      <header className="art-archive-header">
        <div>
          <p className="section-label">Visual work · 09 projects</p>
          <h2 id="visual-work-title">{locale === 'zh' ? '实时图形与技术美术作品' : 'Realtime graphics & technical art'}</h2>
        </div>
        <p>{locale === 'zh' ? '九项作品覆盖 Unreal、Unity、Maya、Houdini 与 Substance Designer，包含最终效果、工具界面、节点网络和制作过程。' : 'Nine works across Unreal, Unity, Maya, Houdini, and Substance Designer, with final results, tool interfaces, node graphs, and production breakdowns.'}</p>
      </header>

      <div className="art-archive-grid">
        {visualWorks.map((work, index) => (
          <motion.button
            key={work.id}
            type="button"
            className={work.featured ? 'art-work is-featured' : 'art-work'}
            onClick={() => setActiveWork(work)}
            initial={false}
            whileHover={reducedMotion ? undefined : { y: -5 }}
            transition={{ duration: .22 }}
            aria-label={`${locale === 'zh' ? '作品详情：' : 'View work details: '}${localize(work.title, locale)}`}
          >
            <figure><img src={work.cover} alt={localize(work.title, locale)} loading={index < 3 ? 'eager' : 'lazy'} /></figure>
            <div className="art-work-caption">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><small>{localize(work.category, locale)}</small><h3>{localize(work.title, locale)}</h3><p>{work.tools.join(' · ')}</p></div>
              <b aria-hidden="true">＋</b>
            </div>
          </motion.button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="project-dialog visual-work-dialog"
        onCancel={(event) => { event.preventDefault(); closeWork(); }}
        onClose={() => setActiveWork(null)}
        onClick={(event) => { if (event.target === event.currentTarget) closeWork(); }}
      >
        {activeWork && (
          <motion.article key={activeWork.id} initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .24 }}>
            <button className="project-dialog-close" type="button" onClick={closeWork} aria-label={locale === 'zh' ? '关闭作品详情' : 'Close work details'}>×</button>
            <div className="project-dialog-heading">
              <p>{localize(activeWork.category, locale)} · {activeWork.tools.join(' · ')}</p>
              <h2>{localize(activeWork.title, locale)}</h2>
              <p>{localize(activeWork.summary, locale)}</p>
            </div>

            <a className="project-dialog-source visual-work-source" href={activeWork.artstationUrl} target="_blank" rel="noreferrer">
              <span>{locale === 'zh' ? '查看原始 ArtStation 项目' : 'View the original ArtStation project'}</span>
              <span aria-hidden="true">↗</span>
            </a>

            {activeWork.youtubeId && (
              <div className="visual-work-video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeWork.youtubeId}?rel=0`}
                  title={`${localize(activeWork.title, locale)} ${locale === 'zh' ? '演示视频' : 'demo video'}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            )}

            <MarkdownStory markdown={visualWorkStories[activeWork.id][locale]} title={localize(activeWork.title, locale)} />
          </motion.article>
        )}
      </dialog>
    </section>
  );
}
