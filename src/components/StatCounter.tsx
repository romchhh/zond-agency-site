"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: string;
};

function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, suffix: value };
  return { number: parseInt(match[1], 10), suffix: match[2] };
}

export default function StatCounter({ value }: StatCounterProps) {
  const ref = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);
  const [display, setDisplay] = useState(0);
  const { number, suffix } = parseStatValue(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animatedRef.current) return;
        animatedRef.current = true;

        const duration = Math.min(2200, 900 + number * 12);
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * number));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.35, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [number]);

  return (
    <strong ref={ref}>
      {display}
      {suffix}
    </strong>
  );
}
