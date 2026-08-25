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
  repositoryUrl: string;
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
    id: 'aitoolta',
    title: 'AI ToolTA',
    category: 'pipeline',
    categoryLabel: { zh: 'DCC 与引擎工具管线', en: 'DCC and engine tool pipeline' },
    summary: { zh: '面向 Maya、Unreal、Blender、Houdini 等宿主的技术美术工具合集与共享工程底座。', en: 'A technical-art tool portfolio and shared engineering foundation for Maya, Unreal, Blender, Houdini, and other hosts.' },
    cover: '/media/repositories/aitoolta.png',
    tags: ['Maya', 'Unreal', 'Python', 'Pipeline'],
    repositoryUrl: 'https://github.com/Ubik42/AIToolTA',
    story: {
      zh: `# AI ToolTA

AI ToolTA 是整套 DCC 与游戏引擎技术美术工具的公开总入口。母仓维护共享界面、事务记录、Agent 运行边界、证据工具与统一验证脚本；需要在具体宿主中安装的产品保持独立仓库。

## 主要方向

- **跨 DCC 资产规则：**统一描述单位、命名、拓扑、UV、材质与变换规则，再由 Maya、Blender、3ds Max、Houdini 和 MotionBuilder 适配器采集与修复。
- **动画与引擎往返：**检查 Maya 动画、Unreal Socket、Level Sequence 与交付数据之间的一致性。
- **角色与毛发交付：**覆盖角色标定、Groom 导出、空间挂接与可审查的资产包。
- **贴图与平台变体：**连接 Substance 输出、Unreal 导入和 PC / Mobile 资源约束。
- **安全自动化：**在修改场景前预览事务，并记录执行结果、差异、回滚和证据。

## 展示依据

作品包含 Maya 2024 与 Unreal 5.4 中的真实宿主截图、公开仓库、结构化运行记录和人工测试包。尚未完成真实宿主验证的部分会明确标为原型。`,
      en: `# AI ToolTA

AI ToolTA is the public index and shared engineering foundation for a set of DCC and game-engine technical-art tools. Host-installable products remain independent repositories.

## Main areas

- Cross-DCC asset rules and safe repair.
- Maya / Unreal animation and Sequencer round-trip inspection.
- Character, groom, socket, and spatial handoff.
- Substance / Unreal texture and platform variants.
- Previewable scene transactions, receipts, rollback, and evidence.

The portfolio uses real Maya 2024 and Unreal 5.4 captures, public repositories, structured run records, and manual test packages. Unverified integrations are labeled as prototypes.`,
    },
    images: [
      { src: '/media/repositories/aitoolta.png', alt: { zh: 'Maya 中运行的 AI ToolTA 资产检查工具', en: 'AI ToolTA asset inspection running in Maya' } },
      { src: '/media/portfolio/animation-roundtrip-host.png', alt: { zh: 'Unreal 中运行的动画往返检查工具', en: 'Animation round-trip inspection running in Unreal' } },
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
    id: 'maya-indie-tool', title: 'MayaIndieTool', category: 'pipeline',
    categoryLabel: { zh: 'Maya 独立工具集', en: 'Maya utility collection' },
    summary: { zh: '早期 Maya 独立脚本与制作辅助工具集合，记录从单点脚本走向完整插件的开发过程。', en: 'An early collection of Maya production scripts documenting the path from focused utilities to full plug-ins.' },
    cover: '/media/repositories/maya-indie.png', tags: ['Maya', 'Python', 'PyMEL'], repositoryUrl: 'https://github.com/Ubik42/MayaIndieTool',
    story: { zh: `# MayaIndieTool

这是早期 Maya 独立工具的归档集合，重点是把建模、场景整理和重复操作拆成可以直接运行的小工具。它保留了个人 Maya 工具开发从单文件脚本、Shelf 入口到模块化工具集的演进过程。

详情以仓库 README 和源代码中的实际工具入口为准。`, en: `# MayaIndieTool

An archive of early standalone Maya utilities for modeling, scene organization, and repetitive production operations. It documents the progression from single-file scripts and shelf entries toward modular Maya tooling.` },
  },
  {
    id: 'mayacraft', title: 'MayaCraft', category: 'pipeline',
    categoryLabel: { zh: 'Maya 综合插件', en: 'Maya production plug-in' },
    summary: { zh: '覆盖绑定、动画、蒙皮和技术调试的 Maya 综合插件与公共工具层。', en: 'A Maya production plug-in spanning rigging, animation, skinning, technical debugging, and shared utilities.' },
    cover: '/media/repositories/mayacraft.png', tags: ['Maya', 'Python', 'PySide', 'Rigging'], repositoryUrl: 'https://github.com/Ubik42/MayaCraft',
    story: { zh: `# MayaCraft

MayaCraft 将角色制作中分散的绑定、动画、蒙皮与技术检查功能组织为统一插件。项目强调可重复使用的后端 Utility 与清晰的界面入口，并保留 Pose、Rigged 角色和测试素材用于验证真实制作流程。

## 覆盖范围

- 骨骼、控制器和约束辅助。
- 蒙皮、权重与角色制作操作。
- 动画与 Pose 数据管理。
- 命名、属性连接和场景技术检查。`, en: `# MayaCraft

MayaCraft organizes rigging, animation, skinning, and technical checks into one Maya plug-in with reusable utility layers and production fixtures for poses and rigged characters.` },
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
