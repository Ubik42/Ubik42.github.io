import type { RepositoryWork } from './repositoryWorks';

export const alsDirector: RepositoryWork = {
  id: 'als-director',
  title: 'AI 接入 UE 动画：可中断的多步动作执行',
  category: 'ai-agent',
  categoryLabel: { zh: '运行时 AI 与技术动画', en: 'Runtime AI and technical animation' },
  summary: {
    zh: '将“抱着箱子走过去，途中看向门口”拆成可验证的动作计划，在 Unreal 中控制步态、姿态、移动与注视；支持途中改口、连续动作和急停。',
    en: 'Natural-language direction becomes validated movement, gait, overlay, stance, and gaze plans in Unreal, with live revisions, queued actions, and emergency stops.',
  },
  cover: '/media/repositories/als-director/hero.webp',
  tags: ['Unreal Engine 5.8', 'C++', 'GPT / Codex', 'ALS-Refactored', '运行时动画'],
  story: {
    zh: `# AI 接入 UE 动画

## 移动中修改，急停后隔离旧回复

@[video: 连续实机：途中修改保留路线、急停隔离旧回复与新请求恢复](/media/repositories/als-director/interruptions.mp4)

本次录像运行明确标记为 test 的固定测试计划，专门检验引擎端的执行与中断逻辑。角色沿“红色标柱-青箱-停止”队列慢步移动，途中下发包含 style、look_at、stance 的动作补丁。运行记录显示 move_target 维持 red_target，remaining_steps 保持为 3，ALS Overlay 成功切为 Box 并转入蹲伏。随后提交换路线请求并故意暂缓回复，角色维持原移动；触发急停操作后，系统清空 PendingId 和队列并执行 StopMovementImmediately。此时注入旧回复，主循环因 PendingId 为空直接跳过读取，注入旧回复后的 3 秒仿真观察中，角色速度低于 1 cm/s，起止坐标一致。

再次下发新请求后，角色可正常站立并恢复步行。此录像为 2026-10-17 的本机独立程序实测：447 张连续原生帧，1578×884，按 30 Hz 游戏步长编排为 14.9 秒，没有剪去中间等待。固定步录制不用于衡量模型推理延迟或显卡性能。

| 视频时点 | 引擎中的变化 |
| --- | --- |
| 2.5 秒 / 4.8 秒 | 切换抱箱 / 蹲伏，目的地保持为红柱，队列仍有 3 步 |
| 6.9 秒 | 新请求等待回复，原移动继续 |
| 8.0 秒 | 急停清空请求编号和队列，速度归零 |
| 9.0—12.0 秒 | 注入旧回复后持续观察，接收计划数未增加，位置保持 |
| 12.3 秒 | 新请求正常生效，站起并向青箱步行 |

[查看本次实际状态与时间点](/media/repositories/als-director/interruptions.json)。旧回复文件仍留在本地，因没有匹配的待处理请求而未被读取；来源标签仅用于展示，本机文件桥不提供公共网络服务的身份认证。

## 自然语言到动作计划：原始演示

“慢慢走向青色箱子，像抱着一个重箱子，目光看向门口。”这句话同时改变目的地、步态、上身姿态和注视方向。角色移动期间，还可以改成受伤姿态、蹲伏，或重新指定路线。

@[video: 动作导演实机演示：复合指令、姿态修改、连续动作和停止](/media/repositories/als-director/showcase.mp4)

视频来自独立 Windows 程序的实际渲染，剪去了部分等待画面。语言计划由本次 Codex 对话中的 GPT 生成，经本地文件桥送入游戏；没有用关键词匹配器冒充模型。捕获采用 30 fps 固定游戏步长，不用于衡量推理延迟或显卡性能。演示也保留了异步控制的限制：原动作在等待回复时继续，部分姿态修改在到达后才生效；途中修改与队列保留另见下方回归录像。

## 意图与动画执行分开

@[flow](director)

GPT 读取自然语言、场景目标与当前角色状态，只能返回有限的结构化计划。例如同一步可以包含移动到青箱、步行、抱箱、站立、注视门口五项要求。游戏先检查整份计划，再更新 ALS 的步态、姿态与旋转状态。

省略的字段保留当前值。途中“改成受伤的样子”只改表现，不清空目的地或后续路线；连续计划等待当前目标到达后才进入下一步。模型不直接操作骨骼，也不参与逐帧动画计算。

## 中断与可追溯执行

每次启动拥有独立会话，每条指令拥有独立请求编号。新请求使旧回复失效；立即停止同时清空移动与后续动作，迟到的回复不能再次启动角色。非法动作、未知目标和错误字段在执行前整份拒绝。

导演台显示真实速度、目的地、注视目标、执行来源与计划。事件记录保留请求、计划接收、到达、拒绝、停止和录制帧号，用于对照画面与测试结果。

## 独立程序回归

@[video: 十二项运行时回归：真实状态检查，输入明确标为自动化测试夹具](/media/repositories/als-director/regression.mp4)

回归覆盖角色复位、实际跑步、移动中蹲伏、抱箱、受伤与注视、多步骤到达、途中修改保留队列、非法计划拒绝、旧会话隔离、新请求覆盖、急停后迟到回复，以及最终恢复。测试计划是固定夹具，界面明确标注，不作为 GPT 在线理解能力的证据。

## 技术分工与边界

本项目实现自然语言桥、动作合同、执行队列、表现补丁、导演界面、跟随与全景镜头、测试场景、日志和录制工具。角色、动画、脚部处理、叠加姿态与道具附着复用 [ALS-Refactored](https://github.com/Sixze/ALS-Refactored)，不将其包装成原创或神经网络生成动画。

当前接入依赖活动中的 Codex 对话，不是脱离对话后独立运行的 GPT 服务。抱箱和受伤是已有动画姿态，不是重量仿真或文本生成新动作。移动采用简单直线接近，没有障碍绕行；未支持语音识别和多人同步。

[下载工程源码与重建脚本](/media/repositories/als-director/ALSDirector-source-v1.zip) · [查看运行测试结果](/media/repositories/als-director/acceptance.json)

源码包不含 Unreal Engine 或 ALS 插件资产；安装 UE 5.8 后运行依赖脚本，从固定上游提交获取 ALS 并构建。`,
    en: `# AI Plans in Unreal Animation

## Interrupted movement and stale replies

@[video: Continuous runtime: preserve the route during pose patches, cancel a pending reply, and resume](/media/repositories/als-director/interruptions.mp4)

This 14.9-second recording uses explicitly labelled test fixtures. A three-step route remains active while carrying and crouching patches change ALS state. An emergency stop clears the pending request and queue. Injecting the old reply does not increment the accepted-plan count or restart movement during the following three seconds; a fresh request then resumes walking. The 447 native 1578×884 frames are continuous at a fixed 30 Hz simulation step, with no waiting removed. This tests engine execution, not live model inference or response latency.

[Observed states and timestamps](/media/repositories/als-director/interruptions.json). Recorded on 2026-10-17 in the packaged Windows application. The local file channel is trusted-process transport, not an authenticated public network service.

## Original language-to-plan demonstration

@[video: Live Windows application: compound direction, revisions, queued movement, and stops](/media/repositories/als-director/showcase.mp4)

An active GPT/Codex conversation interprets the direction and current game state. A local file bridge carries a validated plan into Unreal; there is no keyword parser masquerading as a language model. The game owns frame-by-frame execution, combining ALS gait, stance, overlay, and gaze. Some waiting footage is removed. Existing motion continues while awaiting a reply, so some revisions in this take arrive after the destination is reached; the regression below separately demonstrates mid-motion patches.

Live adjustments preserve the current destination and queued route. Whole-plan validation, session/request correlation, superseding requests, and emergency cancellation prevent invalid or late replies from starting unwanted movement.

@[video: Twelve runtime regression cases using explicitly labelled test fixtures](/media/repositories/als-director/regression.mp4)

The regression checks actual game state for movement, crouch, carrying, injury, gaze, sequencing, live patches, invalid plans, stale sessions, supersession, emergency cancellation, and reset. Fixtures are not model inference. Both videos are actual rendered frames captured at a fixed 30 fps simulation step, not latency or GPU benchmarks.

This project implements the language bridge, execution contract, queue, director UI, cameras, stage, logs, tests, and recording tools. Character animation, foot handling, overlays, and attached props come from [ALS-Refactored](https://github.com/Sixze/ALS-Refactored). It does not generate animation, simulate weight, navigate obstacles, or run GPT without an active Codex conversation. Speech input and multiplayer are out of scope.

[Source and rebuild scripts](/media/repositories/als-director/ALSDirector-source-v1.zip) · [Runtime test report](/media/repositories/als-director/acceptance.json)

The source archive excludes Unreal Engine and ALS dependency assets. Setup retrieves the pinned upstream dependency and builds against a locally installed UE 5.8.`,
  },
};
