import { ReviewAggregate } from "./ReviewAggregate";

/**
 * CompactWithSource
 *
 * Compact inline row with a fractional (4.5) rating and a text source label.
 * Suitable for placement inside hero sections or near a headline CTA.
 */
export function CompactWithSource(): JSX.Element {
  return (
    <ReviewAggregate
      rating={4.5}
      reviewCount={12847}
      source="on G2"
      style="compact"
    />
  );
}

/**
 * ExpandedBadgeWithLogo
 *
 * Expanded badge block with a fractional (4.8) rating, a platform source logo,
 * and a text source label. Use this as a standalone trust callout on a pricing
 * page or landing section.
 */
export function ExpandedBadgeWithLogo(): JSX.Element {
  return (
    <ReviewAggregate
      rating={4.8}
      reviewCount={3210}
      source="on Capterra"
      sourceLogo="https://via.placeholder.com/72x20"
      style="expanded"
    />
  );
}

/**
 * WholeNumberRating
 *
 * Compact row with a whole-number (5) rating and a verbatim string count.
 * Demonstrates that numeric `reviewCount` can be replaced with a pre-formatted
 * string (e.g. "2.1k") when needed.
 */
export function WholeNumberRating(): JSX.Element {
  return (
    <ReviewAggregate
      rating={5}
      reviewCount="2.1k"
      source="on App Store"
      style="compact"
    />
  );
}
