# Fathom

Fathom is a submarine co-op game built around a physical control console. As primary programmer and gameplay-architecture owner, I organized navigation stages, routine maintenance, emergency faults, sonar minigames, health penalties, and progression into an extensible task loop. I also owned Game Mode, player input, minigame interfaces, UI/HUD data flow, and the complete hardware-to-Unreal path.

## Task gameplay

@[video: Task system and realtime HUD](/media/projects/fathom-task.mp4)

## Gameplay architecture

`BP_FathomGameMode` owns submarine stages, task scheduling, timers, success, failure, and progression. `BP_FathomPlayerController` centralizes keyboard, test, and external-controller events. Structs and Data Tables hold task type, duration, objective, and penalty data, while `WBP_GameBase` gives minigames a common enter, resolve, and exit interface.

When task-generation rules changed, I replaced a growing branch chain with a modular data-driven event system covering emergency interruption, routine rotation, countdown, resolution, and health penalties. Its state is bound to the task manager, alerts, minigames, and HUD.

## Physical controller path

Input travels through **Arduino Serial → Python Sender → MQTT → Python Receiver → OSC → Unreal PlayerController**. The bridge scans serial devices, parses the fixed field format, filters continuous and threshold inputs, and emits discrete gameplay events.

## Sonar gameplay

@[video: Sonar minigame capture](/media/projects/fathom-sonar.mp4)

Sonar is a schedulable gameplay module rather than an isolated demo: Game Mode issues the objective, the shared interface owns its state, physical controls drive scanning and confirmation, and the result returns to the task manager and HUD. The same path supports fast keyboard testing and the final exhibition console.

## Final integration

I audited the Game Mode, input pipeline, and minigame handoffs for null references, event ordering, and unexpected hardware values, then added validation gates, bounds checks, and fallback handling. I also wrote the first programming guide used to onboard engineers who joined mid-project.
