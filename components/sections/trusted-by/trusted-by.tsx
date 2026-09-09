import Image from "next/image";
import { MarqueeTrack } from "@/components/sections/trusted-by/marquee-track";
import { CDN, trustedByRow1, trustedByRow2 } from "@/lib/content";

const LOGO_ITEM_WIDTH = 108 + 64;
const MAX_CONTAINER_WIDTH = 1280;
const BASE_DURATION = { left: 28, right: 32 } as const;

type Logo = { name: string; file: string };

function LogoRow({ logos, direction }: { logos: Logo[]; direction: "left" | "right" }) {
  const singleSetWidth = logos.length * LOGO_ITEM_WIDTH;
  const repeat = Math.max(1, Math.ceil(MAX_CONTAINER_WIDTH / singleSetWidth));
  const set = Array.from({ length: repeat }, () => logos).flat();
  const track = [...set, ...set];

  return (
    <MarqueeTrack direction={direction} durationSeconds={BASE_DURATION[direction] * repeat}>
      {track.map((logo, i) => {
        const isDuplicate = i >= set.length;
        return (
          <Image
            key={`${logo.name}-${i}`}
            src={`${CDN}/logos/${logo.file}`}
            alt={isDuplicate ? "logo" : logo.name}
            aria-hidden={isDuplicate || undefined}
            width={108}
            height={32}
            sizes="108px"
            className="h-8 w-27 shrink-0 object-contain"
          />
        );
      })}
    </MarqueeTrack>
  );
}

export function TrustedBy() {
  return (
    <section className="flex w-full flex-col items-center gap-4 px-4" aria-labelledby="trusted-by-heading">
      <h2 id="trusted-by-heading" className="text-muted text-center text-sm font-normal">
        Trusted by homebuyers like you from
      </h2>
      <div className="flex w-full max-w-(--breakpoint-xl) flex-col gap-2">
        <LogoRow logos={trustedByRow1} direction="left" />
        <LogoRow logos={trustedByRow2} direction="right" />
      </div>
    </section>
  );
}
