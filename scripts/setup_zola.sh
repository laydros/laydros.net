#!/usr/bin/env bash
set -euo pipefail

# Install Zola if not already available
if command -v zola >/dev/null 2>&1; then
  echo "Zola already installed: $(zola --version)"
  exit 0
fi

# Determine version (use ZOLA_VERSION env var or latest release)
VERSION=${ZOLA_VERSION:-$(curl -s https://api.github.com/repos/getzola/zola/releases/latest | grep -Po '"tag_name": "v\K[0-9.]+' )}
ARCH=$(uname -m)
case "$ARCH" in
  x86_64) ARCH="x86_64-unknown-linux-gnu";;
  aarch64|arm64) ARCH="aarch64-unknown-linux-gnu";;
  *) echo "Unsupported architecture: $ARCH"; exit 1;;
esac
URL="https://github.com/getzola/zola/releases/download/v${VERSION}/zola-v${VERSION}-${ARCH}.tar.gz"

echo "Downloading Zola ${VERSION} from ${URL}"

curl -LsSf "$URL" -o /tmp/zola.tar.gz
mkdir -p /tmp/zola-install

tar -xzf /tmp/zola.tar.gz -C /tmp/zola-install zola
chmod +x /tmp/zola-install/zola
sudo mv /tmp/zola-install/zola /usr/local/bin/zola
rm -rf /tmp/zola.tar.gz /tmp/zola-install

echo "Zola installed: $(zola --version)"
