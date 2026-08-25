import clusterEn from '../content/notion/houdini-interactive-cluster.en.md?raw';
import clusterZh from '../content/notion/houdini-interactive-cluster.zh.md?raw';
import lightningEn from '../content/notion/houdini-lightning-vfx.en.md?raw';
import lightningZh from '../content/notion/houdini-lightning-vfx.zh.md?raw';
import towerEn from '../content/notion/houdini-pcg-tower.en.md?raw';
import towerZh from '../content/notion/houdini-pcg-tower.zh.md?raw';
import mayaEn from '../content/notion/maya-plugin.en.md?raw';
import mayaZh from '../content/notion/maya-plugin.zh.md?raw';
import riggingEn from '../content/notion/rigging-animation.en.md?raw';
import riggingZh from '../content/notion/rigging-animation.zh.md?raw';
import roadEn from '../content/notion/stylized-road-material.en.md?raw';
import roadZh from '../content/notion/stylized-road-material.zh.md?raw';
import sdfEn from '../content/notion/unity-sdf-shader.en.md?raw';
import sdfZh from '../content/notion/unity-sdf-shader.zh.md?raw';
import worldEn from '../content/notion/unreal-stylized-world.en.md?raw';
import worldZh from '../content/notion/unreal-stylized-world.zh.md?raw';
import vfxEn from '../content/notion/unreal-engine-vfx.en.md?raw';
import vfxZh from '../content/notion/unreal-engine-vfx.zh.md?raw';

import type { Locale } from './content';

export const visualWorkStories: Record<string, Record<Locale, string>> = {
  'unreal-stylized-world': { zh: worldZh, en: worldEn },
  'maya-plugin': { zh: mayaZh, en: mayaEn },
  'stylized-road-material': { zh: roadZh, en: roadEn },
  'rigging-animation': { zh: riggingZh, en: riggingEn },
  'unity-sdf-shader': { zh: sdfZh, en: sdfEn },
  'houdini-lightning': { zh: lightningZh, en: lightningEn },
  'houdini-cluster': { zh: clusterZh, en: clusterEn },
  'unreal-vfx': { zh: vfxZh, en: vfxEn },
  'houdini-tower': { zh: towerZh, en: towerEn },
};
