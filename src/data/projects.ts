import type { Locale } from './content';
import type { PortfolioCategory } from './repositoryWorks';

export type ProjectText = Record<Locale, string>;

export interface ProjectImage {
  src: string;
  alt: ProjectText;
  caption: ProjectText;
  position?: string;
}

export interface SelectedProject {
  id: string;
  portfolioCategory: PortfolioCategory;
  title: string;
  period: string;
  category: ProjectText;
  summary: ProjectText;
  contribution: ProjectText[];
  stack: string[];
  images: ProjectImage[];
  link?: { label: ProjectText; href: string };
  youtubeId?: string;
  story?: {
    title: ProjectText;
    intro: ProjectText;
    features: Array<{ title: ProjectText; detail: ProjectText }>;
    note?: ProjectText;
  };
}

export const selectedProjects: SelectedProject[] = [
  {
    id: 'fathom',
    portfolioCategory: 'engine-games',
    title: '实体控制器潜艇协作游戏',
    period: '2026',
    category: { zh: 'Unreal 游戏 / 硬件交互', en: 'Unreal game / hardware interaction' },
    summary: {
      zh: '面向实体控制器的潜艇协作游戏。我担任主要程序与玩法架构负责人，完成任务循环、小游戏、UI 数据流和硬件接入。',
      en: 'A physical-console submarine co-op game. I owned gameplay architecture, task loops, minigames, UI data flow, and hardware integration.',
    },
    contribution: [
      { zh: '搭建 GameMode、角色控制、任务生成、小游戏接口与 UI/HUD 数据绑定。', en: 'Built GameMode, character control, task generation, minigame interfaces, and UI/HUD data binding.' },
      { zh: '实现 Server / Client 外部输入模块，将硬件信号解析为 Unreal 内的游戏指令。', en: 'Implemented a server/client input module that translated physical-device signals into Unreal gameplay commands.' },
      { zh: '通过异步接收、缓冲与插值处理输入延迟，并为关键链路补充状态校验和容错。', en: 'Reduced input latency with asynchronous receiving, buffering, and interpolation, then added validation and fallback handling.' },
    ],
    stack: ['Unreal Engine', 'Blueprint', 'Networking', 'Hardware I/O', 'UI'],
    images: [
      { src: '/media/projects/fathom-task.png', alt: { zh: 'Fathom 任务玩法与绿色 HUD', en: 'Fathom task gameplay with green HUD' }, caption: { zh: '任务系统与实时 HUD', en: 'Task system and realtime HUD' }, position: 'center' },
      { src: '/media/projects/fathom-sonar.png', alt: { zh: 'Fathom 潜艇舱室画面', en: 'Fathom submarine interior' }, caption: { zh: '潜艇场景与硬件交互目标', en: 'Submarine environment and hardware interaction target' }, position: 'center' },
    ],
  },
  {
    id: 'house-of-vampires',
    portfolioCategory: 'engine-games',
    title: '哥特式吸血鬼城堡解谜游戏',
    period: '2025',
    category: { zh: 'Unreal 蓝图游戏', en: 'Unreal Blueprint game' },
    summary: {
      zh: '已上线 itch.io 的哥特式恐怖解谜游戏。我担任主要蓝图程序与技术美术开发，整合交互、谜题、手部动画和特效。',
      en: 'A gothic puzzle-horror game released on itch.io. I led Blueprint and technical-art development across interactions, puzzles, hand animation, and VFX.',
    },
    contribution: [
      { zh: '使用 Unreal Blueprint 实现玩法流程、交互、谜题、状态管理与手柄支持。', en: 'Implemented gameplay flow, interaction, puzzles, state management, and controller support in Unreal Blueprints.' },
      { zh: '制作第一人称手部绑定与动画，并将动画状态接入交互流程。', en: 'Created the first-person hand rig and animation and connected it to gameplay interactions.' },
      { zh: '参与完整打包与上线交付，项目可在 itch.io 下载。', en: 'Contributed through packaging and public release; the game is available on itch.io.' },
    ],
    stack: ['Unreal Engine', 'Blueprint', 'Gameplay', 'Rigging', 'Animation'],
    images: [
      { src: '/media/projects/house-of-vampires.webp', alt: { zh: 'House of Vampires 的 itch.io 项目页与游戏截图', en: 'House of Vampires itch.io page and screenshots' }, caption: { zh: '已上线的 itch.io 页面与实机画面', en: 'Published itch.io page and in-game captures' }, position: 'top' },
    ],
    link: { label: { zh: '打开 itch.io 项目页', en: 'Open the itch.io page' }, href: 'https://musitive.itch.io/hov' },
    youtubeId: 'aY36FtqdGAw',
    story: {
      title: { zh: '你能逃出德古拉的城堡吗？', en: "Can you survive Dracula's Castle?" },
      intro: {
        zh: '进入《House of Vampires》中这座受经典恐怖电影启发的哥特式城堡。利用宅邸里散落的物品以及自己的身体，解开逃离城堡所需的谜题。',
        en: 'Enter the classic horror-inspired gothic castle in House of Vampires! Use items scattered around the mansion as well as your own body to solve the puzzles needed to escape the castle.',
      },
      features: [
        {
          title: { zh: '多种谜题', en: 'Various Puzzles' },
          detail: { zh: '要成功逃出城堡，你需要只利用自己能够携带的物品，解决多种不同的谜题。', en: 'To successfully escape the castle, you will need to solve several different puzzles using only what you can carry.' },
        },
        {
          title: { zh: '德古拉', en: 'Dracula' },
          detail: { zh: '游戏重新塑造了德古拉这一角色；在这个可怕的怪物抓住你之前，你必须设法逃脱。', en: 'Featuring a new take on Dracula as a character, you must escape this terrifying monster before he catches you.' },
        },
        {
          title: { zh: '手柄支持', en: 'Controller Support' },
          detail: { zh: '游戏完整支持键盘鼠标和 Xbox 手柄。', en: 'The game fully functions with not only Keyboard & Mouse but Xbox Controllers as well.' },
        },
        {
          title: { zh: '经典恐怖电影质感', en: 'Classic Horror Film Look' },
          detail: { zh: '游戏通过后期处理还原经典恐怖电影的胶片质感。', en: 'Using post-processing, the game captures that film look from classic horror films.' },
        },
      ],
      note: { zh: '建议佩戴耳机游玩。', en: 'Best experienced with headphones.' },
    },
  },
  {
    id: 'through-other-eyes',
    portfolioCategory: 'engine-games',
    title: 'VR 视障体验与无障碍叙事游戏',
    period: '2025',
    category: { zh: 'VR 无障碍体验', en: 'VR accessibility experience' },
    summary: {
      zh: '两人团队完成的 VR 视障体验。我兼任玩法策划、程序与技术美术，负责地图路线、事件设计、场景交互和角色绑定。',
      en: 'A two-person VR accessibility project. I worked across game design, programming, and technical art, owning routes, events, interactions, and character rigging.',
    },
    contribution: [
      { zh: '协助把关卡规划落成可游玩的 VR 场景，布置道路、障碍和关键交互点。', en: 'Translated the level plan into a playable VR scene with streets, obstacles, and interaction points.' },
      { zh: '编写事件交互逻辑，并制作简单的导盲犬绑定与动画。', en: 'Authored event interaction logic and created a simple guide-dog rig and animation.' },
      { zh: '围绕受限视觉信息设计引导、反馈和空间节奏。', en: 'Worked on guidance, feedback, and spatial pacing under intentionally limited visual information.' },
    ],
    stack: ['VR', 'Unreal Engine', 'Level Design', 'Interaction', 'Rigging'],
    images: [
      { src: '/media/projects/through-other-eyes-cover.webp', alt: { zh: 'Through Other Eyes 项目海报', en: 'Through Other Eyes project poster' }, caption: { zh: '项目 One Sheet', en: 'Project one-sheet' }, position: 'center 32%' },
      { src: '/media/projects/through-other-eyes-vr.png', alt: { zh: 'VR 中的视障模拟画面', en: 'Visual-impairment simulation in VR' }, caption: { zh: '头显内的受限视觉效果', en: 'Restricted-vision effect inside the headset' }, position: 'center' },
      { src: '/media/projects/through-other-eyes-level.webp', alt: { zh: 'Through Other Eyes 关卡规划图', en: 'Through Other Eyes level plan' }, caption: { zh: '关卡路径与交互点规划', en: 'Route and interaction-point planning' }, position: 'center' },
    ],
  },
  {
    id: 'retro-arcade',
    portfolioCategory: 'engine-games',
    title: '复古像素风 3D 街机游戏原型',
    period: '2025',
    category: { zh: 'Unity 游戏与 Shader', en: 'Unity gameplay and shader' },
    summary: {
      zh: '复古 3D 街机游戏原型。我负责完整 Gameplay、角色与动画状态，并尝试把 3D 动画烘焙成带法线信息的像素序列帧。',
      en: 'A retro 3D arcade prototype. I owned gameplay and character state and explored baking 3D animation into pixel sprites with normal information.',
    },
    contribution: [
      { zh: '实现角色状态、动画状态、关卡逻辑和核心玩法循环。', en: 'Implemented character state, animation state, level logic, and the core gameplay loop.' },
      { zh: '制作部分 2D 角色素材，并完成 3D 到 2D 序列帧的实验流程。', en: 'Created part of the 2D character art and completed a 3D-to-2D sprite-sequence experiment.' },
      { zh: '编写利用颜色、Alpha 与法线贴图的像素化实时 Shader，并记录方案未进入最终版本的原因。', en: 'Wrote a pixel-rendering shader using color, alpha, and normal data and documented why the experiment was not adopted.' },
    ],
    stack: ['Unity', 'C#', 'Shader', 'Gameplay', '2D / 3D Pipeline'],
    images: [
      { src: '/media/projects/retro-arcade-shader.png', alt: { zh: 'Unity 中的像素角色 Shader 实验', en: 'Pixel-character shader experiment in Unity' }, caption: { zh: '3D 动画到像素序列帧与法线光照实验', en: '3D animation to pixel sprites with normal-lighting experiment' }, position: 'center' },
      { src: '/media/projects/retro-arcade-sprites.png', alt: { zh: '复古街机角色序列帧素材', en: 'Retro arcade character sprite sheets' }, caption: { zh: '本人制作的角色序列帧素材', en: 'Character sprite sheets I created' }, position: 'center' },
    ],
  },
  {
    id: 'digital-twin',
    portfolioCategory: 'other-tools',
    title: '工业设备数字孪生交互系统',
    period: '2023',
    category: { zh: 'Web 3D 可视化', en: 'Web 3D visualization' },
    summary: {
      zh: '实习期间完成的小型工业数字孪生原型，覆盖 FBX 资产接入、机械关节控制、场景状态与业务参数 UI。',
      en: 'A compact internship digital-twin prototype covering FBX assets, mechanical joint controls, scene state, and business-facing parameter UI.',
    },
    contribution: [
      { zh: '新增工业 DigitalTwin 页面与配置，导入多组 FBX 机械和场景资产。', en: 'Added the industrial DigitalTwin page and configuration and imported multiple FBX mechanical and scene assets.' },
      { zh: '扩展 TransformControls，用参数驱动机械模型和关节旋转。', en: 'Extended TransformControls to drive mechanical models and joint rotation through parameters.' },
      { zh: '使用 Tweakpane 与 Element Plus 整理显示参数和工业控制按钮，并明确区分个人修改与上游框架能力。', en: 'Built parameter and industrial controls with Tweakpane and Element Plus while separating personal changes from upstream framework features.' },
    ],
    stack: ['Vue 3', 'TresJS', 'Three.js', 'TransformControls', 'FBX'],
    images: [
      { src: '/media/projects/digital-twin.png', alt: { zh: '工业数字孪生建筑线框与显示控制面板', en: 'Industrial digital twin with building outlines and display controls' }, caption: { zh: '城市建筑数据与显示参数控制', en: 'Building data and display-parameter controls' }, position: 'center' },
    ],
    link: { label: { zh: '查看 GitHub 仓库', en: 'View the GitHub repository' }, href: 'https://github.com/Ubik42/Vue3_Digital_Twin' },
  },
];

export function projectText(value: ProjectText, locale: Locale) {
  return value[locale];
}
