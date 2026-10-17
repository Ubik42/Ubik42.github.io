# 沈裕焱 · UE 客户端、引擎开发与技术美术作品集

[访问个人主页](https://ubik42.github.io/)

个人作品覆盖 Gameplay、GAS 与网络同步、角色动画与物理、实时渲染和引擎工具。网站默认使用简体中文，首页以统一橱窗展示项目，详情保留完整图文、真实运行截图、演示视频与公开仓库。

当前页面重点展示四类内容：

- 游戏引擎、多人 Gameplay 与性能开发；
- Maya、Unreal 和桌面生产工具；
- AIGC、Agent 与 ComfyUI 工作流；
- Shader、程序化内容、绑定、动画和实时特效。

AIGC 板块新增“AI 角色生成与视频动作重定向”：三个角色、两段动作参考，展示六段 Blender 渲染动画，以及多视图建模、四边面重建、PBR 烘焙、54 骨骼绑定和接触修正流程。公开页仅包含角色渲染与参考来源链接，不上传真人参考视频或音乐。

AIGC 板块新增“动作导演”：当前 GPT/Codex 对话通过本地桥驱动 Unreal / ALS 角色，展示复合指令、姿态修订、连续路线与停止。详情包含独立 Windows 程序实机录像、十二项运行回归录像、路径脱敏的测试报告与源码重建包；明确区分模型回传、测试夹具和 ALS 提供的动画能力。

新增的 [CPU 软件光栅化实验室](https://github.com/Ubik42/NoemancerSoftwareRasterizer) 以 C++20 在 CPU 上显式完成三角形覆盖、透视正确插值、Z-Buffer 与逐像素着色，并通过十张真实输出展示基础缓冲、风格化 Shader 和 Overdraw 诊断。项目基于 MIT 许可的 TinyRenderer 教学实现扩展，主页与仓库均保留来源和素材授权边界。

Unreal 方向新增三项独立作品：[Lyra Hero Arena 五英雄多人对战游戏](https://github.com/Ubik42/LyraHeroArena)、[多角色高负载场景性能优化](https://github.com/Ubik42/LyraHeroArena/tree/main/Plugins/PerformanceLab) 与 [UE Performance Workbench 性能实验工作台](https://github.com/Ubik42/LyraHeroArena/tree/main/Plugins/PerformanceWorkbench)。它们共享同一套真实 Lyra 工程，但分别展示游戏流程、优化方法和 Editor 工具开发能力。

![个人主页中文首屏](docs/screenshots/homepage-zh.png)

## 当前工具体系

旧 `AIToolTA` 母仓与“万能管线 Agent”方向已经退役，不再作为现行作品介绍。相关能力已经按真实职责拆开：

| 项目 | 当前职责 | 展示证据 |
| --- | --- | --- |
| [Art Pipeline Skill](https://github.com/Ubik42/art-pipeline-skill) | 校验已注册工具、版本、只读能力、报告合同和执行回执 | 中文协议演示、Maya/Unreal 后台宿主验证、失败关闭测试 |
| [Asset Delivery Organizer](https://github.com/Ubik42/asset-delivery-organizer) | 外包资产扫描、规则检查、dry-run 整理、回滚、复检与收据 | 四组 CC0 合成交付、桌面工作台、多状态截图 |
| [Maya 场景交付检查器](https://github.com/Ubik42/maya-scene-checker) | Maya 拓扑、命名、引用和场景状态的只读检查与组件定位 | Maya 2025.3.3 可见宿主验收、五组场景、八张中文截图 |
| [Maya Garment Preparation](https://github.com/Ubik42/maya-garment-preparation) | 服装版片 UV/位置传递、修改前预检、执行后复检与单次 Undo | 七组 CC0 Maya 场景、真实 Maya 2025 工作台截图 |
| [Unreal Asset Batch Auditor](https://github.com/Ubik42/unreal-asset-batch-auditor) | 模型、纹理、材质三轨只读验收与混合交付汇总 | UE 5.8.1 原生 Slate、项目 Profile、版本化 Report 与宿主截图 |
| [Rez Studio](https://github.com/Ubik42/rez-studio-launcher) | 根据项目、软件版本、插件方案和 Rez 环境启动 DCC | Windows 桌面端、项目软件库、解析与启动诊断 |
| [MayaScope](https://github.com/Ubik42/MayaScope) | 大型 Maya 场景快照、依赖关系、运行时足迹和回归调查 | Maya 2025 GUI 生命周期验证、依赖与插件诊断截图 |
| [MayaCraft](https://github.com/Ubik42/MayaCraft) | 角色工作区、Rig Graph、形变诊断、动画重定向与 Contact IK | Maya 2025 中文工作区和四组真实界面截图 |

独立的 [ArtFlow Agent](https://github.com/Ubik42/ArtFlow-Agent) 负责 AIGC 生成编排；它与 Art Pipeline Skill 不共用仓库、Python 包或开发状态。

## 光子 AI 工具向实习内容总结

站内单独收录经过脱敏的实习内容总结，覆盖：

- Maya LOD 材质整理、贴图检查与宿主内 Web UI；
- Unreal 多 Actor 拍屏预设、C++ 数据结构、Python 编排与 Data Asset；
- 八个 Figma 插件，包括 AI 对话、批量翻译、任务交付、视觉检索、组件查重、母版更新和切图布局；
- FastAPI、SQLite、缩略图缓存、向量索引和插件动态注册；
- AIGC 自动化、DCC 无界面检查、跨 Maya 版本批处理与 FBX 结果复检；
- 版本化环境、增量构建、持续集成、发布和真实宿主回归。

页面只保留本人解决过的技术问题、实现方式和验证方法，不公开公司资产、账号、接口地址、内部仓库、原始截图或业务数据。

## 展示口径

- 截图来自项目实际运行界面或仓库明确标注的离屏 UI 展示，不使用设计稿冒充运行结果；
- 合成素材会记录生成方法、用途和许可证；Unreal Engine 内容只提供本机生成脚本，不重新分发引擎资产；
- 尚未完成的功能会写进“当前边界”或后续计划，不描述为现有能力；
- 每个项目的准确安装方法、支持版本、测试结果和限制以对应仓库 README 为准。

## 本地开发

### 作品与详情维护

- `?work=<id>` 直达项目详情；`?category=engine-games&q=GAS` 保存分类和关键词。详情的“复制链接”只复制项目地址，不携带当前筛选条件。
- `MarkdownStory` 支持段落、列表、图片、视频、表格、代码块与 `:::details`。三个及以上二级标题自动生成章节导航；图片可放大并查看原始尺寸。
- `@[flow](blink)`、`@[flow](getup)`、`@[flow](director)` 对应源码驱动的状态流程图。实现变化时同步检查 `MechanismFlow.tsx` 中的状态归属和限制。
- `src/data/coverPreviews.json` 将原封面映射到列表预览。详情始终使用原图；更换封面路径后自动回退到新原图。预览生成脚本位于关联工程 `ue-client-portfolio-lab/scripts/prepare_cover_previews.py`，记录在 `evidence/site24-cover-previews.json`。
- House of Vampires 的 `published-*.png` 来自[团队 itch.io 发布页](https://musitive.itch.io/hov)，作为游戏封面和场景展示；原有开发图文继续保留。

```powershell
npm ci
npm run typecheck
npm run lint
npm run build
npm run dev
```

技术栈：React 19、TypeScript、Vite、Motion for React、React Three Fiber 与 Three.js。

## English summary

This repository hosts Lucas Shen's portfolio for technical art, game-engine tooling, DCC production tools, and AI-assisted art workflows. Chinese is the primary language. The former AIToolTA umbrella has been retired and replaced by focused, independently verifiable tools and a small Art Pipeline Skill.

## 光线追踪架构与性能实验

[项目详情](https://ubik42.github.io/?work=ray-tracing-hardware) 展示 CS 6959 前六次 Arches / TRaX 实验，置于全部作品及引擎与游戏分类首位。内容包括 kernel、缓存层级、自定义指令、球体求交单元、实际输出和脱敏日志。2.54× 为固定三球场景下的模拟周期加速；缓存调整的对照同时改变多项配置。期末项目仍处于选题阶段。
