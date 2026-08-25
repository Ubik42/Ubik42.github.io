# Unreal Engine Stylized World

![图片12.png](%25E5%259B%25BE%25E7%2589%258712.png)

> **Introduction:**
>
>
> This is a project of procedurally generated stylized scenes.
>

> **Features:**
>
>
> I first generated height terrain in Houdini, then import the HDA file into UE, adding stylized materials and scene content.I tweaked the terrain materials in detail to get a stylized effect and optimize the scene display.
>

> **Goal:**
>
>
> This work demonstrates my ability to create the full process of procedural terrain, as well as my ability to tweak UE materials and post-processing.
>

# 1 generate heightfield data

- Generate undulating terrain using noisy data, and then use maskbyfeature nodes to erode and smooth the terrain representation.

![image.png](image%2044.png)

![image.png](image%2045.png)

# 2 scatter model placeholders and visulize the map

![image.png](image%2046.png)

![image.png](image%2047.png)

- Cubes on the map are the placeholders of tree models and stone models.I will use specific models to replace these placeholders in UE.

# 3 Import HDA into UE and set stylized material

### 3.1 Land Material: Micro & Macro

<aside>
💡

The terrain material will add mixed details of grassland, rock, and sand to the terrain.

</aside>

![image.png](image%2048.png)

> Reference:
>
>
> These texture materials come from the environmental assets of UE Market.
>
- The terrain details at different viewing distances will be handled independently based on the view distance attribute.
    - Sample the distant terrain at a lower level to optimize scene performance.
    - Use different noise masks on the grass to achieve a more random and noticeable wind blown grass movement effect when in close proximity.

![image.png](image%2049.png)

### 3.2 Water Material

1. Set the blue background color of the water.
2. Add normal based specular reflection and adjustable transparency properties.
3. Set the refraction effect when the incident light deviates too much from the normal.
4. Increase the roughness effect to create more fluctuation on the water surface.
5. Use the foam map asset to add the foam effect to make the water surface appear white foam.

![image.png](image%2050.png)

### 3.3 Grass Material

<aside>
💡

Utilizing a noise texture to modify vertex data can create the illusion of grass swaying in the wind, enhancing the dynamic feel of the environment.

</aside>

![image.png](image%2051.png)

### 4.5 Post-process effect: sharpren the SceneColor

- Adjust the sharpness of the scene to achieve a more modern and stylized visual effect

![image.png](image%2052.png)

# 4 Edit the scene

### 4.1 Add trees and stones

- In houdini ,I have set up placeholders for four types of trees and four types of stones. Now place specific models at the previously scattered positions and adjust the folia material.

![image.png](image%2053.png)

![image.png](image%2054.png)

<aside>
💡

- Add a pixel depth based blend to the layered material of the leaves, so that the tree materials will be more covered by green when the camera is far away, appearing green, and will show their original **purple and yellow** colors when close. This reflects a sense of change in a stylized open world.
</aside>

![image.png](image%2055.png)

### 4.2 Add some foliage assert

![image.png](image%2056.png)

![image.png](image%2057.png)

### 4.3 Set light and waterplane

![image.png](image%2058.png)

## 4.4 Final scene

![image.png](image%2059.png)
