# Through Other Eyes

这是一个运行于 VR 的视障体验项目。玩家以受限视觉穿过城市，通过白杖、声音、广播和导盲犬理解空间并寻找前进方向。在两人团队中，我同时承担程序、技术美术与玩法策划工作：参与定义核心体验，负责地图路线、事件节奏与交互节点设计，并完成场景搭建、事件逻辑、导盲犬和角色脚部绑定动画，以及 Shader、VFX、UI 和 Opening Scene。

![项目 One Sheet](/media/projects/through-other-eyes-cover.webp)

## 路线与交互点

我把抽象的“视障体验”拆成一条可以实际游玩的城市路线：用障碍物控制行进节奏，以广播和手机提供声音线索，再通过车辆、导盲犬等事件改变玩家对空间的判断。关卡规划图标出了路线、触发区和关键事件，场景搭建与事件脚本均围绕这套节奏展开。

![完整关卡路线与交互点规划](/media/projects/through-other-eyes-level.webp)

## VR 实机画面

![在城市中找到导盲犬](/media/projects/through-other-eyes-vr.png)

![白杖探索与城市广播文字](/media/projects/through-other-eyes/screenshot2.png)

![障碍碰撞反馈](/media/projects/through-other-eyes/screenshot3.png)

![手机广播交互](/media/projects/through-other-eyes/screenshot4.png)

项目没有合适的 VR 录制版本，因此这里保留头显中的实际截图，而不使用与成品无关的替代视频。

## 从体验设计到 VR 落地

前期集中探索受限视觉下的渲染语言与 Shader，并尝试让地面物体产生漂浮墨水效果。测试后发现它会干扰路线阅读，因此没有为了保留效果而强行采用。

![Shader 与渲染效果测试](/media/projects/through-other-eyes-diary/image-000.png)

![浮动墨水 Shader 实验](/media/projects/through-other-eyes-diary/image-001.png)

中后期我把工作重点转向可玩的事件链：补齐 VFX 与 UI 反馈，制作导盲犬及脚部绑定动画，搭建 Opening Scene，并把地图中的提示、碰撞、广播和移动事件串成完整体验。

![VFX 测试](/media/projects/through-other-eyes-diary/image-002.png)

![导盲犬模型与绑定工作](/media/projects/through-other-eyes-diary/image-003.png)

![谜题与 UI 反馈设计](/media/projects/through-other-eyes-diary/image-005.png)

![交互提示设计](/media/projects/through-other-eyes-diary/image-007.png)

![Opening Scene 与标题画面](/media/projects/through-other-eyes-diary/image-009.png)

这个项目让我在极小团队中把策划、关卡、程序和技术美术放在同一条体验链上思考：视觉效果是否保留，不取决于它单独是否漂亮，而取决于它能否帮助玩家读懂空间并推动事件。
