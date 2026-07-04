@echo off
title Hawa Restaurant - Install Bot Dependencies
cd /d "%~dp0bot"
echo Installing WhatsApp Bot dependencies...
call npm install
echo.
echo Done! You can now run Start_WhatsApp_Bot.bat
pause
