# Lyra 英雄射击：选人、战斗与重生换人

## 游戏概述

基于 UE 5.7.4 与 Lyra 架构搭建的五英雄射击原型，目前处于持续开发阶段。项目以独立的 HeroArena GameFeature 插件组织玩法扩展，包含五位英雄的数据资产、专属能力组合、A/B/C 轮换控制点与战术 HUD，并为机器人补充前排、输出与支援的技能决策。底层的角色移动预测、网络同步武器、GAS 基础架构、动画资产、死亡镜头与自动重生流程复用 Lyra 的原生能力。

@[video: 重生换人连续演示，约 13 秒。1 玩家 + 9 Bot；开发命令触发死亡与换人，无声。](/media/repositories/lyra-hero-arena/hero-respawn.mp4)

## 选择数据跨重生保留与装备应用

为支持阵亡期间换人，英雄选择状态与 Pawn 生命周期解耦，由挂载于 **PlayerState** 的 HeroSelectionComponent 管理。客户端通过 RequestHeroSelection 发起换人请求，经 ServerRequestHeroSelection 在服务器端完成英雄名单、锁定状态、HeroId 合法性及重复选择校验后返回确认状态，再通过复制属性 **SelectedHero** 与 OnHeroChanged 广播更新客户端表现。

换人时，系统先撤销旧 **AbilitySet 授予句柄**，再授予新技能组；清理 QuickBar 槽位中的旧物品，通过 Inventory 与 Equipment 组件装配新主武器。新 Pawn 生成后，等待其能力系统初始化完毕，再应用 PlayerState 中保留的英雄配置。

![重生窗口内切换至闪回，界面显示英雄选择成功](/media/repositories/lyra-hero-arena/respawn-confirmed-20261017.jpg)

## CommonUI 选人界面的栈管理

选人界面基于 CommonUI 制作。CommonActivatableWidget 停用并退出 UI 栈后，直接调用 ActivateWidget 无法重新显示。流程改为在监听到重生开始消息时触发 PushSelectionScreen，调用 **PushContentToLayer_ForPlayer** 将界面重新压入 UI.Layer.Menu，收到重生完成消息后关闭界面。

选人卡片的职业文字曾因区域过窄被截断。现在拓宽了卡片布局，职业说明自动换行，小窗口下整体等比缩放，保留五名英雄的完整描述。

## 验证与演示范围

2026 年 10 月的 D3D12 实机复测使用 **1 名本地玩家与 9 名 Bot**。通过开发命令触发死亡，在倒计时内使用方向键和回车切换至 Phase（闪回）；日志确认 PlayerState 选择成功，新 Pawn 保留该选择并装配 ID_Pistol_C。上方连续录像单独重录，死亡与换人请求由开发命令触发，走现有选择、确认和重生路径。

此前的双 PIE 监听服务器记录验证了早期版本 **Striker 的网络复制与跨重生保留**。该记录与本页单机换人演示分开保留；双客户端多英雄换人、弱网和完整对局录像仍待补充。

公开仓库提供自有 C++ 模块、结构说明及运行截图，不重新分发 Lyra、Fab 或 Unreal Engine 资产。
