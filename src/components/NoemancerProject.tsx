import { useLanguage } from '../i18n/LanguageContext';

const repositoryUrl = 'https://github.com/Ubik42/Noemancer';
const releaseUrl = 'https://github.com/Ubik42/Noemancer/releases/tag/v0.1.0-preview.1';

export function NoemancerProject() {
  const { locale } = useLanguage();
  const zh = locale === 'zh';

  const capabilities = zh
    ? [
        ['可读状态面', '场景、项目、运行时状态与诊断采用可查询、可比较的结构化数据。'],
        ['Agent 工具层', 'CLI 与 MCP 提供渐进式披露，让 Agent 先定位事实，再调用受控操作。'],
        ['通用引擎骨架', '覆盖 D3D12 渲染、物理、动画、音频、C# 脚本、资产和打包基础。'],
      ]
    : [
        ['Readable state plane', 'Scenes, projects, runtime state, and diagnostics use queryable, diffable structures.'],
        ['Agent tool layer', 'CLI and MCP expose progressive disclosure: inspect facts first, then invoke bounded operations.'],
        ['General engine foundation', 'D3D12 rendering, physics, animation, audio, C# scripting, assets, and packaging foundations.'],
      ];

  return (
    <section id="noemancer" className="noemancer-section" aria-labelledby="noemancer-title">
      <div className="noemancer-copy">
        <p className="eyebrow">{zh ? '公开自研引擎' : 'Public engine project'}</p>
        <h2 id="noemancer-title">Noemancer</h2>
        <p className="noemancer-lead">
          {zh
            ? '使用 C++20 开发的实验性游戏引擎，包含编辑器、D3D12 渲染、物理、动画、音频、C# 脚本与资产管线，并通过 JSON、CLI 和 MCP 提供结构化编辑与诊断能力。'
            : 'An experimental C++20 game engine with an editor, D3D12 rendering, physics, animation, audio, C# scripting, and an asset pipeline, plus structured editing and diagnostics through JSON, CLI, and MCP.'}
        </p>
        <div className="noemancer-status">
          <span>{zh ? 'PRE-ALPHA · 源码预览' : 'PRE-ALPHA · SOURCE PREVIEW'}</span>
          <small>{zh ? '当前验证平台：Windows 10/11 x64' : 'Currently verified on Windows 10/11 x64'}</small>
        </div>
        <ul className="noemancer-stack" aria-label={zh ? '主要技术' : 'Core technology'}>
          {['C++20', 'D3D12', 'SDL3', 'Jolt Physics', 'C# / .NET', 'MCP'].map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="noemancer-actions">
          <a className="action action-primary" href={repositoryUrl} target="_blank" rel="noreferrer">
            {zh ? '查看 GitHub 源码' : 'View source on GitHub'} <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href={releaseUrl} target="_blank" rel="noreferrer">
            v0.1.0 Preview 1 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="noemancer-evidence">
        <figure>
          <img
            src="/media/noemancer-editor.webp"
            alt={zh ? 'Noemancer 编辑器中的场景、层级树、属性面板和诊断区域' : 'Noemancer editor with scene, hierarchy, inspector, and diagnostics regions'}
            width="1280"
            height="720"
          />
          <figcaption>
            {zh ? '当前编辑器实机画面；界面与工作流仍在快速迭代。' : 'Current editor build; interface and workflows remain under active iteration.'}
          </figcaption>
        </figure>
        <div className="noemancer-capabilities">
          {capabilities.map(([title, detail], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
