import { CDN } from "@/lib/content";
import { Avatar } from "@/components/sections/process/process-avatar";

const testimonial = {
  name: "Roshik Shenoy",
  role: "Partner, Human Capital @ Deloitte",
  avatar: `${CDN}/testimonial/roshik-shenoy.png`,
};

export function Testimonial() {
  return (
    <figure className="m-0 flex flex-col items-center gap-4 text-center xl:items-start xl:text-left">
      <blockquote className="text-muted m-0 text-sm leading-[1.35] xl:max-w-120 xl:text-base">
        &ldquo;Their scientific and
        <em className="font-semibold text-coolgrey-100 not-italic xl:italic">
          research-based approach
        </em>
        to homebuying gave us a lot of comfort and solved our biggest pain point.&rdquo;
      </blockquote>
      <figcaption className="flex flex-col items-center gap-3 xl:flex-row xl:items-end xl:gap-4">
        <Avatar src={testimonial.avatar} alt="" />
        <div className="flex flex-col gap-1">
          <span className="text-lg leading-[1.35] text-coolgrey-100 xl:text-base">
            {testimonial.name}
          </span>
          <span className="text-primary-ink text-sm leading-[1.35] xl:text-muted xl:text-base">
            {testimonial.role}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
