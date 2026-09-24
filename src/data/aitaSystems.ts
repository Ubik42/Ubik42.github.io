import type { RepositoryWork } from './repositoryWorks';

interface GraphicsStudy {
  slug: string;
  title: string;
  label: string;
  summary: string;
  summaryEn: string;
  tags: string[];
  map: string;
  source: string;
  detail: string;
  detailEn: string;
}

const studies: GraphicsStudy[] = [
  {
    slug: 'toon', title: 'UE Toon 卡通光照与描边', label: '引擎渲染 · 风格化着色',
    summary: '以三段明暗色块和反向壳描边表现雕塑轮廓，研究材质级卡通光照与环境之间的视觉关系。',
    summaryEn: 'Material-level toon lighting with three shading bands and inverted-hull outlines on a sculptural subject.',
    tags: ['UE 5.8', 'HLSL', 'Toon Shading', '轮廓描边'],
    map: '01_Toon', source: 'BV11Sej6kEGi',
    detail: `## 明暗色块与轮廓

将表面朝向与光照方向的关系分成三个亮度区间，分别赋予亮面、过渡面和暗面的颜色。反向壳描边沿法线扩张模型轮廓，从背景中勾出主体。雕塑置于石质柱廊中，镜头缓慢移动，展示色块和外轮廓随观察角度的变化。

材质由 Python 脚本生成，HLSL 保存在 build_showcase.py 中；场景由 C++ 构造。当前为材质级实现，未修改 Substrate 引擎源码，也未实现专用面部 SDF。雕塑使用 Epic Starter Content。`,
    detailEn: `## Shading bands and silhouette

Surface orientation relative to the light is divided into three color bands. An inverted hull expands the mesh along its normals to outline the silhouette. A moving camera presents the sculpture against a stone colonnade.

Python generates the materials from HLSL stored in build_showcase.py, while C++ constructs the scene. This is a material-level study, without Substrate source modifications or a dedicated face SDF. The statue uses Epic Starter Content.`,
  },
  {
    slug: 'wind', title: 'GPU 风场与交互植被', label: '引擎模拟 · 风场与植被',
    summary: '64×64 GPU 风场驱动约 3.3 万草叶；球体经过时草叶弯折，离开后按弹簧状态逐渐回弹。',
    summaryEn: 'A 64×64 GPU wind field drives roughly 33,000 grass blades, with sphere interaction and spring recovery.',
    tags: ['UE 5.8', 'Compute Shader', '双缓冲', 'WPO'],
    map: '02_Wind', source: 'BV1Epej6wECw',
    detail: `## 风场、弯曲与回弹

计算着色器更新 64×64 的风场及草叶弯曲状态，前后两份缓冲交替读写，保留上一帧的运动结果。草叶材质读取这些状态，通过顶点位置偏移（WPO）改变叶片形状；移动球体施加局部影响，离开后由弹簧响应恢复。

起伏地形上布置约 3.3 万草叶，配合灌木、岩石和花朵，观察同一片风场如何作用于不同位置。模拟逻辑位于 Simulation.usf 的 Mode 0，AITAGPU.cpp 负责 RDG 调度。当前只展示一个场域，未提供通用多风源编辑器。`,
    detailEn: `## Wind, bending, and recovery

A compute shader updates a 64×64 wind field and bending state using alternating read/write buffers. The grass material reads this state through World Position Offset. A moving sphere bends nearby blades, which recover through a spring response.

Approximately 33,000 blades cover rolling terrain with bushes, rocks, and flowers. Simulation.usf Mode 0 implements the update; AITAGPU.cpp schedules it through RDG. The current scene uses one field rather than a general multi-source wind editor.`,
  },
  {
    slug: 'schooling', title: 'GPU 鱼群与群体行为', label: '引擎模拟 · GPU 群体',
    summary: '1,024 条鱼在 GPU 上独立更新位置与速度，通过分离、对齐、聚合与障碍回避形成连续群游。',
    summaryEn: '1,024 GPU agents form a moving school through separation, alignment, cohesion, and obstacle avoidance.',
    tags: ['UE 5.8', 'GPU Boids', 'Compute Shader', 'WPO'],
    map: '03_GPUAgents', source: 'BV1bxeJ6dEgf',
    detail: `## 个体规则形成群体运动

每条鱼保留自己的位置与速度：距离过近时分开，参考邻居的速度调整方向，并向邻居的中心靠拢；接近障碍时增加避让。计算着色器更新 1,024 个个体，材质读取结果后驱动鱼的网格位置和朝向。

演示用海底色调、分枝珊瑚与岩石呈现群游路径。更新逻辑位于 Simulation.usf 的 Mode 1。当前采用全邻域比较，复杂度为 O(N²)，尚未使用空间网格加速；也未扩展为鸟群或通用生物模拟插件。`,
    detailEn: `## Local rules, collective motion

Each fish stores its own position and velocity. Separation avoids crowding, alignment follows neighboring velocities, cohesion moves toward the local center, and obstacle avoidance adds a steering response. A compute shader updates all 1,024 agents; the material reads the resulting positions and directions.

The scene places the school among branching coral and rocks. Simulation.usf Mode 1 uses an all-pairs O(N²) neighborhood search, without spatial-grid acceleration or a general-purpose creature simulation plugin.`,
  },
  {
    slug: 'cloth', title: 'XPBD 布料与碰撞解算', label: '引擎物理 · 布料模拟',
    summary: '1,025 顶点的织物响应风力和球体碰撞，通过距离、剪切与弯曲约束保持形状，并实时更新法线。',
    summaryEn: 'A 1,025-vertex cloth responds to wind and sphere collisions through distance, shear, and bending constraints.',
    tags: ['UE 5.8', 'C++', 'CPU XPBD', '碰撞解算'],
    map: '04_ClothMaterials', source: 'BV1n5eA6FEAH',
    detail: `## 约束求解与表面更新

布料由 1,025 个顶点组成。风力改变顶点运动，XPBD 求解器再迭代修正相邻点的距离、网格剪切与跨点弯曲关系，使织物保持连接；与球体接触的顶点被修正到碰撞表面外。变形后更新法线，让光照随褶皱变化。

BuildCloth 构造网格和约束，StepCloth 在 CPU 上推进模拟。当前弯曲以跨点距离约束近似，没有复现参考方案的 GPU 二面角求解器；此演示也不代表完整服装解算系统。`,
    detailEn: `## Constraint solving and surface updates

Wind moves the 1,025 cloth vertices. The XPBD solver iteratively corrects distance, shear, and cross-point bending constraints, while sphere contacts move vertices outside the collision surface. Normals update with the deformation.

BuildCloth creates the mesh and constraints; StepCloth advances the simulation on CPU. Bending is approximated by cross-point distances rather than the reference's GPU dihedral solver. This is a focused cloth study, not a complete garment solver.`,
  },
  {
    slug: 'cosmos', title: '程序化行星与宇宙渲染', label: '引擎渲染 · 程序化宇宙',
    summary: '差速云带、几何星环、星云和流星共同构成行星场景，以程序化材质组织近景纹理与远景空间层次。',
    summaryEn: 'Procedural planetary bands, geometric rings, nebulae, and meteors create a layered moving space scene.',
    tags: ['UE 5.8', 'HLSL', '程序化材质', '星环与星云'],
    map: '05_Cosmos', source: 'BV1uUeu6cEmG',
    detail: `## 云带、星环与远景

球体材质生成不同速度的云带，环形网格呈现星环细纹；远处叠加星点和分形噪声星云，流星按解析轨迹运动。相机缓慢绕行，让行星、星环与背景保持不同的空间层次。

核心材质包括 M_Planet、M_Ring、M_Nebula 和 M_Meteor，源码位于材质生成脚本。当前使用球体与环形网格，未复现参考视频的等面积方向域、球面流场与 GPU 历史输运框架。`,
    detailEn: `## Bands, rings, and distant space

The sphere material generates planetary bands with different motion rates. Ring geometry carries fine detail, while stars and a fractal-noise nebula provide the distant background. Meteors follow analytic trajectories as the camera orbits.

M_Planet, M_Ring, M_Nebula, and M_Meteor are generated from the material script. This version uses sphere and ring meshes rather than the reference's equal-area direction domain, spherical flow, or GPU history-transport framework.`,
  },
  {
    slug: 'fog', title: '光线步进体积雾与光束', label: '引擎渲染 · 体积光照',
    summary: '沿视线做 64 步体积积分，累计雾密度、吸收与光照贡献，结合短程自遮蔽呈现柱廊中的流动雾层。',
    summaryEn: '64-step ray marching accumulates density, absorption, and light, with short-range self-shadowing through a ruined colonnade.',
    tags: ['UE 5.8', 'Ray Marching', '体积积分', '程序化密度'],
    map: '06_VolumetricFog', source: 'BV1oUe66hEfa',
    detail: `## 视线中的密度与光

对每个像素沿视线采样 64 次，读取程序化空间密度，逐步累计光照并按吸收关系衰减透射率。多层噪声产生不均匀的雾层，短程自遮蔽和解析光束共同表现明暗。柱廊与岩石提供尺度参照，观察雾随时间和视角的变化。

主要实现位于 M_Fog 的 HLSL，源码保存在 build_showcase.py。当前密度由程序化函数产生，没有 MAC 流体压力求解、Froxel 网格或历史重投影。`,
    detailEn: `## Density and light along the view ray

For each pixel, 64 samples accumulate lighting through procedural density while absorption reduces transmittance. Layered noise shapes the fog; short-range self-shadowing and analytic beams add contrast. Columns and rocks provide spatial context.

The implementation lives in M_Fog, with HLSL stored in build_showcase.py. Density is procedural: this version does not implement a MAC fluid pressure solver, froxel grids, or temporal reprojection.`,
  },
  {
    slug: 'fracture', title: 'Chaos 破碎与程序化溶解', label: '引擎物理与渲染 · 破碎特效',
    summary: '48 个 Voronoi 凸块通过 Chaos 刚体模拟散落，再用溶解边缘和同场碎屑串起破碎到消散的过程。',
    summaryEn: '48 pre-cut convex Voronoi chunks scatter through Chaos physics, then dissolve with edge highlights and debris.',
    tags: ['UE 5.8', 'Chaos', 'Voronoi 分块', '溶解 Shader'],
    map: '07_FractureDissolve', source: 'BV1Tteb6jEEr',
    detail: `## 从刚体破碎到材质消散

石柱预先分为 48 个凸 Voronoi 块，交给 Chaos 处理运动与碰撞。分块散落后，溶解材质逐渐移除表面，并保留发亮的边缘；同场碎屑衔接实体破碎与最终消失的视觉过程。

BuildFracture 生成分块，M_Dissolve 和 M_Sparks 控制消散表现。当前为预切石柱演示，没有任意网格修复、运行时通用切割或可断裂连接图。`,
    detailEn: `## From rigid fragments to dissolution

A column is pre-cut into 48 convex Voronoi chunks. Chaos simulates their movement and collisions; a dissolve material removes their surfaces while retaining a bright edge, with debris continuing the visual transition.

BuildFracture generates the chunks, and M_Dissolve and M_Sparks provide the disappearance effect. The scene does not include arbitrary-mesh repair, general runtime cutting, or a breakable bond graph.`,
  },
];

export const aitaProjects: RepositoryWork[] = studies.map((study) => ({
  id: `aita-${study.slug}`,
  title: study.title,
  category: 'engine-games',
  categoryLabel: { zh: study.label, en: 'Unreal rendering and simulation' },
  summary: { zh: study.summary, en: study.summaryEn },
  cover: `/media/repositories/aita-systems/${study.slug}.webp`,
  tags: study.tags,
  repositoryUrl: `https://github.com/Ubik42/AITASystems58/tree/main/Content/AITA/Demos/${study.map}`,
  story: {
    zh: `# ${study.title}

@[video: ${study.title} · UE 编辑器实录](/media/repositories/aita-systems/${study.slug}.mp4)

${study.detail}

## 工程与来源

本项与另外六项演示共用 [AITASystems58 工程](https://github.com/Ubik42/AITASystems58)，有独立关卡入口。[查看全部七项](?work=aita-systems)。基于[夏末冬至烧冻鸡翅的原视频](https://www.bilibili.com/video/${study.source}/)进行学习复现，以上描述为本地工程的实际实现。

录像保留真实 UE 编辑器窗口，按固定时间步长采集，不作为实时帧率测试。环境岩石、雕塑和灌木使用 Epic Starter Content，首次运行需按工程 README 添加。`,
    en: `# ${study.title}

@[video: Unreal Editor recording](/media/repositories/aita-systems/${study.slug}.mp4)

${study.detailEn}

## Project and reference

This study shares the [AITASystems58 repository](https://github.com/Ubik42/AITASystems58) with six other demos and has its own map. [View all seven](?work=aita-systems). It is an independent learning reproduction inspired by [the original video](https://www.bilibili.com/video/${study.source}/); the description above documents the local implementation.

The footage captures the real editor at a fixed simulation timestep, not a performance benchmark. Rocks, the statue, and bushes use Epic Starter Content, which must be added following the repository README.`,
  },
}));

export const aitaSystems: RepositoryWork = {
  id: 'aita-systems',
  title: 'UE 实时图形实验室：七项渲染与模拟',
  category: 'engine-games',
  categoryLabel: { zh: '渲染与物理模拟 · 学习复现', en: 'Rendering and simulation studies' },
  summary: {
    zh: '一个 UE 5.8 C++ 工程，串联 Toon、交互草地、GPU 鱼群、布料、宇宙、体积雾与破碎溶解；附真实编辑器录像和可切换的七个展项。',
    en: 'Seven interactive UE 5.8 C++ studies covering toon shading, grass, GPU schooling, cloth, planets, volumetric fog, and fracture, with actual editor recordings.',
  },
  cover: '/media/repositories/aita-systems/overview.png',
  tags: ['UE 5.8', 'C++ / HLSL', 'RDG / Compute', 'Chaos / XPBD'],
  repositoryUrl: 'https://github.com/Ubik42/AITASystems58',
  story: {
    zh: `# UE 实时图形实验室

参考[夏末冬至烧冻鸡翅的七条技术美术演示](https://space.bilibili.com/1080308077)，把渲染与模拟方向组织成一个独立学习复现工程。场景共用材质生成、GPU 状态更新和展示控制，运行后用左右方向键切换。

独立项目：[Toon 卡通光照](?work=aita-toon) · [风场植被](?work=aita-wind) · [GPU 鱼群](?work=aita-schooling) · [XPBD 布料](?work=aita-cloth) · [宇宙渲染](?work=aita-cosmos) · [体积雾](?work=aita-fog) · [破碎溶解](?work=aita-fracture)。

@[video: 七项演示 · 真实 UE 编辑器窗口 · 约 42 秒](/media/repositories/aita-systems/showcase.mp4)

## 七个展项

- **光与色块**：三段光照与反向壳描边，观察轮廓和明暗色块。
- **风过草甸**：64×64 GPU 风场驱动约 3.3 万草叶，移动球体压弯草叶后逐渐回弹。
- **群游**：1,024 条鱼在 GPU 上更新位置与速度，按分离、对齐和聚合规则移动并避开障碍。
- **风中的织物**：1,025 个顶点通过 CPU XPBD 约束求解保持织物形状，响应风力与球体碰撞。
- **遥远的轨道**：程序化云带、星环、星空与流星，在缓慢移动的镜头下展示层次。
- **雾中有光**：沿视线做 64 步体积积分，累计程序化雾密度的吸收与光束贡献。
- **瓦解与新生**：48 个预切 Voronoi 凸块由 Chaos 模拟碰撞，再结合溶解边缘与碎屑呈现消散。

## 工程与范围

源码、项目材质、主展示关卡及七个独立关卡均在仓库。GPU 模拟使用计算着色器与 RDG 调度；展示场景在运行时生成。首次运行需要编译 C++ 模块，并按 README 添加 Epic Starter Content。

当前为效果方向的学习复现：Toon 未修改引擎源码，布料使用 CPU 求解，雾密度没有流体压力求解，破碎使用预切凸块。逐项差异与七条原视频链接收录在仓库，未接入 AI 模型运行时。

录像完整保留 UE 编辑器边框，采用固定时间步长采集，不代表实时性能基准。岩石、雕塑和灌木来自 Epic Starter Content；原作者视频与 Epic 外部资产不随源码重新分发。`,
    en: `# UE Realtime Graphics Lab

An independent learning project inspired by [seven technical-art videos by 夏末冬至烧冻鸡翅](https://space.bilibili.com/1080308077). One UE 5.8 C++ project shares GPU state updates, material generation, and gallery controls across seven scenes.

@[video: Seven studies recorded in the actual Unreal Editor, approximately 42 seconds](/media/repositories/aita-systems/showcase.mp4)

## The seven studies

- Three-band toon shading and inverted-hull outlines.
- Approximately 33,000 grass blades driven by a 64×64 GPU wind field, with sphere interaction and spring recovery.
- 1,024 GPU schooling agents with separation, alignment, cohesion, and obstacle avoidance.
- A 1,025-vertex CPU XPBD cloth responding to wind and sphere collisions.
- Procedural planetary bands, geometric rings, stars, and meteors.
- 64-step volumetric integration with procedural density and analytic light beams.
- 48 pre-cut convex Voronoi chunks with Chaos physics, dissolve edges, and debris.

## Scope and setup

The repository includes C++, HLSL, generated project materials, the main gallery, and seven standalone maps. Build the C++ module and add Epic Starter Content as described in the README. Scenes are constructed at runtime.

These are effect studies rather than a complete reproduction of the reference frameworks: toon shading is material-level, cloth runs on CPU, fog has no fluid pressure solver, and fracture uses pre-cut chunks. No AI model runs at runtime. The repository lists all seven reference videos and implementation differences.

The recording captures the actual editor window at a fixed simulation timestep; it is not a performance benchmark. Rocks, the statue, and bushes use Epic Starter Content. Reference videos and external Epic assets are not redistributed with the source.`,
  },
};
