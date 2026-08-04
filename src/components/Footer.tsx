import { useLanguage } from '../i18n/LanguageContext';

const links = [
  ['github', 'https://github.com/Ubik42'],
  ['artstation', 'https://lucasshen2002.artstation.com/'],
  ['bilibili', 'https://space.bilibili.com/12367861'],
  ['xiaohongshu', 'https://www.xiaohongshu.com/user/profile/670526b2000000001e001891'],
] as const;

export function Footer() {
  const { copy } = useLanguage();

  return (
    <footer id="connect" className="site-footer">
      <div className="footer-identity">
        <img src="/media/avatar.jpg" alt="" width="640" height="640" loading="lazy" />
        <div>
          <strong>{copy.footer.copyright}</strong>
          <span>{copy.hero.role}</span>
        </div>
      </div>
      <p>{copy.footer.note}</p>
      <nav aria-label={copy.footer.connect}>
        {links.map(([key, href]) => (
          <a key={key} href={href} target="_blank" rel="noreferrer">
            {copy.footer[key]}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </footer>
  );
}
