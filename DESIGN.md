---
name: Scalable Governance
description: Applied research on AI governance
colors:
  primary-blue: "oklch(0.48 0.19 260)"
  primary-blue-deep: "oklch(0.43 0.20 260)"
  link-hover: "oklch(0.38 0.16 260)"
  research-violet: "oklch(0.38 0.20 280)"
  goal-indigo: "oklch(0.43 0.15 270)"
  chip-tint: "oklch(0.95 0.02 260)"
  chip-ink: "oklch(0.30 0.10 260)"
  domain-governance: "oklch(0.95 0.025 260)"
  domain-human: "oklch(0.96 0.005 260)"
  domain-product: "oklch(0.95 0.025 280)"
  paper-bg: "oklch(0.97 0.003 260)"
  surface: "oklch(0.995 0.002 260)"
  surface-alt: "oklch(0.975 0.004 260)"
  mission-band: "oklch(0.94 0.014 260)"
  divider-strong: "oklch(0.88 0.008 260)"
  divider: "oklch(0.90 0.005 260)"
  border-light: "oklch(0.92 0.005 260)"
  ink: "oklch(0.13 0.02 260)"
  text-body: "oklch(0.28 0.02 260)"
  text-secondary: "oklch(0.35 0.02 260)"
  muted: "oklch(0.45 0.02 260)"
  muted-2: "oklch(0.50 0.03 260)"
  footer-text: "oklch(0.50 0.02 260)"
  tooltip-bg: "oklch(0.20 0.02 260)"
  on-blue: "oklch(0.995 0 0)"
typography:
  display:
    fontFamily: "Outfit, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(34px, 4.8vw, 58px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  display-subpage:
    fontFamily: "Outfit, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(38px, 5.2vw, 64px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Outfit, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(32px, 4.2vw, 50px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.022em"
  headline-article:
    fontFamily: "Outfit, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(27px, 3.1vw, 36px)"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Outfit, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.3
  lead:
    fontFamily: "Bitter, Georgia, Times New Roman, serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Bitter, Georgia, Times New Roman, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  body-card:
    fontFamily: "Bitter, Georgia, Times New Roman, serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Outfit, Helvetica Neue, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.08em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "12.5px"
    fontWeight: 500
rounded:
  tag: "5px"
  button: "6px"
  chip: "8px"
  domain: "12px"
  figure: "14px"
  card: "16px"
  pill: "50%"
spacing:
  gutter: "48px"
  section-tight: "80px"
  section: "88px"
  section-loose: "130px"
  article-section-gap: "56px"
  container: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.primary-blue}"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.button}"
    padding: "13px 28px"
    typography: "{typography.title}"
  button-primary-hover:
    backgroundColor: "{colors.primary-blue-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary-blue}"
    rounded: "{rounded.button}"
    padding: "11.5px 26.5px"
  button-secondary-hover:
    backgroundColor: "{colors.primary-blue}"
    textColor: "{colors.on-blue}"
  button-contact:
    backgroundColor: "{colors.primary-blue}"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.chip}"
    padding: "16px 36px"
  chip-chain:
    backgroundColor: "{colors.chip-tint}"
    textColor: "{colors.chip-ink}"
    rounded: "{rounded.chip}"
    padding: "12px 6px"
  chip-chain-active:
    backgroundColor: "{colors.primary-blue}"
    textColor: "{colors.on-blue}"
  card-person:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "32px 32px 28px"
  card-figure:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.figure}"
    padding: "32px 28px"
  publication-tab-selected:
    backgroundColor: "{colors.primary-blue}"
    textColor: "{colors.on-blue}"
    padding: "20px 24px"
  status-label:
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.tag}"
    padding: "3px 9px"
  card-funding:
    backgroundColor: "{colors.mission-band}"
    rounded: "{rounded.card}"
    padding: "32px 36px"
  tooltip:
    backgroundColor: "{colors.tooltip-bg}"
    textColor: "{colors.surface}"
    rounded: "{rounded.chip}"
    padding: "12px 14px"
    width: "280px"
---

# Design System: Scalable Governance

## Overview

**Creative North Star: "The Impact Mission"**

The site carries a mission with a point: governance that keeps pace with AI and changes what actually gets built. The design gives that mission a calm, precise stage. Cool blue-tinted paper surfaces, one confident primary blue, and a geometric sans for every heading make the argument easy to follow. A slab serif gives the body text the steadiness of a research document. Nothing competes with the argument; every coloured element points at something that matters (an action, a selected paper, the step where governance reaches the system).

Density is generous and editorial: wide gutters (48px), tall section padding (80–130px), and reading measures held to 64–75 characters. The landing page leads with its signature diagram, the compliance chain, so the first screen shows how the work reaches an AI system rather than decoration. Interaction is quiet but alive. The nav shrinks as you scroll, a faint dot grid leans toward the cursor in the hero, people and contact bands, and the publication browser swaps papers in place. Motion always serves orientation and never decorates.

The confirmed anti-reference is the **generic AI aesthetic**: dark mode with neon or purple glows, glassmorphism as a style, sci-fi particles, cyan-on-black. The dot grid and the frosted nav are the only nods to texture. They stay faint and functional and must never grow into that world.

Reference sites the owner named as the direction to go after, not yet reviewed against this system: sampura.org, apartresearch.com, apolloresearch.ai, foresight.org.

**Key Characteristics:**
- Light, cool paper ground (hue 260) with layered near-white surfaces; no dark mode.
- One primary blue carries action, selection and emphasis; violet and indigo are reserved for diagram roles.
- Outfit (geometric sans) for headings, labels and buttons; Bitter (slab serif) for reading text and nav links.
- Diagrams are first-class content: chips, chains, cycles and architecture cards built from the same tokens.
- Quiet motion: scroll-shrinking nav, cursor-reactive dot grid, short accordion reveals; all disabled under reduced motion.

## Colors

A cool, near-monochrome blue-grey world with a single saturated blue doing all the pointing.

### Primary
- **Mission Blue** (primary-blue): buttons, links, the logo rings, the selected publication tab, accordion toggles, focus rings, the "System impact" chip, and dot-grid dots. It is the only colour that says "act here" or "this one".
- **Deep Mission Blue** (primary-blue-deep): primary button hover. **Link Ink Blue** (link-hover): text link hover.

### Secondary
- **Research Violet** (research-violet): the full-venue line in the paper detail, the HICSS paper tag, the Intermediaries box, the coding-agent/product role in diagrams.

### Tertiary
- **Goal Indigo** (goal-indigo): numbered goal circles on the Mission page and the "Regulated target" box in the regulatory chain.

### Neutral
- **Cool Paper** (paper-bg): page background on every page.
- **Clean Sheet** (surface): cards, figures, the publication browser, the contact band.
- **Index Card** (surface-alt): the publication list column.
- **Mission Wash** (mission-band): the mission teaser band, the one tinted full-width section on the landing page.
- **Diagram tints** (chip-tint, domain-governance, domain-human, domain-product): chip backgrounds and the three domain columns of the GDD cycle. Governance is blue-tinted, Product violet-tinted, Human neutral.
- **Ink** (ink) for headings; **Body** (text-body) for reading text; **Secondary** (text-secondary) for leads and nav links; **Muted / Muted 2 / Footer** (muted, muted-2, footer-text) for meta, captions and the footer.
- **Rules** (divider-strong, divider, border-light): accordion rules, article section rules, card and figure borders.
- **Tooltip Night** (tooltip-bg): the only dark surface, used for glossary bubbles.

### Named Rules
**The One Pointer Rule.** Mission Blue marks what to act on or what is selected. If a blue element isn't clickable, selected, or the emphasised step of a diagram, it shouldn't be blue.

**The Diagram Palette Rule.** Violet and indigo exist for diagram roles (intermediaries, product, goals, target). They are never used for buttons, links, or decoration.

## Typography

**Display Font:** Outfit (with Helvetica Neue, Arial)
**Body Font:** Bitter (with Georgia, Times New Roman)
**Label/Mono Font:** JetBrains Mono, for skill names in the architecture diagram only

**Character:** A clean geometric sans for structure and voice, paired with a sturdy slab serif that reads like a well-set working paper. The contrast signals "argument with evidence" rather than "product marketing".

### Hierarchy
- **Display** (Outfit 600, clamp 34–58px, lh 1.08, −0.025em): the landing hero headline only. Subpages use the larger title-block display (Outfit 600, clamp 38–64px, lh 1.04, −0.028em).
- **Headline** (Outfit 600, clamp 32–50px, lh 1.15, −0.022em): landing section titles. Articles use clamp 27–36px.
- **Title** (Outfit 600, 17–22px, lh 1.25–1.3): accordion triggers, publication titles, beat titles, contact titles, paper list rows. H3 in articles is Outfit 600 21px.
- **Lead** (Bitter 400, 19–20px, lh 1.6–1.65): the first paragraph of hero, sections and articles.
- **Body** (Bitter 400, 17px, lh 1.75 in articles; 15–16px, lh 1.65 in cards and accordions). Measure 64–75ch; wide articles cap paragraphs at 72ch.
- **Label** (Outfit 600–700, 12px minimum, 0.06–0.09em, uppercase only for short labels): roles, short venue tags, "On this page", diagram labels. Long names (full conference titles) stay in sentence case at 14px.

### Named Rules
**The Two Voices Rule.** Outfit speaks for structure (headings, labels, buttons); Bitter speaks for the argument (paragraphs, nav links, captions). Don't swap them.

**The Calm Display Rule.** Headings use Outfit 600 with tight tracking, never 700+ at display sizes. Weight 700 is reserved for the wordmark and tiny uppercase labels.

**The 12px Floor Rule.** No text below 12px, including diagram captions and badges.

## Layout

A centred 1280px container with 48px side gutters on every page. The landing page is a long scroll of full-width bands (hero, mission wash, research, people, contact), each with 80–130px vertical padding. Text columns are held narrow (hero 900px, accordion 720px, research intro and browser 1100px, contact 1000px centred).

Subpages open with a tall title block (170px top padding, bottom rule), then a flex layout: on Mission, a 220px sticky table of contents (top 120px) beside a 740px article; on the Workflow page, a 1100px article without TOC, using two-column text/figure rows that wrap. Article sections are separated by a 48px pad, a 1px rule and a 56px gap. Anchor targets clear the fixed nav with a 100px scroll offset.

Breakpoints at 860px and 760px: the publication browser stacks list above detail, the nav collapses behind a "Menu" toggle, and the gutters tighten. A 400px step handles the smallest phones.

## Elevation & Depth

Mostly flat, with tonal layering doing the work: paper ground, near-white surfaces, tinted bands. Shadows are soft, ambient and rare. They lift the few objects you're meant to treat as things (the nav, the publication browser, people cards, tooltips), never sections.

### Shadow Vocabulary
- **Floating nav** (`0 2px 20px oklch(0.20 0.02 260 / 0.06)`, plus 24px backdrop blur): the only frosted surface.
- **Browser card** (`0 2px 16px oklch(0 0 0 / 0.06)`): the publication browser.
- **Person card** (`0 1px 4px rgba(0,0,0,0.06)`): people cards.
- **Tooltip** (`0 6px 24px oklch(0.13 0.02 260 / 0.2)`): glossary bubbles.

### Named Rules
**The Paper-First Rule.** Depth comes from surface tone before shadow. A new container gets a tonal step or a 1px border first; a shadow only if it is an object the reader handles.

## Shapes

Gently rounded, never pill-shaped except true circles. The radius grows with the object: tags 5px, buttons 6px, chips, contact buttons and tooltips 8px, domain columns 12px, figures and the publication browser 14px, people cards, the nav and the architecture card 16px. Circles are reserved for the logo rings, accordion toggles, number badges and portrait backdrops. The three nested off-centre rings of the logo are the system's signature silhouette. They recur in the nav and footer logo and as the blurred, perspective-tilted rings behind the paper detail, where the highlighted ring encodes the paper's research area.

## Components

### Buttons
Confident and plain: solid colour, no gradients, a 1px lift on hover.
- **Shape:** gently rounded (6px; 8px for the large contact buttons).
- **Primary:** Mission Blue fill, white Outfit 600 14px, 13px × 28px padding. Medium (15px, 15×32) for section CTAs; large (16px, 16×36) for contact.
- **Hover / Focus:** deepens to Deep Mission Blue and lifts 1px (bg 0.2s, transform 0.15s). Focus is a 2px Mission Blue outline offset 3px.
- **Secondary:** 1.5px Mission Blue outline, blue text; fills blue with white text on hover.

### Chips (diagram chips)
- **Style:** Chip Tint background, Chip Ink text, Outfit 600 13px, 8px radius, separated by blue "→" arrows.
- **State:** the emphasised step ("System impact") is filled Mission Blue with white text.

### Cards / Containers
- **Corner Style:** 14–16px.
- **Background:** Clean Sheet on Cool Paper.
- **Shadow Strategy:** ambient only (see Elevation); figures use a 1px Border Light instead.
- **Internal Padding:** 32px for people cards and figures; 40px × 44px in the paper detail.

### Person Card
White card (16px radius, person-card shadow) with name, short rule, blue uppercase role, description and a row of 44px icon links (LinkedIn, email, Google Scholar, website) drawn as one stroke family. The cut-out portrait is large (330px wide on desktop) and breaks out of the card's top edge while the bust sits on the bottom edge, so faces read at a real size. No circle behind the portrait. On phones the portrait sits on the top edge and fades out below the shoulders.

### Navigation
A floating, frosted bar inset from the viewport edge (16px radius, 1px translucent border). Logo plus two-line wordmark on the left; Bitter 500 15px links on the right, hover and current page in Mission Blue. On scroll it shrinks smoothly (logo 56→30px, radius 16→10px, background opacity 0.55→0.90). Below 760px the links collapse behind an outlined "Menu" toggle.

### Accordion
Rows separated by 1px strong rules. Outfit 600 18px trigger with a 28px outlined circle toggle drawing "+" / "−". Panels open with a 0.22s height and opacity transition; several can be open at once.

### Publication Browser (signature)
A two-pane card: a list of papers (venue label, title, availability) on Index Card, with the selected row filled Mission Blue, beside a detail pane with full venue in Research Violet, title, subtitle, authors, verbatim abstract, status badges and the primary link. Behind the detail, blurred logo rings highlight the paper's research area.

### Hero Compliance Chain (signature)
A surface card beside the hero text: a short title, five stacked chips (Obligation, Policy, Control, System impact, Evidence) joined by blue chevrons, each with a one-line description, and a note underneath. "System impact" is the only filled-blue chip. It stacks under the text below 1080px.

### Evidential Status Labels
Small outlined tags ("Our argument", "Our aim") above each beat in the "Why governance has to scale" band. They make the Claims Register's categories visible: arguments use a neutral outline, aims a faint blue outline. Never use them as decorative eyebrows above section headings.

### Funding Card
The landing Contact section opens with a Mission Wash card for funding (title, two sentences, link to the Mission page's funding aims, primary email button). The Mission page ends with the same treatment as its last article section, "Support this work", with an aims list (short blue rule markers), the email actions and the address shown as text with a copy button.

### Glossary Tooltip
A dotted Mission Blue underline marks a glossed term; hover, focus or tap opens a 280px Tooltip Night bubble above it (Bitter 14px/1.5).

### Diagrams (signature)
The compliance chain, the regulatory chain with its dashed feedback bracket, the five-step GDD cycle across three tinted domain columns, and the two-layer architecture card. They share chip, figure and tint tokens, so evidence reads as one visual language across pages.

## Do's and Don'ts

### Do:
- **Do** keep Mission Blue for action, selection and the emphasised diagram step (The One Pointer Rule).
- **Do** give every new container a tonal step or a 1px rule before reaching for a shadow (The Paper-First Rule).
- **Do** set reading text in Bitter at 17px/1.75 within a ~740px measure, and headings in Outfit.
- **Do** build new diagrams from the existing chip, figure and domain tints so they read as part of one system.
- **Do** keep the dot grid faint and switch it to static dots under `prefers-reduced-motion`.
- **Do** label every claim-bearing beat with its evidential status (argument, aim) when it sits outside an article.
- **Do** end long reading pages with a next step (contact or funding), never with the footer alone.

### Don't:
- **Don't** introduce the generic AI aesthetic: dark mode, neon or purple glows, glassmorphism beyond the nav, glowing particles, cyan-on-black.
- **Don't** use violet or indigo for buttons, links or decoration; they belong to diagram roles.
- **Don't** add gradients to buttons or text; the only gradients are the striped fills of the budget bar.
- **Don't** introduce pill-shaped buttons or radii outside the 5–16px scale.
- **Don't** add a third typeface for display; JetBrains Mono stays limited to skill names.
