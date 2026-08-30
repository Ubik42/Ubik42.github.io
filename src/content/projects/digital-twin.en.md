# Unity Digital-Twin Client for Thermal-Power Inspection

During my Unity client development internship at Shanghai Ruwei Electric Power, I worked on a digital-twin client for thermal-power inspection. The primary deliverable was a Unity application connecting equipment simulation, operating state, telemetry, alarms, inspection tasks, UI, and user input. A Vue / Three.js full-stack viewer was delivered as a companion surface.

![Industrial digital twin capture](/media/projects/digital-twin.png)

> The public capture and repository show the companion Web viewer. The company Unity client, internal assets, APIs, and operational data are not public.

## Unity client work

- Structured equipment, monitoring points, interactions, and business services as C# components.
- Implemented equipment startup, operating-state transitions, telemetry, alarm linkage, inspection steps, and result feedback.
- Connected state machines and events to scene animation, materials, UI, and operation permissions.
- Used ScriptableObject configuration, Addressables, asynchronous loading, object pooling, LOD, and Profiler-guided checks for runtime organization.

## Networking, UI, and input

- Integrated monitoring data over HTTP / WebSocket with snapshot and incremental updates, main-thread dispatch, timeout, reconnection, and fallback handling.
- Built uGUI equipment panels, trends, alarms, inspection steps, and system-state feedback.
- Organized mouse and keyboard selection, camera navigation, equipment focus, scene hotspots, and parameter interactions.
- Separated data, business, and presentation layers so offline simulation and live telemetry could drive the same client presentation.

## Companion Web viewer

- Added the DigitalTwin page, routing configuration, and industrial-scene entry.
- Imported multiple FBX equipment and scene assets and handled hierarchy, transforms, and browser-side loading.
- Connected TresJS / Three.js TransformControls, parameter panels, and mechanical joint rotation.
- Built equipment-selection and control UI with Tweakpane and Element Plus.
- Organized scene initialization, selection state, controller switching, and debugging into a complete interaction loop.

The Web viewer uses Vue 3, TresJS / Three.js, Element Plus, and Express. The upstream icegl / TresJS framework supplies general city, globe, and visualization modules; my work covers the industrial business page, equipment assets, mechanical controls, and interaction-debugging layer.
