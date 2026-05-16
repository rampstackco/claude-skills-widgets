# Modal Lead Form

**Category**: Lead Capture
**Subcategory**: Modal
**Conversion intent**: Capture a lead or demo request via a form presented in a modal overlay, triggered by an explicit user action

## What it is

A lead capture form displayed inside a modal dialog, opened when the user clicks a CTA button ("Request a demo," "Get started," "Talk to sales"). The form is not shown by default; it requires a deliberate trigger from the user, which distinguishes it from exit-intent or time-triggered overlays. The modal allows the form to live anywhere in the page's visual hierarchy without requiring a dedicated form landing page.

## Why it works

The user-initiated trigger is the key behavioral difference from other modal patterns. Because the user clicked to open it, the cognitive frame is already "I want to do this," which reduces the resistance a time-triggered or exit-triggered modal would face. The modal container focuses attention on the form without navigating away from the page: the user retains their browsing context, which matters when the decision to request a demo is not fully made and they may want to read more before submitting. Baymard Institute research on modal usability confirms that user-triggered overlays are rated significantly more positively than system-triggered ones.

## When to use

- The CTA button appears in a position where navigating to a separate landing page would create excessive friction (hero section, sticky nav, pricing table)
- The form is short enough to fit comfortably in a modal without requiring the user to scroll inside the overlay (three to six fields at most)
- The offering is a sales touchpoint (demo, sales call, trial activation) where the modal captures the lead and hands off to a follow-up sequence
- The page has enough surrounding content that a dedicated form page would be orphaned and hard to return from

## When NOT to use

- The form has more than six fields; long forms inside modals create awkward scrolling within an overlay, particularly on mobile
- The user is on a page with no content context (a blank or near-blank landing page); in that case, an inline form is simpler and performs as well
- Accessibility requirements are stringent and the engineering team cannot fully implement modal focus trapping and keyboard behavior; a poorly implemented modal is worse than an inline form
- The form is for a low-friction offer (newsletter, content download); a modal is heavier than the offer warrants in those cases

## Variations

### Small modal centered
A centered dialog, 400 to 560px wide on desktop, sitting above a backdrop overlay. The most common modal form implementation. Best for three to five field forms where the entire form is visible without scrolling inside the modal.

### Full-screen on mobile
The modal transitions to a full-screen overlay on viewport widths below 640px. Avoids the small-tap-target and scroll-inside-overlay problems that plague small modals on narrow screens. The full-screen approach on mobile treats the modal as a dedicated step rather than an overlay.

### Side panel (drawer)
The form slides in from the right edge as a panel that does not fully obscure the page. Useful when the user benefits from keeping page content partially visible while filling in the form (e.g., while reviewing pricing tiers). The drawer variant is common in enterprise SaaS where users want to reference the page while completing a request form.

## Real-world examples

- **Intercom**: The Intercom website (intercom.com) uses a "Get a demo" button in the primary navigation that opens a modal form with fields for first name, last name, work email, company, and team size. The modal appears over the current page without navigation.
- **Drift (Salesloft)**: Drift's product pages use a modal form triggered by "Talk to sales" CTAs, presenting a qualification form inside a centered dialog that keeps the page visible behind the backdrop.
- **Segment (Twilio)**: Segment's pricing page "Talk to us" buttons open a modal capturing name, email, company, and role. The modal form routes based on company size before presenting a Calendly embed in the same modal flow.
- **Glean**: Glean's product demo pages include a modal CTA with a "Let's start" trigger that opens a short lead form. VWO reported a 35% increase in CTA clicks on this pattern in an A/B test.
- **Figma**: Figma's enterprise page uses a "Contact sales" button that opens a side-panel form with qualification fields, keeping the enterprise feature list visible in the background while the form is being completed.
- **Webflow**: Webflow's enterprise contact flow uses a modal-initiated sequence for "Request a demo," presenting a two-step modal: the first step captures contact information; the second step presents a calendar booking.

## Implementation notes

- **Mobile behavior**: Modals on mobile should transition to full-screen overlays. A modal that is 400px wide on a 390px device is effectively full-screen anyway, so formalize it: use a full-height bottom sheet or full-screen slide-in. Ensure the keyboard does not cover form fields; `scroll-margin-top` or `scrollIntoView` on focused fields prevents this.
- **Accessibility**: Modal dialogs require `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` pointing to the modal's heading. Focus must be trapped inside the modal while it is open; Tab and Shift-Tab should cycle only through modal focusable elements. Pressing Escape should close the modal and return focus to the trigger element. These requirements are non-negotiable for WCAG 2.1 AA compliance.
- **Performance**: Lazy-load the modal form's content if it includes a third-party form embed (HubSpot, Marketo). Rendering the hidden modal DOM at page load adds weight; rendering it on demand keeps the initial page load lean.
- **Common pitfalls**: Failing to return focus to the trigger button on close, which strands keyboard users. Opening the modal on page load rather than on user trigger (this makes it an exit-intent or time-based pattern, not a modal lead form, and the user experience changes significantly). Omitting a visible close button ("X" in the top-right corner) in addition to Escape key support.

## Archetype compatibility

This pattern fits naturally with:

- **Technical Precise**: Demo request modals on developer tools and infrastructure platforms are common. The pattern is efficient and does not require leaving the page, which suits a precision-oriented audience.
- **Bold Confident**: A modal triggered by an assertive CTA ("See it now," "Talk to us") fits the Bold Confident register. The modal form gets in, captures the lead, and gets out.
- **Clinical Trustworthy**: Healthcare and compliance SaaS brands use modals for demo requests because the contained, focused environment communicates that the data entry is a deliberate and secure action.

Less natural with:

- **Luxe Considered**: Premium brands avoid the modal's utilitarian overhead. A curated contact experience or a dedicated concierge-style contact page is more consistent with the archetype.
- **Playful Energetic**: Modals can feel heavy in a brand that values continuous delight. The playful brand typically prefers inline forms or conversational capture patterns that maintain momentum.

## Related patterns

- `02-inline-multi-field-form.md` for when the form can live directly on the page without a modal layer
- `05-exit-intent-modal-form.md` for the system-triggered variant
- `03-multi-step-progressive-form.md` for multi-step flows inside a modal
- `13-calendar-booking-lead-capture.md` for modal flows that end in calendar booking

## Sources

- Baymard Institute: "Modal Usability" research findings on user-triggered versus system-triggered overlays (baymard.com)
- Nielsen Norman Group: "Modal & Nonmodal Dialogs: When (& When Not) to Use Them" (nngroup.com)
- W3C ARIA Authoring Practices Guide: Dialog (Modal) pattern (w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- VWO: A/B test on Glean CTA modal reporting 35.32% increase in clicks (vwo.com/blog)
