# Acceleration chart: verification log

Checked on 16 Oct 2026 against each publisher's own data or report. Every number on the chart
comes from `data/acceleration.json`, which `scripts/build-acceleration-data.py` builds from the
downloaded files listed below. Nothing in the file comes from secondary reporting.

## Status by tab

| Tab | Status | Primary file checked |
|---|---|---|
| Capability | Verified | METR `benchmark_results_1_1.yaml` (page last updated 8 Sep 2026) |
| Compute | Verified | Epoch AI `ai_chip_sales_timelines_by_chip.csv` (updated 14 Oct 2026) and epoch.ai/trends |
| Cost | Verified | Epoch AI report page and its data repo, `output/slides/Figure 2.csv` at commit `9163c17` |
| Adoption | Verified | Eurostat API, `isoc_eb_ai` (data updated 15 Jun 2026) |
| Incidents | Verified | AIID snapshot `backup-20261012101643.tar.bz2`, `incidents.csv` (sha256 `01d0ae55…c218683`) |

## Left out

- **Claude Mythos Preview (early), 1,044.8 min (≈17.4 h).** Above 16 hours. METR's page states
  that "measurements above 16 hrs are unreliable with our current task suite". The point is kept
  in the data file under `capability.excluded` but is not drawn.
- **Models above 10²⁵ FLOP (earlier compute tab, replaced).** Epoch's tracker stops at 33 models
  (latest May 2025) and Epoch has published no current count, so the tab now shows global AI
  chip capacity instead.
- **Q3 2026 chip sales.** Epoch flags the quarter incomplete for several chips; the series ends Q2 2026.
- **AI Index figures** (incidents 233 / 362, cost "280×"). They were replaced by the primary data.

## Corrections to the handoff and the old mockup

- **Capability.**
  - GPT-4 is 3.99 min (mockup had 5).
  - Claude 3.7 Sonnet is 60.4 min (mockup had 59).
  - Opus 4.6 is 718.8 min, confirmed. Its interval runs from 317 to 3,634 min.
  - Doubling time for models from 2023 onwards is 128.7 days, about 4.2 months (range 104–158 days).
  - METR's file does not say what kind of interval this range is, so we call it a "range".
  - The METR page is now marked "no longer actively updated".
- **Compute.**
  - The tab now shows the installed computing power of AI chips sold since 2022, all designers
    combined: 31.6 million H100e by Q2 2026, growing 3.4× per year since 2022 (90% CI 3.2–3.7×,
    Epoch Trends).
  - Cumulative totals are our sum of Epoch's quarterly median estimates across chips, which is
    how Epoch's own cumulative view works. Retirements are not subtracted, as in Epoch's data.
  - The AI Index 2026 chart of the same data shows 17.07M for Q4 2025. Epoch's current data
    gives 20.3M for that quarter, so Epoch has revised its estimates upward since. We use the
    current data.
  - Q4 2022 Google TPU figures are partial (flagged incomplete by Epoch) and are included.
  - The old mockup's "4–5× per year since 2010" (training compute) is dropped.
- **Cost.**
  - The report's headline is confirmed: about 47% per quarter, or 13× per year, since 2023.
  - The chart series is cost per question to reach 75% on GPQA Diamond: $0.30 (31 Jan 2025) to
    $0.00041 (GPT-5.6 Luna, 9 Jul 2026), which is 725×.
  - Two labelling quirks in Epoch's data are kept as published:
    - The first point is named "o3 (high)" and dated 31 Jan 2025, which is the o3-mini release date.
    - "Gemini 2.5 Pro (Jun 2025)" is dated 25 Mar 2025.
- **Adoption.**
  - 2023 is **8.06%, so 8.1** (not 8.0).
  - 2025 is 19.95%, displayed as 20.0%.
  - 2021 is 7.65%, displayed as 7.7%.
  - 2025 by size: small 17.00%, medium 30.36%, large 55.03%.
- **Incidents.**
  - The snapshot gives 309 incidents for 2024 and 457 for 2025, against the AI Index's 233 and 362.
    The gap is consistent with retroactive additions.
  - Counts are by the incident `date` field.
  - 2026 is a partial year and is not drawn.

## Comparability caveats (stated on the page)

- **Eurostat.**
  - There are no AI figures for 2022.
  - In 2025 the list of AI technologies adds "generating pictures, videos, sound/audio". So the
    2024→2025 rise partly reflects a wider definition, although Eurostat itself compares the two years.
- **AIID.** These are reported incidents. Counts depend on reporting and curation and are revised
  over time. The redrawn chart is labelled CC BY-SA 4.0.
- **METR.** © METR, all rights reserved. We cite the numbers and draw our own chart; nothing of
  METR's is embedded.

## Not checked in this stage

- Bitkom barriers and governance-gap figures (text claims, not on the mockup).
- AI Act timeline, Regulation (EU) 2026/1744 (only needed if used as event markers).
- Germany-only adoption. Eurostat's values are in the downloaded data: 10.6% (2021),
  11.6% (2023), 19.8% (2024) and 26.0% (2025), firms with 10+ employees. They are not in the
  chart while Germany vs EU is still undecided.

## Open questions for Simon

- EU or Germany for adoption.
- Final chart title. The mockup uses "Five measures of how fast AI is moving" as a placeholder.
  Headline wording is also open.
