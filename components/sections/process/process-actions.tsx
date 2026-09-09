import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


export function ProcessActions({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-4 xl:items-start", className)}>
      <Button href="#" size="lg" className="flex w-full xl:w-62.5">
        Book An Appointment
      </Button>
      <Button href="#" variant="outline" size="md" className="flex w-full xl:w-62.5">
        Read Our Blog
      </Button>
    </div>
  );
}
