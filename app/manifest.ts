import type { MetadataRoute } from "next";
import { company } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Propsoch — Buy your home with confidence",
    short_name: company.name,
    description:
      "Independent, research-backed homebuying advice for Bangalore. Compare RERA-approved properties, get Peace of Mind reports and expert negotiation.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff6d33",
    lang: "en-IN",
    categories: ["business", "lifestyle", "finance"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
