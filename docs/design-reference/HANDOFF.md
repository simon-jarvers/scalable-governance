# Handoff: Scalable Governance website (3 pages)

## Overview
Marketing/research website for **Scalable Governance**, an applied research initiative on AI governance at the TUM Professorship of Societal Computing. Three pages:

1. **Landing Page** (`index`): hero with expandable explainer, mission teaser, interactive research/publication browser, people, contact, footer.
2. **Mission Statement**: long-form article with sticky table of contents, inline glossary tooltips, two diagrams, FAQ accordion.
3. **Agentic Governance Workflow**: long-form explainer of the method, with an interactive budget slider, a 5-step process diagram, a two-layer architecture diagram and a paper list.

## About the design files
The files in `designs/` are **design references built in HTML**: prototypes showing intended look, copy and behavior. They are not production code. Recreate them in the target codebase's environment using its patterns. If there is no codebase yet, a static-site framework is the right fit (e.g. **Astro** or **Next.js static export**, with Tailwind or CSS modules). Content-heavy, almost no app state.

To view the references, open any `designs/*.dc.html` in a browser (they load `support.js`, a small runtime, from the same folder). Each file has an HTML template (inside `<x-dc>`) with inline styles, plus a logic class at the bottom (`class Component extends DCLogic`) that holds state, data arrays and DOM effects. Template holes like `{{ a1Sign }}` are values computed in `renderVals()`. `<sc-if>` = conditional render, `<sc-for>` = list render. `style-hover="…"` = hover styles.

## Fidelity
**High fidelity.** Final colors, typography, spacing, copy and interactions. Recreate pixel-accurately. Copy is final (see "Known content issues" below for a few typos to fix).

---

## Global layout & shared components

**Page shell**: body background `#f4f5f7` (oklch 0.97 0.003 260). Content container `max-width: 1280px; margin: 0 auto; padding-inline: 48px`.

### Floating sticky nav (all pages)
- `position: fixed; top: 0; inset-inline: 0; z-index: 100`. Inner wrapper `max-width:1280px; padding:0 24px`.
- Bar: flex, space-between, `padding: 20px 36px`, `margin-top: 20px`, `border-radius: 16px`, `border: 1px solid oklch(0.92 0.005 260 / 0.5)`, `background: oklch(0.97 0.003 260 / 0.55)`, `backdrop-filter: blur(24px) saturate(1.5)`, `box-shadow: 0 2px 20px oklch(0.20 0.02 260 / 0.06)`.
- Left: logo SVG (56px) + two-line wordmark: "Scalable Governance" (Outfit 700, 20px, `#070b14`, lh 1.1) / "Applied research on AI governance" (Bitter 12.5px, `#596475`, letter-spacing 0.03em). Gap 14px.
- Right: links (Bitter 500, 15px, `#343b45`, gap 28px, hover `#0754c6`). Order on landing: Mission, Research, Who we are, Contact. Active page link: `#0754c6`, weight 600.
- **Scroll shrink** (interpolate with `t = min(scrollY/100, 1)`): logo 56→30px; margin-top 20→8px; radius 16→10px; vertical padding 20→10px; title 20→15px; tagline = title × 15/24; link size 15→13px; link gap 28→22px; bg alpha 0.55→0.90; border alpha 0.5→0.9. rAF-throttled.
- Links to landing sections smooth-scroll with a 100px offset for the nav. From subpages they link to `Landing Page#research` etc.

### Logo (inline SVG, three nested off-center circles)
```html
<svg viewBox="0 10 200 200"><circle cx="100" cy="110" r="85" fill="none" stroke="#0754c6" stroke-width="14"/><circle cx="100" cy="142" r="53" fill="none" stroke="#0754c6" stroke-width="12"/><circle cx="100" cy="160" r="33" fill="none" stroke="#0754c6" stroke-width="11"/></svg>
```
PNG versions in `assets/`.

### Interactive dot-grid background (all pages)
A `position:fixed` full-viewport `<canvas>` behind content (`z-index:0`, `pointer-events:none`). Draws dots only inside vertical bands of elements marked `data-grid-section` (hero, people, contact on the landing page; title block on subpages).
- Grid spacing 30px, dot radius 1.2px, color `oklch(0.48 0.19 260 / α)`.
- Base alpha by distance to nearest text/surface: <30px → 0.04; 30–200px → linear 0.04→0.26; >200px → 0.26. (Landing page measures every rendered text line rect via a TreeWalker plus nav/links/cards; subpages use `h1,h2,h3,p,nav,a` rects.) Recompute every 20 frames and on scroll/resize.
- Mouse attraction: within 130px, dots pull toward the cursor (force = (1 − d/130) × 0.35, eased 0.15); otherwise return at 0.08. Alpha += min(displacement/15, 0.4); radius += displacement × 0.04. On the landing page these mouse effects are additionally damped near text (`damp` 0.05→1 over 24–160px).
- Respect `prefers-reduced-motion` in production (render static dots).

### Footer (all pages)
Flex, space-between, wrap, padding 48px. Left: 24px logo, "Scalable Governance" (Outfit 600 13px `#343b45`), "An applied research initiative based at the TUM Professorship of Societal Computing" (Bitter 12px `#6b727e`). Right: "© 2026" (Bitter 12px `#6b727e`). Subpages wrap it in a top border `1px #e3e5e8`.

### Buttons
- Primary: Outfit 600 14px, white text, bg `#0754c6`, `padding: 13px 28px`, radius 6px. Hover bg `#0042ba` + `translateY(-1px)`. Transition bg 0.2s, transform 0.15s.
- Secondary: same type, text `#0754c6`, `1.5px solid #0754c6` border, `padding: 12px 28px`. Hover: fills blue, text white.
- Contact CTAs: 16px, `padding:16px 36px`, radius 8px.

### Accordion (landing hero + Mission FAQ)
Row with top/bottom `1px #d4d8dd` dividers. Header: flex space-between, padding 18px 0 (FAQ 20px), title Outfit 600 18px `#04070f`. Toggle: 28px circle, `1.5px solid #0754c6`, blue "+" / "−" (Outfit 18px). Body: `padding: 0 48px 28px 0` (FAQ `0 40px 18px 0`), Bitter 15–16px, lh 1.65–1.7, `#2d333d`. Independent toggles (multiple can be open). No animation in the mock; a short height/opacity transition (~200ms) is welcome.

### Glossary tooltip (Mission + Workflow pages)
Dotted-underlined term (`border-bottom: 1.5px dotted #0754c6; cursor: help`). On hover (and click/tap toggle) shows a dark bubble above: `position:absolute; left:0; bottom: calc(100% + 10px); width: 280px; bg #11161f; color #f6f7f9; Bitter 14px/1.5; padding 12px 14px; radius 8px; shadow 0 6px 24px oklch(0.13 0.02 260 / 0.2)`. Make keyboard-accessible (focusable, `aria-describedby`).

---

## Screen 1: Landing Page (`designs/Landing Page.dc.html`)

### Hero (`data-grid-section`, min-height 620px)
- Padding `150px 48px 80px`; text column max-width 900px.
- Watermark: large logo variant at right (560px, `right:-60px`, vertically ~centered, opacity 0.055).
- H1 "AI is developed and deployed faster than governance can follow." Outfit 700, `clamp(32px, 4.5vw, 52px)`, lh 1.1, ls -0.01em, `#04070f`, mb 24px.
- Lead paragraph, Bitter 19px/1.65 `#343b45`, `text-wrap: pretty`.
- "We are based at the TUM Professorship of Societal Computing." (Bitter 16px `#596475`, link to https://www.gov.sot.tum.de/en/soc/welcome/), mb 36px.
- Accordion (max-width 720px, mb 40px): "What is AI governance?" (paragraph + 3-item list Organisation/Verification/Regulation + "Read our research →" link scrolling to #research) and "Why does it have to scale?" (paragraph + "Read our mission statement →").
- Buttons: Primary "Read our mission statement" → Mission page; Secondary "Read our research" → scroll to #research. Gap 16px.

### Mission teaser (`#mission`)
Bg `#e6ecf5`, top border `1px oklch(0.89 0.02 260)`. Padding 88px 48px, column, gap 36px. H2 "Mission statement" (Outfit 700 `clamp(30px,4vw,48px)`, lh 1.2). Paragraph Bitter 19px/1.65 `#232933`. Primary button "Read our full mission statement" (15px, padding 15px 32px).

### Research (`#research`)
Bg `#f4f5f7`, padding 80px 48px. H2 "Research", intro paragraph (Bitter 19px, max-width 1100px, mb 56px).
**Publication browser** card: max-width 1100px, grid `400px minmax(0,1fr)`, bg `#fdfdff`, border `1px oklch(0.91 0.01 260)`, radius 14px, shadow `0 2px 16px oklch(0 0 0 / 0.06)`, min-height 560px, overflow hidden.
- Left list (bg `#f5f7f9`, right border): 5 rows, `padding: 20px 24px`, bottom border. Each: venue (Outfit 600 12px, uppercase, ls 0.08em), title (Outfit 600 17px/1.3), kind (Bitter 13px: "Preprint" / "ACM Digital Library" / "PMLR Proceedings"). Selected row: bg `#0754c6`, title white, meta `#d9e5f9`. Unselected: transparent, title `#04070f`, meta `#4f5661`. Order: HICSS 2027 (default selected), AIES 2026, ECAF 2026, FAccT 2026, EWAF 2025.
- Right detail (padding 40px 44px, column gap 14px): full venue (Outfit 600 12px uppercase `#381ea7`), title (Outfit 700 26px/1.2), subtitle (Bitter 17px `#4d5560`-ish oklch 0.40 0.02 260), authors (Bitter 600 14px), note (13px, e.g. equal-contribution), full abstract (Bitter 15px/1.7 `#2d333d`), CTA primary button: "Download preprint (PDF)" (downloads `uploads/<file>.pdf`) or "Read on ACM Digital Library ↗" / "Read on PMLR ↗" (external).
- Decorative: logo rings top-right of the detail panel, 400px, opacity 0.18, blur 3px, `perspective(400px) rotateY(35deg) rotateX(12deg)`. Ring colors depend on the paper's research theme: one ring blue `#0754c6`, others light `oklch(0.82 0.04 H)`. Theme 1 (FAccT, EWAF) = inner ring highlighted; Theme 2 (AIES) = middle; Theme 3 (ECAF, HICSS) = outer.
- All paper data (titles, authors, abstracts, URLs, filenames) is in the logic class of the file (`papers`, `full`, `ewaf`, `files`). Move it to a content file (JSON/MD collection).
- Mobile: stack list above detail (the mock doesn't define this; ≤ 860px suggested).

### Who we are (`#who-we-are`, `data-grid-section`)
Padding 80px 48px 120px. H2 + two cards (flex, wrap, gap 20px, mt 80px; each `flex:1; min-width:min(100%,440px)`). Card: bg `#fdfdff`, radius 16px, padding 32px 32px 28px, shadow `0 1px 4px rgba(0,0,0,0.06)`. Content (padding-right 140px): name on two lines (Outfit 700 `clamp(20px,2.4vw,26px)`), 40×2px divider `oklch(0.75 0.02 260)`, role (Outfit 600 12px uppercase blue), description (Bitter 15px/1.65).
- Simon Jarvers — Initiative Lead — "Researcher at TUM / AI Governance Officer at an AI startup (embedded research)"
- Orestis Papakyriakopoulos — Advisor — "Professor of Societal Computing / Civic Machines Lab, TUM"
- Portrait slot bottom-right: 160px circle `#dce2ec` with a silhouette placeholder rising out of it (145×188). **Replace with `assets/simon-headshot.png` / `assets/orestis-headshot.png`** (cut-out portrait overlapping the circle).

### Get in contact (`#contact`, `data-grid-section`)
Bg `oklch(0.995 0.002 260 / 0.9)`, centered, max-width 1000px, padding 130px 48px. H2, then three columns between top/bottom dividers (padding 32px 0, gap 48px, each 220–280px): "SME AI system providers", "Research collaboration", "Funding" (title Outfit 600 18px, body Bitter 15px `#4f5661`). Buttons (mt 48px): Primary "Write an email" → `mailto:simon.jarvers@tum.de`; Secondary "Contact us on LinkedIn" → **placeholder `https://www.linkedin.com`, needs the real URL**.

---

## Screen 2: Mission Statement (`designs/Mission Statement.dc.html`)

- Title block (`data-grid-section`, bottom border): padding 170px 48px 72px. H1 "Mission statement" Outfit 700 `clamp(36px,5vw,60px)`, lh 1.05, ls -0.015em.
- Body: flex wrap, gap `48px 72px`, padding 72px 48px 24px.
  - **Sticky TOC** (`aside`, flex 0 0 220px, `position:sticky; top:120px`): label "On this page" (Outfit 700 11px uppercase `#596475`). Items Bitter 14px, `padding:7px 0 7px 14px`, `border-left:2px`. Active: text + bar `#0754c6`, weight 600; inactive: text `#4f5661`, bar `#dcdee1`. Click smooth-scrolls (100px offset). Active = last section whose top < 200px (scroll spy). Sections: What we build first · Why this matters · What comes next · What is our role · How we work · FAQ.
  - **Article** (flex 1 1 480px, max-width 740px). Each section: `padding-bottom:48px; margin-bottom:56px; border-bottom:1px #dcdee1` (not on FAQ). H2 Outfit 700 `clamp(26px,3vw,34px)`. Lead paragraph Bitter 20px/1.6 `#0c121a`, mb 28px. Body Bitter 17px/1.75 `#232933`, mb 20px. H3 Outfit 700 21px, margin 40px 0 16px.
- **Diagram A, compliance chain** (in "What we build first"): figure card (bg `#fdfdff`, border `#e3e5e8`, radius 14px, padding 32px 28px). Five equal chips in a row with "→" (Outfit 18px blue) between: Obligation, Policy, Control, **System impact** (filled `#0754c6`, white), Evidence. Chips: padding 12px 6px, radius 8px, Outfit 600 13px, bg `#e7effc`, text `#0b2b5f`.
- **Glossary terms** in "Why this matters": "AI models", "recursive self-improvement", "AI systems", "credence good" (texts in the file).
- **Goals list** ("What comes next"): 3 rows with 24px numbered circles (bg `#3245a1`, white Outfit 700 12px).
- **Diagram B, regulatory chain** ("What is our role"): centered, max-width 340px. Label "Regulatory chain". Vertical stack of three boxes (max-width 158px, padding 11px 14px, radius 8px, Outfit 600 13px white) each with a caption (Bitter 12px `#596475`) and arrow down: Regulator (`#0754c6`) "EU AI Office, market surveillance authorities" → Intermediaries (`#381ea7`) "Auditors, consultants, standard-setters" → Regulated target (`#3245a1`) "AI providers & deployers". On the right, a dashed blue bracket (1.5px dashed, rounded right corners) runs from target back up to regulator with an arrowhead at the top, labeled vertically "Feedback" (Outfit 700 11px, ls 0.1em, blue). Rebuild as one SVG in production.
- **FAQ**: 8 accordion items (text in file).

## Screen 3: Agentic Governance Workflow (`designs/Agentic Governance Workflow.dc.html`)

- Title block like Mission. H1 "Agentic Governance Workflow", subtitle "How to make governance scale" (Bitter `clamp(18px,2vw,22px)` `#343b45`). Paper tags: "ECAF '26 ↗" (blue outline) and "HICSS '27 ↗" (violet `#381ea7` outline), Outfit 600 13px, padding 6px 14px, radius 5px, link to PDFs.
- Article max-width 1100px, no TOC (TOC code exists but isn't rendered; ignore). Sections: The problem · Governance-Driven Development · Agentic Governance Workflow · Papers.
- **The problem**: two columns (flex wrap, gap 32px 56px; text 1 1 380px, figure 1 1 400px). Figure "Where the compliance budget goes": **draggable split bar**. Bar 44px high, 2px `#04070f` border, radius 8px. Left part = gray stripes `repeating-linear-gradient(135deg, #d4d8dd 0 8px, #ebedf0 8px 16px)`, right part = blue stripes (`#0754c6` / `oklch(0.56 0.15 260)`). Default split 62/38. White thumb 44px wide, extends 8px above/below, 2px dark border, radius 8px, shadow, two small blue triangles (◀ ▶). Drag anywhere on the track (mouse + touch), clamped 30–70%. Labels below follow the split (grid columns `pct−0.7% / 1.4% / rest−0.7%`): "Documentation for audits" + "Proves that governance happened. Easy to inspect." | "Implementation" (blue) + "Changes what gets built. Hard to inspect." Add keyboard support (arrow keys, `role="slider"`).
- **GDD cycle diagram** (figure card, padding 36px 32px 32px). Header row: title + legend with three character icons: Governance agent (blue robot w/ shield), Human (dark silhouette), Coding agent (violet robot w/ `</>`). Body grid `160px 1fr`, gap 20px:
  - Left "Compliance Chain": 4 vertical nodes (36px blue circles with white icons: §, document, shield-check, magnifier) with labels: Obligation "What the regulation requires", Policy "What it means for the organisation", Control "How to implement the requirements", Evidence "Proof it was implemented". Chevrons between.
  - Right: three equal columns forming one rounded band: **Governance Domain** (bg `#e5efff`, radius 12px 0 0 12px) with step 1 at top and step 5 at bottom; **Human Verification** (bg `#f0f2f5`) with steps 2 (top) and 4 (bottom); **Product Domain** (bg `#ebedff`, radius 0 12px 12px 0) with step 3 vertically centered. Step cards: white, radius 14px, padding 20px 16px 16px, 1.5px tinted ring + soft shadow, number badge 28px circle at top-left (−12px offset), actor icon at top-right (−14px). Titles Outfit 700 14px, body Bitter 12px/1.5 `#4f5661`.
    1. Plans the specification. "Turns the obligation into a scoped, testable task with acceptance criteria"
    2. Verifies the specification. "Scope, task description, obligation reference and acceptance criteria"
    3. Implements the change. "Works inside the accepted scope, implements the change, and opens a pull request" + "The obligation reaches the codebase" (violet)
    4. Verifies the change. "Confirms acceptance criteria are satisfied, then merges the code"
    5. Documents the evidence. "Records the merged change as evidence against the control"
  - Small screens: not defined in the mock. Suggest stacking the five steps vertically in order with domain labels.
- **Two-layer architecture** (Workflow section, right column): card 2px `#04070f` border, radius 16px.
  - Top "Compliance" (bg `#dcdee1`): label + "Human-authoritative" badge; caption "The organisation's compliance corpus"; 4 nodes in a row with chevrons: Regulation & Standards, Approved Policies, Applied Controls, Evidence Record.
  - Middle boundary (bg `#f4f5f7`, 2.5px dashed blue top/bottom borders): ↓ (dark) "Human-agent collaboration" ↑ (blue); caption two lines.
  - Bottom "Workspace" (bg `#e5efff`): label + "Agent-moderated" badge; caption; 2-col grid of skills in JetBrains Mono 500 12.5px `oklch(0.30 0.04 260)` with blue "/" prefix: /decompose-requirement, /plan-specification, /review-product, /document-evidence, /check-consistency, /answer-question.
- **Papers**: list rows (link, padding 22px 0, bottom border, hover bg `oklch(0.965 0.006 260)`): venue tag, title (Outfit 600 18px), citation (Bitter 15px `#4d5560`), "PDF ↗".
- The actor icons are hand-built SVGs inline in the file. Copy them as-is (or into an icon component).

---

## Interactions & state summary
- Landing: `a1`, `a2` (hero accordions), `selectedPaper` (default `hicss`).
- Mission: `activeSection` (scroll spy), tooltip open flags (`am`, `rsi`, `as`, `cg`), FAQ open flags `f1…f9`.
- Workflow: `cg` tooltip, slider percentage (kept in DOM in the mock; make it component state).
- Global: nav shrink on scroll, dot grid canvas, smooth anchor scroll with 100px offset (or use `scroll-margin-top: 110px` on sections, already set on article sections).
- No data fetching. All content is static.

## Design tokens
Colors are authored in OKLCH (keep them as OKLCH in CSS if the target supports it; hex fallbacks given).

| Role | OKLCH | Hex |
|---|---|---|
| Page bg | 0.97 0.003 260 | #f4f5f7 |
| Surface / card | 0.995 0.002 260 | #fdfdff |
| Surface alt (list) | 0.975 0.004 260 | #f5f7f9 |
| Mission band | 0.94 0.014 260 | #e6ecf5 |
| Chip / tint blue | 0.95 0.02 260 | #e7effc |
| Governance domain | 0.95 0.025 260 | #e5efff |
| Product domain | 0.95 0.025 280 | #ebedff |
| Human domain | 0.96 0.005 260 | #f0f2f5 |
| Divider strong | 0.88 0.008 260 | #d4d8dd |
| Divider | 0.90 0.005 260 | #dcdee1 |
| Border light | 0.92 0.005 260 | #e3e5e8 |
| Portrait circle | 0.91 0.015 260 | #dce2ec |
| **Primary blue** | 0.48 0.19 260 | #0754c6 |
| Primary hover | 0.43 0.20 260 | #0042ba |
| Link hover | 0.38 0.16 260 | #003a95 |
| Violet (product/coding agent) | 0.38 0.20 280 | #381ea7 |
| Indigo (goals, target) | 0.43 0.15 270 | #3245a1 |
| Chip text | 0.30 0.10 260 | #0b2b5f |
| Ink / headings | 0.13 0.02 260 | #04070f |
| Lead text | 0.18 0.02 260 | #0c121a |
| Body text | 0.28 0.02 260 | #232933 |
| Body text 2 | 0.32 0.02 260 | #2d333d |
| Secondary text | 0.35 0.02 260 | #343b45 |
| Muted | 0.45 0.02 260 | #4f5661 |
| Muted 2 | 0.50 0.03 260 | #596475 |
| Footer text | 0.55 0.02 260 | #6b727e |
| Tooltip bg | 0.20 0.02 260 | #11161f |

**Typography** (Google Fonts): **Outfit** 400–800 (headings, UI, labels), **Bitter** 400–600 (body, nav links), **JetBrains Mono** 400–500 (skill names only).
- H1 landing `clamp(32px,4.5vw,52px)`/1.1 · H1 subpage `clamp(36px,5vw,60px)`/1.05 · H2 section `clamp(30px,4vw,48px)`/1.2 (landing) or `clamp(26px,3vw,34px)`/1.2 (articles) · H3 21px · Lead 19–20px · Body 17px/1.75 (articles), 15px/1.65 (cards) · Eyebrow/labels 11–12px uppercase, ls 0.06–0.09em.

**Radii**: 5px (tags) · 6px (buttons) · 8px (chips, contact buttons, tooltips) · 12px (domain columns) · 14px (figures, step cards, research card) · 16px (people cards, nav, architecture card).
**Shadows**: nav `0 2px 20px oklch(0.20 0.02 260/.06)` · research card `0 2px 16px rgba(0,0,0,.06)` · people card `0 1px 4px rgba(0,0,0,.06)` · tooltip `0 6px 24px oklch(0.13 0.02 260/.2)`.
**Spacing**: container padding 48px; section padding 80–130px vertical; article section rhythm 48px + 56px.

## Assets
- `assets/SG_logo.png`, `assets/SG_logo_text.png`: logo (the site uses the inline SVG above).
- `assets/simon-headshot.png`, `assets/orestis-headshot.png`: portraits for the people cards (mock still shows silhouettes).
- `designs/uploads/*.pdf`: preprints linked from the research browser and Workflow page (AIES26, ECAF26, HICSS27, EWAFF25).
- Fonts via Google Fonts. All icons are inline SVG in the design files.

## Known content issues to fix
- Landing "Why does it have to scale?": "largely unsolved **an** neglecting" → "and".
- Landing mission teaser: "**emperically**" → "empirically".
- LinkedIn URL is a placeholder.
- The Agentic Governance Workflow page isn't linked from the landing page yet. Suggest linking it from the mission teaser ("Agentic Governance Workflow" phrase) and/or the research section.
- In the bundle, cross-page links were updated to point to `Landing Page.dc.html`. In production, map to `/`, `/mission`, `/agentic-governance-workflow`.

## Files
- `designs/Landing Page.dc.html`: landing page (source: "Landing Page Mockup v6")
- `designs/Mission Statement.dc.html`
- `designs/Agentic Governance Workflow.dc.html`
- `designs/support.js`: runtime needed only to open the references in a browser
- `designs/uploads/`: linked PDFs
- `assets/`: logo and headshots
