# Real-Time Activity Feed

**Category**: Social Proof
**Subcategory**: Live Activity
**Conversion intent**: Reduce hesitation at the decision point by showing that other people are actively engaging with the product right now

## What it is

A live or near-live notification stream showing recent user actions: sign-ups, purchases, trial starts, or other conversions. Typically displayed as a small toast notification in a corner of the screen, an in-page ticker, or a modal overlay. The classic format shows something like "Jordan from Austin started a free trial 4 minutes ago." The defining characteristic is temporal proximity: the activity described is recent.

## Why it works

The pattern activates Cialdini's social proof principle at the moment of highest hesitation, when a visitor is at or near the conversion action. Seeing that another person just completed the same action reduces the perceived risk. The temporal element ("3 minutes ago") adds an urgency-adjacent signal: the product is active and people are choosing it right now, not in some historical aggregate. There is also a herding effect: the action of the first person reduces the friction for the next. For e-commerce, this aligns with Baymard Institute findings that cart abandonment is partially driven by uncertainty about whether others are successfully completing the same purchase. The real-time feed answers that uncertainty with visible evidence.

## When to use

- E-commerce or SaaS with a clear, frequent conversion action (sign-up, purchase, trial start)
- The page is a product or checkout surface where a final hesitation dip in conversion is suspected
- The activity being shown is genuine and representative of the actual conversion rate
- The design implementation is small enough to be an ambient signal rather than an interruption

## When NOT to use

- The actual activity rate is low enough that the feed would show dates from weeks ago (this destroys credibility faster than no feed at all)
- The activity shown is fabricated or uses placeholder data (a fundamental honesty violation)
- The product is premium or luxury where showing that many others are purchasing signals mass-market rather than exclusivity
- The brand archetype signals restraint; a live activity toast conflicts with considered, unhurried register

## Variations

### Corner toast notification
A small notification appears at the bottom-left or bottom-right corner showing a recent action. Auto-dismisses after 6-10 seconds. The most common and least intrusive implementation. Appears as an ambient signal without blocking content.

### In-page activity ticker
A horizontal feed embedded within the page body, showing a rolling list of recent actions. More visible than a toast but static in layout; the visitor must look at it intentionally. Common on event registration and crowdfunding pages.

### Modal overlay (social proof moment)
A modal appears before or after the primary CTA, showing a recent activity summary ("47 people signed up in the last hour"). Higher interruption, higher visibility. Only appropriate if the product has high enough activity to make the number meaningful.

### Review-trigger notification
A toast that shows a recent customer review ("Maria from Chicago left a 5-star review 12 minutes ago"). Combines activity proof with review content. Used on e-commerce product pages as an alternative to a full review section.

## Real-world examples

- **TrustPulse (platform)**: The TrustPulse widget is the category-defining implementation. It powers real-time activity notifications for WooCommerce stores, membership sites, and SaaS products. The platform shows recent signups, purchases, and registrations as corner toasts. Used by thousands of e-commerce and online service businesses.
- **FOMO (platform)**: Another widely used social proof notification tool, used by e-commerce stores on Shopify and standalone sites. The product shows recent purchase and sign-up events as corner toasts or side feeds.
- **Booking.com**: The accommodation booking platform shows "X people are looking at this right now" and "Last booked Y hours ago" as inline social proof on individual listing pages. One of the highest-traffic implementations of the activity feed concept.
- **Eventbrite**: Event registration pages show real-time attendance signals ("Only 12 spots left" combined with "32 people are registered"). The in-page variant rather than a toast.
- **Product Hunt**: Launch pages show live upvote counts that update in real time, functioning as a public activity feed for product launches.

## Implementation notes

- **Mobile behavior**: The corner toast must not obstruct primary CTAs, navigation, or sticky CTAs. On mobile, position at the bottom of the screen with adequate bottom padding to clear any sticky navigation or app chrome. Auto-dismiss timing may need to be shorter on mobile sessions where viewport is more limited.
- **Accessibility**: Activity notifications must not interrupt keyboard focus. Use `aria-live="polite"` on the notification container so screen readers announce new notifications without interrupting the user's current reading flow. The notification must be dismissible via keyboard for users who find it distracting. Do not use `aria-live="assertive"` for this pattern; it is ambient, not critical.
- **Performance**: Feed data should be fetched asynchronously and never block page rendering. The feed component should be deferred until after the main page content is interactive. If using a third-party widget, load it after the critical path completes using `defer` or conditional loading based on scroll position.
- **Common pitfalls**: Fabricating or recycling old data. Showing activities from geographic locations that are not representative (showing only large-city users when the product serves a different market). Positioning the toast so it overlaps the primary CTA and reduces its click-through rate. Showing too many notifications in sequence, creating the impression of an automated loop rather than genuine activity.

## Archetype compatibility

This pattern fits naturally with:

- **Warm Conversational**: The conversational register ("Jordan from Austin just joined") fits brands where customer identity and community are part of the value proposition. The toast reads as a community update rather than a sales tactic.
- **Playful Energetic**: Consumer brands with energetic aesthetics can style activity notifications with brand color and playful copy without them feeling intrusive.
- **Vibrant Saturated**: High-energy consumer products and marketplaces use this pattern with saturated brand colors. The notification's visual vibrancy matches the brand register.

Less natural with:

- **Luxe Considered**: Showing that many others are buying signals mass-market accessibility. The pattern is incompatible with the exclusivity and considered restraint of luxury brands.
- **Editorial Restrained**: The intrusive ambient notification conflicts with the archetype's stillness and considered whitespace. This pattern would not appear on a Linear or Vercel surface.
- **Clinical Trustworthy**: Healthcare and financial products risk appearing manipulative if they deploy urgency-adjacent activity feeds. The pattern can backfire in high-trust contexts by suggesting pressure tactics.
- **Minimal Essentialist**: Any ambient notification layer conflicts with the archetype's commitment to removing non-essential elements.

## Related patterns

- `07-customer-count-display.md` for the static aggregate count version of the same signal
- `09-review-aggregate.md` for third-party-verified activity proof
- `03-single-quote-testimonial.md` for the higher-trust, lower-urgency testimonial alternative

## Sources

- Cialdini, Robert. "Influence: The Psychology of Persuasion." Social proof principle.
- Baymard Institute: Cart abandonment and checkout hesitation research.
- TrustPulse product documentation: trustpulse.com
- Booking.com: Social proof patterns on accommodation listing pages.
