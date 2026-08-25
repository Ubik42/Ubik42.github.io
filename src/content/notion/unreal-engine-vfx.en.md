# Unreal Engine VFX

![图片11.png](%25E5%259B%25BE%25E7%2589%258711.png)

> **Introduction:**
>
>
> This is a Chinese ink and wash style combat effect made with Unreal Engine.
>

> **Features:**
>
>
> This work was inspired by some Chinese ink and wash style digital arts. I found that by setting up explosion effects and textures in Niagara, I could create such an effect only using universal resources.I comprehensively utilized various subsystems required for creating special effects in UE, finely adjusting the artistic presentation effects.
>

> **Goal:**
>
>
> This work demonstrates my ability to synthesize the different subsystems of the UE engine, as well as my personal aesthetic understanding.
>

# 1 Mesh

- I used UE modeling tools to create some simple static mesh objects.
    - Some models representing curved motion trail.
    - The gravel model required for seismic effect.

![image.png](image%2013.png)

> **Reference:**
>
>
> The character model with animations was bought from the UE Marketplace.
>

# 2 Material

### 2.1 Motion trail material

- A white triangle with blurred wake and dissolution effect can be used to represent the motion trail.
- Use strength parameters to control the strength of dissolution effect.

    ![image.png](image%2014.png)

- Use offset and mask settings to obtain a white material with blurred tail.

    ![image.png](image%2015.png)

    ![image.png](image%2016.png)

    ![image.png](image%2017.png)


### 2.2 Fluctuating material

- Use radius based vectors as a cheap, sample noise maps to obtain a fountain like perturbation effect.

    ![image.png](image%2018.png)

- Attach this perturbation effect to a crack map to create an unstable crack effect.

    ![image.png](image%2019.png)

- **Final Effect:**

    ![PixPin_2024-11-13_18-17-55.gif](PixPin_2024-11-13_18-17-55.gif)


## 2.3 Bubble refraction effect

- Use the center diffusion wave sampling basic map to obtain the surface halo effect.

![image.png](image%2020.png)

- Post process the screen position of the vertices so that the object wrapped in the material has a random offset when viewed from the outside. This offset is related to the normal, and the more edges there are, the greater the fluctuation is.

![image.png](image%2021.png)

- Mix the edge mask, blur displacement effect, and basic texture representation based on the screen position.

![image.png](image%2022.png)

- **Final Effect:**

![image.png](image%2023.png)

# 3 Niagara-Sword trail

- Generate blade geometry with attached materials using particle system.

![image.png](image%2024.png)

![image.png](image%2025.png)

- Similarly, generate sword light effects for other materials and overlay multiple knife light effects.
- Use the idea of creating explosion effects to create particles with different color levels, reflecting a sense of freedom, and synthesizing curved blade light.
- Blade Light Effect 2 follows the same approach as Blade Light Effect 1, using black and white to enhance the ink feel, and adding a little glowing blue to enhance the special effects expression.
- Add more black in the latter half of the special effects path to create a feeling of ink diffusion.
- Add a set of explosion effects and black particles (simulated ink) drifting backwards at the end of the path to enhance the impact force of the straight line. Finally, a straight blade light is obtained.

![image.png](image%2026.png)

![image.png](image%2027.png)

![image.png](image%2028.png)

- Add a glowing weapon model based on the curved blade light, and add some throwing effects in sequence according to the special effects path. The final result is an enhanced knife light effect.

![image.png](image%2029.png)

# 4 Niagara-Ground scattering

- The niagara system mainly generates black particles with materials.
- By sampling different textures, create a rich sense of hierarchy.

![image.png](image%2030.png)

![image.png](image%2031.png)

- Particles are mainly divided into ground diffusion (dust) and upward spraying (smoke) to simulate the feeling of ink through the traces of ground diffusion.

![image.png](image%2032.png)

- Other ground effects follow the same approach, increasing the generation and range of particles, combining small dot effects and ink splashing shapes to produce more pronounced effects.

![image.png](image%2033.png)

![image.png](image%2034.png)

- **Large scale ground fissure effect = ink+black light smoke+rising smoke+vibrating stones+splashing sprite+screen effect.**

![image.png](image%2035.png)

![image.png](image%2036.png)

![image.png](image%2037.png)

# 5 Niagara-Cohesion

- Randomly initialize objects within the range and move them towards the center point.

![image.png](image%2038.png)

- Use wave materials for flashing, the following effect is obtained by combining them.

![image.png](image%2039.png)

# 6 Animation & post process

- Insert special effects into character animations through slots and notifications.
- The animations previously created were divided into two types, one requiring binding to specific bones. Another method is to determine the relative fixed playback position based on the position of the subject when the animation is triggered.

![image.png](image%2040.png)

- Animation setting

![image.png](image%2041.png)

- sequencer setting

![image.png](image%2042.png)

- Finally,use Volumnprocess for post-processing. Add ink and blur screen effects when delivering a powerful blow.

![image.png](image%2043.png)
