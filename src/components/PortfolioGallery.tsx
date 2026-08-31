import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { projectText, selectedProjects, type SelectedProject } from '../data/projects';
import { projectStories } from '../data/projectStories';
import { repositoryWorks, type PortfolioCategory, type RepositoryWork } from '../data/repositoryWorks';
import { localize } from '../data/showcase';
import { visualWorks, type VisualWork } from '../data/visualWorks';
import { visualWorkStories } from '../data/visualWorkStories';
import { useLanguage } from '../i18n/LanguageContext';
import { MarkdownStory } from './MarkdownStory';

type GalleryItem =
  | { kind: 'repository'; id: string; category: PortfolioCategory; title: string; label: string; summary: string; cover: string; tags: string[]; value: RepositoryWork }
  | { kind: 'visual'; id: string; category: PortfolioCategory; title: string; label: string; summary: string; cover: string; tags: string[]; value: VisualWork }
  | { kind: 'project'; id: string; category: PortfolioCategory; title: string; label: string; summary: string; cover: string; tags: string[]; value: SelectedProject };

const filters: Array<{ id: 'all' | PortfolioCategory; zh: string; en: string }> = [
  { id: 'all', zh: '全部作品', en: 'All work' },
  { id: 'pipeline', zh: '工具管线', en: 'Tool pipelines' },
  { id: 'engine-games', zh: '引擎与游戏', en: 'Engines & games' },
  { id: 'general-ta', zh: '通用技术美术技能', en: 'General technical art' },
  { id: 'other-tools', zh: '部分其他工具', en: 'Selected other tools' },
];

const pipelineOrder = new Map([
  'art-pipeline-skill',
  'rez-studio-launcher',
  'internship-art-pipeline',
  'maya-garment-preparation',
  'mayascope',
  'comfyui-production-nodes',
  'mayacraft',
  'asset-delivery-organizer',
  'maya-scene-checker',
  'maya-plugin',
].map((id, index) => [id, index]));

const engineGamesOrder = new Map([
  'lyra-hero-arena',
  'siggraph-physics-lab',
  'lyra-performance-lab',
  'artflow-agent',
  'ue-performance-workbench',
  'resonance-forge',
  'noemancer',
  'unreal-asset-batch-auditor',
  'noemancer-software-rasterizer',
].map((id, index) => [id, index]));

const categoryOrder = new Map<PortfolioCategory, number>([
  ['pipeline', 0],
  ['engine-games', 1],
  ['ai-agent', 2],
  ['general-ta', 3],
  ['other-tools', 4],
]);

export function PortfolioGallery() {
  const { locale } = useLanguage();
  const reducedMotion = useReducedMotion() ?? false;
  const [filter, setFilter] = useState<'all' | PortfolioCategory>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const items = useMemo<GalleryItem[]>(() => {
    const sourceItems: GalleryItem[] = [
      ...repositoryWorks.map((work) => ({ kind: 'repository' as const, id: work.id, category: work.category, title: work.title, label: localize(work.categoryLabel, locale), summary: localize(work.summary, locale), cover: work.cover, tags: work.tags, value: work })),
      ...visualWorks.map((work) => ({ kind: 'visual' as const, id: work.id, category: work.portfolioCategory, title: localize(work.title, locale), label: localize(work.category, locale), summary: localize(work.summary, locale), cover: work.cover, tags: work.tools, value: work })),
      ...selectedProjects.map((project) => ({ kind: 'project' as const, id: project.id, category: project.portfolioCategory, title: project.title, label: projectText(project.category, locale), summary: projectText(project.summary, locale), cover: project.images[0].src, tags: project.stack, value: project })),
    ];
    return sourceItems
      .map((item, sourceIndex) => ({ item, sourceIndex }))
      .sort((a, b) => {
        const categoryDelta = (categoryOrder.get(a.item.category) ?? Number.MAX_SAFE_INTEGER) - (categoryOrder.get(b.item.category) ?? Number.MAX_SAFE_INTEGER);
        if (categoryDelta !== 0) return categoryDelta;
        if (a.item.category === 'pipeline') {
          return (pipelineOrder.get(a.item.id) ?? Number.MAX_SAFE_INTEGER) - (pipelineOrder.get(b.item.id) ?? Number.MAX_SAFE_INTEGER);
        }
        if (a.item.category === 'engine-games') {
          return (engineGamesOrder.get(a.item.id) ?? Number.MAX_SAFE_INTEGER) - (engineGamesOrder.get(b.item.id) ?? Number.MAX_SAFE_INTEGER);
        }
        return a.sourceIndex - b.sourceIndex;
      })
      .map(({ item }) => item);
  }, [locale]);

  const visibleItems = filter === 'all' ? items : items.filter((item) => item.category === filter);

  const updateWorkUrl = (workId: string | null, mode: 'push' | 'replace' = 'replace') => {
    const url = new URL(window.location.href);
    if (workId) url.searchParams.set('work', workId);
    else url.searchParams.delete('work');
    window.history[mode === 'push' ? 'pushState' : 'replaceState']({}, '', `${url.pathname}${url.search}${url.hash}`);
  };

  const openItem = (item: GalleryItem) => {
    updateWorkUrl(item.id, 'push');
    setActiveItem(item);
  };

  const closeItem = () => {
    updateWorkUrl(null);
    setActiveItem(null);
  };

  useEffect(() => {
    const syncFromUrl = () => {
      const workId = new URLSearchParams(window.location.search).get('work');
      setActiveItem(workId ? items.find((item) => item.id === workId) ?? null : null);
    };
    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, [items]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeItem) {
      if (!dialog.open) dialog.showModal();
      dialog.scrollTop = 0;
      document.body.classList.add('has-project-dialog');
    } else {
      if (dialog.open) dialog.close();
      document.body.classList.remove('has-project-dialog');
    }
    return () => document.body.classList.remove('has-project-dialog');
  }, [activeItem]);

  return (
    <section id="portfolio" className="portfolio-gallery" aria-labelledby="portfolio-title">
      <header className="portfolio-gallery-header">
        <div><h2 id="portfolio-title">{locale === 'zh' ? '作品' : 'Work'}</h2><span>{String(items.length).padStart(2, '0')}</span></div>
        <p>{locale === 'zh' ? '完整图文、演示与源码链接集中收录于各项目详情。' : 'Full case studies, demos, and source links are collected in each project detail.'}</p>
      </header>

      <div className="portfolio-filters" role="group" aria-label={locale === 'zh' ? '筛选作品' : 'Filter work'}>
        {filters.map((item) => (
          <button key={item.id} type="button" data-filter={item.id} className={filter === item.id ? 'is-active' : ''} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>
            {locale === 'zh' ? item.zh : item.en}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {visibleItems.map((item) => (
          <motion.button key={`${item.kind}-${item.id}`} type="button" className="portfolio-tile" data-category={item.category} onClick={() => openItem(item)} whileHover={reducedMotion ? undefined : { y: -4 }} transition={{ duration: .18 }}>
            <figure><img src={item.cover} alt="" loading="eager" /></figure>
            <div className="portfolio-tile-copy">
              <small>{item.label}</small><h3>{item.title}</h3><p>{item.summary}</p>
              <div>{item.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </motion.button>
        ))}
      </div>

      <dialog ref={dialogRef} className={`project-dialog unified-dialog ${activeItem?.kind === 'visual' ? 'visual-work-dialog' : ''}`} onCancel={(event) => { event.preventDefault(); closeItem(); }} onClose={closeItem} onClick={(event) => { if (event.target === event.currentTarget) closeItem(); }}>
        {activeItem && <GalleryDetail item={activeItem} locale={locale} close={closeItem} />}
      </dialog>
    </section>
  );
}

function GalleryDetail({ item, locale, close }: { item: GalleryItem; locale: 'zh' | 'en'; close: () => void }) {
  const reducedMotion = useReducedMotion() ?? false;
  return (
    <motion.article key={`${item.kind}-${item.id}`} initial={reducedMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .2 }}>
      <button className="project-dialog-close" type="button" onClick={close} aria-label={locale === 'zh' ? '关闭项目详情' : 'Close project details'}>×</button>
      <div className="project-dialog-heading"><p>{item.label} · {item.tags.join(' · ')}</p><h2>{item.title}</h2><p>{item.summary}</p></div>
      {item.kind === 'repository' && <RepositoryDetail work={item.value} locale={locale} />}
      {item.kind === 'visual' && <VisualDetail work={item.value} locale={locale} />}
      {item.kind === 'project' && <ProjectDetail project={item.value} locale={locale} />}
    </motion.article>
  );
}

function RepositoryDetail({ work, locale }: { work: RepositoryWork; locale: 'zh' | 'en' }) {
  const galleryImages = work.images?.filter((image) => image.src !== work.cover) ?? [];
  const leadFit = work.id === 'noemancer' || work.id === 'artflow-agent' ? 'cover' : 'contain';
  return <>
    {work.repositoryUrl && <a className="project-dialog-source" href={work.repositoryUrl} target="_blank" rel="noreferrer"><span>{locale === 'zh' ? '查看 GitHub 仓库' : 'View GitHub repository'}</span><span aria-hidden="true">↗</span></a>}
    <DetailLeadMedia src={work.cover} alt={`${work.title} ${locale === 'zh' ? '项目画面' : 'project view'}`} fit={leadFit} />
    <MarkdownStory markdown={localize(work.story, locale)} title={work.title} />
    {galleryImages.length > 0 && <DetailGallery fit="contain" images={galleryImages.map((image) => ({ src: image.src, alt: localize(image.alt, locale), caption: localize(image.alt, locale) }))} />}
  </>;
}

function VisualDetail({ work, locale }: { work: VisualWork; locale: 'zh' | 'en' }) {
  return <>
    <a className="project-dialog-source" href={work.artstationUrl} target="_blank" rel="noreferrer"><span>{locale === 'zh' ? '查看原始 ArtStation 项目' : 'View the original ArtStation project'}</span><span aria-hidden="true">↗</span></a>
    {work.youtubeId && <VideoEmbed youtubeId={work.youtubeId} title={localize(work.title, locale)} />}
    <MarkdownStory markdown={visualWorkStories[work.id][locale]} title={localize(work.title, locale)} />
  </>;
}

function ProjectDetail({ project, locale }: { project: SelectedProject; locale: 'zh' | 'en' }) {
  return <>
    {project.link && <a className="project-dialog-source" href={project.link.href} target="_blank" rel="noreferrer"><span>{projectText(project.link.label, locale)}</span><span aria-hidden="true">↗</span></a>}
    {project.youtubeId && <VideoEmbed youtubeId={project.youtubeId} title={project.title} />}
    {projectStories[project.id] ? <MarkdownStory markdown={projectStories[project.id][locale]} title={project.title} /> : project.story && <section className="project-dialog-story"><h3>{projectText(project.story.title, locale)}</h3><p>{projectText(project.story.intro, locale)}</p><h4>{locale === 'zh' ? '玩法与特色' : 'Gameplay & Features'}</h4><dl>{project.story.features.map((feature) => <div key={feature.title.en}><dt>{projectText(feature.title, locale)}</dt><dd>{projectText(feature.detail, locale)}</dd></div>)}</dl>{project.story.note && <p className="project-dialog-note">{projectText(project.story.note, locale)}</p>}</section>}
  </>;
}

function DetailLeadMedia({ src, alt, fit }: { src: string; alt: string; fit: 'cover' | 'contain' }) {
  return <figure className={`project-dialog-lead-media ${fit === 'contain' ? 'is-contain' : ''}`}><img src={src} alt={alt} /></figure>;
}

function VideoEmbed({ youtubeId, title }: { youtubeId: string; title: string }) {
  return <div className="project-dialog-video"><iframe src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`} title={`${title} demo video`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>;
}

function DetailGallery({ images, fit = 'cover' }: { images: Array<{ src: string; alt: string; caption: string; position?: string }>; fit?: 'cover' | 'contain' }) {
  return <div className={`project-dialog-gallery ${fit === 'contain' ? 'is-contain' : ''}`}>{images.map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} style={{ objectPosition: image.position }} loading="lazy" />{image.caption && <figcaption>{image.caption}</figcaption>}</figure>)}</div>;
}
