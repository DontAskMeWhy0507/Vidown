@echo off
setlocal
echo [Savior] Uninstalling Savior Native Helper...

reg delete "HKCU\Software\Google\Chrome\NativeMessagingHosts\com.savior.helper" /f >nul 2>&1
reg delete "HKCU\Software\CocCoc\NativeMessagingHosts\com.savior.helper" /f >nul 2>&1
reg delete "HKCU\Software\CocCoc\Browser\NativeMessagingHosts\com.savior.helper" /f >nul 2>&1
reg delete "HKCU\Software\Microsoft\Edge\NativeMessagingHosts\com.savior.helper" /f >nul 2>&1
reg delete "HKCU\Software\BraveSoftware\Brave-Browser\NativeMessagingHosts\com.savior.helper" /f >nul 2>&1

echo [SUCCESS] Savior Native Helper unregistered.
pause
