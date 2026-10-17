import results from '../../public/media/repositories/lyra-hero-arena/performance-results.json';

type Props = { study: 'animation' | 'hud'; locale: 'zh' | 'en' };

export function PerformanceEvidence({ study, locale }: Props) {
  const data = results.cases[study];
  const zh = locale === 'zh';
  const format = (value: number) => value.toFixed(value < .1 ? 4 : 2);
  return <section className="performance-evidence" aria-label={zh ? '实际运行结果对比' : 'Recorded runtime comparison'}>
    <header>
      <p className="performance-kicker">{zh ? '同机实测 · 改动前 3 次 / 改动后 3 次' : 'Same machine · 3 baseline / 3 optimized runs'}</p>
      <h3>{study === 'animation' ? (zh ? '200 个角色，按距离分配动画开销' : 'Animation budgets for 200 characters') : (zh ? 'HUD 刷新变快，整帧改善有多少？' : 'A faster HUD. What changes for the frame?')}</h3>
      <p>{zh ? '下方为 2026-08-31 的运行记录；各组三次统计值取中位数。' : 'Recorded on 2026-08-31. Each value is the median of three per-run statistics.'}</p>
    </header>
    <div className="performance-metrics">
      {data.metrics.map(metric => <figure key={`${metric.metric}-${metric.statistic}`}>
        <figcaption>{metric.label[locale]} <strong className={Math.abs(metric.changePercent) < 1 ? 'is-flat' : ''}>{metric.changePercent.toFixed(1)}%{Math.abs(metric.changePercent) < 1 && <small>{zh ? '基本持平' : 'Essentially unchanged'}</small>}</strong></figcaption>
        {(['baseline', 'optimized'] as const).map(variant => <div className={`performance-bar-row ${variant}`} key={variant}>
          <span>{variant === 'baseline' ? (zh ? '改动前' : 'Before') : (zh ? '改动后' : 'After')}</span>
          <div className="performance-bar-track" aria-hidden="true"><div style={{ width: `${metric[variant] / Math.max(metric.baseline, metric.optimized) * 100}%` }} /></div>
          <b>{format(metric[variant])}<small> ms</small></b>
        </div>)}
      </figure>)}
    </div>
    <p className="performance-reading-note">{zh ? '每项使用独立的零起点刻度；耗时越低越好。P95 表示每次采样中 95% 的帧不超过该耗时，再对三次结果取中位数。' : 'Each metric has its own zero-based scale. Lower is better. P95 is calculated per run, then the median of three runs is shown.'}</p>
    {study === 'animation' && <ol className="performance-policy" aria-label={zh ? '动画更新距离策略' : 'Distance-based animation policy'}>
      <li><span>{zh ? '本地角色 / 12 m 内' : 'Local player / within 12 m'}</span><strong>{zh ? '保留完整更新' : 'Full updates'}</strong><p>{zh ? '近景动作与玩家控制优先。' : 'Prioritize the player and nearby motion.'}</p></li>
      <li><span>{zh ? '12–24 m 非本地角色' : 'Non-local characters at 12–24 m'}</span><strong>{zh ? '启用 URO' : 'Enable URO'}</strong><p>{zh ? '降低更新频率；不可见时仅更新 Montage。' : 'Reduce update frequency; tick only montages while hidden.'}</p></li>
      <li><span>{zh ? '24 m 外非本地角色' : 'Non-local characters beyond 24 m'}</span><strong>{zh ? '降低骨骼与 IK 开销' : 'Reduce mesh and IK work'}</strong><p>{zh ? '调整网格 LOD，关闭 Post Process AnimBP。' : 'Raise mesh LOD and disable the post-process AnimBP.'}</p></li>
    </ol>}
    <details className="performance-details">
      <summary>{zh ? '实验条件与六次采样' : 'Conditions and all six runs'}</summary>
      <dl>
        <div><dt>{zh ? '硬件' : 'Hardware'}</dt><dd>i7-13700F · RTX 4080</dd></div>
        <div><dt>{zh ? '环境' : 'Environment'}</dt><dd>UE 5.7.4 · D3D12 · 1280 × 720</dd></div>
        <div><dt>{zh ? '场景' : 'Scene'}</dt><dd>{data.conditions.map} · {data.conditions.targetAgentCount} AI · Seed {data.conditions.seed}</dd></div>
        <div><dt>{zh ? '每轮时长' : 'Per run'}</dt><dd>{zh ? `预热 ${data.conditions.warmupSeconds} s / 采样 ${data.conditions.measurementSeconds} s` : `${data.conditions.warmupSeconds} s warmup / ${data.conditions.measurementSeconds} s capture`}</dd></div>
        <div><dt>{zh ? '源码版本' : 'Source revision'}</dt><dd><code>{data.conditions.sourceRevision}</code></dd></div>
      </dl>
      <div className="performance-run-table" tabIndex={0} role="region" aria-label={zh ? '六次采样明细，可横向滚动' : 'Six-run details, horizontally scrollable'}>
        <table>
          <caption>{zh ? 'ABBAAB 顺序；表中每行是一次运行的统计值。' : 'ABBAAB order; each row contains statistics from one run.'}</caption>
          <thead><tr><th>{zh ? '运行' : 'Run'}</th>{data.metrics.map(m => <th key={`${m.metric}-${m.statistic}`}>{m.label[locale]} (ms)</th>)}</tr></thead>
          <tbody>{data.runs.map((run, i) => <tr key={run.runId}><th scope="row">{i + 1} · {run.variant === 'Baseline' ? (zh ? '改动前' : 'Before') : (zh ? '改动后' : 'After')}</th>{data.metrics.map(m => {
            const values = run.metrics as Record<string, { mean: number; p95: number }>;
            return <td key={`${m.metric}-${m.statistic}`}>{format(values[m.metric][m.statistic as 'mean' | 'p95'])}</td>;
          })}</tr>)}</tbody>
        </table>
      </div>
      <a href="/media/repositories/lyra-hero-arena/performance-results.json" target="_blank" rel="noreferrer">{zh ? '查看运行摘要与原文件指纹 ↗' : 'Run summaries and source hashes ↗'}</a>
    </details>
  </section>;
}
