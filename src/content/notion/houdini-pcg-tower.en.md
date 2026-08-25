# Houdini PCG Tower

![图片14.png](%25E5%259B%25BE%25E7%2589%258714.png)

> **Introduction:**
>
>
> This is a work of procedurally generated models.
>

> **Features:**
>
>
> The tower is divided into five parts: walls, columns, transitions, the main body, and the top. Each part is generated independently, with some constraints set to ensure the overall effect is correct during adjustments.I also generated appropriate UV texture coordinates to ensure that the exported assets can directly have texture materials applied.
>

> **Goal:**
>
>
> This work exemplifies my ability to use Houdini to create complicated procedural models, as well as my understanding of modeling theory.
>

# 1 Wall

### 1.1 Produce the main shape of the wall through hexagonal extrusion

![image.png](image%2091.png)

![image.png](image%2092.png)

### 1.2 Create geometric shapes for subtracting from walls to achieve window effects

![image.png](image%2093.png)

![image.png](image%2094.png)

![image.png](image%2095.png)

### 1.3 Split the wall surface with `facet` nodes and generate window and frame content based on normal vertex data

![image.png](image%2096.png)

![image.png](image%2097.png)

![image.png](image%2098.png)

### 1.4 Merge components and adapt to UV

![image.png](image%2099.png)

# 2 Pillar

### 2.1 Draw the bottom and top of the column

![image.png](image%20100.png)

![image.png](image%20101.png)

![image.png](image%20102.png)

![image.png](image%20103.png)

### 2.2 Copy the basic geometric column, assemble and package it, and insert components up and down

![image.png](image%20104.png)

![image.png](image%20105.png)

### 2.3 Merge

![image.png](image%20106.png)

# 3 Transitional structure

### 3.1 Create vertical geometric information attributes, draw using VOP, and convert the plane into a transition platform

![image.png](image%20107.png)

![image.png](image%20108.png)

![image.png](image%20109.png)

### 3.2 Create railings, recycle the geometric shape of the railings, and create railings that link the railings

![image.png](image%20110.png)

![image.png](image%20111.png)

![image.png](image%20112.png)

![image.png](image%20113.png)

### 3.3 Merge

![image.png](image%20114.png)

# 4 tower body

### 4.1 The sweep node constructs a tower body with some indentations

![image.png](image%20115.png)

![image.png](image%20116.png)

### 4.2 Use divide to cut the plane to obtain edge information, and use `edgegroup_to-curve` to convert the edge information into a window frame model

![image.png](image%20117.png)

![image.png](image%20118.png)

### 4.3 Adjust the curved column information used to construct the depression before adjustment, adjust the loop generation logic, resample and clean up unnecessary segments, and obtain the generation position of the window

![image.png](image%20119.png)

![image.png](image%20120.png)

### 4.4 Split the tower body and obtain the center point of the patch to generate the geometry and windows for excavation

![image.png](image%20121.png)

![image.png](image%20122.png)

![image.png](image%20123.png)

### 4.5 VOP draws decorative panels and generates eaves based on tower body splitting information obtained from tower body

![image.png](image%20124.png)

![image.png](image%20125.png)

![image.png](image%20126.png)

### 4.6 Merge

![image.png](image%20127.png)

# 5 top

### 5.1 VOP drawing layered tower top floor

![image.png](image%20128.png)

![image.png](image%20129.png)

![image.png](image%20130.png)

### 5.2 Resample the floor and use multi-path to generate edge shapes, which are used to replicate the basic geometry and form a fence

![image.png](image%20131.png)

![image.png](image%20132.png)

![image.png](image%20133.png)

## 5.3 Using similar VOP logic, draw the tower top building

![image.png](image%20134.png)

![image.png](image%20135.png)

![image.png](image%20136.png)

![image.png](image%20137.png)

![image.png](image%20138.png)

## 5.4 Using `Subdivide`  to Draw Hollow Structures

![image.png](image%20139.png)

![image.png](image%20140.png)

![image.png](image%20141.png)

## 5.5 merge

![image.png](image%20142.png)

# 6 all parameters

![1 base](image%20143.png)

1 base

![2 body](image%20144.png)

2 body

![3 top](image%20145.png)

3 top
