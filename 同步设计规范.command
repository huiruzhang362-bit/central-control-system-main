#!/bin/bash
# ============================================================================
#  同步设计规范 · 项目内 → Kimi 桌面端
#  ---------------------------------------------------------------------------
#  唯一真实来源在项目里：.kimi-code/skills/dajie-orange-design-spec/
#  本脚本把它推到 Kimi 桌面端的技能目录，并顺手重新生成预览页。
#
#  什么时候跑：
#    · 改了 SKILL.md / references / assets 之后
#    · 在总览页调参后保存了新的 design-tokens.css
#    · 换了新机器、或 Kimi 里看不到规范更新时
#
#  双击运行，或命令行：bash 同步设计规范.command
# ============================================================================
set -e
cd "$(dirname "$0")"

SRC="$PWD/.kimi-code/skills/dajie-orange-design-spec"
DST="$HOME/Library/Application Support/kimi-desktop/daimon-share/daimon/skills/dajie-orange-design-spec"

if [ ! -f "$SRC/SKILL.md" ]; then
  echo "✗ 找不到源目录：$SRC"
  exit 1
fi

echo "▸ 1/4 重新生成预览页（tools/设计规范总览.html）"
( cd "$SRC" && python3 tools/build-spec.py | tail -8 )

echo
echo "▸ 2/4 同步到 Kimi 桌面端"
mkdir -p "$(dirname "$DST")"
rsync -a --delete "$SRC/" "$DST/"

echo
echo "▸ 3/4 校验一致性"
if diff -rq "$SRC" "$DST" >/dev/null 2>&1; then
  echo "  ✓ 项目内与 Kimi 桌面端完全一致"
  echo
  echo "  共 $(find "$SRC" -type f | wc -l | tr -d ' ') 个文件"
  echo "  预览页：$SRC/tools/设计规范总览.html"
  echo
  echo "✅ 同步完成。Kimi 桌面端需新建会话（或重启）后生效。"
else
  echo "  ✗ 同步后仍有差异，请检查"
  diff -rq "$SRC" "$DST" | head -10
  exit 1
fi

# ── 4/4 打开预览 ──────────────────────────────────────────────
# 优先走 8088 演示服务的 http 地址（Kimi 桌面端内置浏览器不支持 file://，
# 一律用 URL 打开，不要把预览页复制到其它目录 —— 复制品一旦被手改就会分叉）
echo
echo "▸ 4/4 打开预览"
PREVIEW_REL=".kimi-code/skills/dajie-orange-design-spec/tools/设计规范总览.html"
PORT=8088
if curl -s -o /dev/null --max-time 2 "http://127.0.0.1:${PORT}/"; then
  ENC=$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))" "$PREVIEW_REL")
  URL="http://127.0.0.1:${PORT}/${ENC}"
  echo "  $URL"
  open "$URL"
else
  echo "  ⚠ 8088 演示服务未运行，直接用文件打开（Kimi 内置浏览器可能不支持）"
  echo "    修复：launchctl kickstart -k gui/\$(id -u)/com.robim.pccs-demo"
  open "$SRC/tools/设计规范总览.html"
fi

# 双击运行时停留，方便看结果
if [ -t 0 ]; then
  echo
  read -n 1 -s -r -p "按任意键关闭…"
fi
