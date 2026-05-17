# Review Aggregate

**Category**: Social Proof
**Subcategory**: Third-Party Rating
**Conversion intent**: Validate product quality through independent, third-party review data; reduce purchase hesitation by providing verifiable external proof

## What it is

A star rating combined with a review count, sourced from a third-party review platform (G2, Capterra, TrustRadius, Gartner Peer Insights, Apple App Store, Google Reviews, Trustpilot, or similar). Typically displayed as a badge or inline element on pricing pages, product landing pages, or homepages. The third-party source is named and linked to allow verification.

## Why it works

The pattern combines Cialdini's social proof and authority principles. The review count provides social proof (many people evaluated this and concluded positively); the third-party platform provides authority (an independent organization collected and verified these reviews). The combination is more resistant to skepticism than first-party testimonials alone, because the visitor can verify the score by clicking through to the review platform. Baymard Institute's purchase hesitation research consistently identifies third-party validation as a significant trust driver at the decision stage, particularly for B2B buyers who are accountable to stakeholders for their software choices. The G2 2024 Buyer Behavior Report found that third-party review sites are the single most consulted information source for B2B software buyers, referenced by 31% of buyers during purchasing decisions.

## When to use

- The product is B2B or B2C software with an established presence on G2, Capterra, Trustpilot, or App Store
- The rating is strong (generally 4.3 stars and above out of 5; below this threshold the badge can harm rather than help)
- The page is a pricing, trial sign-up, or late-funnel landing page where trust is the key remaining friction point
- The review count is substantial enough to read as a pattern rather than an outlier (at least 25-50 reviews; more for competitive categories)

## When NOT to use

- The rating or review count is below the threshold of impressiveness for the category
- The product has no verified presence on the platform whose badge is being displayed
- The badge design does not meet the platform's display guidelines (G2 has specific rules about badge usage)
- The review platform is not recognized by the target audience (a Capterra badge means little to a developer audience; an App Store rating means little to an enterprise buyer)

## Variations

### Single platform badge
One G2, Capterra, or App Store badge. Clean and minimal. Use when one platform is dominant in the target audience's research process.

### Multi-platform badge row
Two to four badges from different platforms shown in a horizontal row. Demonstrates breadth of positive coverage across review ecosystems. Use when the buyer persona consults multiple platforms before deciding.

### Inline rating with count
A star rating and review count displayed as inline text rather than a formal badge ("4.8 out of 5 from 2,400 reviews on G2"). Lower visual weight, easier to integrate into existing layouts without adding dedicated badge sections. Common on pricing pages.

### App store rating emphasis
For mobile apps, the App Store rating (iOS and/or Android) is the relevant third-party signal. The star rating and download count appear together. Common on consumer app landing pages.

## Real-world examples

- **Notion**: The Notion pricing page and team landing pages display G2 review badges. The pattern is used to close the gap between feature education and trial initiation.
- **HubSpot**: The HubSpot pricing page carries G2 Leader badges alongside Capterra and other platform badges. As of 2025, HubSpot holds top-category G2 Leader positions, which they display prominently on conversion surfaces.
- **Monday.com**: Product landing pages and the pricing page display G2 and Capterra badges in a multi-platform row. The badges are positioned near the primary CTA.
- **ClickUp**: The ClickUp homepage and pricing page include G2 badges prominently. ClickUp has used G2 awards in paid advertising as well as on organic landing pages.
- **Grammarly**: App landing pages for the consumer product show Apple App Store ratings prominently (the App Store rating feeds consumer credibility differently than B2B review sites).
- **Figma**: The Figma design-tools landing pages and pricing page include G2 badge recognition, particularly when targeting enterprise buyers who conduct structured due diligence.

## Implementation notes

- **Mobile behavior**: Badge images should be served at appropriate sizes for the device pixel ratio. A single badge can scale to full card width on mobile if placed in an isolated trust section; a multi-badge row should stack vertically on narrow viewports rather than compress horizontally. Minimum badge height 40px to keep the star rating legible.
- **Accessibility**: Badge images require descriptive `alt` text ("G2 Leader badge, Spring 2025, rated 4.8 out of 5 based on 2,400 reviews"). Do not rely on the badge image alone to convey the rating; include the rating and review count in nearby text so users who cannot load images get the same information.
- **Performance**: Third-party badge images should be self-hosted wherever licensing permits, rather than loaded from the review platform's servers. External image dependencies add DNS lookup and request latency. If dynamic badges (which update automatically with new review counts) are used, ensure they load asynchronously and have a fallback state.
- **Common pitfalls**: Displaying outdated seasonal badges (G2 "Best of 2023" in 2026). Showing a rating below 4.3 stars, which can trigger skepticism rather than confidence. Using badges from platforms the target audience does not consult. Violating the review platform's brand guidelines for badge usage, which can result in de-listing.

## Archetype compatibility

This pattern fits naturally with:

- **Clinical Trustworthy**: Third-party verification is central to this archetype. A G2 Leader badge alongside clinician credentials is a natural combination for health tech and compliance-heavy software.
- **Technical Precise**: B2B developer and technical tools use G2 and TrustRadius ratings as peer-sourced validation. The data-backed format fits the archetype's evidence orientation.
- **Bold Confident**: High-confidence brands display strong ratings prominently as evidence to back the claim. A "4.9 stars from 5,000 reviews" badge supports a bold claim without undermining it.

Less natural with:

- **Luxe Considered**: The badge format reads as mass-market validation. Luxury brands avoid aggregate ratings in favor of curated editorial references and individual endorsements.
- **Editorial Restrained**: The badge visual language (stars, platform logos, quarterly award dates) conflicts with the archetype's refined aesthetic palette. The pattern can be adapted into an inline text rating if third-party proof is needed.
- **Minimal Essentialist**: The badge adds visual elements the archetype's discipline would remove. A text rating ("Rated 4.8 on G2") is the compatible form if the data must appear.

## Related patterns

- `07-customer-count-display.md` for first-party quantitative proof
- `12-industry-analyst-quote.md` for the highest-authority third-party signal in enterprise contexts
- `10-detailed-case-study-card.md` for the qualitative depth behind the aggregate rating

## Component implementation

A v2 implementation of this pattern is available in [`components/review-aggregate/`](../../components/review-aggregate/). Both React (TypeScript) and HTML/CSS variants are provided. Customize via CSS custom properties.

## Sources

- Cialdini, Robert. "Influence: The Psychology of Persuasion." Social proof and authority principles.
- Baymard Institute: Third-party validation research in purchase hesitation studies.
- G2 Buyer Behavior Report 2024: B2B software review consultation data.
- Blastra: "G2 and Capterra Vendor Pricing Compared" (blastra.io).
