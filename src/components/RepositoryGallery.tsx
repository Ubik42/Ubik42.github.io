import { localize, repositories } from '../data/showcase';
import { useLanguage } from '../i18n/LanguageContext';

export function RepositoryGallery() {
  const { locale } = useLanguage();
  const title = locale === 'zh' ? '公开仓库与展示层' : 'Public repositories & presentation layers';
  return (
    <section id="repositories" className="repository-section" aria-labelledby="repository-title">
      <div className="repository-lead"><span className="eyebrow">GitHub / source</span><h2 id="repository-title">{title}</h2><p>{locale === 'zh' ? '核心工程、个人主页、简历和过往项目共同组成一条可追溯的公开证据链。' : 'Core engineering, profile, resume, and earlier work form one traceable public evidence trail.'}</p></div>
      <div className="repository-grid">
        {repositories.map((repo, index) => <a className={repo.featured ? 'repo-card is-featured' : 'repo-card'} href={repo.href} target="_blank" rel="noreferrer" key={repo.name}><span className="repo-index">0{index + 1}</span><small>{localize(repo.role, locale)}</small><h3>{repo.name}</h3><p>{localize(repo.description, locale)}</p><ul>{repo.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><b aria-hidden="true">↗</b></a>)}
      </div>
    </section>
  );
}
