import type { RepositoryWork } from './repositoryWorks';

export const ueEngineAgent: RepositoryWork = {
  id: 'ue-engine-agent',
  title: 'UE 引擎 Agent：性能诊断与可恢复编辑',
  category: 'ai-agent',
  categoryLabel: { zh: '引擎性能与编辑器 Agent', en: 'Engine performance and editor agent' },
  summary: {
    zh: '独立模型调用 UE 工具，读取 Insights 调用链、采集 GPU 阶段、启动隔离实验并归档对照；已落地 Niagara 首次激活调查、角色渲染实验及可恢复的材质和蓝图编辑。',
    en: 'Independent model tools for UE performance captures, Insights investigations, controlled comparisons and durable editor workflows.',
  },
  cover: '/media/repositories/ue-engine-agent/crowd-fixed-baseline.png',
  tags: ['UE / Insights', '官方 MCP', '性能实验', '持久任务', '多模态反馈', 'Python / SQLite'],
  story: {
    zh: `# UE 引擎 Agent：性能诊断与可恢复编辑

## 从性能采集到隔离实验

性能工具通过 CLI 和结构化 Schema 接入独立模型。模型可以读取原始 CSV、按时间区间下钻 Unreal Insights、查询原生日志，选择已有优化变体，启动隔离宿主，再比较阶段耗时、负载与画面。每个任务保存构建指纹、实际命令、进程身份和原始结果。

### CPU 卡顿：追到传送效果首次准备

从一次约 58.6 ms 的角色移动更新，沿实际嵌套事件追到碰撞重叠、传送器、GameplayCue 和 Niagara 准备路径。随后在固定 SIE 场景中，对两个传送效果各执行三轮激活。

加载时准备将首次调用从约 29 / 26 ms 降到 0.82 / 0.41 ms，同时增加约 24 / 30 ms 的加载成本。这里比较的是激活调用与就绪状态，完整传送玩法及总帧收益分别验证。

![真实 SIE 中的角色与传送效果](/media/repositories/ue-engine-agent/portal-sie-baseline.png)

### GPU 实验：负载、镜头与阶段开销一起检查

200 角色场景中，工具识别出正式对局切换导致的大批重生失败，把原本通过平均负载检查的采集标为不可用于比较。后续窗口保持全程 201 角色，并增加显式固定镜头、脚本指纹和测量后的同宿主截图。

Agent 调用 Lyra 既有的角色光追距离分级策略，检查动态几何更新、光追场景、投影角色及实际参与计数。原始与修正后的实验都随源码包提供；独立模型动作与宿主夹具代码分别记录。

![固定视角下的真实多角色场景，截图在性能测量结束后采集](/media/repositories/ue-engine-agent/crowd-fixed-baseline.png)

另一次 9 AI 的 Custom Depth 实验中，参与角色均值从 10.00 降到 3.69，GPU 阶段耗时未下降。该结果作为无收益案例保留，避免将对象数减少直接写成性能提升。

### 中文工作台与长会话

工作台展示真实采集、GPU 阶段图、显存预算和基线差异，可以直接提交模型分析。SQLite 保留完整会话，超出请求预算时收起完整旧轮次，并通过历史查询回看。提示词、工具定义、模型版本、耗时和 token 使用量均留有记录。

![读取真实 Lyra 采集的中文性能工作台](/media/repositories/ue-engine-agent/performance-workbench.png)

团队入口包含 Markdown 提示词、项目 Skill、从实际注册表导出的工具 Schema 和案例归档工具。性能实验使用 UE5.7.4 的 Lyra 宿主；以下编辑器操作使用 UE5.8 官方 MCP。

## 编辑器操作与运行反馈

@[video: 32 秒案例：实际调用记录、蓝图结构示意、旧结果过期与真实 UE 运行复现](/media/repositories/ue-engine-agent/showcase.mp4)

短片中的运动画面来自已保存蓝图的真实模拟复现；操作与验证数字来自原始模型任务。图结构按实际 DSL 绘制，原始调用、位置采样和制作源码随源码包提供。

## 根据运行结果继续改图

模型读取平台原有采样，将运动调整为中心高度 180 cm、振幅 55 cm，然后检查旧结果。图摘要变化后，系统将旧采样标为过期，避免把之前的成功当成本次修改的证明。

模型接着调用固定运行工具：保存蓝图、重启自有 UE 宿主、进行真实模拟，再收到位置采样和运行截图。13 轮调用完成这次迭代；82 个位置点覆盖 10 秒，高度范围为 125.000–234.999 cm，与目标一致。工具保存前后图摘要和实验记录，未完成的实验不会因观察超时被直接重启。

![新参数下的真实 UE 模拟画面](/media/repositories/ue-engine-agent/platform-feedback.png)

此案例验证固定条件下的升降运动，玩家搭乘、碰撞与联网仍需分别实现和验证。

## 蓝图生成：从自然语言到运行中的升降平台

给出周期升降目标后，独立模型查询 UE 节点类型与引脚，生成 Tick 驱动的蓝图，完成编译、保存和图结构读回。运动使用游戏时间计算绝对位置，避免逐帧累加位置造成误差。

![模型生成蓝图后的真实 UE 模拟运行，金色板为升降平台](/media/repositories/ue-engine-agent/platform-sie.png)

完整任务共 18 轮模型调用，包含保存参数错误及后续修正。重新加载蓝图后，在 UE 模拟运行中采集 66 个位置点，覆盖超过 8 秒；平台高度为 40.033–199.959 cm，与目标运动公式一致。宿主脚本负责 Mesh 装配与位置采样，图逻辑由模型生成。玩家搭乘、碰撞与联网行为尚未验证。

图写入编译失败时可能留下部分节点。执行器保存修改前的图，并在明确错误后读取剩余图，让模型据此修正。原始模型调用、图脚本、运行采样和复现入口均收入源码包。

## 带来源的工程知识检索

模型先搜索工程资料，再按需读取全文。当前知识库包含 6 张经过核对的资料卡，覆盖材质参数、对象组合、错误恢复、蓝图接口与 MCP；记录来源、版本、核验日期和内容摘要，本地源码变化时提示重新核对。

检索已参与真实材质与蓝图任务：模型引用资料后查询真实工具和对象，再执行修改。资产查找与对象加载工具帮助区分包路径和对象引用。当前采用词项检索，范围为本工程操作知识；更大规模文档检索继续开发。

## 中文任务工作台

输入任务后，工作台显示模型动作、真实工具结果与 UE 视口截图。历史任务可以查看原始结果；中断后继续同一会话，写入状态不明确时先读回。布局任务可保存修改前的组合关系，用于检查对象配对。

![中文任务工作台：紫色陶瓷调整的真实执行记录](/media/repositories/ue-engine-agent/workbench.png)

从网页提交材质目标后，模型完成 9 轮调用。它先猜错颜色参数名 BaseColor，收到 UE 的错误后改用实际参数 Tint；保存资产并独立读回，确认颜色、粗糙度与金属度。工作台将失败步骤与后续修正一起显示。

执行器区分明确的只读失败和结果不明确的写入：前者交回模型修正，后者保留现场并提供读回恢复。缺少布局基线时显示检查不可用，避免将模型结束等同于所有检查通过。

## 模型自主编辑与视觉反馈

输入冷蓝陶瓷的目标颜色、粗糙度和金属度，DeepSeek Flash 自行选择工具并读取真实 UE 返回值。13 轮 API 调用完成参数检查、修改、保存和截图观察。执行器负责校验与记录，具体编辑步骤由模型产生。

![自主执行后的冷蓝陶瓷，UE 原生视口](/media/repositories/ue-engine-agent/ceramic.png)

三项参数分别读回为 Roughness 0.25、Metallic 0、线性 Tint (0.035, 0.16, 0.42)。模型收到真实截图，描述了蓝色物体、保留的金色底座及灰色地板；随后单独调用 MCP 再次确认参数。源码包包含完整模型调用与工具返回记录。

会话可以跨进程恢复：模型回复先保存，再逐步执行。完成会话直接返回原结果；调用状态不明确时保留现场，等待读回。连续三次参数拒绝会停止当前轮，便于修正接口后继续。

## 场景布局：保留对象关系

将三组展品从横排改成三角形，每组包含蓝色目标物、深色底座和金色顶盘。模型读取真实 Actor 标签与变换，执行位置调整，保存地图并检查截图。

![重排后的三组展品](/media/repositories/ue-engine-agent/layout.png)

相同外观的底座发生交换时，截图仍可能看起来正确。项目因此增加基于修改前空间关系的检查：核对原始配对是否保留，以及高度、旋转、缩放是否变化。首次执行的错配与遗漏记录保留在源码包中。

最终一轮，模型通过检查工具读到三块金色顶盘仍在旧位置，自主修正后再次读回。6 项配对检查与 9 项高度、旋转、缩放检查全部通过。此规则面向自建展台，后续再扩展更复杂的场景关系。

## 写入已生效、回复丢失时如何继续

真实 UE 执行材质写入后，测试客户端主动丢弃返回。恢复入口读回目标参数，确认已经生效，随后继续会话，原写入只发送一次。当前自动恢复覆盖材质标量和向量设置；读回不匹配时保留现场。故障注入使用明确的测试夹具，与独立模型调用记录分别保存。

## 首次材质编辑与持久化验证

将展台中三个物体的青色金属改成暖色哑光涂层。Agent 先读取官方 MCP 返回的工具定义和材质参数，再形成编辑计划，修改共享材质实例并保存资产。重启编辑器后重新读取参数和视口，检查结果是否保留。

![修改后的暖色哑光材质，UE 原生视口截图](/media/repositories/ue-engine-agent/after.png)

| 参数 | 修改前 | 重启后读回 |
| --- | --- | --- |
| 粗糙度 Roughness | 0.08 | 0.65 |
| 金属度 Metallic | 0.85 | 0.05 |
| 线性色彩 Tint | 青色 (0.025, 0.24, 0.32) | 暖色 (0.46, 0.12, 0.035) |

![修改前的青色金属，保留编辑器辅助图标](/media/repositories/ue-engine-agent/before.png)

前图保留编辑器辅助图标，后图启用 Game View。模型计划来自活动中的 Codex 对话，依据真实参数和截图编写；本地运行器执行工具步骤并记录结果。

## 按任务加载工具定义

工具目录用于选择能力，具体工具的 JSON Schema 在执行前按需获取。这样可以保留实际参数约束，同时减少一次性塞入整个编辑器接口的上下文。已用于材质编辑、Actor 变换、资产定位、蓝图图结构编辑和视口捕获。

## 执行记录连接修改与反馈

SQLite 保存计划摘要、步骤状态、返回值和时间。完成的步骤可以复用记录：本次材质计划重复运行时，8 个步骤均命中既有结果。调用结果不明确时保留现场，由新计划读回核实后继续。

首次截图请求暴露了接口细节：外层可选参数中的内部字段仍需要显式提供。失败记录保留，修正请求后重新捕获。资产保存成功后又启动一次编辑器，确认粗糙度、金属度与颜色仍为目标值。

## 当前实现与继续扩展

已完成独立模型循环、工程知识检索、按需工具发现、持久执行和中文工作台。真实案例覆盖材质编辑、组合场景重排、蓝图运行反馈、Niagara卡顿调查和角色渲染对照，并提供原始调用、采集、截图与过程短片。后续扩展受控渲染复测、分配级内存分析与固定模型评测集。展台由工程脚本生成，使用 UE 基础形体。

[下载源码与场景重建脚本](/media/repositories/ue-engine-agent/UE-Engine-Agent-source.zip)`,
    en: `# UE Engine Agent: performance investigation and durable editing

Independent model tools ingest native CSV captures and Unreal Insights events, launch isolated experiments, compare load and timing, and archive raw evidence. Cases include Niagara first-use preparation, a Custom Depth experiment with no observed GPU benefit, and controlled crowd ray-tracing experiments. The performance workbench exposes phase timings, memory budgets and comparison data. Full transcripts remain in SQLite with bounded request history and model-call telemetry.

![Fixed-view crowd scene captured after measurement](/media/repositories/ue-engine-agent/crowd-fixed-baseline.png)

A native UE 5.8 MCP editing case changes a shared material from teal metal to warm matte paint. Tool schemas and current values inform a plan authored by the active Codex conversation. SQLite records execution; a fresh editor process confirms that roughness 0.65, metallic 0.05, and the new tint survived asset saving. Replaying the completed plan reuses all eight steps.

![Native editor result](/media/repositories/ue-engine-agent/after.png)

The implementation includes lazy schema discovery, durable steps, bounded material writes, and native viewport capture. An independent DeepSeek Flash loop now completes material inspection, editing, saving, and native viewport review in 13 API turns. Model/tool transcripts and an independent parameter readback are included. Broader scene editing remains under development.

[Source and scene reconstruction scripts](/media/repositories/ue-engine-agent/UE-Engine-Agent-source.zip)`,
  },
};
