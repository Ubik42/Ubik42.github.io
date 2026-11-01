import type { RepositoryWork } from './repositoryWorks';

const vulkanStory = `# Vulkan 渲染通道与 Bloom 优化实验

[交互对照与逐轮数据](/experiments/renderpass/index.html) · [下载源码与演示](/downloads/RenderPassLab-source.zip)

@[video: 原生 Vulkan 镜头与同轨迹 Bloom 分屏对照；离线采集](/experiments/renderpass/media/renderpass-demo.mp4)

## 渲染链与资源生命周期

以 C++ / Vulkan 实现程序化 HDR 场景、雾、调色和色调映射，并比较独立 Render Pass、Subpass 输入附件与单 Draw 内联合成。场景使用 GGX 直接光、解析环境和局部补光，四子像素采样改善边缘。GPU 时间戳、逐帧 CSV、图像差分和 RenderDoc 捕获共同记录各条路径的结果。

逐像素后处理可在局部附件或单次着色中衔接；Bloom 的邻域采样需要访问周围像素，采用采样图像与全局依赖。分离卷积还需将原始 HDR 保留到最终合成，不能提前丢弃其内容。

## 同一高斯核的两种实现

参考路径使用 9×9 高斯核，采样间隔 3 像素；优化路径分为水平 9 tap 与垂直 9 tap。阈值、权重、增益和色调映射保持一致。含原图合成，每像素纹理读取由 82 次变为 19 次，代价是增加一次 Pass 和一张全分辨率 RGBA16F 中间图。

| 当前画面的测量 | 二维核 | 分离核 |
| --- | --- | --- |
| 整链 GPU 批次 P50 中位数 | 3.026 ms | 2.930 ms |
| 整链 Render Pass | 4 | 5 |
| Bloom 纹理读取 / 像素 | 82 | 19 |

Windows RTX 4080，1920×1080，六轮 ABBAAB；每轮预热 150 帧、采样 300 帧。计时包含场景与后处理，排除 CPU 等待、读回和呈现。该条件下整链时间下降约 3.18%，最大通道误差 1/255；原始逐轮 P50/P95 保留在交互页。当前没有手机 GPU 的性能结论。

## HDR 格式与精度

固定分离卷积路径，对比 RGBA32F 与 RGBA16F 的四张 HDR 中间图。1920×1080 下，驱动返回的分配需求为135→67.5 MiB；六轮交错测量的整链批次 P50 中位数为3.1483→3.0588 ms，最终图像最大通道差1/255。存储需求减半，整链时间变化约2.84%；场景着色仍占主要计算。alpha保留雾计算所需距离，避免直接换成三通道格式而丢失数据。交互页提供两种格式与差分切换。

## 实现与展示范围

本人实现 Vulkan 资源与管线、Shader、采集脚本及对照界面。RenderDoc 捕获确认分离路径为五个 Pass、五次 Draw。中间图在1080p的逻辑大小约15.82 MiB，未将其等同于实测DRAM流量。

视频由真实程序逐帧导出后合成，播放帧率不代表实时运行帧率。场景为解析渲染实验，环境光未实现完整物理全局光照。`;

const courtyardStory = `# UE 场景提交与移动预览阴影优化

[阴影交互对照](/experiments/courtyard/index.html) · [下载 UE 工程与脚本](/downloads/MobileSceneLab-source.zip)

@[video: ES3.1 独立运行镜头与同轨迹阴影对照；固定时间步离线采集](/experiments/courtyard/media/courtyard-demo.mp4)

## 可复现的场景与对照

用 Editor Python 生成石墙、拱门、侧廊、铺地与展示台，搭配本人制作的藤蔓。场景有958个几何实例；两份同布局关卡分别使用独立组件和10组 ISM。相机、曝光、材质与光照保持一致，脚本保存运行参数、日志、逐帧CSV和截图。

## 实例组织与提交成本

桌面 D3D12 六轮对照中，渲染线程批次 P50 中位数从1.768降至1.569 ms。总 RHI DrawCall 约151→74，主要差值来自遮挡查询；Basepass与阴影绘制数保持一致，GPU时间没有改善。通过分阶段计数与D3D12源码核对，避免将间接绘制的计数口径变化解释成减面收益。

## 按场景范围配置阴影预算

只读审计取得相机与几何包围盒，固定视点的最大场景深度约56米，方向光默认动态阴影距离400米。以相同移动预览关卡比较全范围配置与120米覆盖的庭院预算，同时将级联上限4→2、分辨率上限2048→1024。

| 六轮批次 P50 中位数 | 全范围 | 庭院预算 |
| --- | --- | --- |
| 整帧 GPU | 1.154 ms | 1.080 ms |
| ShadowDepths | 0.094 ms | 0.048 ms |
| ShadowProjection | 0.031 ms | 0.031 ms |
| 阴影 DrawCall | 14 | 10 |

运行环境为Windows RTX 4080、D3D11 ES3.1移动预览、1600×900。每轮取第300–779帧，截图不进入统计。此结果反映三个设置的联合取舍，未分离各参数的独立收益。展台与植被阴影边缘存在可见变化，交互页保留全尺寸分屏、差分与局部放大。

## 移动路径与工程处理

独立移动关卡使用指定环境Cubemap，修复桌面实时天空捕获在该路径下的暗部与反射缺失；显式保存ISM材质Usage，避免运行时回退材质。关卡序列驱动相同镜头，分别采集两种阴影配置。

这些是桌面GPU上的移动Shader路径验证，尚未覆盖Android打包、手机热降频或移动GPU带宽。场景布局与藤蔓为自有制作，基础几何引用UE引擎资源，未使用商业游戏提取资产。`;

export const renderOptimizationWorks: RepositoryWork[] = [
  { id:'vulkan-renderpass-lab',title:'Vulkan 渲染通道与 Bloom 优化实验',category:'engine-games',categoryLabel:{zh:'原生渲染与 GPU 优化',en:'Native rendering and GPU optimization'},summary:{zh:'实现 Render Pass、Subpass 与内联合成，比较同核 Bloom 分离卷积的 GPU 成本、图像误差和资源代价。',en:'Vulkan pass organization and same-kernel separable bloom, with GPU timing and image comparisons.'},cover:'/experiments/renderpass/media/separable.png',tags:['C++','Vulkan','Shader','RenderDoc','GPU 时间戳'],story:{zh:vulkanStory,en:vulkanStory}},
  { id:'ue-mobile-scene-lab',title:'UE 场景提交与移动预览阴影优化',category:'engine-games',categoryLabel:{zh:'场景渲染与性能取舍',en:'Scene rendering and performance tradeoffs'},summary:{zh:'用同布局庭院对照独立组件与 ISM，按场景范围调整移动预览阴影预算，记录阶段耗时与局部画质变化。',en:'A reproducible courtyard for instancing, submission cost and mobile-preview shadow budget comparisons.'},cover:'/experiments/courtyard/media/budget.png',tags:['Unreal Engine','ISM','CSM','ES3.1','Python'],story:{zh:courtyardStory,en:courtyardStory}},
];
