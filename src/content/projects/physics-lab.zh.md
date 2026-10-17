# UE5 SIGGRAPH 物理复现实验室

这是我的个人 UE 物理实验室。我从近年的 SIGGRAPH / SIGGRAPH Asia 物理论文中选择适合实时验证的部分，把公式里的状态、约束和求解过程接到 UE 5.4.4、Lyra、Chaos 与真实资产工作流中。

## 角色物理：相同冲量下的两种响应

@[video: UE 5.4.4 实机 · 被动 Chaos 与 Physics Control 同冲量对比 · 固定 60 Hz · 无声](/media/repositories/siggraph-physics-lab/character-impulse.mp4)

A/B 测试采用相同 Manny 资产，每路 22 个刚体，在 60 Hz 固定步长下记录 6 秒、360 个样本。0.5 秒时向两路 `spine_03` 施加相同的 `5200 kg·cm/s` 冲量。

- **左侧：被动 Chaos。** 保留原生刚体、关节约束与地面碰撞，受力后进入布娃娃运动。
- **右侧：Chaos + Physics Control。** 配置 21 个父空间姿态控制和 1 个 pelvis 世界空间控制，pelvis 目标固定在初始位置。

这组配置中，`MaxForce / MaxTorque = 0` 表示不限力。实验观察的是目标姿态追踪和抗扰响应，pelvis 的世界空间控制提供位置约束。

## 结果怎样量测

每个 PostPhysics 阶段记录骨骼姿态与 pelvis 位置。姿态误差是 22 个刚体相对各自初始旋转的角距离均值；位移是 pelvis 与初始位置的距离。

2026-10-17 按原配置复测，360 个固定步样本通过校验，以下终态数值与 2026-08-30 的记录一致：

- **平均姿态角误差：107.604° → 27.144°。** 对比被动 Chaos 与主动控制。
- **pelvis 位移：152.214 cm → 2.996 cm。** 主动路包含固定世界空间目标。

[源码与实验记录](https://github.com/Ubik42/ue5-siggraph-physics-lab/blob/main/Docs/Cases/Case05_物理驱动角色.md)

[本次与历史采样数据](/media/repositories/siggraph-physics-lab/character-evidence.json)

视频节选仿真时间 0.3—6 秒，末帧停留 2 秒；开头的材质准备画面已剪去。数据记录覆盖完整 6 秒。录制使用固定步推进，画面编码耗时不作为性能指标。

## 倒地之后，怎样交回动画与移动

跌倒起身在独立场景中实现。系统根据 Chaos 中 pelvis 的朝向选择 ALS 俯卧或仰卧起身动作；起身受接触检测、线速度/角速度阈值及至少 **0.35 秒稳定时间**限制，高速状态拒绝执行。

进入恢复后，Physics Control 驱动刚体追踪重定向动作。动作结束时，先销毁 Control 与 Body Modifier，再关闭物理模拟并恢复动画控制。这个清理顺序避免下一帧的 Body Modifier 再次启用模拟。

![独立起身场景：俯卧、仰卧与高速拒绝三路对照](/media/repositories/siggraph-physics-lab/character-getup.png)

起身截图与记录采集于 2026-08-30，本轮复测范围为上方的同冲量 A/B 场景。

Lyra 的可恢复跌倒组件与死亡状态分开，**DeathState 优先**。客户端发送起身请求，服务器根据角色状态确认恢复，再交回 Character Movement。起身场景和联机组件分别验证；上方冲量视频展示的是姿态抗扰实验。

## 实现分工

底层 Chaos、Physics Control 与 Lyra 框架由 Epic 提供，起身动作源自 ALS。个人工作涵盖 A/B 扰动负载设计、时序数据采样与导出、起身条件判断、控制权交接、Game Feature 模块接入及失败用例分析。当前实现采用确定性控制，论文用于系统分层设计参考。

## 五个研究案例

- **接触感知 GPU 布料**：读取 Assassin 的 Clothing 拓扑、动画蒙皮目标与 Physics Asset，在 RDG Compute 中实现 Jacobi、低频模态、NDB、rank-one 接触和 CCD，并与 Chaos Cloth 共用输入。
- **多尺度 GPU 软体**：用四面体 XPBD 研究高分辨率下的局部传播停滞，以两模态全局校正改善中高档收敛，再通过体积 Cage 驱动 Dragon 表面。
- **Particle Flow Map 流体**：实现 2D MAC 网格、粒子 Flow Map、Jacobian 输运和压力投影，让 Chaos 刚体成为实时运动边界。
- **可微物理与反向设计**：对离散动力学推进前向切线，用有限差分验证梯度，并把反演参数送回 Chaos Constraint 重放。
- **物理驱动角色**：连接 Chaos 多刚体、Physics Control、ALS 起身动画与 Lyra 服务器权威，处理跌倒、恢复判据和物理—动画交接。

每个 Case 都保留标准结果、单变量失败、固定步数据、GPU 或 CPU 计时和自动化验证。公开仓库不重新分发 Fab 商业资产，只提交个人源码、Shader、文档和运行截图。
