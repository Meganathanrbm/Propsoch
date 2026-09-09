"use client";

import { useState } from "react";
import { PillTabs, tabId } from "@/components/ui/pill-tabs";
import { comparisonRows, comparisonPortalRows } from "@/lib/content";
import TRow from "./TRow";

type CompareAgainst = "brokers" | "portals";

const tabOptions: { value: CompareAgainst; label: string }[] = [
  { value: "brokers", label: "Local brokers" },
  { value: "portals", label: "Online portals" },
];

const ID_BASE = "comparison";
const PANEL_ID = "comparison-panel";

export function Comparison() {
  const [tab, setTab] = useState<CompareAgainst>("brokers");
  const activeIndex = tabOptions.findIndex((option) => option.value === tab);

  const rows =
    tab === "brokers"
      ? comparisonRows.map((r) => ({ label: r.label, propsoch: r.propsoch, other: r.brokers }))
      : comparisonPortalRows.map((r) => ({ label: r.label, propsoch: r.propsoch, other: r.portals }));

  return (
    <section className="w-full px-4" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-0">
          <h2
            id="comparison-heading"
            className="text-[32px] leading-tight font-normal text-coolgrey-100 md:text-[40px]"
          >
            How are we different?
          </h2>
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row md:justify-start">
            <p className="text-muted">Compare our services with</p>
            <PillTabs
              options={tabOptions}
              value={tab}
              onChange={setTab}
              label="Compare our services with"
              idBase={ID_BASE}
              controls={PANEL_ID}
              itemClassName="px-3 py-1.5 text-sm"
            />
          </div>
        </div>

        <div className="relative mt-6">
          <div
            id={PANEL_ID}
            role="tabpanel"
            aria-labelledby={tabId(ID_BASE, activeIndex === -1 ? 0 : activeIndex)}
            tabIndex={0}
            className="border-lightborder w-full overflow-x-auto rounded-2xl border"
          >
            <table className="w-full min-w-[640px] border-separate border-spacing-0">
              <caption className="sr-only">
                Comparison of Propsoch against {tab === "brokers" ? "local brokers" : "online portals"}
              </caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky left-0 z-10 bg-white px-4 py-3 text-left text-sm font-medium text-coolgrey-90 xl:px-6 xl:py-5 xl:text-[18px]"
                  >
                    What you care about
                  </th>
                  <th
                    scope="col"
                    className="bg-primarylight rounded-tr-2xl px-4 py-3 text-left text-sm font-semibold xl:px-6 xl:py-5 xl:text-[20px]"
                  >
                    <span className="text-primary-ink">Prop</span>
                    <span className="text-coolgrey-100">soch</span>
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-sm font-medium text-coolgrey-90 xl:px-6 xl:py-5 xl:text-[18px]"
                  >
                    {tab === "brokers" ? (
                      "Local brokers"
                    ) : (
                      <>
                        Online portals
                        <br />
                        <span className="text-muted font-normal">
                          (Housing/99Acres/
                          <br className="inline xl:hidden" />
                          Magicbricks)
                        </span>
                      </>
                    )}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <TRow key={row.label} row={row} isLast={i === rows.length - 1} />
                ))}
              </tbody>
            </table>
          </div>

          {/* Scroll affordance: on a 390px screen the competitor column is
              entirely off-screen and there was previously no cue at all. */}
          <div
            aria-hidden="true"
            className="from-background pointer-events-none absolute inset-y-0 right-0 w-10 rounded-r-2xl bg-linear-to-l to-transparent lg:hidden"
          />
        </div>

        <p className="text-muted mt-2 text-xs lg:hidden">Scroll the table sideways to compare &rarr;</p>
      </div>
    </section>
  );
}
