#!/usr/bin/env bash
set -euo pipefail

# Keep the release tag synchronized with .github/workflows/zola.yml. The upstream
# v0.23.1 artifacts currently identify their embedded binary as zola 0.23.0.
ZOLA_VERSION_TO_INSTALL=${ZOLA_VERSION:-0.23.1}
ZOLA_INSTALL_DIR=${ZOLA_INSTALL_DIR:-/usr/local/bin}

ZOLA_MACHINE=$(uname -m)
ZOLA_SYSTEM=$(uname -s)

case "${ZOLA_SYSTEM}:${ZOLA_MACHINE}" in
  Darwin:arm64) ZOLA_TARGET="aarch64-apple-darwin";;
  Darwin:x86_64) ZOLA_TARGET="x86_64-apple-darwin";;
  Linux:aarch64|Linux:arm64) ZOLA_TARGET="aarch64-unknown-linux-gnu";;
  Linux:x86_64) ZOLA_TARGET="x86_64-unknown-linux-gnu";;
  *) echo "Unsupported platform: ${ZOLA_SYSTEM} ${ZOLA_MACHINE}"; exit 1;;
esac
ZOLA_URL="https://github.com/getzola/zola/releases/download/v${ZOLA_VERSION_TO_INSTALL}/zola-v${ZOLA_VERSION_TO_INSTALL}-${ZOLA_TARGET}.tar.gz"
ZOLA_TEMP_DIR=$(mktemp -d)
trap 'rm -rf "$ZOLA_TEMP_DIR"' EXIT

echo "Downloading Zola ${ZOLA_VERSION_TO_INSTALL} from ${ZOLA_URL}"

curl -LsSf "$ZOLA_URL" -o "$ZOLA_TEMP_DIR/zola.tar.gz"
tar -xzf "$ZOLA_TEMP_DIR/zola.tar.gz" -C "$ZOLA_TEMP_DIR" zola
chmod +x "$ZOLA_TEMP_DIR/zola"

if [[ -w "$ZOLA_INSTALL_DIR" ]]; then
  install "$ZOLA_TEMP_DIR/zola" "$ZOLA_INSTALL_DIR/zola"
else
  sudo install "$ZOLA_TEMP_DIR/zola" "$ZOLA_INSTALL_DIR/zola"
fi

echo "Zola installed at ${ZOLA_INSTALL_DIR}/zola: $("$ZOLA_INSTALL_DIR/zola" --version)"
