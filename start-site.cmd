@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 正在启动品牌资产库网站（本地模式，可编辑品牌资料）...
echo 浏览器将自动打开；关闭此窗口或按 Ctrl+C 即停止。
echo.
node tools\site_server.js
echo.
echo 服务已停止。
pause
