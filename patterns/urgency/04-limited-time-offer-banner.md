# Limited-Time Offer Banner

**Category**: Urgency
**Subcategory**: Time
**Conversion intent**: Communicate a sitewide or category-wide promotional deadline to every visitor, regardless of their entry point

## What it is

A persistent horizontal strip positioned at the top (or occasionally bottom) of every page during a promotional period. Contains a brief message identifying the offer and, optionally, a countdown timer or explicit deadline date. May be dismissible or sticky on scroll. Active only during the genuine promotional window; it disappears when the promotion ends.

## Why it works

The placement at the top of every page ensures that no visitor misses the deadline context, regardless of which page they land on. Unlike page-specific urgency signals, the banner travels with the user across navigation, reinforcing the time constraint during browsing that might otherwise defer the decision. Cialdini's scarcity principle applies: a real deadline makes the current price or bonus feel conditional, not permanent. The banner format keeps the message lightweight, avoiding the disruptiveness of a modal while achieving sitewide coverage.

## When to use

- A promotion is genuine, has a fixed end date, and applies across the entire site or a significant category
- Users may enter the site from multiple pages (organic search, referral links, direct) and need deadline context regardless of entry point
- The promotional window is short enough that a reminder adds meaningful urgency (a 7-day sale; a 48-hour flash period; a launch-week special)
- The offer details are simple enough to fit in a single line without truncation on mobile

## When NOT to use

- The banner is shown permanently as a marketing fixture with a rotating "sale" that never ends. Permanent offer banners are the equivalent of a store that perpetually has "CLOSING SOON" signs in the window: users recognize the pattern and discount the urgency entirely.
- The countdown in the banner resets on page reload or session restart. This is the dishonest countdown anti-pattern applied to the banner surface.
- The promotion has no real end date and the deadline in the banner is aspirational or invented.
- The offer is so minor (2% off, free shipping with a $500 minimum) that the banner imposes visual cost without meaningful conversion value.
- The brand archetype relies on calm authority or premium restraint, where a promotional banner reads as inconsistent with the brand's positioning.

Threshold question: if the banner says "Sale ends Sunday at midnight," does the sale actually end at midnight Sunday, and does the site reflect that end state once the deadline passes? If not, do not show the deadline.

## Variations

### Countdown-Integrated Banner
The banner contains both the offer message and a live countdown timer showing hours and minutes remaining. Combines the sitewide reach of the banner with the real-time urgency of a timer. Most common during peak periods (Black Friday, Cyber Monday, product launch windows) where hours matter. See `01-countdown-timer.md` for the timer implementation details.

### Dismissible Banner
The user can close the banner via an X button. Appropriate when the offer message is informational and you trust the user to act without persistent reminding. Reduces the "noise" cost of the banner for users who have already noted the deadline and want to browse without the strip consuming vertical space.

### Sticky-on-Scroll Banner
The banner remains fixed to the top of the viewport as the user scrolls down the page. Appropriate when scroll depth is deep (long product pages, long checkout flows) and you want the deadline visible at the moment of the add-to-cart or checkout decision. Not appropriate if it covers content or creates accessibility problems for keyboard users.

## Real-world examples

- **Shopify merchant storefronts (Black Friday)**: Stores using Hextom's announcement bar or similar tools display banners during Black Friday with offer text and countdown timers. Well-implemented examples tie the countdown to a specific timestamp rather than a session-relative duration.
- **RafflePress**: Uses a prominent banner with countdown timer during launch periods, with an explicit end date and discount rate visible without hover or interaction.
- **Ahrefs**: During promotional periods, Ahrefs has surfaced top-of-page banners on their pricing page and homepage announcing limited-time offers for annual plan sign-ups. The offer states the discount and a deadline date.
- **ConvertKit (now Kit)**: Email marketing tool that has surfaced limited-time banners for annual plan promotions during Black Friday, with explicit dates visible in the banner copy.
- **Framer**: During launch and promotional periods, Framer has used top-of-page announcement bars to communicate time-limited pricing for new subscribers.
- **Figma**: Has used announcement banners for conference discounts and promotional periods tied to specific events (Config conference registration, etc.), with dates named explicitly.

## Implementation notes

- **Mobile behavior**: The banner compresses to a single line on mobile; ensure the most critical information (the deadline or the offer) is not truncated. On narrow screens, a countdown timer inside the banner may need to be reduced to hours and minutes only. If the banner contains a CTA button, consider hiding the button on mobile and making the entire banner tappable to the destination.
- **Accessibility**: The banner should be the first focusable element (or near-first) in the page's tab order, so keyboard users encounter the deadline context early. If dismissible, the dismiss button must have a descriptive `aria-label` ("Dismiss promotional offer"). Use `role="banner"` sparingly; the page `<header>` already carries this role, so a promotional strip inside it may not need an additional landmark role.
- **Performance**: The banner is a static or near-static element. Avoid loading it via a separate JavaScript bundle or async fetch that causes a layout shift after page load. If the banner contains a countdown timer, load the timer script after critical content is interactive.
- **Common pitfalls**: Showing the banner after the promotion has ended (broken state management). Hardcoding the deadline date in a template and forgetting to update or remove the banner. Stacking multiple offer banners on the same page, creating visual noise and diluting the urgency of each. Using "limited time only" without specifying the end date, which is vaguer and less motivating than a named deadline.

## Archetype compatibility

This pattern fits naturally with:

- **Playful Energetic**: Promotional banners suit an energetic consumer register. The banner can carry exclamation-point energy and bright color without feeling out of place.
- **Bold Confident**: Direct promotional messaging in a high-contrast strip fits the archetype's declarative voice. Large type, clear offer, explicit deadline.
- **Warm Conversational**: Works when the copy frames the offer as a helpful heads-up rather than a high-pressure sales tactic: "In case you missed it: pricing changes Friday."

Less natural with:

- **Luxe Considered**: Sitewide promotional banners signal mass-market sales mechanics. Luxury brands rarely run public discount promotions, and the banner format specifically conflicts with the premium register.
- **Editorial Restrained**: The archetype's considered, unhurried voice is difficult to maintain when a promotional strip is pinned above every page. Use sparingly if at all; if used, the copy should be restrained and the design should not feel like a sale page.
- **Minimal Essentialist**: The banner adds a persistent element to a surface designed around absence of non-essential elements. Reserve for high-stakes deadlines only.

## Related patterns

- `01-countdown-timer.md` for the countdown integration inside this banner
- `05-early-access-window.md` for the specific variant used during product launch windows
- `08-cohort-enrollment-deadline.md` for banners tied to cohort enrollment close dates

## Component implementation

A v2 implementation of this pattern is available in [`components/limited-time-offer-banner/`](../../components/limited-time-offer-banner/). Both React (TypeScript) and HTML/CSS variants are provided. Customize via CSS custom properties.

## Sources

- Cialdini, Robert. *Influence: The Psychology of Persuasion*. Scarcity principle.
- UserGuiding: "13 Ways You Can Improve Your SaaS Black Friday Campaign" (userguiding.com/blog)
- LandingPageFlow: "Best Black Friday Landing Pages 2025" (landingpageflow.com)
- Amasty: "Countdown Timers Best Use Cases for E-Commerce" (amasty.com/blog)
