# Unity Digital-Twin Client for Thermal-Power Inspection

During my Unity client development internship at Shanghai Ruwei Electric Power, I worked on a server-coordinated digital-twin system for thermal-power inspection. Unity handled the high-interaction 3D simulation while the Web client provided browser access and lightweight operations. Both clients shared state and command semantics and synchronized bidirectionally with the company server.

![Industrial digital twin capture](/media/projects/digital-twin.png)

> The public capture and repository show the companion Web viewer. The company Unity client, internal assets, APIs, and operational data are not public.

## Unity client work

- Structured equipment, monitoring points, interactions, and business services as C# components.
- Implemented equipment startup, operating-state transitions, telemetry, alarm linkage, inspection steps, and result feedback.
- Connected state machines and events to scene animation, materials, UI, and operation permissions.
- Used ScriptableObject configuration, Addressables, asynchronous loading, object pooling, LOD, and Profiler-guided checks for runtime organization.

## Transferring Unity patterns to the Web

- Transferred Unity's component, state-machine, event-bus, configuration-driven, and data/business/presentation patterns to Vue 3 and Three.js.
- Shared device IDs, state fields, event names, and command contracts across Unity, Web, and server code.
- Mapped Unity lifecycle and main-thread constraints to Web state composition, subscriptions, and component mount/unmount rules.
- Built equivalent monitoring, equipment-operation, and camera interactions with uGUI/Input System and Vue/Element Plus.

## Unity-server-Web synchronization

- Used the company server as the authoritative state source: HTTP supplied initial snapshots while WebSocket delivered telemetry, alarms, operations, and incremental state.
- Relayed Unity and Web operations through server validation before broadcasting the accepted state to the other client.
- Used device IDs, operation IDs, sequence numbers, and timestamps for ordering, de-duplication, optimistic feedback, conflict rollback, and stale-message rejection.
- Added heartbeat, timeout, reconnection, snapshot recovery, Unity main-thread dispatch, and Web Store updates.
- Throttled and coalesced continuous telemetry while preserving acknowledged delivery for user operations.

## Web full-stack implementation

- Added the DigitalTwin page, routing configuration, and industrial-scene entry.
- Imported multiple FBX equipment and scene assets and handled hierarchy, transforms, and browser-side loading.
- Connected TresJS / Three.js TransformControls, parameter panels, and mechanical joint rotation.
- Built equipment-selection and control UI with Tweakpane and Element Plus.
- Organized scene initialization, selection state, controller switching, and debugging into a complete interaction loop.

The Web client uses Vue 3, TresJS / Three.js, Element Plus, and Express to carry the Unity-side device model, state machine, and interaction contracts into the browser. The upstream icegl / TresJS framework supplies general city, globe, and visualization modules; my work covers the industrial page, equipment assets, mechanical controls, state integration, and interaction-debugging layer.
