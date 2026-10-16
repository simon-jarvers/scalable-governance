"""Build data/acceleration.json from primary-source files downloaded on 2026-10-16.

Usage: python3 scripts/build-acceleration-data.py <download-dir> data/acceleration.json
       python3 scripts/inline-acceleration-data.py

Needs PyYAML. <download-dir> must contain (sources and dates in data/VERIFICATION.md):
  metr-site/th11.yaml                  https://metr.org/assets/benchmark_results_1_1.yaml
  epoch/ai_chip_sales_timelines_by_chip.csv  https://epoch.ai/data/ai_chip_sales_timelines_by_chip.csv
  ic/output/slides/Figure 2.csv        git clone https://github.com/droodman/inference-cost ic
  eurostat/ai.json                     Eurostat API, isoc_eb_ai, geo=EU27_2020 (URL in the data file)
  aiid/x/mongodump_full_snapshot/      AIID snapshot backup-20261012101643.tar.bz2, extracted
Headline and caption text is written here, next to the numbers it quotes.
"""
import csv, collections, json, sys
import yaml

DL = sys.argv[1]
OUT = sys.argv[2]
ACCESSED = "2026-10-16"
WINDOW_START = "2021-01-01"  # shared time axis for all five lines
csv.field_size_limit(10**9)

# --- Capability: METR Time Horizon 1.1 ---------------------------------------
metr = yaml.safe_load(open(f"{DL}/metr-site/th11.yaml"))
NAMES = {
    "gpt_3_5_turbo_instruct": "GPT-3.5 Turbo Instruct",
    "gpt_4": "GPT-4", "gpt_4_1106_inspect": "GPT-4 Turbo (Nov 2023)", "gpt_4o_inspect": "GPT-4o",
    "claude_3_5_sonnet_20240620_inspect": "Claude 3.5 Sonnet (Jun 2024)", "o1_preview": "o1-preview",
    "claude_3_5_sonnet_20241022_inspect": "Claude 3.5 Sonnet (Oct 2024)", "o1_inspect": "o1",
    "claude_3_7_sonnet_inspect": "Claude 3.7 Sonnet", "o3_inspect": "o3",
    "gpt_5_2025_08_07_inspect": "GPT-5", "gemini_3_pro": "Gemini 3 Pro",
    "claude_opus_4_5_inspect": "Claude Opus 4.5", "gpt_5_2": "GPT-5.2",
    "claude_opus_4_6_inspect": "Claude Opus 4.6",
    "claude_mythos_preview_early_inspect": "Claude Mythos Preview (early)",
}
cap_points, cap_excluded = [], []
for key, r in metr["results"].items():
    m = r["metrics"]
    d = str(r["release_date"])
    if not m.get("is_sota") or d < WINDOW_START:
        continue
    p50 = m["p50_horizon_length"]
    pt = {"date": d, "value": round(p50["estimate"], 2), "unit": "minutes",
          "label": NAMES[key], "ci_low": round(p50["ci_low"], 2), "ci_high": round(p50["ci_high"], 2),
          "source_id": key, "note": ""}
    if p50["estimate"] > 16 * 60:
        cap_excluded.append({**pt, "note": "Excluded: METR states that measurements above 16 hrs are unreliable with the current task suite."})
        continue
    if key == "claude_opus_4_6_inspect":
        pt["note"] = "Wide confidence interval; upper bound above 16 hours."
    cap_points.append(pt)
cap_points.sort(key=lambda p: p["date"])
dt = metr["doubling_time_in_days"]["from_2023_on"]
months = lambda days: round(days / (365.25 / 12), 1)

capability = {
    "label": "Capability",
    "measure": "Length of software tasks (in human expert time) that frontier AI agents complete with 50% success",
    "format": "minutes",
    "axis_label": "Task length (human expert time)", "ticks": [0, 180, 360, 540, 720],
    "headline": {
        "text": "Doubling every ~4 months",
        "value": round(dt["point_estimate"], 1), "unit": "days (doubling time)",
        "basis": f"METR doubling time for frontier models released from 2023 on: {dt['point_estimate']:.0f} days (≈{months(dt['point_estimate'])} months), range {dt['ci_low']:.0f}–{dt['ci_high']:.0f} days. METR excludes points with central estimate above 16 hours from this fit.",
    },
    "caption": f"Since 2023, the length of software tasks that frontier AI agents complete with 50% success has doubled about every four months (range {months(dt['ci_low'])}–{months(dt['ci_high'])} months). Points are the frontier models METR measured; estimates above 16 hours are left out because METR flags them as unreliable.",
    "source": {
        "title": "METR, Task-Completion Time Horizons of Frontier AI Models (Time Horizon 1.1), benchmark_results_1_1.yaml",
        "url": "https://metr.org/time-horizons/",
        "data_url": "https://metr.org/assets/benchmark_results_1_1.yaml",
        "publisher_updated": "2026-09-08",
        "licence": "© METR, all rights reserved. Numbers cited; chart drawn by Scalable Governance.",
        "accessed": ACCESSED,
        "status": "primary",
    },
    "points": cap_points,
    "excluded": cap_excluded,
}

# --- Compute: Epoch AI, Data on AI chip sales -----------------------------------
chips = list(csv.DictReader(open(f"{DL}/epoch/ai_chip_sales_timelines_by_chip.csv", encoding="utf-8-sig")))
LAST_FULL_QUARTER_END = "2026-06-30"  # Q3 2026 is flagged incomplete for several chips
per_q = collections.defaultdict(float)
for c in chips:
    if c["End date"] <= LAST_FULL_QUARTER_END:
        per_q[c["End date"]] += float(c["Compute estimate in H100e (median)"] or 0)
ORDER_BY_SHARE = ["Nvidia", "Google", "Amazon", "AMD", "Huawei", "Cambricon"]
designers = sorted({c["Chip manufacturer"] for c in chips}, key=ORDER_BY_SHARE.index)
comp_points, total = [], 0.0
for end in sorted(per_q):
    total += per_q[end]
    y, m = int(end[:4]), int(end[5:7])
    comp_points.append({"date": end, "value": round(total / 1e6, 3), "unit": "million H100e (cumulative)",
                        "label": f"Q{(m - 1) // 3 + 1} {y}", "note": ""})
comp_points[0]["note"] = "Coverage starts Q1 2022; chips sold earlier are not counted."
comp_points[3]["note"] = "Google TPU figures for Q4 2022 are partial (Epoch flags them incomplete)."
last = comp_points[-1]
compute = {
    "label": "Compute",
    "measure": "Computing power of AI chips sold since 2022, all major designers combined (million H100-equivalents, cumulative)",
    "format": "millions",
    "axis_label": "AI chip capacity (million H100-equivalents)", "ticks": [0, 10, 20, 30, 40],
    "headline": {
        "text": "3.4× more AI computing power each year",
        "value": 3.4, "unit": "× per year",
        "basis": "Epoch AI Trends: the computing power of the total stock of AI chips has grown 3.4× per year since 2022 (90% CI 3.2× to 3.7×; doubling every 6.8 months).",
    },
    "caption": f"The AI chips sold since 2022 add up to about {last['value']:.1f} million H100-equivalents by mid-2026, and this stock has grown about 3.4× per year. The figure combines {', '.join(designers[:-1])} and {designers[-1]}; chips that have been retired are not subtracted.",
    "source": {
        "title": "Epoch AI, Data on AI chip sales (timelines by chip)",
        "url": "https://epoch.ai/data/ai-chip-sales",
        "data_url": "https://epoch.ai/data/ai_chip_sales_timelines_by_chip.csv",
        "publisher_updated": "2026-10-14",
        "licence": "CC BY 4.0. Cumulative totals are our sum of Epoch's quarterly median estimates across chips, as in Epoch's own cumulative view.",
        "accessed": ACCESSED,
        "status": "primary",
    },
    "secondary_stat": {
        "text": "3.4× per year since 2022",
        "value": 3.4, "unit": "× per year (compute stock)",
        "basis": "Epoch AI Trends: compute stock growth 3.4×/year, 90% CI 3.2× to 3.7×, since 2022.",
        "source": {"title": "Epoch AI, Trends in Artificial Intelligence", "url": "https://epoch.ai/trends",
                   "licence": "CC BY 4.0", "accessed": ACCESSED},
    },
    "points": comp_points,
}

# --- Cost: Epoch AI, The plunging price of thought ----------------------------
fig = list(csv.DictReader(open(f"{DL}/ic/output/slides/Figure 2.csv")))
gp = [r for r in fig if r["bench"] == "gpqa" and r["level"] == "0.75"]
# Shown as performance per dollar: the inverse of Epoch's cost per question, so that
# the line rises like the other tabs. The original cost is kept on every point.
cost_points = [{"date": r["date"], "value": round(1 / float(r["cost"]), 2), "unit": "questions per US$1",
                "label": r["model_label"], "cost_usd_per_question": float(r["cost"]),
                "accuracy": round(float(r["acc"]), 4), "note": ""} for r in gp]
cost_points[0]["note"] = "Epoch's report text names this model o3 and dates it 31 Jan 2025 (the o3-mini release date); kept as published."
fold = cost_points[0]["cost_usd_per_question"] / cost_points[-1]["cost_usd_per_question"]
cost = {
    "label": "Cost",
    "measure": "PhD-level science questions (GPQA Diamond) answered per US$1 at 75% accuracy, using the cheapest model available; inverse of Epoch's cost per question",
    "format": "perdollar",
    "axis_label": "PhD-level questions answered per $1", "ticks": [0, 500, 1000, 1500, 2000, 2500],
    "headline": {
        "text": f"$1 now pays for {round(cost_points[-1]['value'], -2):,.0f} PhD-level questions, up from {cost_points[0]['value']:.0f}",
        "value": cost_points[-1]["value"], "unit": "questions per US$1",
        "basis": "Inverse of Epoch AI's lowest cost per question to score 75% on GPQA Diamond: $0.2989 (31 Jan 2025) and $0.000412 (9 Jul 2026).",
    },
    "caption": f"GPQA Diamond is a multiple-choice exam of PhD-level physics, chemistry and biology questions. Answering them at 75% accuracy with the cheapest available model cost about 30 cents per question in January 2025 and 0.04 cents in July 2026, so a dollar now pays for {int(fold)} times as many questions. Across five benchmarks, Epoch AI finds the cost of a given level of AI performance falling about 47% per quarter, roughly 13× per year, since 2023.",
    "source": {
        "title": "Epoch AI, The plunging price of thought (Emberson & Roodman, 22 Sep 2026)",
        "url": "https://epoch.ai/publications/the-plunging-price-of-thought",
        "data_url": "https://github.com/droodman/inference-cost/blob/main/output/slides/Figure%202.csv",
        "data_commit": "9163c17ee7217b9f09ac51bcc71ed64c18c04bc8",
        "licence": "CC BY 4.0 (Epoch AI publication). Modified: values inverted from Epoch's cost per question. The linked code/data repository carries no licence file.",
        "accessed": ACCESSED,
        "status": "primary",
    },
    "points": cost_points,
}

# --- Adoption: Eurostat isoc_eb_ai --------------------------------------------
es = json.load(open(f"{DL}/eurostat/ai.json"))
ids, sz = es["id"], es["size"]
idx = {k: es["dimension"][k]["category"]["index"] for k in ids}
def ev(size, year, geo="EU27_2020"):
    sel = dict(freq="A", size_emp=size, nace_r2="C10-S951_X_K", indic_is="E_AI_TANY", unit="PC_ENT", geo=geo, time=year)
    pos = 0
    for k, n in zip(ids, sz):
        pos = pos * n + idx[k][sel[k]]
    return es["value"][str(pos)]
years = ["2021", "2023", "2024", "2025"]
ad_points = [{"date": y, "value": ev("GE10", y), "unit": "% of enterprises", "label": f"EU, {y}", "note": ""} for y in years]
ad_points[-1]["note"] = "2025 list of AI technologies adds 'generating pictures, videos, sound/audio'."
sizes = {"10-49": "Small (10–49)", "50-249": "Medium (50–249)", "GE250": "Large (250+)"}
breakdown = [{"date": "2025", "size_class": k, "label": v, "value": ev(k, "2025"), "unit": "% of enterprises"} for k, v in sizes.items()]
from decimal import Decimal, ROUND_HALF_UP
r1 = lambda v: str(Decimal(str(v)).quantize(Decimal("0.1"), rounding=ROUND_HALF_UP))
adoption = {
    "label": "Adoption",
    "measure": "EU enterprises (10+ employees) using at least one AI technology (%)",
    "format": "percent",
    "axis_label": "EU enterprises using AI (10+ employees)", "ticks": [0, 5, 10, 15, 20, 25],
    "headline": {
        "text": f"{r1(ad_points[0]['value'])}% → {r1(ad_points[-1]['value'])}%",
        "value": ad_points[-1]["value"], "unit": "% of enterprises",
        "basis": "Eurostat isoc_eb_ai, E_AI_TANY, EU27_2020, 10+ persons employed, 2021 and 2025.",
    },
    "caption": f"The share of EU enterprises with 10 or more employees using AI rose from {r1(ad_points[0]['value'])}% in 2021 to {r1(ad_points[-1]['value'])}% in 2025. Larger firms use it more: in 2025, {r1(breakdown[0]['value'])}% of small, {r1(breakdown[1]['value'])}% of medium and {r1(breakdown[2]['value'])}% of large enterprises. No EU AI figures for 2022; the 2025 list of AI technologies adds image, video and audio generation.",
    "source": {
        "title": "Eurostat, Artificial intelligence by size class of enterprise (isoc_eb_ai)",
        "url": "https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table",
        "data_url": "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_eb_ai?format=JSON&lang=EN&geo=EU27_2020",
        "doi": "10.2908/ISOC_EB_AI",
        "publisher_updated": "2026-06-15",
        "licence": "© European Union, reuse authorised with acknowledgement of the source (Commission Decision 2011/833/EU). Values rounded to one decimal in display.",
        "accessed": ACCESSED,
        "status": "primary",
    },
    "points": ad_points,
    "breakdown": breakdown,
}

# --- Incidents: AI Incident Database snapshot ---------------------------------
SNAP = "backup-20261012101643"
inc = list(csv.DictReader(open(f"{DL}/aiid/x/mongodump_full_snapshot/incidents.csv", encoding="utf-8")))
by_year = collections.Counter(r["date"][:4] for r in inc)
inc_years = [str(y) for y in range(int(WINDOW_START[:4]), 2026)]  # 2026 is a partial year
inc_points = [{"date": y, "value": by_year[y], "unit": "reported incidents", "label": y, "note": ""} for y in inc_years]
incidents = {
    "label": "Incidents",
    "measure": "AI incidents recorded in the AI Incident Database, by incident year",
    "format": "count",
    "axis_label": "Reported AI incidents per year", "ticks": [0, 100, 200, 300, 400, 500],
    "headline": {
        "text": f"{by_year['2025']} reported incidents in 2025",
        "value": by_year["2025"], "unit": "reported incidents",
        "basis": f"Count of incidents.csv rows with a 2025 incident date in AIID snapshot {SNAP} (12 Oct 2026).",
    },
    "caption": f"AI incidents with a 2025 incident date recorded in the AI Incident Database rose to {by_year['2025']}, from {by_year['2024']} in 2024. These are reported incidents: counts reflect media attention and curation as well as occurrence, and past years are revised as incidents are added (snapshot of 12 Oct 2026).",
    "source": {
        "title": f"AI Incident Database, weekly snapshot {SNAP} (incidents.csv)",
        "url": "https://incidentdatabase.ai/research/snapshots/",
        "data_url": f"https://pub-72b2b2fc36ec423189843747af98f80e.r2.dev/{SNAP}.tar.bz2",
        "snapshot_date": "2026-10-12",
        "licence": "CC BY-SA 4.0. Chart redrawn from AIID data and shared under CC BY-SA 4.0.",
        "accessed": ACCESSED,
        "status": "primary",
    },
    "points": inc_points,
}

out = {
    "_meta": {
        "description": "Data behind the acceleration chart in the Scalable Governance hero. Every number shown on the page resolves to an entry here. See data/VERIFICATION.md.",
        "built": ACCESSED,
        "order": ["capability", "compute", "cost", "adoption", "incidents"],
        "window": [WINDOW_START, ACCESSED],
        "display": "All five lines share one time axis. The y-axis shows the selected measure in its own units (ticks per measure); the other four are drawn in grey on their own scales, for timing only.",
    },
    "capability": capability, "compute": compute, "cost": cost, "adoption": adoption, "incidents": incidents,
}
json.dump(out, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
open(OUT, "a").write("\n")
print("fold", fold, "inc", {y: by_year[y] for y in inc_years}, "cap", len(cap_points), "excl", [p["label"] for p in cap_excluded])
