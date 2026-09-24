import type { RepositoryWork } from './repositoryWorks';

export const pcgWorkbench: RepositoryWork = {
  id: 'pcg-workbench',
  title: 'UE 程序化工具集 · PCG Workbench',
  category: 'general-ta',
  categoryLabel: { zh: '程序化建模与引擎工具', en: 'Procedural modeling and engine tools' },
  summary: {
    zh: '在 Unreal 中用参数和样条生成房屋、城墙、阶梯、地形与植被，并实现贴面藤蔓和交互水波。七项效果共用可编辑工程与自动录制流程。',
    en: 'Seven editable Unreal demonstrations: parametric houses, spline walls and stairs, terrain shaping, vegetation scattering, surface-guided vines, and interactive water waves.',
  },
  cover: '/media/repositories/pcg-workbench/hero.webp',
  tags: ['Unreal Engine 5.8', 'C++', '程序化网格', 'Spline', '数值模拟'],
  story: {
    zh: `# UE 程序化工具集

@[video: 七项工具演示：房屋、城墙、阶梯、地形、散布、水波与藤蔓](/media/repositories/pcg-workbench/showcase.mp4)

67 秒演示来自 UE 编辑器的实际渲染，包含生成结果、参数切换和模拟过程。画面按固定时间步采集后剪辑，字幕用于标明操作，不作为实时性能测试。

## 参数驱动的场景构件

- 房屋：宽度、进深、层数与屋顶高度共同驱动墙体、木梁、门窗、窗台、瓦顶和烟囱，改变层数时重新排列立面构件。
- 城墙：沿可编辑样条排布石块、压顶和垛口，路径、高度与分段数分别控制走向、轮廓和块面密度。
- 阶梯：按曲线路径生成等高递增的踏步，支持改变总高、宽度和踏步数量。
- 地形：在独立高度场上叠加多个平滑衰减的塑形区域，正值抬起丘陵，负值压出凹地。
- 散布：在控制点周围生成带随机尺度的树形几何，通过最小间距约束分布；固定种子可以重现同一布局。

![参数房屋、曲线城墙与阶梯、地形塑形、植被散布和水波的实际画面](/media/repositories/pcg-workbench/gallery.webp)

## 贴面藤蔓

藤蔓从多个起点生长，吸引点决定分枝方向，再沿指定方向投影到目标表面。枝条按后续分枝量调整粗细，叶片使用独立生成的五裂网格。种子、叶片密度和尺寸可分别调整，结果可以保存到关卡或烘焙成静态网格。

![拱门石墙上的程序化藤蔓](/media/repositories/pcg-workbench/vines.webp)

## 水波与工具实现

水面使用 CPU 二维阻尼波动方程求解高度与速度，时间步根据网格间距限制。局部脉冲产生波纹，圆柱障碍和池壁形成反射；顶点位置、法线与颜色随求解结果更新。

工具使用 C++ 生成程序化网格，通过 Unreal 原生参数面板和样条控制点编辑。Editor Python 负责建立展示场景、切换参数、采集画面与检查保存结果。验证覆盖固定种子重复生成、参数改变后的几何差异、水波持续演化，以及关卡重新加载后的网格一致性。

## 实现范围

当前版本侧重可编辑的生成效果。水波采用 CPU 求解，地形为独立网格，散布由样条控制点定义范围；尚未实现 GPU 浅水求解、Landscape Edit Layer、视口绘制笔刷和房屋相交裁决。

参考 [KisaragiTomi / PCGPlugins](https://github.com/KisaragiTomi/PCGPlugins) 的工具思路，生成算法、网格构建与展示流程在本工程中独立实现。`,
    en: `# PCG Workbench

@[video: Seven Unreal tools: houses, walls, stairs, terrain, scattering, waves, and vines](/media/repositories/pcg-workbench/showcase.mp4)

The 67-second reel uses actual Unreal Editor renders, captured at fixed steps and edited with parameter captions. It is not a real-time performance benchmark.

## Editable procedural geometry

- Houses regenerate walls, timber beams, windows, doors, tiled roofs, and chimneys from dimensions, floor count, and roof height.
- Walls distribute masonry and battlements along editable splines; stairs create progressively elevated treads along a curved path.
- Terrain combines smooth radial height influences and noise on an independent mesh, supporting both hills and depressions.
- Vegetation scattering uses control-point regions, minimum spacing, variable scale, and deterministic seeds.

![Six procedural tools rendered in Unreal](/media/repositories/pcg-workbench/gallery.webp)

## Surface-guided vines and interactive waves

Vines grow from multiple roots toward attraction points and project onto selected surfaces. Descendant branches determine stem thickness; independently generated lobed leaves expose density and size controls. Results persist in the level and can be baked into static meshes.

![Generated vines on an arched stone wall](/media/repositories/pcg-workbench/vines.webp)

Water uses a CPU damped two-dimensional wave equation with a grid-dependent stable time step. Local impulses propagate and reflect from a circular obstacle and pool boundaries. Positions, normals, and vertex colors update with the simulation.

C++ owns geometry and simulation; Editor Python builds scenes, changes parameters, captures frames, and checks saved geometry. Validation covers deterministic generation, parameter sensitivity, wave evolution, and geometry consistency after reopening the level.

## Scope and reference

This implementation provides independent procedural effects. GPU shallow-water solving, Landscape Edit Layers, viewport point painting, and house-intersection resolution are not implemented.

Inspired by the tool concepts in [KisaragiTomi / PCGPlugins](https://github.com/KisaragiTomi/PCGPlugins). Generation algorithms, mesh construction, and the showcase workflow were implemented independently.`,
  },
};
