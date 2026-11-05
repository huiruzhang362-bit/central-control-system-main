#!/bin/bash
# 重算 迁移_Kimi/文件清单.sha256
# 用途：改完 中控系统.html / data.js / AGENTS.md / 项目档案.md 等清单内文件后，跑一次让清单与实际一致。
# 否则 校验迁移.sh 第 7 段会报「哈希不符」，而且这个清单曾经悄悄过期两天没人发现。

set -euo pipefail
cd "$(dirname "$0")/.." || exit 1

python3 - <<'PY'
import hashlib, pathlib

mp = pathlib.Path("迁移_Kimi/文件清单.sha256")
lines = [l.strip() for l in mp.read_text(encoding="utf-8").splitlines() if l.strip()]

files = []
for l in lines:
    parts = l.split(None, 1)
    if len(parts) == 2 and not l.startswith("#"):
        files.append(parts[1])

# 交付包 data.js 是运行必需且必须与根一致的文件，固定纳入
if "中控系统_交付包/data.js" not in files:
    anchor = files.index("中控系统_交付包/README.txt") if "中控系统_交付包/README.txt" in files else len(files)
    files.insert(anchor, "中控系统_交付包/data.js")

old = {}
for l in lines:
    parts = l.split(None, 1)
    if len(parts) == 2 and not l.startswith("#"):
        old[parts[1]] = parts[0]

out, missing, changed = [], [], []
for f in files:
    p = pathlib.Path(f)
    if not p.exists():
        missing.append(f)
        out.append(f"# MISSING  {f}")
        continue
    h = hashlib.sha256(p.read_bytes()).hexdigest()
    if f in old and old[f] != h:
        changed.append(f)
    out.append(f"{h}  {f}")

mp.write_text("\n".join(out) + "\n", encoding="utf-8")
print(f"清单已更新：{len(files)} 条 · 本次变化 {len(changed)} 条")
if changed:
    for f in changed:
        print(f"  ~ {f}")
if missing:
    print(f"⚠️ {len(missing)} 个文件不存在，已标为 MISSING：")
    for f in missing:
        print(f"  ✗ {f}")
PY

echo
echo "复验："
if shasum -a 256 -c 迁移_Kimi/文件清单.sha256 2>&1 | grep -v ': OK' | grep -q .; then
  shasum -a 256 -c 迁移_Kimi/文件清单.sha256 2>&1 | grep -v ': OK'
  exit 1
else
  echo "  ✅ 全部一致"
fi
