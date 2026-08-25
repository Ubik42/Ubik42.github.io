# Industrial Digital Twin

A compact industrial digital-twin prototype completed during my internship at Shanghai Ruwei Electric Power. Built on the open-source icegl / TresJS project, it turns a general Web 3D framework into a focused business page for inspecting equipment, navigating scenes, and tuning mechanical parameters.

![Industrial digital twin capture](/media/projects/digital-twin.png)

## From industrial assets to an interactive page

- Added the DigitalTwin page, routing configuration, and industrial-scene entry.
- Imported multiple FBX equipment and scene assets and handled hierarchy, transforms, and browser-side loading.
- Connected TresJS / Three.js TransformControls, parameter panels, and mechanical joint rotation.
- Built equipment-selection and control UI with Tweakpane and Element Plus.
- Organized scene initialization, selection state, controller switching, and debugging into a complete interaction loop.

The upstream framework supplies general city, globe, and data-visualization modules. My internship deliverable covers the industrial asset, mechanical control, business-page, and interaction-debugging layer.
