# Scalable Governance — Website

Static website for the Scalable Governance research initiative. Deployed via GitHub Pages from the `main` branch.

## Project context

- **Initiative scoping document:** `docs/scalable-governance-spec.md`
- **Website content specification:** `docs/website-content-spec-v1.5.md`

## Branch strategy

- `main` — production branch, deploys to GitHub Pages. Only `develop` merges into it, via pull request.
- `develop` — integration branch for ongoing work.
- Work branches — short-lived, cut from `develop`, merged back via pull request:
  `feat/<topic>` (site features), `fix/<topic>`, `content/<topic>` (copy, papers, images),
  `docs/<topic>` (files in `docs/`), `chore/<topic>` (tooling, config). Lowercase, hyphenated.
- Merge pull requests on GitHub, not locally, so they are recorded as merged.
- Delete work branches after merging.

## Commit convention

[Conventional Commits](https://www.conventionalcommits.org/): `type(scope): summary`

- Types match the branch prefixes: `feat`, `fix`, `content`, `docs`, `chore`.
- Scope is optional and names the area, e.g. `research`, `hero`, `spec`.
- Summary in imperative mood, lowercase, no trailing period, under ~70 characters.
- Example: `content(research): add FAccT'26 preprint PDF`

## Design

The website design is being prototyped in Claude Design and will be implemented here. Use the `artifact-design` skill for design guidance when building pages.

## Key constraints

- GitHub Pages static site — no server-side functionality
- Target domain: scalable-governance.org (launch on GitHub Pages URL first)
- Evidential discipline: every claim traceable to a published finding or marked as the initiative's argument
- Voice: direct, first-person plural, scholarly without being academic
- Scope: this repository is about Scalable Governance only. Keep personal context about team members (other projects, deadlines, contracts, workload) out of all files.
