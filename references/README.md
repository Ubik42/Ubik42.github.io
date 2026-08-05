# Reference sources

This directory keeps the repositories that define or inform the personal site as Git submodules. They are source material for maintainers and AI agents. They are not rendered as a repository gallery on the public homepage.

Initialize everything after cloning:

```powershell
git submodule update --init --recursive --depth 1
```

## Personal source of truth

| Path | Purpose |
| --- | --- |
| `source/resume` | Latest role target, experience, education, and skill claims. |
| `source/ai-tool-ta-portfolio` | Authoritative tool inventory, evidence state, screenshots, and public package. |
| `source/github-profile` | Public profile language, technology map, and social links. |

## External inspiration and data

| Path | Useful data |
| --- | --- |
| `inspiration/developer-portfolios` | Large portfolio index and machine-readable `feed.json`. |
| `inspiration/portfolio-ideas` | Curated screenshots, live URLs, source repositories, and technology stacks. |

## Maintenance rules

- Read personal source submodules before changing public claims.
- Treat `source/ai-tool-ta-portfolio/README.md` and `public-case-package/` as the current engineering baseline.
- Use external repositories to compare information hierarchy, project depth, imagery, and interaction patterns. Do not copy a template wholesale.
- Update submodules deliberately and review upstream changes before committing the new pointers.
