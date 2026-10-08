---
target: workflow page
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 0
target_identity: "file:/home/user/scalable-governance/agentic-governance-workflow/index.html"
target_fingerprint: "sha256:e9f9db9afeec9e0394c1bdbaf7bcae32a214adbda0c1a4b750192ba3f0fa0de5"
target_path: /home/user/scalable-governance/agentic-governance-workflow/index.html
timestamp: 2026-10-08T21-36-15Z
slug: agentic-governance-workflow-index-html
---
Method: dual-agent (A: design review sub-agent · B: detector + browser sub-agent). Re-run after impeccable round 1.

## Design Health Score (7, 10 n/a)
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | Publication detail height jumps 596→826px between tabs; on mobile the panel updates out of view |
| 2 | Match system / real world | 3 | Landing uses "agent skills", "System impact", "AI coding agents" without gloss; Workflow jargon |
| 3 | User control and freedom | 3 | Mission nav Contact leaves the page that holds the funding ask; mobile TOC static |
| 4 | Consistency and standards | 2 | Workflow chain has 4 steps (no System impact); chain drawn 3 ways; layers figure 2px ink border + Title Case; scrolled tagline 9.375px |
| 5 | Error prevention | 3 | mailto silent failure mitigated by copy button |
| 6 | Recognition rather than recall | 3 | Mobile list/detail separated |
| 7 | Flexibility | n/a | |
| 8 | Aesthetic and minimalist | 3 | Abstract walls; repeated mission CTA; 5 contact actions |
| 9 | Error recovery | 3 | Copy failure message good |
| 10 | Help | n/a | |
| Total | | 23/32 (72%) | Good |
Per page: landing 23/32 (was 21), mission 24/32 (was 21), workflow 22/32 (was 22).

## Verdict
Content layer specific (hero chain with System impact as the one blue node, argument/aim tags, Illustrative tag, publication status, regulatory chain, GDD cycle). Shell still generic (frosted pill nav, rounded blue cards). Detector: 30 findings, all false positives or token-doc drift except line length 88-101 chars in Mission and Workflow articles at 1440. No contrast failures (min 5.47:1), no visible text under 12px except the scrolled nav tagline (9.375px, found by A), no horizontal overflow.

## Priority Issues
- [P1] Funding ask buried on Mission and route splits: Support is section 7/7 after 8 FAQs; title block has no thesis or pointer; nav Contact on Mission goes to ../#contact. Fix: thesis + "Support this work" link in title block, nav Contact → #support on Mission, consider FAQ after Support. Command: clarify.
- [P1] Credibility proof too late on landing: venues sit ~1,800px down. Fix: text line under hero affiliation listing published/forthcoming venues, linked to #research. Command: clarify, polish.
- [P2] Publication browser unstable and text-heavy: min-height or clamp abstract with disclosure (verbatim kept); mobile scroll selected panel into view. Command: distill, adapt.
- [P2] Compliance chain inconsistent: Workflow GDD chain drops System impact; three renderings; layers figure border/casing. Command: polish (extract component).
- [P2] Small-text break and small mobile targets: scrolled tagline 9.375px; nav toggle 31px tall, copy button 29px, text links 19px. Command: harden, adapt.
- Also: article line length 88-101ch on Mission/Workflow desktop (detector, true positive). Command: typeset.

## Persona Red Flags
Funder: no scale of ask (amount, duration, team size); no verification links on people cards; distinctive asset (embedded access) only in Mission "Why us"; no forwardable summary. Jordan: unglossed terms on landing; no "what happens next" after funding email. Casey: funding ask ~5,900px down; small nav toggle; abstract 1.5 screens. Sam: 9.4px tagline; tabpanels not focusable; slider has no numeric readout; dot grid rAF runs while idle.

## Minor
Blue top rule on the aim beat bends One Pointer; landing accordion leaves 40% empty; "Copied." shifts centred row; Mission "How we work" lead repeats first paragraph; possible unmarked claims (mission:89, 111, 112); Workflow has no closing next step; landing footer has no email.

## Questions
Problem vs unfair advantage in the hero? What would make the chain or the rings the brand rather than a card? Does the ask need an order of magnitude and timeframe?
