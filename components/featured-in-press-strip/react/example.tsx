import { FeaturedInPressStrip } from "./FeaturedInPressStrip";

export function ColorPressStripExample() {
  return (
    <FeaturedInPressStrip
      logos={[
        {
          name: "The Daily Ledger",
          src: "https://via.placeholder.com/120x40?text=Daily+Ledger",
        },
        {
          name: "Tech Review Weekly",
          src: "https://via.placeholder.com/120x40?text=Tech+Review",
        },
        {
          name: "Metro Business",
          src: "https://via.placeholder.com/120x40?text=Metro+Biz",
        },
        {
          name: "The Broadsheet",
          src: "https://via.placeholder.com/120x40?text=Broadsheet",
        },
        {
          name: "Capital Journal",
          src: "https://via.placeholder.com/120x40?text=Cap+Journal",
        },
      ]}
    />
  );
}

export function GrayscalePressStripExample() {
  return (
    <FeaturedInPressStrip
      eyebrow="As seen in"
      showColor={false}
      logos={[
        {
          name: "The Daily Ledger",
          src: "https://via.placeholder.com/120x40?text=Daily+Ledger",
        },
        {
          name: "Tech Review Weekly",
          src: "https://via.placeholder.com/120x40?text=Tech+Review",
        },
        {
          name: "Metro Business",
          src: "https://via.placeholder.com/120x40?text=Metro+Biz",
        },
        {
          name: "The Broadsheet",
          src: "https://via.placeholder.com/120x40?text=Broadsheet",
        },
      ]}
    />
  );
}
