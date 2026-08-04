# Design System

## Approved Direction

The homepage combines `mock-b-identity-instrument.png` and `mock-c-evidence-atlas.png`.

- The hero is identity-led: a committed plum field, the green hand-drawn avatar, a narrow engineered display face, and concise positioning.
- The second major surface is an Evidence Atlas: three unequal systems share protocol, rules, AI assist, DCC/engine, and evidence layers.
- Real workbench captures provide proof. They are cropped by the live layout and retain their original files.
- English and Chinese are equal product states. The switch updates visible copy, document language, metadata, and the persisted preference.

## Palette

```css
--plum: oklch(0.36 0.147 340);
--plum-deep: oklch(0.20 0.08 340);
--green: oklch(0.86 0.20 153);
--blue: oklch(0.54 0.16 252);
--white: oklch(1 0 0);
--surface: oklch(0.965 0 0);
--ink: oklch(0.16 0.025 340);
--muted: oklch(0.48 0.025 340);
```

Plum carries the identity plane and evidence inspector. Green identifies AI assistance and the avatar. Anodized blue identifies DCC/engine work, active selections, and technical links. White and neutral surfaces keep long-form evidence readable.

## Type

- Display: Archivo Variable, condensed through its width and weight range.
- Body: Atkinson Hyperlegible Next Variable.
- Chinese fallback: system CJK sans stack.

Generated mocks referenced commercial type only as a visual direction. The shipped typefaces use deployable packages and remain legible across English and Chinese.

## Mock Fidelity Inventory

| Visible ingredient | Live implementation |
| --- | --- |
| Large plum identity field | Semantic hero heading, copy, actions, and avatar |
| Green avatar stamp | Original public avatar file, not a generated redraw |
| Instrument-like right hero | Lazy-loaded React Three Fiber evidence core plus semantic method index |
| Six-stage method | HTML list and a related six-part WebGL object |
| Evidence Atlas | Keyboard-operable system selector, shared layers, and live inspector |
| Real tool evidence | Original Cross-DCC, Visual Review, and Slidev motion captures |
| Plum evidence inspector | Animated content replacement with a native dialog for deeper review |
| Practice range | Real work and education chronology from the public resume |
| Motion cues | Motion for React for entry, selection, and layout transitions |
| React Bits behavior | Adapted Magnet interaction on primary actions, disabled for coarse pointers and reduced motion |

## 3D and Motion

- WebGL renders a six-part protocol core rather than a generic orb or particle field.
- The 3D module is code-split and has a styled fallback. Text and navigation never depend on WebGL.
- Motion uses transform and opacity, with short quart/expo easing. Content remains visible before animation.
- `prefers-reduced-motion` disables magnetic motion, looping WebGL rotation, scroll behavior, and decorative transitions.

## Localization

- Locale is `en` or `zh` and is stored under a versioned local-storage key.
- The first visit follows the browser language, falling back to English.
- Strings remain complete units rather than concatenated fragments.
- Layout reserves enough width for both languages and recomposes on narrow screens.

## Deliberate Deviations from the Mocks

- Generated metrics and project counts are removed because they are not authoritative.
- Generated dates are replaced with resume-backed dates.
- LinkedIn and email are omitted until a confirmed public address is provided.
- The full Toolbench has no fake public repository CTA. Visitors inspect evidence on-page and use verified public links.

