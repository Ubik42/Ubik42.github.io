import results from '../../public/media/repositories/lyra-hero-arena/performance-results.json';

type Props = { study: 'animation' | 'hud'; locale: 'zh' | 'en' };

export function PerformanceEvidence({ study, locale }: Props) {
  const data = results.cases[study];
  const zh = locale === 'zh';
  const format = (value: number) => value.toFixed(Math.abs(value) < .1 ? 4 : 2);
  const metrics = [...data.metrics].sort((a, b) => Number(b.metric === 'frameTimeMs') - Number(a.metric === 'frameTimeMs'));
  const range = (metric: typeof data.metrics[number], variant: string) => {
    const samples = data.runs.filter(run => run.variant === variant).map(run => (run.metrics as Record<string, Record<string, number>>)[metric.metric][metric.statistic]);
    return `${format(Math.min(...samples))}–${format(Math.max(...samples))}`;
  };
  return <section className="performance-evidence" aria-label={zh ? '实际运行结果对比' : 'Recorded runtime comparison'}>
    <header>
      <p className="performance-kicker">{zh ? '同机实测 · 改动前 3 次 / 改动后 3 次' : 'Same machine · 3 baseline / 3 optimized runs'}</p>
      <h3>{study === 'animation' ? (zh ? '动画开销下降，整帧仍有其他负载' : 'Lower animation cost within a larger frame') : (zh ? '常规刷新减少，整帧耗时基本持平' : 'Fewer routine updates, similar frame time')}</h3>
      <p>{zh ? '下方为 2026-08-31 的运行记录；各组三次统计值取中位数。' : 'Recorded on 2026-08-31. Each value is the median of three per-run statistics.'}</p>
    </header>
    <div className="performance-metrics">
      {metrics.map(metric => <figure key={`${metric.metric}-${metric.statistic}`}>
        <figcaption>{metric.label[locale]} <strong className={Math.abs(metric.changePercent) < 1 ? 'is-flat' : ''}>{format(metric.optimized - metric.baseline)}<small>ms</small></strong><span className="performance-relative-change">{metric.changePercent.toFixed(1)}% · {metric.metric === 'frameTimeMs' ? (zh ? '整帧指标' : 'Whole-frame metric') : (zh ? '局部指标' : 'Local metric')}{Math.abs(metric.changePercent) < 1 && (zh ? ' · 基本持平' : ' · Essentially unchanged')}</span></figcaption>
        {(['baseline', 'optimized'] as const).map(variant => <div className={`performance-bar-row ${variant}`} key={variant}>
          <span>{variant === 'baseline' ? (zh ? '改动前' : 'Before') : (zh ? '改动后' : 'After')}</span>
          <div className="performance-bar-track" aria-hidden="true"><div style={{ width: `${metric[variant] / Math.max(metric.baseline, metric.optimized) * 100}%` }} /></div>
          <b>{format(metric[variant])}<small> ms</small></b>
        </div>)}
        <p className="performance-range">{zh ? '三轮范围' : 'Three-run range'}<br />{zh ? '改动前' : 'Before'} {range(metric, 'Baseline')} ms<br />{zh ? '改动后' : 'After'} {range(metric, 'Optimized')} ms</p>
      </figure>)}
    </div>
    <p className="performance-reading-note">{zh ? '每项使用独立的零起点刻度；耗时越低越好。P95 表示每次采样中 95% 的帧不超过该耗时，再对三次结果取中位数。' : 'Each metric has its own zero-based scale. Lower is better. P95 is calculated per run, then the median of three runs is shown.'}</p>
    {study === 'animation' && <ol className="performance-policy" aria-label={zh ? '动画更新距离策略' : 'Distance-based animation policy'}>
      <li><span>{zh ? '本地角色 / 12 m 内' : 'Local player / within 12 m'}</span><strong>{zh ? '保留完整更新' : 'Full updates'}</strong><p>{zh ? '近景动作与玩家控制优先。' : 'Prioritize the player and nearby motion.'}</p></li>
      <li><span>{zh ? '12–24 m 非本地角色' : 'Non-local characters at 12–24 m'}</span><strong>{zh ? '启用 URO' : 'Enable URO'}</strong><p>{zh ? '降低更新频率；不可见时仅更新 Montage。' : 'Reduce update frequency; tick only montages while hidden.'}</p></li>
      <li><span>{zh ? '24 m 外非本地角色' : 'Non-local characters beyond 24 m'}</span><strong>{zh ? '关闭后处理动画' : 'Disable post-process animation'}</strong><p>{zh ? '省去 FootPlant IK；本轮资产仅有 LOD0，未减少网格细节。' : 'Skip FootPlant IK. Current meshes have only LOD0; no mesh detail reduction.'}</p></li>
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
