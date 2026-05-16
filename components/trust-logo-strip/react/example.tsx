import { TrustLogoStrip } from "./TrustLogoStrip";

export function DefaultExample() {
  return (
    <TrustLogoStrip
      logos={[
        { name: "Acme Corp", src: "https://via.placeholder.com/120x40?text=Acme" },
        { name: "Globex", src: "https://via.placeholder.com/120x40?text=Globex" },
        { name: "Initech", src: "https://via.placeholder.com/120x40?text=Initech" },
        { name: "Umbrella", src: "https://via.placeholder.com/120x40?text=Umbrella" },
      ]}
    />
  );
}

export function CustomEyebrowExample() {
  return (
    <TrustLogoStrip
      eyebrow="Featured in"
      logos={[
        { name: "TechCrunch", src: "https://via.placeholder.com/120x40?text=TC" },
        { name: "The Verge", src: "https://via.placeholder.com/120x40?text=Verge" },
        { name: "Wired", src: "https://via.placeholder.com/120x40?text=Wired" },
      ]}
    />
  );
}

export function WithLinksExample() {
  return (
    <TrustLogoStrip
      eyebrow="Trusted by teams at"
      logos={[
        {
          name: "GitHub",
          src: "https://via.placeholder.com/120x40?text=GitHub",
          href: "https://github.com",
        },
        {
          name: "Stripe",
          src: "https://via.placeholder.com/120x40?text=Stripe",
          href: "https://stripe.com",
        },
      ]}
    />
  );
}
