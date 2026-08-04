export type Locale = 'en' | 'zh';

export type SystemId = 'rules' | 'review' | 'workflows';

export interface MethodStage {
  id: 'problem' | 'rules' | 'ai' | 'review' | 'dcc' | 'evidence';
  label: string;
  detail: string;
}

export interface PortfolioSystem {
  id: SystemId;
  shortTitle: string;
  title: string;
  summary: string;
  problem: string;
  core: string;
  aiBoundary: string;
  evidence: string[];
  tags: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
}

export interface PracticeItem {
  period: string;
  title: string;
  place: string;
  detail: string;
}

export interface SiteCopy {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    practice: string;
    connect: string;
    aria: string;
  };
  language: {
    label: string;
    english: string;
    chinese: string;
    changed: string;
  };
  hero: {
    role: string;
    statement: string;
    primaryAction: string;
    secondaryAction: string;
    methodTitle: string;
    coreLabel: string;
    coreStatus: string;
  };
  method: MethodStage[];
  atlas: {
    title: string;
    intro: string;
    identity: string;
    sharedLayers: string;
    selectedSystem: string;
    problem: string;
    core: string;
    aiBoundary: string;
    evidence: string;
    inspect: string;
    close: string;
    dialogLabel: string;
  };
  systems: PortfolioSystem[];
  practice: {
    title: string;
    intro: string;
    items: PracticeItem[];
  };
  ongoing: {
    title: string;
    name: string;
    status: string;
    detail: string;
    action: string;
  };
  footer: {
    note: string;
    connect: string;
    github: string;
    artstation: string;
    bilibili: string;
    xiaohongshu: string;
    copyright: string;
  };
}

const englishSystems: PortfolioSystem[] = [
  {
    id: 'rules',
    shortTitle: 'Production rules',
    title: 'Production Rules Across DCC and Engine',
    summary:
      'A shared asset protocol and rule layer turns Maya, Blender, and Unreal facts into reviewable publish decisions.',
    problem:
      'Asset intent is often split across naming, node attributes, UVs, materials, platform budgets, and undocumented conventions.',
    core:
      'Versioned protocol schemas, DCC collectors, a shared rule DSL, staged fix previews, manual dispositions, and publish reports.',
    aiBoundary:
      'AI drafts and explains rules. Deterministic validators own status, safe-fix boundaries, scene mutation, and publish gates.',
    evidence: [
      'Synthetic public fixtures',
      'Field-level protocol diffs',
      'Maya scene fact collection',
      'Cross-DCC validation reports',
    ],
    tags: ['Maya', 'Blender', 'Unreal', 'Rule DSL'],
    image: '/media/cross-dcc-rule-matrix.png',
    imageWidth: 1440,
    imageHeight: 8682,
    imageAlt: 'Cross-DCC rule matrix with rule authoring, validation heatmaps, fix previews, and publish evidence.',
  },
  {
    id: 'review',
    shortTitle: 'Visual review',
    title: 'Visual Review as a Reproducible Contract',
    summary:
      'Fixed cameras, passes, thresholds, and handoff receipts make visual comparison repeatable and explainable.',
    problem:
      'A/B screenshots are unreliable when units, cameras, LOD buckets, materials, and pass conditions change between captures.',
    core:
      'A camera rig, pass manifest, deterministic diff signals, review queue, owner handoff, and final release gate.',
    aiBoundary:
      'AI prepares reviewer-facing summaries. It cannot change pass execution, thresholds, findings, or human acceptance.',
    evidence: [
      'Pass run and skip manifest',
      'Signal-to-pass trace',
      'Review queue audit',
      'Handoff and release reports',
    ],
    tags: ['Maya', 'A/B Review', 'Capture', 'Handoff'],
    image: '/media/visual-review-workflow.png',
    imageWidth: 1440,
    imageHeight: 11665,
    imageAlt: 'Visual review workbench showing capture setup, signal thresholds, review queue, and release evidence.',
  },
  {
    id: 'workflows',
    shortTitle: 'Personal workflows',
    title: 'Personal AI Workflows for Research and Presentation',
    summary:
      'Research, presentation, and long-running agent work become resumable pipelines with explicit state and verification.',
    problem:
      'Creative and research workflows lose quality when references, intermediate state, review gates, and recovery paths remain implicit.',
    core:
      'Slidev theme and addon research, GSAP plus Three.js scene studies, a SQLite paper catalog, MinerU extraction, and guarded agent scheduling.',
    aiBoundary:
      'AI classifies, drafts, and proposes. Local state, deterministic checks, explicit approvals, and source evidence decide what persists.',
    evidence: [
      'Theme and addon compatibility data',
      'Runtime and sequential visual QA',
      '5,000+ indexed paper records',
      'Resumable jobs with approval gates',
    ],
    tags: ['Slidev', 'GSAP', 'Three.js', 'Research'],
    image: '/media/slidev-motion-study.png',
    imageWidth: 1280,
    imageHeight: 720,
    imageAlt: 'GSAP and Three.js motion study showing an interlocking 3D form beside presentation copy.',
  },
];

const chineseSystems: PortfolioSystem[] = [
  {
    id: 'rules',
    shortTitle: '生产规则',
    title: '跨 DCC 与引擎的生产规则系统',
    summary: '用共享资产协议和规则层，把 Maya、Blender 与 Unreal 的场景事实转成可审查的发布决策。',
    problem: '资产意图经常散落在命名、节点属性、UV、材质、平台预算和未成文约定中。',
    core: '版本化协议、DCC 采集器、共享规则 DSL、分阶段修复预览、人工处置与发布报告。',
    aiBoundary: 'AI 起草并解释规则；确定性验证器负责状态、安全修复边界、场景修改与发布门禁。',
    evidence: ['公开合成样例', '字段级协议差异', 'Maya 场景事实采集', '跨 DCC 验证报告'],
    tags: ['Maya', 'Blender', 'Unreal', '规则 DSL'],
    image: '/media/cross-dcc-rule-matrix.png',
    imageWidth: 1440,
    imageHeight: 8682,
    imageAlt: '跨 DCC 规则矩阵，包含规则编写、验证热图、修复预览与发布证据。',
  },
  {
    id: 'review',
    shortTitle: '视觉评审',
    title: '可复现的视觉评审合同',
    summary: '固定相机、Pass、阈值与交接回执，让视觉对比可重复、可解释、可复盘。',
    problem: '当单位、相机、LOD 分桶、材质与 Pass 条件不断变化时，A/B 截图无法稳定比较。',
    core: '相机组、Pass 清单、确定性差异信号、评审队列、责任人交接与最终发布门禁。',
    aiBoundary: 'AI 负责生成面向评审人的说明，不能改变 Pass 执行、阈值、检查结果或人工签收。',
    evidence: ['Pass 运行与跳过清单', '信号到 Pass 的追踪', '评审队列审计', '交接与发布报告'],
    tags: ['Maya', 'A/B 评审', '截图', '交接'],
    image: '/media/visual-review-workflow.png',
    imageWidth: 1440,
    imageHeight: 11665,
    imageAlt: '视觉评审工作台，展示截图设置、信号阈值、评审队列与发布证据。',
  },
  {
    id: 'workflows',
    shortTitle: '个人工作流',
    title: '研究与演示的个人 AI 工作流',
    summary: '把研究、演示和长期 Agent 任务做成具备明确状态、验证与恢复能力的流程。',
    problem: '当参考资料、中间状态、评审门禁与恢复路径没有显式记录时，创作和研究流程很难稳定复用。',
    core: 'Slidev 主题与 Addon 研究、GSAP + Three.js 场景实验、SQLite 论文目录、MinerU 提取与受控任务调度。',
    aiBoundary: 'AI 负责分类、起草与提出建议；本地状态、确定性检查、人工批准和源证据决定最终结果。',
    evidence: ['主题与 Addon 兼容数据', '运行态与逐页视觉 QA', '5000+ 论文索引记录', '带批准门禁的可恢复任务'],
    tags: ['Slidev', 'GSAP', 'Three.js', '科研'],
    image: '/media/slidev-motion-study.png',
    imageWidth: 1280,
    imageHeight: 720,
    imageAlt: 'GSAP 与 Three.js 动效实验，右侧是交织的三维结构，左侧是演示文案。',
  },
];

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    meta: {
      title: 'Lucas Shen | AI Tool Technical Artist',
      description:
        'Lucas Shen builds inspectable AI-assisted tools for DCC, engine, and art-production workflows.',
    },
    nav: {
      work: 'Evidence atlas',
      practice: 'Practice',
      connect: 'Connect',
      aria: 'Primary navigation',
    },
    language: {
      label: 'Language',
      english: 'English',
      chinese: '中文',
      changed: 'Language changed to English.',
    },
    hero: {
      role: 'AI Tool Technical Artist',
      statement:
        'I build inspectable AI-assisted tools for DCC, engine, and art-production workflows.',
      primaryAction: 'Inspect selected work',
      secondaryAction: 'Open GitHub',
      methodTitle: 'Rules become tools. Evidence closes the loop.',
      coreLabel: 'Protocol core',
      coreStatus: 'Six layers, one reviewable handoff',
    },
    method: [
      { id: 'problem', label: 'Problem', detail: 'Frame the production constraint.' },
      { id: 'rules', label: 'Rules', detail: 'Encode policy as a testable protocol.' },
      { id: 'ai', label: 'AI assist', detail: 'Draft, diagnose, and explain.' },
      { id: 'review', label: 'Human review', detail: 'Approve changes and exceptions.' },
      { id: 'dcc', label: 'DCC / Engine', detail: 'Run tools against scene facts.' },
      { id: 'evidence', label: 'Evidence', detail: 'Export diffs, reports, and handoff.' },
    ],
    atlas: {
      title: 'Evidence atlas',
      intro: 'Three systems share one method: deterministic production logic, bounded AI assistance, and evidence a reviewer can inspect.',
      identity: 'Systems built from production rules, human review, and verifiable evidence.',
      sharedLayers: 'Shared layers',
      selectedSystem: 'Selected system',
      problem: 'Problem',
      core: 'Deterministic core',
      aiBoundary: 'AI boundary',
      evidence: 'Evidence',
      inspect: 'Open evidence view',
      close: 'Close evidence view',
      dialogLabel: 'System evidence',
    },
    systems: englishSystems,
    practice: {
      title: 'Range built through practice',
      intro: 'Toolmaking sits on top of production experience, technical-art study, game development, and systems thinking.',
      items: [
        {
          period: '2026.03 – now',
          title: 'AI Tool Technical Artist Intern',
          place: 'Tencent Photon',
          detail: 'Building AI-assisted art-production tools across DCC, engine, and design workflows, with explicit rules and review boundaries.',
        },
        {
          period: '2025.08 – 2027.05',
          title: 'M.S. in EAE, Technical Art',
          place: 'University of Utah',
          detail: 'Studying real-time graphics, tools, pipelines, and collaborative game production in the Entertainment Arts and Engineering program.',
        },
        {
          period: '2020.09 – 2024.06',
          title: 'Industrial Engineering foundation',
          place: 'Shanghai Jiao Tong University',
          detail: 'Built a foundation in optimization and systems, then applied it through game systems, Unity client work, and industrial digital twins.',
        },
      ],
    },
    ongoing: {
      title: 'Ongoing DCC work',
      name: 'MayaCraft',
      status: 'In active development',
      detail: 'A modular Maya 2025 rigging and TD toolkit using Python, Maya API 2.0, PySide6, and AuroraView.',
      action: 'Open MayaCraft repository',
    },
    footer: {
      note: 'Public methods and synthetic evidence only. Internal production details remain private.',
      connect: 'Public channels',
      github: 'GitHub',
      artstation: 'ArtStation',
      bilibili: 'Bilibili',
      xiaohongshu: 'Xiaohongshu',
      copyright: 'Lucas (Yuyan) Shen / 沈裕焱',
    },
  },
  zh: {
    meta: {
      title: '沈裕焱 | AI 工具技术美术',
      description: '沈裕焱专注于为 DCC、引擎和美术生产流程构建可检查的 AI 辅助工具。',
    },
    nav: {
      work: '证据图谱',
      practice: '经历',
      connect: '联系',
      aria: '主导航',
    },
    language: {
      label: '语言',
      english: 'English',
      chinese: '中文',
      changed: '语言已切换为中文。',
    },
    hero: {
      role: 'AI 工具技术美术',
      statement: '我把 DCC、引擎与美术生产流程中的业务规则，做成可检查、可运行、可持续迭代的 AI 辅助工具。',
      primaryAction: '查看精选案例',
      secondaryAction: '打开 GitHub',
      methodTitle: '规则形成工具，证据完成闭环。',
      coreLabel: '协议核心',
      coreStatus: '六层关系，一份可审查交付',
    },
    method: [
      { id: 'problem', label: '生产问题', detail: '明确真实约束与失败成本。' },
      { id: 'rules', label: '确定性规则', detail: '把规范编码为可测试协议。' },
      { id: 'ai', label: 'AI 辅助', detail: '起草、诊断并解释。' },
      { id: 'review', label: '人工审查', detail: '批准修改与例外处置。' },
      { id: 'dcc', label: 'DCC / 引擎', detail: '根据场景事实执行工具。' },
      { id: 'evidence', label: '证据交付', detail: '导出差异、报告与交接材料。' },
    ],
    atlas: {
      title: '证据图谱',
      intro: '三套系统共享同一种方法：确定性生产逻辑、有边界的 AI 辅助，以及评审人可以检查的证据。',
      identity: '从生产规则出发，以人工审查和可验证证据完成闭环。',
      sharedLayers: '共享能力层',
      selectedSystem: '当前系统',
      problem: '生产问题',
      core: '确定性核心',
      aiBoundary: 'AI 边界',
      evidence: '验证证据',
      inspect: '打开证据视图',
      close: '关闭证据视图',
      dialogLabel: '系统证据',
    },
    systems: chineseSystems,
    practice: {
      title: '能力来自长期实践',
      intro: '工具开发建立在真实生产经验、技术美术学习、游戏开发和系统思维之上。',
      items: [
        {
          period: '2026.03 – 至今',
          title: 'AI 工具技术美术实习生',
          place: '腾讯光子',
          detail: '围绕 DCC、引擎与设计流程构建 AI 辅助美术生产工具，明确规则、执行与人工审查的边界。',
        },
        {
          period: '2025.08 – 2027.05',
          title: 'EAE 技术美术硕士',
          place: '犹他大学',
          detail: '在 Entertainment Arts and Engineering 项目中学习实时图形、工具、管线与协作式游戏生产。',
        },
        {
          period: '2020.09 – 2024.06',
          title: '工业工程与系统基础',
          place: '上海交通大学',
          detail: '以优化与系统方法为基础，逐步扩展到游戏系统、Unity 客户端与工业数字孪生开发。',
        },
      ],
    },
    ongoing: {
      title: '持续开发中的 DCC 项目',
      name: 'MayaCraft',
      status: '持续开发',
      detail: '面向 Maya 2025 的模块化绑定与 TD 工具集，使用 Python、Maya API 2.0、PySide6 与 AuroraView。',
      action: '打开 MayaCraft 仓库',
    },
    footer: {
      note: '页面仅展示公开方法与合成证据，内部生产细节保持私密。',
      connect: '公开渠道',
      github: 'GitHub',
      artstation: 'ArtStation',
      bilibili: '哔哩哔哩',
      xiaohongshu: '小红书',
      copyright: 'Lucas (Yuyan) Shen / 沈裕焱',
    },
  },
};
