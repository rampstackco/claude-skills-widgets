# Detailed Case Study Card

**Category**: Social Proof
**Subcategory**: Case Study
**Conversion intent**: Convert qualified, high-intent visitors in the consideration or evaluation stage by providing concrete, verifiable customer outcomes

## What it is

A card or summary block that presents one customer story with specific metrics, a company name, industry context, and a link to a fuller case study. The card is self-contained enough to communicate the core outcome (e.g., "40% reduction in deployment time") without requiring the click-through, while the link enables deeper reading for motivated visitors.

## Why it works

Case study cards address the most advanced form of purchase skepticism: "That works for others, but will it work for me?" The specificity of a named company with a measured result is more persuasive than an unattributed claim. Cialdini's social proof principle is amplified by the authority implication: a recognized company whose outcome is described in measurable terms becomes an implicit endorsement. The card format allows the signal to work at-a-glance for scanners while the link-through serves validators. For B2B and high-ticket purchases, where Cialdini's commitment principle is also relevant (buyers research thoroughly before committing), the case study format matches the buyer's existing behavior.

## When to use

- The product is B2B or high-consideration where buyers perform due diligence before purchasing
- Customer outcomes can be expressed in specific, credible metrics (time, money, percentage improvements)
- The company and industry represented are recognizable to and relevant to the target buyer
- The page is a dedicated customers or social proof page, or a long-form product page with a case study section

## When NOT to use

- The outcomes cannot be expressed in concrete terms (vague case studies undermine credibility)
- The customer has not consented to public attribution with named metrics
- The card format would be the first social proof element on the page; a logo strip or single quote builds the baseline trust more efficiently at lower scroll depth
- The product is consumer-facing and the case study format reads as too formal for the audience

## Variations

### With key metric callout
The headline of the card is the outcome metric in large type ("3x faster deployments"). The company name, context, and attribution sit beneath. The most scannable variant; the result is legible even at a glance.

### With customer photo or company logo
The card includes a headshot of the quoted customer or the company logo prominently. Adds a visual trust anchor. Useful when the company name alone may not be recognized but a face or brand mark adds credibility.

### With industry or company size tag
A tag or label indicates the customer's industry, company size, or use case. Enables visitors to filter by relevance at a glance. Common on pages with 6+ case study cards where self-selection matters.

### Compact reference card
A minimal card showing company logo, a single-sentence outcome, and a "Read story" link. Used in grids of 6-12 companies where the goal is to show breadth rather than depth. Acts as a navigation element to individual case study pages.

## Real-world examples

- **HubSpot**: The case studies library at hubspot.com/case-studies features detailed case study cards with industry tags, company names, specific metric outcomes ("$8M in revenue driven"), and links to full case study pages. The cards support filtering by industry, company size, and product.
- **Salesforce**: The Salesforce customer stories section uses cards with company names, industry labels, and headline outcome metrics. Some cards include short video thumbnails. The enterprise positioning relies heavily on recognizable company names.
- **Webflow**: The webflow.com/customers page presents case study cards with customer logos, a brief outcome statement, and industry tags. Cards link to dedicated story pages with richer content.
- **Zendesk**: Customer story cards on zendesk.com include the company name, industry, and a measurable result (e.g., customer satisfaction score improvements or ticket resolution time reductions). Over 400 case studies are available, filterable by segment.
- **Monday.com**: Product landing pages and the customers page include case study cards organized by team type (marketing, HR, operations). Each card surfaces the headline metric.
- **Intercom**: The Intercom customers page features case study cards from recognizable companies (Atlassian, Notion, Dropbox) with specific outcome metrics related to support resolution speed or CSAT improvement.

## Implementation notes

- **Mobile behavior**: Cards in a desktop grid reflow to single-column on mobile. The key metric callout should remain at readable type size (minimum 24px for the metric, 14px for the attribution). The "Read story" link should be a clearly tappable target, not inline text.
- **Accessibility**: Cards that link to full case studies should use a clear, descriptive link text that includes the company name ("Read the Acme case study"). Do not use "Read more" without context. If the card includes a decorative company logo, the logo's `alt` attribute should be the company name. Metric callouts in large type should have sufficient contrast against the card background.
- **Performance**: If cards include company logos or customer photos, use `loading="lazy"` for below-fold cards. SVG logos are preferable to PNG. If a grid of 12+ cards is used, consider server-side filtering or pagination rather than loading all card media on first visit.
- **Common pitfalls**: Outcomes expressed in percentages without a baseline ("40% improvement" without saying "from what"). Cases that describe process changes rather than measurable results. Using case studies from companies in unrelated industries (a fintech case study does not reassure a healthcare buyer). Outdated case studies that reference products or integrations the company no longer offers.

## Archetype compatibility

This pattern fits naturally with:

- **Technical Precise**: Detailed outcome metrics, specific technical contexts, and a link-to-read format match the archetype's evidence-based orientation. Vercel, Linear, and Stripe use case study formats on their enterprise surfaces.
- **Clinical Trustworthy**: The specific, verifiable outcome format matches the archetype's commitment to evidence. Healthcare and compliance software products frequently use case studies as primary proof artifacts.
- **Editorial Restrained**: A well-designed case study card with typographic clarity and a measured outcome sits comfortably within this archetype's considered aesthetic.

Less natural with:

- **Playful Energetic**: The format reads as too formal and institutional. This archetype prefers UGC, social proof, and testimonials in a lighter register.
- **Minimal Essentialist**: Multiple cards add visual density that conflicts with the archetype's whitespace discipline. A single reference link may be the compatible form.
- **Retro Nostalgic**: Case study cards with metric callouts and industry tags read as contemporary enterprise, which conflicts with the archetype's vintage aesthetic register.

## Related patterns

- `03-single-quote-testimonial.md` for the lighter, quote-only version of customer proof
- `06-video-testimonial.md` for the richer media format of the same content
- `09-review-aggregate.md` for third-party verified proof at scale
- `01-customer-logo-strip.md` for the top-of-funnel trust signal that case studies substantiate

## Sources

- Cialdini, Robert. "Influence: The Psychology of Persuasion." Social proof and authority principles.
- HubSpot case studies: hubspot.com/case-studies
- Webflow customers page: webflow.com/customers
- Zendesk customer stories: zendesk.com/customers
