# Progressive Content Gate

**Category**: Lead Capture
**Subcategory**: Gate
**Conversion intent**: Capture a lead from an engaged reader by gating the remainder of content after they have consumed enough to have established value

## What it is

A progressive content gate allows users to read a portion of an article, report, or long-form piece before surfacing a lead capture or subscription prompt. Unlike a full content gate where no content is visible without a form, the progressive gate lets the user in partway: the first three paragraphs, the first 400 words, or the first N minutes of a video are visible. The gate appears at a natural stopping point, signaling that more is available in exchange for a subscription or email address.

## Why it works

Progressive gating activates sunk-cost momentum and the curiosity gap (Loewenstein, 1994). A reader who has invested time in the first portion of an article has already assigned the content value proportional to their engagement. The gate arriving mid-way is a lower resistance ask than a gate on a cold landing page, because the user has evidence of content quality before being asked to commit. INMA (International News Media Association) research shows that metered access models producing "open" experiences for a defined number of articles before restricting access drive higher long-term subscriber lifetime value than hard gates that appear on first visit.

## When to use

- The content is long enough to demonstrate quality before the gate (1,000 words or more for articles; 5 or more minutes for video)
- The audience is unfamiliar with the publication or brand; the preview builds enough trust to motivate registration
- The goal is subscription or community membership rather than a single sales lead; the progressive gate scales across many pieces of content
- Traffic arrives from search or social (cold or warm), where a full gate on the first paragraph would cause immediate back-navigation

## When NOT to use

- The content is a PDF or structured report; progressive gating is native to scrollable web content, not downloadable assets
- The first portion of the content is not representative of its value; if the preview is generic and the gated portion is where the value lives, users cannot make an informed commitment decision
- The site has high bounce rates from organic traffic; a gate before sufficient dwell time will harm SEO signals (reduced dwell time, increased pogo-sticking)
- The business model is advertising-supported; gating content from any percentage of users reduces pageviews and ad impressions

## Variations

### Gradual fade
The visible content fades out toward the gate, with a form overlaid or presented below. The fade indicates "more content exists here" while the form sits at the natural reading end-point. This variant avoids a hard cutoff and reads as a gentler prompt than a full overlay.

### Hard cutoff with overlay
Content is cut at a precise word or paragraph count; text below the cut is blurred or hidden. A form or subscription prompt overlays the hidden content. The Information (theinformation.com) and some financial journalism sites use this model. More assertive than the fade; better for publications where the brand authority justifies the hard stop.

### Scroll-triggered prompt
Rather than cutting the content, a subscription or registration prompt appears as a sticky bar or slide-in when the user reaches a defined scroll depth (e.g., 70% through the article). The full content remains readable. The gate is a soft prompt, not a hard block. This variant is the least friction of the three; it is closer to a newsletter signup inline than a content gate.

## Real-world examples

- **Medium**: Medium (medium.com) surfaces its membership prompt after readers exceed their monthly free article allowance. For member-only articles, a soft paywall appears after the first few paragraphs, inviting the reader to continue reading with a membership. The preview is sufficient to signal article quality before the prompt.
- **The Information**: The Information (theinformation.com) uses a hard-cutoff progressive gate on its journalism. A portion of the article is readable; a subscription prompt appears at the cut, with the remaining content blurred. Positioning the brand as premium justifies the assertive gate.
- **The Athletic**: The Athletic uses a metered model that allows a defined number of free articles per month before surfacing a subscription prompt. The gate arrives within the article rather than before it.
- **Stratechery**: Stratechery (stratechery.com) publishes a free portion of subscriber articles publicly (often the first few paragraphs) with the remainder gated behind the subscriber paywall. The free excerpt is indexable and shareable; the gate captures conversion from readers who find the writing valuable.
- **Harvard Business Review**: HBR (hbr.org) uses a metered model: a defined number of articles are readable in full each month; subsequent articles present a subscription gate after a short excerpt. The gate is positioned as continued access to a curated publication, not as a one-time lead capture.

## Implementation notes

- **Mobile behavior**: On mobile, the fade or blur overlay must be full-width and prevent scrolling past the gate point. A sticky subscribe button above the gate reduces the need to scroll back up to find the call to action. Ensure the form below the fade is reachable without scrolling inside the gate overlay.
- **Accessibility**: Content hidden by a blur or overlay should be in the DOM but marked `aria-hidden="true"` until the user completes the gate flow. The gate prompt region should be focusable and announced to screen readers so keyboard and AT users understand that additional content requires action.
- **Performance**: Progressively gated content is typically fully loaded in the HTML (for SEO purposes) but hidden with CSS. Search engines can crawl the full text; users see only the preview portion. This is an accepted practice and not considered cloaking when the gating is consistent for all users including logged-in Googlebot.
- **Common pitfalls**: Cutting content at an awkward mid-sentence point rather than at a natural paragraph break, which breaks reading rhythm and damages perceived quality. Setting the preview threshold too low (one paragraph) before the user has evidence of value. Not providing a clear, accessible path to subscribe: the gate should present a specific, low-friction subscription or registration form, not just a vague "subscribe" message.

## Archetype compatibility

This pattern fits naturally with:

- **Editorial Restrained**: The progressive gate is native to editorial publishing. The pattern assumes readers who engage with writing for its own quality, then convert when they have seen enough. This matches the Editorial Restrained peer relationship with the reader.
- **Clinical Trustworthy**: Research-oriented publications (healthcare journals, analyst firms) use progressive gating to make their methodology visible before requiring membership, which builds credibility before the gate arrives.
- **Documentary Honest**: Long-form investigative journalism and documentary-style content suits the progressive gate because the content itself demonstrates value; the gate feels proportionate when the content quality is evident.

Less natural with:

- **Bold Confident**: The patient, content-first approach of a progressive gate conflicts with the Bold Confident preference for immediate, assertive conversion moments. A Bold Confident brand typically gates fully or not at all.
- **Playful Energetic**: The gate interrupts momentum. Playful Energetic brands prefer free content that builds community rather than a pay-to-continue model.
- **Minimal Essentialist**: The blur overlay, fade treatment, and gate overlay add visual complexity that conflicts with the archetype's commitment to reduction.

## Related patterns

- `06-content-gate.md` for the full-gate variant
- `08-newsletter-signup-inline.md` for the scroll-triggered prompt variant that does not block content
- `01-inline-single-field-form.md` for the minimal capture form that can sit at the gate point

## Sources

- INMA (International News Media Association): metered access model research on lifetime subscriber value
- Loewenstein, G. (1994). "The psychology of curiosity: A review and reinterpretation." Psychological Bulletin, 116(1), 75-98. Curiosity gap theory.
- WebsitePlanet: "2025 Paywall Index: A Data-Driven Study Across Industries" (websiteplanet.com/blog/2025-paywall-index-a-data-driven-study-across-industries/)
- Airbridge: "Hard Paywall vs Soft Paywall vs Freemium: Which Converts Best?" (airbridge.io/en/blog/hard-vs-soft-paywalls)
