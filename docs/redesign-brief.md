# GitHub 个人主页重做简报

## 当前判断

现有主页完成了基础 GitHub Pages 发布，但内容仍以早期 Vue、Three.js 项目为主，无法准确表达当前 AI 工具 TA 定位。`D:\cs\AIToolTA_Portfolio` 已积累大量工作台、DCC adapter、规则系统和证据截图，但它更接近深度评审产品，不适合直接承担个人主页首屏。

新主页采用两层结构：

```text
GitHub 个人主页
├── 快速定位：AI Tool Technical Artist
├── 精选案例：问题、系统、AI 边界、证据、入口
├── 能力地图：DCC / Engine / Pipeline / AI / Graphics
├── 经历与方法：教育、工作范围、工具观
└── 深入入口：Portfolio Toolbench / GitHub / ArtStation / Bilibili / 小红书
```

## 首版页面构成

### 1. Identity / Hero

- Lucas (Yuyan) Shen / 沈裕焱。
- 主要定位：AI Tool Technical Artist。
- 一句具体说明：为 DCC、引擎和美术生产流程构建可检查、可运行、可持续迭代的 AI 辅助工具。
- 主要入口：查看精选案例、进入完整 Toolbench。
- 次要入口：GitHub、ArtStation。
- 头像候选：`D:\manage\微信图片_2026-08-04_180445_730.jpg`。

### 2. Current practice

用一张可交互的“工具链路图”代替技能标签墙：

```text
Production problem
→ Context / fixture collection
→ Deterministic rules
→ AI diagnosis or drafting
→ Human review
→ DCC / engine execution
→ Evidence and handoff
```

该区域是主页的标志性图形母题，使用真实案例状态和证据数量驱动，不做随机装饰。

### 3. Selected systems

首版优先从以下公开、安全、证据较完整的方向选择 3–4 个案例：

1. **Asset Protocol Workbench**：资产协议、规则、平台预算、验证与发布准备度。
2. **Cross-DCC Rule Matrix**：统一规则 DSL 与 Maya / Blender / Unreal adapter 思路。
3. **Visual Review Studio**：固定条件下的视觉对比、批量检查、报告与交付证据。
4. **AI-assisted presentation and knowledge tools**：`beautiful_slidev`、`slidev_ppt_tool`、`paper_analyser` 等个人工具链。
5. **MayaCraft**：面向 AI 协作的模块化 Maya 绑定与工具框架，作为持续开发项目。

案例摘要固定回答：真实问题、核心系统、AI 的职责、确定性门禁、可验证证据、深入入口。

### 4. Range and background

用短时间线解释能力来源：

- 当前：游戏美术生产中的 AI 工具、Maya / Unreal / Figma / DCC 插件与工具管线。
- 研究生：犹他大学 EAE 技术美术方向。
- 早期经历：游戏客户端、系统策划、工业数字孪生、调度优化。
- 教育背景：上海交通大学工业工程本科。

时间线服务于能力形成，不把页面做成完整简历。

### 5. Footer / public identity

- GitHub：`https://github.com/Ubik42`
- ArtStation：`https://lucasshen2002.artstation.com/`
- Bilibili：`https://space.bilibili.com/12367861`
- 小红书：`https://www.xiaohongshu.com/user/profile/670526b2000000001e001891`
- 公开联系邮箱是否展示，在实现联系方式模块前单独确认。

## 视觉方向

主页属于 Impeccable `brand` register，但吸收现代精密工具风格：

- 品牌层负责强定位、节奏、案例叙事和记忆点。
- 工具层负责状态、证据、数据、关系图和交互精度。
- 视觉不是复制 GAP Tool 深色皮肤，而是复用其紧凑层级、克制边界、业务画布和状态反馈。
- 以真实工具截图和协议图作为主要视觉材料。
- React Bits 只用于一个与“工具链路 / 证据流”相关的标志性效果。
- Motion for React 负责案例切换、关系展开、布局过渡和滚动进入状态。

## 公开边界

- 使用个人头像、姓名、教育背景、公开社交链接和公开仓库。
- 公司经历只描述职责范围和可迁移方法。
- 内部项目名称、内部路径、内部代码、未公开资产和真实业务数据不进入站点。
- 电话、微信和其他私人联系方式不进入首版。
- 作品集中的模拟数据和公开 fixture 必须明确标记为 synthetic / reconstructed。

## 技术方向

- 将当前单文件站升级为 React + TypeScript + Vite。
- 使用 Motion for React 作为默认动效层。
- 从 React Bits 按需复制一个与核心视觉母题相关的组件源码。
- 保留 GitHub Pages 的静态部署能力。
- 后续建立案例数据文件，让主页可以持续增加案例而不用重写页面结构。

## 第一阶段完成条件

- `PRODUCT.md` 确认个人主页的 brand register、访客、目的与公开边界。
- 页面信息架构和首批案例池明确。
- 用户确认视觉方向、语言策略、公开联系方式和首批重点案例后，进入 React 实现。
