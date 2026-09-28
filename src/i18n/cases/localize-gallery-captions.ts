import type { CaseVisualBlock } from "./types";

export function applyGalleryCaptionMap(
  blocks: CaseVisualBlock[],
  captionsBySrc: Record<string, string>,
): CaseVisualBlock[] {
  return blocks.map((block) => {
    if (block.type !== "gallery") return block;
    return {
      ...block,
      images: block.images.map((image) => ({
        ...image,
        caption: captionsBySrc[image.src] ?? image.caption,
      })),
    };
  });
}
