#!/bin/bash
# ============================================================================
#  迁移校验脚本 · 型材立库中控系统 → Kimi
#  用法：bash 迁移_Kimi/校验迁移.sh          （在任意目录执行均可）
#  退出码：0 = 全部通过；1 = 有 FAIL
# ----------------------------------------------------------------------------
#  静态项（不需要登录）任何人都能跑；动态项需要先 kimi login。
# ============================================================================

set -u
cd "$(dirname "$0")/.." || exit 1
ROOT="$(pwd)"
SKILL_SRC="$ROOT/.kimi-code/skills/dajie-orange-design-spec"
SKILL_NAME="dajie-orange-design-spec"
PASS=0; FAIL=0; WARN=0

ok()   { printf '  \033[32m✓\033[0m %s\n' "$1"; PASS=$((PASS+1)); }
bad()  { printf '  \033[31m✗\033[0m %s\n' "$1"; FAIL=$((FAIL+1)); }
warn() { printf '  \033[33m!\033[0m %s\n' "$1"; WARN=$((WARN+1)); }
sec()  { printf '\n\033[1m%s\033[0m\n' "$1"; }

sec "1. 核心文件完整性"
for f in 中控系统.html data.js 加工任务_假数据.js 排产_输入数据.js 排产_算法.js \
         项目档案.md AGENTS.md \
         react.min.js react-dom.min.js dayjs.min.js antd.min.js antd.min.css; do
  [ -s "$f" ] && ok "$f" || bad "$f 缺失或为空"
done
# 排产仿真_中控.html 已于 2026-10-26 随根目录整理移入 _归档/（低频存档，不是运行依赖）
[ -s "_归档/排产仿真_中控.html" ] && ok "_归档/排产仿真_中控.html（已归档）" \
  || bad "_归档/排产仿真_中控.html 缺失或为空"

sec "2. 交付包与根目录一致"
if [ -f 中控系统_交付包/中控系统.html ]; then
  a=$(md5 -q 中控系统.html 2>/dev/null || md5sum 中控系统.html | cut -d' ' -f1)
  b=$(md5 -q 中控系统_交付包/中控系统.html 2>/dev/null || md5sum 中控系统_交付包/中控系统.html | cut -d' ' -f1)
  [ "$a" = "$b" ] && ok "中控系统.html md5 一致 ($a)" || bad "交付包与根目录不同步：$a ≠ $b"
else
  bad "交付包 中控系统.html 缺失"
fi
for f in antd.min.js antd.min.css react.min.js react-dom.min.js dayjs.min.js \
         data.js 加工任务_假数据.js 排产_算法.js 排产_输入数据.js; do
  [ -s "中控系统_交付包/$f" ] && ok "交付包/$f" || bad "交付包/$f 缺失"
done
grep -q "版本:v10" 中控系统_交付包/README.txt && ok "交付包 README.txt 含版本号" \
  || warn "交付包 README.txt 未找到版本号行"

sec "3. 依赖可离线运行（无外网引用）"
if grep -oE 'src="https?://[^"]+"' 中控系统.html | grep -v 'localhost' | head -5 | grep -q .; then
  bad "主文件仍引用远程脚本：$(grep -oE 'src="https?://[^"]+"' 中控系统.html | head -3 | tr '\n' ' ')"
else
  ok "主文件无远程 script 引用"
fi
[ -d node_modules ] && warn "存在 node_modules（本项目应无依赖安装）" || ok "无 node_modules（零构建符合预期）"

sec "4. 项目上下文 AGENTS.md"
if [ -s AGENTS.md ]; then
  ok "AGENTS.md 存在（$(wc -l < AGENTS.md | tr -d ' ') 行 / $(wc -c < AGENTS.md | tr -d ' ') 字节）"
  grep -q '五条铁律' AGENTS.md && ok "含「五条铁律」段" || warn "未找到铁律段，请确认内容完整"
  grep -q 'EE6402' AGENTS.md && ok "含设计规范主色 token" || warn "未含主色 token"
  grep -q 'dajie-orange-design-spec' AGENTS.md && ok "含 skill 路径指引" || warn "未含 skill 路径指引"
else
  bad "AGENTS.md 缺失"
fi

sec "5. 设计规范 skill：项目内实体 + frontmatter"
if [ -f "$SKILL_SRC/SKILL.md" ]; then
  ok "项目内实体目录存在：.kimi-code/skills/$SKILL_NAME"
  first=$(head -1 "$SKILL_SRC/SKILL.md")
  [ "$first" = "---" ] && ok "frontmatter 首行为标准 ---" \
    || bad "frontmatter 首行是 '$first'，必须是 --- （Kimi 严格 YAML 解析会失败）"
  grep -q '^name: *'"$SKILL_NAME" "$SKILL_SRC/SKILL.md" && ok "frontmatter 含 name" || bad "frontmatter 缺 name"
  grep -qE '^description: .+' "$SKILL_SRC/SKILL.md" && ok "frontmatter 含 description" || bad "frontmatter 缺 description"
  [ -s "$SKILL_SRC/references/components.md" ] && ok "references/components.md 可读" || bad "references 缺失"
  [ -s "$SKILL_SRC/assets/design-tokens.css" ] && ok "assets/design-tokens.css 可读" || bad "assets 缺失"
  [ -s "$SKILL_SRC/tools/build-spec.py" ] && ok "tools/build-spec.py 可读" || bad "构建器缺失"
  [ -s "$SKILL_SRC/tools/设计规范总览.html" ] && ok "预览页已生成（$(du -h "$SKILL_SRC/tools/设计规范总览.html" | cut -f1)）" \
    || warn "预览页未生成，跑 python3 tools/build-spec.py"
else
  bad "skill 实体目录不存在：$SKILL_SRC"
fi

sec "6. skill 挂载（三端入口 + 预览可跑）"
# 6.1 项目内实体（唯一真实来源）
[ -f "$SKILL_SRC/SKILL.md" ] && ok "项目内：.kimi-code/skills/${SKILL_NAME}（实体，唯一真实来源）" \
  || bad "项目内实体缺失"
# 6.2 两处用户级软链是否指向项目内
for p in "$HOME/.workbuddy/skills/$SKILL_NAME" "$HOME/.agents/skills/$SKILL_NAME"; do
  if [ -e "$p/SKILL.md" ]; then
    tgt=$(readlink "$p" 2>/dev/null || echo '')
    if [ -n "$tgt" ]; then
      case "$tgt" in
        "$ROOT"*) ok "${p#$HOME/} → 软链指向项目内" ;;
        *) bad "${p#$HOME/} 软链指向 ${tgt}（应指向项目内，否则会分叉）" ;;
      esac
    else
      warn "${p#$HOME/} 是实体目录而非软链（会与项目内版本分叉）"
    fi
  else
    bad "缺少入口：${p#$HOME/}"
  fi
done
# 6.3 Kimi 的 extra_skill_dirs 注册（本项目无 .git，项目级扫描不生效）
CFG="$HOME/.kimi-code/config.toml"
if [ -f "$CFG" ] && grep -q "central-control-system-main/.kimi-code/skills" "$CFG"; then
  ok "extra_skill_dirs 已注册项目内 skill 目录"
else
  bad "extra_skill_dirs 未注册 → Kimi 扫不到项目内 skill（本项目无 .git，项目级扫描不生效）"
fi
# 6.4 项目根锚点（影响 .kimi-code/AGENTS.md 与项目级 skill）
if [ -d .git ]; then
  ok "项目根锚点：.git 存在"
else
  ok "无 .git —— 已由 extra_skill_dirs 补位（若以后 git init，可改用项目级自动扫描）"
fi
# 6.5 预览构建器实跑（改完规范必须能出页面）
if command -v python3 >/dev/null 2>&1; then
  if ( cd "$SKILL_SRC" && python3 tools/build-spec.py >/tmp/_spec_build.log 2>&1 ); then
    ok "预览构建器实跑通过（$(grep -c . /tmp/_spec_build.log) 行输出，见 /tmp/_spec_build.log）"
  else
    bad "预览构建器报错：$(tail -3 /tmp/_spec_build.log | tr '\n' ' ')"
  fi
else
  warn "未找到 python3，预览无法生成"
fi
# 6.6 Kimi 桌面端技能目录（daimon-share，实体副本，由 同步设计规范.command 推送）
KD="$HOME/Library/Application Support/kimi-desktop/daimon-share/daimon/skills/$SKILL_NAME"
if [ -f "$KD/SKILL.md" ]; then
  if diff -rq "$SKILL_SRC" "$KD" >/dev/null 2>&1; then
    ok "Kimi 桌面端已同步（$(find "$KD" -type f | wc -l | tr -d ' ') 个文件，含 tools/）"
  else
    bad "Kimi 桌面端与项目内不一致 → 跑 bash 同步设计规范.command"
  fi
  [ -s "$KD/tools/设计规范总览.html" ] && ok "Kimi 桌面端含预览页（可调参）" \
    || bad "Kimi 桌面端缺 tools/ 预览页（旧版残留，只有规范文本没有预览与调参）"
else
  warn "Kimi 桌面端未见该 skill（不用桌面端可忽略）"
fi

sec "7. 哈希清单与实际文件一致（防清单悄悄过期）"
if [ -f 迁移_Kimi/文件清单.sha256 ]; then
  sumout=$(shasum -a 256 -c 迁移_Kimi/文件清单.sha256 2>&1)
  badn=$(printf '%s\n' "$sumout" | grep -c 'FAILED$' || true)
  missn=$(printf '%s\n' "$sumout" | grep -c 'No such file' || true)
  if [ "$badn" -eq 0 ] && [ "$missn" -eq 0 ]; then
    ok "清单 $(wc -l < 迁移_Kimi/文件清单.sha256 | tr -d ' ') 条全部匹配"
  else
    bad "清单有 ${badn} 条哈希不符 / ${missn} 条文件缺失 → 改完文件必须重算清单（见下方命令）"
    printf '%s\n' "$sumout" | grep -E 'FAILED$|No such file' | head -6 | sed 's/^/      /'
    echo "      重算：cd 项目根 && python3 - <<'PY'  ……或直接跑 迁移_Kimi/重算清单.command"
  fi
  if [ -f 中控系统_交付包/data.js ]; then
    [ "$(md5 -q data.js)" = "$(md5 -q 中控系统_交付包/data.js)" ] \
      && ok "交付包 data.js 已同步" || bad "交付包 data.js 与根 data.js 不一致"
  else
    warn "交付包缺 data.js"
  fi
else
  warn "未找到 迁移_Kimi/文件清单.sha256"
fi

sec "8. Kimi 登录状态（动态项前置条件）"
if [ -s "$HOME/.kimi-code/oauth/kimi-code" ]; then
  ok "OAuth 凭据文件非空"
  LOGIN=1
else
  bad "OAuth 凭据为空/不存在 → 先执行 kimi login（设备码流程，需本人浏览器确认）"
  LOGIN=0
fi

sec "9. 动态实测（需登录）"
if [ "$LOGIN" = "1" ] && command -v kimi >/dev/null 2>&1; then
  out=$(kimi -p "只回答两行：第一行列出你当前可加载的 skill name；第二行说出 AGENTS.md 里项目的一句话定位。" 2>&1)
  echo "$out" | grep -q "$SKILL_NAME" && ok "Kimi 报出 skill：$SKILL_NAME" || bad "Kimi 未报出 skill，输出：$(echo "$out" | head -3)"
  echo "$out" | grep -qi '中控\|立库\|型材' && ok "Kimi 读到 AGENTS.md 项目定位" || warn "未见项目定位关键词，人工确认：$(echo "$out" | tail -3)"
else
  warn "跳过：未登录或 kimi 不在 PATH（登录后重跑本脚本即自动执行）"
fi

sec "结果"
printf '  通过 %d · 警告 %d · 失败 %d\n' "$PASS" "$WARN" "$FAIL"
[ "$FAIL" -eq 0 ] && { echo "  ✅ 静态验收通过"; exit 0; } || { echo "  ❌ 存在失败项，见上"; exit 1; }
