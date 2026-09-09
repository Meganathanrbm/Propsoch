"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";

function parseStatValue(value: string) {
  const match = value.match(/^([\d,]+)(.*)$/);
  const numberPart = match?.[1];
  if (!numberPart) return { target: 0, suffix: value, useComma: false };
  return {
    target: Number(numberPart.replace(/,/g, "")),
    suffix: match[2] ?? "",
    useComma: numberPart.includes(","),
  };
}

function formatStatValue(current: number, useComma: boolean, suffix: string) {
  const rounded = Math.round(current);
  return `${useComma ? rounded.toLocaleString("en-IN") : rounded}${suffix}`;
}


function AnimatedStat({
  value,
  active,
  duration = 1200,
  delay = 0,
}: {
  value: string;
  active: boolean;
  duration?: number;
  delay?: number;
}) {
  const { target, suffix, useComma } = parseStatValue(value);
  const [display, setDisplay] = useState(target);
  const shouldAnimate = useRef(false);
  const started = useRef(false);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    shouldAnimate.current = true;
    setDisplay(0);
  }, []);

  useEffect(() => {
    if (!active || !shouldAnimate.current || started.current) return;
    started.current = true;

    let frame = 0;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    const timeout = window.setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [active, target, duration, delay]);

  return <>{formatStatValue(display, useComma, suffix)}</>;
}

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex w-full flex-col items-center bg-white px-4"
      aria-labelledby="stats-heading"
    >
      <h2 id="stats-heading" className="sr-only">
        Propsoch by the numbers
      </h2>
      <dl className="mx-auto grid w-full max-w-(--breakpoint-xl) grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-x-6 xl:px-20">
        {stats.map((s, i) => (
          <div key={s.label} className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
            <dt className="sr-only">{s.label}</dt>
            <dd className="contents">
              <strong className="text-[40px] leading-none font-normal text-coolgrey-100 tabular-nums md:text-[52px] xl:text-[56px]">
                <span aria-hidden="true">
                  <AnimatedStat value={s.value} active={active} delay={i * 100} />
                </span>
                <span className="sr-only">{s.value}</span>
              </strong>
              <span
                aria-hidden="true"
                className="text-muted text-[14px] leading-[1.35] text-balance md:text-[16px]"
              >
                {s.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
