export type ServiceProductItem = {
  src: string;
  alt: string;
  caption: string;
};

export const serviceProductImages = [
  "/assets/photography/application-stationery.webp",
  "/assets/photography/application-merch.webp",
  "/assets/photography/application-social.webp",
  "/assets/photography/application-clothing.webp",
  "/assets/photography/application-package.webp",
  "/assets/photography/application-outdoor.webp",
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
