/**
 * StickyBarCTA usage examples.
 *
 * Three named exports covering the primary configurations:
 *   - BottomSolidExample: default bottom position, solid variant, dismissible
 *   - TopMinimalExample: top position, minimal variant, separate dismiss key
 *   - NonDismissibleExample: non-dismissible bar (no close button)
 *
 * In a real page, render only one StickyBarCTA at a time. All three are
 * exported here for documentation and visual testing purposes.
 */

import { StickyBarCTA } from "./StickyBarCTA";

/** Bottom-pinned, solid fill, dismissible. Suits bold/confident brand archetypes. */
export function BottomSolidExample() {
  return (
    <StickyBarCTA
      message="Start your free trial. No credit card required."
      cta={{ label: "Get started", href: "/signup" }}
      position="bottom"
      variant="solid"
      dismissible={true}
      dismissKey="sticky-bar-dismissed"
    />
  );
}

/** Top-pinned, minimal (bordered) variant, dismissible with its own localStorage key. */
export function TopMinimalExample() {
  return (
    <StickyBarCTA
      message="New: annual plans save you 30% compared to monthly billing."
      cta={{ label: "View plans", href: "/pricing" }}
      position="top"
      variant="minimal"
      dismissible={true}
      dismissKey="annual-plan-bar-dismissed"
    />
  );
}

/** Non-dismissible bar. Use when the offer context must remain visible at all times. */
export function NonDismissibleExample() {
  return (
    <StickyBarCTA
      message="Limited spots remaining for this cohort."
      cta={{ label: "Reserve your spot", href: "/reserve" }}
      position="bottom"
      variant="solid"
      dismissible={false}
    />
  );
}
