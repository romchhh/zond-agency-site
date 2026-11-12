import Image from "next/image";

type MediaImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  unoptimized?: boolean;
};

export default function MediaImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
  unoptimized = false,
}: MediaImageProps) {
  // Case assets: skip optimizer — Vercel often returns 402 for /_next/image sizes.
  const skipOptimizer = unoptimized || src.includes("/assets/cases/");

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={90}
      priority={priority}
      {...(priority ? {} : { loading: "lazy" as const })}
      decoding="async"
      className={className}
      unoptimized={skipOptimizer}
    />
  );
}
