import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { projectText, selectedProjects, type SelectedProject } from '../data/projects';
import { projectStories } from '../data/projectStories';
import { aitaSystems } from '../data/aitaSystems';
import { repositoryWorks, type PortfolioCategory, type RepositoryWork } from '../data/repositoryWorks';
import { localize } from '../data/showcase';
import { visualWorks, type VisualWork } from '../data/visualWorks';
import { visualWorkStories } from '../data/visualWorkStories';
import { useLanguage } from '../i18n/LanguageContext';
import { MarkdownStory } from './MarkdownStory';
import { AnimationAigcShowcase } from './AnimationAigcShowcase';
import { PerformanceEvidence } from './PerformanceEvidence';
import { AnimationQuality } from './AnimationQuality';
import { HudQuality } from './HudQuality';
import { NoemancerWorkflow } from './NoemancerWorkflow';
import { ZoomImage } from './ZoomImage';
import coverPreviews from '../data/coverPreviews.json';

const previewFor = (source: string) => (coverPreviews as Record<string, string>)[source] ?? source;

type GalleryItem =
  | { kind: 'repository'; id: string; category: PortfolioCategory; title: string; label: string; summary: string; cover: string; tags: string[]; value: RepositoryWork }
  | { kind: 'visual'; id: string; category: PortfolioCategory; title: string; label: string; summary: string; cover: string; tags: string[]; value: VisualWork }
  | { kind: 'project'; id: string; category: PortfolioCategory; title: string; label: string; summary: string; cover: string; tags: string[]; value: SelectedProject };

const filters: Array<{ id: 'all' | PortfolioCategory; zh: string; en: string }> = [
  { id: 'all', zh: '全部作品', en: 'All work' },
  { id: 'engine-games', zh: '引擎与游戏', en: 'Engines & games' },
  { id: 'pipeline', zh: '工具管线', en: 'Tool pipelines' },
  { id: 'ai-agent', zh: 'AIGC & Agent', en: 'AIGC & Agent' },
  { id: 'general-ta', zh: '通用技术美术技能', en: 'General technical art' },
  { id: 'other-tools', zh: '部分其他工具', en: 'Selected other tools' },
];

const pipelineOrder = new Map([
  'rez-studio-launcher',
  'advanced-skeleton-python-refactor',
  'art-pipeline-skill',
  'maya-plugin',
  'internship-art-pipeline',
  'maya-garment-preparation',
  'mayascope',
  'mayacraft',
  'asset-delivery-organizer',
  'maya-scene-checker',
  'blender-toolsmith-agent',
].map((id, index) => [id, index]));

const engineGamesOrder = new Map([
  'lyra-hero-arena',
  'siggraph-physics-lab',
  'noemancer',
  'pcg-workbench',
  'noemancer-software-rasterizer',
  'aita-schooling',
  'house-of-vampires',
  'lyra-performance-lab',
  'fathom',
  'aita-toon',
  'aita-wind',
  'aita-cloth',
  'aita-cosmos',
  'aita-fog',
  'aita-fracture',
  'ue-performance-workbench',
  'resonance-forge',
  'unreal-asset-batch-auditor',
].map((id, index) => [id, index]));

const aigcOrder = new Map([
  'als-director',
  'animation-aigc-lab',
  'artflow-agent',
  'comfyui-production-nodes',
].map((id, index) => [id, index]));

const categoryOrder = new Map<PortfolioCategory, number>([
  ['engine-games', 0],
  ['pipeline', 1],
  ['ai-agent', 2],
  ['general-ta', 3],
  ['other-tools', 4],
]);

function readGalleryQuery() {
  const params = new URLSearchParams(window.location.search);
  const category = filters.find(item => item.id === params.get('category'))?.id ?? 'all';
  return { category, query: params.get('q') ?? '' };
}

export function PortfolioGallery() {
  const { locale, copy } = useLanguage();
  const reducedMotion = useReducedMotion() ?? false;
  const [filter, setFilter] = useState<'all' | PortfolioCategory>(() => readGalleryQuery().category);
  const [query, setQuery] = useState(() => readGalleryQuery().query);
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
          if (a.item.id === 'ray-tracing-hardware') return 1;
          if (b.item.id === 'ray-tracing-hardware') return -1;
          return (engineGamesOrder.get(a.item.id) ?? Number.MAX_SAFE_INTEGER) - (engineGamesOrder.get(b.item.id) ?? Number.MAX_SAFE_INTEGER);
        }
        if (a.item.category === 'ai-agent') {
          return (aigcOrder.get(a.item.id) ?? Number.MAX_SAFE_INTEGER) - (aigcOrder.get(b.item.id) ?? Number.MAX_SAFE_INTEGER);
        }
        return a.sourceIndex - b.sourceIndex;
      })
      .map(({ item }) => item);
  }, [locale]);

  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const visibleItems = items.filter(item => (filter === 'all' || item.category === filter) &&
    terms.every(term => [item.title, item.summary, item.label, ...item.tags].join(' ').toLocaleLowerCase().includes(term)));
  const activeIndex = visibleItems.findIndex(item => item.id === activeItem?.id);
  const updateFilter = (category: typeof filter, search: string, push = false) => {
    setFilter(category);
    setQuery(search);
    const url = new URL(window.location.href);
    if (category === 'all') url.searchParams.delete('category');
    else url.searchParams.set('category', category);
    if (search.trim()) url.searchParams.set('q', search);
    else url.searchParams.delete('q');
    window.history[push ? 'pushState' : 'replaceState']({}, '', `${url.pathname}${url.search}${url.hash}`);
  };

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
      const selection = readGalleryQuery();
      setFilter(selection.category);
      setQuery(selection.query);
      const workId = new URLSearchParams(window.location.search).get('work');
      // Existing repository and Obsidian links still open the overview, without an eighth gallery card.
      if (workId === aitaSystems.id) {
        setActiveItem({
          kind: 'repository', id: aitaSystems.id, category: aitaSystems.category,
          title: aitaSystems.title, label: localize(aitaSystems.categoryLabel, locale),
          summary: localize(aitaSystems.summary, locale), cover: aitaSystems.cover,
          tags: aitaSystems.tags, value: aitaSystems,
        });
      } else {
        setActiveItem(workId ? items.find((item) => item.id === workId) ?? null : null);
      }
    };
    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, [items, locale]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeItem) {
      if (!dialog.open) dialog.showModal();
      dialog.scrollTop = 0;
      dialog.querySelector<HTMLElement>('#project-detail-title')?.focus({ preventScroll: true });
      document.body.classList.add('has-project-dialog');
    } else {
      if (dialog.open) dialog.close();
      document.body.classList.remove('has-project-dialog');
    }
    return () => document.body.classList.remove('has-project-dialog');
  }, [activeItem]);

  useEffect(() => {
    document.title = activeItem ? `${activeItem.title} | ${locale === 'zh' ? '沈裕焱作品集' : 'Lucas Shen'}` : copy.meta.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = activeItem?.summary ?? copy.meta.description;
  }, [activeItem, copy.meta.title, copy.meta.description, locale]);

  return (
    <section id="portfolio" className="portfolio-gallery" aria-labelledby="portfolio-title">
      <header className="portfolio-gallery-header">
        <div><h2 id="portfolio-title">{locale === 'zh' ? '作品' : 'Work'}</h2><span>{String(items.length).padStart(2, '0')}</span></div>
        <p>{locale === 'zh' ? '完整图文、演示与源码链接集中收录于各项目详情。' : 'Full case studies, demos, and source links are collected in each project detail.'}</p>
      </header>

      <div className="portfolio-filters" role="group" aria-label={locale === 'zh' ? '筛选作品' : 'Filter work'}>
        {filters.map((item) => (
          <button key={item.id} type="button" data-filter={item.id} className={filter === item.id ? 'is-active' : ''} aria-pressed={filter === item.id} onClick={() => updateFilter(item.id, query, true)}>
            <span>{locale === 'zh' ? item.zh : item.en}</span><small>{item.id === 'all' ? items.length : items.filter(work => work.category === item.id).length}</small>
          </button>
        ))}
      </div>

      <div className="portfolio-search-row">
        <p aria-live="polite" aria-atomic="true">{locale === 'zh' ? `${visibleItems.length} 件作品` : `${visibleItems.length} works`}</p>
        <div className="portfolio-search">
          <label htmlFor="work-search">{locale === 'zh' ? '搜索作品' : 'Search work'}</label>
          <input id="work-search" type="search" value={query} placeholder={locale === 'zh' ? '名称、技术或引擎，如 GAS / 动画 / C++' : 'Title, technology or engine'} onChange={event => updateFilter(filter, event.target.value)} />
          {query && <button type="button" onClick={() => updateFilter(filter, '')} aria-label={locale === 'zh' ? '清空搜索' : 'Clear search'}>×</button>}
        </div>
      </div>
      {visibleItems.length === 0 && <div className="portfolio-empty"><h3>{locale === 'zh' ? '没有匹配的作品' : 'No matching work'}</h3>
        <p>{locale === 'zh' ? '可缩短关键词，或清除分类与搜索条件。' : 'Try a shorter query or clear the filters.'}</p>
        <button type="button" onClick={() => updateFilter('all', '')}>{locale === 'zh' ? '显示全部作品' : 'Show all work'}</button></div>}

      <div className="portfolio-grid">
        {visibleItems.map((item, index) => (
          <motion.button key={`${item.kind}-${item.id}`} type="button" className="portfolio-tile" data-category={item.category} onClick={() => openItem(item)} whileHover={reducedMotion ? undefined : { y: -4 }} transition={{ duration: .18 }}>
            <figure><img src={previewFor(item.cover)} alt="" width="800" height="500" style={item.id === 'pcg-workbench' ? { objectFit: 'contain' } : undefined} loading={index < 4 ? 'eager' : 'lazy'} decoding="async" /></figure>
            <div className="portfolio-tile-copy">
              <small>{item.label}</small><h3>{item.title}</h3><p>{item.summary}</p>
              <div>{item.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </motion.button>
        ))}
      </div>

      <dialog ref={dialogRef} aria-labelledby="project-detail-title" className={`project-dialog unified-dialog ${activeItem?.kind === 'visual' ? 'visual-work-dialog' : ''}`} onCancel={(event) => { event.preventDefault(); closeItem(); }} onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeItem();
      }}>
        {activeItem && <GalleryDetail key={`${activeItem.id}-${locale}`} item={activeItem} locale={locale} close={closeItem}
          previous={activeIndex > 0 ? visibleItems[activeIndex - 1] : undefined}
          next={activeIndex >= 0 ? visibleItems[activeIndex + 1] : undefined} open={openItem} />}
      </dialog>
    </section>
  );
}

function GalleryDetail({ item, locale, close, previous, next, open }: { item: GalleryItem; locale: 'zh' | 'en'; close: () => void; previous?: GalleryItem; next?: GalleryItem; open: (item: GalleryItem) => void }) {
  const reducedMotion = useReducedMotion() ?? false;
  const [share, setShare] = useState<'idle' | 'copied' | 'manual'>('idle');
  const shareUrl = new URL(window.location.href);
  shareUrl.search = '';
  shareUrl.hash = '';
  shareUrl.searchParams.set('work', item.id);
  const copyLink = async () => {
    try { await navigator.clipboard.writeText(shareUrl.href); setShare('copied'); }
    catch { setShare('manual'); }
  };
  return (
    <motion.article key={`${item.kind}-${item.id}`} initial={reducedMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .2 }}>
      <div className="project-reader-bar">
        <span className="reader-category">{item.label}</span>
        <div className="reader-actions">
          <button type="button" onClick={copyLink}>{share === 'copied' ? (locale === 'zh' ? '已复制链接' : 'Link copied') : (locale === 'zh' ? '复制链接' : 'Copy link')}</button>
          <button type="button" onClick={() => previous && open(previous)} disabled={!previous} aria-label={locale === 'zh' ? '上一个作品' : 'Previous work'} title={previous?.title}>←</button>
          <button type="button" onClick={() => next && open(next)} disabled={!next} aria-label={locale === 'zh' ? '下一个作品' : 'Next work'} title={next?.title}>→</button>
          <button className="project-dialog-close" type="button" onClick={close} aria-label={locale === 'zh' ? '关闭项目详情' : 'Close project details'}>×</button>
        </div>
        <span className="sr-only" role="status">{share === 'copied' ? (locale === 'zh' ? '项目详情链接已复制' : 'Project link copied') : ''}</span>
        {share === 'manual' && <label className="share-fallback">{locale === 'zh' ? '复制此项目链接' : 'Copy this project link'}<input readOnly value={shareUrl.href} onFocus={event => event.target.select()} /></label>}
      </div>
      <div className="project-dialog-heading" data-work-id={item.id}><p>{item.tags.join(' · ')}</p><h2 id="project-detail-title" tabIndex={-1}>{item.title}</h2><p>{item.summary}</p></div>
      {item.kind === 'repository' && <RepositoryDetail work={item.value} locale={locale} />}
      {item.kind === 'visual' && <VisualDetail work={item.value} locale={locale} />}
      {item.kind === 'project' && <ProjectDetail project={item.value} locale={locale} />}
    </motion.article>
  );
}

function RepositoryDetail({ work, locale }: { work: RepositoryWork; locale: 'zh' | 'en' }) {
  const galleryImages = work.images?.filter((image) => image.src !== work.cover) ?? [];
  const leadFit = work.id === 'noemancer' || work.id === 'artflow-agent' || work.id === 'ray-tracing-hardware' ? 'cover' : 'contain';
  return <>
    {work.repositoryUrl && <a className="project-dialog-source" href={work.repositoryUrl} target="_blank" rel="noreferrer"><span>{locale === 'zh' ? '查看 GitHub 仓库' : 'View GitHub repository'}</span><span aria-hidden="true">↗</span></a>}
    {(work.id !== 'lyra-hero-arena' || locale !== 'zh') && <DetailLeadMedia src={work.cover} alt={`${work.title} ${locale === 'zh' ? '项目画面' : 'project view'}`} fit={leadFit} />}
    {work.id === 'lyra-performance-lab' && <><AnimationQuality locale={locale} /><PerformanceEvidence study="animation" locale={locale} /></>}
    {work.id === 'ue-performance-workbench' && <><HudQuality locale={locale} /><PerformanceEvidence study="hud" locale={locale} /></>}
    {work.id === 'animation-aigc-lab' && <AnimationAigcShowcase locale={locale} />}
    {work.id === 'noemancer' && <NoemancerWorkflow locale={locale} />}
    <MarkdownStory markdown={localize(work.story, locale)} title={work.title}
      outlineLabel={work.id === 'lyra-hero-arena' && locale === 'zh' ? 'Lyra 作品章节' : undefined}
      videoPosters={work.id === 'lyra-hero-arena' ? Object.fromEntries(
        ['striker-combat', 'full-match', 'network-full-match', 'phase-gameplay', 'hero-respawn', 'blink-network'].map(name =>
          [`/media/repositories/lyra-hero-arena/${name}.mp4`, `/media/repositories/lyra-hero-arena/${name}-poster.jpg`])) : undefined} />
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
  return <figure className={`project-dialog-lead-media ${fit === 'contain' ? 'is-contain' : ''}`}><ZoomImage src={src} alt={alt} loading="eager" /></figure>;
}

function VideoEmbed({ youtubeId, title }: { youtubeId: string; title: string }) {
  const { locale } = useLanguage();
  return <div className="project-dialog-video"><iframe loading="lazy" src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`} title={`${title} ${locale === 'zh' ? '演示视频' : 'demo video'}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /><a className="video-fallback" href={`https://www.youtube.com/watch?v=${youtubeId}`} target="_blank" rel="noreferrer">{locale === 'zh' ? '在 YouTube 打开视频 ↗' : 'Open on YouTube ↗'}</a></div>;
}

function DetailGallery({ images, fit = 'cover' }: { images: Array<{ src: string; alt: string; caption: string; position?: string }>; fit?: 'cover' | 'contain' }) {
  return <div className={`project-dialog-gallery ${fit === 'contain' ? 'is-contain' : ''}`}>{images.map((image) => <figure key={image.src}><ZoomImage src={image.src} alt={image.alt} style={{ objectPosition: image.position }} />{image.caption && <figcaption>{image.caption}</figcaption>}</figure>)}</div>;
}
