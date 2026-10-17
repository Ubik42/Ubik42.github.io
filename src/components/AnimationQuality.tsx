export function AnimationQuality({ locale }: { locale: 'zh' | 'en' }) {
  const zh=locale==='zh';
  return <section className="animation-quality" aria-label={zh?'动画质量实机对照':'Recorded animation quality comparison'}>
    <p className="performance-kicker">{zh?'2026-10-17 · 200 AI 实机对照':'2026-10-17 · 200 AI capture'}</p>
    <h3>{zh?'完整更新与距离分级，同机位并排展示':'Full updates and distance-based updates, side by side'}</h3>
    <video controls playsInline preload="metadata" poster="/media/repositories/lyra-hero-arena/animation-quality-poster.jpg" aria-label={zh?'200 AI 动画质量并排对照':'200 AI animation comparison'} src="/media/repositories/lyra-hero-arena/animation-quality.mp4" />
    <p>{zh?'全景、近景及全景局部放大，共 15 秒。两次独立单机运行，按游戏时间回放；下方性能数字来自另一次独立采样。':'Wide, close and enlarged wide views, 15 seconds. Independent standalone runs replayed by game time. The performance figures below come from a separate capture.'}</p>
  </section>;
}
