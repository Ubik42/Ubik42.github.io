# Design System

## Approved Direction

The homepage follows `docs/design/personal-site-north-star.png`: a personal introduction built around one compact avatar-and-name identity cluster, a tactile cobalt 3D field, first-person writing, three kinds of work, and annotated public links.

The page is not a résumé or a product dashboard. Technical evidence remains visible through real project imagery and precise copy, but the narrative explains who Lucas is, what he enjoys, how he learns, and why he builds tools.

## Palette

```css
--blue: oklch(0.52 0.27 264);
--blue-deep: oklch(0.38 0.21 264);
--green: oklch(0.86 0.29 142);
--ink: oklch(0.16 0.02 255);
--muted: oklch(0.43 0.025 255);
--steel: oklch(0.55 0.07 252);
--white: oklch(0.975 0.004 255);
```

Cobalt blue carries the main visual surface. Electric green connects the original avatar to interactive and spatial accents. Cool white and near-black keep the long-form introduction readable.

## Type

- Display: Archivo Variable, using its condensed width for identity and section headings.
- Body: Atkinson Hyperlegible Next Variable.
- Chinese fallback: Microsoft YaHei UI and the local system sans stack.

The name uses strong size and width contrast while body copy remains at least 16px with a readable measure.

## Layout

- Avatar and name are one flex container at every viewport. The avatar never uses a viewport corner as its anchor.
- Desktop hero is a two-part composition: personal introduction and blue spatial field.
- Mobile hero stacks the same two parts without shrinking the identity cluster.
- About, work, and public links use different structures to create rhythm instead of repeating one card grid.
- Project images use a controlled 16:10 crop so source screenshots cannot stretch the page.

## Motion and 3D

- Motion for React orchestrates the hero entrance and button interaction.
- React Three Fiber renders three connected practice objects inside the blue field.
- The 3D chunk is lazy-loaded and all text remains independent of WebGL.
- Long-form content is visible by default; it never depends on scroll-triggered opacity.
- Reduced-motion mode disables animation and continuous rendering.

## Localization

- English and Chinese are full content states, stored under `portfolio.locale.v1`.
- The first visit defaults to Chinese; an explicit previous language choice remains persisted locally.
- The document language, title, and description update with the selected locale.
- Both languages share the same information architecture and responsive behavior.

## Public Channels

The homepage explains what each verified link contains: GitHub for code and tools, ArtStation for artwork and breakdowns, Bilibili for demos and tutorials, and Xiaohongshu for notes and resources.
