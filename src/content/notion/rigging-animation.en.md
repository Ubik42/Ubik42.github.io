# Rigging & Animation

![图片16.png](%25E5%259B%25BE%25E7%2589%258716.png)

> **Introduction:**
>
>
> This is a project that transforms a model into a playable character.
>

> **Features:**
>
>
> First, I  rigged a T-200 robot with bones and controllers and created a cutscene animation. Then, I set it up as a controllable game character.The joints and movements of the robot are different from those of ordinary bipedal organisms. For the special mechanisms of the model itself, I performed some specific rigging and animation processing.
>

> **Goal:**
>
>
> This work demonstrates my ability to bind and animate models and set up the associated logic using UE blueprints and animation systems.
>

# 1 Maya Rigging

![image.png](image%2079.png)

![image.png](image%2080.png)

- When setting up the IK system for the legs, the robot's axle was taken into consideration.
- A chain structure connecting the machine gun was set up for the hands.
- The movable door and ladder on the robot's back and the lights on top of its head were rigged, which will be used in animation production.

![image.png](image%2081.png)

- The constraints set through the node editor primarily solve the chain for the hands to ensure that the chain follows the movement when the hands move.

# 2 UE Demostration

## 2.1 Sequence

- **I first created a level sequencer where a male character will enter through a small door on the robot's back, and the robot will be turned on.The detailed video has been attached or can be seen on my portfolio website.**
- sequence info

    ![image.png](image%2082.png)


> **Reference:**
>
>
> the soldier assert came from `mixamo`
>
> ![image.png](image%2083.png)
>

## 2.2 Play as a T-200

![image.png](image%2084.png)

- After the robot starts moving:
    - Smoke sprays from the top.
    - The machine body will vibrate up and down at a certain frequency.
    - The blue spotlight (from the overhead light in the upper left corner) is turned on.
- Players can :
    - Control the robot's movement.
    - Press left mouse button to attack.
    - Control the spotlight's up, down, left, and right directions.

## 2.3 AnimGraph

![image.png](image%2085.png)

- The robot's animation state is based on locomotion, and when an attack command is input, the upper body performs animation blending. At the same time, there is a setting that directly controls the rotation of the spotlight skeleton.
- animation assert

    ![image.png](image%2086.png)


## 2.4 blueprint event graph

![image.png](image%2087.png)

![image.png](image%2088.png)

![image.png](image%2089.png)

![image.png](image%2090.png)

- The blueprint receives input from the inputenhancer, sets variables, and notifies the animation state machine to set the animation state of the robot.
