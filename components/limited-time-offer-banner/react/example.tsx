import { LimitedTimeOfferBanner } from "./LimitedTimeOfferBanner";

/**
 * DefaultWarningBanner
 *
 * Warning variant (amber/orange). No CTA button. Dismissible, pinned to the top.
 * Replace the deadline string with your actual campaign end date.
 */
export function DefaultWarningBanner() {
  return (
    <LimitedTimeOfferBanner
      message="Sale ends Friday at midnight. 20% off all annual plans."
      deadline="2026-05-22T23:59:59Z"
      variant="warning"
      position="top"
      dismissible={true}
      dismissKey="annual-sale-may-2026"
    />
  );
}

/**
 * CelebratoryWithCTA
 *
 * Celebratory (green) variant for a launch-week promotion.
 * Includes a CTA anchor rendered to the right of the countdown.
 * Uses expiredAction="show-expired-message" so the banner stays visible
 * after the deadline but replaces the countdown with a plain notice,
 * rather than silently disappearing.
 */
export function CelebratoryWithCTA() {
  return (
    <LimitedTimeOfferBanner
      message="Launch week pricing is live. Save 30% before the window closes."
      deadline={new Date("2026-05-23T23:59:59Z")}
      variant="celebratory"
      position="top"
      cta={{ label: "See pricing", href: "/pricing" }}
      dismissible={true}
      dismissKey="launch-week-may-2026"
      expiredAction="show-expired-message"
      expiredMessage="Launch week pricing has closed. Standard rates now apply."
    />
  );
}

/**
 * MinimalBottomBanner
 *
 * Minimal variant pinned to the bottom edge, using a light background and
 * accent border (no solid fill). Suitable for brands where a heavy colored
 * banner would conflict with the design register. The offer ends Sunday;
 * the banner hides itself when the countdown expires.
 */
export function MinimalBottomBanner() {
  return (
    <LimitedTimeOfferBanner
      message="Early-bird rate applies until Sunday at 11:59 PM."
      deadline="2026-05-18T23:59:59Z"
      variant="minimal"
      position="bottom"
      dismissible={true}
      dismissKey="early-bird-may-2026"
      expiredAction="hide"
    />
  );
}
