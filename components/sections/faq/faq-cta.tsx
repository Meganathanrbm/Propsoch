import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CDN } from "@/lib/content";

export function FaqCta() {
  return (
    <section className="w-full px-4" aria-labelledby="faq-cta-heading">
      <div className="bg-surface-dark mx-auto flex w-full flex-col items-center justify-center rounded-2xl px-7 py-8 text-center xl:max-w-4xl xl:flex-row xl:justify-between xl:gap-6 xl:px-12 xl:py-5 xl:text-left">
        <Image
          src={`${CDN}/bromatkar_home_page/mobile/spectacles.png`}
          alt="spectacles"
          aria-hidden="true"
          width={620}
          height={260}
          sizes="(min-width: 1280px) 180px, 260px"
          className="h-auto w-full max-w-65 xl:order-first xl:max-w-45"
        />
        <div className="mt-6 flex flex-col items-center gap-3 text-white xl:mt-0 xl:flex-1 xl:items-start">
          <h2 id="faq-cta-heading" className="text-[22px] leading-[1.15] font-normal xl:text-[28px]">
            Still have questions?
          </h2>
          <p className="text-[16px] leading-[1.35] font-normal">We are always here for you</p>
        </div>
        <Button
          href="#"
          size="lg"
          className="mt-5 flex w-full max-w-47.5 shrink-0 xl:mt-0"
        >
          Book A Free Call
        </Button>
      </div>
    </section>
  );
}
