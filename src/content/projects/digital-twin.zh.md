# Industrial Digital Twin

这是实习期间参与的工业 3D 可视化原型。项目基于开源 icegl / TresJS 工程继续开发，我的可核实工作集中在工业模型与机械交互，而不是仓库中全部城市、地球和热力图演示。

![工业数字孪生项目画面](/media/projects/digital-twin.png)

## 我的实现范围

- 新增 DigitalTwin 页面、配置与工业场景入口。
- 导入 `UEmodel03.fbx`、`model.fbx`、`model01.FBX` 与 `scene.fbx` 等 FBX 资产。
- 调整 Three.js / TresJS 场景中的模型变换和交互。
- 扩展 TransformControls 页面，用参数控制机械模型与关节旋转。
- 使用 Tweakpane 与 Element Plus 组织显示参数和工业控制按钮。

## 技术结构

前端使用 Vue 3、TresJS 与 Three.js 组织 Web 3D 场景。模型载入后通过 TransformControls 和参数面板改变位置、旋转与关节状态，使工业资产可以直接在浏览器中检查和演示。

## 贡献边界

仓库来自一个功能丰富的开源可视化框架，大量通用 3D 城市、地球和数据可视化示例由上游提供。这里展示的是我在实习项目中新增和修改的工业模型导入与控制部分；不把上游已有功能计为个人独立开发成果。
