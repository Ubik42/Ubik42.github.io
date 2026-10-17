# Noemancer：面向人与 AI 协作的自研游戏引擎

Noemancer 是基于 C++20 构建的游戏引擎与编辑器，当前处于 v0.2.0 Preview 1（pre-alpha）阶段，主要在 Windows x64 本机验证。个人研发重心集中在引擎领域模型、外部库适配、命令编辑系统、资产处理管线以及渲染架构组织；实体管理使用 Flecs ECS，物理与骨骼动画分别集成 Jolt Physics 和 ozz-animation，渲染对接 SDL_GPU，音频接入 miniaudio。

## 编辑、试玩与项目保存

工程管理覆盖 Scene、Prefab、Asset Registry、C# 脚本以及项目 HUD 布局。编辑器将编辑环境与试玩环境隔离，试玩产生的数据变动可选择性写回编辑世界并支持撤销。

- Project Hub 管理创建、打开和恢复工程。Scene View、Outliner、Inspector、Asset Browser、Console、Animation Graph 与 Scene Flow Canvas 组成编辑工作区；音频、VFX、Sprite 和材质作者面板接入同一 Editor。
- Scene 中的实体使用稳定 ID。修改 Transform 时可先预检查，再根据版本号提交；旧版本号的请求被拒绝，避免自动化覆盖刚完成的编辑。
- 2026-10-17 在独立 serve 会话中，将一个台阶的 Y 坐标从 **0.35 调整至 1.35**：预检查保持场景不变，提交后拒绝旧版本请求，撤销恢复原场景，重做并保存。五个 HUD 中文标签通过 UI 源文档事务完成持久化与运行时热应用。

新增连续演示使用 Platformer 工程副本，由自动化脚本调度，在单个 Editor 进程内完成试玩切回、通过 live 命令修改台阶坐标、撤销重做与场景保存；随后经 CLI 完成 Cook 与打包，启动独立 Player 验证导出的台阶改动。

**Edit World 与 Play World 分离**，GUI 与 live 命令共享编辑版本和撤销栈。针对 VFS 虚拟路径 `project://` 无法直接落盘的问题，由宿主在加载后将场景绑定至已校验的实体文件；保存时比对规范化内容并检测外部修改冲突。试玩世界的保存及另存为均被拒绝。

## C# Gameplay 与平台跳跃样板

游戏逻辑基于 **.NET 10 与 HostFXR** 托管执行。脚本编译出错时，引擎保留运行中的旧程序集；热重载时迁移带有标记字段的状态数据。项目逻辑通过稳定的数据视图和 World Command Buffer 操作引擎，不向外暴露 Flecs、Jolt 或 SDL 的原始句柄。

NoemancerPlatformer 用 2.5D 灰盒关卡验证这些接口：CharacterMotor2D 与 CameraFollow2D 负责角色和镜头；加减速、斜坡行走、离地跳跃宽限、跳跃缓冲与可变跳高共同控制手感。关卡包含单向平台、移动平台、收集物、检查点、危险区重生和条件终点。HUD 读取 C# 导出的收集数、完成状态及逻辑输入值，游戏专属规则保存在项目脚本中。当前主角仍以灰盒呈现。

运行时还集成 GPU Skinning、RmlUi、输入、音频、GPU VFX、Prefab 和存档，并提供确定性延迟/重复事件、实体池与增量生成/销毁。

## D3D12 / Vulkan 渲染管线

- SDL_GPU 后端让 D3D12 与 Vulkan 共用资源、Shader 和 Render Graph 合同，同时保留各后端的 Pass 时间与诊断信息。
- Raster 主路径包含 Forward PBR、split-sum IBL、四级 CSM、Point/Spot 阴影、GPU 视锥裁剪与间接绘制。
- 画面管线接入四 LUT 动态天空、Aerial Perspective、共享 HiZ、SSR、SSGI、TAA、GTAO、双边降噪、Bloom、曝光调色和 ACES Tone Mapping。
- RenderLab 中的 Intel Sponza 2022 约含 **205 万顶点、1124 万索引、405 个 primitive 和 72 张纹理**。本页保留其 Release 实时运行捕获；大型场景的 Cook / Package 尚未收口。
- RTX 4080 上已有 D3D12 / Vulkan 的 BLAS/TLAS、Pipeline、SBT、Trace 与 Readback 实验。D3D12 接入真实 SceneRenderer 几何并输出可见线性直接光，Vulkan 原生光追仍为私有全帧输出；生产 RTGI、VSM、完整光追材质和原生光追结果经 SDL 呈现仍在后续路线中。

## 资产 Cook 与独立 Player

资产 Cook 管线根据启动场景和显式配置的打包清单收集依赖。Windows 包自带项目程序集、app-local .NET、VC Runtime、Shader Manifest 及第三方 NOTICE，Player 从包内加载场景、资产与脚本。

2026-10-17 使用同一平台跳跃工程完成本机打包和独立 Player 运行。源项目与包内项目分别运行 90 个固定步，均执行 C# CourierController，主角公共状态一致。GPU 运行另行输入移动和跳跃并采集画面；这组记录覆盖本机运行，干净机器部署仍待验证。

- 导入 GLB、JSON glTF 与 FBX，使用 meshoptimizer 处理几何，烘焙 Mesh、Animation、KTX2、Sprite Atlas 和 Tilemap 数据。
- Cook 产物由源文件、配方、目标 Profile 和工具版本共同寻址；Runtime 加载前复核范围、Schema 与 SHA-256。
- Sprite 图集已经支持 Cook 与分发；Sprite、材质源资产在编辑器中的完整持久化流程仍在完善。

## Editor 与 Agent 的协作接口

**C++ Command Registry** 为编辑器、CLI 与 MCP 提供统一命令和 Schema。可撤销的场景编辑通过稳定实体 ID、版本号、dryRun 预检查和事务组织，修改结果能继续撤销或重做；有限观察接口控制一次返回的数据范围。

MCP 可以连接当前 Editor，也可以使用独立 serve 进程。前者已有同一 World 的实体创建、撤销，以及 Editor Context 选择与焦点的真实接入记录；后者维护独立 World。连续视频中的台阶修改、撤销、重做与保存连接当前 Editor；早期静态截图及 HUD 事务使用独立 serve，随后重新加载保存的工程采集画面。各子系统的撤销范围以其具体接口为准。

## 当前开发范围

项目处于 Windows x64 本机 pre-alpha 阶段。独立干净机器部署、跨平台发行、稳定插件 SDK、生产网络、生产 RTGI/VSM，以及真实模型 Provider 到 Staging 的 AIGC 流程仍待完成。Vulkan Raster 已有运行记录；原生光追结果经 SDL 的安全呈现仍未完成。

Sponza 展示证明大型外部场景的实时画面；平台跳跃样板用于验证编辑、C#、UI 与打包流程，两者的验证范围分别记录。Sponza 2022 由 Frank Meinl 制作、Intel 发布，采用 CC BY 4.0。
