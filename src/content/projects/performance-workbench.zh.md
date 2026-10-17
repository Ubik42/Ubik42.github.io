# UE 性能实验工作台

## 工作台设计

基于 Lyra 开发了 Slate 编辑器插件 PerformanceWorkbench 与运行时采样模块 PerformanceLab，通过 JSON 传递配置与结果实现模块隔离。测试按 ABBAAB 顺序交替运行 3 次基线与 3 次改动，记录硬件、驱动、分辨率、RHI、Seed 并导出原始 CSV。对比前自动校验受控角色数、固定镜头与 RHI；早期因预设漏注册误将 9 Bot 按 200 NPC 校验导致无效，修复后重新采样并保留了失败批次。

## HUD：常规状态分频更新

基于 Lyra 扩展的 `UHeroArenaCombatHUDWidget` 承载技能冷却、状态标签、目标信息与队伍阵容。优化针对原先每帧查询的冷却、状态和目标信息，阵容沿用独立的 0.25 秒更新间隔。

Widget 保留 Tick，通过 **FPlatformTime 单调时钟**决定何时刷新常规状态。在 NativeTick 中达到 NextRuntimeRefreshTime 后，才调用 RefreshRuntimeState 与对应目标刷新；每次将下一时点设置为当前时间加 0.1 秒。配置上限为 10 Hz，实际频率还受帧调度影响。

冷却由 UI 只读查询 ASC 中带标签 GameplayEffect 的剩余时间，技能结算仍由 GAS 负责。**SetTextIfChanged** 通过 FText::EqualTo 比较新旧文字，相同内容跳过 SetText；它减少重复文本设置，调用前的查询和字符串构建仍可能执行。

## 关键反馈与生命周期

英雄变化委托直接触发刷新；占点、重生及技能失败通过 **GameplayMessageSubsystem 消息回调**更新，独立于低频轮询。失败提示先匹配所属 PlayerController，再显示 1.8 秒，NativeTick 到时将其隐藏。NativeDestruct 移除英雄变化委托并注销消息监听，避免旧界面继续接收通知。

常规冷却和状态文字会等待下一次刷新，可能跳过某个 0.1 秒显示档位；低帧率下，间隔还会延长。这项取舍减少重复查询、格式化和文本设置，同时保留关键消息的独立触发路径。本轮没有测量输入到屏幕像素的精确延迟。

## 实机状态对照

2026-10-17，在两个串行独立编辑器进程中分别运行单机 PIE，采用同一地图、Phase 英雄、起点朝向与 Enhanced Input 输入序列。场景为 1 玩家、9 Bot，录制前开启无敌保护以避免死亡打断；战场状态并非逐帧一致。

**同一长度的 12.5 秒窗口里，状态刷新为 370 次与 103 次。** 两组都显示回溯倒计时及返回就绪、闪现充能变化与恢复，并各记录三次“前方空间不足，无法闪现”提示。视频放大的是原生技能栏，计数来自 RefreshRuntimeState 的开发记录，表示函数调用次数。

降频组本次约每秒 8.3 次，低于配置上限。录像按游戏时间回放，无固定游戏步长、无声；录帧和状态记录都有开销，因此这组次数与画面仅说明更新行为，不用于计算性能收益。[本轮状态摘要](/media/repositories/lyra-hero-arena/hud-quality.json)

## 历史性能数据

2026-08-31 的独立测试采用 1 玩家、9 Bot，8 秒预热、10 秒采样，两组三次分别取中位数。局部 HUD 刷新平均耗时由 **0.0620 ms 降至 0.00574 ms**，UI 总平均耗时由 **1.666 ms 降至 1.554 ms**。整帧 P95 为 11.268 ms 与 11.242 ms，基本持平；局部降幅不能作为整帧收益。该批刷新频率为 103.9 次/秒与 9.6 次/秒，与本轮录制条件不同。

## 实验编排

- 用版本化 Preset 保存地图、Experience、负载、种子、RHI、画质、采样时长与进程拓扑；
- 从 Editor 启动单机、服务器和多个客户端，统一运行编号与输出目录；
- 汇集 CSV Profiler、AI、Navigation、Animation、Rendering 与 Network 指标；
- 检查角色负载、运行条件、画质与网络拓扑，未满足条件的样本标记为不可比较；
- 显示缺失样本、失败条件和回归提示，并保留原始 CSV 与运行配置。

运行时 PerformanceLab 负责压力、采样和结果文件，Editor 侧 PerformanceWorkbench 负责实验编排与比较。游戏逻辑不依赖性能 UI。

页面中的工作台截图来自历史渲染与网络实验，用于展示界面与结果组织；上方 HUD 图表来自 2026-08-31 的另一批运行记录，源码版本为 712a1cd。

本人实现战术 HUD、更新策略、工作台与运行采样；ASC、消息系统及基础框架沿用 Lyra。公开仓提供自有源码覆盖层，完整运行仍需合法宿主与项目资产。

[HUD 更新实现](https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/UI/HeroArenaCombatHUDWidget.cpp) · [录制与复现条件](https://github.com/Ubik42/LyraHeroArena/blob/main/docs/HUD更新质量对照.md)
