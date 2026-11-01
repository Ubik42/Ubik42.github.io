import type { RepositoryWork } from './repositoryWorks';

export const ueEngineAgent: RepositoryWork = {
  id: 'ue-engine-agent',
  title: 'UE 引擎 Agent：原生工具调用与可恢复编辑',
  category: 'ai-agent',
  categoryLabel: { zh: 'UE 编辑器与 Agent 执行', en: 'UE editor and agent execution' },
  summary: {
    zh: '模型通过 UE 官方 MCP 编辑材质、重排场景并生成蓝图；升降平台经过编译、重启加载与 66 次真实运行位置采样。',
    en: 'Native UE MCP tool discovery and material editing, with durable steps, asset readback, and viewport feedback.',
  },
  cover: '/media/repositories/ue-engine-agent/workbench.png',
  tags: ['UE 5.8', '官方 MCP', 'Python', 'SQLite', '视觉反馈', '独立模型循环'],
  story: {
    zh: `# UE 引擎 Agent：原生工具调用与可恢复编辑

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

工具目录用于选择能力，具体工具的 JSON Schema 在执行前按需获取。这样可以保留实际参数约束，同时减少一次性塞入整个编辑器接口的上下文。当前案例实现材质参数读取、修改、资产保存和视口捕获。

## 执行记录连接修改与反馈

SQLite 保存计划摘要、步骤状态、返回值和时间。完成的步骤可以复用记录：本次材质计划重复运行时，8 个步骤均命中既有结果。调用结果不明确时保留现场，由新计划读回核实后继续。

首次截图请求暴露了接口细节：外层可选参数中的内部字段仍需要显式提供。失败记录保留，修正请求后重新捕获。资产保存成功后又启动一次编辑器，确认粗糙度、金属度与颜色仍为目标值。

## 当前实现与继续扩展

已完成独立模型循环、图像反馈、原生编辑器连接、按需工具发现、持久执行、材质案例及首次案例的重启读回。Actor 变换与展示组合检查已接入；中文操作界面已接入真实执行；工程知识检索已接入；蓝图/动画业务案例继续开发。展台由工程脚本生成，使用 UE 基础形体。

[下载源码与场景重建脚本](/media/repositories/ue-engine-agent/UE-Engine-Agent-source.zip)`,
    en: `# UE Engine Agent

A native UE 5.8 MCP editing case changes a shared material from teal metal to warm matte paint. Tool schemas and current values inform a plan authored by the active Codex conversation. SQLite records execution; a fresh editor process confirms that roughness 0.65, metallic 0.05, and the new tint survived asset saving. Replaying the completed plan reuses all eight steps.

![Native editor result](/media/repositories/ue-engine-agent/after.png)

The implementation includes lazy schema discovery, durable steps, bounded material writes, and native viewport capture. An independent DeepSeek Flash loop now completes material inspection, editing, saving, and native viewport review in 13 API turns. Model/tool transcripts and an independent parameter readback are included. Broader scene editing remains under development.

[Source and scene reconstruction scripts](/media/repositories/ue-engine-agent/UE-Engine-Agent-source.zip)`,
  },
};
