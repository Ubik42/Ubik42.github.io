import type { Locale } from './content';

export type Localized = Record<Locale, string>;

export interface RepositoryLink {
  name: string;
  href: string;
}

export interface ProductLine {
  id: string;
  title: Localized;
  order: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: Localized;
  purpose: Localized;
  workflow: Localized;
  proof: Localized;
  stage: Localized;
  stack: string[];
  repositories: RepositoryLink[];
}

export const portfolioOverview = {
  title: { en: 'Five product lines, one technical-art practice', zh: '五条产品线，一套技术美术实践' },
  summary: {
    en: 'Eighteen focused repositories are grouped into five recruiter-facing product lines. The public foundation and three representative product repositories are online, with visible Maya and Unreal host evidence.',
    zh: '18 个独立仓库按招聘者能够快速理解的方式归入五条产品线。公开基础仓与三个代表性产品仓现已开放，并已有 Maya 与 Unreal 真实宿主证据。',
  },
  sourceLabel: { en: 'Open portfolio index', zh: '打开作品集总入口' },
  status: { en: 'Public snapshot online · Maya + Unreal host-verified', zh: '公开快照已上线 · Maya + Unreal 宿主实测' },
  facts: [
    { value: '5', label: { en: 'product lines', zh: '条产品线' } },
    { value: '18', label: { en: 'independent repositories', zh: '个独立仓库' } },
    { value: '9', label: { en: 'ArtStation projects', zh: '个 ArtStation 项目' } },
    { value: 'CN', label: { en: 'Chinese-first presentation', zh: '中文优先展示' } },
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

export const productLines: ProductLine[] = [
  {
    id: 'cross-dcc-rules', order: '01',
    title: { en: 'Cross-DCC asset rules and safe repair', zh: '跨 DCC 资产规范与安全修复系统' },
    image: '/media/portfolio/cross-dcc-rules-host.png', imageWidth: 3000, imageHeight: 1735,
    imageAlt: { en: 'Cross-DCC rule matrix running inside Maya 2024 and auditing the current scene.', zh: '在 Maya 2024 内运行并审计当前场景的跨 DCC 规则矩阵。' },
    purpose: { en: 'Models asset rules once, maps them to host-specific facts, and keeps automated repair previewable and reversible.', zh: '统一建模资产规范，再映射到各 DCC 的事实采集与修复边界，让自动修复始终可预览、可追踪、可回滚。' },
    workflow: { en: 'Define rules → collect host facts → normalize → validate → preview or apply repair → export evidence.', zh: '定义规则 → 采集宿主事实 → 归一化 → 校验 → 预览或执行修复 → 导出证据。' },
    proof: { en: 'Maya 2024 host audit reads scene units, meshes, namespaces, and negative scale, then writes a structured receipt without mutating scene data.', zh: 'Maya 2024 宿主审计直接读取单位、Mesh、Namespace 与负缩放，并在不修改场景数据的前提下写出结构化回执。' },
    stage: { en: 'Maya 2024 visible validation is complete; additional DCC versions and production-asset matrices remain.', zh: 'Maya 2024 可见宿主验收已完成，仍需扩展其他 DCC 版本与生产资产矩阵。' },
    stack: ['Maya', 'Blender', '3ds Max', 'Houdini', 'MotionBuilder', 'Python'],
    repositories: [
      { name: 'maya-asset-protocol-workbench', href: 'https://github.com/Ubik42/maya-asset-protocol-workbench' },
      { name: 'maya-cross-dcc-rule-matrix', href: 'https://github.com/Ubik42/maya-cross-dcc-rule-matrix' },
      { name: 'blender-rule-repair-adapter', href: 'https://github.com/Ubik42/blender-rule-repair-adapter' },
      { name: 'max-rule-repair-adapter', href: 'https://github.com/Ubik42/max-rule-repair-adapter' },
      { name: 'houdini-procedural-rule-adapter', href: 'https://github.com/Ubik42/houdini-procedural-rule-adapter' },
      { name: 'motionbuilder-animation-rule-adapter', href: 'https://github.com/Ubik42/motionbuilder-animation-rule-adapter' },
    ],
  },
  {
    id: 'animation-roundtrip', order: '02',
    title: { en: 'Maya / Unreal animation round-trip inspection', zh: 'Maya / Unreal 动画与 Sequencer 往返检查' },
    image: '/media/portfolio/animation-roundtrip-host.png', imageWidth: 2575, imageHeight: 1407,
    imageAlt: { en: 'Unreal Editor 5.4 showing a passed Level Sequence inspection from the installed AI Tool TA plug-in.', zh: 'Unreal Editor 5.4 中已安装的 AI Tool TA 插件返回 Level Sequence 检查通过结果。' },
    purpose: { en: 'Compares animation and attachment intent across Maya and Unreal, with frame-level evidence for round-trip changes.', zh: '对比 Maya 与 Unreal 之间的动画和挂接意图，用帧级证据检查往返变更。' },
    workflow: { en: 'Collect source animation → export → inspect Sequencer/runtime result → compare frames and events → record handoff.', zh: '采集源动画 → 导出 → 检查 Sequencer 与运行时结果 → 对比帧和事件 → 记录交付。' },
    proof: { en: 'The installed Unreal 5.4 plug-in audits the active sequence at 24 fps / 24000 ticks, records bindings and tracks, and produces a zero-production-write receipt.', zh: '安装在 Unreal 5.4 中的插件审计当前序列的 24 fps / 24000 Tick、Binding 与轨道，并生成零生产写入回执。' },
    stage: { en: 'Unreal 5.4 visible structural inspection is complete; visible animation playback and broader asset coverage remain.', zh: 'Unreal 5.4 可见结构审计已完成，仍需扩展动画播放验收与更多资产类型。' },
    stack: ['Maya', 'Unreal Engine', 'Sequencer', 'Python', 'C++'],
    repositories: [
      { name: 'level-sequence-roundtrip-inspector', href: 'https://github.com/Ubik42/level-sequence-roundtrip-inspector' },
      { name: 'ue-socket-anim-attach-bridge', href: 'https://github.com/Ubik42/ue-socket-anim-attach-bridge' },
    ],
  },
  {
    id: 'character-delivery', order: '03',
    title: { en: 'Character, groom, and spatial handoff tools', zh: '角色、毛发与空间挂接交付工具' },
    image: '/media/portfolio/groom-delivery-new.png', imageWidth: 1440, imageHeight: 1000,
    imageAlt: { en: 'Maya groom export inspector showing package checks, blockers, and delivery readiness.', zh: '展示资产包检查、阻断项与交付就绪状态的 Maya Groom 导出检查器。' },
    purpose: { en: 'Turns character calibration, groom export, sockets, poses, and spatial intent into inspectable handoff data.', zh: '把角色校准、Groom 导出、Socket、Pose 与空间挂接意图整理成可检查的交付数据。' },
    workflow: { en: 'Collect rig and groom facts → validate calibration → author spatial intent → preview package → hand off.', zh: '采集绑定与毛发事实 → 校验角色标定 → 编写空间意图 → 预览资产包 → 完成交付。' },
    proof: { en: 'Focused repositories for character calibration, groom export inspection, and spatial authoring.', zh: '角色校准、Groom 导出检查和空间作者工具三个独立工程。' },
    stage: { en: 'Focused prototypes are separated; representative character and groom test matrices remain incomplete.', zh: '专项原型已完成拆仓，代表性角色与 Groom 测试矩阵仍未完成。' },
    stack: ['Maya', 'Rigging', 'Groom', 'Control Rig', 'Socket'],
    repositories: [
      { name: 'maya-character-calibration-studio', href: 'https://github.com/Ubik42/maya-character-calibration-studio' },
      { name: 'maya-groom-export-inspector', href: 'https://github.com/Ubik42/maya-groom-export-inspector' },
      { name: 'maya-spatial-authoring-workbench', href: 'https://github.com/Ubik42/maya-spatial-authoring-workbench' },
    ],
  },
  {
    id: 'texture-variants', order: '04',
    title: { en: 'Substance / Unreal texture and platform delivery', zh: 'Substance / Unreal 贴图与平台变体交付' },
    image: '/media/portfolio/texture-delivery-new.png', imageWidth: 1440, imageHeight: 1000,
    imageAlt: { en: 'Substance-to-Unreal texture sync console with channel checks, package status, and delivery actions.', zh: '包含通道检查、资产包状态与交付操作的 Substance 到 Unreal 贴图同步控制台。' },
    purpose: { en: 'Coordinates texture synchronization and PC/mobile asset variants while keeping budgets and engine writes explicit.', zh: '协调贴图同步与 PC/Mobile 资产变体，同时明确平台预算和引擎写入边界。' },
    workflow: { en: 'Inspect Substance output → compare platform policy → dry run → review delta → approve Unreal mutation.', zh: '检查 Substance 输出 → 对比平台策略 → Dry Run → 审查 Delta → 批准 Unreal 写入。' },
    proof: { en: 'Texture synchronization and controlled platform-variant repositories with reviewable manifests.', zh: '贴图同步与平台变体两个独立仓库，以及可审查的 Manifest。' },
    stage: { en: 'Data contracts and UI studies exist; live Substance and Unreal integration testing remains.', zh: '数据合同与界面研究已存在，仍需完成 Substance 与 Unreal 的真实联调测试。' },
    stack: ['Substance', 'Unreal Engine', 'Textures', 'LOD', 'PC / Mobile'],
    repositories: [
      { name: 'substance-unreal-texture-sync', href: 'https://github.com/Ubik42/substance-unreal-texture-sync' },
      { name: 'ue-platform-variant-forge', href: 'https://github.com/Ubik42/ue-platform-variant-forge' },
    ],
  },
  {
    id: 'safe-automation', order: '05',
    title: { en: 'Safe DCC automation and evidence governance', zh: 'DCC 安全自动化与证据治理平台' },
    image: '/media/portfolio/transaction-recorder-new.png', imageWidth: 1440, imageHeight: 1000,
    imageAlt: { en: 'DCC transaction recorder showing scene mutations, receipts, rollback state, and safety evidence.', zh: '展示场景变更、执行回执、回滚状态与安全证据的 DCC 事务记录器。' },
    purpose: { en: 'Records scene mutations, evidence lineage, approvals, waivers, release gates, and the user context that launched each tool.', zh: '记录场景修改、证据血缘、批准、豁免、发布门禁，以及每次工具启动时的用户上下文。' },
    workflow: { en: 'Launch in context → preview transaction → execute → record lineage → collect owner decision → gate release.', zh: '按上下文启动 → 预览事务 → 执行 → 记录血缘 → 收集 Owner 决策 → 控制发布。' },
    proof: { en: 'Independent SDK, lineage viewer, release governor, waiver ledger, and DCC shelf launcher.', zh: '独立的事务 SDK、血缘浏览器、发布治理器、豁免台账与 DCC Shelf 启动器。' },
    stage: { en: 'Contracts and synthetic evidence flows exist; destructive-operation, recovery, and long-run testing remains.', zh: '合同与合成证据链已建立，仍需补齐破坏性操作、恢复流程与长时间运行测试。' },
    stack: ['Transactions', 'Rollback', 'Lineage', 'Human approval', 'Release gate'],
    repositories: [
      { name: 'dcc-transaction-recorder-sdk', href: 'https://github.com/Ubik42/dcc-transaction-recorder-sdk' },
      { name: 'aitoolta-asset-lineage-viewer', href: 'https://github.com/Ubik42/aitoolta-asset-lineage-viewer' },
      { name: 'package-release-governor', href: 'https://github.com/Ubik42/package-release-governor' },
      { name: 'owner-waiver-ledger', href: 'https://github.com/Ubik42/owner-waiver-ledger' },
      { name: 'dcc-shelf-context-launcher', href: 'https://github.com/Ubik42/dcc-shelf-context-launcher' },
    ],
  },
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
