import { MultiOptionCTACluster } from "./MultiOptionCTACluster";

/**
 * Two-option split: developer path vs. business path.
 * Both options use the default "solid" variant so neither dominates the other.
 */
export function DeveloperVsBusinessExample() {
  return (
    <MultiOptionCTACluster
      eyebrow="Choose your path"
      headline="Where do you want to start?"
      options={[
        {
          label: "Start building",
          href: "/docs/quickstart",
          description:
            "API access, SDKs, and a sandbox environment ready in minutes.",
        },
        {
          label: "Talk to sales",
          href: "/contact",
          description:
            "Custom pricing, SLAs, and dedicated onboarding support.",
        },
      ]}
    />
  );
}

/**
 * Three-option cluster covering different purchase-readiness levels:
 * free tier, paid self-serve trial, and enterprise sales demo.
 * Each option includes a description to reduce ambiguity about what happens after clicking.
 */
export function ThreeTierWithDescriptionsExample() {
  return (
    <MultiOptionCTACluster
      eyebrow="Pick what fits"
      headline="One product, three ways to get started"
      options={[
        {
          label: "Start free",
          href: "/signup/free",
          description: "Up to 3 projects, no credit card required.",
          icon: "chevron-right",
        },
        {
          label: "Start trial",
          href: "/signup/trial",
          description: "Full-featured 14-day trial, no restrictions.",
          icon: "chevron-right",
        },
        {
          label: "Book a demo",
          href: "/demo",
          description: "Live walkthrough with a product specialist.",
          icon: "chevron-right",
        },
      ]}
    />
  );
}

/**
 * Stacked layout example: two options displayed in a column at all viewports.
 * Useful in narrow contexts such as a sidebar, modal, or mobile-first landing section.
 * The arrow icon reinforces directionality for each path.
 */
export function StackedLayoutExample() {
  return (
    <MultiOptionCTACluster
      layout="stacked"
      eyebrow="Get started"
      headline="Two paths, one product"
      options={[
        {
          label: "For individual developers",
          href: "/signup/developer",
          description: "CLI tools, API keys, and local development support.",
          icon: "arrow-right",
        },
        {
          label: "For teams and organizations",
          href: "/signup/teams",
          description:
            "Role-based access, audit logs, and admin console included.",
          icon: "arrow-right",
        },
      ]}
    />
  );
}
