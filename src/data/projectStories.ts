import digitalTwinEn from '../content/projects/digital-twin.en.md?raw';
import digitalTwinZh from '../content/projects/digital-twin.zh.md?raw';
import fathomEn from '../content/projects/fathom.en.md?raw';
import fathomZh from '../content/projects/fathom.zh.md?raw';
import houseOfVampiresEn from '../content/projects/house-of-vampires.en.md?raw';
import houseOfVampiresZh from '../content/projects/house-of-vampires.zh.md?raw';
import retroArcadeEn from '../content/projects/retro-arcade.en.md?raw';
import retroArcadeZh from '../content/projects/retro-arcade.zh.md?raw';
import throughOtherEyesEn from '../content/projects/through-other-eyes.en.md?raw';
import throughOtherEyesZh from '../content/projects/through-other-eyes.zh.md?raw';
import type { Locale } from './content';

export const projectStories: Record<string, Record<Locale, string>> = {
  fathom: { zh: fathomZh, en: fathomEn },
  'house-of-vampires': { zh: houseOfVampiresZh, en: houseOfVampiresEn },
  'through-other-eyes': { zh: throughOtherEyesZh, en: throughOtherEyesEn },
  'retro-arcade': { zh: retroArcadeZh, en: retroArcadeEn },
  'digital-twin': { zh: digitalTwinZh, en: digitalTwinEn },
};
