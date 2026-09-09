"use client";

import { useState } from "react";
import { PillTabs, tabId } from "@/components/ui/pill-tabs";
import { PlusMinusIcon } from "@/components/ui/icons";
import { faqTabs } from "@/lib/content";

const ID_BASE = "faq";
const PANEL_ID = "faq-panel";


export function Faq() {
  const [tabIndex, setTabIndex] = useState(0);
  const activeTab = faqTabs[tabIndex] ?? faqTabs[0]!;

  return (
    <section id="FAQs" className="w-full px-4" aria-labelledby="faq-heading">
      <div className="mx-auto flex w-full flex-col items-center gap-6">
        <p className="text-primary-ink text-sm font-medium">Frequently Asked Questions</p>
        <h2
          id="faq-heading"
          className="max-w-3xl text-center text-[28px] leading-tight font-normal text-balance text-coolgrey-100 md:text-[36px]"
        >
          99% of your queries should get answered here, for others, you can always talk to us
        </h2>

        {faqTabs.length > 1 && (
          <div className="flex w-full justify-center">
            <PillTabs
              options={faqTabs.map((tab, i) => ({ value: i, label: tab.label }))}
              value={tabIndex}
              onChange={setTabIndex}
              label="Question categories"
              idBase={ID_BASE}
              controls={PANEL_ID}
              className="hide-scrollbar max-w-full overflow-x-auto"
              itemClassName="shrink-0 px-4 py-2 text-sm"
            />
          </div>
        )}

        <div
          id={PANEL_ID}
          role="tabpanel"
          aria-labelledby={tabId(ID_BASE, tabIndex)}
          className="mx-auto mt-4 flex w-full max-w-4xl flex-col gap-4"
        >
          {activeTab.items.map((item) => (
            <details
              key={item.q}
              name="faq"
              className="border-lightborder group rounded-xl border bg-white"
            >
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 p-5 text-left font-medium text-coolgrey-100 md:p-6 [&::-webkit-details-marker]:hidden">
                {item.q}
                <PlusMinusIcon open={false} className="group-open:rotate-45" />
              </summary>
              <p className="text-muted px-5 pb-5 text-sm md:px-6 md:pb-6">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
