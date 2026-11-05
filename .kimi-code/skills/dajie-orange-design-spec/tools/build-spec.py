#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
设计规范总览生成器
═══════════════════════════════════════════════════════════════
把分散在各个源文件里的内容，合成「一个」可以直接打开检查的页面：

    输入（源，唯一真实来源）
      assets/design-tokens.css     → 所有 token，原样注入 :root
      assets/patterns.css          → 布局变体样式
      assets/showcase.html         → 19 个组件板块（组件母版）
      tools/variants/*.html        → 每个布局变体（一个文件 = 一个母版）
      references/patterns.md       → 变体登记表（取 P 编号与适用说明）

    输出（生成物，不要手改）
      tools/设计规范总览.html

用法：
    python3 assets/../tools/build-spec.py          # 只生成
    python3 tools/build-spec.py --open             # 生成并打开浏览器

新增组件/布局的流程：
    1. 往 variants/ 丢一个 html（或往 showcase.html 加一段 <section>）
    2. 重新跑本脚本
    3. 打开总览页检查
═══════════════════════════════════════════════════════════════
"""
import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
TOOLS = ROOT / "tools"
VARIANTS = TOOLS / "variants"
OUT = TOOLS / "设计规范总览.html"


def die(msg):
    print(f"\n✗ 构建中止：{msg}", file=sys.stderr)
    sys.exit(1)


def read(p, what):
    if not p.exists():
        die(f"找不到{what}：{p}")
    return p.read_text(encoding="utf-8")


# ── 1. 读源文件 ─────────────────────────────────────────────
tokens = read(ASSETS / "design-tokens.css", " Token 文件")
patterns = read(ASSETS / "patterns.css", "变体样式")
view = read(ASSETS / "showcase.html", "组件母版")
drawer = read(ASSETS / "studio-drawer.html", "调参抽屉")

m = re.search(r":root\s*\{.*?\n\}", tokens, re.S)
if not m:
    die("design-tokens.css 里找不到 :root 块")
root_block = m.group(0)
token_keys = re.findall(r"(--[a-z0-9-]+)\s*:", root_block, re.I)
print(f"· Token：{len(token_keys)} 个变量")

# ── 2. 用 token 文件替换页面里的 :root（这是「改 token → 页面跟着变」的链路）──
view, n = re.subn(
    r":root\s*\{.*?\n\s*\}",
    lambda _: root_block,
    view,
    count=1,
    flags=re.S,
)
if n != 1:
    die("组件母版里没有可替换的 :root 块")
print("· :root 已由 design-tokens.css 注入")

# 母版里出现过、但 token 文件里没有的变量 → 报出来，避免静默失效
used_vars = set(re.findall(r"var\((--[a-z0-9-]+)", view, re.I))
missing = sorted(used_vars - set(token_keys))
if missing:
    print(f"  ⚠ 页面用到但 token 未定义：{', '.join(missing)}")
else:
    print("· 变量闭合检查：页面所有 var() 都有定义")

# ── 3. 注入变体样式 ─────────────────────────────────────────
# 顺手把 token 值同步回组件母版自己的 :root：
# 这样单独双击 showcase.html 也能正常显示（缺 var 时高度会塌成 auto），
# 权威值仍在 design-tokens.css，每次构建会自动重新同步，不会漂。
showcase_path = ASSETS / "showcase.html"
raw_showcase = showcase_path.read_text(encoding="utf-8")
synced, n = re.subn(r":root\s*\{.*?\n\s*\}", lambda _: root_block, raw_showcase, count=1, flags=re.S)
if n == 1 and synced != raw_showcase:
    showcase_path.write_text(synced, encoding="utf-8")
    print("· 组件母版的 :root 已同步（单独打开也不会失效）")

style_block = (
    "\n<style id=\"patterns-css\">\n/* 由 build-spec.py 注入自 assets/patterns.css，勿在此手改 */\n"
    + patterns.strip()
    + "\n</style>\n</head>"
)
view, n = re.subn(r"</head>", lambda _: style_block, view, count=1, flags=re.I)
if n != 1:
    die("组件母版缺少 </head>")
print("· patterns.css 已注入")

# ── 4. 变体：每个 variants/*.html 抽 <section> 内联进来 ──────
registry = read(ROOT / "references" / "patterns.md", "变体登记表")
reg_rows = {}
for line in registry.splitlines():
    if line.startswith("| P-"):
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cells) >= 3:
            reg_rows[cells[2].strip("`")] = {"pid": cells[0], "summary": cells[3] if len(cells) > 3 else ""}

files = sorted(p for p in VARIANTS.glob("*.html") if p.name != "gallery.html")
if not files:
    print("  ⚠ variants/ 下没有变体")

parts = []
collected = []
toc_variants = []
for idx, f in enumerate(files, 1):
    html = f.read_text(encoding="utf-8")
    sec = re.search(r"<section[\s\S]*?</section>", html)
    if not sec:
        print(f"  ⚠ {f.name} 里没找到 <section>，跳过")
        continue
    frag = sec.group(0)
    vid = (re.search(r'data-variant="([^"]+)"', frag) or [None, f.stem])[1]
    ver = (re.search(r'data-version="([^"]+)"', frag) or [None, "-"])[1]
    name = f.stem
    mt = re.search(r"<title>([^<]+)", html)
    if mt:
        name = mt.group(1).strip()
    # 标题里若已带 P-01 前缀或后缀说明，去掉，避免和登记表编号重复
    name = re.sub(r"^P-\d+\s*[·:：|-]?\s*", "", name).split("·")[0].strip()
    reg = reg_rows.get(f"variants/{f.name}") or reg_rows.get(f.name) or {}
    pid = reg.get("pid") or f"P-{idx:02d}"
    summary = reg.get("summary") or ""

    # 外层 section → div：避免套用页面里 section 的卡片样式，保证变体外观与独立打开时一致
    frag = re.sub(r"^<section", "<div", frag, count=1)
    frag = re.sub(r"</section>\s*$", "</div>", frag)

    collected.append((pid, f"""  <section class="spec-variant" id="variant-{vid}" data-ds-scope="v-{vid}">
    <h2 data-toc="1">{pid} · {name}</h2>
    <div class="hint">{summary or '&nbsp;'} · 版本 {ver} · 类名 <code>.v-{vid}</code> · 源文件 <code>variants/{f.name}</code></div>
    <div class="spec-variant__box">
{frag}
    </div>
  </section>""", (f"variant-{vid}", f"{pid} · {name}")))
    print(f"· 变体收录：{pid} {name}（{f.name}）")

# 按登记表编号排序，保证页面顺序与 patterns.md 一致
collected.sort(key=lambda t: t[0])
parts = [c[1] for c in collected]
toc_variants = [c[2] for c in collected]

variant_css = """
<style>
.spec-variant__box {
  background: var(--page-bg); border: 1px dashed var(--border);
  border-radius: var(--radius-input); padding: 20px; overflow-x: auto;
}
.spec-variant .hint code {
  background: var(--track); padding: 1px 5px; border-radius: 2px;
  font-family: Menlo, monospace; font-size: 11px;
}
</style>
"""

# ── 5. 生成目录（构建期就写好，JS 不执行也能用）───────────────
view, n = re.subn(r"<h2>", lambda _: '<h2 data-toc="1">', view)
print(f"· 组件板块：{n} 个（已标记目录）")
if n == 0:
    die("组件母版里没有 <h2> 板块")

headings = re.findall(r'<h2 data-toc="1">(.*?)</h2>', view, re.S)
for i, ht in enumerate(headings, 1):
    view = view.replace(f'<h2 data-toc="1">{ht}</h2>', f'<h2 data-toc="1" id="sec-{i}">{ht}</h2>', 1)


def clean_text(s):
    return re.sub(r"<[^>]+>", "", s).replace("&nbsp;", " ").strip()


# 给每个组件板块的 <section> 打上作用域标记：
# 调参抽屉据此支持「只改这一块」，导出的 CSS 用 [data-ds-scope="sN"] 选择器
scope_list = []
for i, ht in enumerate(headings, 1):
    h2pos = view.find(f'<h2 data-toc="1" id="sec-{i}"')
    if h2pos < 0:
        continue
    secpos = view.rfind("<section", 0, h2pos)
    if secpos < 0:
        continue
    end = view.find(">", secpos)
    tag = view[secpos:end + 1]
    if "data-ds-scope" not in tag:
        newtag = re.sub(r"^<section", f'<section data-ds-scope="s{i}"', tag, count=1)
        view = view[:secpos] + newtag + view[end + 1:]
    scope_list.append({"id": f"s{i}", "name": clean_text(ht)})
print(f"· 作用域标记：{len(scope_list)} 个板块可按区块单独调参")

# 变体区块也纳入作用域（它们的 section 由构建期生成，id 为 v-<变体名>）
for aid, label in toc_variants:
    scope_list.append({"id": "v-" + aid.replace("variant-", ""), "name": label})

scopes_json = json.dumps(scope_list, ensure_ascii=False)

toc_items = "".join(
    f'<a href="#sec-{i}">{re.sub(r"<[^>]+>", "", ht).strip()}</a>'
    for i, ht in enumerate(headings, 1)
)
toc_items += "".join(f'<a href="#{aid}">{label}</a>' for aid, label in toc_variants)
print(f"· 目录项：{len(headings) + len(toc_variants)}")

topbar_css = """
<style>
body { padding-top: 46px; }
.dj-topbar {
  position: fixed; top: 0; left: 0; right: 0; height: 46px; z-index: 9990;
  display: flex; align-items: center; gap: 2px; padding: 0 16px; overflow-x: auto;
  background: rgba(255,255,255,.96); border-bottom: 1px solid var(--divider);
  font-family: inherit; scrollbar-width: none;
}
.dj-topbar::-webkit-scrollbar { display: none; }
.dj-topbar a {
  flex: 0 0 auto; padding: 6px 10px; border-radius: var(--radius-input);
  font-size: 13px; color: var(--text-2); text-decoration: none; white-space: nowrap;
}
.dj-topbar a:hover { background: var(--brand-light); color: var(--brand); }
.dj-tune-link { margin-left: auto !important; color: var(--brand) !important; font-weight: 500; }
h2[id] { scroll-margin-top: 60px; }
</style>
"""

# ── 6. 组装尾部：变体 → 抽屉 → token 原文 ────────────────────
tail = (
    variant_css
    + ('  <section class="spec-variants-wrap">\n' + "\n".join(parts) + "\n  </section>\n\n")
    + '<script type="application/json" id="scope-list">'
    + scopes_json
    + "</script>\n"
    + '<script type="text/plain" id="token-block-src">'
    + root_block
    + "</script>\n"
    # 整份 token 文件也带上：抽屉里的「保存完整 CSS」用它导出，不用回编辑器拼
    + '<script type="text/plain" id="tokens-file-src">'
    + tokens
    + "</script>\n"
    + drawer
)

view, n = re.subn(r"</body>", lambda _: tail + "</body>", view, count=1, flags=re.I)
if n != 1:
    die("组件母版缺少 </body>")

# 顶栏（目录在构建期就写死，不依赖 JS）插到 <body> 之后
toc_items += '<a href="javascript:void(0)" id="djTuneLink" class="dj-tune-link">调参</a>'
topbar = topbar_css + f'<nav class="dj-topbar" id="djToc">{toc_items}</nav>'
view, n = re.subn(
    r"(<body[^>]*>)",
    lambda mm: mm.group(1) + "\n" + topbar,
    view,
    count=1,
    flags=re.I,
)
if n != 1:
    die("组件母版缺少 <body>")

OUT.write_text(view, encoding="utf-8")

# ── 7. 自检 ────────────────────────────────────────────────
checks = {
    "总行数": len(view.splitlines()),
    "体积KB": round(len(view.encode()) / 1024, 1),
    "板块数": len(headings),
    "变体数": len(parts),
    "var() 无定义": len(missing),
    "CSS 依赖 JS": "是" if "style id=\"component-css\"" in view else "否（静态 CSS）",
}
print("\n── 构建完成 ──")
for k, v in checks.items():
    print(f"  {k}: {v}")
print(f"  输出: {OUT}")

if missing:
    print(f"\n⚠ 有 {len(missing)} 个变量未在 token 中定义，页面会回退为默认色")
    sys.exit(0)

# 目录是构建期写进页面的，这里塞进占位 nav（保持无 JS 可用）
if "--open" in sys.argv:
    subprocess.run(["open", str(OUT)], check=False)
