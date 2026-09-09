import { cn } from "@/lib/utils";

type IconProps = { className?: string };

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusMinusIcon({ open, className }: IconProps & { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      className={cn("shrink-0 transition-transform duration-200", open && "rotate-45", className)}
      fill="none"
      stroke="#212130"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" className={cn("text-primary shrink-0", className)} fill="currentColor" aria-hidden="true">
      <path d="M15.595 7.434c.14.144.229.348.229.566 0 .22-.089.42-.229.566a.783.783 0 0 1-.56.23c-1.771 0-3.373.736-4.524 1.925-1.111 1.147-1.8 2.714-1.808 4.447v.004a.55.55 0 0 1 .004.028v.004a.702.702 0 0 1-.196.567.79.79 0 0 1-.56.23.79.79 0 0 1-.56-.23.72.72 0 0 1-.19-.566v-.004c0-.87-.169-1.7-.483-2.458a5.767 5.767 0 0 0-1.32-2.018.99.99 0 0 1-.048-.049C3.622 9.514 2.04 8.798.793 8.798a.783.783 0 0 1-.56-.232A.783.783 0 0 1 0 8c0-.44.354-.798.789-.802h.004c.479 0 .966-.053 1.453-.171a5.606 5.606 0 0 0 3.531-2.284A5.65 5.65 0 0 0 7.125.875V.83c0-.008-.004-.02-.004-.028 0-.012.004-.02.004-.032v-.008C7.145.338 7.492 0 7.914 0c.218 0 .419.09.56.236a.99.99 0 0 1 .23.513c0 .016.003.033.003.053 0 .017-.004.033-.004.05v.004c.004.468.06.94.169 1.416.346 1.473 1.168 2.706 2.263 3.569 1.09.863 2.459 1.359 3.892 1.359h.008c.217 0 .415.09.56.236Z" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 12 12" fill="none" className={className} aria-hidden="true">
      <path
        d="M10.985 9.165c0 .18-.04.365-.125.545-.085.18-.195.35-.34.51-.245.27-.515.465-.82.59-.3.125-.625.19-.975.19-.51 0-1.055-.12-1.63-.365-.575-.245-1.15-.575-1.72-.99-.575-.42-1.12-.885-1.64-1.4a15.71 15.71 0 0 1-1.395-1.635 10.463 10.463 0 0 1-.98-1.705C.845 4.57.725 4.025.725 3.505c0-.34.06-.665.18-.965.12-.305.31-.585.575-.835.32-.315.67-.47 1.04-.47.14 0 .28.03.405.09.13.06.245.15.335.28l1.16 1.635c.09.125.155.24.2.35.045.105.07.21.07.305 0 .12-.035.24-.105.355-.065.115-.16.235-.28.355l-.38.395c-.055.055-.08.12-.08.2 0 .04.005.075.015.115.015.04.03.07.04.1.09.165.245.38.465.64.225.26.465.525.725.79.27.265.53.51.795.735.23.22.445.37.615.46.025.01.055.025.09.04.04.015.08.02.125.02.085 0 .15-.03.205-.085l.38-.375c.125-.125.245-.22.36-.28.115-.07.23-.105.355-.105.095 0 .195.02.305.065.11.045.225.11.35.195l1.655 1.175c.13.09.22.195.275.32.05.125.08.25.08.39Z"
        stroke="#292D32"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

export function CheckStepIcon({ className }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 12 12" fill="none" className={className} aria-hidden="true">
      <path
        d="M11 5v2.5C11 10 10 11 7.5 11h-3C2 11 1 10 1 7.5v-3C1 2 2 1 4.5 1H7"
        stroke="#292D32"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 5H9C7.5 5 7 4.5 7 3V1l4 4Z" stroke="#292D32" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 6.5h3" stroke="#292D32" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 8.5h2" stroke="#292D32" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckmarkIcon({ className }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="#292D32" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteVisitIcon({ className }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 12 12" fill="none" className={className} aria-hidden="true">
      <path d="M1 11h10" stroke="#292D32" strokeWidth="0.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M1.475 11L1.5 4.985c0-.305.145-.595.385-.785l3.5-2.725c.36-.28.865-.28 1.23 0l3.5 2.72c.245.19.385.48.385.79V11"
        stroke="#292D32"
        strokeWidth="0.75"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path d="M6.5 8.5h-1c-.415 0-.75.335-.75.75V11h2.5V9.25c0-.415-.335-.75-.75-.75Z" stroke="#292D32" strokeWidth="0.75" strokeMiterlimit="10" strokeLinejoin="round" />
      <path d="M4.75 6.875h-1c-.275 0-.5-.225-.5-.5v-.75c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5v.75c0 .275-.225.5-.5.5Z" stroke="#292D32" strokeWidth="0.75" strokeMiterlimit="10" strokeLinejoin="round" />
      <path d="M8.25 6.875h-1c-.275 0-.5-.225-.5-.5v-.75c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5v.75c0 .275-.225.5-.5.5Z" stroke="#292D32" strokeWidth="0.75" strokeMiterlimit="10" strokeLinejoin="round" />
      <path d="M9.5 3.5l-.015-1.5h-2.2" stroke="#292D32" strokeWidth="0.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DeepDiveIcon({ className }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 12 12" fill="none" className={className} aria-hidden="true">
      <path d="M6 6c1.38 0 2.5-1.12 2.5-2.5S7.38 1 6 1 3.5 2.12 3.5 3.5 4.62 6 6 6Z" stroke="#292D32" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.705 11c0-1.935 1.925-3.5 4.295-3.5" stroke="#292D32" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.1 10.7a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z" stroke="#292D32" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 11l-.5-.5" stroke="#292D32" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function NegotiationIcon({ className }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 12 12" fill="none" className={className} aria-hidden="true">
      <path
        d="M11 3.125v2.55c0 .635-.21 1.17-.585 1.54-.37.375-.905.585-1.54.585v.905c0 .34-.38.545-.66.355l-.485-.32c.045-.155.065-.325.065-.505V6.2c0-1.02-.68-1.7-1.7-1.7H2.7c-.07 0-.135.005-.2.01V3.125C2.5 1.85 3.35 1 4.625 1h4.25c1.275 0 2.125.85 2.125 2.125Z"
        stroke="#292D32"
        strokeWidth="0.75"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.795 6.2v2.035c0 .18-.02.35-.065.505-.185.735-.795 1.195-1.635 1.195H4.735l-1.51 1.005c-.225.155-.525-.01-.525-.28v-.725c-.51 0-.935-.17-1.23-.465-.3-.3-.47-.725-.47-1.235V6.2c0-.95.59-1.605 1.5-1.69.065-.005.13-.01.2-.01h3.395c1.02 0 1.7.68 1.7 1.7Z"
        stroke="#292D32"
        strokeWidth="0.75"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PentagonIcon({ className }: IconProps) {
  return (
    <svg width="58" height="57" viewBox="0 0 58 57" className={cn("h-full w-full", className)} aria-hidden="true">
      <path
        d="M0.414 23.418v25.61a5.858 5.858 0 0 0 5.858 5.858h42.978c3.918 0 7.095-3.226 7.095-7.205V23.537c0-1.99-.794-3.79-2.078-5.094a4.66 4.66 0 0 0-.637-.575l-.235-.179-.008-.006L32.33 1.486a2.97 2.97 0 0 0-.087-.067C31.062.53 29.6.002 28.017.002h-.038a5.19 5.19 0 0 0-2.962 1.228l-.558.425-21.06 15.94-.065.05-.343.26-.075.058C1.457 19.261.45 21.22.414 23.418Z"
        fill="#FFBFA5"
        fillOpacity="0.57"
      />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className={className} fill="none" stroke="#292D32" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}

export function ShareIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className={className} fill="none" stroke="#292D32" strokeWidth="2" aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.6 13.5l6.8 3.9M15.4 6.6L8.6 10.5" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className={className} fill="none" stroke="#292D32" strokeWidth="2" aria-hidden="true">
      <path d="M12 21s-7-4.35-9.5-8.5C.9 9 2.1 5.5 5.4 4.7 7.6 4.2 9.8 5 11 6.8 12.2 5 14.4 4.2 16.6 4.7 19.9 5.5 21.1 9 19.5 12.5 17 16.65 12 21 12 21z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" className={className} fill="none" stroke="#292D32" strokeWidth="3" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

export function LocationPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className={className} aria-hidden="true">
      <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 10.5L12 4l8 6.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9.5V20h12V9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BudgetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 4h9l5 5v11H6z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 9h4M9 12.5h6M9 16h6" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MinusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 3l7 3v5.5c0 4.5-3 7.9-7 9.5-4-1.6-7-5-7-9.5V6z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AdvisorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5" strokeLinecap="round" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 19c0-3.3 2.9-6 6.5-6s6.5 2.7 6.5 6" strokeLinecap="round" />
      <path d="M15.5 3.2a3 3 0 0 1 0 5.8" strokeLinecap="round" />
      <path d="M17.5 13.3c2.3.6 4 2.8 4 5.7" strokeLinecap="round" />
    </svg>
  );
}

export function InsightsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 20V10M12 20V4M19 20v-7" strokeLinecap="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20 12a8 8 0 1 1-15.2-3.5L4 20l4-1a8 8 0 0 0 12-6.5z" />
    </svg>
  );
}
