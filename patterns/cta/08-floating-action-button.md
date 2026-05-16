# Floating Action Button

**Category**: CTA
**Subcategory**: Persistent Floating CTA
**Conversion intent**: Provide persistent, accessible access to one primary action (chat, primary product action, scroll-to-top) independent of scroll position

## What it is

A circular or pill-shaped button with an icon (and sometimes a label), fixed to the bottom-right corner of the viewport. The floating action button (FAB) pattern originates in Material Design for mobile applications, where a single primary action needs to be reachable regardless of scroll depth. On web marketing contexts, it most commonly appears as a live chat trigger (Intercom, Drift) or, less frequently, as a scroll-to-top control or primary product action on app-like surfaces.

## Why it works

Fitts's Law governs this pattern: the bottom corner of a viewport is a low-effort target because users can move a cursor or thumb to the screen corner with minimal precision. The fixed position means the action costs the same effort at any scroll depth. For chat specifically, the FAB lowers the threshold for a high-value interaction (direct human contact) that users might not bother to seek through a contact page. Intercom's research on messaging products consistently shows that chat widget availability correlates with higher conversion on high-consideration purchases.

## When to use

- A live chat or messaging option is a primary conversion tool and should be always-available
- An app-like web surface has one clear repeating primary action that users invoke at any scroll depth
- Mobile-first products where the thumb ergonomics of a fixed bottom-right control are strongest
- The product sells high-consideration items where real-time support closes deals that self-serve cannot

## When NOT to use

- No genuinely useful action exists to attach to the FAB; an orphaned FAB with no meaningful function reads as decoration
- The page already has a sticky bottom bar CTA; two fixed bottom elements overlap or compete
- The brand archetype is Editorial Restrained or Luxe Considered; a floating button reads as intrusive UI chrome in restrained design contexts
- The FAB would obscure important content, navigation, or legal text in its resting position

## Variations

### Chat trigger
The most common web implementation. An icon button (typically a chat bubble or brand icon) triggers a live chat widget or messaging inbox. Clicking expands the chat surface. Used by Intercom, Drift, Crisp, and Freshchat across thousands of B2B SaaS sites.

### Scroll-to-top
Appears after the user has scrolled a threshold distance (typically 300px+), providing a one-click return to the top of the page. Appropriate on content-heavy or documentation sites. Disappears when the user is already near the top.

### Primary action (app surfaces)
Used on web-app surfaces (not marketing pages) where one action is dominant: compose, create, add. Material Design specification: one FAB per screen, representing the single most common action. Color is typically the product accent.

## Real-world examples

- **Intercom**: The chat widget launcher is the canonical FAB on the web. Intercom's own website and the millions of sites running the Intercom Messenger use this exact pattern: a circular brand-colored button in the bottom-right corner that expands into a messaging panel.
- **Drift**: Chat launcher FAB used across B2B SaaS marketing sites for sales-assist chat and bot workflows. Drift's widget follows the same bottom-right fixed-position convention.
- **Crisp**: Chat FAB implementation common on developer tools and SaaS products targeting small teams; slightly more minimal than Intercom's launcher.
- **Freshdesk / Freshchat**: Customer support widget FAB used broadly in ecommerce and SaaS, often customized with brand color to reduce visual discontinuity.
- **Google Material Design reference implementations**: FAB usage is documented and exemplified across Google's own Android and web application surfaces (Gmail compose, Google Drive create).

## Implementation notes

- **Mobile behavior**: The bottom-right position must clear both the browser's home indicator safe area and any site-level sticky elements (cookie bars, bottom navigation). Use `bottom: calc(1rem + env(safe-area-inset-bottom))` on iOS to avoid the home indicator. On mobile, the FAB is the most natural position ergonomically; do not move it based on viewport size.
- **Accessibility**: The FAB is a `<button>` element, not a `<div>`. It requires an `aria-label` if icon-only (the icon communicates nothing to screen readers). Focus behavior: when the FAB opens a panel, focus moves into the panel; when the panel closes, focus returns to the FAB. The Escape key must dismiss any panel triggered by the FAB.
- **Performance**: Chat widget scripts (Intercom, Drift) are among the heaviest third-party scripts on the web. Load them lazily (on user interaction or after page load and time-on-page threshold) rather than synchronously. This can save 100 to 400ms of blocking time on first paint.
- **Common pitfalls**: Forgetting to account for the FAB's position relative to other fixed elements on mobile (cookie consent bars, sticky nav). Icon-only FABs with no `aria-label` are invisible to screen reader users. Chat widgets that trigger immediately on page load (without user interaction) increase perceived page weight and can reduce conversion by interrupting the reading flow. Multiple FABs on the same surface; the pattern is designed for one action.

## Archetype compatibility

This pattern fits naturally with:

- **Warm Conversational**: Live chat is a natural extension of the archetype's relationship-first posture. A chat FAB says "we are here when you need us," which matches the voice.
- **Technical Precise**: Developer tools commonly use chat FABs for support and sales; the widget reads as functional rather than decorative in this context.
- **Playful Energetic**: A brand-colored, animated FAB with friendly messaging fits the archetype's always-on character.
- **Bold Confident**: When styled to match the brand's high-contrast aesthetic, a FAB can function as a persistent assertion of availability.

Less natural with:

- **Editorial Restrained**: A floating element disrupts the considered whitespace and layout the archetype depends on. These brands typically prefer contact links in the navigation or footer.
- **Luxe Considered**: Premium experiences do not float UI elements over the page content; the archetype assumes users who will seek contact channels intentionally.
- **Minimal Essentialist**: Any persistent floating element contradicts the archetype's commitment to surface reduction.

## Related patterns

- `03-sticky-bottom-bar-cta.md` for the full-width bottom-fixed alternative
- `10-scroll-triggered-slide-in.md` for a triggered (rather than persistent) panel CTA
- `08-floating-action-button.md` (this file) is frequently paired with `09-footer-cta-section.md` for sites where the FAB handles support and the footer handles conversion

## Sources

- Material Design: Floating Action Button guidelines (m3.material.io/components/floating-action-button)
- Intercom: Messenger setup documentation (intercom.com/help)
- Fitts's Law: "Fitts's Law: The Importance of Size and Distance in UI Design" (nngroup.com)
- UX Movement: "When to Use a Floating Call-to-Action Button" (uxmovement.com)
