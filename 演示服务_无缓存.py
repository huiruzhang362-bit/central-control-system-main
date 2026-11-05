#!/usr/bin/env python3
# 中控系统演示服务(禁缓存):由 LaunchAgent 常驻运行,终端窗口关闭也不受影响
# 日志: /tmp/pccs-demo-server.log ; 停止: launchctl bootout gui/$UID/com.robim.pccs-demo
import http.server

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        self.send_header('Expires', '0')
        super().end_headers()
    def log_message(self, fmt, *args):
        with open('/tmp/pccs-demo-server.log', 'a') as f:
            f.write("%s - %s\n" % (self.log_date_time_string(), fmt % args))

if __name__ == '__main__':
    http.server.ThreadingHTTPServer.allow_reuse_address = True
    http.server.ThreadingHTTPServer(('', 8088), NoCacheHandler).serve_forever()
