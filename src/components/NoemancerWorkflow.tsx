import { useState } from 'react';
import './NoemancerWorkflow.css';

const steps = [
  { image: 'editor-before', zh: '修改前', en: 'Before', value: 'Y = 0.35',
    caption: { zh: '工程中的原始台阶。世界大纲选中 02 Training Step，右侧检查器显示位置。', en: 'The original step, selected in the outliner with its position visible in the inspector.' } },
  { image: 'editor-after', zh: '保存后', en: 'After save', value: 'Y = 1.35',
    caption: { zh: '命令提交、撤销、重做并保存后，重新打开同一工程。台阶抬高，检查器与场景保持一致。', en: 'The saved project reopened after apply, undo and redo. The raised step and inspector agree.' } },
  { image: 'player', zh: '独立运行', en: 'Packaged player', value: 'Windows Player',
    caption: { zh: '从打包目录启动 Player，读取包内场景与 C# 程序集，运行移动和跳跃输入。画面不带编辑器面板。', en: 'The packaged player loads its scene and C# assembly, with movement and jump input. No editor panels are present.' } },
] as const;

export function NoemancerWorkflow({ locale }: { locale: 'zh' | 'en' }) {
  const [selected, setSelected] = useState(0);
  const step = steps[selected];
  const zh = locale === 'zh';
  return <section className="noemancer-workflow" aria-labelledby="noemancer-workflow-title">
    <header><p>{zh ? '实际工程 · 2026-10-17 · D3D12' : 'Project capture · 2026-10-17 · D3D12'}</p>
      <h3 id="noemancer-workflow-title">{zh ? '一个台阶，从编辑到独立运行' : 'One platform, from editing to a player build'}</h3>
      <p>{zh ? '场景变更、中文 HUD 与 C# 玩法共用同一个工程。' : 'Scene changes, a Chinese HUD and C# gameplay in one project.'}</p>
    </header>
    <div className="noemancer-workflow-switch" role="group" aria-label={zh ? '工作流画面' : 'Workflow views'}>
      {steps.map((item, index) => <button type="button" key={item.image} aria-pressed={selected === index} onClick={() => setSelected(index)}>
        <span aria-hidden="true">0{index + 1}</span>{item[locale]}<small>{item.value}</small>
      </button>)}
    </div>
    <figure>
      <a href={`/media/repositories/noemancer-workflow/${step.image}.webp`} target="_blank" rel="noreferrer" aria-label={zh ? `${step.zh}：打开原尺寸画面` : `Open full-size ${step.en.toLowerCase()} image`}>
        <img src={`/media/repositories/noemancer-workflow/${step.image}.webp`} width="1600" height="900" alt={step.caption[locale]} />
      </a>
      <figcaption aria-live="polite"><strong>{step.value}</strong>{step.caption[locale]}</figcaption>
    </figure>
    <details>
      <summary>{zh ? '修改如何校验与恢复' : 'Validation and recovery'}</summary>
      <ol>
        <li>{zh ? '预检查不修改场景；正式提交后，旧版本请求返回版本冲突。' : 'Dry-run leaves the scene untouched; a stale request is rejected after commit.'}</li>
        <li>{zh ? '撤销恢复完整场景，重做后保存；重新打开工程确认位置。' : 'Undo restores the complete scene; redo and save persist the change.'}</li>
        <li>{zh ? 'HUD 的五个中文标签通过 UI 源文档事务保存并热应用。' : 'Five Chinese HUD labels are persisted and hot-applied through UI source transactions.'}</li>
      </ol>
      <p>{zh ? '画面来自原生 GPU 捕获。场景修改在独立命令会话完成，截图阶段连接当前编辑器选中目标；此组为流程截图，完整连续操作录像仍待补充。原工程保持不变，演示副本修正了环境 Sprite 元数据。' : 'Native GPU captures. Scene edits use an isolated command session; capture selection connects to the live editor. These are workflow stills; a continuous recording remains pending. The original project is unchanged; environment Sprite metadata was corrected in the demonstration copy.'}</p>
      <a href="/media/repositories/noemancer-workflow/results.json" target="_blank" rel="noreferrer">{zh ? '运行摘要与文件指纹 ↗' : 'Run summary and file hashes ↗'}</a>
    </details>
  </section>;
}
