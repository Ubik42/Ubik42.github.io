import type { RepositoryWork } from './repositoryWorks';

export const ueEngineAgent: RepositoryWork = {
  id: 'ue-engine-agent',
  title: 'UE 引擎 Agent：原生工具调用与可恢复编辑',
  category: 'ai-agent',
  categoryLabel: { zh: 'UE 编辑器与 Agent 执行', en: 'UE editor and agent execution' },
  summary: {
    zh: '通过 UE 官方 MCP 发现工具、修改材质并读回结果；用持久步骤记录衔接模型计划、资产保存与视口反馈。',
    en: 'Native UE MCP tool discovery and material editing, with durable steps, asset readback, and viewport feedback.',
  },
  cover: '/media/repositories/ue-engine-agent/after.png',
  tags: ['UE 5.8', '官方 MCP', 'Python', 'SQLite', '上下文工程'],
  story: {
    zh: `# UE 引擎 Agent：原生工具调用与可恢复编辑

## 从材质意图到编辑器中的结果

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

已完成原生编辑器连接、按需工具发现、持久执行、材质案例及重启读回。独立模型循环、源文档检索和更多场景编辑操作继续开发。展台由工程脚本生成，使用 UE 基础形体。

[下载源码与场景重建脚本](/media/repositories/ue-engine-agent/UE-Engine-Agent-source.zip)`,
    en: `# UE Engine Agent

A native UE 5.8 MCP editing case changes a shared material from teal metal to warm matte paint. Tool schemas and current values inform a plan authored by the active Codex conversation. SQLite records execution; a fresh editor process confirms that roughness 0.65, metallic 0.05, and the new tint survived asset saving. Replaying the completed plan reuses all eight steps.

![Native editor result](/media/repositories/ue-engine-agent/after.png)

The implementation includes lazy schema discovery, durable steps, bounded material writes, and native viewport capture. A standalone model loop and broader editing capabilities remain under development.

[Source and scene reconstruction scripts](/media/repositories/ue-engine-agent/UE-Engine-Agent-source.zip)`,
  },
};
