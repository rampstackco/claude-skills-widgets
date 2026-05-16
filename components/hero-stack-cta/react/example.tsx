import { HeroStackCTA } from "./HeroStackCTA";

/** Default: horizontal layout with a solid primary and text-link secondary. */
export default function DefaultExample() {
  return (
    <HeroStackCTA
      primary={{ label: "Get started", href: "/signup", icon: "arrow-right" }}
      secondary={{ label: "See how it works", href: "/demo", type: "text-link" }}
    />
  );
}

/** Asymmetric variant: solid primary + text-link secondary (explicit). */
export function PrimaryPlusTextLink() {
  return (
    <HeroStackCTA
      primary={{ label: "Start free trial", href: "/signup" }}
      secondary={{ label: "Contact sales", href: "/contact", type: "text-link" }}
    />
  );
}

/** Equal-weight variant: solid primary + outlined secondary. */
export function PrimaryPlusOutlined() {
  return (
    <HeroStackCTA
      primary={{ label: "Get Notion free", href: "/signup" }}
      secondary={{ label: "Request a demo", href: "/demo", type: "outlined" }}
    />
  );
}

/** Stacked layout: buttons arranged vertically on desktop too. */
export function Stacked() {
  return (
    <HeroStackCTA
      primary={{ label: "Deploy now", href: "/deploy" }}
      secondary={{ label: "Read the docs", href: "/docs", type: "text-link" }}
      alignment="stacked"
    />
  );
}
