#!/bin/bash
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
HOST_SH="$DIR/host.sh"
chmod +x "$HOST_SH"
chmod +x "$DIR/host.js"

# Chrome Extension ID
EXT_ID="nnjbdidmmnecdmcllkcaajboplpcimcf"

OS="$(uname -s)"

if [ "$OS" = "Darwin" ]; then
  TARGET_DIRS=(
    "$HOME/Library/Application Support/Google/Chrome/NativeMessagingHosts"
    "$HOME/Library/Application Support/Chromium/NativeMessagingHosts"
    "$HOME/Library/Application Support/BraveSoftware/Brave-Browser/NativeMessagingHosts"
    "$HOME/Library/Application Support/Microsoft Edge/NativeMessagingHosts"
  )
else
  # Linux (and other Unix-like OSes)
  TARGET_DIRS=(
    "$HOME/.config/google-chrome/NativeMessagingHosts"
    "$HOME/.config/chromium/NativeMessagingHosts"
    "$HOME/.config/BraveSoftware/Brave-Browser/NativeMessagingHosts"
    "$HOME/.config/microsoft-edge/NativeMessagingHosts"
  )
fi

MANIFEST_CONTENT=$(cat <<EOF
{
  "name": "com.savior.helper",
  "description": "Savior Native Download Helper",
  "path": "$HOST_SH",
  "type": "stdio",
  "allowed_origins": [
    "chrome-extension://$EXT_ID/"
  ]
}
EOF
)

INSTALLED=0
for TARGET_DIR in "${TARGET_DIRS[@]}"; do
  PARENT_DIR="$(dirname "$TARGET_DIR")"
  if [ -d "$PARENT_DIR" ] || [[ "$TARGET_DIR" == *"google-chrome"* ]] || [[ "$TARGET_DIR" == *"Google/Chrome"* ]]; then
    mkdir -p "$TARGET_DIR"
    echo "$MANIFEST_CONTENT" > "$TARGET_DIR/com.savior.helper.json"
    echo "Installed host manifest to: $TARGET_DIR/com.savior.helper.json"
    INSTALLED=$((INSTALLED + 1))
  fi
done

if [ $INSTALLED -gt 0 ]; then
  echo "Savior Native Helper installed successfully on $OS!"
else
  echo "No supported Chromium browser directories found."
  exit 1
fi
