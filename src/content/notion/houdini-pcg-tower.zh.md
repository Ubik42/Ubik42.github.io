# Houdini PCG 塔楼

![图片14.png](%25E5%259B%25BE%25E7%2589%258714.png)

> **简介：**
>
>
> 这是一个程序化生成的模型作品。
>

> **功能特点：**
>
>
> 塔楼分为五个部分：墙体、立柱、过渡结构、塔身和塔顶。每个部分独立生成，并设置了一些约束条件，以确保在调整过程中整体效果的正确性。我还生成了合适的 UV 纹理坐标，以确保导出的资源可以直接应用纹理材质。
>

> **目标：**
>
>
> 该作品展示了我在 Houdini 中创建复杂程序化模型的能力，以及我对建模理论的理解。
>

# 1 墙体

### 1.1 通过六边形挤压生成墙体主要形状

![image.png](image%2091.png)

![image.png](image%2092.png)

### 1.2 创建用于从墙体中减除的几何形状，以实现窗户效果

![image.png](image%2093.png)

![image.png](image%2094.png)

![image.png](image%2095.png)

### 1.3 使用 `facet` 节点分割墙体表面，并根据法线顶点数据生成窗户和窗框内容

![image.png](image%2096.png)

![image.png](image%2097.png)

![image.png](image%2098.png)

### 1.4 合并组件并适配 UV

![image.png](image%2099.png)

# 2 立柱

### 2.1 绘制柱子的底部和顶部

![image.png](image%20100.png)

![image.png](image%20101.png)

![image.png](image%20102.png)

![image.png](image%20103.png)

### 2.2 复制基础几何柱体，组装并打包，上下插入组件

![image.png](image%20104.png)

![image.png](image%20105.png)

### 2.3 合并

![image.png](image%20106.png)

# 3 过渡结构

### 3.1 创建垂直几何信息属性，使用 VOP 绘制，并将平面转换为过渡平台

![image.png](image%20107.png)

![image.png](image%20108.png)

![image.png](image%20109.png)

### 3.2 创建栏杆，循环利用栏杆的几何形状，并创建连接栏杆的横杆

![image.png](image%20110.png)

![image.png](image%20111.png)

![image.png](image%20112.png)

![image.png](image%20113.png)

### 3.3 合并

![image.png](image%20114.png)

# 4 塔身

### 4.1 使用 sweep 节点构建带有一些内凹结构的塔身

![image.png](image%20115.png)

![image.png](image%20116.png)

### 4.2 使用 divide 切割平面以获取边缘信息，并使用 `edgegroup_to-curve` 将边缘信息转换为窗框模型

![image.png](image%20117.png)

![image.png](image%20118.png)

### 4.3 调整用于构建内凹结构的曲线柱信息，调整循环生成逻辑，重新采样并清理不必要的线段，获取窗户的生成位置

![image.png](image%20119.png)

![image.png](image%20120.png)

### 4.4 分割塔身并获取面片的中心点，以生成用于挖空的几何体和窗户

![image.png](image%20121.png)

![image.png](image%20122.png)

![image.png](image%20123.png)

### 4.5 使用 VOP 绘制装饰面板，并根据从塔身获取的塔身分割信息生成屋檐

![image.png](image%20124.png)

![image.png](image%20125.png)

![image.png](image%20126.png)

### 4.6 合并

![image.png](image%20127.png)

# 5 塔顶

### 5.1 使用 VOP 绘制分层塔顶楼层

![image.png](image%20128.png)

![image.png](image%20129.png)

![image.png](image%20130.png)

### 5.2 重新采样楼层并使用多路径生成边缘形状，用于复制基础几何体并形成围栏

![image.png](image%20131.png)

![image.png](image%20132.png)

![image.png](image%20133.png)

## 5.3 使用类似的 VOP 逻辑，绘制塔顶建筑

![image.png](image%20134.png)

![image.png](image%20135.png)

![image.png](image%20136.png)

![image.png](image%20137.png)

![image.png](image%20138.png)

## 5.4 使用 `Subdivide` 绘制镂空结构

![image.png](image%20139.png)

![image.png](image%20140.png)

![image.png](image%20141.png)

## 5.5 合并

![image.png](image%20142.png)

# 6 所有参数

![1 基础](image%20143.png)

1 基础

![2 主体](image%20144.png)

2 主体

![3 顶部](image%20145.png)

3 顶部
