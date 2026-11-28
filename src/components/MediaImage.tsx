import Image from "next/image";
import { useMediaVersion } from "@/components/MediaVersionProvider";
import { withMediaVersion } from "@/lib/media-version";

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
  const version = useMediaVersion();
  const resolvedSrc = withMediaVersion(src, version);

  // Skip optimizer for frequently replaced media so file swaps show after refresh
  // (and avoid stale /_next/image cache / Vercel 402 on case assets).
  const skipOptimizer =
    unoptimized ||
    src.includes("/assets/cases/") ||
    src.includes("/assets/photography/") ||
    src.includes("/services/") ||
    src.includes("/uploads/");

  return (
    <Image
      src={resolvedSrc}
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
