# Unity SDF Shader

![图片13.png](%25E5%259B%25BE%25E7%2589%258713.png)

> **Introduction:**
>
>
> This is a shader that uses signed distance function (SDF) to render volume clouds in Unity.
>

> **Features:**
>
>
> This shader contains multiple customizable attributes that allow users to adjust the appearance of clouds, such as noise type, noise scaling, and absorption.This shader uses Ray Intersection technology for intersection detection at the GPU level, using a density-based algorithm to render the clouds.
>

> **Goal:**
>
>
> This work demonstrates my familiarity with computer graphics and HLSL language.
>

# 0.SDF principle

- The signed distance function (SDF) is a mathematical method used to describe shapes. It provides a distance value for each point, which represents the shortest distance from that point to the surface of the shape. Specifically:
    - If the distance value is negative, it indicates that the point is inside the shape.
    - If the distance value is positive, it indicates that the point is outside the shape.
    - If the distance value is zero, it means that the point is located exactly on the surface of the shape.
- By combining multiple SDFs, complex shapes can be created. This method is very useful in computer graphics, especially when generating volume effects such as clouds, smoke, etc., as it allows for dynamic shape changes without the need for re modeling.

# **1. Properties Definition**

The shader begins with a section that defines adjustable properties:

- **_SDF**: A 3D texture representing the signed distance field for cloud shapes.
- **_Noise**: A 3D texture used to add noise effects to the cloud density.
- **_Absorption**: Controls how much light is absorbed by the clouds.
- **_AmbientDensity** and **_AmbientIntensity**: Control ambient light effects on the clouds.
- **_LightIntensity**: Affects the overall brightness of the clouds.

![image.png](image%2060.png)

# **2. Vertex Shader (`vert`)**

The Vertex Shader is responsible for processing vertex data:

- **Input**: Receives vertex positions and UV coordinates.
- **Output**: Transforms vertex positions into world space and clip space, preparing them for use in the fragment shader.

![image.png](image%2061.png)

# **3. SDF Fusion Functions**

These functions define geometric shapes and how to combine them:

- **`sdSphere()`** defines spherical shapes in the SDF.
- **`sdBox()`**defines box shapes in the SDF.
- **`opSmoothUnion()`**combines two shapes smoothly.
- **`opSmoothSubtraction()`a**llows for complex shape creation by subtracting one shape from another.

![image.png](image%2062.png)

# **4. Cloud Density Calculation**

- **`cloud()`**calculates cloud density based on position and applies noise to simulate cloud appearance.

![image.png](image%2063.png)

# **5. Main Fragment Shader (`frag`)**

This is the core part of the rendering process:

- Uses ray marching techniques to sample points within the volumetric clouds.
- Computes light scattering effects based on density and optical depth.
- Combines ambient light with scattered light to produce realistic cloud colors.

![image.png](image%2064.png)

![image.png](image%2065.png)

# **6. Ray Intersection Detection**

- **`intersectAABB()`**determines whether rays intersect with the cloud volume.

![image.png](image%2066.png)

<aside>
💡

Some other Auxiliary ****functions assist with lighting calculations and color mapping:

</aside>

# **7 Summary**

- The shader combines several advanced techniques:
    - **SDFs for Shape Definition**:Uses signed distance functions to dynamically define complex cloud shapes.
    - **Ray Marching for Volume Rendering**:Implements ray marching to simulate how light interacts with particles within clouds, allowing for realistic volumetric rendering.
    - **Customizable Parameters**:Provides properties that can be adjusted in Unity's editor for fine-tuning cloud appearance and behavior.
    - **Light Scattering Model**:Incorporates a scattering model that accounts for both ambient light and directional light sources, enhancing realism in rendering.
