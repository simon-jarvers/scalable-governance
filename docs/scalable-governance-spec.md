# Scalable Governance — Initiative Scoping Document

Version 2 · September 2026

An independent applied research initiative working out how AI governance can keep pace with the speed at which AI is built and deployed. Much of its work studies how organisations actually try to meet AI rules on the ground, especially smaller companies without the resources of large firms, and brings that real-world evidence back to the regulators and standard-setters who write the rules.

**Self-description:** "Research initiative" — not "lab," which implies a team that does not yet exist, and not "programme" as the primary descriptor. It scales honestly from one person to several. "Lab" in this document refers only to the TUM Think Tank's own construct, which genuinely carries that name.

---

## Problem / Motivation

AI capability and high-risk deployment are advancing faster than the rules meant to govern them can keep up. The obvious risk is that governance simply lags and does little. The subtler risk is that it produces the appearance of compliance without the substance, and we argue there is a specific mechanism behind this. Auditors, notified bodies, and market surveillance authorities have no direct way to verify that a provider's processes genuinely protect safety, health, and fundamental rights. Effectiveness is not observable from the outside; documented process is. When documentation is the only thing that can be checked, compliance converges on what is checkable — symbolic compliance, meaning effort that satisfies an audit without making a system safer, at real cost to the organisations bearing it, especially small ones. Both risks feed the same political danger: a backlash that regulates the wrong things.

**Epistemic status of the mechanism.** The verification gap described above is the initiative's analytical position, not a published finding. It appears in none of the six papers to date. It is consistent with what the intermediary study (AIES'26) documents about auditor-facing artefacts, but consistency is not evidence. Establishing it is a job for the manifesto paper. Until then it is stated as "we argue," never "we find." This distinction has collapsed repeatedly across working sessions, which is why it is marked here at the source rather than caught downstream each time.

There is a specific gap the initiative exists to fill. Most of the effort around AI compliance flows in one direction, translating regulation into checklists and tasks for the organisations being governed. The opposite direction barely exists. Almost no one carries evidence from the organisations actually doing the work, particularly under-resourced ones, back to the bodies writing and enforcing the rules, because no commercial actor is paid to close that loop. That is the space Scalable Governance occupies.

Without an organisational vessel, this work stays a single dissertation contribution and never reaches the people who set the rules. The vessel is what turns one researcher's findings into a durable channel between practice and policy.

## Goals

1. Establish Scalable Governance as a recognisable research programme and public identity (a name, a clear argument, one concrete piece of evidence) within roughly twelve months.
2. Produce credible, independent evidence about how governance can be made to keep pace with AI, and get it in front of regulators, standards bodies, and the research community.
3. Move the evidence base beyond a single organisation to several.
4. Secure founding funding sufficient to move from a solo effort to a small team.
5. Stay independent enough of the organisations it studies to publish what it finds, without cutting itself off from real-world practice.

## Non-Goals

1. Not a compliance-software vendor or a consultancy selling companies a way to pass their audits. Any tooling the initiative builds is an open instrument, not the reason it exists.
2. Not compliance-as-a-service, and not paid conformity assessments (formal audits of whether a company meets the rules) of the companies it studies, inside the research core. Any such paid activity is walled off into a separate commercial arm, if it happens at all, and not in the first years.
3. Not the founding of a legal entity during the solo phase. Identity comes before institution.
4. Not building convening or network infrastructure from scratch while solo. Existing channels are borrowed rather than rebuilt.
5. Not, in the near term, a build-out into every possible governance area at once. The mission is deliberately broad, but the first phase stays focused; new areas are added as the work demands them.

## Context and Constraints

The intended home is the TUM Think Tank ecosystem, with Orestis Papakyriakopoulos as academic sponsor and formal principal investigator. The reference model is his Civic Machines Lab. The Think Tank explicitly incubates labs designed to graduate into independent ventures beyond it, so the embed-first-then-spin-out path is the designed trajectory here rather than a workaround. Orestis is supportive in principle. The hosting arrangement itself is not yet confirmed, and public materials name only the TUM Professorship of Societal Computing until it is.

Several legal and financial realities shape the form. A "lab" at the Think Tank is a brand and a team, not a legal entity. German universities require a professor as the formal grant-holder for third-party funds, so Orestis sits in the funding chain by necessity. Staff, including the founder, would be employed by TUM on the TV-L public pay scale and fixed-term under WissZeitVG. The university levies overhead on grants, in the rough range of ten to twenty-two percent, negotiable with philanthropic funders, some of whom (notably Coefficient Giving, formerly Open Philanthropy) push back on high university overhead.

Independence is the constraint on every downstream decision. The organisations that AI regulation governs may serve as field sites but never as paymasters of the research core, because independence here means the freedom to publish an unwelcome finding. It does not mean refusing all industry money or cutting off from practice, which would be just as damaging. Any industry engagement is tested against four questions. Can the partner veto or delay a finding they dislike? Does payment depend on reaching a particular conclusion, such as a pass or a certificate? Is any single client large enough that losing them would soften what the initiative is willing to say? Is the initiative selling a verdict, or co-developing a method and buying access to study practice? The first three must be clean and the fourth must be method-or-access, not verdict.

Personal and calendar constraints bound the near term. The current contract runs to August 2027. The Scalable Governance manifesto paper (a FAccT submission) and the KI Handlungsfähigkeit report are both due 3 November 2026. The founder will run the initial phase solo, and the two most depleting kinds of work — outreach-and-coordination and grant-writing — are also central to the initiative. The phase design has to route around that mismatch rather than discover it later.

Three working assumptions carry risk. That a channel to regulators and standard-setters exists (partly de-risked, since the Think Tank already runs JURI-committee, GDPR-reform, and AI4POL relationships). That organisations will participate beyond the first site (a clinic model would scale this later). That a sustainable organisational model exists post-PhD (unresolved, and deliberately deferred).

## Approach / Design

The initiative's core work is gathering evidence and moving it to where it can make a difference. It runs empirical research inside AI providers and developers, weighted toward smaller organisations that lack the resources to make their experience heard, and carries the findings up to the bodies that write and enforce the rules: the EU AI Office, national AI safety institutes, market surveillance authorities, and standards bodies.

The mission is broad on purpose. Scalable Governance means working out how governance can keep pace with AI as capability and deployment accelerate. That pace-matching idea is the north star, and it is both more distinctive and more motivating than the generic framing of operationalising governance.

### The three research areas

The research to date falls into three areas that together trace the path a regulatory obligation takes before it becomes practice. Treat these as how the work so far is categorised, not as the boundaries of the field.

- **Governance in Practice** — what happens inside organisations that try to implement AI governance, and where it breaks down. Insider action research at an AI company (FAccT'26, "Engaged AI Governance Through Internal Expert Collaboration") and a mixed-methods study of German SMEs (EWAF'25, "Uncertainty as a Primary Barrier").
- **Who Governs AI?** — the actors sitting between regulator and regulated that interpret and package requirements and in doing so shape what compliance means in practice. An embedded case study mapping sixteen intermediaries around one company (AIES'26, "Governing by Proxy"), with a co-authored analysis of participation opportunities under the Act (AIES'25, "Participatory AI and the EU AI Act") as related work.
- **Making Governance Scale** — methods that reduce the cost of governance work without delegating the judgment it requires: treating regulatory obligations as specifications that drive how systems are built (ECAF'26, "Governance-Driven Development"), and an agentic knowledge base maintaining governance knowledge under human authority (HICSS'27, "Human-AI Collaboration for Scalable AI Governance").

The connective logic between the three is causal. Uncertainty about what compliance requires pushes organisations toward external interpreters; those interpreters shape what compliance becomes; the cost of the resulting arrangement is what makes scaling methods necessary.

**Area three is deliberately not named for AI.** Governance-Driven Development is a development methodology and contains no AI component — AI appears nowhere in its framework. Filing it under an AI-named heading such as "AI-Assisted Compliance" would misrepresent it to exactly the readers most likely to check. The goal-oriented name covers both levers honestly: better development methods, and AI support where AI is actually involved.

**What intermediaries do and do not explain.** The intermediary study documents that intermediaries orient their activities toward making an organisation compliant — producing documentation an auditor can evaluate — rather than toward improving its AI practices, and that this illustrates the structural conditions under which symbolic compliance can emerge even when every actor operates in good faith. It does not claim that intermediary incentives *cause* symbolic compliance, and the initiative must not claim it either. The causal weight sits on the verification gap above.

### The evidence base

The evidence is unusually deep and unusually narrow, and both halves matter. Three of the six papers (FAccT'26, AIES'26, HICSS'27) draw on the same AI company, where the founder served as AI Governance Officer while researching the compliance work he was running. EWAF'25 is the only wide-sample study; AIES'25 is document analysis. That dual-role access is the initiative's distinctive research asset and the reason the findings exist at all — it reaches intermediary negotiations, internal deliberations, and the artefacts compliance actually produces, which external researchers rarely see. It is also a single site. External communication names this openly rather than waiting for a funder to discover it, and the narrowness is precisely what the ask is for.

### Communication

Communication leads with the pace mismatch and lets the research carry the explanation. The public framing states the mismatch, notes that matching it needs rigorous research and new ideas, and then presents the three areas as one programme. There is no separate mission or theory-of-change statement on the website — it duplicated the research areas and was cut. The symbolic-compliance argument and the funding ask arrive after the evidence and after the people behind it.

The AI-to-govern-AI hook ("whether and how we should use AI to help govern AI") was considered and dropped. It misrepresents the portfolio, since one of the two papers it would headline contains no AI, and it narrows a mission that is deliberately broad.

### Phasing

Phase 0, now, solo, roughly twelve months, establishes the programme and identity without founding anything. A named page lives under the Think Tank roof once hosting is confirmed. Existing policy channels are borrowed rather than built. The founder keeps his hands on research production, which is where his energy is, and sequences the draining coordination work to arrive with a future co-lead rather than before one. The tangible deliverables are the manifesto paper and a public-facing website, treated as a single workstream with two surfaces. A grant application follows those outputs rather than preceding them.

Phase 1 begins at the grant-or-co-lead trigger, when the initiative becomes a team. It recruits one or two complementary collaborators, prioritising someone energised by the coordination and outreach work the founder finds depleting, with candidates possibly including Caro or Naira. A lab-manager role, on the Civic Machines model, may follow once funding covers it. A plausible first project is widening the TAIGA research agenda, potentially in partnership with the TUM Think Tank AI clinic — gated on TAIGA being open-sourced and ready for public use, which it currently is not.

Phase 2, later, formalises the two-entity structure. A gGmbH holds the research core, runs on grants and philanthropy, and publishes freely. A separate commercial GmbH holds any paid work, such as co-developing compliance methods with industry partners, supporting TAIGA, and possibly formal assessment work, with its own staff and branding and, ideally, surplus flowing back to fund the gGmbH. That separation is what lets paid industry partnership coexist with a research core whose independence is protected by structure rather than by abstinence.

### The MVP

The MVP is not an operating entity. It is a fundable research programme with a name, an argument, and evidence, assembled largely from work already committed.

The single artifact is the **Scalable Governance manifesto paper**, the FAccT submission due 3 November 2026. This is distinct from FAccT'26 "Engaged AI Governance," which is already published with a DOI. Earlier versions of this document conflated the two; they must stay separate.

The single surface is the **website** — not a re-skin of the paper, as earlier planned, but a standalone funder-facing argument with the six papers as evidence. Its content specification (currently v1.4) governs structure and copy, and a claims register within it separates published findings from the initiative's arguments. A separate design system document governs the visual build.

The single new piece of evidence is a finding drawn from more than one organisation, seeded solo with two or three field sites and scaled later by a clinic model. The single ask is one grant application, for which the first three items are the pitch. Funding, if it lands, pays for the transition out of the solo phase.

## Key Decisions

1. **A research initiative, not a product company.** The alternative — a software product or consultancy selling compliance services — was considered and set aside. It forfeits the credibility-through-independence that the policy-influence mission depends on, and it competes in a crowded compliance-tooling market, which is the weakest available position. Any tool the initiative builds stays an open instrument.
2. **The main audience is regulators, standards bodies, and the research community; the companies studied are field sites, not clients.** The distinctive move is carrying evidence from practice back toward the rule-makers, a direction almost no one else covers. (The website's primary audience is narrower — funders — because its job is securing the resources to do the above.)
3. **Independence means the freedom to publish, not the absence of industry money.** The two-entity structure is the enabling mechanism, and the four-part test above is the working check for any engagement.
4. **Embed first, spin out later.** Founding an entity now was rejected as premature and irreversible legal overhead. Full independence from the start was rejected as autonomy the initiative cannot yet fund and legitimacy it does not need to manufacture. The initiative is positioned as a separately-named sibling initiative under Orestis's sponsorship, not as a sub-brand of Civic Machines.
5. **The solo phase builds the case, not the institution.** Identity before institution. Committed obligations — the papers — become the launch materials rather than net-new work. TAIGA's open-sourcing is not among them; it is not ready.
6. **Broad mission, plain front door.** The initiative is named and scoped for the broad pace-matching challenge. Communication leads with the pace mismatch. The AI-to-govern-AI hook was dropped for misrepresenting the portfolio and narrowing the mission.
7. **Evidential discipline.** Every public claim is traceable to a published finding or marked as the initiative's argument. The verification-gap argument is marked "we argue" until the manifesto paper establishes it. Single-case findings are labelled as such. Paraphrases of published findings are checked against the paper text, not against earlier paraphrases.

## Dependencies

Orestis's continued sponsorship and willingness to act as formal PI; confirmed supportive in principle. The Think Tank hosting a separately-named sibling initiative rather than only a project line. Funder appetite from Coefficient Giving, Talos, or the Cooperative AI Foundation, currently unconfirmed. The internal state and availability of the TUM Think Tank AI clinic, currently unknown. Completion and, ideally, acceptance of the manifesto paper by its 3 November deadline.

## Open Questions

**Blocking** (resolve before the grant pitch, the website launch, or Phase 1 commitment):

1. **Publication status of the forthcoming papers.** ECAF'26 and AIES'26 are dated 2026 and HICSS'27 is dated 2027. Confirm acceptance status and obtain DOIs or preprint links before the website launches or the grant application goes out. Listing forthcoming work without marking it as such is a credibility problem with exactly the audience that checks. Currently the most pressing blocker.
2. **The concrete shape of the new evidence.** Which two or three organisations, and can they be secured solo before a grant lands? This gates the MVP.
3. **The framing of the manifesto paper** so it carries the necessity, feasibility, and research direction of Scalable Governance rather than a narrow result — and so it establishes the verification-gap argument that public materials currently have to hedge. Due 3 November.

**Deferrable** (decide during execution, with named triggers):

4. The AI clinic as partner or kickstarter. Blocked on information, not decision. Trigger: one conversation with Orestis on the clinic's stage, ownership, and whether there is room for Scalable Governance.
5. The long-term sustainability model — a philanthropically funded standing institute versus a social enterprise whose commercial arm funds the research core. Trigger: a survey of the existing compliance-tooling landscape, a signal on which funders actually bite, and the clinic decision. A late-2026 exploration, not a commitment for this document.
6. The co-lead. Who, and are they genuinely energised by coordination and outreach rather than a second researcher with the founder's own profile? Midterm, candidates possibly including Caro or Naira or someone new.
7. Whether the initiative stays focused on smaller organisations once funding pressure arrives, or drifts toward whoever will pay.
8. Whether "credence good" is named explicitly in public materials, or the verification mechanism is stated in plain language only. Naming it buys precision with readers who know the literature and costs a gloss for everyone else. Unresolved.

## Next Steps

1. **Verify publication status** of ECAF'26, AIES'26, and HICSS'27, and collect DOIs or preprint links. Gates both the website launch and the grant application. Owner: Simon.
2. **Write the Scalable Governance manifesto paper** (FAccT submission), arguing why the problem matters, that it is tractable, and where the research is headed — and establishing the verification-gap argument. Owner: Simon. Due 3 November 2026.
3. **Build the website** from the content specification: a standalone funder-facing argument with the papers as evidence. Owner: Simon.
4. **Have the Orestis conversation.** Confirm sibling-initiative hosting and PI sponsorship, and get the AI clinic details. Owner: Simon.
5. **Seed the evidence** by identifying two or three organisations reachable solo.
6. **Draft one grant application** to Coefficient Giving, Talos, or the Cooperative AI Foundation, once the paper and website exist to anchor it.

---

## Changelog

**v2 (2026-09-13):** Reconciled with the website content work. Symbolic compliance re-grounded on the verification gap rather than framed as a parallel failure mode, with an explicit epistemic-status marker. The claim that intermediary incentives cause symbolic compliance removed and replaced with what the paper actually supports. Research areas replaced with the three settled names and full paper mapping, including EWAF'25, which was previously absent. Area three's non-AI naming rationale recorded. AI-to-govern-AI hook recorded as considered and dropped. New section on the depth and narrowness of the evidence base. Manifesto paper disambiguated from FAccT'26 throughout. Website reclassified from re-skin to standalone argument. TAIGA moved out of Phase 0 deliverables and gated on readiness. "Lab" and "post-PhD lab" replaced with "research initiative." Think Tank hosting marked unconfirmed. Key decision 7 (evidential discipline) added. Publication-status verification added as the leading blocker.

**v1 (2026-09-12):** Scoping document generated from conversation.

---

*Plan of record for Scalable Governance. Review the open questions before sharing or acting on this document.*
