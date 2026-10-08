# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: funders** deciding whether to support independent research on AI governance. They usually arrive from a link in a grant application, an email or an introduction, on a laptop, and give the site a few focused minutes to judge credibility: is the argument sharp, is the evidence real, who are the people behind it. Mobile is secondary but must work.

**Secondary:** academic peers and potential collaborators working on AI governance, compliance or regulatory design, and SME AI system providers who might take part in the research as field sites.

The initiative's wider audience (regulators, standards bodies, the research community) is served by the research itself; the website's job is securing the resources to do that work.

## Product Purpose

The website is the durable public face of Scalable Governance, an applied research initiative studying how AI governance can keep pace with AI development and deployment. It is a standalone, funder-facing argument with the initiative's papers as evidence, and it anchors the grant application.

A visit succeeds when the reader:

1. reads the full argument on the Mission statement (`/mission/`), and
2. gets in touch about funding (email or LinkedIn from the Contact section).

## Positioning

Most work around AI compliance translates regulation into checklists for the organisations being governed. Scalable Governance works in the opposite direction: it gathers evidence from inside the organisations doing the work, weighted toward smaller ones, and carries it back to the bodies that write and enforce the rules. Its distinctive asset is embedded access to one AI company's compliance work, which reaches material external researchers rarely see. It is a research initiative, not a compliance vendor or consultancy.

## Operating Context

- Three pages: the landing page (`/`), the Mission statement (`/mission/`), and the Agentic Governance Workflow method explainer (`/agentic-governance-workflow/`, reachable by direct URL only, `noindex`).
- Readers move from the hero's pace-mismatch argument to the Mission statement, the publication browser and its PDFs/DOIs, the people, and the Contact section.
- Content decisions and evidential checks are governed by `docs/website-content-spec-v1.5.md`; final copy lives in the HTML. The visual build comes from the Claude Design v6 export in `docs/design-reference/`.

## Capabilities and Constraints

- Static HTML/CSS/JS on GitHub Pages, no build step, no server side (so no contact form). All paths relative so the site works under the GitHub Pages URL and later at scalable-governance.org.
- Self-description is "research initiative", never "lab" or "programme".
- Institutional line: "We are based at the TUM Professorship of Societal Computing." No Think Tank affiliation until confirmed.
- Forthcoming papers carry a "Forthcoming" badge and say that no DOI or proceedings exist yet.
- Not in v1: blog/news, hiring, newsletter, partner or funder logos, research-area subpages, per-paper subpages.
- The workflow page stays unlinked until its open Claims Register items are resolved.

## Brand Commitments

- **Voice:** direct, first-person plural ("we"), active voice, scholarly without being academic. Concepts are named specifically and glossed the first time they appear.
- **Evidential discipline:** every claim is a published finding, marked as the initiative's argument ("we argue", never "we find"), or stated as an aim. Single-case findings are labelled as such. The Claims Register in the content spec is binding; anything not in it does not appear.
- **Wording rules:** "agent skills", not "open skills" (nothing released yet). Never "reveal" as the site's own verb for findings. Paper abstracts are quoted verbatim and never edited.
- **Assets:** the SG logo (`assets/img/logo.svg`; masters in `docs/design-reference/assets/`) and team portraits (masters in `docs/design-reference/portraits/`, not re-edited; WebP exports in `assets/img/team/`).

## Evidence on Hand

- Five papers with PDFs in `papers/`: FAccT 2026 and EWAF 2025 published; AIES 2026, ECAF 2026 and HICSS 2027 forthcoming. Status and identifiers are in the content spec's Publications table.
- Two team members (Initiative Lead, Advisor); the team section has room for 3–6.
- Absent and not to be fabricated: testimonials, partner or funder logos, quantified outcomes, a released tool, multi-organisation findings, a confirmed Think Tank affiliation.

## Product Principles

1. **Evidence before persuasion.** The design should make the line between finding, argument and aim visible, never blur it for effect.
2. **Credibility in minutes.** A funder arriving from a pitch link should grasp the argument, see the papers and the people, and find the contact path without hunting.
3. **Honest about scale.** The single-site evidence base and solo phase are stated openly; nothing implies a larger team, partnership or institution than exists.
4. **The argument leads, the Mission deepens.** The landing page earns the click into the full Mission statement; it does not try to hold everything itself.

## Accessibility & Inclusion

Target WCAG 2.2 AA: 4.5:1 contrast for body text (3:1 for large text and UI components), full keyboard access including the accordions, publication browser and glossary tooltips, visible focus, and respect for `prefers-reduced-motion`.
