# Maya 插件

![图片10.png](%25E5%259B%25BE%25E7%2589%258710.png)

> **简介：**
>
>
> 这是一个涵盖9个不同主题的Maya综合插件，提供了大量功能和便捷操作。
>

> **特性：**
>
>
> 该插件采用大规模可扩展架构开发，前后端分离，引入面向对象概念，合理架构功能类和方法。
>

> **目标：**
>
>
> 本作品展示了我扎实的工程编程基础、DCC工具开发能力以及交互设计技能。
>

# 1 架构

### 1.1 项目结构

![image.png](image.png)

- 根目录
    - `core`—后端类，脚本文件根据功能不同进行划分。
        - `fileUtils.py`
        - `controlUtils.py`
        - `jointUtils.py`
        - `……`
    - `pyside`—Pyside代码库。
    - `res`—用于存储材质文件及相应调用代码的文件夹。
    - `Tools`—前端功能，其中ToolMain是主菜单入口，其他每个界面代表相应功能的一个选项卡。所有选项卡注入主菜单后形成用户所见的界面。
        - `ToolMain.py`
        - `Rig_Tool_main.py`
        - `Joint_Tool_main.py`
        - `……`

### 1.2 程序模式

- 一些相关功能被聚合到core/XXXUtil.py中，其中大多数与骨骼相关的操作都放在`jointUtils.py`脚本中。XXXUtil本身是一个继承自object的类，提供各种操作方法。某些方法被标记为@staticmethod以成为静态方法。
- 常见模式是前端`XXXTool.py`定义界面、绑定信号，并调用后端`XXXUtil.py`中实现的相应功能。

![                     `Constraint_Tool_main.py`的结构](image%201.png)

                     `Constraint_Tool_main.py`的结构

- 一些后端工具可能包含内部测试接口类，例如Joint_Resampling，但这些类不会被前端引用。有时，后端工具也会相互调用功能，从而产生包含通用逻辑的辅助后端工具，例如hierarchyUtils。一些简单的功能也内置在前端中。

![image.png](image%202.png)

# 3 概述

## 3.0 主窗口

- 插件可以记住**主题**、窗口的大小和位置，以便重新打开时恢复。
- 插件采用灵活布局，可调整字体大小。
- 将指针悬停在按钮上可获取提示信息。

![image.png](image%203.png)

> **参考：**
>
>
> 主题qss文件来自 [https://github.com/GTRONICK/QSS/blob/master](https://github.com/GTRONICK/QSS/blob/master)
>

## 3.1 属性

![image.png](image%204.png)

- 您可以在此处编辑通道盒和对象属性。

## 3.2 绑定

![image.png](image%205.png)

- 您可以在此处生成并创建所需的IK和FK样式，用于统一绑定。
- 一些对绑定有用的实用功能也放置在此处。并非所有功能都已完全实现。

## 3.3 约束

![image.png](image%206.png)

- 您可以在此处设置两个对象的空间属性，方便地为**一对多或多对一约束**关系添加各种类型的约束。

## 3.4 骨骼

![image.png](image%207.png)

- 这里汇集了绑定技术美术在处理骨骼时可能需要用到的所有功能。并非所有功能都已完全实现。

## 3.5 控制器

![image.png](image%208.png)

- 您可以在此处编辑控制器的形状、大小和旋转，以所需方式显示。您还可以上传新形状作为控制器，或使用镜像和替换功能进行快速编辑。

> **参考：**
>
>
> 此部分的灵感来自： https://gitee.com/lush_ma/controls
>

## 3.6 命名

![image.png](image%209.png)

- 这里提供了命名和重命名相关功能，用户有三种不同的命名范围可供选择。

## 3.7 连接

![image.png](image%2010.png)

- 您可以在此处快速设置属性之间的连接和驱动关系。

## 3.8 工程

![image.png](image%2011.png)

- 您可以在此处执行一些与文件和工程相关的常见操作。

> 骨骼模板来自著名的Maya插件`AdvancedSkeleteon`
>

## 3.9 动画

![image.png](image%2012.png)

- 这里提供了一些基础动画功能，允许用户在使用曲线图编辑器时精确修改曲线和点的位置，或以JSON格式导出和导入动画数据。
