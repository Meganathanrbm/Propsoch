"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

type PillTabsOption<T> = { value: T; label: string };

type PillTabsProps<T> = {
  options: readonly PillTabsOption<T>[];
  value: T;
  onChange: (value: T) => void;
  label: string;
  idBase: string;
  controls: string;
  className?: string;
  itemClassName?: string;
};

export function tabId(idBase: string, index: number) {
  return `${idBase}-tab-${index}`;
}

export function PillTabs<T>({
  options,
  value,
  onChange,
  label,
  idBase,
  controls,
  className,
  itemClassName,
}: PillTabsProps<T>) {
  const listRef = useRef<HTMLDivElement>(null);

  function focusTab(index: number) {
    const buttons = listRef.current?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    buttons?.[index]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent, index: number) {
    const last = options.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;

    if (next === null) return;
    event.preventDefault();
    const option = options[next];
    if (!option) return;
    onChange(option.value);
    focusTab(next);
  }

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label={label}
      className={cn("inline-flex gap-1 rounded-md bg-coolgrey-10 p-1", className)}
    >
      {options.map((option, index) => {
        const active = option.value === value;
        return (
          <button
            key={String(option.value)}
            id={tabId(idBase, index)}
            type="button"
            role="tab"
            aria-selected={active}
            aria-controls={controls}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(option.value)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={cn(
              "cursor-pointer rounded-[5px] font-medium whitespace-nowrap transition",
              active ? "bg-white text-primary-ink shadow-sm" : "text-muted hover:text-coolgrey-100",
              itemClassName,
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
