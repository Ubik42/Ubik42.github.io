import type { RepositoryWork } from './repositoryWorks';

export const alsDirector: RepositoryWork = {
  id: 'als-director',
  title: '动作导演 · 自然语言驱动角色表演',
  category: 'ai-agent',
  categoryLabel: { zh: '运行时 AI 与技术动画', en: 'Runtime AI and technical animation' },
  summary: {
    zh: '将“抱着箱子走过去，途中看向门口”拆成可验证的动作计划，在 Unreal 中控制步态、姿态、移动与注视；支持途中改口、连续动作和急停。',
    en: 'Natural-language direction becomes validated movement, gait, overlay, stance, and gaze plans in Unreal, with live revisions, queued actions, and emergency stops.',
  },
  cover: '/media/repositories/als-director/hero.webp',
  tags: ['Unreal Engine 5.8', 'C++', 'GPT / Codex', 'ALS-Refactored', '运行时动画'],
  story: {
    zh: `# 动作导演

## 一句话，组合角色的表演

“慢慢走向青色箱子，像抱着一个重箱子，目光看向门口。”这句话同时改变目的地、步态、上身姿态和注视方向。角色移动期间，还可以改成受伤姿态、蹲伏，或重新指定路线。

@[video: 动作导演实机演示：复合指令、姿态修改、连续动作和停止](/media/repositories/als-director/showcase.mp4)

视频来自独立 Windows 程序的实际渲染，剪去了部分等待画面。语言计划由本次 Codex 对话中的 GPT 生成，经本地文件桥送入游戏；没有用关键词匹配器冒充模型。捕获采用 30 fps 固定游戏步长，不用于衡量推理延迟或显卡性能。演示也保留了异步控制的限制：原动作在等待回复时继续，部分姿态修改在到达后才生效；途中修改与队列保留另见下方回归录像。

## 意图与动画执行分开

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
    en: `# Motion Director

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
