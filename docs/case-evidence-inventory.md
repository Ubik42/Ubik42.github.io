# 个人主页案例与证据清单

## 选择原则

主页案例不是仓库目录，也不是完整功能列表。每个案例必须同时回答：

1. 解决了什么生产问题。
2. 哪部分由确定性系统负责。
3. AI 在哪里提供辅助，边界是什么。
4. 有什么公开、安全、可复核的证据。
5. 访客下一步可以去哪里深入查看。

所有来自公司经验的方法均以公开合成 fixture 和重新实现的模块表达。首页不出现内部项目名、内部路径、真实资产、公司源码或私有报告正文。

## 首页首批案例

### 1. Production Rules Across DCC and Engine

**角色：旗舰案例。** 合并 `Asset Protocol Workbench` 与 `Cross-DCC Rule Matrix`，避免把同一条规则工程能力拆成两个相似项目。

- 生产问题：资产协议散落在命名、节点属性、UV、vertex color、材质和口头约定中，不同 DCC 的检查逻辑容易重复实现并产生漂移。
- 核心系统：版本化 protocol schema、标准化 collector adapter、共享 rule DSL、fix preview、manual-only disposition、publish gate、JSON evidence。
- AI 职责：解释阻断原因、归纳 adapter gap、起草规则与修复顺序。
- 确定性边界：AI 不改变 rule result，不把 skipped 或 warning 当作 pass，不直接修改场景；安全修改也必须先预览。
- 公开证据：synthetic fixture、字段级 before/after diff、Maya scene facts、跨 DCC heatmap、验证报告与发布门禁。
- 候选截图：
  - `D:\cs\AIToolTA_Portfolio\assets\asset-protocol-r1-5-staged-preset-full.png`
  - `D:\cs\AIToolTA_Portfolio\assets\cross-dcc-rule-matrix-r2-4-fix-diff-full.png`
- 首页呈现：不展示整张长图。抽取 protocol editor、rule heatmap、fix diff、publish gate 四个局部，组成从输入到证据的横向工作流。

建议短文案：

> A shared asset protocol and rule layer that turns Maya, Blender, and Unreal facts into reviewable publish decisions.

### 2. Visual Review as a Reproducible Contract

**角色：第二重点案例。** 展示技术美术中的视觉判断如何被固定、解释和交接。

- 生产问题：A/B 视觉评审如果相机、LOD、材质、单位和 pass 条件不固定，截图无法稳定比较，也难以复盘。
- 核心系统：固定 camera rig、LOD bucket、pass manifest、diff signals、review queue、owner handoff、release gate。
- AI 职责：把 deterministic findings 整理成 artist/reviewer 可读的说明与通知草稿。
- 确定性边界：AI 不改变 pass run/skip、阈值、gate 或人工签收状态。
- 公开证据：synthetic review fixtures、signal-to-pass 关系、batch report、handoff receipt、Maya capture manifest。
- 候选截图：
  - `D:\cs\AIToolTA_Portfolio\assets\visual-review-r3-10-workflow-map-full.png`
  - `D:\cs\AIToolTA_Portfolio\assets\visual-review-r3-1-pass-matrix-full.png`
- 首页呈现：使用 camera/pass 图、四个核心 signal 和 release decision 三层，不把长工作台当作背景贴图。

建议短文案：

> A review pipeline that fixes cameras, passes, thresholds, and handoff evidence before anyone argues from screenshots.

### 3. Personal AI Workflows for Research and Presentation

**角色：个人方法与能力广度。** 证明 AI 工具 TA 的能力不只服务单个 DCC，也能构建内容、研究和长期自动化工作流。

- `beautiful_slidev`：Slidev theme/addon 研究、GSAP + Three.js 演示实验、可复用视觉研究数据。
- `slidev_ppt_tool`：Slidev 与 PPT 往返、对象提取和 DrawingML 回写方向。
- `paper_analyser`：开放论文采集、SQLite 状态真源、MinerU 全文提取、分类与 Obsidian 长期知识库。
- `codex-RDD`：额度、概率、活跃状态和人工批准共同约束的长任务调度系统。
- 共同方法：结构化输入、可恢复状态、明确门禁、可验证产物、人类审批。
- 首页呈现：四个工具不做四张平级卡，而是用一个“个人工具生态”关系图，选两项显示实时规模或验证证据。

建议短文案：

> Personal systems for turning research, presentation, and long-running agent work into resumable, inspectable pipelines.

### 4. MayaCraft

**角色：持续项目入口。** 放在精选案例之后，作为 DCC 工程深度和长期维护能力的补充。

- 项目：面向 Maya 2025 的模块化绑定与 TD 工具系统。
- 技术：Python 3.11、Maya API 2.0、PySide6、AuroraView。
- 重点：FK/IK、面部绑定、节点分析、控制器形状与蒙皮工具。
- 公开入口：`https://github.com/Ubik42/MayaCraft`
- 首页呈现：一张较小的 ongoing project strip，清楚标注持续开发状态，不和前三个成熟叙事争夺首屏。

## 可直接公开的身份材料

- 姓名：Lucas (Yuyan) Shen / 沈裕焱。
- 定位：AI Tool Technical Artist。
- 教育：University of Utah EAE Technical Art；Shanghai Jiao Tong University, Industrial Engineering。
- 公开社交：GitHub、ArtStation、Bilibili、小红书。
- 头像候选：`D:\manage\微信图片_2026-08-04_180445_730.jpg`。

## 仍需补齐的证据

- 为旗舰案例制作一张 16:10 的首页专用合成图，而不是复用超长页面截图。
- 补录 Maya 内实际运行的干净截图，至少覆盖 protocol inspect、rule validation、capture manifest 中的两个场景。
- 为个人工具生态挑选 2–3 个可公开仓库链接；未公开项目只展示方法和状态，不放无效 CTA。
- 联系邮箱由本人确认后再公开。

