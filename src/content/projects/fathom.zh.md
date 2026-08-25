# Fathom

Fathom 是一款围绕实体控制台设计的潜艇协作游戏。我担任主要程序开发，负责 Game Mode、角色与输入、任务系统、小游戏接口、UI/HUD 数据联动，以及 Arduino 控制器进入 Unreal 的通信链路。

## 任务玩法

@[video: 任务系统与实时 HUD 实机录像](/media/projects/fathom-task.mp4)

## Gameplay 架构

项目基于 Unreal Engine 5.5.4 First Person 模板。`BP_FathomGameMode` 负责关卡阶段、常规任务与紧急任务、成功失败和推进条件；`BP_FathomPlayerController` 集中处理键鼠、测试输入与外部控制器事件；Struct 和 Data Table 保存任务配置；`WBP_GameBase` 为各小游戏提供统一接口。

当策划在中期显著调整任务生成规则时，我没有继续堆叠分支，而是重构任务数据和事件调用链，把紧急任务、常规任务、时间限制与失败扣血拆成数据驱动结构。后端状态通过绑定同步到 Task Manager、弹窗、小游戏和 HUD，使设计变更不再要求重写整条蓝图链。

## 实体控制器链路

实体设备输入依次经过 **Arduino Serial → Python Sender → MQTT → Python Receiver → OSC → Unreal PlayerController**。Sender 自动扫描串口并转发固定格式字段；Receiver 解析 `POT`、`ENC`、`FSR`、`JOYX`、按钮和按键，对连续值做方向与阈值判断，再把离散事件发送给 Unreal。

早期同步测试中，输入包到达时间不稳定，导致角色抖动。我把接收工作移出阻塞主流程，加入缓冲、边界判断和角色侧插值，同时避免让 OSC 直接模拟 Enhanced Input 按键，最终改为由 PlayerController 发出业务事件。

## 声呐玩法

@[video: 声呐小游戏实机录像](/media/projects/fathom-sonar.mp4)

## 最终冲刺与稳定性

联合调试暴露出空引用、事件乱序和硬件异常值等问题。我重新审计 Game Mode、输入管线和小游戏接口，在关键交接点加入 Null Check、状态门、范围检查和回退逻辑，并扩展接口适配最后确定的新控制器部件。

这一阶段让我从“逐个完成功能”转向检查系统之间的数据流、生命周期和失败路径。我还整理了项目第一份程序技术手册，用于帮助中途加入的工程同学理解蓝图层级、输入协议和任务接口。
