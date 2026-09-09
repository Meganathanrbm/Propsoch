"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, BudgetIcon, ChevronRightIcon, HomeIcon, LocationPinIcon } from "@/components/ui/icons";
import { FilterDropdown, FilterOption } from "@/components/sections/hero/hero-filter-dropdown";
import {
  heroBudgetOptions,
  heroBudgetText,
  heroCityOptions,
  heroCtaLabel,
  heroFilterDefaults,
  heroPropertyTypeOptions,
} from "@/lib/content";
import type { City, FilterKey } from "@/lib/types";
import { cn } from "@/lib/utils";

export function HeroFilterCard() {
  const [city, setCity] = useState<City>(heroFilterDefaults.city);
  const [propertyType, setPropertyType] = useState(heroFilterDefaults.propertyType);
  const [budget, setBudget] = useState(heroFilterDefaults.budget);
  const [openFilter, setOpenFilter] = useState<FilterKey | null>(null);

  const baseId = useId();
  const cardRef = useRef<HTMLDivElement>(null);

  const idFor = (key: FilterKey) => `${baseId}-${key}`;
  const panelId = (key: FilterKey) => `${baseId}-${key}-listbox`;

  useEffect(() => {
    if (!openFilter) return;

    function onPointerDown(event: PointerEvent) {
      if (cardRef.current?.contains(event.target as Node)) return;
      setOpenFilter(null);
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openFilter]);

  function toggle(key: FilterKey) {
    setOpenFilter((current) => (current === key ? null : key));
  }

  function selectAndClose(key: FilterKey, apply: () => void) {
    apply();
    setOpenFilter(null);
    document.getElementById(idFor(key))?.focus();
  }

  const triggerProps = (key: FilterKey) => ({
    id: idFor(key),
    type: "button" as const,
    "aria-haspopup": "listbox" as const,
    "aria-expanded": openFilter === key,
    "aria-controls": panelId(key),
    onClick: () => toggle(key),
  });

  return (
    <div
      ref={cardRef}
      className="border-coolgrey-20 rounded-xl border bg-white p-4 shadow-sm"
    >
      <div className="border-coolgrey-10 relative border-b pb-3">
        <button
          {...triggerProps("city")}
          className="flex w-full cursor-pointer items-center justify-between"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-coolgrey-100">
            <LocationPinIcon className="text-primary-ink" />
            <span className="sr-only">City:</span>
            {city}
          </span>
          <ChevronRightIcon
            aria-hidden="true"
            className={cn(
              "text-muted-icon transition-transform",
              openFilter === "city" && "rotate-90",
            )}
          />
        </button>

        {openFilter === "city" && (
          <FilterDropdown
            id={panelId("city")}
            titleId={`${baseId}-city-title`}
            title="Which city are you buying in?"
            align="full"
            onClose={() => selectAndClose("city", () => {})}
          >
            {heroCityOptions.map((option) => (
              <FilterOption
                key={option}
                label={option}
                selected={option === city}
                onSelect={() => selectAndClose("city", () => setCity(option))}
              />
            ))}
          </FilterDropdown>
        )}
      </div>

      <div className="divide-coolgrey-10 grid grid-cols-2 divide-x py-3">
        <div className="relative pr-3">
          <button
            {...triggerProps("propertyType")}
            className="flex w-full cursor-pointer items-center gap-2 text-left"
          >
            <HomeIcon className="text-primary-ink shrink-0" />
            <span className="flex flex-col">
              <span className="text-muted text-xs">Property Type</span>
              <span className="text-sm font-medium text-coolgrey-100">{propertyType}</span>
            </span>
          </button>

          {openFilter === "propertyType" && (
            <FilterDropdown
              id={panelId("propertyType")}
              titleId={`${baseId}-pt-title`}
              title="Property type"
              align="left"
              onClose={() => selectAndClose("propertyType", () => {})}
            >
              {heroPropertyTypeOptions.map((option) => (
                <FilterOption
                  key={option}
                  label={option}
                  selected={option === propertyType}
                  onSelect={() => selectAndClose("propertyType", () => setPropertyType(option))}
                />
              ))}
            </FilterDropdown>
          )}
        </div>

        <div className="relative pl-3">
          <button
            {...triggerProps("budget")}
            className="flex w-full cursor-pointer items-center gap-2 text-left"
          >
            <BudgetIcon className="text-primary-ink shrink-0" />
            <span className="flex flex-col">
              <span className="text-muted text-xs">Budget</span>
              <span className="text-sm font-medium text-coolgrey-100">{budget}</span>
            </span>
          </button>

          {openFilter === "budget" && (
            <FilterDropdown
              id={panelId("budget")}
              titleId={`${baseId}-budget-title`}
              title={heroBudgetText}
              align="right"
              width="w-72"
              onClose={() => selectAndClose("budget", () => {})}
            >
              {heroBudgetOptions.map((option) => (
                <FilterOption
                  key={option.label}
                  label={option.label}
                  sublabel={option.emi}
                  selected={option.label === budget}
                  onSelect={() => selectAndClose("budget", () => setBudget(option.label))}
                />
              ))}
            </FilterDropdown>
          )}
        </div>
      </div>

      <Button
        href="#"
        size="lg"
        className="flex w-full items-center justify-center gap-2"
      >
        {heroCtaLabel}
        <ArrowRightIcon />
      </Button>
    </div>
  );
}
