import type { RepositoryWork } from './repositoryWorks';

export const parkourAnimation: RepositoryWork = {
  id: 'maya-parkour-animation',
  title: '八秒跑酷：Maya 角色关键帧动画',
  category: 'general-ta',
  categoryLabel: { zh: '角色动画 · 跑步与跨越', en: 'Character animation · running and jumping' },
  summary: {
    zh: '角色在障碍场景中完成连续跑步、起跳、跨越和落地。作品展示最终动画、带控制器的动作回放、关键帧曲线与场景层级。',
    en: 'An eight-second parkour sequence with running, takeoff, obstacle traversal, and landing, accompanied by rig controls, animation curves, and scene hierarchy.',
  },
  cover: '/media/parkour-animation/cover.jpg',
  tags: ['Maya', '角色动画', '关键帧', 'Graph Editor'],
  story: {
    zh: `# 八秒跑酷：Maya 角色关键帧动画

## 最终动画

角色在简化的障碍场景中连续跑步、起跳、跨越和落地。整段动画共 200 帧，以 24 帧/秒播放，时长约 8.33 秒。

@[video: 最终版 · 完整动作](/media/parkour-animation/final.mp4)

动画的重点是动作衔接。跑步时，躯干前倾与手脚摆动共同表现前进速度；角色跨越障碍时改变身体姿态；角色落地后重新进入跑步节奏。场景使用简化几何体，便于观察角色与障碍之间的空间关系。

![动作时间顺序：跑步、跨越、落地与继续前进](/media/parkour-animation/poses.jpg)

## 控制器与动作回放

下面的回放来自最终 Maya 工程。视口保留绑定控制器，用于展示动作姿态与角色控制层之间的关系。

@[video: 最终工程 · 显示角色控制器](/media/parkour-animation/controls.mp4)

## 动画曲线

Maya 的 Graph Editor 用曲线表示属性随时间的变化。横轴是帧数，纵轴是所选属性的数值。控制器的位置与旋转关键帧决定角色姿态；曲线的变化速度影响动作的加速、减速与停顿。截图选取角色总控制器、骨盆控制器和左右腿部 IK 控制器。腿部 IK 控制器通过脚端的位置带动腿部关节，便于调整脚的位置与支撑姿态。

![最终工程中的控制器关键帧曲线](/media/parkour-animation/curves.png)

## 场景层级

场景大纲展示角色、控制器、障碍和相机的组织关系。控制器用于调整姿态，角色网格呈现动作结果，相机负责记录整段动作。下面的画面来自工程本身。

![Maya 场景、控制器与大纲](/media/parkour-animation/workspace.png)

## 中间版本

工程目录保留了中间版与最终版的场景和视频。下面的中间版可以与页首最终版对照，观察动作姿态与节奏的修改。

@[video: 中间版 · 动作调整记录](/media/parkour-animation/work-in-progress.mp4)`,
    en: `# Eight-second parkour animation

A 200-frame Maya character animation played at 24 fps. The character runs, jumps across obstacles, lands, and resumes running.

@[video: Final animation](/media/parkour-animation/final.mp4)

![Poses in time order](/media/parkour-animation/poses.jpg)

## Rig controls

@[video: Final Maya scene with visible controls](/media/parkour-animation/controls.mp4)

## Animation curves and scene hierarchy

![Control animation curves in Graph Editor](/media/parkour-animation/curves.png)

![Maya scene, controls, and Outliner](/media/parkour-animation/workspace.png)

## Work in progress

@[video: Intermediate version](/media/parkour-animation/work-in-progress.mp4)`,
  },
};
