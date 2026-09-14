import Image from "next/image";

type MediaImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export default function MediaImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
}: MediaImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={80}
      priority={priority}
      className={className}
    />
  );
}
