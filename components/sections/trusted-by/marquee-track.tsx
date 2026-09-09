"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";


export function MarqueeTrack({
  direction,
  durationSeconds,
  children,
}: {
  direction: "left" | "right";
  durationSeconds: number;
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) setPaused(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden py-2">
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r to-transparent" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l to-transparent" />
      <div
        className={cn(
          "flex w-max items-center gap-16",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          paused && "marquee-paused",
        )}
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {children}
      </div>
    </div>
  );
}
