import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { projectText, selectedProjects, type SelectedProject } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

export function ProjectArchive() {
  const { locale } = useLanguage();
  const reducedMotion = useReducedMotion() ?? false;
  const [activeProject, setActiveProject] = useState<SelectedProject | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeProject) {
      if (!dialog.open) dialog.showModal();
      document.body.classList.add('has-project-dialog');
    } else {
      if (dialog.open) dialog.close();
      document.body.classList.remove('has-project-dialog');
    }

    return () => document.body.classList.remove('has-project-dialog');
  }, [activeProject]);

  const closeProject = () => setActiveProject(null);

  return (
    <section id="projects" className="project-archive-section" aria-labelledby="project-archive-title">
      <header className="project-archive-header">
        <div>
          <p className="section-label">Selected work · 06 projects</p>
          <h2 id="project-archive-title">{locale === 'zh' ? '项目作品' : 'Selected projects'}</h2>
        </div>
        <p>{locale === 'zh' ? '游戏、DCC 插件、实时图形与 Web 3D 项目，包含本人职责、技术实现和过程素材。' : 'Games, DCC plug-ins, realtime graphics, and Web 3D projects, with my role, implementation details, and production material.'}</p>
      </header>

      <div className="project-archive-grid">
        {selectedProjects.map((project, index) => (
          <motion.button
            key={project.id}
            type="button"
            className={`project-card project-card-${index + 1}`}
            onClick={() => setActiveProject(project)}
            whileHover={reducedMotion ? undefined : { y: -5 }}
            transition={{ duration: .22 }}
            aria-label={`${locale === 'zh' ? '查看项目详情：' : 'View project details: '}${project.title}`}
          >
            <figure>
              <img src={project.images[0].src} alt={projectText(project.images[0].alt, locale)} style={{ objectPosition: project.images[0].position }} loading={index < 2 ? 'eager' : 'lazy'} />
              <figcaption><span>{project.period}</span><span>{projectText(project.category, locale)}</span></figcaption>
            </figure>
            <div className="project-card-copy">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{project.title}</h3><p>{projectText(project.summary, locale)}</p></div>
              <b aria-hidden="true">＋</b>
            </div>
          </motion.button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="project-dialog"
        onCancel={(event) => { event.preventDefault(); closeProject(); }}
        onClose={() => setActiveProject(null)}
        onClick={(event) => { if (event.target === event.currentTarget) closeProject(); }}
      >
        {activeProject && (
            <motion.article key={activeProject.id} initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .24 }}>
              <button className="project-dialog-close" type="button" onClick={closeProject} aria-label={locale === 'zh' ? '关闭项目详情' : 'Close project details'}>×</button>
              <div className="project-dialog-heading">
                <p>{activeProject.period} · {projectText(activeProject.category, locale)}</p>
                <h2>{activeProject.title}</h2>
                <p>{projectText(activeProject.summary, locale)}</p>
              </div>
              <div className="project-dialog-gallery">
                {activeProject.images.map((image) => (
                  <figure key={image.src}>
                    <img src={image.src} alt={projectText(image.alt, locale)} style={{ objectPosition: image.position }} />
                    <figcaption>{projectText(image.caption, locale)}</figcaption>
                  </figure>
                ))}
              </div>
              <div className="project-dialog-details">
                <div>
                  <h3>{locale === 'zh' ? '我具体做了什么' : 'What I built'}</h3>
                  <ul>{activeProject.contribution.map((item) => <li key={item.en}>{projectText(item, locale)}</li>)}</ul>
                </div>
                <div>
                  <h3>{locale === 'zh' ? '技术与工具' : 'Technology'}</h3>
                  <ul className="project-dialog-stack">{activeProject.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                  {activeProject.link && <a href={activeProject.link.href} target="_blank" rel="noreferrer">{projectText(activeProject.link.label, locale)} <span aria-hidden="true">↗</span></a>}
                </div>
              </div>
            </motion.article>
        )}
      </dialog>
    </section>
  );
}
