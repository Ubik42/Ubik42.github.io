const characters = [
  { id: 'moss', name: 'Moss Courier', zh: '外套角色', en: 'Stylized courier' },
  { id: 'aster', name: 'Aster Runner', zh: '运动服角色', en: 'Athletic character' },
  { id: 'cobalt', name: 'Cobalt Sentinel', zh: '人形机器人', en: 'Humanoid robot' },
];
const motions = [
  { id: 'dance', zh: '首段舞蹈 · 12 秒', en: 'Indoor dance · 12 s' },
  { id: 'combat', zh: '正面武术 · 7 秒', en: 'Frontal martial arts · 7 s' },
];
const media = '/media/repositories/animation-aigc-lab';

export function AnimationAigcShowcase({ locale }: { locale: 'zh' | 'en' }) {
  return <section className="animation-aigc-showcase" aria-label={locale === 'zh' ? '三个角色、两种动作' : 'Three characters, two motions'}>
    {characters.map((character) => <section key={character.id}>
      <h3>{character.name} <span>· {character[locale]}</span></h3>
      <div className="animation-aigc-pair">
        {motions.map((motion) => <figure key={motion.id}>
          <video controls playsInline preload="none" poster={`${media}/${character.id}-${motion.id}.webp`} src={`${media}/${character.id}-${motion.id}.mp4`} aria-label={`${character.name} · ${motion[locale]}`} />
          <figcaption>{motion[locale]}</figcaption>
        </figure>)}
      </div>
    </section>)}
  </section>;
}
