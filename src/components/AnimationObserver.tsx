import { useState } from 'react';
import observation from '../data/animation-observer.json';

export function AnimationObserver({ locale }: { locale: 'zh' | 'en' }) {
  const zh = locale === 'zh';
  const [selected, setSelected] = useState(0);
  const labels = zh ? ['近处', '中距离', '远处', '返回近处'] : ['Near', 'Middle', 'Far', 'Return'];
  const sample = observation.samples[selected];
  const actor = sample.actor;
  return <section className="animation-observer" aria-label={zh ? '同一角色的距离策略切换' : 'One character across distance tiers'}>
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
  </section>;
}
