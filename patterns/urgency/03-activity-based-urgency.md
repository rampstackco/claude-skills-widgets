# Activity-Based Urgency

**Category**: Urgency
**Subcategory**: Activity
**Conversion intent**: Signal demand and competition to accelerate a decision that might otherwise be deferred

## What it is

A real-time or near-real-time display of user activity around the item or offer the current visitor is considering. Examples: "47 people are looking at this right now," "12 people signed up in the last hour," "This property was booked 3 times in the last 24 hours." The signal communicates demand, which implies scarcity and implicitly raises the cost of waiting.

## Why it works

This pattern operates at the intersection of two Cialdini principles. The social proof component ("other people want this") validates the current visitor's interest and signals that the item or offer is worth having. The scarcity component ("those people might take it before you") applies competitive pressure. Together, the compound effect motivates faster decisions than either signal produces alone. Booking.com documented this compound mechanism in its product design: a viewer count plus a recent booking signal creates urgency that neither alone achieves. The specificity of numbers matters; "47 people" produces more behavioral response than "many people" because a number anchors the competitive threat concretely.

## When to use

- The activity data is real and current. The count must reflect an actual measurement of user behavior, not a fabricated or randomly generated number.
- The activity level is genuinely notable relative to the product's baseline. If an item normally sees 2 concurrent viewers, showing "3 people viewing this" is mildly useful. If an item rarely sees concurrent viewers, the same number is statistically honest but contextually misleading.
- The product context involves real competition for limited supply (hotel rooms, event seats, limited-run products, job postings with competitive response windows)
- Cohort signups or waitlist positions where real demand velocity is evident from actual signups

## When NOT to use

- The numbers are fabricated. This is the primary anti-pattern in this category. Randomly generated "X people are viewing this" notifications that change on every page load, or activity counts that are always non-zero regardless of actual traffic, are fabrications. Research shows perceived manipulation reverses the psychological effect: users who detect a fake activity signal become less likely to convert than users who saw nothing at all.
- Traffic is too low to produce honest activity numbers. Showing "2 people viewing this" on a low-traffic product page is technically true but feels trivial; not showing the indicator is better than surfacing a number that fails to create urgency.
- The product is digital or unlimited-supply. "47 people are looking at this SaaS pricing page" is not a scarcity signal because nothing is being competed over.
- The indicator is shown permanently, regardless of real activity, to create a constant background of FOMO. Permanent presence is the tell of a dishonest implementation.

Threshold question: if a user asked "how is that number calculated and does it reflect real visitors right now?", could you answer honestly without hedging? If not, do not show the indicator.

## Variations

### Anonymous Count
The plain form: "X people are viewing this." No attribution, no geography, no names. Lowest engineering complexity and lowest privacy surface. Works when the number itself is sufficiently notable to motivate action.

### Named Recent Users
Shows the most recent action by name or partial name: "Sarah from Austin just signed up" or "James just purchased." Higher social proof specificity. Requires user consent for name display. More common in SaaS signups and course enrollments than in transactional commerce. See `07-real-time-recent-activity-ticker.md` for the feed variant of this pattern.

### Geographic Specificity
Adds location context to the count: "14 people in your city are viewing this" or "Booked 3 times this week in London." Creates a tighter competitive frame by reducing the pool of competitors to a local context. Requires geolocation or IP inference. Raises privacy considerations that must be addressed in terms of service and consent flows.

## Real-world examples

- **Booking.com (property pages)**: Shows "X people are looking at this right now" and "Booked Y times in the last 24 hours" on hotel and accommodation listings. Booking.com is the most-cited reference implementation of this pattern; the dual signal (viewer count plus recent booking) has been documented in multiple product design analyses as a compound urgency trigger.
- **Hotels.com and Expedia**: Similar viewer and recent-booking signals appear on hotel detail pages. The travel vertical adopted this pattern broadly following Booking.com's visible success with it.
- **Ticketmaster (high-demand event pages)**: During on-sale windows for high-demand events, Ticketmaster surfaces queue position and competitive demand signals. The competition for seats is real and the signals reflect it.
- **StubHub (resale ticket listings)**: Individual listing pages show view counts and recent purchase activity on listings for high-demand events.
- **Airbnb**: On listing pages for popular dates or locations, Airbnb surfaces "rare find" and recent booking signals that reflect real demand patterns on their platform.

## Implementation notes

- **Mobile behavior**: Keep the indicator compact on mobile: one line of copy, small type, subdued styling. It should not crowd the primary product content or the add-to-cart action. Consider hiding it on mobile when the activity count is below a minimum threshold that would feel meaningful.
- **Accessibility**: Do not use `aria-live="assertive"` for activity updates; updating activity counts should not interrupt a user mid-interaction. Use `aria-live="off"` or `aria-live="polite"` with a long debounce. Ensure the copy makes sense without visual styling: the number and the action must both be present in the text.
- **Performance**: Activity counts should update via a lightweight polling mechanism or WebSocket connection. Avoid blocking page load on an activity API call; load the indicator after primary content is interactive, and degrade gracefully (hide the indicator) if the data source is unavailable.
- **Common pitfalls**: Random number generation on the server per request (produces fabricated counts). Static HTML with a hardcoded number that never changes. Showing the indicator on every product regardless of traffic. Using viewer counts on unlimited-supply digital products where no real competition exists. Failing to define a minimum threshold below which the indicator is hidden rather than showing trivially small or trivially large numbers.

## Archetype compatibility

This pattern fits naturally with:

- **Playful Energetic**: The social, real-time quality of activity signals fits an energetic consumer register. Copy can reflect the energy of the crowd without feeling manipulative.
- **Bold Confident**: Large, direct numbers fit the archetype's declarative voice. The pattern works when the activity data is genuinely impressive and the brand is comfortable stating it plainly.
- **Warm Conversational**: Activity signals can be framed helpfully rather than competitively: "Quite a few people are looking at this one" reads as a friend giving advice.

Less natural with:

- **Luxe Considered**: Luxury brands do not communicate through crowd signals. The idea that "others want this" is implicit in the brand's positioning; stating it numerically would read as insecure or pushy.
- **Clinical Trustworthy**: Viewer counts feel light and consumer-grade in a clinical context. This archetype builds trust through evidence, not through FOMO.
- **Editorial Restrained**: The archetype's peer-to-peer register assumes the reader makes decisions independently. Activity pressure conflicts with that assumption.

## Related patterns

- `02-stock-scarcity-indicator.md` for quantity-based scarcity that can pair with activity signals
- `07-real-time-recent-activity-ticker.md` for the persistent feed variant of named recent activity
- `06-waitlist-position-display.md` for activity signals specific to waitlist and queue contexts

## Sources

- Cialdini, Robert. *Influence: The Psychology of Persuasion*. Scarcity and social proof principles.
- Booking.com urgency-based UX design analysis: markhub24.com/post/booking-com-s-urgency-based-ux-design
- Medium, Hetvi Desai: "Booking.com and the pressure to book fast: The psychology of urgency"
- Nudgify: "11 FOMO Notifications Top Websites Use to Boost Sales" (nudgify.com)
