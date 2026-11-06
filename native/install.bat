@echo off
setlocal
echo [Savior] Installing Savior Native Download Helper...

set "DIR=%~dp0"
set "HOST_PATH=%DIR%host.exe"
set "TARGET_DIR=%LOCALAPPDATA%\SaviorHelper"
set "MANIFEST_PATH=%TARGET_DIR%\com.savior.helper.json"

:: Auto-compile host.cs if host.exe is missing
if not exist "%HOST_PATH%" (
  echo Host executable not found. Compiling host.cs via .NET Framework csc.exe...
  if exist "%SystemRoot%\Microsoft.NET\Framework64\v4.0.30319\csc.exe" (
    "%SystemRoot%\Microsoft.NET\Framework64\v4.0.30319\csc.exe" /nologo /target:exe /out:"%HOST_PATH%" "%DIR%host.cs"
  ) else if exist "%SystemRoot%\Microsoft.NET\Framework\v4.0.30319\csc.exe" (
    "%SystemRoot%\Microsoft.NET\Framework\v4.0.30319\csc.exe" /nologo /target:exe /out:"%HOST_PATH%" "%DIR%host.cs"
  ) else (
    echo [ERROR] csc.exe not found in Microsoft.NET Framework!
    exit /b 1
  )
)

:: Ensure target directory in %LOCALAPPDATA% exists
if not exist "%TARGET_DIR%" mkdir "%TARGET_DIR%"

:: Escape backslashes for JSON
set "HOST_PATH_ESC=%HOST_PATH:\=\\%"

:: Write absolute path into %LOCALAPPDATA%\SaviorHelper\com.savior.helper.json (leaving native\com.savior.helper.json untouched)
(
  echo {
  echo   "name": "com.savior.helper",
  echo   "description": "Savior Native Download Helper",
  echo   "path": "%HOST_PATH_ESC%",
  echo   "type": "stdio",
  echo   "allowed_origins": [
  echo     "chrome-extension://nnjbdidmmnecdmcllkcaajboplpcimcf/"
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
echo Manifest location: %MANIFEST_PATH%
echo You can now download videos, HLS streams, and YouTube 1080p+ with FFmpeg in Chrome.
echo.
pause
