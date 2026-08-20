#!/usr/bin/env bash
# Optimize portfolio images for the web (macOS — uses built-in `sips`).
# Caps the longest edge at 2000px and re-encodes JPEGs at quality 82.
# Run from anywhere:  bash scripts/optimize-images.sh
set -euo pipefail

IMG_DIR="$(cd "$(dirname "$0")/../public/images" && pwd)"
echo "Optimizing images in: $IMG_DIR"
echo "Before: $(du -sh "$IMG_DIR" | awk '{print $1}')"

find "$IMG_DIR" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) | while read -r f; do
  sips -s format jpeg -s formatOptions 82 -Z 2000 "$f" --out "$f" >/dev/null 2>&1
  echo "  ✓ $(basename "$f")"
done

echo "After:  $(du -sh "$IMG_DIR" | awk '{print $1}')"
echo "Done. (.webp files are left untouched.)"
