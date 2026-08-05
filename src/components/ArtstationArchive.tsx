import { motion, useReducedMotion } from 'motion/react';

import { artWorks, localize } from '../data/showcase';
import { useLanguage } from '../i18n/LanguageContext';

export function ArtstationArchive() {
  const { locale } = useLanguage();
  const reducedMotion = useReducedMotion() ?? false;
  return (
    <section id="artstation" className="art-archive-section" aria-labelledby="art-archive-title">
      <header className="art-archive-header">
        <div><p className="section-label">ArtStation archive · 09 works</p><h2 id="art-archive-title">{locale === 'zh' ? '图形基础与视觉实践' : 'Graphics foundation & visual practice'}</h2></div>
        <p>{locale === 'zh' ? '完整收录当前 ArtStation 项目。它们展示我在工具开发之外，对实时场景、材质、Shader、绑定、动画与程序化内容的实际理解。' : 'The complete current ArtStation set, covering realtime environments, materials, shaders, rigging, animation, procedural work, and DCC tools.'}</p>
      </header>
      <div className="art-archive-grid">
        {artWorks.map((work, index) => (
          <motion.a key={work.href} className={work.featured ? 'art-work is-featured' : 'art-work'} href={work.href} target="_blank" rel="noreferrer" initial={false} whileHover={reducedMotion ? undefined : { y: -5 }} transition={{ duration: .22 }}>
            <figure><img src={work.image} alt={work.title} width={work.imageWidth} height={work.imageHeight} loading={index < 3 ? 'eager' : 'lazy'} /></figure>
            <div className="art-work-caption"><span>{String(index + 1).padStart(2, '0')}</span><div><small>{localize(work.category, locale)}</small><h3>{work.title}</h3><p>{work.tools.join(' · ')}</p></div><b aria-hidden="true">↗</b></div>
          </motion.a>
        ))}
      </div>
      <a className="artstation-profile-link" href="https://lucasshen2002.artstation.com/" target="_blank" rel="noreferrer">{locale === 'zh' ? '打开完整 ArtStation 主页' : 'Open full ArtStation profile'} <span aria-hidden="true">↗</span></a>
    </section>
  );
}
