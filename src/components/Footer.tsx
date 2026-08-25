import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { copy, locale } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="footer-identity"><img src="/media/avatar.jpg" alt="" width="640" height="640" loading="lazy" /><div><strong>{copy.footer.copyright}</strong><span>{copy.hero.role}</span></div></div>
      <p>{locale === 'zh' ? '技术美术 · 引擎工具 · AIGC' : 'Technical art · Engine tools · AIGC'}</p>
      <a href="#top">{locale === 'zh' ? '回到顶部' : 'Back to top'} <span aria-hidden="true">↑</span></a>
    </footer>
  );
}
