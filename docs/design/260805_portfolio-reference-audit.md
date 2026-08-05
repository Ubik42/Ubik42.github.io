# Portfolio reference audit

## What the reference set showed

The first implementation treated repository links as portfolio content. Strong technical-art portfolios do the opposite: they present capabilities and concrete production work first, then use source links as verification.

### Technical-art references

- KirinByte groups the surface around rigging, tools, procedural workflows, and pipeline integration, then supports each capability with visual evidence.
- Martin Dahlin describes a real production problem, the tool behavior, and the DCC implementation instead of presenting a technology list alone.
- PolyLeaf exposes the technology, problem, and solution for individual tools.
- Maciej Sojka separates selected work from the broader software and skill inventory, keeping the project archive readable.

### Developer portfolio datasets

- `developer-portfolios` provides a maintained, machine-readable `feed.json` with name, URL, and tagline fields.
- `portfolio-ideas` provides screenshots, live URLs, repositories, and technology stacks in one comparison table.

## Decisions for this site

1. Remove the public GitHub repository gallery from the main narrative.
2. Keep source repositories as Git submodules for maintainers and AI agents.
3. Present all five core AI Tool TA workbenches through one interactive browser.
4. List all eleven integrated gates, reviewers, adapters, and runtime tools as first-class work.
5. Replace the ArtStation carousel with a complete nine-project visual archive.
6. Give every core tool the same useful fields: purpose, workflow, review evidence, runtime stack, and image.
