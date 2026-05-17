# Inline Multi-Field Form

**Category**: Lead Capture
**Subcategory**: Form
**Conversion intent**: Capture a qualified lead with enough context to route, score, or personalize follow-up

## What it is

A form with three to five fields embedded directly on a page, used when an email address alone is insufficient for the lead to be actionable. Common fields include name, email, company, role, and a qualifying question (team size, use case, or industry). The form sits inline on the page rather than inside a modal, which reduces the interruption cost compared to triggered overlays.

## Why it works

The multi-field form trades conversion volume for lead quality. More fields filter out unqualified traffic before it reaches a sales team, which is the right trade when cost-per-call is high. The Baymard Institute's form usability research finds that field count is the primary driver of abandonment: each additional field reduces completion rates. This makes field selection the critical design decision. Fields that aid routing (company, role) are justified; fields that satisfy data curiosity (phone, company size, annual revenue) at the top of funnel are typically not. Cialdini's commitment principle means users who complete three fields feel invested enough to finish the form, supporting the case for keeping the field set tightly scoped.

## When to use

- Sales-qualified leads matter more than volume (B2B with high average contract value)
- Routing or personalization requires company or role data at point of capture
- The offer is high enough value to justify the friction (a demo, a custom proposal, an enterprise trial)
- Traffic is warm and intent is high (arriving from a campaign, a referral, or a late-funnel page)

## When NOT to use

- The audience is cold or top-of-funnel; higher friction will kill volume before the pipeline is warm enough to benefit from quality
- You are capturing for a newsletter or content download: use a single-field or gated-content pattern instead
- The page already has low conversion rates and the problem is trust or offer clarity, not lead quality
- You cannot act on the additional data: if role and company feed into a system that ignores them, the friction was not worth it

## Variations

### Required-only fields
Name, email, and one routing field (company or role). Three fields total. The minimum viable multi-field form for B2B. All fields marked required; no optional fields to avoid decision fatigue about what to fill in.

### Optional company info
Email required, company and title optional. Lowers friction while still capturing qualification data from users who provide it. Works well when a portion of your audience is individual contributors with no company to name (freelancers, small teams, researchers).

### Dropdown industry or team size
Adds a dropdown to a short required field set. The dropdown captures a qualifying signal without requiring the user to type; it also constrains answers to options that map cleanly to CRM fields. Best used when industry or size determines routing to different sales tracks.

## Real-world examples

- **HubSpot**: The "Get a demo" landing page (hubspot.com/request-demo) uses an inline form with fields for first name, last name, email, company, company size, and primary use case as a dropdown. The form sits on a dedicated page rather than a modal, reducing distraction.
- **Salesforce**: The Salesforce "Start your free trial" page presents an inline multi-field form asking for first name, last name, email, company name, title, phone, and country. The full field set reflects high average deal size and the need for complete CRM record creation at signup.
- **Marketo (Adobe)**: Marketo's "Request a demo" forms typically include first name, last name, business email, company, phone, country, and job title. The business email field (as distinct from a generic email field) acts as a soft qualifier that filters personal addresses.
- **Intercom**: Intercom's enterprise demo request page uses a five-field inline form (name, work email, company, company size dropdown, and a free-text question about the primary use case), balancing qualification with form length.
- **Segment (Twilio)**: Segment's enterprise contact form includes fields for first name, last name, work email, company, and monthly tracked users as a dropdown, using the traffic volume field to route prospects to the appropriate sales tier.
- **Gong**: Gong's "See it in action" demo request form uses first name, last name, work email, company, phone, and number of salespeople as a dropdown; the sales team size field directly determines qualification criteria.

## Implementation notes

- **Mobile behavior**: Inline multi-field forms on mobile should stack all fields vertically. Avoid two-column field layouts on mobile; they create touch-target problems and force horizontal scrolling on narrow viewports. Keep the form within a max-width that does not require side-scrolling (100% width with appropriate padding is safe).
- **Accessibility**: Each field requires an associated `<label>`. Group related fields with `<fieldset>` and `<legend>` when there is a logical grouping (name fields, contact fields). Inline error messages should appear adjacent to the field that caused the error, not only at the top of the form. `autocomplete` attributes on name, email, and company fields reduce typing burden.
- **Performance**: Third-party form libraries (HubSpot Forms, Marketo forms) can load 150 to 500KB of JavaScript. Where possible, use native HTML form elements styled to match the design system rather than vendor-embedded widgets. If using vendor forms, load them below the fold or after interaction.
- **Common pitfalls**: Including a phone field when the sales team is not equipped to call within hours of capture; phone fields reduce conversion rates significantly unless the follow-up is immediate and expected. Using "Submit" as button copy rather than copy that confirms the next step ("Get my demo," "Request a walkthrough"). Omitting field-level validation in favor of form-level error display, which forces users to hunt for the problem.

## Archetype compatibility

This pattern fits naturally with:

- **Clinical Trustworthy**: The methodical field-by-field structure communicates process and professionalism. Healthcare and compliance-focused B2B products benefit from the implicit message that the brand takes information seriously.
- **Technical Precise**: Developer-facing B2B tools that need routing data (team size, tech stack, use case) use multi-field inline forms to pre-qualify before routing to appropriate sales or onboarding tracks.
- **Bold Confident**: Enterprise-facing Bold Confident brands (Brex, Gong) use direct, no-hedging copy above multi-field forms: the assertion in the headline, the proof in the form fields.

Less natural with:

- **Warm Conversational**: The field count and formality of a multi-field form can feel like an interrogation in a register built on approachability. Warm Conversational brands typically reduce fields or replace this pattern with a multi-step progressive form that feels more conversational.
- **Playful Energetic**: High-friction multi-field forms break the momentum of an energetic, fast-paced brand experience. This archetype prefers lower friction at the top of funnel.
- **Minimal Essentialist**: The discipline of removal conflicts with adding fields. If the brand needs qualification data, the Minimal Essentialist approach typically moves qualification into post-signup onboarding rather than into the capture form.

## Related patterns

- `01-inline-single-field-form.md` for the minimal-friction alternative
- `03-multi-step-progressive-form.md` for splitting this field set across steps to reduce perceived friction
- `04-modal-lead-form.md` for the modal-triggered version of the same capture
- `claude-skills/skills/form-strategy` for field selection and validation principles

## Component implementation

A v2 implementation of this pattern is available in [`components/inline-multi-field-form/`](../../components/inline-multi-field-form/). Both React (TypeScript) and HTML/CSS variants are provided. Customize via CSS custom properties.

## Sources

- Baymard Institute: "Form Field Usability" research (baymard.com)
- HubSpot: "The State of Marketing" reports on form conversion rates
- Nielsen Norman Group: "Marking Required vs. Optional Form Fields" (nngroup.com)
- Typeform 2025 Lead Capture Form Report: multi-step forms achieve 86% higher conversion than single-step (typeform.com/blog/2025-lead-capture-form-report)
