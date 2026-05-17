"use client";
import "../styles.css";
import { TrustLogoStrip, type Logo } from "../../trust-logo-strip/react/TrustLogoStrip";

export type FeaturedInPressStripProps = {
  eyebrow?: string;
  logos: Logo[];
  showColor?: boolean;
  className?: string;
};

export function FeaturedInPressStrip({
  eyebrow = "Featured in",
  logos,
  showColor = true,
  className,
}: FeaturedInPressStripProps) {
  const rootClassName = [
    "fips",
    showColor ? "fips--color" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <TrustLogoStrip eyebrow={eyebrow} logos={logos} className={rootClassName} />
  );
}

export type { Logo } from "../../trust-logo-strip/react/TrustLogoStrip";
