# Fathom

Fathom is a submarine co-op game built around a physical control console. I was the primary programmer for Game Mode, player and input systems, task and minigame interfaces, UI/HUD data flow, and the hardware-to-Unreal communication path.

## Task gameplay

@[video: Task system and realtime HUD](/media/projects/fathom-task.mp4)

## Gameplay architecture

`BP_FathomGameMode` owns stages, regular and emergency tasks, success and failure, and progression. `BP_FathomPlayerController` centralizes keyboard, test, and external-controller events. Structs and Data Tables hold task configuration, while `WBP_GameBase` gives minigames a common interface.

When task-generation rules changed, I replaced a growing branch chain with a modular data-driven event system and bound its state to the task manager, popups, minigames, and HUD.

## Physical controller path

Input travels through **Arduino Serial → Python Sender → MQTT → Python Receiver → OSC → Unreal PlayerController**. The bridge scans serial devices, parses the fixed field format, filters continuous and threshold inputs, and emits discrete gameplay events.

## Sonar gameplay

@[video: Sonar minigame capture](/media/projects/fathom-sonar.mp4)

## Final integration

I audited the Game Mode, input pipeline, and minigame handoffs for null references, event ordering, and unexpected hardware values, then added validation gates, bounds checks, and fallback handling. I also wrote the first programming guide used to onboard engineers who joined mid-project.
