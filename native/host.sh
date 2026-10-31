#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
NODE_BIN="$(which node 2>/dev/null || echo "")"
if [ -z "$NODE_BIN" ] || [ ! -x "$NODE_BIN" ]; then
  if [ -x "/opt/homebrew/bin/node" ]; then
    NODE_BIN="/opt/homebrew/bin/node"
  elif [ -x "/usr/local/bin/node" ]; then
    NODE_BIN="/usr/local/bin/node"
  elif [ -x "/usr/bin/node" ]; then
    NODE_BIN="/usr/bin/node"
  fi
fi

if [ -z "$NODE_BIN" ]; then
  echo "Node.js not found. Please install Node.js." >&2
  exit 1
fi

exec "$NODE_BIN" "$DIR/host.js"
