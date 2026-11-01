import type { RepositoryWork } from './repositoryWorks';

export const ueEngineAgent: RepositoryWork = {
  id: 'ue-engine-agent',
  title: 'UE 引擎 Agent：原生工具调用与可恢复编辑',
  category: 'ai-agent',
  categoryLabel: { zh: 'UE 编辑器与 Agent 执行', en: 'UE editor and agent execution' },
  summary: {
    zh: '模型通过 UE 官方 MCP 自主发现工具、修改材质并读回结果；13 轮真实调用完成参数编辑、保存与视口图像检查。',
    en: 'Native UE MCP tool discovery and material editing, with durable steps, asset readback, and viewport feedback.',
  },
  cover: '/media/repositories/ue-engine-agent/ceramic.png',
  tags: ['UE 5.8', '官方 MCP', 'Python', 'SQLite', '视觉反馈', '独立模型循环'],
  story: {
    zh: `# UE 引擎 Agent：原生工具调用与可恢复编辑

## 模型自主编辑与视觉反馈

输入冷蓝陶瓷的目标颜色、粗糙度和金属度，DeepSeek Flash 自行选择工具并读取真实 UE 返回值。13 轮 API 调用完成参数检查、修改、保存和截图观察。执行器负责校验与记录，具体编辑步骤由模型产生。

![自主执行后的冷蓝陶瓷，UE 原生视口](/media/repositories/ue-engine-agent/ceramic.png)

三项参数分别读回为 Roughness 0.25、Metallic 0、线性 Tint (0.035, 0.16, 0.42)。模型收到真实截图，描述了蓝色物体、保留的金色底座及灰色地板；随后单独调用 MCP 再次确认参数。源码包包含完整模型调用与工具返回记录。

会话可以跨进程恢复：模型回复先保存，再逐步执行。完成会话直接返回原结果；调用状态不明确时保留现场，等待读回。连续三次参数拒绝会停止当前轮，便于修正接口后继续。

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

已完成独立模型循环、图像反馈、原生编辑器连接、按需工具发现、持久执行、材质案例及首次案例的重启读回。源文档检索和更多场景编辑操作继续开发。展台由工程脚本生成，使用 UE 基础形体。

[下载源码与场景重建脚本](/media/repositories/ue-engine-agent/UE-Engine-Agent-source.zip)`,
    en: `# UE Engine Agent

A native UE 5.8 MCP editing case changes a shared material from teal metal to warm matte paint. Tool schemas and current values inform a plan authored by the active Codex conversation. SQLite records execution; a fresh editor process confirms that roughness 0.65, metallic 0.05, and the new tint survived asset saving. Replaying the completed plan reuses all eight steps.

![Native editor result](/media/repositories/ue-engine-agent/after.png)

The implementation includes lazy schema discovery, durable steps, bounded material writes, and native viewport capture. An independent DeepSeek Flash loop now completes material inspection, editing, saving, and native viewport review in 13 API turns. Model/tool transcripts and an independent parameter readback are included. Broader scene editing remains under development.

[Source and scene reconstruction scripts](/media/repositories/ue-engine-agent/UE-Engine-Agent-source.zip)`,
  },
};
