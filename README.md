# Ubik42.github.io

Lucas Shen's bilingual AI Tool Technical Artist portfolio, published through GitHub Pages.

## Purpose and information architecture

This repository is the public, job-facing index for Lucas Shen / 沈裕焱. The page is organized for a recruiter or technical-art reviewer to answer three questions quickly:

1. What role is Lucas targeting?
2. What is the strongest current body of work?
3. Where can the claims be verified publicly?

The content flow is therefore:

- Positioning and hiring focus
- Flagship `ai-tool-ta-portfolio` case with engineering evidence
- Capability pillars, experience, and education
- Complete AI Tool TA system: five core workbenches and integrated runtime tools
- Complete ArtStation visual-practice archive
- Public contact and profile channels

`src/data/showcase.ts` is the main bilingual content model for the AI tool portfolio and ArtStation archive. Source repositories and external portfolio datasets live under `references/` as Git submodules, so maintainers and AI agents can inspect the current source of truth without turning repository links into homepage content.

```powershell
git submodule update --init --recursive --depth 1
```

## Stack

- React 19 + TypeScript + Vite
- Motion for React
- React Three Fiber + Three.js
- One adapted React Bits interaction

## Local development

```powershell
npm install
npm run dev
```

## Quality checks

```powershell
npm run typecheck
npm run lint
npm run build
```

## Deploy

```powershell
npm run deploy
```

The deploy command verifies the project, builds `dist/`, and publishes the result to the `gh-pages` branch used by GitHub Pages.
