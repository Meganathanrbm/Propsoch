"use client";

import { useState } from "react";
import Image from "next/image";
import { CDN } from "@/lib/content";

const IMAGE_SIZES = "(min-width: 768px) 50vw, 100vw";

function ImageComparisonSlider() {
  const [position, setPosition] = useState(50);

  return (
    <div className="has-[input:focus-visible]:outline-primary-strong relative aspect-13/7 w-full overflow-hidden rounded-xl select-none has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2">
      <Image
        src={`${CDN}/product-page/pom-master-plan-before.png?w=1920`}
        alt="A developer's glossy master plan brochure"
        fill
        sizes={IMAGE_SIZES}
        className="object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={`${CDN}/product-page/pom-master-plan-after.png?w=1920`}
          alt="The same site as Propsoch documents it on the ground, with the gaps marked"
          fill
          sizes={IMAGE_SIZES}
          className="object-cover"
        />
      </div>

      <span className="bg-coolgrey-10 absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-medium text-coolgrey-100">
        Broker
      </span>
      <span className="bg-primary-strong absolute right-3 bottom-3 rounded-full px-3 py-1 text-xs font-medium text-white">
        Propsoch
      </span>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-black"
        style={{ left: `${position}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-coolgrey-100 px-3 py-1.5 text-xs whitespace-nowrap text-white">
          &lsaquo; Drag &rsaquo;
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="Reveal Propsoch's on-ground analysis over the broker's brochure"
        aria-valuetext={`${Math.round(position)}% of the Propsoch analysis shown`}
        className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
      />
    </div>
  );
}

export function MasterPlan() {
  return (
    <section className="w-full px-4" aria-labelledby="master-plan-heading">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="md:border-lightborder flex flex-col gap-6 md:grid md:grid-cols-2 md:items-center md:gap-10 md:rounded-2xl md:border md:p-10">
          <div>
            <h2
              id="master-plan-heading"
              className="text-[28px] leading-tight font-normal text-coolgrey-100 md:text-[40px]"
            >
              Brokers show you the brochure. We show the reality.
            </h2>
            <p className="text-muted mt-4 md:max-w-md">
              Uncover both the magic and the missteps in the layout and amenities, usually hidden in
              glamorous model-flats &amp; fancy brochures.
            </p>
          </div>
          <ImageComparisonSlider />
        </div>
      </div>
    </section>
  );
}
