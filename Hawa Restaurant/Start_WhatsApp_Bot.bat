@echo off
title Hawa Restaurant - WhatsApp Bot
echo.
echo ╔══════════════════════════════════════╗
echo ║   HAWA RESTAURANT WhatsApp Bot     ║
echo ╚══════════════════════════════════════╝
echo.
echo Checking dependencies...

cd /d "%~dp0bot"

if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo.
)

echo Starting WhatsApp Bot...
echo.
echo NOTE: When the QR code appears, scan it with WhatsApp:
echo   1. Open WhatsApp on your phone
echo   2. Settings ^> Linked Devices
echo   3. Link a Device
echo   4. Scan the QR code
echo.
echo Keep this window open to keep the bot running.
echo Press Ctrl+C to stop.
echo.

node bot.js

pause
