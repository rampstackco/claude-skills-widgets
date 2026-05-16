# Sticky Top Banner CTA

**Category**: CTA
**Subcategory**: Sticky Bar CTA
**Conversion intent**: Announce a launch, offer, or status message persistently across all page surfaces and drive a specific action

## What it is

A full-width horizontal bar pinned to the top of the viewport, above the main navigation. It stays visible as the user scrolls and announces a time-limited offer, a product launch, a beta period, or any news that applies across the full site. It typically contains a short text message and either a button or a text link. Different from the sticky bottom bar in its position (above nav rather than below content) and its typical use case (announcements rather than persistent purchase prompts).

## Why it works

The top of the viewport is the highest-attention real estate on any web page: users read top-to-bottom and the bar is the first element they encounter. Cialdini's scarcity principle applies when the banner communicates a time-limited offer; urgency increases conversion velocity. For launch contexts, social proof and novelty both operate: users respond to "just launched" or "now available" signals because they communicate momentum and legitimacy. The bar requires no scroll, no hover, and no second look; the message is there before the user has made any decision about the page.

## When to use

- A product is launching, in public beta, or releasing a significant new feature
- A time-sensitive offer applies site-wide (limited pricing, a promotion, a conference discount)
- The brand is running a campaign with a specific destination separate from the standard hero CTA
- The announcement is genuinely relevant to all or most visitors, not just a segment

## When NOT to use

- No genuine announcement exists; a permanent "sign up" bar reads as noise and gets visually filtered
- The bar would push the navigation significantly below the fold on mobile, obscuring the page's primary value before the user has context
- The brand archetype values restraint and silence above promotional presence
- An existing sticky navigation already sits at the top; two bars stacked is almost always wrong

## Variations

### Full-width with text and button
The full bar background in a brand accent color or neutral, with a short headline and a CTA button. Highest conversion potential; most visually prominent. Use for genuine launches or time-sensitive offers.

### Dismissible announcement
Includes an X or close icon that removes the bar and sets a session or persistent cookie to prevent re-display. Reduces user frustration on return visits. Appropriate when the announcement is relevant but secondary to the main page purpose.

### Animated entry
The bar slides down from the top of the viewport on page load after a short delay (200 to 400ms). Draws attention without a jarring initial appearance. Appropriate when the bar announces something that may be missed if it is simply present on load.

## Real-world examples

- **Vercel**: Uses a top announcement banner on vercel.com during Ship events, new product launches, and major feature releases. The bar links to the announcement page or product page.
- **Netlify**: Runs top banners for conference announcements, product launches, and partner promotions, documented in their own prompt templates for adding announcement banners to any Netlify site.
- **Linear**: Has appeared with announcement bars during major launch periods (new features, workspace model updates), consistent with its editorial brand register.
- **Supabase**: Uses top announcement banners for GA launches and conference events (Launch Week), which are a recurring marketing pattern for their developer audience.
- **Product Hunt launches broadly**: The announcement bar pattern is common across SaaS products launching on Product Hunt, where a top bar reading "#1 Product of the Day" drives social proof immediately.

## Implementation notes

- **Mobile behavior**: The bar must accommodate small screens. Keep copy extremely short on mobile (under 12 words); consider hiding the CTA button and using the entire bar as a link target on narrow viewports. Ensure the bar does not push the navigation so far down that the hero content is not visible above the fold.
- **Accessibility**: The bar should be a `<div role="banner">` or placed within a `<header>` landmark. If dismissible, the close button requires `aria-label="Dismiss announcement"`. Keyboard users must be able to tab to the CTA and the dismiss control. Avoid auto-rotating or animated text inside the bar that flashes faster than 3 times per second (WCAG 2.3.1).
- **Performance**: The bar is typically static HTML and CSS with no special performance considerations. JavaScript-driven countdown timers or dynamic content should be loaded non-blocking.
- **Common pitfalls**: Using the bar for permanent CTAs (users habituate quickly and visually exclude it). Failing to suppress the bar after a user dismisses it (missing cookie or localStorage logic). Copy that is too long to read at a glance; the bar gets one sentence. Stacking a sticky top banner with a sticky navigation without accounting for total pinned height in scroll offset calculations.

## Archetype compatibility

This pattern fits naturally with:

- **Technical Precise**: Developer-audience brands (Vercel, Supabase, Linear) use this pattern for genuine technical announcements where the audience wants to know about launches.
- **Bold Confident**: The assertive top position matches the archetype's forward commercial posture.
- **Playful Energetic**: Colorful announcement bars with punchy copy fit this archetype's "big news, said loudly" energy.
- **Warm Conversational**: When copy is friendly and the announcement is genuinely useful ("We just added X, and it is free"), the bar reads as a helpful heads-up.

Less natural with:

- **Luxe Considered**: Announcement bars interrupt the considered, paced experience. Premium brands use editorial announcements (blog posts, email) rather than persistent banners.
- **Editorial Restrained**: The bar adds persistent visual noise inconsistent with the archetype's whitespace discipline.
- **Minimal Essentialist**: The archetype avoids added chrome; a persistent bar is the opposite of reduction.

## Related patterns

- `03-sticky-bottom-bar-cta.md` for the bottom-viewport persistent bar variant
- `04-exit-intent-modal-cta.md` for triggered announcements on abandonment
- `06-hero-stack-primary-plus-secondary.md` for the hero-level CTA this pattern supplements

## Sources

- Netlify Documentation: "Add an Announcement Banner" prompt template (docs.netlify.com)
- Vercel press and company news: vercel.com/blog/category/company-news
- Cialdini, R.B.: "Influence: The Psychology of Persuasion" (scarcity principle)
- WCAG 2.1 Success Criterion 2.3.1: Three Flashes or Below Threshold
