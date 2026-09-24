import type { RepositoryWork } from './repositoryWorks';

export const animationAigcLab: RepositoryWork = {
  id: 'animation-aigc-lab',
  title: 'AI 角色生成与视频动作重定向',
  category: 'ai-agent',
  categoryLabel: { zh: 'AIGC 角色与动画制作', en: 'AI-assisted character and animation production' },
  summary: {
    zh: '从多视图生成角色，经四边面重建、PBR 烘焙、身体与手指绑定，将两段真人视频动作重定向到三个不同体型的角色。',
    en: 'Three generated characters share two video-driven motions through quad remeshing, PBR baking, body and finger rigging, and motion retargeting.',
  },
  cover: '/media/repositories/animation-aigc-lab/hero.webp',
  tags: ['Meshy', 'Blender', 'MediaPipe', 'Python', '动画重定向'],
  story: {
    zh: `# AI 角色生成与视频动作重定向

## 从生成模型到可动角色

Meshy 根据角色多视图生成带材质的网格，随后单独重建四边面，通过 FBX 导入 Blender。重新展开 UV 后，将源模型的颜色、法线、粗糙度和金属度烘焙到新网格。

Moss Courier 保留 19,433 个面和 2K 贴图；新角色 Aster Runner 与 Cobalt Sentinel 分别为 35,042、36,318 个面，烘焙输出为 4K。自动四边面重建改善了网格组织，但没有代替人工布置关节环线。

## 身体、手指与蒙皮

三个角色都使用 54 根骨骼，其中 30 根控制手指。身体权重从自动绑定模型转移到重建网格；手指关节根据手部近景投射回实际表面，机器人手部改用人工标定。每个顶点最多保留四个有效骨骼影响，并统一归一化。

制作中检查了张手、半握、握拳、屈肘、屈膝和举臂。修正指骨局部轴翻转，并清理指尖残留的前臂影响，避免弯曲时反折或拉出薄片。

## 同一动作，适配不同体型

MediaPipe 提取身体与手部姿态。二维与三维关节点先做时间平滑，再驱动躯干、四肢、头部和手腕；双腿 IK 与脚接触约束处理支撑，最后将结果烘焙成骨骼关键帧并清理高频抖动。

舞蹈手指使用检测到的弯曲值，缺失帧插值。武术中的握拳按参考补成可编辑姿势，手腕保持中立并随前臂运动；低速支撑脚增加接地约束，避免将透视造成的画面高度差误判为抬脚。这些补正不等同于精确手指动捕。

## 交付与当前范围

本地交付保留三套绑定资产、可编辑 IK 工程、烘焙动画、GLB、四通道贴图及六个真人／角色同步对照。每条 GLB 重新导入，抽查五个时间点的十根身体与手指骨骼。

本页展示实际 Blender 渲染，未合入真人参考画面或音乐。AI 用于制作阶段，不是游戏运行时服务。单目深度、遮挡、脚步与拳路仍有估计误差；结果尚未经过动画师逐帧精修，Blender 的保持体积蒙皮与 GLB 线性蒙皮在极端弯曲时也可能不同。

动作参考：[首段室内舞蹈 · Tencent/MimicMotion](https://github.com/Tencent/MimicMotion/blob/main/assets/example_data/videos/pose1.mp4)、[正面武术 · olia danilevich / Pexels](https://www.pexels.com/video/girl-doing-taekwondo-6005332/)。MimicMotion 仅提供参考视频，本项目没有运行其视频生成模型。`,
    en: `# AI-assisted character generation and motion retargeting

## Production pipeline

Meshy multi-view generation produces the textured source mesh. A separate quad-remesh pass is imported into Blender through FBX, unwrapped, and baked into base-color, normal, roughness, and metallic maps. Moss Courier retains 19,433 faces and 2K maps; Aster Runner and Cobalt Sentinel use 35,042 and 36,318 faces with 4K bake outputs.

## Rigging and skinning

Each character has 54 bones, including 30 finger bones. Body weights are transferred onto the rebuilt surface; finger anchors are fitted from close-up mesh renders, with manual calibration for the robot. Weights are normalized and limited to four effective influences. Open hands, fists, bent elbows, bent knees, and raised arms were inspected; inconsistent finger roll and stray forearm weights were corrected.

## Video-driven animation

MediaPipe body and hand observations are temporally filtered and retargeted, followed by leg IK, support constraints, keyframe baking, and quaternion cleanup. Dance finger curls use detected values with interpolation. Combat fists and neutral wrists are authored constraints based on the reference, not precise finger capture.

## Deliverables and scope

The local project retains editable rigs, IK scenes, baked animation, GLB exports, PBR maps, and six synchronized reference comparisons. Exported GLBs were reimported and checked at five times across ten body and finger bones. These public clips show the Blender-rendered characters only, without reference footage or music.

AI is used during asset production, not at game runtime. Monocular depth, occlusion, foot placement, and punch trajectories remain approximate; these are not animator-polished commercial motion-capture results.

Motion references: [indoor dance / Tencent MimicMotion](https://github.com/Tencent/MimicMotion/blob/main/assets/example_data/videos/pose1.mp4) and [frontal martial arts / olia danilevich, Pexels](https://www.pexels.com/video/girl-doing-taekwondo-6005332/). MimicMotion is a reference-video source only; its generation model is not used.`,
  },
};
