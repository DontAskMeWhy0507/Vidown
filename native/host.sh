#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
NODE_BIN="$(which node 2>/dev/null || echo "")"
if [ -z "$NODE_BIN" ] || [ ! -x "$NODE_BIN" ]; then
  NODE_BIN=""
  for candidate in     "/opt/homebrew/bin/node"     "/usr/local/bin/node"     "/usr/bin/node"     "$HOME/.volta/bin/node"     "$HOME/.asdf/shims/node"     "$HOME/.local/share/mise/shims/node"     "$HOME/.nvm/versions/node/"*/bin/node; do
    if [ -x "$candidate" ]; then
      NODE_BIN="$candidate"
      break
    fi
  done
fi

if [ -z "$NODE_BIN" ]; then
  echo "Node.js not found. Please install Node.js." >&2
  exit 1
fi

exec "$NODE_BIN" "$DIR/host.js"
