import "../styles.css";
import { PrimaryButtonCTA } from "../../primary-button-cta/react/PrimaryButtonCTA";
import { TrustLogoStrip } from "../../trust-logo-strip/react/TrustLogoStrip";
import { SingleQuoteTestimonial } from "../../single-quote-testimonial/react/SingleQuoteTestimonial";

export type FooterCTASectionPrimaryCta = {
  /** Button label text */
  label: string;
  /** Navigation href; omit for button mode */
  href?: string;
  /** Visual treatment passed to PrimaryButtonCTA */
  variant?: "solid" | "outlined";
  /** Optional trailing icon */
  icon?: "arrow-right" | "chevron-right";
};

export type FooterCTASectionSecondaryCta = {
  /** Link label text */
  label: string;
  /** Navigation href */
  href?: string;
  /** "outlined" renders via PrimaryButtonCTA; "text-link" renders a plain underlined anchor */
  type?: "outlined" | "text-link";
};

export type FooterCTASectionProofLogos = {
  /** Label text above the logo row */
  eyebrow?: string;
  /** Logo items passed to TrustLogoStrip */
  logos: { name: string; src: string; href?: string }[];
};

export type FooterCTASectionProofQuote = {
  /** Testimonial text */
  quote: string;
  /** Speaker attribution */
  attribution: {
    name: string;
    title?: string;
    company?: string;
  };
};

export type FooterCTASectionProps = {
  /** Large heading text */
  headline: string;
  /** Optional supporting paragraph */
  description?: string;
  /** Primary action button */
  primaryCta: FooterCTASectionPrimaryCta;
  /** Optional secondary action */
  secondaryCta?: FooterCTASectionSecondaryCta;
  /** When provided (with at least one logo), renders a TrustLogoStrip below the actions */
  proofLogos?: FooterCTASectionProofLogos;
  /** When provided, renders a SingleQuoteTestimonial below the actions */
  proofQuote?: FooterCTASectionProofQuote;
  /** Text and action alignment */
  alignment?: "center" | "left";
  /** Subtle uses the default surface background; bold applies a brand-accent background */
  variant?: "subtle" | "bold";
  /** Extra class appended to the root element */
  className?: string;
};

export function FooterCTASection({
  headline,
  description,
  primaryCta,
  secondaryCta,
  proofLogos,
  proofQuote,
  alignment = "center",
  variant = "subtle",
  className,
}: FooterCTASectionProps) {
  const hasProofLogos = proofLogos && proofLogos.logos.length > 0;
  const hasProofQuote = Boolean(proofQuote);
  const hasProof = hasProofLogos || hasProofQuote;

  const rootClass = [
    "fcs",
    `fcs--${alignment}`,
    `fcs--${variant}`,
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const renderSecondaryCta = () => {
    if (!secondaryCta) return null;

    if (secondaryCta.type === "outlined") {
      return (
        <PrimaryButtonCTA
          label={secondaryCta.label}
          href={secondaryCta.href}
          variant="outlined"
        />
      );
    }

    // Default: text-link
    return (
      <a className="fcs__secondary-link" href={secondaryCta.href}>
        {secondaryCta.label}
      </a>
    );
  };

  return (
    <section className={rootClass} aria-label={headline}>
      <div className="fcs__inner">
        <h2 className="fcs__headline">{headline}</h2>

        {description && (
          <p className="fcs__description">{description}</p>
        )}

        <div className="fcs__actions">
          <PrimaryButtonCTA
            label={primaryCta.label}
            href={primaryCta.href}
            variant={primaryCta.variant ?? "solid"}
            icon={primaryCta.icon}
          />
          {renderSecondaryCta()}
        </div>

        {hasProof && (
          <div className="fcs__proof">
            {hasProofLogos && (
              <TrustLogoStrip
                eyebrow={proofLogos!.eyebrow}
                logos={proofLogos!.logos}
              />
            )}
            {hasProofQuote && (
              <SingleQuoteTestimonial
                quote={proofQuote!.quote}
                attribution={proofQuote!.attribution}
                style="minimal"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
