# Design reference

Claude Design export of the Scalable Governance website (source: "Landing Page
Mockup v6"). Kept for reference while implementing the site; not part of the build.

- `HANDOFF.md`: the export's handoff notes (layout, tokens, interactions, known issues).
- `designs/Landing Page.dc.html`: the landing page implemented as `index.html`.
- `designs/Mission Statement.dc.html`: implemented as `mission/index.html`.
- `designs/Agentic Governance Workflow.dc.html`: implemented as
  `agentic-governance-workflow/index.html` (reachable by direct URL only).
- `designs/support.js`: the runtime needed to open the `.dc.html` files in a browser.
- `assets/`: logo PNGs and the original headshots from the export.
- `portraits/`: the edited portrait masters. These, not `assets/*-headshot.png`,
  are the source for `assets/img/team/` (see `portraits/README.md`).

The preprint PDFs that came with the export live in `papers/` at the repository root,
renamed to `<year>-<venue>-<short-title>.pdf`.

These are prototypes, not production code: the site matches their visual output and
behaviour, not their internal structure.
