#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ASSETS="$ROOT/public/assets"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg is required to optimize media."
  exit 1
fi

if [[ -f "$ASSETS/MockupReview 1x1.mp4" ]]; then
  ffmpeg -y -i "$ASSETS/MockupReview 1x1.mp4" -an -vf "scale=720:720" \
    -c:v libx264 -preset medium -crf 26 -movflags +faststart -pix_fmt yuv420p \
    "$ASSETS/mockup-review.mp4"
  ffmpeg -y -i "$ASSETS/mockup-review.mp4" -vframes 1 -q:v 3 \
    "$ASSETS/mockup-review-poster.jpg"
fi

for gif in digital-residence ahmad-tea; do
  if [[ -f "$ASSETS/$gif.gif" ]]; then
    ffmpeg -y -i "$ASSETS/$gif.gif" -an -movflags +faststart -pix_fmt yuv420p \
      -c:v libx264 -crf 28 "$ASSETS/$gif.mp4"
  fi
done

if [[ -f "$ASSETS/6a8b03887a661f9cf0d7fa7b_6628f20206b9b93aa2a62c2a_Altep2.gif" ]]; then
  ffmpeg -y -i "$ASSETS/6a8b03887a661f9cf0d7fa7b_6628f20206b9b93aa2a62c2a_Altep2.gif" \
    -an -movflags +faststart -pix_fmt yuv420p -c:v libx264 -crf 28 "$ASSETS/altep.mp4"
fi

echo "Media optimization complete."
