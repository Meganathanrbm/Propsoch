import { useLayoutEffect, useRef, useState } from "react";

export function useProcessScroll() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [pinHeight, setPinHeight] = useState<number>();

  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    let rafId = 0;

    const setProgress = (value: number) => {
      railRef.current?.style.setProperty(
        "--timeline-progress",
        String(Math.min(Math.max(value, 0), 100)),
      );
    };

    const measure = () => {
      const sticky = stickyRef.current;
      const slot = slotRef.current;
      const content = contentRef.current;

      if (!mq.matches || !sticky || !slot || !content) {
        setPinHeight(undefined);
        if (content) content.style.transform = "";
        return;
      }

      const extra = Math.max(content.scrollHeight - slot.clientHeight, 0);
      setPinHeight(sticky.offsetHeight + extra);
    };

    const update = () => {
      rafId = 0;
      const wrapper = wrapperRef.current;
      const sticky = stickyRef.current;
      const slot = slotRef.current;
      const content = contentRef.current;
      const rail = railRef.current;
      if (!rail) return;

      const pinned = mq.matches && wrapper && sticky && slot && content;

      if (!pinned) {
        if (content) content.style.transform = "";
        const rect = rail.getBoundingClientRect();
        const vh = window.innerHeight;
        const start = vh * 0.8;
        const end = vh * 0.35;
        const total = rect.height + (start - end);
        if (total <= 0) return;
        setProgress(((start - rect.top) / total) * 125);
        return;
      }

      const extra = content.scrollHeight - slot.clientHeight;
      const maxScroll = wrapper.offsetHeight - sticky.offsetHeight;

      if (extra <= 0 || maxScroll <= 0) {
        content.style.transform = "";
        setProgress(100);
        return;
      }

      const stickyTop = parseFloat(getComputedStyle(sticky).top) || 0;
      const scrolled = Math.min(
        Math.max(stickyTop - wrapper.getBoundingClientRect().top, 0),
        maxScroll,
      );
      const fraction = scrolled / maxScroll;
      content.style.transform = `translate3d(0, ${-(fraction * extra)}px, 0)`;
      setProgress(fraction * 100);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();

    const observer = new ResizeObserver(onResize);
    if (contentRef.current) observer.observe(contentRef.current);
    if (stickyRef.current) observer.observe(stickyRef.current);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    mq.addEventListener("change", onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      mq.removeEventListener("change", onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return { wrapperRef, stickyRef, slotRef, contentRef, railRef, pinHeight };
}
