import { SiteHeader } from "@/components/layout/site-header";
import { Comparison } from "@/components/sections/comparison/comparison";
import { Faq } from "@/components/sections/faq/faq";
import { FaqCta } from "@/components/sections/faq/faq-cta";
import { Hero } from "@/components/sections/hero/hero";
import { MasterPlan } from "@/components/sections/plan/master-plan";
import { Process } from "@/components/sections/process/process";
import { Stats } from "@/components/sections/stats/stats";
import { TrustedBy } from "@/components/sections/trusted-by/trusted-by";


export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main
        id="main"
        className="flex w-full flex-col mb-8 items-center gap-(--section-gap) xl:gap-(--section-gap-lg)"
      >
        <Hero />
        <TrustedBy />
        <Comparison />
        <Stats />
        <MasterPlan />
        <Process />
        <Faq />
        <FaqCta />
      </main>
    </>
  );
}
