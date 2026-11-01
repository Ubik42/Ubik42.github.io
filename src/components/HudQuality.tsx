export function HudQuality({ locale }: { locale: 'zh' | 'en' }) {
  const zh=locale==='zh';
  return <section className="animation-quality hud-quality" aria-label={zh?'战术 HUD 更新实机对照':'Recorded tactical HUD comparison'}>
    <p className="performance-kicker">{zh?'2026-10-17 · 同组输入实机对照':'2026-10-17 · Matched input sequence'}</p>
    <h3>{zh?'减少重复刷新，关键提示独立触发':'Fewer repeated refreshes, separate critical notifications'}</h3>
    <video controls playsInline preload="metadata" poster="/media/repositories/lyra-hero-arena/hud-quality-poster.jpg" aria-label={zh?'战术 HUD 每帧与分频更新对照':'Per-frame and throttled HUD updates'} src="/media/repositories/lyra-hero-arena/hud-quality.mp4" />
    <div className="performance-case-context"><p><strong>{zh ? '常规状态' : 'Routine state'}</strong>{zh ? '冷却、状态与目标信息按 10 Hz 上限更新，相同文字跳过 SetText。' : 'Cooldowns, state and target information update at up to 10 Hz; unchanged text skips SetText.'}</p><p><strong>{zh ? '关键反馈' : 'Critical feedback'}</strong>{zh ? '英雄切换、重生与技能失败由消息触发；冷却文字允许等待下一次刷新。' : 'Hero changes, respawns and ability failures use messages; cooldown text can wait until the next refresh.'}</p></div>
    <p>{zh?'12.5 秒并排实机，附原生技能栏放大。相同窗口内状态刷新 370 次与 103 次；计数只表示该函数调用，不代表整帧性能。':'12.5 seconds of side-by-side footage with enlarged native skill bars. 370 and 103 state refresh calls in equal windows; these counts are not frame-time measurements.'}</p>
  </section>;
}
