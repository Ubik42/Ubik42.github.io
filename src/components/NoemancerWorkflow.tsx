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
    <figure className="noemancer-motion">
      <video controls playsInline preload="metadata" width="1600" height="1140"
        poster="/media/repositories/noemancer-workflow/motion-poster.png"
        aria-label={zh ? 'Noemancer 编辑、撤销重做、保存及独立运行连续演示' : 'Noemancer editing, undo, redo, save and packaged player demonstration'}>
        <source src="/media/repositories/noemancer-workflow/motion.mp4" type="video/mp4" />
        <a href="/media/repositories/noemancer-workflow/motion.mp4">{zh ? '打开演示视频' : 'Open video'}</a>
      </video>
      <figcaption><strong>{zh ? '23 秒连续流程' : '23-second workflow'}</strong>
        {zh ? '同一 Editor 中试玩、修改台阶、撤销重做与保存，再启动打包后的独立 Player。自动操作、固定 60 Hz 游戏步长、无声；中间 2 秒停帧用于打包转场，不代表真实打包耗时。' : 'Play, edit, undo, redo and save in one Editor, then launch the packaged Player. Scripted input, fixed 60 Hz simulation, silent. The two-second packaging transition does not represent build time.'}
      </figcaption>
    </figure>
    <div className="noemancer-workflow-switch" role="group" aria-label={zh ? '工作流画面' : 'Workflow views'}>
      {steps.map((item, index) => <button type="button" key={item.image} aria-pressed={selected === index} onClick={() => setSelected(index)}>
        <span aria-hidden="true">0{index + 1}</span>{item[locale]}<small>{item.value}</small>
      </button>)}
    </div>
    <figure className="noemancer-stills">
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
      <p>{zh ? '录像来自原生 D3D12 连续帧。实时命令连接当前 Editor，在同一编辑世界中修改、撤销、重做并保存；打包与 Player 为后续独立运行。以上三张静态截图保留早期独立命令会话的记录。两批均使用工程副本，原工程保持不变。' : 'The video uses native D3D12 frames and live commands in the active Editor. Packaging and Player execution follow separately. The three stills preserve the earlier isolated command-session demonstration. Both runs use project copies; the original remains unchanged.'}</p>
      <a href="/media/repositories/noemancer-workflow/motion.json" target="_blank" rel="noreferrer">{zh ? '连续演示的操作与保存记录 ↗' : 'Video operations and save record ↗'}</a>
      {' · '}
      <a href="/media/repositories/noemancer-workflow/results.json" target="_blank" rel="noreferrer">{zh ? '运行摘要与文件指纹 ↗' : 'Run summary and file hashes ↗'}</a>
    </details>
  </section>;
}
