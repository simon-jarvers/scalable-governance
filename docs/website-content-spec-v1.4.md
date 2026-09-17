# Scalable Governance — Website Content Specification

Version 1.4 · September 2026

---

## Overview

This document specifies the content for the Scalable Governance website (v1). It covers every section's purpose, content, and placement. It is the reference for building the site — design, layout, and implementation are handled separately.

**Platform:** GitHub Pages, standalone site. Domain: scalable-governance.ai (to be purchased; launch on GitHub Pages URL first).

**What this site is:** The durable public face of Scalable Governance — an applied research initiative studying how AI governance can keep pace with AI development and deployment. Built now with existing content; updated as the Scalable Governance manifesto paper and institutional affiliations materialise.

**What this site is not:** A holding page, a personal portfolio, a lab website, or a software product site.

**Primary audience:** Funders (Coefficient Giving, Talos, Cooperative AI Foundation) evaluating whether to support this work. The landing page must do the work a funder needs — why does this matter, what is the research programme, who is behind it, is there evidence — while remaining credible to the secondary audience: academic peers and potential collaborators.

**Voice and register:** Direct, first-person plural ("we"), active voice, precise but accessible. Scholarly without being academic — closer to a policy brief than a journal paper. Concepts are named specifically (symbolic compliance, conformity assessment, regulatory intermediaries) and glossed the first time they appear.

**Self-description:** "Research initiative" — not "lab," not "programme." Scales honestly from one person to several.

**Institutional line:** "An applied research initiative from the TUM Professorship of Societal Computing." Names the chair without claiming a Think Tank affiliation that isn't yet confirmed.

**Evidential discipline:** Every claim on the site must be traceable to a published finding, or marked as the initiative's argument rather than as a result. Where findings come from a single case, the site says so. See "Claims Register" at the end of this document.

---

## Site Structure

```
scalable-governance.ai
├── Landing page (long-scroll, single page)
│   ├── Header (name + descriptor)
│   ├── Hero
│   ├── Research (intro + three thematic blocks)
│   ├── Who We Are
│   ├── What Comes Next
│   ├── Get in Contact
│   └── Footer
├── /research/governance-in-practice         (FAccT26, EWAF25)
├── /research/who-governs-ai                 (AIES26 + related: AIES25)
└── /research/making-governance-scale        (ECAF26, HICSS27)
```

**Removed in v1.3:** The Mission / orientation section. Its second paragraph duplicated the research-area content. Its remaining content (the symbolic-compliance argument, the funding ask) is relocated to "What Comes Next," which sits after Who We Are.

**Not in v1:** Blog/news, hiring section, newsletter signup, partner logos, TAIGA feature, per-paper subpages (papers are presented within their area subpages).

---

## Landing Page

### Header

**Name:** Scalable Governance

**Descriptor line (below the name):** Applied research on AI governance

**Navigation:** Research · Who We Are · Contact (anchor links to landing page sections, plus links to subpages from the Research section)

The descriptor orients the visitor before they scroll. It is not a tagline — it's a functional label. The tagline can be revisited when the manifesto paper crystallises the messaging.

---

### Hero

**Purpose:** State the problem and the need for work on it, in one glance. The hero does not diagnose, does not list research areas, and does not explain the initiative. The research section immediately below does that.

**Content elements:**
- A headline (one sentence, declarative): the pace mismatch
- A single line stating the need
- The institutional line

**Tone:** Confident, direct. Not alarmist, not hedged.

**Draft direction (not final copy):**

> **AI capability and high-risk deployment are advancing far faster than governance can follow.**
>
> To match the pace, we need rigorous research and novel ideas.
>
> An applied research initiative from the TUM Professorship of Societal Computing

**Wording notes:** "far faster" rather than "drastically faster" — "drastically" reads as an intensifier rather than a description of a rate. "High-risk deployment" signals AI Act literacy to readers who will notice it, without requiring a gloss for those who won't.

---

### Research

**Purpose:** Show that the initiative has active, multi-strand research output. A funder should see a coherent programme, not three unrelated studies. An academic should see enough to know whether to click through. With the orientation section removed, this section now carries the full weight of explaining what the initiative does — the block texts must therefore stand on their own.

**Structure:** A short introduction, then three thematic blocks.

---

#### Research introduction

**Purpose:** Frame the three areas as one programme rather than three topics. The connective logic is causal: organisations face uncertainty about what compliance requires, so they turn to external actors to interpret the rules for them, and those actors shape what compliance becomes — which is why both the practice and the intermediaries have to be studied, and why the cost of the whole arrangement makes scaling methods necessary. Two to four sentences. This is the only place on the landing page where the programme is stated as a whole.

**Draft direction (not final copy):**

> Our research follows the path a regulatory obligation takes before it becomes practice. It starts inside organisations, where uncertainty about what the rules require pushes companies toward waiting, avoidance, or reliance on outside interpreters. It follows those interpreters — the certification bodies, consultancies, and standards organisations that decide, in effect, what compliance comes to mean. And it asks how the resulting work can be made to scale, so that governance can keep up with the systems it is meant to govern.

**Note:** The three sentences map to the three areas in order, so a reader encountering the blocks below recognises them as the strands just described. Keep that correspondence if the copy is revised.

---

**Each block contains:**
- The area name (as a heading), linking to the area's subpage
- A short text (2–4 sentences): near-final landing-page copy. This is the text that appears on the landing page, not guidance for writing different text.
- Paper titles listed beneath as evidence of the research strand
- For "Who governs AI?" only: a "Related" line with the Ullstein et al. AIES'25 paper and a contextualising phrase

---

#### Area 1: Governance in Practice

**Landing-page text:**

> What happens inside organisations when they try to implement AI governance, and where does it break down? Surveys and interviews with German SMEs point to uncertainty — about what the AI Act requires, how it will be enforced, and when obligations take effect — as the dominant barrier, pushing companies toward waiting, avoiding high-risk applications, or relying on external advisors to interpret the rules for them. Embedded insider research inside an AI company examines the last mile of that problem: translating legal requirements into work a development team will actually do.

**Paper listings:**
- Jarvers & Papakyriakopoulos (2026). "Engaged AI Governance Through Internal Expert Collaboration." FAccT'26. DOI: 10.1145/3805689.3812341
- Jarvers, Ullstein & Grossklags (2025). "Uncertainty as a Primary Barrier: The EU AI Act's Impact on German SMEs." EWAF'25. *(Jarvers and Ullstein contributed equally.)*

→ /research/governance-in-practice

---

#### Area 2: Who Governs AI?

**Landing-page text:**

> AI regulation does not reach organisations directly. Between the regulator and the regulated sits a chain of actors — certification bodies, consultancies, legal advisors, standards organisations — that interpret and package regulatory requirements, and in doing so shape what compliance means in practice. An embedded case study maps sixteen of them around a single AI company and traces how their templates and assessments come to define what that company treats as compliance.

**Paper listing:**
- Jarvers & Papakyriakopoulos (2026). "Governing by Proxy: How Regulatory Intermediaries Shape EU AI Act Compliance." AIES'26.

**Related publication** (a co-authored analysis of where the AI Act's own framework leaves room for affected communities to participate)**:**
- Ullstein, Jarvers, Hohendanner, Papakyriakopoulos & Grossklags (2025). "Participatory AI and the EU AI Act." AIES'25, 2550–2562. DOI: 10.1609/aies.v8i3.36737

→ /research/who-governs-ai

---

#### Area 3: Making Governance Scale

**Landing-page text:**

> Governance work — interpreting obligations, producing documentation, monitoring systems — is largely manual, expensive, and hard to scale, especially for organisations without dedicated compliance teams. We develop methods to change that: treating regulatory obligations as specifications that drive how systems are built, and using AI agents to maintain governance knowledge while humans keep authority over the decisions that matter.

**Naming note:** Renamed from "AI-Assisted Compliance." Governance-Driven Development is a development methodology, not an AI method — AI appears nowhere in its framework. Filing it under an AI-named heading would misrepresent one of the two papers to exactly the readers most likely to check. The goal-oriented name covers both levers honestly.

**Paper listings:**
- Jarvers & Papakyriakopoulos (2026). "Governance-Driven Development: An AI Act-Centred Framework for AI System Design." ECAF'26.
- Jarvers, Röthemeier, Papakyriakopoulos & Wittges (2027). "Human-AI Collaboration for Scalable AI Governance: An Agentic Knowledge Base Approach." HICSS'27.

→ /research/making-governance-scale

---

### Who We Are

**Purpose:** Put a face and a credential behind the initiative. A funder needs to know who they'd be funding. An academic needs to know who they'd be collaborating with.

**Content:** Two person entries, minimal format.

#### Simon Jarvers — Initiative Lead

- Name
- Photo
- Reference link (LinkedIn or TUM institutional page)
- Bio (2–3 sentences):

> Simon is a researcher at TUM who has worked as AI Governance Officer inside an AI company subject to EU AI Act obligations, running its compliance work while studying it. That dual position gives the research a kind of access external researchers rarely obtain — to intermediary negotiations, internal deliberations, and the artefacts compliance actually produces — alongside the academic independence to publish what it finds. His work spans insider action research, regulatory analysis, and methods for making governance work scale.

**Correction note:** Earlier drafts described Simon as "AI Governance Officer at TUM." Per the papers, the governance role was held at the studied AI company, not at the university. The dual role across two institutions is the point, and stating it accurately is both more honest and more compelling.

#### Orestis Papakyriakopoulos — Advisor

- Name
- Photo
- Reference link (institutional page or Civic Machines site)
- One-line description: "Assistant Professor of Societal Computing at TUM and principal investigator of the Civic Machines Lab."

**Future additions:** Room in the layout to add more people as the initiative grows. The section should accommodate 3–6 entries without a redesign.

---

### What Comes Next

**Purpose:** Convert a reader who has just seen the evidence and the people behind it into a reader who understands what the evidence implies and what support would enable. Placed after Who We Are so the ask arrives last, on top of both demonstrated output and an identified researcher — a funder reaches it having already answered "is there evidence" and "who would I be funding."

This section holds the two pieces of the removed orientation section that the research blocks do not duplicate: the symbolic-compliance argument, and the funding ask with the agenda that justifies it.

**Content: two short paragraphs plus the ask.**

**Paragraph 1 — what the research points to.**

> Across these studies a pattern recurs. Organisations that want to comply cannot easily tell what compliance requires, and the artefacts they produce are built to be evaluated by an auditor rather than to inform their own decisions. We argue this has a structural cause: auditors and supervisory authorities have no direct way to verify that a provider's processes genuinely protect safety, health, and fundamental rights. Documented process is what can be checked. The result is a pull toward symbolic compliance — effort that satisfies an audit without making a system safer, at real cost to the organisations bearing it.

**Paragraph 2 — what would need to happen.**

> Our findings come from sustained embedded access to a single AI company, complemented by a wider study of German SMEs: depth that external researchers rarely obtain, but depth in one place. Almost all work on AI compliance also runs in one direction — translating regulation into checklists for the organisations being governed. Carrying evidence back the other way, from the organisations doing the work to the bodies writing and enforcing the rules, is work no commercial actor is paid to do. Scaling governance means widening the evidence base across more organisations, building a working channel from practice back to policy, and developing methods that reduce the cost of compliance without delegating the judgment it requires.

**The ask (two sentences):**

> This work is currently carried by a single researcher. Funding would extend the research across more organisations and turn its findings into a sustained channel to regulators and standards bodies.

**Evidential note:** "We argue" in paragraph 1 is deliberate and must not be softened to "we find." The unverifiability mechanism is the initiative's analytical position, not a published result — it appears in none of the six papers. It is consistent with what AIES'26 documents about auditor-facing artefacts, but consistency is not evidence. If this argument is to be stated as a finding, it needs to be made in the manifesto paper first.

**Honesty note:** Paragraph 2 names the single-site limitation before a funder discovers it. This is deliberate. Three of the six papers (FAccT'26, AIES'26, HICSS'27) draw on the same AI company — HICSS'27 states this explicitly. A funder who reads the papers will see it. Naming it converts a vulnerability into the justification for the ask.

---

### Get in Contact

**Purpose:** Make the founder reachable and signal what kinds of engagement are welcome, segmented so that different audiences recognise their entry point.

**Content:** A short prompt with three lines of engagement, followed by the email address. Draft direction (not final copy):

> We're looking for partners across three fronts:
> - **Research collaboration** — if you work on AI governance, compliance, or regulatory design and see overlap with what we're doing.
> - **Field sites** — if your organisation is navigating AI regulation and you're open to participating in embedded research.
> - **Funding** — if you support independent research on AI governance and want to learn more about the programme.
>
> Get in touch: simon.jarvers@tum.de

(Switch to a domain-specific address once scalable-governance.ai is live.)

**No contact form.** GitHub Pages doesn't support server-side forms without a third-party service, and the maintenance overhead isn't worth it.

---

### Footer

**Content:**
- Email: simon.jarvers@tum.de
- LinkedIn: Simon Jarvers's personal profile. (Revisit when the initiative has its own presence.)
- Affiliation link: TUM Professorship of Societal Computing
- © line with year

**Not in v1:** Google Scholar, GitHub, Twitter/X.

---

## Research Subpages

Three subpages, one per research area. Each tells the story of a research strand — the question it asks, what the work has found, and what it does not yet show — rather than summarising individual papers. Papers appear as evidence within that narrative, with full citations and poster embeds at the end.

With the orientation section removed, the subpages carry more explanatory weight. Each opens by stating the question the strand investigates, without assuming the reader has read the other two.

### Template

1. **Area narrative** (top, prominent): A plain-language account of the strand — the question, the approach, the findings, and the limits. Policy-brief register. Original writing, not stitched-together abstracts. Weaves the area's papers into a coherent argument without a paper-by-paper walkthrough. 3–4 paragraphs, the last of which states what the work does not establish.

2. **Paper sections** (below the narrative): One section per paper:
   - Paper title and one-line summary of the specific contribution
   - Poster / visual: existing HTML poster artefacts from conference presentations
   - Full citation + link. Format: Authors (Year). "Title." Venue. DOI or URL.

3. **Related publications** (end, where applicable): Citations with a brief phrase explaining the relationship.

### Subpage Content Directions

Content directions for the area narratives — not final copy. All specifics below are checked against the paper texts.

---

#### /research/governance-in-practice

**Area:** Governance in Practice

**Papers:** Engaged AI Governance (FAccT'26), Uncertainty as a Primary Barrier (EWAF'25)

**Narrative direction:**

This area asks what actually happens inside organisations when they try to implement AI governance — not what the rules say, but how they land.

The research comes at this from two directions. A mixed-methods study of German SMEs (EWAF'25) takes the wide view: a survey of 21 companies and 13 semi-structured interviews, analysed into nine themes. Across all of them, uncertainty is the dominant barrier, and it operates at four levels at once — legal (what the Act requires, given open-textured terms like "appropriate" and "proportionate"), practical (what compliance looks like in concrete organisational terms), enforcement (what the consequences of different approaches will be), and temporal (when obligations take effect, given a staggered timeline dependent on standards not yet published). These compound: legal uncertainty makes practical guidance hard to write, practical uncertainty makes cost estimation impossible, enforcement uncertainty makes investment risky. Companies respond by investing proactively, waiting for clarity, avoiding high-risk applications altogether, or relying on external advisors to interpret the rules for them — a response that leads directly into the second research area.

The FAccT'26 study goes deep into one organisation: insider action research at an AI company of fewer than 50 employees, where the first author served as AI Governance Officer. It develops a legal-text-to-action pipeline that decomposes AI Act obligations into 14 concrete requirements across six pillars, then tests them in a 90-minute collaborative workshop with eight members of the development team. Three patterns of engagement emerge. Sometimes compliance converges with what the team already wants — logging infrastructure served both debugging and Article 12 traceability, and the requirement legitimised work the team had wanted to do anyway. Sometimes existing practice already satisfies a requirement, and the compliance work is documenting what is already there. And sometimes requirements are experienced as disconnected overhead: technical documentation was rated high-effort and low-impact, with developers assessing its value beyond compliance as negligible.

The distinction matters for regulatory design. The same obligation can be framed as "document your system so you understand and can improve it" or as "document your system so external parties can verify what you did" — and participants engaged genuinely with the first framing and performatively with the second. The collaborative format shifted governance from something done *to* the team to something done *by* the team. What it did not do is resolve the underlying resource competition: seven of eight participants agreed that governance requirements compete with product quality improvements for limited time.

**What this work does not establish.** The SME sample is small (21 surveys, 13 interviews), self-selected, German, and drawn from a specific implementation window before key standards and guidance were published; it is not representative. The workshop study is a single case at an organisation with an unusually proactive governance orientation and existing ISO certification, and it tracks eight weeks of follow-up, not durable change.

**Paper listings:**
- Jarvers & Papakyriakopoulos (2026). "Engaged AI Governance Through Internal Expert Collaboration." FAccT'26. DOI: 10.1145/3805689.3812341
- Jarvers, Ullstein & Grossklags (2025). "Uncertainty as a Primary Barrier: The EU AI Act's Impact on German SMEs." EWAF'25. *(Equal contribution: Jarvers, Ullstein.)*

---

#### /research/who-governs-ai

**Area:** Who Governs AI?

**Papers:** Governing by Proxy (AIES'26). Related: Ullstein et al. (2025), AIES'25.

**Narrative direction:**

AI regulation does not reach organisations directly. Between the regulator and the regulated sits a chain of intermediaries — standards bodies, certification and audit organisations, legal and compliance advisors, ethics oversight structures, and the organisation's own internal governance function — that interpret, package, and deliver regulatory requirements. Regulatory Intermediaries Theory describes three functions these actors perform: monitoring and verification, interpretation, and facilitation. In the AI Act's case, where obligations are abstract and harmonised standards are still emerging, the interpretive function carries unusual weight.

The AIES'26 study maps sixteen such intermediaries across five groups around a single early-stage AI company, drawing on the first author's embedded position as its AI Governance Officer. Three ecosystem patterns emerge. Intermediaries orient their activities toward making the organisation *compliant* — producing documentation an auditor can evaluate as evidence — rather than toward improving its AI practices. They form layered chains in which each level adds its own interpretation, producing independent and sometimes divergent requirements with no unified account of what they collectively demand. And they shape one another: a certification body's expectations influence what a compliance consultancy puts in its templates, and those templates then shape what the organisation presents back to the certifier.

The mechanism by which this happens is the interpretive choice embedded in an artefact. A risk management template defines what risks get assessed, how impacts are categorised, and how deep the analysis goes. An organisation cannot take the facilitation — the tool for doing the work — without also taking the interpretation. The adaptation from a standard such as ISO/IEC 42005 to a delivered template involves decisions about what to include, simplify, or omit, made by the intermediary and not visible to the organisation receiving it. Estimated total compliance cost for the studied organisation was €50,000–70,000 per year, a substantial commitment for a company of fewer than 50 people, and the documentation it bought functioned primarily as regulatory evidence rather than as a tool the organisation used to make decisions.

The paper's conclusion is deliberately structural rather than accusatory: these dynamics illustrate the conditions under which symbolic compliance can emerge even when every actor is operating in good faith. The implication for AI governance is that regulatory design cannot be evaluated by looking only at the regulator and the regulated. The intermediary layer is where regulation becomes practice.

**What this work does not establish.** This is a single case, in one organisational and regulatory context, observed by a researcher who was also a participant in the processes described. The study documents structural conditions; it does not measure how widespread they are, nor does it establish that intermediary incentives cause symbolic compliance across the sector. The first author's dual role is managed through external co-supervision and reflexive journaling but cannot be eliminated.

**Paper listing:**
- Jarvers & Papakyriakopoulos (2026). "Governing by Proxy: How Regulatory Intermediaries Shape EU AI Act Compliance." AIES'26.

**Related publication** (a co-authored analysis asking where the AI Act's own framework leaves room for affected communities to participate — identifying five clusters of opportunity within the high-risk obligations, none of them mandated)**:**
- Ullstein, Jarvers, Hohendanner, Papakyriakopoulos & Grossklags (2025). "Participatory AI and the EU AI Act." AIES'25, 2550–2562. DOI: 10.1609/aies.v8i3.36737

---

#### /research/making-governance-scale

**Area:** Making Governance Scale

**Papers:** Governance-Driven Development (ECAF'26), Human-AI Collaboration for Scalable AI Governance (HICSS'27)

**Narrative direction:**

AI governance generates a growing burden of interpretation, documentation, and monitoring. This work is largely manual, expensive, and hard to scale — particularly for smaller organisations without dedicated compliance teams. If governance is to keep pace with AI development, some of it has to be done differently. This strand pursues two routes: changing when governance enters the development process, and changing how governance knowledge is maintained.

The first route is Governance-Driven Development (ECAF'26). Current practice separates governance from development — a governance function interprets obligations, translates them into requirements, and imposes them on teams who retrofit systems and documentation to satisfy them. This produces artefacts maintained in parallel to the systems they describe, and requirements teams experience as external impositions. GDD inverts the relationship, treating AI Act obligations as formal specifications that drive development from the outset, by analogy to how Test-Driven Development uses test specifications to drive implementation. It runs two nested cycles: a planning cycle at the management-system level that maps applicable obligations, analyses gaps, and generates a task backlog; and a per-obligation implementation cycle that specifies, builds, verifies, and then generates documentation from the implementation rather than writing it separately. The analogy to TDD is deliberate but imperfect — governance requirements are more ambiguous than unit tests, and different interpretations lead to different implementations.

The second route is knowledge infrastructure (HICSS'27). Organisations must maintain current knowledge of regulatory requirements, standards, and how these apply to their context — knowledge that is inherently cross-referential and that currently lives in individuals and disconnected documents. The study develops an LLM agent maintaining a structured, citation-anchored knowledge base across two layers: a human-authoritative source layer the agent cannot modify, and an agent-moderated knowledge layer where every extracted item carries its source citation and stays marked as proposed until a human approves it. Applied to ISO/IEC 42001 and ISO/IEC 27001 at an AI company, the agent raised 19 flags during extraction, of which 18 were assessed as valid, and identified all 20 items in a seeded recall experiment. Two design principles govern the architecture: the agent proposes and humans decide, and every knowledge item traces to its source.

Both routes share a commitment: automation supports governance work without absorbing the judgment governance requires. Compliance decisions carry accountability, and accountability cannot be delegated to a system that cannot hold it.

**What this work does not establish.** GDD is an early proof of concept covering a small number of obligations; it has not been validated at scale or in production, and the paper leaves open how obligations should be decomposed, how existing systems adopt the method, and whether it can handle the full obligation space without becoming its own compliance burden. The knowledge base evaluation covers two standards documents, one organisational context, and one evaluator — the first author, who was also the system's designer. The seeded experiment tests recall, not precision. The system has not been evaluated on regulatory text such as the AI Act itself, where interpretive ambiguity is considerably greater than in standards documents.

**Paper listings:**
- Jarvers & Papakyriakopoulos (2026). "Governance-Driven Development: An AI Act-Centred Framework for AI System Design." ECAF'26.
- Jarvers, Röthemeier, Papakyriakopoulos & Wittges (2027). "Human-AI Collaboration for Scalable AI Governance: An Agentic Knowledge Base Approach." HICSS'27.

---

## Claims Register

Every substantive claim on the site, with its status. Anything not listed here should not appear.

**Verified findings** (stated as results; source in brackets):
- Uncertainty is the dominant barrier for German SMEs, operating at legal, practical, enforcement, and temporal levels [EWAF'25]
- Four SME strategic responses: proactive compliance, wait-and-see, risk avoidance, reliance on intermediaries [EWAF'25]
- 14 requirements across six pillars; 90-minute workshop, 8 participants [FAccT'26]
- Three engagement patterns: convergence, existing practice, disconnection [FAccT'26]
- 7 of 8 participants agreed governance competes with product work for resources [FAccT'26]
- 16 intermediaries across five groups [AIES'26]
- Three ecosystem patterns: target-oriented intermediation; multilayered chains producing *independent and sometimes divergent* requirements; intermediaries shaping each other [AIES'26]
- €50,000–70,000 annual compliance cost, one organisation [AIES'26]
- GDD's two nested cycles; early proof of concept only [ECAF'26]
- 19 flags, 18 valid on review by the first author; 20/20 seeded recall [HICSS'27]
- Two design principles: human authority, traceability [HICSS'27]

**The initiative's arguments** (must be marked "we argue," never "we find"):
- The verification gap: supervisory authorities cannot directly confirm that a provider's processes protect safety, health, and fundamental rights, so documented process becomes what is checked
- That this gap is the structural cause of the pull toward symbolic compliance

**Claims removed in v1.3** (previously in the spec, not supported by the papers):
- That intermediaries' incentives *cause* symbolic compliance. AIES'26 claims intermediaries orient toward compliance rather than practice improvement, and that this illustrates conditions under which symbolic compliance can emerge *in good faith*. Causal attribution was not made.
- That intermediation chains produce "contradictory" requirements. The paper says "independent and sometimes divergent."
- That compliance is a credence good on the buyer side (organisations unable to evaluate purchased compliance services). Not in any paper, and not the argument.
- "Reveal" as the verb for EWAF'25 findings. The sample does not support it; use "point to" or "suggest."

**Citation corrections applied in v1.3:**
- AIES'25 has five authors (Ullstein, Jarvers, Hohendanner, Papakyriakopoulos, Grossklags), not three
- EWAF'25 equal-contribution marker restored (Jarvers, Ullstein)
- FAccT'26 DOI added: 10.1145/3805689.3812341
- AIES'25 DOI and pages added: 10.1609/aies.v8i3.36737, 2550–2562

**Open verification item:** ECAF'26 and AIES'26 are listed as 2026 publications and HICSS'27 as 2027. Confirm publication status and add DOIs or preprint links before launch; listing forthcoming work without marking it as such would be a credibility problem with exactly the audience that checks.

---

## Content Not in v1 (Deferred)

| Item | Trigger for inclusion |
|---|---|
| Blog / news feed | When there are at least 3 items to post |
| TAIGA feature | When TAIGA is open-sourced and ready for public use |
| Hiring section | When the initiative is actively recruiting (grant-or-co-lead trigger) |
| Newsletter signup | Revisit if the audience grows beyond direct contacts |
| Partner / funder logos | When partnerships are confirmed and partners consent to being listed |
| Think Tank affiliation | When confirmed with Orestis and the Think Tank |
| Detailed theory-of-change page | When the **Scalable Governance manifesto paper** (the FAccT submission due 3 November 2026) is accepted. Note: this is *not* FAccT'26 "Engaged AI Governance," which is already published. Earlier versions of this spec conflated the two. |
| Policy impact section | When there is evidence of the research being cited in policy documents |
| Domain-specific email | When scalable-governance.ai is purchased and configured |

---

## Technical Notes

- **GitHub Pages:** Static site. No server-side functionality. No contact forms without a third-party service.
- **Domain:** scalable-governance.ai (to be purchased). Launch on GitHub Pages default URL first; redirect when domain is live.
- **Poster artefacts:** Existing HTML posters from conference presentations will be embedded or linked on subpages. Ensure they are responsive or wrapped in a scrollable container.
- **Future design:** The site will eventually be designed using Claude Design. This content spec is the input for that process.

---

## Changelog

**v1.4 (2026-09-13):** Research section gains a short introduction framing the three areas as one programme, tracing the path an obligation takes before it becomes practice. "What Comes Next" confirmed and moved to after Who We Are, so the funding ask arrives last.

**v1.3 (2026-09-13):** Mission / orientation section removed; its duplicative content deleted and its non-duplicative content relocated to a proposed "What Comes Next" section. Hero expanded to headline plus a single line on the need for research. Area 3 renamed "Making Governance Scale" (GDD is not an AI method). All subpage narratives rewritten against the paper texts, each now closing with what the work does not establish. Claims Register added. Citation errors corrected (AIES'25 author list, EWAF'25 equal contribution, DOIs). Simon's bio corrected — the AI Governance Officer role was at the studied company, not at TUM. Two FAccT papers disambiguated in the deferred-items table.

**v1.2 (2026-09-13):** Hero reframed around pace-mismatch headline. Mission rebuilt as a logical chain. Research blocks clarified as near-final copy. Bio expanded. Contact segmented.

**v1.1 (2026-09-13):** Initial content specification from structured grilling session. See `website-content-decisions.md`.

---

*Content specification for the Scalable Governance website. Verified against the six paper texts in project knowledge on 2026-09-13.*
