#!/bin/bash
# 中控系统演示服务(双击打开页面;服务由系统常驻任务接管,无需保持本窗口)
# 常驻服务:开机自启、崩溃自动重启、禁缓存;停止/卸载见下方说明
cd "$(dirname "$0")"
PORT=8088
URL="http://localhost:$PORT/中控系统.html"

if lsof -nP -iTCP:$PORT -sTCP:LISTEN >/dev/null 2>&1; then
  echo "演示服务运行中(常驻服务,关闭任何终端窗口都不影响)。正在打开页面..."
  sleep 1
  open "$URL"
  exit 0
fi

echo "常驻服务未运行,尝试手动启动..."
IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo "本机IP获取失败")
echo "本机打开:   $URL"
echo "局域网共享: http://$IP:$PORT/中控系统.html"
echo "(同事需与你在同一网络/WiFi;手动启动时保持本窗口打开)"
python3 - <<'PYEOF'
import http.server
class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        self.send_header('Expires', '0')
        super().end_headers()
    def log_message(self, *a): pass
http.server.ThreadingHTTPServer.allow_reuse_address = True
http.server.ThreadingHTTPServer(('', 8088), NoCacheHandler).serve_forever()
PYEOF
