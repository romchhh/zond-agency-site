#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ASSETS="$ROOT/public/assets"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg is required to optimize media."
  exit 1
fi

if [[ -f "$ASSETS/MockupReview 1x1.mp4" ]]; then
  ffmpeg -y -i "$ASSETS/MockupReview 1x1.mp4" -an \
    -vf "scale=720:720:flags=lanczos" \
    -c:v libx264 -preset slow -crf 32 -movflags +faststart -pix_fmt yuv420p \
    "$ASSETS/mockup-review.mp4"
  ffmpeg -y -i "$ASSETS/mockup-review.mp4" -vframes 1 -q:v 4 \
    "$ASSETS/mockup-review-poster.jpg"
fi

if [[ -f "$ASSETS/mockup-review.mp4" ]]; then
  ffmpeg -y -i "$ASSETS/mockup-review.mp4" -an \
    -vf "scale=720:720:flags=lanczos" \
    -c:v libx264 -preset slow -crf 32 -movflags +faststart -pix_fmt yuv420p \
    "$ASSETS/mockup-review.optimized.mp4"
  mv "$ASSETS/mockup-review.optimized.mp4" "$ASSETS/mockup-review.mp4"
  ffmpeg -y -i "$ASSETS/mockup-review.mp4" -vframes 1 -q:v 4 \
    "$ASSETS/mockup-review-poster.jpg"
fi

echo "Media optimization complete."
