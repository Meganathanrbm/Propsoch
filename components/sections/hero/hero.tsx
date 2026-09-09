import Image from "next/image";
import Link from "next/link";
import { HeroFilterCard } from "@/components/sections/hero/hero-filter-card";
import { RotatingWord } from "@/components/sections/hero/hero-rotating-word";
import { TrustBadges } from "@/components/sections/hero/hero-trust-badges";
import {
  CDN,
  heroHeadingLines,
  heroLoginLabel,
  heroLoginText,
  heroSubtext,
} from "@/lib/content";

const HERO_ART_SIZES =
  "(min-width: 1280px) 46vw, (min-width: 768px) 50vw, 1px";

export function Hero() {
  return (
    <section
      id="hero-section"
      className="bg-surface-soft w-full overflow-hidden"
    >
      <div className="mx-auto grid w-full relative max-w-(--breakpoint-xl) grid-cols-1 gap-10 px-4 pt-10 pb-12 md:grid-cols-2 md:items-center md:gap-8 md:px-8 md:pt-16 md:pb-20 xl:gap-12 xl:px-0">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-[36px] leading-[1.15] font-normal text-coolgrey-100 sm:text-[44px] xl:text-[60px]">
            {heroHeadingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <RotatingWord />
          </h1>

          <div className="max-w-md">
            <HeroFilterCard />
          </div>

          <p className="text-muted text-sm">
            {heroLoginText}
            <Link href="#" className="text-primary-ink underline">
              {heroLoginLabel}
            </Link>
          </p>

          <p className="max-w-md text-lg text-coolgrey-80">
            {heroSubtext}
          </p>

          <TrustBadges className="mt-2" />
        </div>

        {/* Right Hero Image */}
        <div className="relative hidden aspect-4/5 w-full md:block xl:aspect-square">
          {/* Hero Vector */}
          <Image
            src={`${CDN}/bromatkar_home_page/desktop/bromatkar_hero_vector.png?w=1920`}
            alt="bromatkar_hero_vector"
            aria-hidden="true"
            fill
            sizes={HERO_ART_SIZES}
            className="object-contain object-right"
          />

          {/* Main Hero Background Image */}
          <Image
            src={`${CDN}/bromatkar_home_page/desktop/hero_new_bg.png?w=1920`}
            alt="An illustrated homebuyer wearing hypnotic glasses, dazzled by a broker's pitch"
            fill
            sizes={HERO_ART_SIZES}
            loading="eager"
            fetchPriority="high"
            className="object-contain object-right sm:scale-140"
          />
        </div>
      </div>
    </section>
  );
}