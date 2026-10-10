@echo off
setlocal
echo [Savior] Installing Savior Native Download Helper...

set "MANIFEST_PATH=%~dp0com.savior.helper.json"
set "HOST_PATH=%~dp0host.exe"

:: Escape backslashes for JSON
set "HOST_PATH_ESC=%HOST_PATH:\=\\%"

:: Write absolute path into com.savior.helper.json
(
  echo {
  echo   "name": "com.savior.helper",
  echo   "description": "Savior Native Download Helper",
  echo   "path": "%HOST_PATH_ESC%",
  echo   "type": "stdio",
  echo   "allowed_origins": [
  echo     "chrome-extension://jdfkmiabjpfjacifcmihfdjhpnjpiick/"
  echo   ]
  echo }
) > "%MANIFEST_PATH%"

:: Register with Google Chrome in HKCU
reg add "HKCU\Software\Google\Chrome\NativeMessagingHosts\com.savior.helper" /ve /t REG_SZ /d "%MANIFEST_PATH%" /f >nul

:: Register with CocCoc Browser (both keys)
reg add "HKCU\Software\CocCoc\NativeMessagingHosts\com.savior.helper" /ve /t REG_SZ /d "%MANIFEST_PATH%" /f >nul 2>&1
reg add "HKCU\Software\CocCoc\Browser\NativeMessagingHosts\com.savior.helper" /ve /t REG_SZ /d "%MANIFEST_PATH%" /f >nul 2>&1

:: Register with Microsoft Edge
reg add "HKCU\Software\Microsoft\Edge\NativeMessagingHosts\com.savior.helper" /ve /t REG_SZ /d "%MANIFEST_PATH%" /f >nul 2>&1

:: Register with Brave Browser
reg add "HKCU\Software\BraveSoftware\Brave-Browser\NativeMessagingHosts\com.savior.helper" /ve /t REG_SZ /d "%MANIFEST_PATH%" /f >nul 2>&1

echo.
echo [SUCCESS] Savior Native Helper registered successfully for Chrome, CocCoc, Edge, and Brave!
echo You can now download videos, HLS streams, and YouTube 1080p+ with FFmpeg in Chrome.
echo.
pause
