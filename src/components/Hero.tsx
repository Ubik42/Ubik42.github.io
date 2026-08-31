import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { copy, locale } = useLanguage();
  const education = locale === 'zh'
    ? [
        ['犹他大学｜娱乐艺术与工程（技术美术和游戏工程）硕士', '2025.08 — 2027.05'],
        ['上海交通大学｜工业工程本科', '2020.09 — 2024.06'],
      ]
    : [
        ['University of Utah | M.E.A.E., Technical Art', 'Aug 2025 — May 2027'],
        ['Shanghai Jiao Tong University | B.Eng., Industrial Engineering', 'Sep 2020 — Jun 2024'],
      ];
  const experience = locale === 'zh'
    ? [
        ['腾讯光子工作室｜AI 工具技术美术实习生', '2026.03 — 2026.08'],
        ['广州四三九九信息科技有限公司｜系统策划', '2024.05 — 2024.11'],
        ['Whitedot 游戏工作室｜Unity 客户端开发实习生', '2024.01 — 2024.04'],
        ['上海如为电力｜UE5 客户端开发实习生', '2023.04 — 2023.08'],
      ]
    : [
        ['Tencent Lightspeed Studios | AI Tools Technical Art Intern', 'Mar 2026 — Aug 2026'],
        ['4399 Network | Systems Designer', 'May 2024 — Nov 2024'],
        ['Whitedot Game Studio | Unity Client Development Intern', 'Jan 2024 — Apr 2024'],
        ['Shanghai Ruwei Electric Power | UE5 Client Development Intern', 'Apr 2023 — Aug 2023'],
      ];

  return (
    <section className="profile-strip" aria-labelledby="hero-title">
      <img src="/media/avatar.jpg" alt="Lucas Shen hand-drawn avatar" width="640" height="640" fetchPriority="high" />
      <div className="profile-name">
        <h1 id="hero-title"><span lang="zh-CN">沈裕焱</span><span>Lucas Shen</span></h1>
        <p>{copy.hero.role}</p>
      </div>
      <p className="profile-intro">{locale === 'zh' ? '游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线作品。' : 'Games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines.'}</p>
      <div className="profile-history">
        <section>
          <h2>{locale === 'zh' ? '教育经历' : 'Education'}</h2>
          <ul>{education.map(([title, time]) => <li key={title}><span>{title}</span><time>· {time}</time></li>)}</ul>
        </section>
        <section>
          <h2>{locale === 'zh' ? '实习与工作经历' : 'Internship & Work Experience'}</h2>
          <ul>{experience.map(([title, time]) => <li key={title}><span>{title}</span><time>· {time}</time></li>)}</ul>
        </section>
      </div>
    </section>
  );
}
