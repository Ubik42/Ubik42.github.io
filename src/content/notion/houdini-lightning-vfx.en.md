# Houdini Lightning VFX

![图片3.png](%25E5%259B%25BE%25E7%2589%25873.png)

> **Introduction:**
>
>
> This is an independent houdini effect.
>

> **Features:**
>
>
> The blob will fire lightning bolts at the surrounding geometry, while the walls will begin to fall away, preferentially shattering where they are struck by the lightning bolts. In the project, a large number of DOP network and attributiVOP nodes were used to improve the lightning effects.
>

> **Goal:**
>
>
> This work demonstrates my ability to use Houdini to create comprehensive effects, and my proficiency in using advanced Houdini features such as VOP and DOP.
>

# 1 Generate lightning

## 1.1 Create a polyglun sphere with normals to determine the source and target of lightning emissions

- Sprinkle dots on the surface of the sphere.
- Use projection nodes to project these scattered points in the normal direction onto nearby scenes.
- Exclude points that have not been projected and points that are greater than the specified distance separately.

<aside>
💡

So the remaining points are the target strike positions of lightning.

</aside>

![image.png](image%20155.png)

## 1.2 Construct lightning forms

- Connect the line between the target point and the source point.
- Enter the VOP module and add appropriate noise based on the curve U direction.
- Extract the offset of the curve, use time drive on the X component, and obtain dynamic noise effect.

![image.png](image%20156.png)

![image.png](image%20157.png)

## 1.3 Improve lightning morphology

- Map the numbering of each line to a random value of 0-1 and add it as the Y component of the offset channe **`So that each lightning bolt looks different in form.`**
- Similarly, the line numbers are mapped to different random values, and appropriate speed multipliers are mapped to multiply the offset values driven by the current usage time. **So that the speed and frequency of each lightning bolt are different.**
- Based on the curve U attribute, map slope sliders with both ends approaching 0, which to some extent suppresses the dynamic effect of current at both ends.
- Resample to achieve higher line density, add permutation to enrich lightning details.

![image.png](image%20158.png)

![image.png](image%20159.png)

## 1.4 Simulate lightning appearance by emitting particles from ground sources

- Emit particles from the ground contact point, input them into the particle dynamics node, and adjust the particle's life and other attributes.
- Map the color gradient of particles.
- Based on color grayscale values, extract lines at the root and randomly retain some points for emission into the scene.
- Merge with the original point to form a line.

![image.png](image%20160.png)

## 1.5 Merge various modules and add colors to obtain lightning

![image.png](image%20161.png)

![image.png](image%20162.png)

# 2 Set up the interaction between lightning and the scene

## 2.1 electric current

- Set the beginning and end of the main current curve in the U direction to white as a mask and remove the points in the black area In this way, the contact area between lightning and objects will always appear white.
- Add a certain amount of noise to the normal direction in VOP and normalize it, so that the length of the secondary current is uniformly 1.
- Set VOP parameters to control the shape and distribution area of lightning
- Package and merge to complete the current style.
- Set up current generation logic to achieve interval jump.

![image.png](image%20163.png)

- Based on the current curve U attribute mapping color, and taking the modulus of the current time value to drive the color shift change. Obtain a cyclic streamer effect.

    ![image.png](image%20164.png)


## 2.2 Set up broken geometry

- Pre cutting rigid bodies using woronoifracture nodes.
- Configure the grouping density in the rigid body cluster.
- Configure the basic rigid body framework in the VOP dynamics module.

![image.png](image%20165.png)

- Set the area of current contact as object understanding activation, and when the current hits the object, the corresponding rigid body group will detach.
- After merging, the effect is as shown in the cover.

# 3 Overview

![image.png](image%20166.png)
