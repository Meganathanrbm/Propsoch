import type { ComponentType, RefObject } from "react";
import {
  CheckmarkIcon,
  CheckStepIcon,
  DeepDiveIcon,
  NegotiationIcon,
  PhoneIcon,
  SiteVisitIcon,
  StarIcon,
} from "@/components/ui/icons";
import { timelineSteps } from "@/lib/content";

const stepIcons: Record<string, ComponentType<{ className?: string }>> = {
  "A quick free call": PhoneIcon,
  "Discovery form": CheckStepIcon,
  "Longlist call": CheckmarkIcon,
  "Site visits": SiteVisitIcon,
  Deepdiving: DeepDiveIcon,
  "Negotiation and Closure": NegotiationIcon,
};

export function TimelinePanel({
  slotRef,
  contentRef,
  railRef,
}: {
  slotRef: RefObject<HTMLDivElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
  railRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="relative">
      <div ref={slotRef} className="xl:h-97.5 xl:overflow-hidden">
        <div ref={contentRef}>
          <div className="relative w-full pb-10 xl:pb-4">
            <ol className="flex list-none flex-col p-0">
              {timelineSteps.map((step) => (
                <li key={step.milestone} className="relative flex flex-col pt-10 pl-14">
                  <span
                    aria-hidden="true"
                    className="absolute top-10 left-1.75 flex h-10 w-10 items-center justify-center xl:left-3.25"
                  >
                    <StarIcon />
                  </span>

                  <h3 className="text-sm leading-[1.35] font-semibold text-coolgrey-100 xl:text-lg">
                    {step.milestone}
                  </h3>

                  <div className="mt-3 flex w-full flex-col gap-5 pr-4">
                    <div className="border-lightborder flex w-full flex-col gap-8 rounded-xl border bg-white p-6">
                      {step.cards.map((card) => {
                        const Icon = stepIcons[card.title];
                        return (
                          <div key={card.title} className="flex flex-col gap-2">
                            <div className="flex items-center gap-1.5">
                              {Icon && <Icon />}
                              <p className="text-sm leading-[1.35] font-medium text-coolgrey-100 xl:text-base">
                                {card.title}
                              </p>
                            </div>
                            <p className="text-muted text-sm leading-[1.35] xl:text-base">
                              {card.body}
                            </p>
                            {card.extra && (
                              <p className="text-muted text-sm leading-[1.35] xl:text-base">
                                {card.extra}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div
              ref={railRef}
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-6.5 mt-10 mb-20 w-0.5 overflow-hidden xl:left-8"
            >
              <div className="bg-coolgrey-20 absolute inset-0 rounded-full" />
              <div className="bg-primary timeline-fill absolute inset-x-0 top-0 w-full rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 hidden h-24 bg-linear-to-t to-transparent xl:block" />
    </div>
  );
}
