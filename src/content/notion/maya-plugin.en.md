# Maya Plugin

![图片10.png](%25E5%259B%25BE%25E7%2589%258710.png)

> **Introduction:**
>
>
> This is a Maya comprehensive plugin that covers 9 different themes, providing a large number of functions and convenient operations.
>

> **Features:**
>
>
> The plugin is developed using a large-scale scalable architecture, separate front-end and back-end, introduce object-oriented concepts, and reasonably architecture functional classes and method.
>

> **Goal:**
>
>
> This work demonstrates my engineering programming fundamentals, my ability to develop DCC tools, and my interaction design skills.
>

# 1 Architecture

### 1.1 Project Structure

![image.png](image.png)

- Root Directory
    - `core`—Backend classes, script files are divided according to different functions.
        - `fileUtils.py`
        - `controlUtils.py`
        - `jointUtils.py`
        - `……`
    - `pyside`—Pyside code repository.
    - `res`—The folder to store material files and corresponding calling codes.
    - `Tools`—Front end functions, where ToolMain is the main menu entrance, and each other interface represents a tab for the corresponding function. All tabs injected into the main menu form the interface that users see.
        - `ToolMain.py`
        - `Rig_Tool_main.py`
        - `Joint_Tool_main.py`
        - `……`

### 1.2 program mode

- Some related functionalities are aggregated into core/XXXUtil.py, where most operations related to joints are placed in the `jointUtils.py` script. The XXXUtil itself is a class that inherits from object, providing various operation methods. Some methods are marked as @staticmethod to become static methods.
- The common pattern is that the frontend `XXXTool.py` defines interfaces, binds signals, and calls the corresponding functionality implemented in the backend `XXXUtil.py`.

![                     the structure of the `Constraint_Tool_main.py`](image%201.png)

                     the structure of the `Constraint_Tool_main.py`

- Some backend utilities may have internal testing interface classes, such as Joint_Resampling, but these classes will not be referenced by the frontend. Sometimes, backend tools also call each other's functionalities, leading to the creation of auxiliary backend tools containing common logic, such as hierarchyUtils. Some simple functions are also built into the frontend.

![image.png](image%202.png)

# 3 Overview

## 3.0  Main window

- The plugin can memorize the **theme**,size and position of the window when you reopen it.
- The plugin use flexible layout and can adjust font size
- you can get hint information if you hang the pointer on the button

![image.png](image%203.png)

> **Reference:**
>
>
> theme qss file came from [https://github.com/GTRONICK/QSS/blob/master](https://github.com/GTRONICK/QSS/blob/master)
>

## 3.1 Attr

![image.png](image%204.png)

- you can edit channel box and object attrubute here.

## 3.2 Rig

![image.png](image%205.png)

- You can generate and create the required IK and FK styles for unified binding here.
- Some  utility functions which are useful for rigging are also placed here.Not all functions have been fully implemented.

## 3.3 Constraint

![image.png](image%206.png)

- You can set the spatial properties of two objects here, conveniently adding various types of constraints for **one-to-many or many-to-one constraint** relationships.

## 3.4 Joint

![image.png](image%207.png)

- Here is a collection of all the functions that binding technology artists may need when dealing with bones.Not all functions have been fully implemented.

## 3.5 Control

![image.png](image%208.png)

- You can edit the shape, size, and rotation of the controller here to display it in the way you want. You can also upload new shapes as controllers, or use mirror and replace functions for quick editing

> **Reference:**
>
>
> the inspiration of this part came from : https://gitee.com/lush_ma/controls
>

## 3.6 Name

![image.png](image%209.png)

- Here, naming and renaming related functions are provided, and users have three different naming scopes to choose from.

## 3.7 Connections

![image.png](image%2010.png)

- You can quickly set the connections and driving relationships between attributes here.

## 3.8 Project

![image.png](image%2011.png)

- You can perform some common operations related to files and projects here.

> bone templates come from famous maya plugin `AdvancedSkeleteon`
>

## 3.9 Anim

![image.png](image%2012.png)

- Here are some basic animation features that allow users to accurately modify the positions of curves and points when using the graph editor, or export and import animation data in JSON format.
