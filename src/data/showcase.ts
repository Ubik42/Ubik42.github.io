import type { Locale } from './content';

type Localized = Record<Locale, string>;

export const flagship = {
  eyebrow: { en: 'Flagship portfolio · in development', zh: '重点作品集 · 持续开发中' },
  title: { en: 'AI Tool TA — DCC-first portfolio', zh: 'AI 工具 TA · DCC-first 作品集' },
  summary: {
    en: 'A public, reviewable tool system built around real art-production constraints: asset protocols, cross-DCC validation, visual review, delivery gates, and task orchestration.',
    zh: '围绕真实美术生产约束搭建的公开、可审查工具系统：覆盖资产协议、跨 DCC 校验、视觉评审、交付门禁与任务编排。',
  },
  status: { en: 'Public engineering evidence ready · visual capture package in progress', zh: '公开工程证据已就绪 · 视觉录制材料持续补全' },
  primary: { en: 'Open portfolio repository', zh: '打开作品集仓库' },
  secondary: { en: 'Reviewer entry', zh: '查看评审入口' },
  metrics: [
    { value: '5', en: 'core tool modules', zh: '个核心工具模块' },
    { value: '19/19', en: 'key evidence files', zh: '关键证据文件' },
    { value: '4', en: 'DCC / engine targets', zh: '个 DCC / 引擎目标' },
  ],
  modules: [
    { en: 'Asset Protocol Workbench', zh: '资产协议工作台' },
    { en: 'Cross-DCC Rule Matrix', zh: '跨 DCC 规则矩阵' },
    { en: 'Visual Review Studio', zh: '视觉评审工作台' },
    { en: 'Texture Delivery Console', zh: '贴图交付控制台' },
    { en: 'Task Orchestrator', zh: '任务编排器' },
  ],
};

export const career = {
  eyebrow: { en: 'Hiring focus', zh: '求职方向' },
  title: { en: 'AI / pipeline technical art and engine tools', zh: 'AI / 工具管线向 TA 与引擎工具开发' },
  intro: {
    en: 'I translate art-production knowledge into tools that artists can inspect, run, and iterate on—across DCCs, engines, and AI-assisted workflows.',
    zh: '我把美术生产知识转化为创作者可以检查、运行和持续迭代的工具，连接 DCC、引擎与 AI 辅助工作流。',
  },
  pillars: [
    { title: { en: 'DCC & pipeline tools', zh: 'DCC 与管线工具' }, detail: { en: 'Maya API 2.0, PySide6, Blender, Houdini, asset validation, safe scene operations.', zh: 'Maya API 2.0、PySide6、Blender、Houdini、资产校验与安全场景操作。' } },
    { title: { en: 'AI workflow systems', zh: 'AI 工作流系统' }, detail: { en: 'Agent, Skill, MCP, deterministic rules, human review, evidence and delivery gates.', zh: 'Agent、Skill、MCP、确定性规则、人工评审、证据与交付门禁。' } },
    { title: { en: 'Realtime & engine work', zh: '实时图形与引擎' }, detail: { en: 'Unreal, Unity, shaders, OpenGL / Vulkan, digital twins and interactive prototypes.', zh: 'Unreal、Unity、Shader、OpenGL / Vulkan、数字孪生与交互原型。' } },
  ],
};

export interface RepositoryCard {
  name: string;
  href: string;
  role: Localized;
  description: Localized;
  tags: string[];
  featured?: boolean;
}

export const repositories: RepositoryCard[] = [
  {
    name: 'ai-tool-ta-portfolio',
    href: 'https://github.com/Ubik42/ai-tool-ta-portfolio',
    role: { en: 'Flagship case', zh: '重点案例' },
    description: { en: 'Public DCC-first engineering portfolio and review package.', zh: '公开的 DCC-first 工程作品集与评审材料。' },
    tags: ['Maya', 'Python', 'React', 'AI'], featured: true,
  },
  {
    name: 'MayaCraft',
    href: 'https://github.com/Ubik42/MayaCraft',
    role: { en: 'Active tool project', zh: '持续开发工具' },
    description: { en: 'A modular Maya rigging and TD toolkit.', zh: '模块化 Maya 绑定与 TD 工具集。' },
    tags: ['Maya API 2.0', 'PySide6', 'Rigging'],
  },
  {
    name: 'Ubik42',
    href: 'https://github.com/Ubik42/Ubik42',
    role: { en: 'GitHub profile layer', zh: 'GitHub 展示层' },
    description: { en: 'The public profile README that maps my tools, stack, and current work.', zh: '用于汇总工具能力、技术栈与当前工作的公开 Profile README。' },
    tags: ['Profile', 'Index'],
  },
  {
    name: 'Ubik42.github.io',
    href: 'https://github.com/Ubik42/Ubik42.github.io',
    role: { en: 'Personal site layer', zh: '个人网站展示层' },
    description: { en: 'Source and content architecture for this bilingual job-facing website.', zh: '这套双语求职型个人网站的源码与内容架构。' },
    tags: ['React', 'Motion', 'Three.js'],
  },
  {
    name: 'resume-shen-yuyan-editable',
    href: 'https://github.com/Ubik42/resume-shen-yuyan-editable',
    role: { en: 'Resume source', zh: '简历展示层' },
    description: { en: 'Versioned, editable source for my latest technical-art resume.', zh: '最新技术美术简历的可编辑、可版本化源文件。' },
    tags: ['LaTeX', 'Resume'],
  },
  {
    name: 'Vue3_Digital_Twin',
    href: 'https://github.com/Ubik42/Vue3_Digital_Twin',
    role: { en: 'Earlier public work', zh: '早期公开项目' },
    description: { en: 'A realtime industrial digital-twin project connecting 3D and application UI.', zh: '连接实时三维场景与应用界面的工业数字孪生项目。' },
    tags: ['Vue', 'Three.js', 'Digital Twin'],
  },
];

export interface ArtWork {
  title: string;
  href: string;
  image: string;
  category: Localized;
}

export const artWorks: ArtWork[] = [
  { title: 'Rigging & Animation', href: 'https://www.artstation.com/artwork/vb42ev', image: '/media/artstation/rigging-animation.jpg', category: { en: 'Rigging study', zh: '绑定练习' } },
  { title: 'Maya Plugin', href: 'https://www.artstation.com/artwork/XJGnR3', image: '/media/artstation/maya-plugin.jpg', category: { en: 'Tool development', zh: '工具开发' } },
  { title: 'Unreal Engine Stylized World', href: 'https://www.artstation.com/artwork/kNZDbK', image: '/media/artstation/unreal-stylized-world.jpg', category: { en: 'Realtime environment', zh: '实时场景' } },
  { title: 'Unity SDF Shader', href: 'https://www.artstation.com/artwork/XJGnQl', image: '/media/artstation/unity-sdf-shader.jpg', category: { en: 'Realtime shader', zh: '实时 Shader' } },
  { title: 'Houdini Interactive Lighting', href: 'https://www.artstation.com/artwork/5W1Xkg', image: '/media/artstation/houdini-lighting.jpg', category: { en: 'Procedural graphics', zh: '程序化图形' } },
];

export function localize(value: Localized, locale: Locale) {
  return value[locale];
}
