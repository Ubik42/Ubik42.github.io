import type { RepositoryWork } from './repositoryWorks';

export const parkourAnimation: RepositoryWork = {
  id: 'maya-parkour-animation',
  title: '八秒跑酷：Maya 角色关键帧动画',
  category: 'general-ta',
  categoryLabel: { zh: '角色动画 · 跨越与前翻', en: 'Character animation · vaulting and forward rotation' },
  summary: {
    zh: '角色连续完成跑步、跨越障碍、空中前翻和落地。制作拆解展示整体位移与身体控制的分工、左右脚的步态节奏、前翻旋转曲线，以及角色绑定与场景的层级关系。',
    en: 'An eight-second parkour sequence with running, takeoff, obstacle traversal, and landing, accompanied by rig controls, animation curves, and scene hierarchy.',
  },
  cover: '/media/parkour-animation/cover.jpg',
  tags: ['Maya', '角色动画', '关键帧', 'IK / FK', '动作衔接'],
  story: {
    zh: `# 八秒跑酷：Maya 角色关键帧动画

## 最终动画

这段角色动画把跑步、跨越障碍、空中前翻和落地接成一个连续镜头。动画共 200 帧，以 24 帧/秒播放，时长约 8.33 秒。我在 Maya 中通过角色控制器调整动作，并用关键帧组织身体姿态、脚步和镜头运动。

@[video: 最终版 · 完整动作](/media/parkour-animation/final.mp4)

## 动作拆解：跨越与前翻怎样接回跑步

下图从最终视频中抽取八个姿态。图片按从左到右、从上到下排列，分别对应第 17、27、38、107、122、142、153、163 帧。

![关键姿态：17、27、38、107、122、142、153、163 帧](/media/parkour-animation/action-breakdown.jpg)

- **第 17—46 帧，跨越障碍。** 角色从前倾跑步进入腾空姿态。第 27 帧的身体控制器明显抬高，躯干前倾，腿部收起，让身体通过障碍上方。随后身体回落，脚端重新靠近支撑面。
- **第 46—105 帧，恢复跑步节奏。** 身体升降与左右脚抬起呈重复变化。左右脚的抬起时间错开，形成交替迈步的节奏。躯干保持前倾，让跨越后的动作继续朝前推进。
- **第 107—158 帧，第二次腾空与前翻。** 第 122 帧显示身体收起，第 142 帧显示身体向前展开，第 153 帧显示角色接近倒转后的姿态。身体的 X 旋转持续增加，跨过 360° 后进入落地与恢复动作。
- **第 163—200 帧，接回跑步。** 身体高度和脚步曲线重新出现前半段的重复节奏。前翻后的跑步在同一套控制器上继续，镜头也继续跟随角色前进。

## 控制器分工：整体前进、身体动作与脚端位置

下面的视频保留角色控制器。头部、躯干、手臂与脚端的控制形状随动作一起显示，便于对应角色姿态与控制位置。

@[video: 最终工程 · 显示角色控制器](/media/parkour-animation/controls.mp4)

**Character 负责整体前进。** 它是身体控制和 IK 控制的共同父节点。它的 Z 位移建立角色在场景中的基础前进路径。

**Upper_Body 负责身体动作。** 它的 Y 位移组织身体升降，Z 位移补充动作中的前进量，X 旋转组织前倾与前翻。这个控制器让身体姿态可以在整体前进路径上继续变化。

**左右腿部 IK 控制器负责脚端位置。** IK 是通过脚端位置计算腿部关节姿态的控制方式。LeftLeg_IK_Leg 与 RightLeg_IK_Leg 分别控制左右脚；身体下压、抬高和旋转时，脚端位置可以单独调整。骨盆的 Spine_Pelvis_FK 则通过旋转补充躯干姿态。FK 是通过关节或控制器旋转逐级控制姿态的方式。

## 曲线拆解：每条变化对应哪个动作

下图从最终工程逐帧读取六组属性。横轴统一显示第 1—200 帧，每张图使用独立纵轴。曲线上的圆点是原工程的关键帧。蓝灰背景标出跨越段，紫灰背景标出前翻段。

![整体前进、身体前进补偿、升降、前翻、左右脚与骨盆曲线](/media/parkour-animation/semantic-curves.svg)

### 整体位移与局部位移共同形成前进

Character 的 Z 位移从第 1 帧约 −1826.6 cm 增加到第 107 帧约 576.6 cm。在第 107—158 帧，这条曲线保持在 576.6 cm。此时 Upper_Body 的局部 Z 位移从约 53 cm 增加到约 800 cm，继续带动身体向前运动。两个通道分工共同形成这段动作的前进过程。

这些数值属于各控制器相对父节点的局部属性。角色的最终位置还受到父节点、控制器与绑定关系共同影响。因此，单独一条曲线的水平段需要结合其他控制器和视口动作阅读。

### 身体升降区分跑步、腾空与收身

Upper_Body 的 Y 位移在普通跑步段主要交替落在约 −17.6 cm 与 −25.1 cm，形成重复的身体起伏。第 27 帧的数值升到约 81 cm，对应第一次跨越时的明显腾空。前翻段的曲线改变了这种重复形态；第 153 帧的数值降到约 −70.8 cm，与角色收身、倒转后的姿态一起变化。

这条曲线展示身体控制器的局部升降。它与身体旋转、脚端位置共同决定最终姿态，图中的负值表示相对父节点的偏移。

### 连续旋转保留前翻方向

Upper_Body 的 X 旋转在普通跑步段主要在约 33°—46°之间变化，维持躯干前倾。前翻段依次经过第 135 帧约 45.3°、第 142 帧约 96.7°、第 150 帧约 150.6°，并在第 158 帧达到约 387°。

超过 360°的数值保留了这次完整旋转的累计角度。动画因此能够沿同一个方向继续前翻，并在翻转结束后衔接下一段跑步姿态。骨盆曲线同时补充身体内部的弯曲与展开。

### 左右脚错开抬起，建立步态节奏

普通跑步段的左右脚 Y 曲线呈错开的重复波形。例如第 53 帧，左脚局部 Y 为 0 cm，右脚约为 8.8 cm；第 62 帧，右脚为 0 cm，左脚约为 8.8 cm。这组对照展示了左右脚交替抬起与回落的节奏。

腾空与前翻期间，两条曲线离开普通跑步的重复模式，配合身体收起、展开和恢复动作。脚端曲线与身体曲线需要共同判断接触姿态；脚控制器的局部 Y 值本身无法单独表示脚是否接触地面。

## 场景层级：身体和脚怎样分开控制

下图按最终工程的实际父子关系整理。图中保留节点原名，并注明每组节点在本动画中的作用。省略号表示中间绑定节点。

![角色几何体、Character、Upper_Body、IK 分支、场景障碍与相机的层级和职责](/media/parkour-animation/scene-structure.svg)

**rig_group 将角色几何体与控制层放在同一个角色组内。** geo_group 下保留 proxy_geoGroup；Character 下分别组织 Upper_Body 与 IK 分支。场景中的障碍和相机位于角色组之外，角色运动时可以继续使用同一套场景参照。

**Upper_Body 与 IK 是两个并列分支。** Upper_Body 下的 JOINTS 保存骨骼层，RIG 保存躯干等控制结构；IK 分支包含左右腿部控制器。这个组织方式让身体升降与前翻、脚端位置分别通过对应控制器调整。Character 作为它们的共同父节点提供整体位移。

**障碍与相机各自承担场景职责。** pCube1—pCube6 与 pPlane1—pPlane2 构成简化障碍、平台和地面。persp1 下的 perspShape2 是演示相机。persp1 的位置也有关键帧，镜头会随着动作前进，并在腾空段调整高度，保持角色与障碍同时进入画面。

![最终 Maya 工程：角色控制器、场景大纲、显示层与时间轴](/media/parkour-animation/workspace.png)`,
    en: `# Eight-second parkour animation

A 200-frame Maya character animation played at 24 fps. The character runs, jumps across obstacles, lands, and resumes running.

@[video: Final animation](/media/parkour-animation/final.mp4)

![Frames 17, 27, 38, 107, 122, 142, 153 and 163](/media/parkour-animation/action-breakdown.jpg)

## Rig controls

@[video: Final Maya scene with visible controls](/media/parkour-animation/controls.mp4)

## Animation channels and scene hierarchy

The plots use values evaluated from the final scene. Character provides overall Z travel, while Upper_Body adds local travel, vertical movement and forward rotation. Character holds at about 576.6 cm during frames 107–158, while Upper_Body advances locally from about 53 to 800 cm. Upper_Body reaches about 387 degrees of X rotation at frame 158. Left and right foot-height channels alternate during running. These values describe local control attributes.

![Evaluated animation channels and original keys](/media/parkour-animation/semantic-curves.svg)

rig_group contains geo_group and Character. Upper_Body and IK are sibling branches below Character. Body poses and foot positions can therefore be adjusted through their respective controls. JOINTS and RIG are below Upper_Body. Obstacles and the animated persp1 camera are outside the character hierarchy.

![Scene hierarchy and control responsibilities](/media/parkour-animation/scene-structure.svg)

![Maya scene, controls, and Outliner](/media/parkour-animation/workspace.png)`,
  },
};
