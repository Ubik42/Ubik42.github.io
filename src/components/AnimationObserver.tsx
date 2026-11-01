import { useState } from 'react';
import observation from '../data/animation-observer.json';

export function AnimationObserver({ locale }: { locale: 'zh' | 'en' }) {
  const zh = locale === 'zh';
  const [selected, setSelected] = useState(0);
  const labels = zh ? ['近处', '中距离', '远处', '返回近处'] : ['Near', 'Middle', 'Far', 'Return'];
  const sample = observation.samples[selected];
  const actor = sample.actor;
  return <><section className="animation-observer animation-ramp" aria-label={zh ? '坡道连续行走与动画距离分级' : 'Continuous slope walk with animation distance tiers'}>
    <p className="performance-kicker">2026-11-01 · UE 5.7 · {zh ? '单角色连续观察' : 'Continuous character observation'}</p>
    <h3>{zh ? '坡道往返：动画分级与足部后处理' : 'Slope traversal: animation tiers and foot processing'}</h3>
    <video controls playsInline preload="metadata" poster="/media/repositories/lyra-hero-arena/animation-observer/ramp-poster.png" src="/media/repositories/lyra-hero-arena/animation-observer/ramp-walk.mp4" aria-label={zh ? '同一角色在20度坡道连续往返的实机录像' : 'One character walking continuously on a 20-degree ramp'} />
    <p>{zh ? '同一角色在 20° 坡道上持续往返，由 CharacterMovement 处理移动与碰撞。相机依次位于约 6、18、28 米，再返回近处；长焦保持角色可辨，状态说明来自运行采样。' : 'CharacterMovement drives a continuous walk on a 20-degree ramp. The camera moves through approximately 6, 18 and 28 metres, then returns. Telephoto framing keeps the actor readable; labels use recorded runtime state.'}</p>
    <p className="observer-note">{zh ? '约 22 秒，原生帧按游戏时间回放，中文状态标出采样时刻。这组坡道观察与下方 200 AI 性能计时分别记录。' : 'About 22 seconds of native frames replayed by game time, with state sample timestamps. This slope observation is recorded separately from the 200-AI timings below.'} <a href="/media/repositories/lyra-hero-arena/animation-observer/ramp-recording.json" target="_blank" rel="noreferrer">{zh ? '录像与状态记录 ↗' : 'Recording data ↗'}</a></p>
  </section><details className="animation-records"><summary>{zh ? '四阶段状态快照 · 12 AI 观察场景' : 'Four state snapshots · 12-AI observation'}</summary><section className="animation-observer" aria-label={zh ? '同一角色的距离策略切换' : 'One character across distance tiers'}>
    <p className="performance-kicker">2026-11-01 · UE 5.7 · 12 AI</p>
    <h3>{zh ? '同一个角色，从完整更新到远景裁剪' : 'One character: full updates to distant trimming'}</h3>
    <p>{zh ? '跟随画面中央的蓝色角色，拉远相机后收窄视角，观察同一角色在不同距离下的策略。状态直接读取运行中的骨骼网格组件。' : 'The camera follows the central blue character, narrowing its field of view at distance. State is read from its live skeletal mesh component.'}</p>
    <div className="performance-chapters">{observation.samples.map((item, index) => <button key={item.stage} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}><span>{(item.actor.distance / 100).toFixed(1)} m</span>{labels[index]}</button>)}</div>
    <figure><img src={sample.image} alt={zh ? `${labels[selected]}的角色运行画面` : `Character at ${labels[selected]} distance`} width="1024" height="576" loading="lazy" /><figcaption>{zh ? '游戏时间' : 'Game time'} {sample.captureGameTime.toFixed(2)} s · {zh ? '角色编号' : 'Actor'} 1 · LOD {actor.lod}</figcaption></figure>
    <dl className="observer-state" aria-live="polite">
      <div><dt>{zh ? '动画更新' : 'Animation updates'}</dt><dd>{actor.uro ? (zh ? `URO · 每 ${actor.updateRate} 帧更新` : `URO · every ${actor.updateRate} frames`) : (zh ? '完整频率 · URO 关闭' : 'Full rate · URO off')}</dd></div>
      <div><dt>{zh ? '足部贴地后处理' : 'Foot-plant post process'}</dt><dd>{actor.postProcessDisabled ? (zh ? '远景关闭' : 'Disabled at distance') : (zh ? '开启' : 'Enabled')}</dd></div>
      <div><dt>{zh ? '几何细节' : 'Geometry'}</dt><dd>{zh ? '始终 LOD0 · 未减面' : 'LOD0 throughout'}</dd></div>
    </dl>
    <p className="observer-note">{zh ? '这是距离策略的状态快照；截图与状态在相邻帧采集。远处仍保留原模型，返回近处后恢复完整动画。此组观察不计入下方历史性能数据。' : 'State snapshots on adjacent frames, separate from the historical timings below. Original geometry is retained and full animation returns nearby.'} <a href="/media/repositories/lyra-hero-arena/animation-observer/observation.json" target="_blank" rel="noreferrer">{zh ? '查看状态记录 ↗' : 'State record ↗'}</a></p>
  </section></details></>;
}
