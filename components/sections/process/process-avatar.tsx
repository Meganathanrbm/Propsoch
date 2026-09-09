import Image from "next/image";
import { PentagonIcon } from "@/components/ui/icons";

export function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden">
      <PentagonIcon className="absolute inset-0 z-0" />
      <Image
        src={src}
        alt={alt}
        width={36}
        height={36}
        sizes="36px"
        className="relative z-10 aspect-square size-full object-cover pt-1"
      />
    </span>
  );
}
