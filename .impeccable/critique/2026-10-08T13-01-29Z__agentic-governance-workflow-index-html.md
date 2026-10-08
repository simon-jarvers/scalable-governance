---
target: workflow page
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 0
target_identity: "file:/home/user/scalable-governance/agentic-governance-workflow/index.html"
target_fingerprint: "sha256:14d2311241cbdd3c45e0fee72ed3e406103a6d4a071832f50a719aa0da1b5d90"
target_path: /home/user/scalable-governance/agentic-governance-workflow/index.html
timestamp: 2026-10-08T13-01-29Z
slug: agentic-governance-workflow-index-html
---
Method: dual-agent (A: design review sub-agent · B: detector + browser sub-agent). Targets: index.html (Persuade), mission/index.html (Read), agentic-governance-workflow/index.html (Read).

## Design Health Score (overall; 7 and 10 n/a for Persuade/Read)
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | Mission TOC never marks FAQ active (main.js:101 threshold); spy lags |
| 2 | Match system / real world | 3 | Abstract hero lead; browser opens on the most jargon-dense paper (HICSS) |
| 3 | User control and freedom | 3 | Solid: independent accordions, Esc closes tooltips/menu, keyboard slider |
| 4 | Consistency and standards | 3 | Mission CTA 3x with 3 labels above the fold+1; footer markup differs per page |
| 5 | Error prevention | 2 | mailto-only contact, address never visible; 62/38 slider reads as data |
| 6 | Recognition rather than recall | 3 | Mission ends at FAQ with no contact path |
| 7 | Flexibility and efficiency | n/a | Persuade/Read surface |
| 8 | Aesthetic and minimalist | 3 | Calm but even-weighted; mission band ~400px for 2 sentences; abstract walls |
| 9 | Error recovery | 2 | No 404; nothing if mailto fails |
| 10 | Help and documentation | n/a | Persuade/Read surface |
| Total | | 22/32 (69%) | Acceptable, just under Good |
Per page: landing 21/32, mission 21/32, workflow 22/32.

## Design Specificity Verdict
System is specific (diagram language: compliance chain, regulatory chain with feedback bracket, GDD cycle, two-layer card), but the landing page is category-interchangeable: headline + lead + accordions + buttons + ring watermark, then the same H2+lead+button template per band. The strongest assets never reach the page funders land on. Detector: 50 findings in markup (78 with CSS); true positives: footer contrast 4.44:1 (style.css:700-701), 10-11.5px text in workflow diagrams, long uppercase venue lines in the paper detail (style.css:488-498), line length ~116-138 chars at 1440 (landing lead, research intro, workflow article). False positives: cramped-padding (16), clipped-overflow (3, deliberate hero clip), tight-leading (rounding at 1.30), hover low-contrast (skip link). Repeating-stripes = intentional data encoding on the budget bar. Design-system-* = token documentation drift. No horizontal overflow at 390px.

## Priority Issues
- [P1] Mission page dead-ends (mission/index.html:221-224): no next step after FAQ for the most qualified reader. Fix: closing "Support this work" band with funding aims, visible email, LinkedIn. Command: layout (after shape for copy).
- [P1] Landing lacks funder hierarchy and a peak: argument hidden in accordion, mission repeated, Funding last of three equal columns. Fix: surface the scale argument as 2-3 visible beats (labelled finding/argument/aim, resolving its open Claims Register items first); fold the mission band; lead contact with Funding; filled Contact nav button. Command: layout, then bolder.
- [P2] No signature visual on the landing: bring the compliance chain or regulatory feedback loop into the hero in place of the decorative watermark. Command: bolder.
- [P2] Fragile contact path (index.html:259): show address, prefill subject. Command: harden.
- [P2] Budget slider reads as data (workflow:86-111): caption "Illustrative" + instruction. Command: clarify.

## Persona Red Flags
- Funder: no statement of what funding enables; first paper shown is forthcoming; independence question answered only deep in Mission; workflow page unreachable.
- Jordan: 40-word abstract lead; AI governance definition hidden; "agent skills" unglossed on landing.
- Casey: Mission 7,862px with no end CTA; abstract ~1,000px pushes the paper link far below the tab; tagline 10.5px.
- Sam: footer 4.44:1 at 12px (below AA); hero accordion triggers are h2 peers of section titles; FAQ never aria-current.

## Minor Observations
Hero headline ~40px under the nav; reg-chain figure floats in a wide card; people cards half-empty at 1440; Outfit 700 display reads more startup than research; violet HICSS tag reads as a second link colour; 10px workflow chain descriptions.

## Reference comparison
Sampura: warm paper, serif wordmark, extreme restraint, credibility from provenance and candour. Apart: white + forest green, light large grotesk, isometric signature visual, partner logos, filled Contact button. Foresight: gradient ground, serif display, 3D hero, dense institutional cards. Apollo: not rendered (CDN blocked). v6 shares light ground, single accent, serif reading face, calm tone; diverges in display voice, lack of an ownable hero visual, evidence hidden in tabs, understated ask. Recommendation: refine, don't shift.

## Questions to Consider
- What single piece of evidence does a funder leave the first viewport with?
- Why is the most authored page (workflow) hidden while the landing carries the generic parts?
- What does funding buy, stated as an aim?
