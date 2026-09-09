import { useLanguage } from '../i18n/LanguageContext';

const repositoryUrl = 'https://github.com/Ubik42/Noemancer';
const releaseUrl = 'https://github.com/Ubik42/Noemancer/releases/tag/v0.2.0-preview.1';

export function NoemancerProject() {
  const { locale } = useLanguage();
  const zh = locale === 'zh';

  const capabilities = zh
    ? [
        ['共同状态与命令', 'Editor、CLI 与 MCP 通过稳定 ID、Schema、Revision 和 Receipt 操作同一份引擎状态。'],
        ['可运行游戏链路', 'C# Gameplay、Jolt 物理、ozz 动画、音频、资产 Cook、Package 与独立 Player 已经贯通。'],
        ['双后端实时渲染', 'D3D12 / Vulkan 共用 SDL_GPU 管线，覆盖 PBR、阴影、天空大气、SSR、SSGI、TAA 与 ACES。'],
      ]
    : [
        ['Shared state and commands', 'The Editor, CLI, and MCP operate one engine state through stable IDs, schemas, revisions, and receipts.'],
        ['Playable game workflow', 'C# gameplay, Jolt physics, ozz animation, audio, asset cooking, packaging, and a standalone Player form one path.'],
        ['Dual-backend rendering', 'D3D12 and Vulkan share an SDL_GPU pipeline with PBR, shadows, atmosphere, SSR, SSGI, TAA, and ACES.'],
      ];

  return (
    <section id="noemancer" className="noemancer-section" aria-labelledby="noemancer-title">
      <div className="noemancer-copy">
        <p className="eyebrow">{zh ? '公开自研引擎' : 'Public engine project'}</p>
        <h2 id="noemancer-title">Noemancer</h2>
        <p className="noemancer-lead">
          {zh
            ? '使用 C++20 开发的 pre-alpha 游戏引擎与中文编辑器，在 Windows x64 上贯通项目编辑、双后端实时渲染、C# Gameplay、物理动画、资产 Cook 和独立 Player。'
            : 'A pre-alpha C++20 game engine and editor with an end-to-end Windows x64 path across project authoring, dual-backend rendering, C# gameplay, physics, animation, asset cooking, and a standalone Player.'}
        </p>
        <div className="noemancer-status">
          <span>{zh ? 'v0.2.0 PREVIEW 1 · PRE-ALPHA' : 'v0.2.0 PREVIEW 1 · PRE-ALPHA'}</span>
          <small>{zh ? '当前验证环境：Windows 11 x64 · RTX 4080' : 'Verified on Windows 11 x64 · RTX 4080'}</small>
        </div>
        <ul className="noemancer-stack" aria-label={zh ? '主要技术' : 'Core technology'}>
          {['C++20', 'D3D12 / Vulkan', 'Flecs / Jolt', 'ozz', '.NET 10 / C#', 'MCP'].map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="noemancer-actions">
          <a className="action action-primary" href={repositoryUrl} target="_blank" rel="noreferrer">
            {zh ? '查看 GitHub 源码' : 'View source on GitHub'} <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href={releaseUrl} target="_blank" rel="noreferrer">
            v0.2.0 Preview 1 <span aria-hidden="true">↗</span>
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
