#!/bin/bash
set -e

OS="$(uname -s)"

if [ "$OS" = "Darwin" ]; then
  TARGET_DIRS=(
    "$HOME/Library/Application Support/Google/Chrome/NativeMessagingHosts"
    "$HOME/Library/Application Support/Chromium/NativeMessagingHosts"
    "$HOME/Library/Application Support/BraveSoftware/Brave-Browser/NativeMessagingHosts"
    "$HOME/Library/Application Support/Microsoft Edge/NativeMessagingHosts"
  )
else
  TARGET_DIRS=(
    "$HOME/.config/google-chrome/NativeMessagingHosts"
    "$HOME/.config/chromium/NativeMessagingHosts"
    "$HOME/.config/BraveSoftware/Brave-Browser/NativeMessagingHosts"
    "$HOME/.config/microsoft-edge/NativeMessagingHosts"
  )
fi

for TARGET_DIR in "${TARGET_DIRS[@]}"; do
  MANIFEST="$TARGET_DIR/com.savior.helper.json"
  if [ -f "$MANIFEST" ]; then
    rm -f "$MANIFEST"
    echo "Removed $MANIFEST"
  fi
done

echo "Savior Native Helper uninstalled successfully from $OS."
