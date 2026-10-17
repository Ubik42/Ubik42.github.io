# Lyra 英雄射击：GAS 深度实践与技能架构

## 游戏概述

基于 UE 5.7.4 与 Lyra 架构搭建的五英雄射击原型，目前处于持续开发阶段。项目以独立的 HeroArena GameFeature 插件组织玩法扩展，包含五位英雄的数据资产、专属能力组合、A/B/C 轮换控制点与战术 HUD，并为机器人补充前排、输出与支援的技能决策。底层的角色移动预测、网络同步武器、GAS 基础架构、动画资产、死亡镜头与自动重生流程复用 Lyra 的原生能力。

## Lyra 轮换占点模式完整对局展示

项目基于 UE 5.7.4 / Lyra 搭建，展示 Striker 玩家在阵亡后自动重生并重返活动控制点参与交火的完整循环。

@[video: 轮换占点完整对局，约 6 分 20 秒，无声、无剪切，按游戏时间播放。单机 1 玩家 + 9 Bot，脚本通过 Enhanced Input 操作；保留死亡等待与转点过程，未开启无敌、传送、伤害注入或强制占点。](/media/repositories/lyra-hero-arena/full-match.mp4)

本次从 **0:0** 推进至 **125:91**，队伍 1 达到目标分后自然进入赛后阶段，比分停止增长。录像覆盖 A/B/C 三点轮换，赛后画面继续保留约 5.2 秒。

结算复用 **ShooterCore 原生占点计分与终局逻辑**。自有轮换组件负责维护 A/B/C 点状态，在停用控制点时清空其占有者缓存，使轮出点不再贡献分数，同时扩展了战术 HUD 与不干扰对局的只读阶段诊断。

[对局记录与实现分工](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/完整占点对局.md)

### 比赛结算与下一局衔接

原战术 HUD 仅读取控制点状态，结算后仍残留轮换倒计时。现在由服务器轮换组件识别 **PostGame**，停止轮换计时并复制结束标记；客户端清理占点、重生引导及技能失败提示，显示“比赛结束 · 等待下一局”。后续等待与 **SeamlessTravel** 复用 Lyra 原生流程，新世界实例重置结束标记。

![主动触发结算后的拥有客户端：原生终局画面中，战术 HUD 显示“比赛结束 · 等待下一局”](/media/repositories/lyra-hero-arena/postgame.png)

独立 Dedicated Server 与拥有客户端完成自动切局，新局比分为 **0:0**。重新选择 Phase 后，两端四项英雄来源 AbilitySpec 无重复，ASC Avatar 正确；释放闪现后充能 **3→2**、待确认清零，位移约 **205 cm** 且双端一致。

![自动进入下一局：目标 A 提示恢复，Phase 释放一次闪现后剩余 2/3 充能](/media/repositories/lyra-hero-arena/next-round.png)

这组截图来自主动触发结算的定向测试：非打包、同机 Loopback、单拥有客户端，两端各配置 150 ms 出站延迟与 2% 出站丢包。上方完整对局保留原始录像，其赛后 HUD 为旧版表现。[切局实现与双端记录](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/比赛结算与下一局.md)

## 游骑：射击、恢复场与轮换控制点

游骑 Striker 的技能与占点规则由 HeroArena 扩展实现，基础移动、武器、动画及重生流程复用 Lyra。下方为单机 1 玩家加 9 Bot 的连续片段：脚本读取只读寻路和视线可达敌人的位置，通过既有 Enhanced Input 输入移动、射击与技能。

@[video: 游骑连续实机片段，约 65 秒，无声。保留完整过程与等待，按游戏时间播放；自动输入，未开启无敌、传送、伤害注入或强制占点。](/media/repositories/lyra-hero-arena/striker-combat.mp4)

### 恢复场：权威治疗与脉冲反馈

**RecoveryField** 采用 LocalPredicted GameplayAbility。激活时先执行 CommitAbility 处理冷却等提交，只有 Authority 分支生成恢复场 Actor。Actor 记录所属队伍与到期时间，服务器定时检索范围内友方，通过标准 **GameplayEffect** 路径应用治疗。实际治疗成功后递增 HealingPulseSequence 并触发 ForceNetUpdate，客户端由 **OnRep** 驱动 Niagara 脉冲。治疗计算由服务器负责，客户端按复制结果播放反馈；本段录像覆盖单机流程。

### 目标轮换：分离玩法坐标与隐藏状态

控制点组件保存各点的原始 Transform。原逻辑将非活动点移入地下 100000 单位隐藏，预告下一目标时误读其实时坐标，目标高度变为约 −99948，导致导航失败。修复后读取 **OriginalTransforms** 中的初始位置，避免临时位移污染玩法坐标。单机测试已验证初始预告与 A 到 B 轮换，目标高度和寻路恢复正常。

实现入口：[恢复场能力](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Abilities/HeroArenaGameplayAbility_RecoveryField.cpp)、[恢复场 Actor](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Actors/HeroArenaRecoveryField.cpp)、[控制点轮换](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Components/HeroArenaControlPointRotationComponent.cpp)。

## Phase 闪回：闪现充能与历史状态回溯

在 HeroArena GameFeature 中，基于 Lyra 的 GAS 框架与角色资产，为 Phase 实现闪现与回溯。GameplayAbility 组织技能激活，PlayerState 组件维护充能和历史记录，战术 HUD 显示剩余次数、冷却与失败原因。

@[video: 闪回技能机制，两段实机案例，约 19 秒。1 玩家 + 9 Bot；Enhanced Input 自动输入，录制前设置起点、选人并开启无敌保护，无声。](/media/repositories/lyra-hero-arena/phase-gameplay.mp4)

### 胶囊体检测与闪现落点

Blink 使用 **LocalPredicted GameplayAbility**。激活时沿角色朝向发起最长 700 单位的 Capsule Sweep；遇到障碍物时缩短位移，若有效距离不足 80 单位则拒绝释放，保留充能。检测通过后位移，并触发冲刺 Montage 与 GameplayCue。撞墙拒绝和充能不足均通过失败消息显示中文原因。

### 三格充能与失败反馈

闪现的 3 格充能由 **PlayerState 自定义组件**维护，服务器按序每 4 秒恢复 1 格，仅向拥有客户端同步。本地施法通过独立的待确认请求记录预测扣减，收到服务器确认或拒绝后更新 HUD。充能耗尽时，GAS 失败 Tag 触发 Lyra 消息；战术 HUD 匹配所属 PlayerController，显示 1.8 秒提示，并在界面销毁时注销监听。

### 服务器采样与状态回溯

Recall 使用 **ServerOnly GameplayAbility**。服务器每 0.1 秒记录 Pawn 的位置、朝向、生命及当前手枪实例的弹匣，保留约 4 秒历史。技能定位约 3 秒前的样本，校验 Pawn、武器实例与落点碰撞；落点受阻时尝试较新的合法样本。成功后恢复历史位置、生命与弹匣，清空旧记录并进入 8 秒冷却。重生、换人或武器变化时清除不匹配记录。

两段录像分别展示充能耗尽，以及碰撞拒绝后回溯位置和弹匣。第二段回溯采用约 3.04 秒前的记录，弹匣从 10 发恢复到 11 发。生命同样按历史值恢复，可能降低；录像启用了无敌保护，生命保持不变。上方两段演示覆盖单机技能流程；Blink 的双端预测与弱网验证见下节。

实现入口：[闪现能力](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Abilities/HeroArenaGameplayAbility_Blink.cpp)、[充能组件](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Components/HeroArenaBlinkChargeComponent.cpp)、[回溯历史](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Components/HeroArenaRecallHistoryComponent.cpp)。

## 闪现充能预测回滚与网络同步修复

在 Phase 闪现（LocalPredicted GA）的原实现中，客户端直接修改收到的服务器充能值，以呈现预测扣减。通过开发指令仅在服务端阻止激活时，CMC 纠正了客户端位移，但客户端充能状态因缺乏回退机制滞留在 2 格，服务端为 3 格；2.4 秒后仍未恢复。

@[video: 双 PIE 弱网演示，14 秒，无声。两端各配置 150 ms 出站延迟与 2% 丢包；预设起点、自动输入，开发指令注入服务器拒绝。双视角顺序采样，按各自时间戳播放，展示预测扣减、拒绝恢复、成功释放及充能。](/media/repositories/lyra-hero-arena/blink-network.mp4)

修复采用**预测键结算模型**：客户端通过 **PendingPredictionKeys** 独立记录待确认扣减。收到 **FPredictionKey** 拒绝回调时撤销对应扣减；服务端处理成功或在技能内因碰撞拒绝后，将已处理键与充能状态一起复制，在 **OnRep** 中统一结算。**ResetEpoch** 隔离换人、重生前后的请求，弱引用委托避免组件销毁后继续调用。

普通网络与模拟弱网均在同进程监听服务器和拥有客户端间验证。弱网下，两端 NetDriver 各配置 150 ms 出站延迟与 2% 出站丢包；日志记录了以下变化：

- **客户端已预测、服务器尚未处理：**服务器 3 格，客户端显示 2 格，待确认请求 1 个。
- **收到服务器拒绝：**双端均为 3 格，待确认请求清零。
- **正常释放一次并确认：**双端均为 2 格，待确认请求为零。
- **再连续释放两次并确认：**双端均为 0 格，待确认请求为零。
- **恢复一格充能：**双端均为 1 格，待确认请求为零。
- **换人重置：**双端均为 3 格，待确认请求为零。

以上记录来自独立的连续释放测试；视频展示一次拒绝和一次成功释放。延迟与丢包为模拟器配置，未将其等同于实测 RTT。[双 PIE 记录与测试条件](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/data/blink-network.json)

## 独立服务器：闪现预测、换人与重生

进一步将 Dedicated Server 与拥有客户端拆成两个独立进程，通过同机 Loopback UDP 连接。普通网络和双端各 **150 ms 出站延迟、2% 出站丢包**两组运行，均完成闪现拒绝、正常释放、充能补充、换人及重生流程；延迟配置不作为实测 RTT。

- **预测拒绝与位置恢复：**客户端先显示 2 格充能、1 个待确认请求。开发入口仅在服务器阻止激活，GAS 拒绝返回后，客户端恢复 3 格，待确认清零，CMC 将角色拉回起点。解除阻止后再次释放，双端消耗至 2 格，实际位移约 205 cm；障碍检测缩短了最大 700 cm 的位移。
- **换人时替换能力集合：**切至 Striker 时，两端持有 7 项英雄来源 AbilitySpec；再切至 Phase 时为 4 项，无重复授予。充能补充单独检查同一 Pawn，避免将重生重置误判为冷却完成。
- **重生后重新绑定 Avatar：**使用 Lyra 标准自毁路径触发测试死亡，在约 9 秒后的采样中确认新 Pawn 与 ASC Avatar 对应，Phase 的 4 项能力和满充能状态正常。

![独立拥有客户端重生后：Phase 的技能栏、充能和手枪正常显示；双端状态另由阶段记录核对](/media/repositories/lyra-hero-arena/standalone-respawn.png)

本次补充开发专用跨进程驱动与双端状态检查，技能请求及复制仍走 UE NetDriver，GAS、CMC 和基础重生复用 Lyra。当前覆盖非打包、同机独立进程及单拥有客户端；联网完整比赛、多人并发和公网仍待补充。[源码、阶段记录与复现方法](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/跨进程网络案例.md)

### 闪现充能倒计时：隔离客户端时钟偏差

Phase 每 4 秒恢复一格充能，上限 3 格。旧界面用服务器截止时间减去 GameState 在客户端估计的服务器时间，历史启动记录曾显示 7.54 秒。本次在仅向拥有者复制的充能结构中加入快照时间与周期编号：先在**同一服务器时钟基准**上计算剩余时长，再用客户端本地游戏时间递减。服务器继续负责充能恢复与技能激活判定。

同一周期的后续状态只缩短显示，避免再次扣减或请求确认重启倒计时；新周期重新计时，ResetEpoch 隔离换人和重生。独立服务器测试中，两端各配置 150 ms 出站延迟与 2% 出站丢包，并向客户端一次性注入 −8 秒时钟偏差。收到同一条充能状态时，旧公式计算出 **4.818 秒**，新显示为 **4.000 秒**，随后连续递减。这是故障注入结果；本轮普通新启动未复现历史的 7.54 秒。

显示仍受状态复制和传输延迟影响，服务器确认的可用次数始终优先。本地倒计时归零不会自行发放充能。[计时实现、运行记录与取舍](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/闪现充能倒计时.md)

## GAS 技能架构：选择数据跨重生保留与装备应用

@[video: 重生换人连续演示，约 13 秒。1 玩家 + 9 Bot；开发命令触发死亡与换人，无声。](/media/repositories/lyra-hero-arena/hero-respawn.mp4)

为支持阵亡期间换人，英雄选择状态与 Pawn 生命周期解耦，由挂载于 **PlayerState** 的 HeroSelectionComponent 管理。客户端通过 RequestHeroSelection 发起换人请求，经 ServerRequestHeroSelection 在服务器端完成英雄名单、锁定状态、HeroId 合法性及重复选择校验后返回确认状态，再通过复制属性 **SelectedHero** 与 OnHeroChanged 广播更新客户端表现。

换人时，系统先撤销旧 **AbilitySet 授予句柄**，再授予新技能组；清理 QuickBar 槽位中的旧物品，通过 Inventory 与 Equipment 组件装配新主武器。新 Pawn 生成后，等待其能力系统初始化完毕，再应用 PlayerState 中保留的英雄配置。

![重生窗口内切换至闪回，界面显示英雄选择成功](/media/repositories/lyra-hero-arena/respawn-confirmed-20261017.jpg)

## GAS 英雄切换与重生的双端复制验证

在同进程 D3D12 双 PIE 环境下，通过开发指令触发了 **Striker 到 Phase** 的换人与重生验证。通过 `PlayerId=257` 对齐双端只读日志：

- **切换前：**服务器与拥有客户端均持有 7 项来源为 Striker 的 AbilitySpec，包含工程期选人及 Bot 辅助能力。
- **切换后：**双端均变更为 Phase 的 4 项专属能力：Blink、PhasePistolTuning、Recall、StickyBomb，Striker 来源能力无残留。
- **重生后：**服务器与客户端的 Pawn 分别由 C_10 和 C_0 重建为 C_14，两端 ASC Avatar 均正确绑定新 Pawn，技能集保持为上述 4 项且无重复授予。

第二名玩家保持 Striker 状态；拥有客户端查看远端玩家时，其 AbilitySpec 计数为零，符合所有者复制的可见范围。

![拥有客户端换人重生后的实机画面：Phase 的闪现、回溯、被动与终极技能状态已更新；顶部目标提示与比分栏分离](/media/repositories/lyra-hero-arena/network-respawn-client-20261017.jpg)

## CommonUI 选人界面的栈管理

选人界面基于 CommonUI 制作。CommonActivatableWidget 停用并退出 UI 栈后，直接调用 ActivateWidget 无法重新显示。流程改为在监听到重生开始消息时触发 PushSelectionScreen，调用 **PushContentToLayer_ForPlayer** 将界面重新压入 UI.Layer.Menu，收到重生完成消息后关闭界面。

选人卡片的职业文字曾因区域过窄被截断。现在拓宽了卡片布局，职业说明自动换行，小窗口下整体等比缩放，保留五名英雄的完整描述。

## 验证与演示范围

2026 年 10 月的 D3D12 实机复测使用 **1 名本地玩家与 9 名 Bot**。通过开发命令触发死亡，在倒计时内使用方向键和回车切换至 Phase（闪回）；日志确认 PlayerState 选择成功，新 Pawn 保留该选择并装配 ID_Pistol_C。上方连续录像单独重录，死亡与换人请求由开发命令触发，走现有选择、确认和重生路径。

**监听服务器与拥有客户端**的换人和重生结果通过只读日志与截图对齐；Blink 另有弱网双视角演示，以及独立 Dedicated Server 的普通网络、弱网阶段记录。单机完整比赛结算已在上方连续录像中展示，联网完整比赛仍待补充。

公开仓库提供自有 C++ 模块、结构说明及运行截图，不重新分发 Lyra、Fab 或 Unreal Engine 资产。

相关性能案例：[200 角色动画更新优化](/?work=lyra-performance-lab)、[战术 HUD 刷新与 UE 性能实验工作台](/?work=ue-performance-workbench)。
