import type { Locale } from './content';

export type Localized = Record<Locale, string>;

export interface CoreTool {
  id: string;
  title: string;
  order: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: Localized;
  purpose: Localized;
  workflow: Localized;
  proof: Localized;
  stack: string[];
}

export interface IntegratedTool {
  title: string;
  family: Localized;
  purpose: Localized;
  runtime: string;
  maturity: string;
}

export const portfolioOverview = {
  title: { en: 'AI Tool TA, DCC-first portfolio', zh: 'AI 工具 TA · DCC-first 作品集' },
  summary: {
    en: 'A connected production-tool system, not a collection of frontend demos. The work runs through Maya, Blender, 3ds Max, Unreal, and a reviewable evidence pipeline.',
    zh: '这是一套相互连接的生产工具系统，而不是前端 Demo 集合。工具覆盖 Maya、Blender、3ds Max、Unreal，并通过可审查的证据管线完成交付。',
  },
  sourceLabel: { en: 'Inspect source portfolio', zh: '查看作品集源码' },
  status: { en: 'R24 public package · capture package in progress', zh: 'R24 公开包 · GUI 采集材料持续补全' },
  facts: [
    { value: '5', label: { en: 'core workbenches', zh: '个核心工作台' } },
    { value: '11', label: { en: 'integrated tools and adapters', zh: '个集成工具与适配器' } },
    { value: '21', label: { en: 'tracked evidence files', zh: '个关键证据文件' } },
    { value: '14', label: { en: 'presentation route steps', zh: '段展示路线' } },
  ],
};

export const career = {
  eyebrow: { en: 'Hiring focus', zh: '求职方向' },
  title: { en: 'AI / pipeline technical art and engine tools', zh: 'AI / 工具管线向 TA 与引擎工具开发' },
  intro: {
    en: 'I translate art-production knowledge into tools that artists can inspect, run, and iterate on across DCCs, engines, and AI-assisted workflows.',
    zh: '我把美术生产知识转化为创作者可以检查、运行和持续迭代的工具，连接 DCC、引擎与 AI 辅助工作流。',
  },
  pillars: [
    { title: { en: 'DCC & pipeline tools', zh: 'DCC 与管线工具' }, detail: { en: 'Maya API 2.0, PySide6, Blender, Houdini, asset validation, and safe scene operations.', zh: 'Maya API 2.0、PySide6、Blender、Houdini、资产校验与安全场景操作。' } },
    { title: { en: 'AI workflow systems', zh: 'AI 工作流系统' }, detail: { en: 'Agent, Skill, MCP, deterministic rules, human review, evidence, and delivery gates.', zh: 'Agent、Skill、MCP、确定性规则、人工评审、证据与交付门禁。' } },
    { title: { en: 'Realtime & engine work', zh: '实时图形与引擎' }, detail: { en: 'Unreal, Unity, shaders, OpenGL / Vulkan, digital twins, and interactive prototypes.', zh: 'Unreal、Unity、Shader、OpenGL / Vulkan、数字孪生与交互原型。' } },
  ],
};

export const coreTools: CoreTool[] = [
  {
    id: 'asset-protocol', order: '01', title: 'Asset Protocol Workbench',
    image: '/media/portfolio/asset-protocol.png', imageWidth: 1440, imageHeight: 4667,
    imageAlt: { en: 'Asset protocol editor with DCC payload, validation, and staged preset evidence.', zh: '包含 DCC Payload、验证结果与分阶段 Preset 证据的资产协议工作台。' },
    purpose: { en: 'Turns asset intent, aliases, UV and vertex semantics, custom attributes, LOD, and platform budgets into a typed handoff contract.', zh: '把资产意图、别名、UV 与顶点语义、自定义属性、LOD 和平台预算编码为类型化交付合同。' },
    workflow: { en: 'Author contract → collect Maya facts → compare payload → validate policy → export evidence.', zh: '编写合同 → 采集 Maya 事实 → 对比 Payload → 校验策略 → 导出证据。' },
    proof: { en: 'Field-level diffs, staged fix preview, DCC evidence report, and public synthetic fixtures.', zh: '字段级 Diff、分阶段修复预览、DCC 证据报告与公开合成样例。' },
    stack: ['Maya 2024', 'Python', 'AuroraView', 'React'],
  },
  {
    id: 'rule-matrix', order: '02', title: 'Cross-DCC Rule Matrix',
    image: '/media/portfolio/cross-dcc-rules.png', imageWidth: 1440, imageHeight: 8682,
    imageAlt: { en: 'Cross-DCC rule authoring, validation heatmap, fix preview, and publish gate.', zh: '跨 DCC 规则编写、验证热图、修复预览和发布门禁。' },
    purpose: { en: 'Expresses one production policy as a shared rule DSL, then maps it to different DCC facts and safe-fix boundaries.', zh: '用共享规则 DSL 表达同一生产策略，再映射到不同 DCC 事实与安全修复边界。' },
    workflow: { en: 'Collect → normalize → validate → preview fix → resolve manual cases → publish report.', zh: '采集 → 归一化 → 验证 → 预览修复 → 人工处置 → 发布报告。' },
    proof: { en: 'Maya, Blender, and 3ds Max adapters with traceable rule inputs and runtime evidence.', zh: 'Maya、Blender 与 3ds Max Adapter，以及可追踪的规则输入和运行证据。' },
    stack: ['Rule DSL', 'Maya', 'Blender bpy', '3ds Max pymxs'],
  },
  {
    id: 'visual-review', order: '03', title: 'Visual Review Studio',
    image: '/media/portfolio/visual-review.png', imageWidth: 1440, imageHeight: 11665,
    imageAlt: { en: 'Visual review workflow with fixed capture setup, review queue, and release evidence.', zh: '包含固定截图设置、评审队列与发布证据的视觉评审流程。' },
    purpose: { en: 'Makes A/B review repeatable by fixing camera, pass, threshold, asset, and ownership conditions.', zh: '通过固定相机、Pass、阈值、资产与责任人条件，让 A/B 评审可以重复执行。' },
    workflow: { en: 'Build camera rig → run pass manifest → inspect signals → assign review → seal handoff.', zh: '建立相机组 → 执行 Pass 清单 → 检查信号 → 分配评审 → 封装交接。' },
    proof: { en: 'Pass run and skip manifest, signal audit, review queue, handoff receipt, and HTML report.', zh: 'Pass 运行与跳过清单、信号审计、评审队列、交接回执与 HTML 报告。' },
    stack: ['Maya Camera', 'Capture Pass', 'A/B Diff', 'Review Queue'],
  },
  {
    id: 'texture-delivery', order: '04', title: 'Texture Delivery Console',
    image: '/media/portfolio/texture-delivery.png', imageWidth: 1440, imageHeight: 10941,
    imageAlt: { en: 'Texture delivery console with preset comparison, queue recovery, and package delta.', zh: '包含 Preset 对比、队列恢复与 Package Delta 的贴图交付控制台。' },
    purpose: { en: 'Controls channel packing, compression presets, SpriteSheet and DDS tasks, and engine-import handoff without hiding mutation risk.', zh: '管理通道打包、压缩 Preset、SpriteSheet、DDS 与引擎导入交接，同时明确修改风险。' },
    workflow: { en: 'Inspect sources → choose preset → dry run → review delta → approve mutation → export manifest.', zh: '检查源文件 → 选择 Preset → Dry Run → 审查 Delta → 批准修改 → 导出 Manifest。' },
    proof: { en: 'Versioned presets, recoverable queues, adapter results, publish gate, and fixture delta.', zh: '版本化 Preset、可恢复队列、Adapter 结果、发布门禁与 Fixture Delta。' },
    stack: ['Texture Pipeline', 'DDS', 'SpriteSheet', 'Unreal Import'],
  },
  {
    id: 'orchestrator', order: '05', title: 'Task Orchestrator',
    image: '/media/portfolio/orchestrator.png', imageWidth: 1440, imageHeight: 11775,
    imageAlt: { en: 'Task orchestrator showing tool discovery, dependency impact, evidence, and handoff state.', zh: '展示工具发现、依赖影响、证据与交付状态的任务编排器。' },
    purpose: { en: 'Connects tool discovery, jobs, asset packages, review receipts, dependency impact, and publish state.', zh: '连接工具发现、任务、资产包、评审回执、依赖影响与发布状态。' },
    workflow: { en: 'Discover tools → build queue → execute or dry run → aggregate receipts → evaluate release.', zh: '发现工具 → 建立队列 → 执行或 Dry Run → 聚合回执 → 判断发布。' },
    proof: { en: 'Execution events, run diffs, impact paths, owner signoff, evidence lockfile, and release replay.', zh: '执行事件、Run Diff、影响路径、Owner 签收、证据 Lockfile 与发布回放。' },
    stack: ['Task State', 'Dependency Graph', 'Evidence Ledger', 'Publish Gate'],
  },
];

export const integratedTools: IntegratedTool[] = [
  { title: 'Asset Handoff Gate', family: { en: 'Delivery decision', zh: '交付决策' }, purpose: { en: 'Combines validation, review, texture, and batch evidence into one handoff decision.', zh: '把验证、评审、贴图与批处理证据合成为一次交付决策。' }, runtime: 'Maya', maturity: 'L3' },
  { title: 'Owner / Engine Decision Packet', family: { en: 'Human approval', zh: '人工批准' }, purpose: { en: 'Records owner decisions, exceptions, and engine-facing acceptance.', zh: '记录 Owner 决策、例外处置与面向引擎的验收结果。' }, runtime: 'Maya', maturity: 'L3' },
  { title: 'Engine Handoff Preflight', family: { en: 'Engine readiness', zh: '引擎就绪' }, purpose: { en: 'Checks export and engine constraints before a package crosses the DCC boundary.', zh: '在资产包跨出 DCC 边界前检查导出与引擎约束。' }, runtime: 'Maya → Unreal', maturity: 'L3' },
  { title: 'PC / Mobile Preset Compare', family: { en: 'Platform policy', zh: '平台策略' }, purpose: { en: 'Compares platform presets, facts, waivers, and publish consequences.', zh: '对比 PC / Mobile Preset、事实、Waiver 与发布影响。' }, runtime: 'Maya / Unreal', maturity: 'L3' },
  { title: 'Scene Transaction Guard', family: { en: 'Mutation safety', zh: '场景修改安全' }, purpose: { en: 'Fingerprints scene changes and previews rollback for created, deleted, and modified rows.', zh: '为场景变更建立指纹，并针对新增、删除与修改项预览回滚。' }, runtime: 'Maya', maturity: 'L3' },
  { title: 'Maya Preset Fact Reviewer', family: { en: 'Reviewer queue', zh: '评审队列' }, purpose: { en: 'Brings engine preset facts and waiver comparisons back into the Maya review surface.', zh: '把引擎 Preset 事实与 Waiver 对比带回 Maya 评审界面。' }, runtime: 'Maya', maturity: 'L3' },
  { title: 'Blender Rule Adapter', family: { en: 'DCC adapter', zh: 'DCC 适配器' }, purpose: { en: 'Normalizes object properties, collections, materials, UVs, and collision hints into the shared rule input.', zh: '把对象属性、Collection、材质、UV 与碰撞提示归一化为共享规则输入。' }, runtime: 'Blender bpy', maturity: 'L3' },
  { title: '3ds Max Rule Adapter', family: { en: 'DCC adapter', zh: 'DCC 适配器' }, purpose: { en: 'Collects user properties, layers, LOD suffixes, map channels, transforms, and collision proxies.', zh: '采集 User Properties、Layer、LOD 后缀、Map Channel、Transform 与碰撞代理。' }, runtime: '3ds Max pymxs', maturity: 'L3' },
  { title: 'Unreal Handoff Inspector', family: { en: 'Engine adapter', zh: '引擎适配器' }, purpose: { en: 'Verifies registry and engine facts for meshes, materials, presets, and handoff state.', zh: '校验 Mesh、材质、Preset 与交付状态对应的 Registry 和引擎事实。' }, runtime: 'Unreal Python', maturity: 'L3++' },
  { title: 'Animation Continuity Lab', family: { en: 'Animation evidence', zh: '动画证据' }, purpose: { en: 'Checks animation continuity and produces Maya-side runtime evidence.', zh: '检查动画连续性并生成 Maya 端运行证据。' }, runtime: 'Maya', maturity: 'L3' },
  { title: 'Unreal Animation Bridge', family: { en: 'Animation handoff', zh: '动画交付' }, purpose: { en: 'Prepares and verifies animation handoff readiness between Maya and Unreal.', zh: '准备并验证 Maya 与 Unreal 之间的动画交付就绪状态。' }, runtime: 'Maya → Unreal', maturity: 'L3 readiness' },
];

export interface ArtWork {
  title: string;
  href: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  category: Localized;
  tools: string[];
  featured?: boolean;
}

export const artWorks: ArtWork[] = [
  { title: 'Unreal Engine Stylized World', href: 'https://www.artstation.com/artwork/kNZDbK', image: '/media/artstation/unreal-stylized-world.jpg', imageWidth: 1920, imageHeight: 1954, category: { en: 'Realtime environment', zh: '实时场景' }, tools: ['Unreal Engine', 'Houdini'], featured: true },
  { title: 'Maya Plugin', href: 'https://www.artstation.com/artwork/XJGnR3', image: '/media/artstation/maya-plugin.jpg', imageWidth: 1920, imageHeight: 1952, category: { en: 'DCC tool development', zh: 'DCC 工具开发' }, tools: ['Maya', 'Python'] },
  { title: 'Stylized Road Material', href: 'https://www.artstation.com/artwork/Bk918D', image: '/media/artstation/stylized-road-material.jpg', imageWidth: 1920, imageHeight: 1977, category: { en: 'Material study', zh: '材质练习' }, tools: ['Substance Designer'] },
  { title: 'Rigging & Animation', href: 'https://www.artstation.com/artwork/vb42ev', image: '/media/artstation/rigging-animation.jpg', imageWidth: 1920, imageHeight: 1953, category: { en: 'Rigging study', zh: '绑定练习' }, tools: ['Maya', 'Unreal Engine'], featured: true },
  { title: 'Unity SDF Shader', href: 'https://www.artstation.com/artwork/XJGnQl', image: '/media/artstation/unity-sdf-shader.jpg', imageWidth: 1920, imageHeight: 1953, category: { en: 'Realtime shader', zh: '实时 Shader' }, tools: ['Unity', 'SDF'] },
  { title: 'Houdini Interactive Lighting', href: 'https://www.artstation.com/artwork/5W1Xkg', image: '/media/artstation/houdini-lighting.jpg', imageWidth: 1920, imageHeight: 1953, category: { en: 'Procedural lighting', zh: '程序化灯光' }, tools: ['Houdini'] },
  { title: 'Houdini Interactive Cluster', href: 'https://www.artstation.com/artwork/Zl3GrN', image: '/media/artstation/houdini-cluster.jpg', imageWidth: 1920, imageHeight: 1953, category: { en: 'Procedural interaction', zh: '程序化交互' }, tools: ['Houdini'] },
  { title: 'Unreal Engine VFX', href: 'https://www.artstation.com/artwork/oJWA5k', image: '/media/artstation/unreal-vfx.jpg', imageWidth: 1920, imageHeight: 1952, category: { en: 'Realtime VFX', zh: '实时特效' }, tools: ['Unreal Engine', 'Niagara'] },
  { title: 'Houdini PCG Tower', href: 'https://www.artstation.com/artwork/nJWYm1', image: '/media/artstation/houdini-pcg-tower.jpg', imageWidth: 1920, imageHeight: 1954, category: { en: 'Procedural environment', zh: '程序化场景' }, tools: ['Houdini', 'PCG'] },
];

export function localize(value: Localized, locale: Locale) {
  return value[locale];
}
