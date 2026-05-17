import { TestimonialGrid } from "./TestimonialGrid";
import type { Testimonial } from "./TestimonialGrid";

const SIX_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Shipping confidence went up immediately after we adopted it. Our on-call rotation is genuinely calm now and the team is no longer afraid of Fridays.",
    name: "Jordan Lee",
    title: "VP Engineering",
    company: "Northwind",
  },
  {
    quote:
      "The onboarding cut our setup time from days to under an hour. I expected the usual week-long back-and-forth and it just didn't happen.",
    name: "Morgan Reyes",
    title: "CTO",
    company: "Crestfield Labs",
  },
  {
    quote:
      "Our support volume dropped 40% in the first month. The self-serve docs are clear enough that customers can actually find answers.",
    name: "Sam Okoro",
    title: "Head of Customer Success",
    company: "Fenwick",
  },
  {
    quote:
      "We evaluated four alternatives and this was the only one that fit our data residency requirements without a custom contract.",
    name: "Riley Chen",
    title: "Director of Infrastructure",
    company: "Ashford Analytics",
  },
  {
    quote:
      "The API surface is small and honest. There are no surprise abstractions that break once you push past the happy path.",
    name: "Alex Petrov",
    title: "Staff Engineer",
    company: "Brackfield",
  },
  {
    quote:
      "We migrated 12 services in a single sprint. The migration guide was accurate and the deprecation warnings were actually helpful.",
    name: "Dana Kim",
    title: "Platform Lead",
    company: "Veystone",
  },
];

const FOUR_MINIMAL: Testimonial[] = [
  {
    quote:
      "The documentation matched the behavior. That alone put it ahead of every other tool we considered.",
    name: "Taylor Brooks",
    title: "Principal Engineer",
    company: "Greyfield",
  },
  {
    quote:
      "Rollouts take minutes instead of an afternoon. The team stopped treating deploys as events and started treating them as routine.",
    name: "Cameron Walsh",
    title: "Engineering Manager",
    company: "Solaris Build",
  },
  {
    quote:
      "Our compliance team signed off in two days. Usually that process takes a quarter.",
    name: "Avery Santos",
    title: "VP Operations",
    company: "Clearbridge",
  },
  {
    quote:
      "We went from prototype to production in three weeks. The default configuration was close enough to sensible that we barely had to touch it.",
    name: "Quinn Harmon",
    title: "Founder",
    company: "Stonewick",
  },
];

/** Default: 3-column card grid of 6 testimonials. */
export function DefaultCardGrid() {
  return <TestimonialGrid testimonials={SIX_TESTIMONIALS} />;
}

/** 2-column minimal grid of 4 testimonials. */
export function TwoColumnMinimalGrid() {
  return (
    <TestimonialGrid
      testimonials={FOUR_MINIMAL}
      columns={2}
      style="minimal"
    />
  );
}

/** 3-column card grid with an eyebrow label and section headline. */
export function GridWithHeading() {
  return (
    <TestimonialGrid
      testimonials={SIX_TESTIMONIALS}
      columns={3}
      style="card"
      eyebrow="What customers say"
      headline="Teams that ship faster trust it"
    />
  );
}
