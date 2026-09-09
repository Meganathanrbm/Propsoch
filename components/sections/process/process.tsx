"use client";

import { ProcessActions } from "@/components/sections/process/process-actions";
import { ProcessHeading } from "@/components/sections/process/process-heading";
import { useProcessScroll } from "@/components/sections/process/process-hooks";
import { TimelinePanel } from "@/components/sections/process/process-timeline";
import { Testimonial } from "@/components/sections/process/process-testimonial";
import { Button } from "@/components/ui/button";

export function Process() {
  const { wrapperRef, stickyRef, slotRef, contentRef, railRef, pinHeight } =
    useProcessScroll();

  return (
    <section
      id="process-section"
      className="w-full px-4"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div
          ref={wrapperRef}
          className="relative"
          style={pinHeight ? { height: pinHeight } : undefined}
        >
          <div
            ref={stickyRef}
            className="flex flex-col gap-10 xl:sticky xl:top-32 xl:grid xl:grid-cols-2 xl:items-start"
          >
            <div className="order-1 flex flex-col gap-8">
              <ProcessHeading />
              <Button
                href="#"
                size="lg"
                className="mt-5 hidden md:flex mx-auto sm:mx-0 max-w-xs xl:mt-0"
              >
                Book A Appointment
              </Button>
              <Testimonial />
            </div>

            <div className="order-2">
              <TimelinePanel
                slotRef={slotRef}
                contentRef={contentRef}
                railRef={railRef}
              />
            </div>

            <ProcessActions className="order-3 w-full sm:hidden grid xl:col-start-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
