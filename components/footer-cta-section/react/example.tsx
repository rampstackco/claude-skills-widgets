import { FooterCTASection } from "./FooterCTASection";

/**
 * Subtle, centered layout with a primary action only.
 * The most common usage: a clean bookend at the bottom of a feature or about page.
 */
export function DefaultSubtleCentered() {
  return (
    <FooterCTASection
      headline="Ready to ship with confidence?"
      description="Join thousands of teams already building on a foundation that holds up."
      primaryCta={{
        label: "Get started",
        href: "/signup",
        icon: "arrow-right",
      }}
      secondaryCta={{
        label: "View pricing",
        href: "/pricing",
        type: "text-link",
      }}
      alignment="center"
      variant="subtle"
    />
  );
}

/**
 * Bold variant with a brand-accent background and a TrustLogoStrip for social proof.
 * Matches the "contrasting design break" pattern described in the pattern file:
 * a full-bleed accent section signals page conclusion and drives action.
 */
export function BoldWithProofLogos() {
  return (
    <FooterCTASection
      headline="Start building today."
      description="No credit card required. Full access for 14 days."
      primaryCta={{
        label: "Start free trial",
        href: "/signup",
        variant: "solid",
        icon: "arrow-right",
      }}
      secondaryCta={{
        label: "Talk to sales",
        href: "/contact",
        type: "outlined",
      }}
      proofLogos={{
        eyebrow: "Used at teams like",
        logos: [
          { name: "Acme Corp", src: "/logos/acme.svg" },
          { name: "Globex Industries", src: "/logos/globex.svg" },
          { name: "Initech", src: "/logos/initech.svg" },
          { name: "Umbrella", src: "/logos/umbrella.svg" },
        ],
      }}
      alignment="center"
      variant="bold"
    />
  );
}

/**
 * Subtle, left-aligned layout with a SingleQuoteTestimonial anchor quote.
 * Useful on pages where a specific customer story closes the argument,
 * and center alignment would feel inconsistent with the body content.
 */
export function WithProofQuote() {
  return (
    <FooterCTASection
      headline="The last tool you add becomes the one you rely on most."
      description="Teams that integrate during setup stay integrated. Get up and running in under ten minutes."
      primaryCta={{
        label: "Get started free",
        href: "/signup",
      }}
      secondaryCta={{
        label: "See the docs",
        href: "/docs",
        type: "text-link",
      }}
      proofQuote={{
        quote:
          "Switching was the easiest infrastructure decision we made all year. The on-call rotation has been genuinely calm since.",
        attribution: {
          name: "Jordan Lee",
          title: "VP Engineering",
          company: "Northwind",
        },
      }}
      alignment="center"
      variant="subtle"
    />
  );
}
