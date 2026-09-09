"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { CheckIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type Align = "left" | "right" | "full";

const alignClasses: Record<Align, string> = {
  left: "left-0",
  right: "right-0",
  full: "left-0 right-0",
};

export function FilterDropdown({
  id,
  title,
  titleId,
  align = "left",
  width = "w-64",
  onClose,
  children,
}: {
  id: string;
  title?: string;
  titleId?: string;
  align?: Align;
  width?: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const selected = list.querySelector<HTMLElement>("[aria-selected='true']");
    (selected ?? list.querySelector<HTMLElement>("[role='option']"))?.focus();
  }, []);

  function onKeyDown(event: React.KeyboardEvent) {
    const options = Array.from(
      listRef.current?.querySelectorAll<HTMLElement>("[role='option']") ?? [],
    );
    if (options.length === 0) return;

    const current = options.findIndex((option) => option === document.activeElement);
    let next: number | null = null;

    if (event.key === "ArrowDown") next = current >= options.length - 1 ? 0 : current + 1;
    else if (event.key === "ArrowUp") next = current <= 0 ? options.length - 1 : current - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = options.length - 1;
    else if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (next === null) return;
    event.preventDefault();
    options[next]?.focus();
  }

  return (
    <div
      ref={listRef}
      id={id}
      role="listbox"
      aria-labelledby={titleId}
      onKeyDown={onKeyDown}
      className={cn(
        "border-coolgrey-20 absolute top-full z-50 mt-2 max-h-[60vh] overflow-y-auto rounded-xl border bg-white p-2 shadow-lg",
        alignClasses[align],
        align !== "full" && width,
      )}
    >
      {title && (
        <p
          id={titleId}
          className="border-coolgrey-10 text-muted mb-1 border-b px-3 pb-2 text-xs font-medium"
        >
          {title}
        </p>
      )}
      <div className="flex flex-col gap-0.5">{children}</div>
    </div>
  );
}

export function FilterOption({
  label,
  sublabel,
  selected,
  onSelect,
}: {
  label: string;
  sublabel?: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      tabIndex={-1}
      onClick={onSelect}
      className={cn(
        "flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-left transition",
        selected ? "bg-primarylight" : "hover:bg-coolgrey-10",
      )}
    >
      <span className="flex flex-col">
        <span
          className={cn(
            "text-sm font-medium",
            selected ? "text-primary-ink" : "text-coolgrey-100",
          )}
        >
          {label}
        </span>
        {sublabel && <span className="text-muted text-xs">{sublabel}</span>}
      </span>
      {selected && <CheckIcon className="text-primary-ink shrink-0" />}
    </button>
  );
}
