import type { RepositoryWork } from './repositoryWorks';

const media = '/media/repositories/panthesia';

export const panthesia: RepositoryWork = {
  id: 'panthesia',
  title: 'Panthesia · 钢琴练习与 3D 演奏动画',
  category: 'other-tools',
  categoryLabel: { zh: '独立开发 · 程序化 3D 演奏动画', en: 'Independent app · procedural 3D hand animation' },
  summary: {
    zh: '打开一首 MIDI 就能练的钢琴软件。核心是从乐谱自动生成指法，再实时解算两只手的 3D 演奏动画：手腕最小急动度轨迹、拇指关节空间 IK、按生理数据约束关节，并用逐帧 benchmark 量化改进。',
    en: 'A piano practice app that opens any MIDI. Its core generates fingering from the notes and solves both hands in real time as 3D animation: minimum-jerk wrist paths, joint-space thumb IK, physiological joint limits, and a frame-by-frame benchmark.',
  },
  cover: `${media}/cover.webp`,
  tags: ['Three.js', '程序化动画', 'IK', '指法生成', 'Rust / Tauri 2', 'React 19'],
  repositoryUrl: 'https://github.com/Ubik42/Panthesia',
  story: {
    zh: `# Panthesia：钢琴练习与 3D 演奏动画

Panthesia 是一个开源的 Windows 钢琴练习软件（Tauri 2 + Rust 引擎 + React 19，GPL-3.0）。打开一首 MIDI，它会分出左右手、生成指法，并在琴键上用两只 3D 手把这首歌弹出来，让练习者看清每个音用哪根手指、手怎样移动。

这个页面重点介绍其中的 3D 演奏动画生成：没有动作捕捉数据，也没有学习模型，所有动作都由乐谱和指法在运行时解算出来。

## 实际运行

@[video: 立体视角下双手实时演奏《皎洁的笑颜》（固定视角，瀑布流上方为将要弹的音和指法）](${media}/stage.mp4)

![自由视角：拖动旋转相机，看到手指按键、手腕高低与电钢琴](${media}/three-quarter.webp)

![固定立体视角：从前上方看双手与琴键](${media}/front-1.webp)

![俯视模式：手叠在二维键盘上，与瀑布流对齐](${media}/top-1.webp)

## 从音符到动作

整条链路分四层，每一层只依赖上一层的结果：

1. **指法**：Parncutt 规则表 + 二阶 Viterbi。成对、三连和和弦的代价按手指跨度计算；手指偏好按钢琴家的习惯设为 拇指 = 食指 < 中指 < 无名指 < 小指；穿指重罚；读取延音踏板，踏板接住的音不再要求一直按住，换位更自由。
2. **手腕轨迹**：每一帧先求出“让手指够到键”的手腕放置（加权 Procrustes + 可达修正），再把整段路径解成**加权最小急动度路径**——对三阶差分加惩罚的带状最小二乘（Flash & Hogan 的人体伸取模型）。有键按住处贴合，空闲处平滑滑过；随后在平滑路径上逐帧检查可达，把需要的修正同样平滑后叠加。手在键上快速移动时手腕沿弧线抬起。
3. **手指**：四指用刚性骨链解析求解，远节随中节弯曲的比例取实测值（示指 0.77、中指与环指 0.75、小指 0.57）；按键主要由指根完成，手指保持放松伸展；白键触点可以随手的位置滑向黑键之间的窄处，避免手指竖直戳键。空闲手指提前移到下一个音的上方悬停，并随相邻手指有少量连带运动。
4. **拇指**：拇指单独做**关节空间 IK**——CMC 张开与下倾、MCP、IP 四个角，在生理限位内用阻尼最小二乘（Levenberg–Marquardt）同时优化三项：指尖到达、接近放松姿态、与上一帧的变化；以上一帧热启动，所以不会在两个同样好的姿态之间跳动。

手指顺序用一次带最小间距的加权保序回归保证：按键的手指不动，将要击键的手指几乎不动，空闲手指让位。整个过程没有碰撞模拟，也没有阈值开关，输入连续变化时输出也连续变化。空闲指尖在手掌自己的坐标系里按临界阻尼弹簧跟随目标，起步与停止都是渐变的。

## 用生理数据做约束

关节范围、放松姿态和发力分工都取自文献，并在代码里注明出处：

- 拇指活动度（Barakat 2013，n=100）：MCP 伸展 8 ± 4°，IP 伸展 12 ± 9°；动画中 MCP 后翻限制在 6° 以内，IP 在 4° 以内。
- 弹琴时拇指主要靠 CMC 旋转和 MCP 击键，IP 较稳定（Winges & Furuya 2014），所以舒适范围里 CMC 最宽、IP 最窄。
- 手指独立性（Häger-Ross & Schieber 2000）：环指带动小指约 30%；职业钢琴家的连带更小（Furuya 2011），动画取一半。

现有的钢琴动作数据集（FürElise、PianoMotion10M、PianoVAM）和 MANO 手模型都是非商用许可，与 GPL 不兼容，因此只使用论文发表的数值；手的网格来自 W3C 许可的 WebXR generic-hand 模型，按成人平均手长（约 179 mm）缩放。

## 用 benchmark 量化

手部算法配有一套逐帧 benchmark：用软件里同一份代码，在 6 首转录曲上按 60 帧/秒播放，统计准确、解剖、平滑三类指标，并能与任意提交逐项对比。下表是本轮优化前后（同一组歌曲，各 90 秒）：

| 指标 | 优化前 | 优化后 |
| --- | --- | --- |
| 击键命中 | 96.3% | 96.6% |
| 手腕突变（加速度 > 20 m/s² 的帧） | 7.0‰ | 3.0‰ |
| 手腕急动度均值 | 36.3 m/s³ | 11.3 m/s³ |
| 关节突变（> 20 rad/s 的帧） | 29.5‰ | 2.9‰ |
| 拇指突变（> 10 rad/s 的帧，含按键时） | 107.6‰ | 10.7‰ |
| 拇指 MCP 过伸 p99 | 15.2° | 5.4° |
| 按键手指过度蜷缩 | 34.9‰ | 23.5‰ |
| 手指交叉 | 0 | 0 |

每次调参都先跑 benchmark 再决定取舍，例如：手腕平滑周期从 0.3 s 调到 0.8 s，手腕突变从 11.2‰ 降到 1.1‰，但击键命中掉了 1.2 个百分点，最终靠“平滑后再做可达修正”同时保住两者；限制拇指转速会让拇指卡在反折姿态，于是改为只惩罚相邻帧的变化。

## 房间与相机

立体视角下可以切换到自由相机，拖动旋转、滚轮缩放。钢琴放在一个以它为中心的房间里：木地板、地毯、琴凳、窗外的阳光，琴面上摆着一瓶花和一张大海的照片；墙面只朝内可见，相机转到房间外也不会被挡住。

![从琴的另一侧看：花瓶、相框和弹琴的双手](${media}/room-back.webp)

## 工程边界

- 部分初始代码来自 Neothesia（GPL-3.0），仓库保留来源说明。
- 指法与动画是程序化生成的“合理演示”，不是某位钢琴家的真实动作；benchmark 衡量的是一致性与平滑度，不是与人类动作的误差。
- 当前视频为浏览器调试环境的录屏，桌面程序使用同一份前端代码。`,
    en: `# Panthesia: piano practice with 3D performance animation

Panthesia is an open-source Windows piano practice app (Tauri 2, a Rust engine, React 19; GPL-3.0). Open a MIDI file and it splits the hands, generates fingering, and plays the song on the keys with two 3D hands.

## Running

@[video: Both hands playing in the 3D view](${media}/stage.mp4)

![Free camera view of the hands on a digital piano](${media}/three-quarter.webp)

## From notes to motion

1. **Fingering**: Parncutt-style rules with a second-order Viterbi search, a finger preference of thumb = index < middle < ring < little, heavy crossing penalties, and sustain-pedal awareness.
2. **Wrist path**: per-frame reachable placements, then a weighted minimum-jerk path (banded least squares on the third difference), with reach corrections smoothed the same way.
3. **Fingers**: rigid chains with measured DIP/PIP coupling, knuckle-driven key presses, contact points that slide in along white keys, pre-positioned free fingers, and mild neighbour coupling.
4. **Thumb**: joint-space IK over CMC spread and drop, MCP, and IP, solved by Levenberg–Marquardt within physiological limits, with comfort and frame-to-frame continuity terms.

Finger order is kept by one weighted isotonic projection, not by collisions or thresholds, so the motion stays continuous.

## Measured

A frame-by-frame benchmark plays six songs at 60 fps through the same code. Against the version before this work, thumb joint spikes fell from 107.6 to 10.7 per mille, all joint spikes from 29.5 to 2.9, wrist jolts from 7.0 to 3.0, and strike accuracy rose from 96.3% to 96.6%.

Joint limits and postures come from published hand physiology (Barakat 2013, Winges & Furuya 2014, Häger-Ross & Schieber 2000). Non-commercial piano motion datasets and MANO are not used.`,
  },
  images: [
    { src: `${media}/three-quarter.webp`, alt: { zh: '自由视角下的双手与电钢琴', en: 'Hands on the digital piano in the free camera view' } },
    { src: `${media}/front-1.webp`, alt: { zh: '固定立体视角：前上方看双手与琴键', en: 'Fixed 3D view from above and in front of the keys' } },
    { src: `${media}/three-quarter-left.webp`, alt: { zh: '从左前方看手指按键与相框', en: 'Fingers on the keys seen from the front left' } },
    { src: `${media}/top-1.webp`, alt: { zh: '俯视模式：手叠在二维键盘上', en: 'Top view: hands over the 2D keyboard' } },
    { src: `${media}/room-back.webp`, alt: { zh: '从琴的另一侧看房间与双手', en: 'The room and hands from the far side of the piano' } },
  ],
};
