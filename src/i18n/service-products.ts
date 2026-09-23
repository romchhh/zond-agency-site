export type ServiceProductItem = {
  src: string;
  alt: string;
  caption: string;
};

export const serviceProductImages = [
  "/branding/product-mug.jpg",
  "/branding/product-stickers.jpg",
  "/branding/product-social.jpg",
  "/branding/product-cap.jpg",
  "/branding/product-packaging.jpg",
  "/branding/product-outdoor.jpg",
] as const;

type ProductLabel = {
  alt: string;
  caption: string;
};

export function withServiceProductImages(items: ProductLabel[]): ServiceProductItem[] {
  return items.map((item, index) => ({
    ...item,
    src: serviceProductImages[index] ?? serviceProductImages[0],
  }));
}
