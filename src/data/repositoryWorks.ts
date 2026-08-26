import type { Localized } from './showcase';

export type PortfolioCategory = 'pipeline' | 'ai-agent' | 'general-ta' | 'engine-games' | 'other-tools';

export interface RepositoryWork {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: Localized;
  summary: Localized;
  cover: string;
  tags: string[];
  repositoryUrl?: string;
  story: Localized;
  images?: Array<{ src: string; alt: Localized }>;
}

export const repositoryWorks: RepositoryWork[] = [
  {
    id: 'noemancer',
    title: 'Noemancer',
    category: 'engine-games',
    categoryLabel: { zh: '自研游戏引擎', en: 'Custom game engine' },
    summary: { zh: 'C++20 游戏引擎与编辑器，覆盖渲染、物理、动画、C# 脚本、资产烘焙和 Agent 工具层。', en: 'A C++20 engine and editor spanning rendering, physics, animation, C# scripting, asset cooking, and agent tools.' },
    cover: '/media/repositories/noemancer.webp',
    tags: ['C++20', 'D3D12 / Vulkan', 'C#', 'MCP'],
    repositoryUrl: 'https://github.com/Ubik42/Noemancer',
    story: {
      zh: `# Noemancer

Noemancer 不是套在现有引擎外面的编辑器外壳。仓库包含原生 Editor、游戏 Runtime、资产 Cook、独立 Player 打包、C# 项目脚本，以及由 CLI 与 MCP 共享的引擎命令层。

## 当前可以完成的工作

- 创建和打开项目，编辑场景、输入与项目 UI。
- 在隔离的 Play World 中运行 C# 游戏逻辑，并选择性 Apply Back。
- 通过 SDL_GPU 驱动 D3D12 / Vulkan，提供 Forward PBR、阴影、TAA、GTAO、Bloom 与 ACES Tone Mapping。
- 导入 GLB / FBX，烘焙 Mesh、Animation 与 KTX2 资产，并打包独立 Windows Player。
- 通过稳定 ID、Schema 与 Revision，让 Editor、CLI 和 MCP 使用同一套命令与 Undo / Redo 事务。

## Agent 工具层

引擎把场景、项目、资产注册表和运行时诊断公开为结构化状态。自动化流程遵循 **Observe → Plan → Apply → Receipt → Undo / Redo**，先读取事实，再执行受约束的修改。

## 当前边界

项目仍处于 Pre-alpha，当前只完成 Windows x64 端到端验证。SSR、SSGI、硬件光追、动态天空与稳定插件 SDK 仍是后续工作，不作为现成功能展示。`,
      en: `# Noemancer

Noemancer contains a native Editor, game Runtime, asset Cook, standalone Player packaging, C# project scripting, and one command layer shared by CLI and MCP.

## Current capabilities

- Project and scene authoring, input and project UI.
- Isolated Play World execution with selective Apply Back.
- SDL_GPU rendering on D3D12 / Vulkan with Forward PBR, shadows, TAA, GTAO, Bloom, and ACES tone mapping.
- GLB / FBX import, cooked mesh and animation formats, KTX2 assets, and Windows Player packaging.
- Stable IDs, schemas, revisions, receipts, and undoable commands shared by the Editor and agent tools.

## Current boundary

The project is pre-alpha and currently verified end to end on Windows x64. SSR, SSGI, hardware ray tracing, dynamic atmosphere, and a stable plug-in SDK are not presented as finished features.`,
    },
    images: [{ src: '/media/repositories/noemancer.webp', alt: { zh: 'Noemancer 编辑器实机界面', en: 'Noemancer editor running in-engine' } }],
  },
  {
    id: 'art-pipeline-skill',
    title: 'Art Pipeline Skill',
    category: 'pipeline',
    categoryLabel: { zh: '工具与资产管线审计 Skill', en: 'Tool and asset pipeline audit skill' },
    summary: { zh: '从旧 AIToolTA 体系中收口出的轻量 Skill：登记真实工具能力，校验版本、只读边界与执行证据。', en: 'A focused skill extracted from the retired AIToolTA suite to validate registered tools, versions, read-only boundaries, and execution evidence.' },
    cover: '/media/repositories/production-tools/art-pipeline-overview.png',
    tags: ['Skill', 'Maya / Unreal', 'JSON Schema', '只读审计'],
    repositoryUrl: 'https://github.com/Ubik42/art-pipeline-skill',
    story: {
      zh: `# Art Pipeline Skill

旧 AIToolTA 母仓和“万能管线 Agent”方向已经停止。当前项目被收口为一个轻量、可审计的领域 Skill：它不临时生成脚本修改资产，而是让 Codex、ArtFlow Agent 等调用已经登记、具备版本和能力合同的真实工具。

## 当前职责

- 校验工具与插件身份、版本、Profile、Manifest 和报告时效；
- 只允许调用登记过的能力，未知字段、版本漂移和新增写权限全部失败关闭；
- 保存 correlation ID、配置哈希、工具版本、只读声明与执行回执；
- 为 Maya Scene Checker、Unreal Asset Batch Auditor 和 Asset Delivery Organizer 提供明确的能力握手；
- 失败后保持幂等步骤身份，从下一次 attempt 恢复，不重复已经成功的工作。

## 宿主边界与验证

Maya 2024/2025 的 mayapy 与 UE 5.8.1 UnrealEditor-Cmd 已完成真实加载验证。两个宿主桥只报告状态，不执行任意 Maya Python、Unreal Console Command，也不加载、保存或重建资产。仓库中的中文演示页面使用确定性合成数据，并明确标为模拟状态，不冒充真实宿主截图。

当前公开基线包含 54 项自动化测试；旧 AIToolTA 的迁移与退役证据保留在仓库文档中。`,
      en: `# Art Pipeline Skill

The former AIToolTA umbrella and general-purpose pipeline agent have been retired. This repository is now a focused domain skill that validates registered tools, versions, read-only capabilities, report contracts, and execution receipts before an agent can use them.

Maya 2024/2025 mayapy and Unreal 5.8.1 command-line host loading have been verified. The host bridges expose status only and cannot execute arbitrary host commands or modify assets.`,
    },
    images: [
      { src: '/media/repositories/production-tools/art-pipeline-overview.png', alt: { zh: 'Art Pipeline Skill 两个宿主桥与工具能力连接总览', en: 'Art Pipeline Skill host bridge overview' } },
      { src: '/media/repositories/production-tools/art-pipeline-maya.png', alt: { zh: 'Maya 场景检查能力的模拟协议状态', en: 'Simulated Maya scene-check capability state' } },
      { src: '/media/repositories/production-tools/art-pipeline-blocked.png', alt: { zh: '工具版本不一致时的失败关闭界面', en: 'Fail-closed state for a tool version mismatch' } },
    ],
  },
  {
    id: 'internship-art-pipeline',
    title: '光子 AI 工具向实习内容总结',
    category: 'pipeline',
    categoryLabel: { zh: '腾讯光子｜AI 工具技术美术实习', en: 'Tencent Lightspeed AI tools internship' },
    summary: {
      zh: '覆盖 Maya / Unreal 宿主工具、8 个 Figma 插件、FastAPI 数据服务、视觉检索、AIGC 自动化、DCC 批处理与可回归交付。',
      en: 'Maya and Unreal tools, eight Figma plug-ins, FastAPI data services, visual retrieval, AIGC automation, DCC batch processing, and regression-ready delivery.',
    },
    cover: '/media/repositories/internship-pipeline.svg',
    tags: ['Maya / Unreal', 'Figma', 'Python / C++', 'React / FastAPI'],
    story: {
      zh: `# 光子 AI 工具向实习内容总结

这组工作来自大型游戏工作室的 AI 工具技术美术实习。工作范围横跨 Maya、Unreal Editor、Figma 插件沙箱、Python / C++、TypeScript / React、FastAPI、SQLite、视觉向量检索、版本化软件环境和持续集成。公开版本保留实际解决的问题、系统分层和验证方法；内部项目、平台、账号、接口地址、业务数据、资产、仓库路径、原始截图与录屏均已移除。

## Maya：LOD 材质整理与资产检查

- 遍历 Maya 场景层级和工程贴图，检查命名、层级、重复对象、贴图缺失及材质连接，把问题划分为“可安全自动修复”和“必须由美术确认”两类。
- 检查通过后执行统一命名、标准贴图连接、材质整理与导出，避免修复脚本在信息不足时直接改坏资产。
- Python 继续承担 Maya 宿主逻辑，使用嵌入 Qt 的 Web 前端展示步骤、错误列表、进度与最终结果；前端发送事件，Python 回传结构化状态。
- 使用正常资产、贴图缺失、错误层级、重复名称和异常导出等样例回归，同时处理窗口重复打开、关闭与刷新、资源路径、宿主线程和异常回传。

## Maya：既有烘焙工具的半分辨率贴图扩展

- 在原有贴图烘焙流程中增加原尺寸 / 半尺寸分支，根据输入宽高计算目标分辨率，并处理奇数尺寸、最小值和比例边界。
- 将新选项接回既有参数保存与任务执行，保持文件格式、Alpha、命名和输出目录规则一致。
- 分别核对两条分支的尺寸、通道、文件名和目录，并重跑旧流程，确认新增功能没有改变默认导出行为。

## Unreal Editor：多 Actor 拍屏预设

- 从编辑器选择集中读取 Skeletal Mesh Actor，同时记录视口、相机和标准灯光状态；空选择、失效资源和字段缺失在执行前拦截。
- 使用 C++ 定义可序列化的数据结构，覆盖骨骼网格、Transform、相机焦距、视口、灯光、LOD 与默认值。
- 使用 Python 编排创建模型、保存预设、读取应用、删除预设、错误提示和执行顺序，再把稳定操作注册到蓝图函数库，接入既有角色选择与构建流程。
- 原型通过后将预设资源化为 Data Asset，使配置可以共享、提交版本并追溯修改。
- 对复杂角色维护主角色、武器和挂件的父子关系与相对状态；重复应用时避免附属物重复生成，只清理本次预设创建并登记的对象，保留场景原有内容。
- 通过“保存—主动修改—恢复—再次应用—清理”的连续测试检查 Outliner 数量、父级、资源引用和单项失败记录。

## Figma AI 工具族：8 个插件的持续开发

### AI 管家

- 递归读取选区中的文本、尺寸、层级、组件和节点关系，将当前页面与选区压缩为结构化摘要，再与用户问题和历史消息共同组成提示词上下文，避免无差别发送整份设计文件。
- 实现流式回复、停止生成、历史记录、Markdown、长文本滚动、网络中断后的已返回内容保留，以及可控的上下文窗口。
- 补齐登录、主题、配置、窗口重开、重复监听、流式残留和异常恢复，使 AI 对话从演示能力进入设计师可持续使用的插件。

### AI 翻译

- 遍历选中 Frame 的文本节点，保留原文、节点 ID、目标语言与错误对象，分批调用模型并按 ID 将结果写回对应节点。
- 将 AI 请求、字体加载和画布写回拆成不同阶段；支持进度、取消、撤销、失败对象单独重试与部分成功保留。
- 随插件分发所需字体并检测本机缺失状态；写回后自动检查文本溢出、缺字、空结果和原文残留，把“翻译正确”推进到“画布可验收”。

### 任务与交付插件

- 完成登录、项目空间、版本与任务树、本地缓存和重开状态恢复，并加入列表、筛选、右键操作、交付物查看和任务状态回写。
- 将 Figma 本地文件、任务和交付版本建立绑定；上传成功后保存文件标识、版本和接口响应。
- 将上传、任务评论和消息通知拆成可恢复步骤：后续通知失败时只重试通知，不重复创建已经完成的版本，界面保留每一步完成时间和失败对象。

### 组件精灵：视觉语义搜索

- 支持文本描述、截图和当前选中节点三种输入，使用 SigLIP 视觉语义特征在大规模组件索引中召回候选。
- 统一组件元数据、缩略图缓存、向量索引和资源 URL；同文件直接定位，跨文件打开来源，权限允许时依据组件 key 创建保持链接的 Instance。
- 视觉模型只负责扩大召回范围，来源、权限、组件 key 与发布状态仍由程序确定性核验。

### 组件查重

- 提取缩略图、尺寸、节点类型、层级深度、名称和 Instance 特征，以视觉向量召回外观相似候选，再结合结构特征重新排序。
- 对远端图片、API 回源与本地缓存建立降级链路，向设计师展示相似度、来源文件、Page / Frame 和元数据，由人工完成最终合并判断。

### 母版更新

- 扫描外部 Instance，读取组件 key、来源文件、更新时间和已发布母版信息；视觉匹配负责召回名称变化或跨文件的相近候选。
- 用户确认后调用 Figma 原生 Swap，保留变量、Variant 和覆盖关系；批量处理中独立记录失败对象，不回滚已经完成的替换。

### 切图与布局工具

- 切图工具读取矢量轮廓、透明像素、可见内容和选区边界：普通图形计算几何质心，复杂轮廓结合像素分布估计视觉中心，再生成统一 Frame、缩放和对齐内容。
- 布局工具读取对象边界与相对位置，批量生成水平、垂直间距和尺寸标注，并支持更新、清除与异常对象提示。
- 图标审核结合可见内容、视觉中心、轮廓占比和安全区规则判断正常、贴边、超界与复杂轮廓，结果写回 Figma 画布供设计师逐项调整。

## 公共后端、插件工程与数据服务

- 八个插件保持独立仓库、独立版本化软件包与单插件回滚边界；统一 app / plugin / scripts 目录、manifest、入口、主题、构建脚本和消息格式。
- 通过 Python entry point 发现插件包并动态挂载 FastAPI 路由；统一处理 CORS / OPTIONS、认证信息、超时、open-url 和 JSON 错误。单个插件导入失败会被隔离，其余服务仍可启动。
- FastAPI 服务维护 SQLite 快照、团队空间、缩略图缓存和 REST API fallback；大文件按 Page / Frame 分段拉取并保存断点，调用方根据状态读取实时数据、缓存或本地快照。
- 多个组件插件共享元数据、缩略图与 SigLIP 向量索引，但运行时仍保持独立交付，避免把全部需求耦合进一个大工程。
- Figma Webview 无法直接访问部分本地图片路由时，由服务读取资源并返回 base64 data URI；前端按 data URI、远端 URL、默认图标三级降级。
- 渐进缩略图只在临近视口时入队，限制全局并发；离开视口通过 AbortController 取消请求，组件卸载时回收 Object URL，避免大量图片拖慢文字与视觉搜索。
- 快速测试脚本扫描插件和公共运行包：未变化时复用构建结果，有变化时增量编译、组装依赖、启动服务，并继续核验插件注册与基础路由。

## AIGC 工作流与生产自动化

- 将任务输入、角色与品牌素材、尺寸、命名和输出目录写成配置，自动创建或复用 Figma 画布、替换素材、生成页面，并输出 Banner、引擎图集、压缩包和交付记录。
- 对浏览器端生成工作流解析 Workflow JSON，为每个流程准备差异化输入，创建或复用画布、替换资源、触发节点并等待生成。
- 针对长时间任务记录步骤状态、心跳、日志和结果台账，支持断点续跑、下载和失败定位。
- 模型负责图片生成、局部编辑或视频节点等不可完全规则化的视觉结果；流程解析、素材替换、命名、尺寸校验、节点执行与产物保存由确定性程序控制，最终质量由人工验收。

## DCC Checker：无界面检查、修复与报告

- 根据扩展名、文件头和配置识别 DCC 类型与版本，路由到对应 Maya / 3ds Max 批处理宿主，区分正常文件、损坏文件和版本不匹配。
- 无界面运行 Pyblish Pipeline，采集 Context、Instance 和各检查插件结果；对可自动修复项执行修复后重新检查。
- 输出 JSON 与 HTML 报告，记录宿主、耗时、日志及修复前后状态，并准备命令行和服务两种调用入口。
- 使用超大场景、编码异常、无引用、损坏资源、多宿主版本和超时退出等样例做压力验证，避免工具只在单一演示文件上成功。

## 跨 Maya 版本的场景与 FBX 批处理

- 将上游输入收敛为业务版本、模型标识和源文件位置，由脚本建立固定目录、生成场景名并检查输入文件。
- 在不同 Maya 版本中依次生成绑定、召唤、角色配置和多组动作场景，处理宿主版本、路径、命名和输出规则差异。
- 通过作业队列顺序执行 Maya 任务，批量导出 Mesh 与动画 FBX；结束后回读文件数量、大小、缺失项和零字节产物。
- 目录生成、宿主处理、批量导出和结果校验已用真实样例跑通；尚未获得正式上游接口时使用 Adapter 模拟调用，并明确保留联调边界。

## 线上维护、发布与文档

- 面对上游接口分页行为变化造成的任务树空白，修正分页策略、加入同条件降级重试并补回归测试。
- 对外部 AI 服务工作区休眠导致的调用失败完成恢复，并将后端归属、维护入口和故障判断写进 README 与构建配置。
- 清理多个插件仓的旧分支和失效引用前先生成、验证恢复 Bundle；保留仍有价值的功能分支，保证治理操作可恢复。
- 把代码评审、持续集成、包构建、入口发现、发布与真实宿主验证固化为检查表；线上问题回写开发日志和本地知识库。
- 输出新人环境配置、Webhook 联通性测试、一键运行脚本及各插件使用文档，使开发、测试和用户入口形成闭环。

## 对 AI 能力边界的验证

我也尝试过把交互稿自动转换为视觉稿：读取文件结构、判断页面用途、搜索母版、复制或替换节点，并让模型结合截图与节点信息规划下一步。最终没有达到生产质量，问题集中在跨文件写入、业务语义、母版选择、Auto Layout、Instance 与团队视觉规范无法形成稳定映射。

这个方向被主动停止，没有包装成已完成产品。验证后保留下来的结论是：模型适合语义理解、候选召回和局部建议；范围明确的节点操作可以由程序验证；跨文件结构修改、资产写入和视觉决策必须依赖确定性工具、人工确认与真实文件回归。

## 公开边界

原始答辩材料与媒体只作为本地工作记录，不进入公开站点。公开页面没有复用内部资产或界面截图，所有名称、数据和接口均经过抽象处理；这里展示的是本人负责过的技术问题、实现方式、验证方法和能力边界。`,
      en: `# Game-art production tools, Figma AI plug-ins, and automation pipelines

This work comes from an AI tools technical-art internship at a large game studio. It covered Maya, Unreal Editor, the Figma plug-in sandbox, Python and C++, TypeScript and React, FastAPI, SQLite, visual-vector retrieval, versioned environments, and CI. The public case keeps the engineering problems and verification methods while removing internal project names, platforms, accounts, endpoints, business data, assets, repositories, paths, screenshots, and recordings.

## Maya and Unreal Editor tooling

- Built Maya hierarchy, naming, duplicate-object, texture, and material checks, separating safe repairs from artist-confirmed changes before organized export.
- Kept Maya host logic in Python while an embedded web UI reported structured steps, errors, progress, and results; tested window lifecycle, resource paths, host threads, and exception propagation.
- Extended an existing baking tool with original and half-resolution branches while preserving format, alpha, naming, directory, saved parameters, and legacy behavior.
- Designed serializable Unreal preset data in C++ for meshes, transforms, camera, viewport, lighting, LOD, and defaults; orchestrated save/apply/delete flows in Python and exposed stable operations through Blueprint libraries.
- Productized the preset as a Data Asset and handled nested actors, repeat application, attachment state, partial failure, and cleanup limited to objects created by the preset.

## Eight Figma production plug-ins

- AI assistant: compressed selected text, dimensions, hierarchy, components, and node relationships into bounded context; implemented streaming, stop, retry, history, Markdown, long-text handling, and recovery.
- AI translation: batched text nodes with stable IDs, separated model calls from font loading and canvas writes, preserved partial success, and checked overflow, missing glyphs, empty output, and untranslated text.
- Task and delivery tooling: restored login and project state, bound local files to tasks and versions, and split upload, comment, and notification into independently retryable steps.
- Component search and deduplication: combined SigLIP retrieval with component metadata and structural features, thumbnail caching, REST fallback, source, permission, and publication checks.
- Master updates: used visual matching only for candidate recall, then required user confirmation before native instance swap so variables, variants, and overrides remained intact.
- Icon and layout tools: estimated visual centers from vectors, alpha, visible pixels, and silhouette data; generated standard frames, spacing annotations, and safe-area feedback with deterministic canvas output.

## Shared services and delivery engineering

- Preserved independent repositories, versioned packages, and rollback boundaries while standardizing app/plugin/scripts layout, manifests, entry points, themes, build scripts, and message formats.
- Discovered plug-in packages through Python entry points and mounted FastAPI routes dynamically, isolating failed imports while standardizing CORS, authentication, timeouts, URLs, and JSON errors.
- Maintained SQLite snapshots, team-space data, thumbnail caches, segmented REST fallback, checkpoints, and a shared visual-vector index.
- Added progressive thumbnail queues, bounded concurrency, AbortController cancellation, Object URL cleanup, and multi-level image fallback for constrained Figma webviews.
- Built an incremental validation path covering source scanning, compilation, dependency assembly, service startup, plug-in discovery, and route checks, then delivered through review, CI, versioned packages, and real-host regression.

## AIGC automation and DCC batch systems

- Automated configuration-driven asset preparation, Figma page generation, AIGC workflow execution, banner and engine-atlas output, size and naming validation, packaging, and delivery records.
- Parsed workflow JSON and managed long-running generation with explicit step state, heartbeat, checkpoints, resume, downloads, logs, and result ledgers. Models produced visual candidates; deterministic automation controlled execution and humans judged quality.
- Routed Maya and 3ds Max files into headless Pyblish checks, optional repair and recheck, and JSON/HTML reports, with stress cases for corrupt files, version mismatch, large scenes, encoding, and timeout.
- Orchestrated multi-version Maya jobs that generated binding, configuration, and animation scenes before batch FBX export and post-run validation for counts, file sizes, missing outputs, and zero-byte artifacts.

## Engineering judgment

An experiment that attempted to turn interaction drafts into finished visual layouts was stopped after real-file testing exposed unstable mappings among screenshot semantics, cross-file components, Auto Layout, instances, and visual standards. The retained boundary was explicit: models can interpret intent and retrieve candidates; deterministic tools must own writes and validation; people remain responsible for high-level visual decisions.

The original presentation and media remain local work records. This public page uses only sanitized technical descriptions and a newly drawn abstract cover.`,
    },
  },
  {
    id: 'asset-delivery-organizer', title: 'Asset Delivery Organizer', category: 'pipeline',
    categoryLabel: { zh: '资产交付整理工作台', en: 'Asset delivery workbench' },
    summary: { zh: '面向外包交付的中文桌面工具：只读审计、可编辑整理方案、哈希复检、失败回滚与复检收据。', en: 'A Chinese desktop workbench for read-only delivery audits, editable organization plans, hash rechecks, rollback, and post-audit receipts.' },
    cover: '/media/repositories/production-tools/asset-delivery-plan.png',
    tags: ['PySide6', 'Python', '事务回滚', 'CLI / API'],
    repositoryUrl: 'https://github.com/Ubik42/asset-delivery-organizer',
    story: { zh: `# Asset Delivery Organizer

一批外包资产通常同时包含模型、贴图、UDIM、历史版本和说明文件。这个中文桌面工作台把交付信息、文件扫描、命名与贴图检查、安全整理、版本归档、复检收据和历史记录放进同一条可审查流程。

## 从只读审计到安全整理

- 递归扫描文件，记录稳定相对路径、SHA-256、媒体类型和命名字段；
- 检查命名格式、必需贴图通道和旧版本，同时拦截大小写冲突、路径穿越与符号链接逃逸；
- 先生成可编辑的 dry-run 整理方案，用户可以取消单项操作或修改目标路径；
- 执行前重新核对全部源哈希和目标冲突，失败时逆序回滚；
- 完成后重新扫描，并把计划、执行结果和剩余人工问题写入外部 JSON 收据。

## 可复现演示

仓库提供四组 CC0 确定性合成场景，共 100 个文件，覆盖干净交付、错误命名、缺失贴图、UDIM 批量和多供应商嵌套目录。推荐演示场景会从 12 个文件中识别 5 个问题，生成三项可执行整理计划；两个缺失贴图问题会如实保留给人工处理，不会由工具伪造资源。`, en: `# Asset Delivery Organizer

A PySide6 desktop workbench for supplier deliveries. Audits are strictly read-only; organization requires an editable dry-run plan, source-hash and collision checks, explicit approval, rollback, post-audit, and an external receipt. Four deterministic CC0 scenarios cover clean, faulty, UDIM, and multi-vendor deliveries.` },
    images: [
      { src: '/media/repositories/production-tools/asset-delivery-plan.png', alt: { zh: '资产整理方案与执行前预检', en: 'Asset organization plan and preflight' } },
      { src: '/media/repositories/production-tools/asset-delivery-issues.png', alt: { zh: '外包交付问题证据与筛选界面', en: 'Supplier delivery issue evidence' } },
      { src: '/media/repositories/production-tools/asset-delivery-receipt.png', alt: { zh: '整理完成后的复检记录与执行收据', en: 'Post-audit record and execution receipt' } },
      { src: '/media/repositories/production-tools/asset-delivery-blocked.png', alt: { zh: '目标文件冲突时禁用执行', en: 'Execution blocked by a destination collision' } },
    ],
  },
  {
    id: 'maya-scene-checker', title: 'Maya 场景交付检查器', category: 'pipeline',
    categoryLabel: { zh: 'Maya 只读交付门禁', en: 'Read-only Maya delivery gate' },
    summary: { zh: '在 Maya 2025 中扫描拓扑、命名、引用与场景状态，把问题落成可定位 Evidence 和可交付报告。', en: 'A Maya 2025 checker that turns topology, naming, reference, and scene findings into locatable evidence and delivery reports.' },
    cover: '/media/repositories/production-tools/maya-scene-overview.png',
    tags: ['Maya 2025', 'PySide6', '拓扑检查', 'Evidence'],
    repositoryUrl: 'https://github.com/Ubik42/maya-scene-checker',
    story: { zh: `# Maya 场景交付检查器

这是面向模型美术、外包验收和 TA 的 Maya 只读交付门禁。它不会发现问题就直接修改场景，而是先生成稳定快照，再用 Rule、Issue 与 Evidence 说明“哪个对象、哪个组件、为什么不合规”。

## 已完成能力

- 检查 N 边面、非流形边、Lamina Face、零面积面、退化边、命名、引用与场景级状态；
- 按严重度筛选问题，选中问题即可定位到 Maya 对象、面、边或点，并能恢复原选择；
- 对修改前后的稳定对象身份建立定位索引，避免改名后报告完全失效；
- 导出 JSON 与 Markdown 报告，保留规则版本、证据、场景身份与统计结果；
- 所有检查默认只读，错误和高风险状态在修改发生前明确拦截。

## 真实验证与素材

版本 0.2.0 已在 Maya 2025.3.3 完成可见宿主验收，并通过 Maya 2025 mayapy 自动验证。仓库包含五组程序化生成的 Maya ASCII 场景，覆盖干净交付、拓扑问题、外包场景级错误、混合资产批量排查和改名后的证据定位；八张中文截图展示空态、通过、问题详情、拦截与报告导出。`, en: `# Maya Scene Delivery Checker

A read-only Maya 2025 delivery gate that produces versioned rules, issues, locatable component evidence, and JSON/Markdown reports. Version 0.2.0 has passed visible Maya 2025.3.3 host acceptance and mayapy validation with five deterministic demo scenes.` },
    images: [
      { src: '/media/repositories/production-tools/maya-scene-overview.png', alt: { zh: 'Maya 场景拓扑问题总览', en: 'Maya topology issue overview' } },
      { src: '/media/repositories/production-tools/maya-scene-evidence.png', alt: { zh: 'N 边面问题的组件级证据详情', en: 'Component-level evidence for an n-gon' } },
      { src: '/media/repositories/production-tools/maya-scene-blocked.png', alt: { zh: '非流形边高风险交付拦截', en: 'High-risk non-manifold delivery block' } },
      { src: '/media/repositories/production-tools/maya-scene-report.png', alt: { zh: '结构化报告导出完成状态', en: 'Structured report export complete' } },
    ],
  },
  {
    id: 'maya-garment-preparation', title: 'Maya Garment Preparation', category: 'pipeline',
    categoryLabel: { zh: 'Maya 服装准备插件', en: 'Maya garment preparation plug-in' },
    summary: { zh: '将基础版片 UV 与高模位置安全传递到重拓扑版片，修改前预检、执行后复检，并支持一次 Undo。', en: 'Safely transfers panel UVs and high-resolution positions to retopology meshes with preflight, post-validation, rollback, and one-step undo.' },
    cover: '/media/repositories/production-tools/maya-garment-host.png',
    tags: ['Maya 2025', 'PySide6', 'transferAttributes', 'Undo'],
    repositoryUrl: 'https://github.com/Ubik42/maya-garment-preparation',
    story: { zh: `# Maya Garment Preparation

面向 Marvelous Designer 等服装流程进入 Maya 后的版片准备工作。工具识别基础 UV 版片、高模与重拓扑版片三类输入，将多次高风险手工操作收束为可预览、可拒绝、可复检、可一次撤销的工作流。

## 当前 0.2.0 工作流

- 检查选择顺序、Mesh 类型、空拓扑、非流形、重叠面、UV、引用状态和既有 History；
- 通过 Maya transferAttributes 依次传递 UV 与顶点位置；
- 所有写操作进入单个 Undo Chunk，执行失败或读回复检失败时自动撤销；
- 只管理本次运行创建的 History 节点，不粗暴删除目标既有 History；
- 分析单边界环的对应、绕序、轮廓误差与对称歧义，多解时拒绝猜测；
- 提供可停靠中文工作台、Shelf 入口、结构化执行收据和七组 CC0 演示场景。

## 当前状态

MVP 已有公开仓库与 0.2.0 文档；最新中文工作台已经在真实 Maya 2025 GUI 中完成首次打开、重复打开、热重载和关闭清理验证。厚度生成、自动缝边和重叠清理仍未完成，因此没有写成现有能力。`, en: `# Maya Garment Preparation

A focused Maya 2025 plug-in for safe UV and position transfer across base panels, high-resolution garments, and retopology panels. The 0.2.0 workflow performs preflight, one-chunk execution, read-back validation, rollback, boundary ambiguity checks, and deterministic CC0 demo scenes.` },
    images: [
      { src: '/media/repositories/production-tools/maya-garment-host.png', alt: { zh: 'Maya 2025 中停靠的服装准备工作台与演示 Mesh', en: 'Garment preparation workspace docked in Maya 2025' } },
      { src: '/media/repositories/production-tools/maya-garment-ready.png', alt: { zh: '服装准备工作台的输入与操作总览', en: 'Garment preparation input and action overview' } },
      { src: '/media/repositories/production-tools/maya-garment-blocked.png', alt: { zh: '拓扑问题在执行前被安全拦截', en: 'Topology issue blocked before execution' } },
      { src: '/media/repositories/production-tools/maya-garment-complete.png', alt: { zh: 'UV 与位置传递后的复检和执行收据', en: 'Post-validation and receipt after transfer' } },
    ],
  },
  {
    id: 'unreal-asset-batch-auditor', title: 'Unreal Asset Batch Auditor', category: 'pipeline',
    categoryLabel: { zh: 'Unreal 资产批量审计插件', en: 'Unreal batch asset auditor' },
    summary: { zh: 'UE 5.8.1 原生中文 Slate 面板，批量审计 Static Mesh 预算、LOD、材质槽和 Nanite，并输出证据报告。', en: 'A native UE 5.8.1 Slate panel for batch auditing Static Mesh budgets, LODs, material slots, and Nanite with evidence reports.' },
    cover: '/media/repositories/production-tools/unreal-auditor-run.png',
    tags: ['Unreal 5.8', 'C++ / Python', 'Slate', '只读审计'],
    repositoryUrl: 'https://github.com/Ubik42/unreal-asset-batch-auditor',
    story: { zh: `# Unreal Asset Batch Auditor

面向 Unreal 项目 Static Mesh 的只读批量审计插件。项目 Profile 定义实际预算，Editor-only C++ 模块从显式选择中采集元数据，Python 负责编排规则与 JSON 报告；扫描不会保存资产、重建网格或自动修改 Nanite。

## 三步工作流

1. 在中文 Slate 面板选择桌面、移动端或宽松复核规则，也可以导入项目自定义 Profile；
2. 从 Content Browser 读取显式选择，分批采集 LOD0 三角形、顶点、材质槽、LOD 数量和 Nanite 状态；
3. 搜索与筛选 Issue，查看实测值、阈值和 Evidence，并打开版本化 JSON Report。

## 真实宿主证据

插件已在 UE 5.8.1 完成 Win64 Development Editor 构建、命令行真实宿主运行和可见 Static Mesh Editor 复核。仓库 Demo 会从本机 Engine 内容确定性生成 24 个项目资产；测试前后九个 Engine BasicShapes 的 SHA-256 保持不变。分批进度、取消和部分失败汇总也已在真实宿主验证。`, en: `# Unreal Asset Batch Auditor

A read-only Unreal 5.8.1 Editor plug-in. Native C++ collects explicitly selected Static Mesh metadata, Python applies versioned profiles, and the Chinese Slate panel produces evidence-backed JSON reports without saving assets, rebuilding meshes, or changing Nanite.` },
    images: [
      { src: '/media/repositories/production-tools/unreal-auditor-profile.png', alt: { zh: 'Unreal 插件中的项目审计规则选择', en: 'Audit profile selection in Unreal' } },
      { src: '/media/repositories/production-tools/unreal-auditor-run.png', alt: { zh: '批量资产审计结果、阈值与证据', en: 'Batch audit results, thresholds, and evidence' } },
      { src: '/media/repositories/production-tools/unreal-auditor-report.png', alt: { zh: '可追溯 JSON 审计报告', en: 'Traceable JSON audit report' } },
    ],
  },
  {
    id: 'rez-studio-launcher', title: 'Rez Studio', category: 'pipeline',
    categoryLabel: { zh: 'DCC 工作站启动器', en: 'DCC workstation launcher' },
    summary: { zh: '根据项目、软件版本和 Rez 包环境启动 Maya 等 DCC 的 Windows 桌面应用。', en: 'A Windows desktop launcher that resolves project, application version, and Rez package context before starting a DCC.' },
    cover: '/media/repositories/rez-studio.png', tags: ['Rez', 'Tauri', 'React', 'Python'], repositoryUrl: 'https://github.com/Ubik42/rez-studio-launcher',
    story: { zh: `# Rez Studio

面向 Windows DCC 工作站的项目感知软件启动器。同一台机器进入不同项目时，启动器根据项目配置选择 DCC 版本、插件集合和 Rez 环境，而不是直接打开一个固定 EXE。

## 工作流程

- 登录或选择本机用户，读取可访问项目。
- 从项目软件库选择 Maya 等应用及批准版本。
- 调用 Rez 解析依赖并检查启动环境。
- 记录解析、启动与失败信息，便于管线人员定位工作站问题。

项目使用 Tauri 2 + React 19 构建桌面界面，以 Python 服务连接 Rez 3.4；同时提供 CLI 协议和 Windows 安装包。`, en: `# Rez Studio

A project-aware Windows DCC launcher. It selects the approved DCC version, plug-in set, and Rez environment for the current project instead of opening a fixed executable.

The Tauri 2 and React desktop application connects to Rez through a Python service, exposes launch diagnostics, and ships a Windows installer plus a documented CLI protocol.` },
    images: [{ src: '/media/repositories/rez-studio.png', alt: { zh: 'Rez Studio 项目软件库', en: 'Rez Studio project application library' } }],
  },
  {
    id: 'mayascope', title: 'MayaScope', category: 'pipeline',
    categoryLabel: { zh: 'Maya 场景调查与运行时诊断', en: 'Maya scene and runtime observatory' },
    summary: { zh: '把大型 Maya 场景组织成可查询快照、依赖图、运行时足迹和回归证据，用于定位根因而非只列错误。', en: 'Turns Maya scenes into queryable snapshots, dependency graphs, runtime footprints, and regression evidence for root-cause diagnosis.' },
    cover: '/media/repositories/production-tools/mayascope-host.png', tags: ['Maya 2025', 'Scene Graph', 'Profiler', 'Regression'], repositoryUrl: 'https://github.com/Ubik42/MayaIndieTool',
    story: { zh: `# MayaScope

原 MayaIndieTool 已经演化为 MayaScope：面向复杂 Maya 场景的调查工作区。它采集不可变 SceneSnapshot，把引用、依赖关系、未知插件、表达式、scriptJob、回调足迹和性能信号投影到可交互的 Atlas，而不是继续堆放零散按钮。

## 当前工作区

- Scene Clinic 将规则结果聚合为可追溯 Finding，并支持项目基线与增量回归；
- Query Kernel 用有界 CSR 图索引执行邻域和根因查询，限制节点、边、深度与 deadline；
- Runtime Observatory 区分可观测与不可观测状态，不把 batch 中缺失的 scriptJob 数据写成零；
- Reference Orbit、Dependency Lineage 和 Plugin Ghost Signal 用于检查引用链、依赖序列和缺失插件影响；
- 真实 Maya GUI 生命周期验证覆盖启动、界面绘制、重复打开、热重载、关闭与回调清理。

项目仍在开发中；Crash Bisect 与部分 Failure Prism 能力明确保留为后续方向。`, en: `# MayaScope

MayaIndieTool has evolved into MayaScope, an investigative Maya 2025 workspace for immutable scene snapshots, reference and dependency lineage, runtime footprints, bounded graph queries, project baselines, and regression evidence. Crash bisect remains under development.` },
    images: [
      { src: '/media/repositories/production-tools/mayascope-host.png', alt: { zh: 'Maya 2025 中运行的 MayaScope 调查工作区', en: 'MayaScope running in Maya 2025' } },
      { src: '/media/repositories/production-tools/mayascope-dependency.png', alt: { zh: 'MayaScope 依赖序列与关系证据', en: 'MayaScope dependency lineage evidence' } },
      { src: '/media/repositories/production-tools/mayascope-plugin.png', alt: { zh: '缺失插件与未知节点影响分析', en: 'Missing plug-in and unknown-node impact analysis' } },
    ],
  },
  {
    id: 'mayacraft', title: 'MayaCraft', category: 'pipeline',
    categoryLabel: { zh: 'Maya 综合插件', en: 'Maya production plug-in' },
    summary: { zh: 'Maya 2025 中文角色工作区：声明式 Rig Graph、形变 MRI、动画重定向、Contact IK 与可撤销验证。', en: 'A Chinese Maya 2025 character workspace for declarative rig graphs, deformation MRI, retargeting, contact IK, and undoable verification.' },
    cover: '/media/repositories/production-tools/mayacraft-workspace.png', tags: ['Maya 2025', 'Rig Graph', 'Retarget', 'Contact IK'], repositoryUrl: 'https://github.com/Ubik42/MayaCraft',
    story: { zh: `# MayaCraft

MayaCraft 已收口为面向 Maya 2025 的中文角色绑定与动画工作区。首页会从真实场景发现角色、投影关节结构并与 Maya Selection 双向同步；写操作遵循“预览 → 应用 → 读回验证 → Undo”。

## 当前展示切片

- 声明式 Rig Graph 使用 Module、Socket、Node 和物理行为合同生成结构 diff，再增量构建真实 FK / RP IK / Pole 与基础 Space Switch；
- Deformation MRI 从 skinCluster 读取权重，显示归一化、熵、碎片与缺失 influence，并支持可撤销修复；
- Motion Magnetism 分析速度、加速度、jerk、轨迹与接触区间；
- Retarget 工作区处理 namespace、比例、轴空间和 jointOrient 差异，以 Ghost Pose 预览并写入独立 Animation Layer；
- Contact IK 通过 FABRIK 和共同骨盆补偿形成零写入预览，应用后逐帧验证脚底锚点。

当前展示版已在 Maya 2025 完成真实 GUI 生命周期验证。Face PSD/RBF、完整 FK/IK 无跳变匹配和拓扑变化蒙皮迁移仍属于后续路线。`, en: `# MayaCraft

MayaCraft is a Chinese Maya 2025 character workspace for scene-aware character discovery, declarative rig graphs, deformation diagnostics, motion analysis, retarget previews, contact IK, read-back validation, and single-transaction undo.` },
    images: [
      { src: '/media/repositories/production-tools/mayacraft-workspace.png', alt: { zh: 'MayaCraft 角色工作区与场景角色投影', en: 'MayaCraft character workspace' } },
      { src: '/media/repositories/production-tools/mayacraft-rig.png', alt: { zh: '声明式 Rig Graph 与构建差异', en: 'Declarative rig graph and build diff' } },
      { src: '/media/repositories/production-tools/mayacraft-deformation.png', alt: { zh: 'Deformation MRI 蒙皮权重诊断', en: 'Deformation MRI skin-weight diagnostics' } },
      { src: '/media/repositories/production-tools/mayacraft-retarget.png', alt: { zh: '动画重定向与 Contact IK 工作区', en: 'Retarget and Contact IK workspace' } },
    ],
  },
  {
    id: 'pyarsenal', title: 'PyArsenal', category: 'other-tools',
    categoryLabel: { zh: 'Python 脚本管理器', en: 'Python script manager' },
    summary: { zh: '通过标签、环境隔离和一键编译管理分散 Python 脚本的桌面工具。', en: 'A desktop tool for organizing scattered Python scripts with tags, isolated environments, and one-click compilation.' },
    cover: '/media/repositories/pyarsenal.png', tags: ['Python', 'Desktop App', 'Script Library'], repositoryUrl: 'https://github.com/Ubik42/PyArsenal',
    story: { zh: `# PyArsenal

PyArsenal 面向需要维护大量零散脚本的 Python 开发者。它把脚本登记、标签检索、运行环境和编译入口集中到一个图形界面中，减少“脚本在哪、依赖是什么、如何交付”的重复管理成本。

具体能力与使用方式以仓库当前 README 和实现为准。`, en: `# PyArsenal

PyArsenal is a graphical manager for Python developers who maintain many scripts. It centralizes registration, tags, execution environments, and compilation so a script library remains searchable and deliverable.` },
  },
  {
    id: 'neothesia', title: 'Neothesia', category: 'other-tools',
    categoryLabel: { zh: '钢琴练习应用', en: 'Piano practice application' },
    summary: { zh: '持续维护的钢琴学习分支，加入刻意练习、反馈、曲库、乐谱同步与 Pianoteq 工作流。', en: 'An actively maintained piano-learning fork with deliberate practice, feedback, repertoire, notation, and Pianoteq workflows.' },
    cover: '/media/repositories/neothesia.png', tags: ['Rust', 'WGPU', 'MIDI', 'VST3'], repositoryUrl: 'https://github.com/Ubik42/Neothesia',
    story: { zh: `# Neothesia

这是在开源 Neothesia 基础上持续维护的钢琴学习分支，开发重点从单纯的瀑布流演奏界面扩展到可重复的刻意练习。

## 本分支的主要工作

- 等待正确音符、左右手选择、循环、小节号、节拍细分、Count-in 与自适应速度。
- 按音高、时值、力度、踏板、左右手和小节生成练习反馈，并保存练习记录与建议。
- 本地曲库、监视文件夹、搜索、收藏、练习队列、来源与许可记录。
- MIDI 与 MusicXML / MXL 对齐、分页乐谱跟随和演奏高亮。
- 外部 MIDI 路由以及 Windows 下直接加载 Pianoteq VST3 的实验性乐器路径。

项目仍处于源码开发阶段，VST3 广泛兼容性、安装更新和更多实体设备长时间测试仍在推进。`, en: `# Neothesia

This independently maintained fork extends Neothesia from a falling-note visualizer into a deliberate-practice application with looping, hand selection, count-in, adaptive tempo, detailed feedback, a local repertoire library, synchronized MusicXML notation, and Pianoteq workflows.

The direct VST3 path is still experimental and the project is currently distributed as source rather than a packaged end-user release.` },
    images: [{ src: '/media/repositories/neothesia.png', alt: { zh: 'Neothesia 钢琴练习界面', en: 'Neothesia piano practice interface' } }],
  },
  {
    id: 'artflow-agent', title: 'ArtFlow Agent', category: 'ai-agent',
    categoryLabel: { zh: 'AIGC + Agent', en: 'AIGC + Agent' },
    summary: { zh: '以 Agent 为控制层、ComfyUI 为生成运行时的游戏美术迭代与可复现交付流程。', en: 'A game-art iteration pipeline using an agent as the control layer and ComfyUI as the generation runtime.' },
    cover: '/media/repositories/artflow.jpg', tags: ['Agent', 'ComfyUI', 'PydanticAI', 'Evaluation'], repositoryUrl: 'https://github.com/Ubik42/ArtFlow-Agent',
    story: { zh: `# ArtFlow Agent

ArtFlow Agent 面向游戏美术迭代，把 Agent 放在控制层，把 ComfyUI 作为实际生成运行时。它处理的是从 Brief、环境检查、配方选择、人工批准到候选评估和可复现交付的完整过程，而不是开放式聊天。

## 已完成的垂直流程

- 确定性规划，以及可选的 PydanticAI 结构化规划。
- 检查本地 ComfyUI、上传输入、提交任务、监控状态并下载结果。
- 使用受约束的工作流 Recipe，阻止 Agent 任意生成未知节点图。
- 外部保存 Run 状态、审批、事件日志与生成回执。
- 生成候选 Contact Sheet，进行人工选择、轨迹检查与资产校验。
- 将最终结果、配置和校验值打包为可复现 Run Package。

默认路径离线且确定；只有显式提供模型时才调用 LLM，外部生成也必须先经过人工批准。`, en: `# ArtFlow Agent

ArtFlow Agent uses an agent as the control plane and ComfyUI as the generation runtime for game-art iteration. The implemented slice covers brief validation, environment inspection, reviewed recipes, approval-gated execution, persisted run state, contact sheets, candidate selection, evaluation, and reproducible packaging.

The default path is deterministic and offline. Model-backed planning is opt-in, and generation cannot start before explicit approval.` },
    images: [{ src: '/media/repositories/artflow.jpg', alt: { zh: 'ArtFlow Agent 生成候选接触表', en: 'ArtFlow Agent candidate contact sheet' } }],
  },
  {
    id: 'comfyui-production-nodes', title: 'ComfyUI Production Nodes', category: 'ai-agent',
    categoryLabel: { zh: 'ComfyUI 自定义节点', en: 'ComfyUI custom nodes' },
    summary: { zh: '为生成工作流补充约束检查、依赖检查、生成回执和 DCC / 引擎交付清单。', en: 'Custom nodes adding constraint checks, dependency checks, generation receipts, and DCC / engine handoff manifests.' },
    cover: '/media/repositories/comfyui.png', tags: ['ComfyUI', 'Python', 'Provenance', 'Handoff'], repositoryUrl: 'https://github.com/Ubik42/ComfyUI-Production-Nodes',
    story: { zh: `# ComfyUI Production Nodes

ComfyUI 已经负责图像生成；这个节点包补足生成前后的生产环节。它可以在昂贵任务开始前检查尺寸、Denoise、批量预算、模型和自定义节点依赖，并在完成后写出生成回执与 DCC / 引擎交付清单。

## 自定义节点

- Production Constraint Check：检查尺寸、批量、Denoise 与百万像素预算。
- Production Dependency Check 与 ComfyUI Inventory：发现本地模型和节点并报告缺失项。
- Workflow Contract Check：按可移植 Contract 校验输入 Slot 与参数范围。
- Generation Receipt 与 Receipt Writer：记录模型、Prompt、Seed、工作流与 Schema，并安全写入 JSON。
- Batch Handoff Manifest：为 Unreal、Unity、Maya、Blender、Houdini 等目标生成可移植交付元数据。

仓库包含本机 ComfyUI 的真实生成结果、对应 API Workflow 和节点写出的 Receipt；节点本身不绑定具体模型，也不接管渲染器。`, en: `# ComfyUI Production Nodes

This package adds production checks around an existing ComfyUI graph: dimensions and budget validation, dependency inventory, workflow contracts, generation receipts, contained JSON writes, and portable DCC / engine handoff manifests.

The repository includes a real local ComfyUI output, its API workflow, and the receipt written by the package. The nodes remain model- and renderer-independent.` },
    images: [
      { src: '/media/repositories/comfyui.png', alt: { zh: '本机 ComfyUI 生成结果', en: 'Locally generated ComfyUI output' } },
      { src: '/media/repositories/comfyui-workflow.png', alt: { zh: 'ComfyUI 自定义节点工作流', en: 'ComfyUI custom-node workflow' } },
    ],
  },
];
