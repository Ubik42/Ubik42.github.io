import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { copy, locale } = useLanguage();
  return (
    <section className="profile-strip" aria-labelledby="hero-title">
      <img src="/media/avatar.jpg" alt="Lucas Shen hand-drawn avatar" width="640" height="640" fetchPriority="high" />
      <div className="profile-name">
        <h1 id="hero-title"><span lang="zh-CN">沈裕焱</span><span>Lucas Shen</span></h1>
        <p>{copy.hero.role}</p>
      </div>
      <p className="profile-intro">{locale === 'zh' ? '游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线作品。' : 'Games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines.'}</p>
    </section>
  );
}
