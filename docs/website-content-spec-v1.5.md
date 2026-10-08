# Scalable Governance — Website Content Specification

Version 1.5 · October 2026

---

## Overview

This document specifies the content of the Scalable Governance website (v1): what each page and section is for, which papers it lists, and which claims it may make. It is the reference for content decisions and evidential checks.

**Source of truth for copy.** From v1.5 the final copy lives in the site's HTML (`index.html`, `mission/index.html`, `agentic-governance-workflow/index.html`), implemented from the Claude Design export in `docs/design-reference/`. This spec does not repeat that copy. It records each section's purpose, the decisions behind it, and the Claims Register every piece of copy must pass.

**Platform:** GitHub Pages, static site, no build step. Domain: scalable-governance.org (to be purchased). Launch on the GitHub Pages URL first; no CNAME until the domain is bought.

**What this site is:** The durable public face of Scalable Governance, an applied research initiative studying how AI governance can keep pace with AI development and deployment.

**What this site is not:** A holding page, a personal portfolio, a lab website, or a software product site.

**Primary audience:** Funders evaluating whether to support this work. Secondary audience: academic peers and potential collaborators, including AI system providers who might take part in the research.

**Voice and register:** Direct, first-person plural ("we"), active voice, precise but accessible. Scholarly without being academic. Concepts are named specifically and glossed the first time they appear (the Mission and Workflow pages use glossary tooltips for this).

**Self-description:** "Research initiative", not "lab" or "programme".

**Institutional line:** "We are based at the TUM Professorship of Societal Computing." Names the chair without claiming a Think Tank affiliation that isn't confirmed.

**Evidential discipline:** Every claim on the site must be traceable to a published finding, marked as the initiative's argument, or stated as an aim. Where findings come from a single case, the site says so. See the Claims Register below.

---

## Site Structure

```
scalable-governance.org
├── /                               Landing page (long scroll)
│   ├── Nav: Mission · Research · Who we are · Contact
│   ├── Hero (+ two explainer accordions)
│   ├── Mission teaser
│   ├── Research (intro + publication browser)
│   ├── Who we are
│   ├── Get in contact
│   └── Footer
├── /mission/                       Mission statement (linked from nav, hero and teaser)
├── /agentic-governance-workflow/   Method explainer (NOT linked; direct URL only, noindex)
└── /papers/                        Preprint and paper PDFs
```

**Changed in v1.5:** The three research-area subpages (`/research/governance-in-practice`, `/research/who-governs-ai`, `/research/making-governance-scale`) are dropped. The research is consolidated on the landing page in a publication browser. The "What Comes Next" section moves off the landing page into the Mission statement, which also carries the single-site limitation.

**Not in v1:** Blog/news, hiring section, newsletter signup, partner logos, research-area subpages, per-paper subpages.

---

## Landing page

### Nav and header

- Name "Scalable Governance", descriptor "Applied research on AI governance".
- Links: Mission (to `/mission/`), Research, Who we are, Contact (anchors on the landing page).

### Hero

**Purpose:** State the pace mismatch and what the initiative is for, in one glance.

- Headline: the pace mismatch between AI development and governance (the initiative's framing).
- Lead: what Scalable Governance is and its goal, including keeping human judgment and accountability.
- Institutional line with link to the TUM Professorship of Societal Computing.
- Accordion "What is AI governance?": definition and the three levels (organisation, verification, regulation); notes that most of our research so far studies the organisational level.
- Accordion "Why does it have to scale?": AI coding agents and the volume of AI systems; links to the Mission statement.
- Buttons: "Read our mission statement" (to `/mission/`), "Read our research" (to `#research`).

### Mission teaser

One paragraph on what we build (the *Agentic Governance Workflow*: agent skills for human-AI collaboration in governance work) and why we research AI system developers empirically. Button to the full Mission statement.

**Wording rule:** "agent skills", not "open skills". Nothing has been released yet; the release is stated as an aim on the Mission page.

### Research

**Purpose:** Show active, multi-strand research output, with the papers themselves as evidence.

- Intro paragraph: we study AI governance inside the organisations that build AI systems and among the intermediaries who interpret the rules for them; most recent work focuses on making governance scale.
- Publication browser: list of papers (venue, short title, availability) and a detail panel (full venue, title and subtitle, authors, notes, abstract, links). Order: FAccT 2026, AIES 2026, ECAF 2026, HICSS 2027, EWAF 2025. Default selection: FAccT 2026, the published paper with a DOI, so a funder's first piece of evidence is peer-reviewed and citable.
- Abstracts are quoted **verbatim** from the papers and checked against the PDFs in `papers/`.
- Each paper shows its DOI or publisher link next to the PDF where both exist. Forthcoming papers carry a "Forthcoming" badge and "DOI not yet assigned" or "Proceedings not yet published".

### Who we are

Two cards, room for 3–6 without redesign. Portraits from `docs/design-reference/portraits/` (masters, not re-edited), exported to `assets/img/team/` as WebP at 1× and 2×. The circle is a background behind the portrait; the bust runs to the card's bottom edge and is clipped only by the card.

| Person | Role | Description |
|---|---|---|
| Simon Jarvers | Initiative Lead | Researcher at TUM · AI Governance Officer at an AI startup (embedded research) |
| Orestis Papakyriakopoulos | Advisor | Professor of Societal Computing · Civic Machines Lab, TUM |

**Correction kept from v1.3:** the AI Governance Officer role is at the studied AI company, not at TUM.

### Get in contact

Three lines of engagement, then buttons "Write an email" (`mailto:simon.jarvers@tum.de`) and "Contact us on LinkedIn" (https://www.linkedin.com/in/simon-jarvers/).

- **SME AI system providers:** for organisations that build AI systems and want to test the Agentic Governance Workflow on their own governance work. Aligned with the Mission statement's first goal (build and test the workflow at the organisational level). No reference to a "cohort": none has been announced.
- **Research collaboration:** for people working on AI governance, compliance or regulatory design.
- **Funding:** for funders of independent research on AI governance.

No contact form (GitHub Pages has no server side).

### Footer

Logo, "Scalable Governance", "An applied research initiative based at the TUM Professorship of Societal Computing", © year. Email and LinkedIn live in the Contact section, not in the footer.

---

## Mission statement (`/mission/`)

**Purpose:** The initiative's full argument and plan for a reader who wants more than the landing page: what we build, why it matters, what comes next, our role, how we work, FAQ. It carries the content the v1.4 "What Comes Next" section held: the symbolic-compliance argument, the single-site limitation, and the agenda that justifies support.

Sections: What we build first · Why this matters · What comes next (with three goals) · What is our role (regulatory chain diagram) · How we work (including "Why us" and the single-organisation limitation) · FAQ (8 questions).

**Evidential notes:**
- "We argue" marks the credence-good / symbolic-compliance argument, the innovation argument, and the scalable-oversight analogy. Do not soften to "we find".
- The single-organisation limitation is stated in "Why us". Keep it.
- The July 2026 agent incident is attributed to METR's independent investigation and linked.
- FAQ "Can AI help govern AI?" names HICSS'27 as a design study at one organisation and states wider testing as an aim. The earlier "first cohort" wording is removed.

---

## Agentic Governance Workflow (`/agentic-governance-workflow/`)

**Purpose:** Method explainer for readers who receive the link directly (e.g. funders or prospective field sites). Not linked from any other page and marked `noindex`; it is only reachable by URL.

Sections: The problem (with the interactive budget split) · Governance-Driven Development (five-step cycle diagram) · Agentic Governance Workflow (two-layer architecture) · Papers (ECAF'26, HICSS'27).

**Evidential notes:** The open items flagged in the Claims Register apply to this page before it is linked anywhere.

---

## Publications

| Venue | Title | Authors | Status | Identifier | File |
|---|---|---|---|---|---|
| HICSS 2027 | Human-AI Collaboration in Compliance Automation: Designing an Agentic Knowledge Base for AI Governance | Jarvers, Röthemeier, Wittges, Papakyriakopoulos | Forthcoming | DOI not yet assigned | `papers/2027-hicss-human-ai-collaboration-in-compliance-automation.pdf` |
| AIES 2026 | Governing by Proxy: How Regulatory Intermediaries Shape EU AI Act Compliance in Practice | Jarvers, Papakyriakopoulos | Forthcoming | DOI not yet assigned | `papers/2026-aies-governing-by-proxy.pdf` |
| ECAF 2026 (PMLR) | Governance-Driven Development: Embedding Regulatory Requirements in AI Development Workflows | Jarvers, Papakyriakopoulos | Forthcoming (proceedings not yet published) | — | `papers/2026-ecaf-governance-driven-development.pdf` |
| FAccT 2026 | Engaged AI Governance: Addressing the Last Mile Challenge Through Internal Expert Collaboration | Jarvers, Papakyriakopoulos | Published | DOI 10.1145/3805689.3812341 (ACM Digital Library) | `papers/2026-facct-engaged-ai-governance.pdf` |
| EWAF 2025 (PMLR vol. 294) | Uncertainty as a Primary Barrier for Trustworthy AI Under the EU AI Act: German SME Perspectives | Jarvers\*, Ullstein\*, Grossklags (\* equal contribution) | Published | https://proceedings.mlr.press/v294/jarvers25a.html | `papers/2025-ewaf-uncertainty-as-a-primary-barrier.pdf` |

**Titles corrected in v1.5** against the paper PDFs: HICSS'27 (was "Human-AI Collaboration for Scalable AI Governance: An Agentic Knowledge Base Approach"), ECAF'26 subtitle (was "An AI Act-Centred Framework for AI System Design"), AIES'26 (adds "in Practice"), FAccT'26 (adds "Addressing the Last Mile Challenge").

**Author order corrected in v1.5:** HICSS'27 is Jarvers, Röthemeier, Wittges, Papakyriakopoulos.

**No longer listed on the site:** Ullstein, Jarvers, Hohendanner, Papakyriakopoulos & Grossklags (2025), "Participatory AI and the EU AI Act", AIES'25, 2550–2562, DOI 10.1609/aies.v8i3.36737. Dropped with the research-area subpages; re-add to the publication browser if wanted.

**File naming:** `papers/<year>-<venue>-<short-title>.pdf`, lowercase, hyphenated.

**When a forthcoming paper is published:** add its DOI next to the PDF, remove the "Forthcoming" badge and the "DOI not yet assigned" line, and update this table.

---

## Claims Register

Every substantive claim on the site, with its status. Anything not covered here should not appear.

**Verified findings** (may be stated as results; source in brackets):
- Uncertainty is the primary implementation barrier for German AI SMEs; surveys N = 21, interviews N = 13 [EWAF'25]
- SMEs face resource constraints across time, finances and staffing [EWAF'25]
- Strategic responses: delaying compliance, modifying products to reduce regulatory burden, seeking external compliance expertise and certification [EWAF'25]
- Three patterns in how practitioners perceive requirements: convergence, existing practice, disconnection [FAccT'26]
- Practitioners view verification-oriented requirements as box-ticking exercises [FAccT'26]
- Sixteen regulatory intermediaries mapped around one AI startup; intermediary interpretive choices construct what AI Act compliance means for the regulated organisation [AIES'26]
- GDD runs on two nested action cycles; in early implementation at one AI startup [ECAF'26]
- Agentic knowledge base applied to two ISO management system standards; two design principles: human authority over agent moderation, and traceability [HICSS'27]

**Paper abstracts** are quoted verbatim and attributed to the paper, so they trace to the published text by definition. They may contain wording that the site's own copy must not use about the same findings (for example "reveal" and "significantly" in the EWAF'25 abstract). Do not edit abstracts; do not reuse that wording elsewhere.

**The initiative's arguments** (must be marked "we argue" or equivalent, never "we find"):
- Auditors and authorities cannot directly verify that governance protects safety, health and fundamental rights; this credence-good property pulls compliance toward symbolic work [Mission]. ECAF'26 states the credence-good properties of governance outcomes as part of its framing; it is still an argument, not an empirical result.
- Cheaper governance work supports innovation among small AI companies and lowers market-entry barriers [Mission]
- AI governance has the same structure as reward hacking under a weak evaluator [Mission FAQ]
- Agentic capabilities can keep governance knowledge current as long as humans keep authority over the record [Mission FAQ; argued in HICSS'27 from one organisation]
- The pace mismatch between AI development and governance [Landing hero, Mission]

**Aims and plans** (must be stated as intentions, not as accomplished):
- Build and test the Agentic Governance Workflow at the organisational level; evaluate it on effort reduction and demonstrable system changes
- Release the skills and the workflow as open source (not yet released; hence "agent skills", not "open skills")
- Extend to verification and regulation; carry evidence back to rule-makers

**External claims** (must cite their source on the page):
- July 2026 incident of OpenAI agents accessing Hugging Face production systems [METR investigation, linked]

**Open items** (unsourced claims currently on the site; source, reframe as argument, or remove):
- Landing, "Why does it have to scale?": "AI coding agents write a growing amount of the code of AI systems", "more AI systems reach the market", and "neglecting it poses a systemic risk" (an argument not marked as one)
- Mission, "Why this matters": frontier labs increasingly use AI to accelerate research on their own models; developers' use of coding agents brings more systems to market, faster
- Workflow page: "Most compliance budget goes into documentation for audits, not into changes to the AI system" (AIES'26 supports this for one organisation only); "Features that took weeks now take days"; the budget slider's default 62/38 split reads as data but is illustrative

**Claims removed in v1.3** (still not to be used):
- That intermediaries' incentives *cause* symbolic compliance (AIES'26 shows conditions under which it can emerge in good faith; no causal attribution)
- That intermediation chains produce "contradictory" requirements (the paper says "independent and sometimes divergent")
- That compliance is a credence good *on the buyer side* (organisations unable to evaluate purchased compliance services)
- "Reveal" as the site's own verb for EWAF'25 findings (use "point to" or "suggest")

---

## Content Not in v1 (Deferred)

| Item | Trigger for inclusion |
|---|---|
| Blog / news feed | When there are at least 3 items to post |
| Hiring section | When the initiative is actively recruiting |
| Newsletter signup | If the audience grows beyond direct contacts |
| Partner / funder logos | When partnerships are confirmed and partners consent to being listed |
| Think Tank affiliation | When confirmed |
| Link to the Workflow page | When the open items for that page are resolved |
| Released skills / workflow | When open-sourced; then the "aim" wording can change |
| Domain-specific email | When scalable-governance.org is purchased and configured |

---

## Technical Notes

- **GitHub Pages:** Static HTML/CSS/JS, no build step. All paths relative, so the site works under `username.github.io/scalable-governance/` and later at the root of the custom domain.
- **Domain:** scalable-governance.org (to be purchased). No `CNAME` file until then.
- **Design source:** Claude Design export in `docs/design-reference/` (see its README and `HANDOFF.md`).

---

## Changelog

**v1.5 (2026-10-07):** Rewritten to match the implemented site (Claude Design "Landing Page Mockup v6"). Final copy now lives in the HTML; this spec keeps purpose, decisions and the Claims Register. Research-area subpages dropped; research consolidated in the landing-page publication browser. Mission statement page added (holds the former "What Comes Next" content and the single-site limitation). Agentic Governance Workflow page added, reachable by direct URL only. Contact segment "Field sites" replaced by "SME AI system providers", without a "cohort". "Open skills" replaced by "agent skills". Orestis Papakyriakopoulos listed as Professor. Paper titles and HICSS'27 author order corrected against the PDFs; FAccT'26 published PDF added; publication status table added; AIES'25 no longer listed. Claims Register updated for the new copy, with open items listed.

**v1.4 (2026-09-13):** Research section gains a short introduction framing the three areas as one programme. "What Comes Next" moved after Who We Are.

**v1.3 (2026-09-13):** Mission / orientation section removed. Area 3 renamed "Making Governance Scale". Subpage narratives rewritten against the paper texts. Claims Register added. Citation errors corrected. Simon's bio corrected.

**v1.2 (2026-09-13):** Hero reframed around the pace-mismatch headline. Research blocks clarified as near-final copy. Contact segmented.

**v1.1 (2026-09-13):** Initial content specification.
