# Content Gate

**Category**: Lead Capture
**Subcategory**: Gate
**Conversion intent**: Exchange a piece of high-value content (PDF, video, full report) for a lead's contact information

## What it is

A content gate requires a user to submit a form before accessing a piece of content. The content is the offer; the form is the toll. The gate can cover a PDF download, a video, an extended article, a research report, a template, or a webinar recording. The full content is not visible until the form is submitted. Partial previews and soft-gate variants are covered separately in the progressive content gate pattern.

## Why it works

Reciprocity (Cialdini) is the primary mechanism: the brand offers something of genuine value, and the user trades contact information to receive it. For the exchange to work, the content must be perceived as worth the friction of the form. This makes asset quality the primary conversion driver, not form design. Research from the B2B marketing community (Brixon Group, 2026) and historical Forrester data indicate that gated content produces 31% more sales-qualified leads than ungated social traffic, because users who fill a form to receive content are demonstrably more engaged than passive readers.

## When to use

- The content has genuine standalone value (a research report, a template, a recorded webinar, a comparison guide)
- The audience is at a stage where the information exchange feels proportionate; they want the resource enough to provide contact details
- Your CRM or email system can act on the submission (routing, segmentation, follow-up sequence)
- The content is relevant to an identifiable buyer journey stage, so captured leads are at least somewhat qualified

## When NOT to use

- The content exists primarily to be indexed by search engines; gating removes it from organic reach entirely
- The content is not sufficiently differentiated from freely available alternatives; users will close the gate and find it elsewhere
- The audience is highly resistant to email marketing (developers, privacy-conscious segments); gate friction will suppress downloads to near zero
- You cannot follow up on the leads captured; gating without a follow-up system is list-building theater

## Variations

### Full gate
No preview: the user sees a description of the content and a form. On submission, they receive a download link or are redirected to the content. The highest-friction variant; justified when the asset is well-known (a named annual report, an established benchmark study) and demand is pre-established.

### Soft gate (preview visible)
A portion of the content is visible: the first page of a PDF, an excerpt from a report, a short video clip. The gate appears at a natural stopping point. The preview builds perceived value before the form is presented. Outperforms full gates on cold or unfamiliar assets because it gives users evidence of quality before asking for contact information.

### Email-only gate
A single email field: the lowest-friction gate. The user receives the content by email rather than via download. Useful when email delivery is part of the follow-up strategy (the receipt email begins the nurture sequence). Reduces form abandonment but eliminates qualification data.

## Real-world examples

- **HubSpot**: HubSpot's resources library (hubspot.com/resources) gates ebooks, templates, and report PDFs behind forms asking for first name, last name, email, company, company size, and phone. The form fields feed directly into HubSpot's CRM for lead scoring and routing.
- **Gartner**: Gartner research reports (gartner.com) sit behind a hard gate requiring business email registration. Gartner's brand authority means the gate friction is accepted; users want the report specifically enough to register.
- **McKinsey**: McKinsey's practice-area insights pages (mckinsey.com) require email registration for full PDF access to major reports. The soft-gate variant is used on featured articles: the summary is visible, the full PDF is gated.
- **Forrester**: Forrester research (forrester.com) uses a full gate on analyst reports, accepting only business email addresses and collecting company and role. The gate is positioned as access to analyst-grade content rather than a lead capture mechanism.
- **Salesforce**: Salesforce's "State of Sales" and similar annual reports are gated behind a form on their research hub (salesforce.com/resources), collecting contact and company data. The reports are well-publicized enough that the brand drives demand before users hit the gate.
- **Adobe (Experience Cloud)**: Adobe's marketing research reports and industry guides are gated on the Adobe Experience Cloud resource center, with forms collecting role, company size, and industry to segment leads into appropriate nurture tracks.

## Implementation notes

- **Mobile behavior**: Gate forms on mobile should be single-column with full-width fields. If the gate is positioned mid-content (soft gate), ensure the form appears above the fold on mobile after scroll; users should not need to scroll past the gate to find the form. Download confirmation should use a distinct success state, not just hiding the form.
- **Accessibility**: The gate form must meet all standard form accessibility requirements. If gating a video, ensure the pre-gate state does not autoplay sound or use `<video autoplay>` before the gate is cleared. PDF delivery should include a confirmation email with a download link as a fallback for users who close the tab before downloading.
- **Performance**: Gate pages that embed marketing automation forms (HubSpot, Marketo) carry 150 to 400KB of third-party JavaScript. Load below the fold or after user interaction. Track form completion rate and lead-to-pipeline conversion to evaluate whether the gate friction is net-positive.
- **Common pitfalls**: Gating content of insufficient value relative to the form length, which results in high bounce rates at the gate. Failing to deliver a lead magnet promptly (the download should be immediate or delivered within seconds via email). Collecting fields that serve no routing or personalization purpose, increasing friction without increasing lead quality. Not testing ungated versus gated variants to validate that gating net-increases lead quality rather than simply reducing reach.

## Archetype compatibility

This pattern fits naturally with:

- **Clinical Trustworthy**: Research reports, compliance guides, and clinical data summaries from healthcare and regulated-industry brands are commonly gated. The formality of a gate form is consistent with the archetype's professional register.
- **Technical Precise**: Developer-facing brands gate architecture guides, benchmark reports, and API documentation beyond a certain depth. The technical audience accepts gating when the asset is genuinely differentiated.
- **Editorial Restrained**: B2B publishers and analyst-adjacent brands (Stratechery, Gartner) use gates consistent with an editorial subscription model. The gate is positioned as membership or access, not as a sales lead capture.

Less natural with:

- **Warm Conversational**: Gates can feel transactional and unfriendly in a register built on approachability. Warm Conversational brands typically prefer ungated content with inline CTAs, or minimal email-only gates that feel like newsletter signup rather than a toll.
- **Playful Energetic**: Gates interrupt the energetic momentum of the brand experience. The playful archetype typically prefers free content as audience building, with conversion happening downstream.
- **Minimal Essentialist**: Gating content adds a layer (a form, a gate state, a delivery mechanism) that conflicts with the archetype's doctrine of removal. Minimal Essentialist brands typically publish openly and convert through product interaction.

## Related patterns

- `07-progressive-content-gate.md` for the soft-gate variant where content is partially visible
- `01-inline-single-field-form.md` for email-only gates
- `02-inline-multi-field-form.md` for multi-field gate forms
- `claude-skills/skills/lead-magnet-design` for designing the asset behind the gate

## Sources

- Brixon Group: "Content Gating Strategies 2026: When B2B Content Should Be Freely Accessible" (brixongroup.com/en/content-gating-strategies-when-b2b-content-should-be-freely-accessible-the-data-driven-guide)
- HubSpot: "Gated Content: What Marketers Need to Know" (blog.hubspot.com/marketing/ungated-content-free)
- Cialdini, Robert. "Influence: The Psychology of Persuasion." Reciprocity principle.
- Gartner: Persona-specific gating study showing 47% lead qualification rate improvement (gartner.com, 2025)
