import { heroTrustBadges } from "@/lib/content";
import { cn } from "@/lib/utils";

export function TrustBadges({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-6 gap-y-4", className)}>
      {heroTrustBadges.map(({ icon: Icon, title, subtitle }) => (
        <li key={title} className="flex items-center gap-3">
          <span className="bg-primarylight flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
            <Icon className="text-primary-ink" />
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-medium text-coolgrey-100">{title}</span>
            <span className="text-muted text-xs">{subtitle}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
