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
    title: '最最 AI 友好的高性能引擎',
    category: 'engine-games',
    categoryLabel: { zh: '自研游戏引擎', en: 'Custom game engine' },
    summary: { zh: '从原生 Editor、C# Gameplay、资产 Cook 到 D3D12/Vulkan 商业 Raster 和独立 Player 的 C++20 游戏引擎。', en: 'A C++20 game engine spanning a native editor, C# gameplay, asset cooking, D3D12/Vulkan commercial raster rendering, and standalone players.' },
    cover: '/media/repositories/major-updates/noemancer-sponza-atrium.webp',
    tags: ['C++20', 'D3D12 / Vulkan', 'C#', 'MCP'],
    repositoryUrl: 'https://github.com/Ubik42/Noemancer',
    story: {
      zh: `# 最最 AI 友好的高性能引擎

Noemancer 是我从零开发的 C++20 游戏引擎。它已经不只是一个渲染 Demo：当前可以在原生 Editor 中组织场景、运行 C# Gameplay、导入并 Cook 资产，最后打包为不依赖 Editor 的 Windows Player。这条链路之下是自研的 ECS Runtime、D3D12/Vulkan 渲染、物理、动画、资产格式与编辑器事务系统。

## 从建立工程到独立运行

- Project Hub 管理创建、打开和恢复工程；Scene View、Outliner、Inspector、Asset Browser、Console 与 Animation Graph 组成完整编辑工作区。
- Edit World 与 Play World 互相隔离，运行时改动不会污染编辑场景；需要的结果可选择性 Apply Back，并进入同一套 Undo / Redo。
- Gameplay 层使用 .NET 10 / C# 热重载；Runtime 集成 Flecs ECS、Jolt 物理、ozz 骨骼动画、GPU Skinning、RmlUi、输入、音频、VFX、Prefab 和存档。
- NoemancerPlatformer 已经贯通“项目 UI / 输入 → C# Gameplay → Cook → Package → 独立 Player”，用于验证游戏侧的完整生命周期。

## D3D12 / Vulkan 渲染管线

- SDL_GPU 后端让 D3D12 与 Vulkan 共享资源、Shader 和 Render Graph 合同，同时保留各后端的 Pass 时间与诊断回执。
- Raster 主路径包含 Forward PBR、split-sum IBL、四级 CSM、Point/Spot 阴影、GPU 视锥裁剪与间接绘制。
- 画面管线已接入四 LUT 动态天空、Aerial Perspective、共享 HiZ、SSR、SSGI、TAA、GTAO、双边降噪、Bloom、曝光调色和 ACES Tone Mapping。
- RenderLab 使用 Intel Sponza 2022 进行实时验证：约 205 万顶点、1124 万索引、405 个 primitive 和 72 张纹理。页面中的画面均来自 Release 运行捕获。
- RTX 4080 上已完成 D3D12/Vulkan 的 BLAS / TLAS 构建、Barrier、Fence 和释放测试；当前阶段用于确认底层资源边界，可见光追与 RTGI 仍在后续路线中。

## 资产 Cook 与发布

- 导入 GLB、JSON glTF 与 FBX，使用 meshoptimizer 处理几何，烘焙 Mesh、Animation、KTX2、Sprite Atlas 和 Tilemap 数据。
- Cook 产物由源文件、配方、目标 Profile 和工具版本共同寻址；Runtime 加载前复核范围、Schema 与 SHA-256。
- Windows Player 只带运行时资产、app-local .NET、VC Runtime、Shader Manifest 和第三方 NOTICE，不会在玩家机器上临时解析源 FBX / glTF。

## 编辑器与 Agent 共用命令系统

引擎的 C++ Command Registry 同时服务 Editor、direct JSON、CLI 和 MCP。场景、项目、资产注册表和运行时诊断以稳定 ID、Schema、Revision 和有限观察结果公开；自动化遵循 **Observe → Plan → Apply → Receipt → Undo / Redo**，连接当前 Editor 的权威 World 与撤销记录，不建立第二份场景数据库，也不把 Flecs、Jolt 或 SDL 句柄暴露给 Agent。

## 当前状态

项目处于 Pre-alpha，目前主要验证 Windows x64。可稳定对外的插件 SDK、跨平台发行、生产网络、签名安装器、可见硬件光追、RTGI 与 VSM 仍在后续计划中。当前展示重点是已经真正跑通的 Editor—Runtime—Cook—Player 链路与实时渲染结果。`,
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
    images: [
      { src: '/media/repositories/major-updates/noemancer-editor.webp', alt: { zh: 'Noemancer 中文 Editor：场景、层级、Inspector、资产与 Agent Context', en: 'Noemancer Chinese editor workspace' } },
      { src: '/media/repositories/major-updates/noemancer-sponza-atrium.webp', alt: { zh: 'D3D12 中实时运行的 Intel Sponza 2022 宫殿中庭', en: 'Intel Sponza 2022 atrium running in real time on D3D12' } },
      { src: '/media/repositories/major-updates/noemancer-sponza-balcony.webp', alt: { zh: 'Sponza 上层回廊与外部 glTF 材质依赖', en: 'Sponza balcony and external glTF material dependencies' } },
      { src: '/media/repositories/major-updates/noemancer-commercial-raster.webp', alt: { zh: 'PBR、阴影、Bloom 与 ACES 的商业 Raster 基准', en: 'Commercial raster benchmark with PBR, shadows, Bloom, and ACES' } },
      { src: '/media/repositories/major-updates/noemancer-sky.webp', alt: { zh: '四 LUT 动态天空、大气与 Aerial Perspective', en: 'Four-LUT dynamic sky, atmosphere, and aerial perspective' } },
      { src: '/media/repositories/major-updates/noemancer-ssr-ssgi.webp', alt: { zh: 'RenderLab 中启用 SSR、SSGI 与时域处理', en: 'SSR, SSGI, and temporal processing in RenderLab' } },
    ],
  },
  {
    id: 'noemancer-software-rasterizer',
    title: 'CPU 软件光栅化实验室',
    category: 'engine-games',
    categoryLabel: { zh: '实时图形与渲染基础', en: 'Realtime graphics fundamentals' },
    summary: {
      zh: 'C++20 CPU 参考光栅器：手动完成三角形覆盖、透视正确插值、Z-Buffer 与逐像素着色，一次导出十种效果和诊断缓冲。',
      en: 'A C++20 CPU reference rasterizer with triangle coverage, perspective-correct interpolation, Z-buffering, pixel shading, and ten visual or diagnostic outputs.',
    },
    cover: '/media/repositories/software-rasterizer/07_matcap.png',
    tags: ['C++20', 'CPU Raster', 'OpenMP', 'Graphics Debugging'],
    repositoryUrl: 'https://github.com/Ubik42/NoemancerSoftwareRasterizer',
    story: {
      zh: '# CPU 软件光栅化实验室\n\n这是一个与 Noemancer 完整 GPU 渲染器互补的小型图形学实验。它不调用 OpenGL、DirectX 或 Vulkan 生成场景像素，而是在 CPU 上显式执行顶点变换、三角形覆盖、重心坐标、`1/w` 透视校正、深度测试和 Fragment Shader。\n\n## 一次运行，十张可检查结果\n\n- 最终着色、深度、视空间法线与透视校正 UV 用于验证基础管线；\n- Toon、Fresnel 风格边缘光与 MatCap 展示基于法线和视线关系的风格化着色；\n- 线框与重心坐标图直接显示三角形内部插值；\n- Overdraw 在深度测试前累计片元覆盖次数，并用对数热力色带定位重复绘制区域。\n\n## 实测结果\n\nWindows Release 构建以 800×800 渲染 Diablo Pose 示例模型的 5,022 个三角形，执行 8 个 CPU Raster Pass，并自动写出 10 张 TGA。最后一次完整运行约 417 ms，计时包含模型加载、光栅化与文件写盘，不与 GPU 帧时间直接比较。\n\n## 工程边界\n\n项目基于 TinyRenderer 教学实现进行工程化扩展，保留原始 Git 历史、MIT 许可证和素材授权说明。新增内容集中在多 Pass 组织、风格化 Shader、Overdraw 诊断、Windows 一键演示、JSON 摘要、中文文档与十张真实截图；它用于证明光栅化基础，不冒充完整商业引擎。',
      en: '# CPU Software Raster Lab\n\nThis compact graphics study complements the full GPU renderer in Noemancer. It explicitly performs transforms, triangle coverage, barycentric interpolation, `1/w` perspective correction, depth testing, and fragment shading on the CPU.\n\nA single run exports ten real outputs: final shading, depth, view-space normals, corrected UVs, toon shading, rim lighting, MatCap shading, wireframe, overdraw heat, and barycentric interpolation. The Windows Release run processes 5,022 triangles at 800×800 across eight raster passes.\n\nThe project is an engineering extension of the MIT-licensed TinyRenderer teaching implementation. Original history and asset notices are retained, while the portfolio work focuses on additional passes, shaders, diagnostics, automation, structured output, and documentation.',
    },
    images: [
      { src: '/media/repositories/software-rasterizer/07_matcap.png', alt: { zh: '视空间法线驱动的 MatCap 着色', en: 'View-space-normal-driven MatCap shading' } },
      { src: '/media/repositories/software-rasterizer/01_shaded.png', alt: { zh: '法线贴图与高光组合的最终着色', en: 'Final shading with normal mapping and highlights' } },
      { src: '/media/repositories/software-rasterizer/02_depth.png', alt: { zh: 'Z-Buffer 有效深度范围可视化', en: 'Visualization of the valid Z-buffer depth range' } },
      { src: '/media/repositories/software-rasterizer/03_view_normals.png', alt: { zh: '视空间法线插值结果', en: 'Interpolated view-space normals' } },
      { src: '/media/repositories/software-rasterizer/04_perspective_uv.png', alt: { zh: '透视正确 UV 棋盘', en: 'Perspective-correct UV checkerboard' } },
      { src: '/media/repositories/software-rasterizer/05_toon.png', alt: { zh: 'N·L 离散量化的 Toon 色阶', en: 'Toon bands from quantized N dot L' } },
      { src: '/media/repositories/software-rasterizer/06_rim_light.png', alt: { zh: 'Fresnel 风格青色边缘光', en: 'Fresnel-style cyan rim lighting' } },
      { src: '/media/repositories/software-rasterizer/08_wireframe.png', alt: { zh: '由重心坐标生成的三角形线框', en: 'Triangle wireframe generated from barycentric coordinates' } },
      { src: '/media/repositories/software-rasterizer/09_overdraw.png', alt: { zh: '深度测试前片元覆盖次数热力图', en: 'Pre-depth-test fragment coverage heatmap' } },
      { src: '/media/repositories/software-rasterizer/10_barycentric.png', alt: { zh: '三角形重心坐标连续插值', en: 'Continuous triangle barycentric interpolation' } },
    ],
  },
  {
    id: 'art-pipeline-skill',
    title: '可验证的跨 DCC 美术管线审计 Skill',
    category: 'pipeline',
    categoryLabel: { zh: '跨工具审计与 Agent 能力边界', en: 'Cross-tool audit and agent capability boundaries' },
    summary: { zh: '把供应商目录、Maya 场景与 Unreal 资产检查串成可追溯、可恢复、默认只读的组合审计，并复核版本、Schema、哈希与零写入证据。', en: 'Combines supplier delivery, Maya scene, and Unreal asset checks into a traceable, recoverable, read-only audit with version, schema, hash, and zero-write verification.' },
    cover: '/media/repositories/production-tools/art-pipeline-skill-cover.png',
    tags: ['Skill', 'Maya / Unreal', 'Pydantic / JSON Schema', '幂等恢复'],
    repositoryUrl: 'https://github.com/Ubik42/art-pipeline-skill',
    story: { zh: `# 可验证的跨 DCC 美术管线审计 Skill

这个项目不让 Agent 临时拼脚本碰生产资产，而是把三个已经独立发布的确定性工具接入同一条审计链：供应商交付目录扫描、Maya 场景检查和 Unreal Static Mesh 批量审计。Skill 只负责编排、验证和汇总，不复制兄弟工具的业务规则。

## 一次黄金审计

- 先锁定三个工具的发布版本、Git commit、能力声明和关键合同文件；
- 分别核验供应商目录、Maya 2025 后台扫描和 UE 5.8.1 后台审计；
- 用 Pydantic 模型和版本化 JSON Schema 拒绝未知字段、过期报告和格式漂移；
- 对输入目录、Maya 场景和 Unreal 资产复算 SHA-256，证明审计期间没有写入；
- 将三个工具的结果汇成同一份机器报告和中文摘要。

固定黄金路径实际得到 21 个检查发现、2 个采集失败、0 次输入写入。采集失败不会被伪装成“零问题”，发现也只代表需要 TA 复核，不替团队擅自作出交付结论。

## Agent 边界与恢复

Agent 只能调用注册表中已经声明版本、输入范围和风险等级的能力。任意 Python、Shell、Maya 命令或 Unreal Console Command 都不会被直接暴露。Workflow Plan、Checkpoint、幂等键和步骤级收据使流程能从故障点恢复，并跳过已经成功的步骤。

这也是项目被设计成 Skill 而不是专用聊天 Agent 的原因：通用 Agent 理解意图，Skill 约束领域流程，独立工具负责确定性执行，薄宿主桥只提供必要的宿主身份与状态。`, en: `# Verifiable Cross-DCC Art Pipeline Audit Skill

This project composes three independently released deterministic tools—supplier delivery scanning, Maya scene checking, and Unreal Static Mesh auditing—into one traceable, recoverable, read-only workflow.

The golden run produced 21 findings and 2 collection failures with zero writes to the inputs. Versioned Pydantic contracts, JSON Schema, pinned release commits, SHA-256 identities, capability handshakes, checkpoints, and idempotent receipts prevent an agent from turning the workflow into arbitrary host scripting.` },
    images: [
      { src: '/media/repositories/production-tools/art-pipeline-composite.png', alt: { zh: '三工具组合黄金审计：21 个发现、2 个采集失败、0 次输入写入', en: 'Composite audit with 21 findings, 2 collection failures, and zero input writes' } },
      { src: '/media/repositories/production-tools/art-pipeline-overview-v2.png', alt: { zh: '供应商目录、Maya 与 Unreal 三类工具连接总览', en: 'Connection overview for delivery, Maya, and Unreal tools' } },
      { src: '/media/repositories/production-tools/art-pipeline-unreal.png', alt: { zh: 'Unreal 批量审计的版本、宿主与证据状态', en: 'Version, host, and evidence state for Unreal batch auditing' } },
      { src: '/media/repositories/production-tools/art-pipeline-blocked-v2.png', alt: { zh: '工具版本漂移时失败关闭', en: 'Fail-closed behavior on tool version drift' } },
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
    cover: '/media/repositories/production-tools/photon-ai-internship-cover.png',
    tags: ['Maya / Unreal', 'Figma', 'Python / C++', 'React / FastAPI'],
    story: {
      zh: `# 光子 AI 工具向实习内容总结

这是我在腾讯光子担任 AI 工具技术美术实习生期间的工作总结。工作范围横跨 Maya、Unreal Editor、Figma 插件沙箱、Python / C++、TypeScript / React、FastAPI、SQLite、视觉检索、AIGC 长时任务、版本化软件环境和持续集成。

## 工作重点

- 在 Maya 和 Unreal Editor 中开发直接服务于美术生产的宿主工具，处理场景状态、资源引用、可撤销写入与真实宿主回归；
- 持续开发 8 个 Figma 插件，覆盖 AI 对话、批量翻译、任务交付、视觉语义搜索、组件查重、母版更新、切图与布局标注；
- 建立共用 FastAPI 数据服务、SQLite 快照、缩略图缓存和 SigLIP 向量索引，同时保持各插件独立版本化与回滚边界；
- 将 AIGC、DCC 批处理与多版本 Maya 任务做成有进度、日志、心跳、断点和结果台账的长时流程；
- 参与工具的 Rez 打包、依赖解析、增量构建、持续集成、宿主验收和面向项目组的迭代交付。

下方保留了具体技术实现与验证方法。为避免暴露生产信息，项目名、平台、账号、接口地址、业务数据、资产、仓库路径、原始截图与录屏已移除。

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

## 失败：Figma 交互稿自动生成视觉稿实验

这个实验要做的是一个 Figma 插件：读取交互稿的页面结构、节点属性和截图，让模型判断页面用途，从团队组件库中选择合适的母版，再把母版复制到目标文件，自动替换文案、图片和组件，最终生成设计师可以继续编辑的视觉稿，而不是只输出一张扁平图片。

真实 Figma 文件测试后，实验没有达到可交付标准，主要失败在：

- **母版选择不稳定**：同一类页面存在多个相似母版，模型能解释页面大意，却无法稳定判断业务状态、信息优先级和应该使用的组件变体；
- **跨文件复制后结构容易损坏**：组件 ID、字体、变量和资源依赖无法仅凭截图恢复，复制到目标文件后会出现缺失组件或引用关系变化；
- **Auto Layout 与 Instance 无法可靠写回**：嵌套布局、约束、Variant 和 Instance Override 相互影响，替换文案或图片后经常发生尺寸、层级和对齐错误；
- **结果看起来像视觉稿，但不能稳定继续编辑**：单次截图可能“看起来差不多”，实际节点结构、团队规范和重复运行结果都不可靠，设计师仍需大量返工。

因此我停止了这个 Figma 自动出视觉稿方向，没有把它包装成完成产品。实验确认了更实际的边界：AI 可以理解页面意图、搜索候选母版并给出局部建议；确定性的 Figma 节点操作可以由插件执行和复检；跨文件资产写入、复杂布局修改与最终视觉决策仍需要明确规则和人工确认。

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

## Failed Figma experiment: interaction drafts to editable visual layouts

The Figma plug-in was intended to read an interaction draft, infer the page purpose, retrieve a team master, copy it into the target file, replace content and components, and leave an editable visual layout. Real-file tests failed at production quality: master selection was inconsistent; cross-file components lost fonts, variables, and references; nested Auto Layout, variants, and instance overrides broke after replacement; and visually plausible screenshots still concealed unusable node structure and large manual rework. The experiment was stopped rather than presented as a finished product. Models remained useful for intent interpretation and candidate retrieval, while deterministic plug-in operations and human review were still required for writes, layout changes, and visual decisions.

The original presentation and media remain local work records. This public page uses only sanitized technical descriptions and a newly drawn abstract cover.`,
    },
  },
  {
    id: 'asset-delivery-organizer', title: '美术资产交付整理工作台', category: 'pipeline',
    categoryLabel: { zh: '外包资产审计与安全整理', en: 'Supplier asset audit and safe organization' },
    summary: { zh: '七工作区中文桌面工具：可视化配置项目规则，检查目录、格式、命名、贴图和版本，并以 dry-run、哈希复检、回滚与收据安全整理交付。', en: 'A seven-workspace desktop tool for visual project rules, delivery auditing, dry-run organization, hash rechecks, rollback, and receipts.' },
    cover: '/media/repositories/production-tools/asset-delivery-profile.png',
    tags: ['PySide6', '可视化 Profile', '事务回滚', 'Windows Release'],
    repositoryUrl: 'https://github.com/Ubik42/asset-delivery-organizer',
    story: { zh: `# 美术资产交付整理工作台

真实外包交付往往同时包含模型、贴图、UDIM、历史版本和供应商说明。这个工具把交付设置、项目规则、文件浏览、问题审查、整理方案、审计记录和报告导出组织成七个中文工作区，让 TA 能从“制定项目标准”一直走到“完成复检并留下收据”。

## 不再手写 JSON 规则

用户可以从环境资产或角色资产模板创建 Profile，在界面中配置允许目录、文件格式、命名正则、贴图通道和版本保留策略。字段即时校验，危险路径和无效正则在保存前就会阻断；保存后的 Profile 仍是严格、可被 CLI、Skill 和 CI 共用的版本化合同。

## 安全整理闭环

- 审计阶段严格只读，记录稳定相对路径、SHA-256、媒体类型和命名字段；
- 检查目录边界、格式白名单、命名、贴图完整性和旧版本，同时防止路径穿越、符号链接逃逸和大小写冲突；
- 整理前必须生成可编辑 dry-run 方案，并重新核对全部源哈希和目标冲突；
- 执行失败会逆序回滚，完成后再次扫描，并在交付目录外写入 JSON 收据；
- Windows 1.1.0 可移植发行包不要求安装 Python，桌面、CLI 与 API 复用同一业务核心。

仓库提供 5 组不可变合成场景，共 109 个文件。推荐案例从 12 个文件中识别 5 个问题并生成 3 项整理计划；缺失贴图会如实保留给人工处理，不会被工具伪造。`, en: `# Asset Delivery Organizer

A Chinese PySide6 workbench spanning delivery setup, visual profile editing, file browsing, issue review, organization plans, audit history, and report export. Audits remain read-only; approved organization uses source hashes, collision and boundary checks, rollback, post-audit, and external receipts. A verified Windows 1.1.0 portable release runs without Python.` },
    images: [
      { src: '/media/repositories/production-tools/asset-delivery-profile.png', alt: { zh: '无需手写 JSON 的项目规则编辑器', en: 'Visual project profile editor without hand-written JSON' } },
      { src: '/media/repositories/production-tools/asset-delivery-boundary.png', alt: { zh: '交付目录白名单问题与可定位证据', en: 'Delivery path allowlist issues and locatable evidence' } },
      { src: '/media/repositories/production-tools/asset-delivery-plan-v2.png', alt: { zh: '可编辑整理方案与执行前预检', en: 'Editable organization plan and preflight' } },
      { src: '/media/repositories/production-tools/asset-delivery-portable.png', alt: { zh: 'Windows 1.1.0 可移植程序真实运行', en: 'Verified Windows 1.1.0 portable application' } },
    ],
  },
  {
    id: 'maya-scene-checker', title: 'Maya 场景质量与交付检查工具', category: 'pipeline',
    categoryLabel: { zh: 'Maya 只读交付门禁', en: 'Read-only Maya delivery gate' },
    summary: { zh: '在 Maya 2025 中扫描拓扑、命名、引用与场景状态，把问题落成可定位 Evidence 和可交付报告。', en: 'A Maya 2025 checker that turns topology, naming, reference, and scene findings into locatable evidence and delivery reports.' },
    cover: '/media/repositories/production-tools/maya-scene-overview.png',
    tags: ['Maya 2025', 'PySide6', '拓扑检查', 'Evidence'],
    repositoryUrl: 'https://github.com/Ubik42/maya-scene-checker',
    story: { zh: `# Maya 场景质量与交付检查工具

这是面向模型美术、外包验收和 TA 的 Maya 只读交付检查器。它先对场景建立稳定快照，再用 Rule、Issue 和 Evidence 回答三个问题：哪个对象出错、具体落在哪个面 / 边 / 点、它为什么会阻碍交付。整个检查过程不修改场景。

## 从扫描到定位与报告

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
    id: 'maya-garment-preparation', title: 'Maya 服装传递与厚度准备工具', category: 'pipeline',
    categoryLabel: { zh: 'Maya 服装生产准备插件', en: 'Maya garment production preparation plug-in' },
    summary: { zh: '把三输入 UV/位置传递与开放服装 Mesh 厚度生成收束成可预检、可预览、可复检、可一次撤销的 Maya 2025 流程。', en: 'Combines three-input UV/position transfer and open-garment thickness generation into previewable, validated, one-undo Maya 2025 workflows.' },
    cover: '/media/repositories/production-tools/maya-garment-public-result.png',
    tags: ['Maya 2025', 'UV / 位置传递', '厚度生成', 'Undo'],
    repositoryUrl: 'https://github.com/Ubik42/maya-garment-preparation',
    story: { zh: `# Maya 服装传递与厚度准备工具

服装进入 Maya 后常有两段高风险手工操作：从基础版片保留 UV、从高模取得造型并传给重拓扑网格，以及把单层薄面生成可控厚度。0.3.1 将两者做成同一个中文插件，但仍保持两条边界清晰的工作流。

## 两条生产路径

- UV / 位置传递会校验三类输入、选择顺序、拓扑、UV、引用和既有 History，再分两步调用 transferAttributes；
- 厚度准备支持向外、向内与双向居中，生成内外层和边界侧壁，并实测最终厚度；
- Preview 全程零写入，真正修改只发生在单个 Undo Chunk 中；
- 只管理本次创建的节点，不执行 Delete All History，也不在多解时猜测对应关系；
- 执行异常或读回复检失败会整体回滚。

## 真实服装证据

除 13 套确定性演示场景外，仓库还使用公开 CC0 挂脖连衣裙验证真实服装轮廓、多开口和 2031 顶点网格。输入、Maya 2025 Viewport 2 结果、素材来源、哈希和机器证据均公开保存；它证明的是已验证案例，不冒充对任意商业服装的全面支持。`, en: `# Maya Garment Transfer and Thickness Preparation

Version 0.3.1 provides two Maya 2025 workflows: safe three-input UV/position transfer and controllable thickness generation for open garment meshes. Both use zero-write previews, a single undo chunk, read-back validation, and automatic rollback. A redistributable CC0 halter dress provides real garment evidence in addition to deterministic demo scenes.` },
    images: [
      { src: '/media/repositories/production-tools/maya-garment-public-input.png', alt: { zh: '公开 CC0 挂脖连衣裙输入', en: 'Public CC0 halter dress input' } },
      { src: '/media/repositories/production-tools/maya-garment-public-result.png', alt: { zh: '厚度生成后的领口侧壁与真实服装轮廓', en: 'Generated opening sidewalls on the real garment silhouette' } },
      { src: '/media/repositories/production-tools/maya-garment-thickness-preview.png', alt: { zh: '双向居中厚度的零写入预览', en: 'Zero-write centered thickness preview' } },
      { src: '/media/repositories/production-tools/maya-garment-thickness-complete.png', alt: { zh: '厚度执行完成、实测结果与本次 History', en: 'Completed thickness operation with measured results and owned history' } },
    ],
  },
  {
    id: 'unreal-asset-batch-auditor', title: 'Unreal 资产批量质量审计工具', category: 'engine-games',
    categoryLabel: { zh: 'Unreal 资产批量审计与团队交付', en: 'Unreal batch asset audit and team handoff' },
    summary: { zh: 'UE 5.8.1 原生中文 Slate 工作台：按项目 Profile 审计几何、LOD、碰撞、Lightmap、命名与目录，支持可取消批处理、回归比较和离线团队包。', en: 'A native UE 5.8.1 Slate workbench for profile-driven geometry, LOD, collision, lightmap, naming, and path audits with cancellable batches, regression, and offline handoff packages.' },
    cover: '/media/repositories/production-tools/unreal-auditor-v08-running.png',
    tags: ['Unreal 5.8', 'C++ / Python', 'Slate', '回归与团队包'],
    repositoryUrl: 'https://github.com/Ubik42/unreal-asset-batch-auditor',
    story: { zh: `# Unreal 资产批量质量审计工具

这是面向 Unreal 项目 Static Mesh 的只读审计工作台。Editor-only C++ 批量读取原生元数据，Python 负责项目规则、任务编排和版本化 JSON Report，中文 Slate UI 只呈现真实领域状态，不把规则偷偷塞进界面。

## 三步完成项目审计

1. 选择内置的桌面、移动端或宽松复核 Profile，也可以导入项目自己的规则；
2. 从 Content Browser 读取显式选择，分批采集几何预算、LOD、材质槽、Nanite、碰撞、Lightmap、命名和目录证据；
3. 在资产总览、问题明细和回归对比中查看通过、需处理、采集失败、新增、持续与已解决问题。

## 生产可靠性与交付

- 每个 Editor Tick 最多推进一个批次，界面显示阶段、对象进度和已完成批次数；
- 取消只在批次边界生效，已完成结果会保存为合法的部分 Report，但不会被误用作回归基线；
- 历史会话按稳定 asset path + rule id 比较修复前后变化；
- 一键导出中文单文件 HTML、Excel 可读 CSV 和 SHA-256 清单，未安装 Unreal 的制片、主美或外包同事也能复核；
- v0.8.0 发布 ZIP 已完成全新项目安装、升级、卸载和两轮独立 UE 5.8.1 宿主验证。

扫描接口不会保存资产、重建网格或修改 Nanite。24 个项目 Demo 资产与 Engine Static Mesh 的真实宿主证据、任务状态和报告哈希都保存在仓库中。`, en: `# Unreal Asset Batch Auditor

A read-only Unreal 5.8.1 Editor plug-in. Native C++ collects Static Mesh metadata, Python applies versioned profiles and produces reports, and the Chinese Slate workbench exposes geometry, LOD, Nanite, collision, lightmap, naming, and path evidence. Version 0.8 adds cancellable bounded batches, immutable session history, regression comparison, offline HTML/CSV handoff packages, and a verified installable release.` },
    images: [
      { src: '/media/repositories/production-tools/unreal-auditor-v08-overview.png', alt: { zh: '24 个 Static Mesh 的资产总览、通过项和问题项', en: 'Overview of 24 Static Mesh assets with passing and failing states' } },
      { src: '/media/repositories/production-tools/unreal-auditor-v08-issues.png', alt: { zh: '规则、实测值、阈值与中文 Evidence', en: 'Rules, measured values, thresholds, and localized evidence' } },
      { src: '/media/repositories/production-tools/unreal-auditor-v08-running.png', alt: { zh: '可观察、可在批次间安全取消的审计任务', en: 'Observable audit task with safe cancellation between batches' } },
      { src: '/media/repositories/production-tools/unreal-auditor-v08-regression.png', alt: { zh: '同一 Profile 下修复前后的回归比较', en: 'Before-and-after regression under the same profile' } },
      { src: '/media/repositories/production-tools/unreal-auditor-v08-handoff.png', alt: { zh: '无需 Unreal 即可阅读的中文团队交接报告', en: 'Chinese team handoff report readable without Unreal' } },
    ],
  },
  {
    id: 'rez-studio-launcher', title: 'DCC 项目环境与插件启动器', category: 'pipeline',
    categoryLabel: { zh: '项目环境、插件与 DCC 工具运行时', en: 'Project environment, plug-in, and DCC tool runtime' },
    summary: { zh: '按项目解析隔离的 Rez 环境，并把插件方案、工具清单、宿主装载和诊断日志组织成可追溯的 DCC 工作站入口。', en: 'Resolves isolated Rez environments per project and manages plug-in schemes, tool manifests, host loading, and diagnostics as one traceable DCC workstation entry point.' },
    cover: '/media/repositories/major-updates/rez-overview.png', tags: ['Rez 3.4', 'Maya 2025', 'Tool Runtime', 'Tauri 2'], repositoryUrl: 'https://github.com/Ubik42/rez-studio-launcher',
    story: { zh: `# DCC 项目环境与插件启动器

Rez Studio 是一个面向 Windows 制作工作站的项目感知启动器。对美术来说，操作仍然是“选项目、选软件、点击启动”；它在后台根据用户身份、项目成员关系、DCC 版本和插件方案解析 Rez 环境，并在启动前把缺少软件、版本冲突和制品问题说清楚。

这个项目的核心是让“某个项目应该用哪套 Maya 和插件”成为可版本化、可诊断的项目配置，而不是每台电脑各自维护一组快捷方式和环境变量。

## 美术家看到的工作流

- 登录后只显示当前用户可访问的项目；Atlas 与 Ember 等演示项目会为同一 DCC 给出不同版本、工具与状态。
- 同一项目/DCC 支持“完整制作”“基础工具”“TD 纯净排障”等插件方案，成员身份限制可用组合。
- 扫描 Maya、Blender、Houdini、Substance Designer、3ds Max、MotionBuilder、Unreal 和 Unity 的常见安装位置，并显示版本与可执行文件来源。
- 从本机可执行文件提取真实 DCC / Engine 图标，同时记录来源与 SHA-256；未发现软件时显示明确原因与厂商入口。
- Rez 3.4 使用项目私有 package path 执行真实 ResolvedContext，把版本请求、依赖、环境变量和插件路径组合成隔离启动环境。

## 插件方案与可追溯制品

- 演示插件目录包含 Maya USD、BlenderKit、SideFX Labs 和 ParamCopy 的 Release 元数据；
- 公开制品只允许来自配置白名单，下载后必须经过 SHA-256、Manifest 和 Provenance 复核才能晋升为 Rez 包；
- Tool Manifest 采用严格 schema 做无副作用发现，宿主加载仍与发现阶段分离；
- 界面区分可启动、缺少 DCC、有更新、待复核和策略阻断，失败原因直接落在对应软件与诊断页，不需要美术去翻终端日志。

## 桌面实现与分发

React 19 负责软件库和状态反馈，Tauri 2 / Rust 负责桌面生命周期与信任边界，Python Sidecar 承载身份、项目目录、制品缓存、DCC 检测和 Rez 领域逻辑。Windows NSIS 安装包内置冻结 Python 服务、Rez Runtime 与演示中央仓，不要求目标机器预装 Python、uv 或 Rez；商业 DCC 本体和许可证不随包分发。

## CLI 与 Agent 接入

rezstudio.cmd 以稳定 JSON 信封提供 project list、profile list/resolve/validate/diff、doctor 和 telemetry status。只读观察和 dry-run 适合交给 Agent；制品晋升、发布与未来写操作仍要求显式确认。UI 与 CLI 复用同一领域能力，避免自动化依赖鼠标点击。

## 真实 DCC 工具运行时

v0.4 将启动器从“打开正确版本的软件”推进到“在正确环境里装载正确工具”。严格的 tool-manifest/1 描述工具入口、宿主兼容性和生命周期；Rez Profile 解析完成后，运行时会在 Maya 2025 主线程创建 workspaceControl 面板，并统一处理首次装载、重复打开、热重载与关闭清理。一次启动同时留下解析、宿主、工具与会话四类 JSONL 日志，便于定位环境问题究竟发生在 Rez、宿主适配层还是工具本身。

## 当前边界

当前完成的是一套可本地安装、可启动演示 DCC Profile、可装载真实 Maya 工具并运行 CLI 诊断的作品集实现。AI 能力仍停留在 v0.5 规划中的只读诊断层，当前版本没有接入模型。进入真实企业环境后，身份层需要接入 AD / LDAP / SSO、服务端授权和公司软件许可证管理。遥测默认仅写入本机 SQLite，用户可查看和关闭。`, en: `# Rez Studio

A project-aware Windows DCC launcher. It selects the approved DCC version, plug-in set, and Rez environment for the current project instead of opening a fixed executable.

The Tauri 2 and React desktop application connects to Rez through a Python service, exposes launch diagnostics, and ships a Windows installer plus a documented CLI protocol.` },
    images: [
      { src: '/media/repositories/major-updates/rez-overview.png', alt: { zh: 'Rez Studio 项目软件库、DCC 版本与插件方案', en: 'Rez Studio project library, DCC versions, and plug-in schemes' } },
      { src: '/media/repositories/major-updates/rez-maya-runtime.png', alt: { zh: '由 Rez Profile 装载到 Maya 2025 的真实工具运行时面板', en: 'A real tool runtime panel loaded into Maya 2025 through a Rez profile' } },
      { src: '/media/repositories/major-updates/rez-login.png', alt: { zh: 'Rez Studio 本地身份登录与项目入口', en: 'Rez Studio local identity and project entry' } },
    ],
  },
  {
    id: 'mayascope', title: 'Maya 场景根因调查与运行时诊断工具', category: 'pipeline',
    categoryLabel: { zh: '大型 Maya 场景调查工作区', en: 'Large-scale Maya scene investigation workspace' },
    summary: { zh: '用 Scene Atlas、根因镜头、依赖谱系与运行时证据调查复杂 Maya 场景，并以签名快照、回归比较和可恢复队列交付结论。', en: 'Investigates complex Maya scenes through Scene Atlas, Root Cause Lens, dependency lineage, and runtime evidence, then delivers signed snapshots, regression comparisons, and recoverable queues.' },
    cover: '/media/repositories/production-tools/mayascope-project-queue.png', tags: ['Maya 2025', 'Root Cause Lens', 'Runtime Observatory', 'Signed Audit'], repositoryUrl: 'https://github.com/Ubik42/MayaScope',
    story: { zh: `# Maya 场景调查与运行时诊断工具

MayaScope 由原 MayaIndieTool 演进而来，是一个面向复杂 Maya 场景的调查与运行时诊断工作区。它处理的不是某一条孤立检查规则，而是“这个场景为什么变慢、变得脆弱，或者换一台机器就无法正常打开”。项目与角色绑定工具 MayaCraft 彼此独立。

工具先将 DG / DAG、引用、插件依赖和运行时足迹采集为不可变 SceneSnapshot，再投影到可交互 Atlas。调查者可以从一条 Finding 反向追到具体节点、引用链、所需插件、失败的 reference edit 与脚本行为，从“看到问题”继续走到“找到问题从哪里传过来”。

## 从发现异常到解释根因

- Scene Clinic 将规则、项目基线和快照差异聚合为带来源的 Finding；Root Cause Lens 再沿图关系追踪最可能的上游诱因，而不是只列一张问题清单；
- Reference Orbit、Dependency Lineage 与 Plugin Ghost Signal 展示引用来源、失败 edits、外部文件、unknown nodes、script nodes 和缺失插件如何共同影响当前场景；
- Counterfactual 用只读模拟回答“临时忽略这个引用或插件后，哪些问题会消失”；Failure Prism 将崩溃与失败证据按宿主、插件、引用和脚本维度交叉比较；
- Runtime Observatory 明确区分“值为零”和“当前宿主不可观测”，避免把 batch 模式缺失数据误判为正常；
- 每次调查可以导出签名快照与回归报告。项目队列支持安全暂停、批次门控、取消与继续，长时间扫描中断后不需要从头开始。

底层 Query Kernel 使用整数 CSR 图索引、有界 LRU 缓存和 deadline 限制邻域、路径与根因查询；Scene Atlas 对百万级结果使用虚拟窗口和折叠聚焦。当前 v3.0.0 展示版已在 Maya 2025 验证启动、重复打开、热重载、关闭、回调清理以及项目队列恢复。`, en: `# MayaScope

MayaIndieTool has evolved into MayaScope, an investigative Maya 2025 workspace for Scene Atlas, Root Cause Lens, dependency lineage, runtime observability, counterfactual queries, signed regression evidence, and recoverable project queues. Version 3.0.0 is validated through a real Maya 2025 GUI lifecycle.` },
    images: [
      { src: '/media/repositories/production-tools/mayascope-root-cause.png', alt: { zh: 'Root Cause Lens 将问题追溯到上游场景关系', en: 'Root Cause Lens tracing findings to upstream scene relationships' } },
      { src: '/media/repositories/production-tools/mayascope-dependency-v2.png', alt: { zh: '外部文件、引用与插件的依赖谱系', en: 'Dependency lineage across external files, references, and plug-ins' } },
      { src: '/media/repositories/production-tools/mayascope-reference.png', alt: { zh: 'Reference Orbit 引用关系与失败 edit 证据', en: 'Reference Orbit with reference relationships and failed-edit evidence' } },
      { src: '/media/repositories/production-tools/mayascope-project-queue.png', alt: { zh: '支持安全暂停、取消和恢复的项目调查队列', en: 'Recoverable project investigation queue with safe pause and cancellation' } },
      { src: '/media/repositories/production-tools/mayascope-million-window.png', alt: { zh: '面向超大场景的虚拟化 Scene Atlas 窗口', en: 'Virtualized Scene Atlas window for very large scenes' } },
    ],
  },
  {
    id: 'mayacraft', title: 'Maya 角色绑定与动画工作台', category: 'pipeline',
    categoryLabel: { zh: 'Maya 角色绑定与动画工具', en: 'Maya character rigging and animation tools' },
    summary: { zh: 'Maya 2025 中文角色工作区：四元数 Twist、带时间语义的 FK/IK 无跳变匹配、受保护空间切换，以及绑定、形变和重定向诊断。', en: 'A Chinese Maya 2025 character workspace for quaternion Twist, time-aware no-pop FK/IK matching, protected space switching, rigging, deformation, and retarget diagnostics.' },
    cover: '/media/repositories/production-tools/mayacraft-twist-verified.png', tags: ['Maya 2025', 'Quaternion Twist', 'FK / IK Match', 'Retarget'], repositoryUrl: 'https://github.com/Ubik42/MayaCraft',
    story: { zh: `# Maya 角色绑定与动画工作台

MayaCraft 是独立开发的 Maya 2025 角色绑定与动画工作区。它把角色发现、Rig 构建、形变诊断、运动分析、重定向和接触修正组织在同一个中文界面中。工作区会从当前场景发现角色，投影关节结构，并与 Maya Selection 双向同步。

对于实际修改，工具统一采用“预览 → 应用 → 读回验证 → Undo”的操作节奏，让绑定和动画工具不仅能产生结果，也能在写入前看到差异、写入后核对结果。

## 当前可演示的角色流程

- 声明式 Rig Graph 使用 Module、Socket、Node 和物理行为合同生成结构 diff，再增量构建真实 FK / RP IK / Pole 与基础 Space Switch；
- Deformation MRI 从 skinCluster 读取权重，显示归一化、熵、碎片与缺失 influence，并支持可撤销修复；
- Motion Magnetism 分析速度、加速度、jerk、轨迹与接触区间；
- Retarget 工作区处理 namespace、比例、轴空间和 jointOrient 差异，以 Ghost Pose 预览并写入独立 Animation Layer；
- Contact IK 通过 FABRIK 和共同骨盆补偿形成零写入预览，应用后逐帧验证脚底锚点。

## 最新角色动画能力

- v2.2 使用四元数 swing-twist 分解驱动 Twist 关节，预览分布、应用后读回并验证真实关节旋转，避免欧拉角拆分在复杂姿态下翻转；
- FK / IK Match 读取指定时间点的世界空间姿态，计算控制器目标后生成差异预览，再在同一事务中写入并校验，减少切换帧跳变；
- Space Switch 在保护世界空间姿态的前提下切换父空间并处理关键帧，操作前后都保留可比较证据；
- 所有 Hero 操作继续遵循“零写入预览 → 单事务应用 → 宿主读回验证 → 一步 Undo”。

展示版已在 Maya 2025 完成真实 GUI 生命周期、Twist、FK/IK Match 和 Space Switch 验证。Face PSD / RBF 与拓扑变化后的蒙皮迁移仍在后续路线中。`, en: `# MayaCraft

MayaCraft is a Chinese Maya 2025 character workspace for scene-aware character discovery, declarative rig graphs, deformation diagnostics, quaternion swing-twist joints, time-aware no-pop FK/IK matching, protected space switching, read-back validation, and single-transaction undo.` },
    images: [
      { src: '/media/repositories/production-tools/mayacraft-workspace.png', alt: { zh: 'MayaCraft 角色工作区与场景角色投影', en: 'MayaCraft character workspace' } },
      { src: '/media/repositories/production-tools/mayacraft-twist-preview.png', alt: { zh: '四元数 Twist 分解与关节分布预览', en: 'Quaternion Twist decomposition and joint-distribution preview' } },
      { src: '/media/repositories/production-tools/mayacraft-twist-verified.png', alt: { zh: 'Twist 应用后的 Maya 真实场景读回验证', en: 'Read-back verification from the real Maya scene after applying Twist' } },
      { src: '/media/repositories/production-tools/mayacraft-match-preview.png', alt: { zh: '指定时间点的 FK/IK 无跳变匹配预览', en: 'Time-aware no-pop FK/IK match preview' } },
      { src: '/media/repositories/production-tools/mayacraft-match-verified.png', alt: { zh: 'FK/IK 匹配应用与误差验证', en: 'Applied FK/IK match with error verification' } },
    ],
  },
  {
    id: 'notion-nexus', title: 'Notion 本地工作区与自动化中枢', category: 'other-tools',
    categoryLabel: { zh: '本地数据与 Notion 自动化', en: 'Local data and Notion automation' },
    summary: { zh: '把本地文件、Excel 与 Notion 工作区连接起来，提供空间扫描、字段映射、文件监听和可视化自动化编排。', en: 'Connects local files and Excel data with Notion through workspace scanning, field mapping, file watching, and visual automation.' },
    cover: '/media/repositories/other-tools/notion-nexus.svg', tags: ['Notion API', 'FastAPI', 'React', 'SQLite'], repositoryUrl: 'https://github.com/Ubik42/NotionNexus',
    story: { zh: `# Notion 本地工作区与自动化中枢

NotionNexus 是一个本地优先的 Notion 管理工具，用于把散落在文件系统和 Excel 中的数据接入 Notion，而不是依赖手工复制和逐项维护。

- FastAPI 后端负责集成认证、工作区扫描、同步任务、模板和自动化路由；
- Scanner 抓取 Notion 页面结构并建立本地影子数据库，前端可以用树形视图快速浏览和选择页面；
- Excel 同步向导读取本地表格、映射列与数据库属性，再执行批量同步；
- 自动化引擎把 page.create、block.append 等操作登记为原子 Action，并按流程组合执行；
- 文件监听器监控本地 Markdown 与文本模板的变化，使本地内容可以进入统一的模板管理流程。

前端使用 React / Vite 提供 Dashboard、集成管理、空间扫描、Excel 映射、自动化编排和模板管理页面。`, en: `# Notion local workspace and automation hub

NotionNexus is a local-first FastAPI and React application connecting files, Excel data, and Notion. It includes a workspace scanner and shadow database, an Excel mapping wizard, atomic automation actions, file watching, templates, integrations, and a visual task builder.` },
  },
  {
    id: 'shadertoy-knowledge-library', title: 'Shader 案例学习、渲染与 AI 检索知识库', category: 'other-tools',
    categoryLabel: { zh: '实时图形知识工程', en: 'Realtime graphics knowledge engineering' },
    summary: { zh: '整理 1000 个 Shadertoy 案例、本地 GLSL 渲染、中文深读、学习路径和可供 AI 调用的检索服务。', en: 'Organizes 1,000 Shadertoy cases with local GLSL rendering, Chinese deep dives, learning paths, and AI-ready retrieval.' },
    cover: '/media/repositories/other-tools/shadertoy-library.svg', tags: ['GLSL', 'WebGL', '知识检索', 'AI Context'], repositoryUrl: 'https://github.com/Ubik42/shadertoy-lib',
    story: { zh: `# Shader 案例学习、渲染与 AI 检索知识库

这个工程将 Shadertoy 案例从零散收藏整理为可以搜索、渲染、学习和被 AI 调用的本地知识库。

- 抓取并标准化 1000 个高质量 Shader，拆分 Image、Buffer 和 Common 等 GLSL Pass，同时镜像必要媒体资源；
- 使用本地 Web 查看器渲染 Shader，浏览源码、元数据、中文分析和逐篇深读；
- 从 1000 篇报告和 1812 个 GLSL Pass 构建机制分类、技术前置关系与分阶段学习路径；
- 提供中英术语扩展、相似案例、主题与预览能力过滤，以及适合直接交给 AI 的 Context Pack；
- 用 Schema 校验、检索回归、随机端口服务 Smoke Test 和渲染报告检查知识库质量。

它既是 Shader 学习工具，也是面向技术美术和图形开发任务的案例检索基础设施。`, en: `# Shader learning, rendering, and AI retrieval library

This project turns 1,000 Shadertoy cases and 1,812 GLSL passes into a local renderer, Chinese deep-reading corpus, mechanism taxonomy, staged learning path, similarity index, and AI-ready context service with validation and retrieval regression tests.` },
  },
  {
    id: 'shortcut-manager', title: '跨软件快捷键采集与查询工具', category: 'other-tools',
    categoryLabel: { zh: '桌面效率资料工具', en: 'Desktop productivity reference tool' },
    summary: { zh: '集中采集常用软件快捷键来源、截图与 OCR 结果，整理为 Markdown，并接入可视化键盘映射项目。', en: 'Collects shortcut sources, screenshots, OCR results, Markdown references, and a visual keyboard-mapping subproject.' },
    cover: '/media/repositories/other-tools/shortcut-manager.svg', tags: ['OCR', 'Markdown', '快捷键', 'Git Submodule'], repositoryUrl: 'https://github.com/Ubik42/ShortcutManager',
    story: { zh: `# 跨软件快捷键采集与查询工具

ShortcutManager 用于集中维护不同软件的快捷键资料，减少截图、网页和个人笔记分散后无法检索的问题。

- 保存快捷键来源、界面截图、OCR 结果和采集脚本；
- 将已经整理的内容统一输出为便于搜索和版本管理的 Markdown；
- 通过 Git 子模块接入可视化 ShortcutMapper，用键盘布局展示按键与组合键；
- 将原始证据、文字整理和可视化界面分层，便于继续补充更多软件。

项目重点不是重新发明快捷键，而是把资料采集、文字校对、版本维护和可视化查询组成一条可持续更新的流程。`, en: `# Cross-application shortcut collection and query tool

ShortcutManager collects shortcut sources, screenshots, OCR output, and acquisition scripts, normalizes reviewed material into searchable Markdown, and integrates a visual ShortcutMapper through a Git submodule.` },
  },
  {
    id: 'pyarsenal', title: 'Python 脚本整理与运行工具', category: 'other-tools',
    categoryLabel: { zh: 'Python 脚本管理器', en: 'Python script manager' },
    summary: { zh: '通过标签、环境隔离和一键编译管理分散 Python 脚本的桌面工具。', en: 'A desktop tool for organizing scattered Python scripts with tags, isolated environments, and one-click compilation.' },
    cover: '/media/repositories/pyarsenal.png', tags: ['Python', 'Desktop App', 'Script Library'], repositoryUrl: 'https://github.com/Ubik42/PyArsenal',
    story: { zh: `# Python 脚本整理与运行工具

PyArsenal 面向需要维护大量零散脚本的 Python 开发者。它把脚本登记、标签检索、运行环境和编译入口集中到一个图形界面中，减少“脚本在哪、依赖是什么、如何交付”的重复管理成本。

具体能力与使用方式以仓库当前 README 和实现为准。`, en: `# PyArsenal

PyArsenal is a graphical manager for Python developers who maintain many scripts. It centralizes registration, tags, execution environments, and compilation so a script library remains searchable and deliverable.` },
  },
  {
    id: 'neothesia', title: '钢琴练习与乐谱反馈应用', category: 'other-tools',
    categoryLabel: { zh: '钢琴练习应用', en: 'Piano practice application' },
    summary: { zh: '持续维护的钢琴学习分支，加入刻意练习、反馈、曲库、乐谱同步与 Pianoteq 工作流。', en: 'An actively maintained piano-learning fork with deliberate practice, feedback, repertoire, notation, and Pianoteq workflows.' },
    cover: '/media/repositories/neothesia.png', tags: ['Rust', 'WGPU', 'MIDI', 'VST3'], repositoryUrl: 'https://github.com/Ubik42/Neothesia',
    story: { zh: `# 钢琴练习与乐谱反馈应用

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
    id: 'artflow-agent', title: '面向引擎接入的新时代 AIGC 框架', category: 'ai-agent',
    categoryLabel: { zh: '引擎场景 AIGC 智能体框架', en: 'Engine-scene AIGC agent framework' },
    summary: { zh: '把 Unreal 场景事实编译成类型化变更计划，协调 ComfyUI、GPT Image 2 与图生 3D，在候选关卡中完成执行、评价、定向纠正和发布。', en: 'Compiles Unreal scene facts into typed change plans and coordinates ComfyUI, GPT Image 2, and image-to-3D providers for execution, judging, targeted correction, and publishing in candidate levels.' },
    cover: '/media/repositories/major-updates/artflow-scene-lab-3d.png', tags: ['Unreal 5.8', 'ComfyUI / GPT Image 2', 'Image-to-3D', 'Scene Agent'], repositoryUrl: 'https://github.com/Ubik42/ArtFlow-Agent',
    story: { zh: `# 面向引擎接入的新时代 AIGC 框架

ArtFlow Agent 是位于生成模型与 Unreal 之间的受约束场景智能体控制层。它读取真实 UE 5.8 场景、生成类型化 SceneChangePlan，并把材质、资产、PCG、灯光与布局变更落到候选关卡；源关卡不被直接覆盖，所有外部生成物都要经过来源、格式、预算和场景约束验证。

项目重点不是再封装一个聊天界面，而是让 AIGC 结果成为可执行、可评价、可纠正、可恢复并能安全回到引擎的生产变更。

## 四个真实生产案例

- **参考图到可用 3D 资产**：GPT Image 2 生成参考图，图生 3D Provider 返回 GLB；系统依次检查许可、URI、文件格式、几何体、材质与三角面预算，再通过 Unreal Interchange 导入候选关卡。
- **PBR 材质闭环**：ComfyUI 生成 Base Color、Normal、Roughness、Metallic、AO 五通道材质，通道语义、尺寸与来源验证通过后自动创建材质实例并绑定目标对象。
- **多域场景改造**：同一计划协调材质、PCG、灯光与资产调整，以依赖 DAG 控制执行顺序；演示案例完成 12 处 PCG 变更，同时保持保护区域零侵入。
- **只修失败域**：技术评审与视觉评审分离。若候选只在灯光上失败，Agent 仅生成灯光纠正计划；回执丢失时通过 reconcile 恢复，避免重复导入和重复写场景。

## 1. 场景数字孪生与执行约束

- UE 5.8 场景桥导出固定相机的 beauty、depth、world normal 与 object ID 四 Pass；
- Scene Package 同时保存受保护轮廓、可编辑区域、对象身份和美术方向，并逐文件记录 SHA-256；
- 生成器只能执行已登记的 Provider 能力与 Recipe；ComfyUI 和 GPT Image 2 共用同一份场景约束，候选结果因此可以在同一基准上比较。

## 2. 生成与评价分离

确定性 Constraint Judge 先检查相机、主体轮廓、结构和保护区域；通过硬约束的候选再交给多模态 Visual Critic 评价风格与完成度。展示样例中，一张视觉表现更强但改动了场景结构的负对照被直接排除。评价结果、策略版本、候选身份与最终选择都保存在事件日志中。

## 3. 只修改指定区域，再回流 Unreal

确定方向后，编排器根据对象 ID 和蒙版调用 GPT Image 2 做局部修订。当前主运行的第二次 feathered composite 改变了蒙版内 42,803 个像素，蒙版外 1,530,358 个像素保持零变化。通过验证的资产导入 /Game/ArtFlow/Returns，并绑定回目标 Actor；本次闭环的 9 个来源文件哈希全部匹配。

## 4. 长时任务、中断与恢复

- SQLite append-only 事件、哈希链和确定性 Reducer 让页面刷新或进程重启后可以重建相同状态；
- reserve / submit / reconcile 区分“尚未执行”“已完成”和“结果未知”；6 组故障注入测试中没有发生重复外部写入；
- 上下文装配只保留稳定前缀、当前 Reducer 状态、最近观察和来源绑定记忆，排除陈旧观察与无关信息；
- Capability Registry 记录输入输出、读写域、风险、超时、幂等和验证信号；不可用能力与权限漂移直接失败关闭；
- episodic、semantic、procedural 三类生产记忆都绑定来源，冲突、伪造来源和越权共享会被拒绝；
- OpenTelemetry 关联完整 Trace，冻结 Harness 的 20/20 命名案例和恢复/记忆矩阵可以独立复核。

## 5. 可复核的作品集交付

发布包只保留审阅所需的画面、评价、来源和恢复证据，排除 Prompt、凭据、隐藏推理和完整 SQLite 数据库。随包验证器会重新检查文件哈希、Run / Event 头、Harness、恢复矩阵、记忆与 Provenance。当前 C2PA 为 compatible unsigned sidecar，尚未接入签名证书。

## 当前边界

当前四个生产案例覆盖图生 3D、PBR、多域场景变更和定向纠正，但还不是开放域生成质量 Benchmark。PydanticAI 只承担类型化模型交互；状态、策略、执行权限和恢复逻辑由项目本身的确定性系统管理。`, en: `# ArtFlow Agent

ArtFlow Agent is a constrained scene-agent control plane between generation providers and Unreal. It compiles scene facts into typed change plans and coordinates ComfyUI, GPT Image 2, image-to-3D providers, Unreal Interchange, judging, targeted correction, recovery, and candidate-level publishing. Four production cases cover image-to-3D, five-channel PBR, multi-domain scene changes, and correction of the failed domain only.` },
    images: [
      { src: '/media/repositories/major-updates/artflow-scene-lab-3d.png', alt: { zh: '参考图生成、GLB 验证与 Unreal 候选关卡导入', en: 'Reference generation, GLB validation, and Unreal candidate-level import' } },
      { src: '/media/repositories/major-updates/artflow-scene-lab-pbr.png', alt: { zh: 'ComfyUI 五通道 PBR 生成与材质实例回流', en: 'Five-channel ComfyUI PBR generation and material-instance return' } },
      { src: '/media/repositories/major-updates/artflow-scene-lab-multi.png', alt: { zh: '材质、PCG、灯光和资产的多域场景变更', en: 'Multi-domain scene changes across materials, PCG, lighting, and assets' } },
      { src: '/media/repositories/major-updates/artflow-scene-lab-correction.png', alt: { zh: '只针对失败域执行定向纠正与恢复', en: 'Targeted correction and recovery for the failed domain only' } },
      { src: '/media/repositories/major-updates/artflow-architecture.png', alt: { zh: '场景智能体控制层、能力注册与候选关卡架构', en: 'Scene-agent control plane, capability registry, and candidate-level architecture' } },
    ],
  },
  {
    id: 'comfyui-production-nodes', title: 'ComfyUI 生产检查与交付节点', category: 'ai-agent',
    categoryLabel: { zh: 'AIGC 生产节点', en: 'ComfyUI custom nodes' },
    summary: { zh: '插入现有 ComfyUI 工作流，在生成前检查参数与依赖，生成后记录收据并整理 DCC、引擎交付信息。', en: 'Custom nodes adding constraint checks, dependency checks, generation receipts, and DCC / engine handoff manifests.' },
    cover: '/media/repositories/comfyui-production-nodes/workflow-overview.png', tags: ['ComfyUI', 'Python', '工作流检查', 'DCC / 引擎交付'], repositoryUrl: 'https://github.com/Ubik42/ComfyUI-Production-Nodes',
    story: { zh: `# ComfyUI 生产检查与交付节点

这是一套可以直接安装到 ComfyUI 的自定义节点。它不替换采样器和模型，而是补齐生成任务前后的制作流程：任务开始前检查尺寸、批量、Denoise、像素预算、模型与自定义节点依赖；生成完成后记录 Prompt、Seed、模型、LoRA 和工作流信息，并整理交给 Maya、Blender、Houdini、Unreal Engine 或 Unity 的资产清单。

## 一套可直接插入现有工作流的节点

当前版本包含 8 个节点，分为三组：

- **生成前检查**：扫描本机 ComfyUI 环境，一次列出缺失的模型与自定义节点；检查宽高、Batch、Denoise 和总像素预算，避免错误参数进入昂贵任务。
- **工作流约定**：检查必须提供的输入和参数范围，让团队模板在换机器、换操作者后仍能发现缺项。
- **结果记录与交付**：生成可复查的任务收据，在指定工作区内安全写入 JSON，并为 DCC 与引擎整理文件角色、坐标系、单位和来源编号。

## 中文生产模板

仓库提供“生产预检与下游交接”模板。画布按照真实操作顺序分成环境检查、参数预算、工作流检查、生成收据和 DCC / 引擎交付几部分；检查报告可以直接显示在 ComfyUI 画布中，不需要离开节点图查看日志。

示例专门保留了三类可复现问题：缺少依赖、Batch 与像素预算超限、必需输入为空且 Steps 越界。节点会集中返回全部问题，而不是修正一个后再暴露下一个。

## 安全写入与可移交信息

只有“收据安全写入”节点会修改磁盘。它只能写入用户指定工作区中的相对 JSON 路径，拒绝绝对路径、目录穿越和默认覆盖。批次交接清单不复制资产，而是明确记录目标软件、项目、坐标系、单位、文件角色与 Receipt ID，方便后续工具继续处理。

## 真实运行与验证

页面中的界面截图来自加载当前仓库代码的独立 ComfyUI 实例；本地生成图来自 RTX 4080 上的真实 ComfyUI 任务。仓库同时保存对应的 API Workflow 与 Generation Receipt。版本 1.1.0 已验证 8 个节点发现、模板导入、CPU 集成流程、受限写入和交付元数据链路。`, en: `# ComfyUI Production Nodes

This package adds production checks around an existing ComfyUI graph: dimensions and budget validation, dependency inventory, workflow contracts, generation receipts, contained JSON writes, and portable DCC / engine handoff manifests.

The repository includes a real local ComfyUI output, its API workflow, and the receipt written by the package. The nodes remain model- and renderer-independent.` },
    images: [
      { src: '/media/repositories/comfyui-production-nodes/workflow-overview.png', alt: { zh: '中文生产预检与下游交接工作流总览', en: 'Chinese production workflow overview' } },
      { src: '/media/repositories/comfyui-production-nodes/dependency-check.png', alt: { zh: '环境清单与依赖预检通过', en: 'Environment inventory and dependency check' } },
      { src: '/media/repositories/comfyui-production-nodes/budget-validation.png', alt: { zh: '批量与像素预算超限被集中拦截', en: 'Batch and pixel budget validation' } },
      { src: '/media/repositories/comfyui-production-nodes/contract-validation.png', alt: { zh: '工作流必需输入与参数范围检查', en: 'Workflow input and parameter validation' } },
      { src: '/media/repositories/comfyui-production-nodes/receipt-writer.png', alt: { zh: '生成收据预览与受限工作区写入', en: 'Generation receipt and contained write' } },
      { src: '/media/repositories/comfyui-production-nodes/dcc-handoff.png', alt: { zh: '面向 DCC 与引擎的批次交接清单', en: 'DCC and engine batch handoff manifest' } },
      { src: '/media/repositories/comfyui-production-nodes/local-generation.png', alt: { zh: '本机 ComfyUI 真实生成结果', en: 'Locally generated ComfyUI output' } },
    ],
  },
];
