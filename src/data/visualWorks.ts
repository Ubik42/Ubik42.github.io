import type { Localized } from './showcase';

export interface VisualWorkImage {
  src: string;
  alt: Localized;
  caption: Localized;
  position?: string;
}

export interface VisualWork {
  id: string;
  title: Localized;
  cover: string;
  category: Localized;
  summary: Localized;
  process: Localized[];
  tools: string[];
  images: VisualWorkImage[];
  youtubeId?: string;
  artstationUrl: string;
  featured?: boolean;
}

export const visualWorks: VisualWork[] = [
  {
    id: 'unreal-stylized-world',
    artstationUrl: 'https://www.artstation.com/artwork/kNZDbK',
    title: { en: 'Unreal Engine Stylized World', zh: 'Unreal 风格化世界' },
    cover: '/media/artstation/unreal-stylized-world.jpg',
    category: { en: 'Realtime environment', zh: '实时场景' },
    summary: {
      en: 'A stylized realtime environment built from a Houdini heightfield HDA, then authored and optimized in Unreal Engine.',
      zh: '使用 Houdini 生成高度场与散布数据，将 HDA 接入 Unreal Engine，完成风格化材质、植被替换、水面、灯光与后处理。',
    },
    process: [
      { en: 'Generated, eroded, and smoothed the terrain in Houdini, with placeholders for rocks and four tree variants.', zh: '在 Houdini 中生成、侵蚀并平滑地形，同时为岩石和四类树木建立程序化散布占位。' },
      { en: 'Built distance-aware terrain, water, grass, and foliage materials in Unreal Engine.', zh: '在 Unreal Engine 中制作分远近层级的地表、水面、草地与植被材质。' },
      { en: 'Completed scene dressing, lighting, sharpening post process, and final realtime presentation.', zh: '完成场景布置、灯光、锐化后处理与最终实时画面。' },
    ],
    tools: ['Unreal Engine', 'Houdini', 'HDA', 'Material Editor'],
    youtubeId: 'GRVpU7MBSTg',
    featured: true,
    images: [
      { src: '/media/visual-works/world-final.webp', alt: { en: 'Final stylized environment in Unreal Engine', zh: 'Unreal Engine 中的风格化世界最终画面' }, caption: { en: 'Final realtime environment', zh: '最终实时场景' } },
      { src: '/media/visual-works/world-heightfield.webp', alt: { en: 'Houdini heightfield and placement visualization', zh: 'Houdini 高度场与模型占位可视化' }, caption: { en: 'Heightfield and procedural placement data', zh: '高度场与程序化散布数据' } },
    ],
  },
  {
    id: 'maya-plugin',
    artstationUrl: 'https://www.artstation.com/artwork/XJGnR3',
    title: { en: 'Maya Plugin', zh: 'Maya 综合工具集' },
    cover: '/media/artstation/maya-plugin.jpg',
    category: { en: 'DCC tool development', zh: 'DCC 工具开发' },
    summary: {
      en: 'A modular Maya tool suite covering nine production areas, with separated interface and utility layers.',
      zh: '面向 Maya 生产流程的综合工具集，覆盖属性、绑定、约束、骨骼、控制器、命名、连接、工程与动画九类功能。',
    },
    process: [
      { en: 'Separated PySide interfaces from reusable backend utility classes.', zh: '以 PySide 界面层调用后端 Utility 类，拆分交互、业务逻辑与公共功能。' },
      { en: 'Implemented production-oriented operations for rigging, attributes, constraints, naming, and connections.', zh: '实现绑定、属性、约束、命名与驱动连接等面向实际制作的批量操作。' },
      { en: 'Added persistent theme, window state, responsive layout, and contextual tooltips.', zh: '补充主题与窗口状态记忆、弹性布局、字号适配及悬停提示。' },
    ],
    tools: ['Maya', 'Python', 'PySide', 'DCC Pipeline'],
    youtubeId: '7rUuqI9Pil0',
    images: [
      { src: '/media/visual-works/maya-main.webp', alt: { en: 'Main Maya plugin window', zh: 'Maya 综合工具集主界面' }, caption: { en: 'Main window and attribute tools', zh: '主窗口与属性工具' } },
      { src: '/media/visual-works/maya-rig.webp', alt: { en: 'Rigging tools in the Maya plugin', zh: 'Maya 工具集中的绑定功能' }, caption: { en: 'Rigging utilities', zh: '绑定工具页' } },
      { src: '/media/visual-works/maya-connections.webp', alt: { en: 'Attribute connection tools', zh: '属性连接与驱动关系工具' }, caption: { en: 'Connection editor', zh: '属性连接编辑器' } },
    ],
  },
  {
    id: 'stylized-road-material',
    artstationUrl: 'https://www.artstation.com/artwork/Bk918D',
    title: { en: 'Stylized Road Material', zh: '风格化道路材质' },
    cover: '/media/artstation/stylized-road-material.jpg',
    category: { en: 'Procedural material', zh: '程序化材质' },
    summary: {
      en: 'A stylized road material authored procedurally in Substance Designer.',
      zh: '使用 Substance Designer 制作的风格化道路材质，通过 Flood Fill、层级拆分与多层噪声构建砖块、花纹、草地、花瓣、泥土和潮湿变化。',
    },
    process: [
      { en: 'Constructed the brick base and spiral motif as reusable procedural patterns.', zh: '程序化构建砖块基底与旋涡纹样，并保持图案参数可调。' },
      { en: 'Used Flood Fill and deformation mixing to break repetition.', zh: '使用 Flood Fill 与形变混合打散重复，建立砖块尺度和方向变化。' },
      { en: 'Layered grass, petals, dirt, moisture, and unified color grading.', zh: '分层加入草地、花瓣、泥土、潮湿区域，最后统一整体色彩。' },
    ],
    tools: ['Substance Designer', 'Flood Fill', 'Procedural Material'],
    youtubeId: 'D2jptqFjUZE',
    images: [
      { src: '/media/visual-works/road-material.webp', alt: { en: 'Final stylized road material', zh: '风格化道路材质最终效果' }, caption: { en: 'Final material maps and surface', zh: '最终材质与贴图效果' } },
      { src: '/media/visual-works/road-graph.webp', alt: { en: 'Substance Designer material graph', zh: 'Substance Designer 材质节点网络' }, caption: { en: 'Procedural graph', zh: '程序化节点网络' } },
    ],
  },
  {
    id: 'rigging-animation',
    artstationUrl: 'https://www.artstation.com/artwork/vb42ev',
    title: { en: 'Rigging & Animation', zh: '角色绑定与动画' },
    cover: '/media/artstation/rigging-animation.jpg',
    category: { en: 'Rigging and gameplay', zh: '绑定与游戏角色' },
    summary: {
      en: 'A complete path from a mechanical character rig in Maya to a playable Unreal Engine character.',
      zh: '将 T-200 机器人从 Maya 骨骼与控制器绑定推进到 Unreal Engine 过场动画和可操控角色，处理机械轴、武器链条、舱门、灯光与攻击动画。',
    },
    process: [
      { en: 'Built a mechanical rig with specialized IK, weapon-chain constraints, doors, ladder, and spotlight controls.', zh: '针对机械结构制作腿部 IK、武器链条约束、舱门、梯子与探照灯控制。' },
      { en: 'Authored a startup cutscene in Level Sequencer.', zh: '在 Level Sequencer 中制作角色进入机体与机器人启动的过场动画。' },
      { en: 'Implemented locomotion, upper-body attack blending, VFX states, and spotlight input.', zh: '通过 AnimGraph 与蓝图实现移动、上半身攻击混合、烟雾状态和探照灯输入。' },
    ],
    tools: ['Maya', 'Unreal Engine', 'Sequencer', 'AnimGraph', 'Blueprint'],
    youtubeId: 'wd1gCuZZ2EY',
    featured: true,
    images: [
      { src: '/media/visual-works/rig-result.webp', alt: { en: 'Playable T-200 robot in Unreal Engine', zh: 'Unreal Engine 中可操控的 T-200 机器人' }, caption: { en: 'Playable character result', zh: '可操控角色最终效果' } },
      { src: '/media/visual-works/rig-maya.webp', alt: { en: 'Mechanical robot rig in Maya', zh: 'Maya 中的机器人机械绑定' }, caption: { en: 'Maya rig and controls', zh: 'Maya 骨骼与控制器' } },
      { src: '/media/visual-works/rig-animgraph.webp', alt: { en: 'Unreal Engine animation graph', zh: 'Unreal Engine 动画状态图' }, caption: { en: 'Animation state and blending', zh: '动画状态与分层混合' } },
    ],
  },
  {
    id: 'unity-sdf-shader',
    artstationUrl: 'https://www.artstation.com/artwork/XJGnQl',
    title: { en: 'Unity SDF Shader', zh: 'Unity SDF 体积云 Shader' },
    cover: '/media/artstation/unity-sdf-shader.jpg',
    category: { en: 'Realtime shader', zh: '实时 Shader' },
    summary: {
      en: 'A Unity volume-cloud shader using signed distance fields and ray marching.',
      zh: '在 Unity 中以有向距离场描述云体，使用 Ray Marching 进行密度采样，并结合光线包围盒求交、噪声、吸收和散射计算完成体积云渲染。',
    },
    process: [
      { en: 'Combined sphere and box SDF primitives through smooth union and subtraction.', zh: '组合球体与盒体 SDF，并以平滑并集和差集构造可变化的云体形态。' },
      { en: 'Implemented ray-box intersection and density sampling in HLSL.', zh: '在 HLSL 中实现光线与包围盒求交、步进采样和密度计算。' },
      { en: 'Exposed noise, absorption, ambient density, and light intensity for art direction.', zh: '开放噪声、吸收、环境密度与光照强度参数，支持在 Unity Inspector 中调整。' },
    ],
    tools: ['Unity', 'HLSL', 'SDF', 'Ray Marching'],
    youtubeId: 'vSrJBlIisTs',
    images: [
      { src: '/media/visual-works/sdf-properties.webp', alt: { en: 'Unity SDF shader properties', zh: 'Unity SDF Shader 参数定义' }, caption: { en: 'Artist-facing parameters', zh: '可调渲染参数' } },
      { src: '/media/visual-works/sdf-raymarch.webp', alt: { en: 'Ray marching fragment shader code', zh: '体积云 Ray Marching 片元着色代码' }, caption: { en: 'Density sampling and lighting', zh: '密度采样与光照计算' } },
    ],
  },
  {
    id: 'houdini-lightning',
    artstationUrl: 'https://www.artstation.com/artwork/5W1Xkg',
    title: { en: 'Houdini Lightning VFX', zh: 'Houdini 闪电特效' },
    cover: '/media/artstation/houdini-lighting.jpg',
    category: { en: 'Procedural VFX', zh: '程序化特效' },
    summary: {
      en: 'A procedural lightning system that strikes nearby geometry and activates localized destruction.',
      zh: '使用 Houdini 构建的程序化闪电与破碎交互：电流自动寻找周围目标，生成不同形态与频率的闪电，并在命中位置激活对应刚体簇。',
    },
    process: [
      { en: 'Projected source points onto nearby surfaces to establish valid strike targets.', zh: '沿球体法线向周围场景投射散点，筛选有效距离内的闪电命中目标。' },
      { en: 'Built animated lightning forms with curve attributes, VOP noise, particles, and color flow.', zh: '结合曲线属性、VOP 噪声、粒子与颜色流动构建主电流和次级电流。' },
      { en: 'Connected hit regions to clustered rigid-body activation in DOPs.', zh: '在 DOP 中将命中区域连接到预切割刚体簇，实现局部优先崩解。' },
    ],
    tools: ['Houdini', 'VOP', 'DOP', 'Particles', 'Rigid Bodies'],
    images: [
      { src: '/media/visual-works/lightning-form.webp', alt: { en: 'Procedural lightning curves', zh: '程序化生成的闪电曲线' }, caption: { en: 'Lightning form generation', zh: '闪电形态生成' } },
      { src: '/media/visual-works/lightning-stream.webp', alt: { en: 'Secondary electric current effect', zh: '次级电流与颜色流动效果' }, caption: { en: 'Secondary current', zh: '次级电流效果' } },
      { src: '/media/visual-works/lightning-destruction.webp', alt: { en: 'Wall destruction driven by lightning strikes', zh: '闪电命中驱动的墙体破碎' }, caption: { en: 'Strike-driven rigid-body destruction', zh: '命中驱动的刚体破碎' } },
    ],
  },
  {
    id: 'houdini-cluster',
    artstationUrl: 'https://www.artstation.com/artwork/Zl3GrN',
    title: { en: 'Houdini Interactive Cluster', zh: 'Houdini 交互式花簇' },
    cover: '/media/artstation/houdini-cluster.jpg',
    category: { en: 'Procedural interaction', zh: '程序化交互' },
    summary: {
      en: 'A fully procedural flower cluster that bends and blooms in response to a moving reference point.',
      zh: '完全由 Houdini 程序生成的交互式花簇。参考点靠近时，花茎会向目标弯曲并逐渐开放；远离后则恢复闭合状态。',
    },
    process: [
      { en: 'Scattered stems and used VEX to calculate distance-attenuated orientation toward the target.', zh: '散布花茎，并用 VEX 计算指向目标的方向、距离衰减、噪声和平滑。' },
      { en: 'Generated petal rings and blended their normals by target proximity.', zh: '程序化生成花瓣环，根据参考点距离混合花瓣法线以控制开合。' },
      { en: 'Added randomized orientation and color variation without external models.', zh: '不依赖外部模型，为花簇加入方向扰动和颜色变化，完成整体生成网络。' },
    ],
    tools: ['Houdini', 'VEX', 'Procedural Modeling', 'Interaction'],
    images: [
      { src: '/media/visual-works/cluster-response.webp', alt: { en: 'Flower cluster responding to a reference point', zh: '花簇对参考点产生弯曲与开放响应' }, caption: { en: 'Interactive bloom response', zh: '交互式开放效果' } },
      { src: '/media/visual-works/cluster-network.webp', alt: { en: 'Complete Houdini flower network', zh: 'Houdini 花簇完整节点网络' }, caption: { en: 'Complete procedural network', zh: '完整程序化网络' } },
    ],
  },
  {
    id: 'unreal-vfx',
    artstationUrl: 'https://www.artstation.com/artwork/oJWA5k',
    title: { en: 'Unreal Engine VFX', zh: 'Unreal 水墨战斗特效' },
    cover: '/media/artstation/unreal-vfx.jpg',
    category: { en: 'Realtime VFX', zh: '实时特效' },
    summary: {
      en: 'A Chinese ink-inspired combat VFX set built across Unreal materials, Niagara, animation, and post process.',
      zh: '以中国水墨视觉为方向，综合 Unreal 材质、Niagara、动画通知、Sequencer 与后处理，制作刀光、地裂、墨迹喷溅、聚合和画面冲击效果。',
    },
    process: [
      { en: 'Created trail meshes and materials for dissolution, blur, refraction, cracks, and screen distortion.', zh: '制作刀光轨迹网格，以及溶解、拖尾、折射、裂纹和屏幕扰动材质。' },
      { en: 'Layered multiple Niagara systems for blade arcs, dust, smoke, ink splashes, stones, and cohesion.', zh: '分层组合刀光、尘土、烟雾、墨迹喷溅、碎石和聚合等 Niagara 系统。' },
      { en: 'Triggered VFX through animation slots and notifies, then added impact post process.', zh: '通过动画 Slot 与 Notify 触发特效，并在重击阶段加入水墨与模糊后处理。' },
    ],
    tools: ['Unreal Engine', 'Niagara', 'Material Editor', 'Animation'],
    youtubeId: 'hbdYTygLQBw',
    images: [
      { src: '/media/visual-works/vfx-blade.webp', alt: { en: 'Layered sword trail effect', zh: '多层组合的水墨刀光效果' }, caption: { en: 'Sword trail composition', zh: '刀光特效组合' } },
      { src: '/media/visual-works/vfx-ground.webp', alt: { en: 'Large-scale ink ground fissure effect', zh: '大范围水墨地裂效果' }, caption: { en: 'Ground fissure layers', zh: '地裂效果分层' } },
      { src: '/media/visual-works/vfx-final.webp', alt: { en: 'Final combat VFX in Unreal Engine', zh: 'Unreal Engine 水墨战斗特效最终画面' }, caption: { en: 'Final realtime presentation', zh: '最终实时画面' } },
    ],
  },
  {
    id: 'houdini-tower',
    artstationUrl: 'https://www.artstation.com/artwork/nJWYm1',
    title: { en: 'Houdini PCG Tower', zh: 'Houdini 程序化高塔' },
    cover: '/media/artstation/houdini-pcg-tower.jpg',
    category: { en: 'Procedural modeling', zh: '程序化建模' },
    summary: {
      en: 'A parameterized tower generator with independently authored walls, columns, transitions, body, and top.',
      zh: '在 Houdini 中拆分墙体、立柱、过渡结构、塔身与塔顶五个模块，建立相互约束的参数化生成逻辑，并生成可直接应用材质的 UV。',
    },
    process: [
      { en: 'Built modular wall, window, pillar, railing, body, and roof generators.', zh: '分别构建墙体与窗框、立柱、栏杆、塔身装饰和塔顶结构生成器。' },
      { en: 'Used normals, edge groups, VOP-authored attributes, loops, and resampling to control structure.', zh: '使用法线、边组、VOP 属性、循环和重采样控制结构细节与拼装位置。' },
      { en: 'Exposed base, body, and top parameters while maintaining valid joins and UVs.', zh: '将底座、塔身与塔顶参数集中开放，并保持模块衔接和 UV 结果有效。' },
    ],
    tools: ['Houdini', 'Procedural Modeling', 'VOP', 'UV'],
    youtubeId: 'IxTV5AredLw',
    images: [
      { src: '/media/visual-works/tower-wall.webp', alt: { en: 'Procedural wall and window module', zh: '程序化墙体与窗框模块' }, caption: { en: 'Wall generator', zh: '墙体生成模块' } },
      { src: '/media/visual-works/tower-body.webp', alt: { en: 'Assembled procedural tower body', zh: '组合后的程序化塔身' }, caption: { en: 'Tower body assembly', zh: '塔身模块组合' } },
      { src: '/media/visual-works/tower-top.webp', alt: { en: 'Procedural tower top assembly', zh: '程序化塔顶结构' }, caption: { en: 'Tower top module', zh: '塔顶生成模块' } },
    ],
  },
];
