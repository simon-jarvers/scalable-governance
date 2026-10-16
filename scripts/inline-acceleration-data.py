"""Copy data/acceleration.json into the mockup's inline fallback block.

The mockup fetches data/acceleration.json; when opened from disk the fetch fails and it
reads the inlined copy instead. Run this after every change to the data file:

    python3 scripts/inline-acceleration-data.py
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data" / "acceleration.json"
PAGE = ROOT / "docs" / "mockups" / "acceleration-hero.html"

data = json.loads(DATA.read_text(encoding="utf-8"))
payload = json.dumps(data, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")

pattern = re.compile(r'(<script type="application/json" id="acceleration-fallback">\n).*?(\n</script>)', re.S)
html = PAGE.read_text(encoding="utf-8")
html, n = pattern.subn(lambda m: m.group(1) + payload + m.group(2), html)
if n != 1:
    raise SystemExit(f"expected one fallback block in {PAGE}, found {n}")
PAGE.write_text(html, encoding="utf-8")
print(f"inlined {DATA.relative_to(ROOT)} into {PAGE.relative_to(ROOT)}")
