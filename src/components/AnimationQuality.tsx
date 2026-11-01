import { AnimationObserver } from './AnimationObserver';
import { useRef, useState } from 'react';

export function AnimationQuality({ locale }: { locale: 'zh' | 'en' }) {
  const zh=locale==='zh';
  const video = useRef<HTMLVideoElement>(null);
  const [section, setSection] = useState(0);
  const chapters = zh ? ['全景 · 人群负载', '近景 · 角色动作', '局部放大 · 更新细节'] : ['Wide · crowd load', 'Close · character motion', 'Crop · motion detail'];
  return <><AnimationObserver locale={locale} /><details className="animation-records"><summary>{zh ? '200 AI 历史录像 · 全景与近景对照' : 'Historical 200-AI footage · wide and close views'}</summary><section className="animation-quality" aria-label={zh?'动画质量实机对照':'Recorded animation quality comparison'}>
    <p className="performance-kicker">{zh?'2026-10-17 · 200 AI 实机对照':'2026-10-17 · 200 AI capture'}</p>
    <h3>{zh?'近处保留完整动画，远处分配更新预算':'Full animation nearby, reduced updates at distance'}</h3>
    <video ref={video} controls playsInline preload="metadata" onTimeUpdate={() => setSection(Math.min(2, Math.floor((video.current?.currentTime ?? 0) / 5)))} poster="/media/repositories/lyra-hero-arena/animation-quality-poster.jpg" aria-label={zh?'200 AI 动画质量并排对照':'200 AI animation comparison'} src="/media/repositories/lyra-hero-arena/animation-quality.mp4" />
    <div className="performance-chapters" aria-label={zh ? '录像章节' : 'Video chapters'}>{chapters.map((label, index) => <button type="button" key={label} aria-pressed={section === index} onClick={() => { if (video.current) { video.current.currentTime = index * 5; setSection(index); } }}><span>0:{String(index * 5).padStart(2, '0')}</span>{label}</button>)}</div>
    <div className="performance-case-context"><p><strong>{zh ? '调整内容' : 'Change'}</strong>{zh ? '近景保留完整更新；中远景启用 URO，远景关闭足部贴地后处理。' : 'Full updates nearby; URO and reduced foot-plant processing at distance.'}</p><p><strong>{zh ? '画面取舍' : 'Tradeoff'}</strong>{zh ? '远景姿态更新更稀疏。当前资产只有 LOD0，几何细节保持不变。' : 'Sparser distant pose updates. Assets have only LOD0; geometry is unchanged.'}</p></div>
    <p>{zh?'全景、近景及全景局部放大，共 15 秒。两次独立单机运行，按游戏时间回放；下方性能数字来自另一次独立采样。':'Wide, close and enlarged wide views, 15 seconds. Independent standalone runs replayed by game time. The performance figures below come from a separate capture.'}</p>
  </section></details></>;
}
