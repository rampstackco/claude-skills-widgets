import { InlineMultiFieldForm, FormField } from "./InlineMultiFieldForm";

// =========================================================================
// Example 1: Default 4-field sales lead form (grid layout)
// A standard B2B demo request form: name, work email, company, and role.
// =========================================================================

const salesDemoFields: FormField[] = [
  {
    name: "name",
    label: "Full name",
    type: "text",
    required: true,
    placeholder: "Jane Smith",
    autocomplete: "name",
  },
  {
    name: "email",
    label: "Work email",
    type: "email",
    required: true,
    placeholder: "jane@company.com",
    autocomplete: "email",
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    required: true,
    placeholder: "Acme Corp",
    autocomplete: "organization",
  },
  {
    name: "role",
    label: "Your role",
    type: "text",
    required: true,
    placeholder: "Head of Product",
    autocomplete: "organization-title",
  },
];

export function SalesDemoForm() {
  return (
    <InlineMultiFieldForm
      fields={salesDemoFields}
      buttonLabel="Request a demo"
      layout="grid"
      disclaimerText="No spam. We will reach out within one business day."
      onSubmit={async (values) => {
        await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
      }}
    />
  );
}

// =========================================================================
// Example 2: Minimal 3-field variant (stacked layout)
// The shortest qualifying form: name, email, company only.
// Stacked layout for use inside a narrow sidebar or modal.
// =========================================================================

const minimalLeadFields: FormField[] = [
  {
    name: "name",
    label: "Full name",
    type: "text",
    required: true,
    placeholder: "Jane Smith",
    autocomplete: "name",
  },
  {
    name: "email",
    label: "Work email",
    type: "email",
    required: true,
    placeholder: "jane@company.com",
    autocomplete: "email",
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    required: true,
    placeholder: "Acme Corp",
    autocomplete: "organization",
  },
];

export function MinimalLeadForm() {
  return (
    <InlineMultiFieldForm
      fields={minimalLeadFields}
      buttonLabel="Get in touch"
      layout="stacked"
      successText="Thanks. Someone from the team will reach out shortly."
      onSubmit={async (values) => {
        await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
      }}
    />
  );
}

// =========================================================================
// Example 3: 4-field form with a select field and disclaimer (grid layout)
// Adds a team-size dropdown to route prospects to the right sales tier.
// The disclaimer references privacy policy, which is common on B2B forms.
// =========================================================================

const qualifyingFormFields: FormField[] = [
  {
    name: "name",
    label: "Full name",
    type: "text",
    required: true,
    placeholder: "Jane Smith",
    autocomplete: "name",
  },
  {
    name: "email",
    label: "Work email",
    type: "email",
    required: true,
    placeholder: "jane@company.com",
    autocomplete: "email",
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    required: true,
    placeholder: "Acme Corp",
    autocomplete: "organization",
  },
  {
    name: "team_size",
    label: "Team size",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Select team size" },
      { value: "1-10", label: "1 to 10" },
      { value: "11-50", label: "11 to 50" },
      { value: "51-200", label: "51 to 200" },
      { value: "201-1000", label: "201 to 1,000" },
      { value: "1001+", label: "More than 1,000" },
    ],
  },
];

export function QualifyingLeadForm() {
  return (
    <InlineMultiFieldForm
      fields={qualifyingFormFields}
      buttonLabel="Talk to sales"
      layout="grid"
      disclaimerText="By submitting this form you agree to our privacy policy. We do not sell or share personal data."
      successText="Thanks, we will be in touch."
      errorText="Submission failed. Please check your entries and try again."
      onSubmit={async (values) => {
        await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
      }}
    />
  );
}
