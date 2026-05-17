import { ComparisonToolVsCompetitors } from "./ComparisonToolVsCompetitors";

/**
 * BasicComparisonExample
 *
 * Three competitors, flat table (no category toggles).
 * Demonstrates boolean, text, and rating feature value types.
 */
export function BasicComparisonExample() {
  return (
    <ComparisonToolVsCompetitors
      title="How we compare"
      description="An honest look at how Our Product stacks up against the alternatives."
      competitors={[
        { name: "Our Product", highlighted: true },
        { name: "Competitor A" },
        { name: "Competitor B" },
      ]}
      features={[
        {
          label: "Free trial",
          description: "No credit card required",
          values: {
            "Our Product": { type: "boolean", value: true },
            "Competitor A": { type: "boolean", value: true },
            "Competitor B": { type: "boolean", value: false },
          },
        },
        {
          label: "API access",
          values: {
            "Our Product": { type: "text", value: "Full REST + GraphQL" },
            "Competitor A": { type: "text", value: "REST only" },
            "Competitor B": { type: "text", value: "None" },
          },
        },
        {
          label: "Custom domain",
          values: {
            "Our Product": { type: "boolean", value: true },
            "Competitor A": { type: "boolean", value: false },
            "Competitor B": { type: "boolean", value: false },
          },
        },
        {
          label: "SSO / SAML",
          values: {
            "Our Product": { type: "boolean", value: true },
            "Competitor A": { type: "boolean", value: true },
            "Competitor B": { type: "boolean", value: false },
          },
        },
        {
          label: "Uptime SLA",
          values: {
            "Our Product": { type: "text", value: "99.99%" },
            "Competitor A": { type: "text", value: "99.9%" },
            "Competitor B": { type: "text", value: "99.5%" },
          },
        },
        {
          label: "Support quality",
          description: "Rated from verified customer reviews",
          values: {
            "Our Product": { type: "rating", value: 5, max: 5 },
            "Competitor A": { type: "rating", value: 3, max: 5 },
            "Competitor B": { type: "rating", value: 2, max: 5 },
          },
        },
        {
          label: "Onboarding speed",
          description: "Average time to first value",
          values: {
            "Our Product": { type: "rating", value: 4, max: 5 },
            "Competitor A": { type: "rating", value: 2, max: 5 },
            "Competitor B": { type: "rating", value: 3, max: 5 },
          },
        },
        {
          label: "Audit logs",
          values: {
            "Our Product": { type: "boolean", value: true },
            "Competitor A": { type: "boolean", value: false },
            "Competitor B": { type: "boolean", value: false },
          },
        },
        {
          label: "Starting price",
          values: {
            "Our Product": { type: "text", value: "$29/mo" },
            "Competitor A": { type: "text", value: "$49/mo" },
            "Competitor B": { type: "text", value: "$39/mo" },
          },
        },
      ]}
      finalCta={{ label: "Get started free", href: "/signup" }}
    />
  );
}

/**
 * CategoryToggleExample
 *
 * Two competitors with features grouped into categories.
 * Category toggles are enabled; all categories start expanded.
 */
export function CategoryToggleExample() {
  return (
    <ComparisonToolVsCompetitors
      title="Feature breakdown"
      description="Expand any category to see how each product performs."
      competitors={[
        { name: "Our Product", highlighted: true },
        { name: "Competitor A" },
      ]}
      features={[
        // Security category
        {
          label: "Two-factor authentication",
          category: "Security",
          values: {
            "Our Product": { type: "boolean", value: true },
            "Competitor A": { type: "boolean", value: true },
          },
        },
        {
          label: "SSO / SAML",
          category: "Security",
          values: {
            "Our Product": { type: "boolean", value: true },
            "Competitor A": { type: "boolean", value: false },
          },
        },
        {
          label: "Audit logs",
          description: "Full user activity history",
          category: "Security",
          values: {
            "Our Product": { type: "boolean", value: true },
            "Competitor A": { type: "boolean", value: false },
          },
        },
        {
          label: "SOC 2 Type II",
          category: "Security",
          values: {
            "Our Product": { type: "boolean", value: true },
            "Competitor A": { type: "boolean", value: false },
          },
        },
        // Integrations category
        {
          label: "Zapier",
          category: "Integrations",
          values: {
            "Our Product": { type: "boolean", value: true },
            "Competitor A": { type: "boolean", value: true },
          },
        },
        {
          label: "Native Slack app",
          category: "Integrations",
          values: {
            "Our Product": { type: "boolean", value: true },
            "Competitor A": { type: "boolean", value: false },
          },
        },
        {
          label: "REST API",
          category: "Integrations",
          values: {
            "Our Product": { type: "text", value: "Full access" },
            "Competitor A": { type: "text", value: "Read-only" },
          },
        },
        {
          label: "Webhooks",
          category: "Integrations",
          values: {
            "Our Product": { type: "boolean", value: true },
            "Competitor A": { type: "boolean", value: false },
          },
        },
        // Support category
        {
          label: "Live chat",
          category: "Support",
          values: {
            "Our Product": { type: "boolean", value: true },
            "Competitor A": { type: "boolean", value: false },
          },
        },
        {
          label: "Dedicated account manager",
          category: "Support",
          values: {
            "Our Product": { type: "boolean", value: true },
            "Competitor A": { type: "boolean", value: false },
          },
        },
        {
          label: "Support quality",
          description: "Rated from verified customer reviews",
          category: "Support",
          values: {
            "Our Product": { type: "rating", value: 5, max: 5 },
            "Competitor A": { type: "rating", value: 3, max: 5 },
          },
        },
        {
          label: "Response time (median)",
          category: "Support",
          values: {
            "Our Product": { type: "text", value: "Under 2 hours" },
            "Competitor A": { type: "text", value: "1 to 3 business days" },
          },
        },
        // Pricing category
        {
          label: "Free tier",
          category: "Pricing",
          values: {
            "Our Product": { type: "boolean", value: true },
            "Competitor A": { type: "boolean", value: false },
          },
        },
        {
          label: "Annual discount",
          category: "Pricing",
          values: {
            "Our Product": { type: "text", value: "20% off" },
            "Competitor A": { type: "text", value: "10% off" },
          },
        },
        {
          label: "Per-seat pricing",
          category: "Pricing",
          values: {
            "Our Product": { type: "boolean", value: true },
            "Competitor A": { type: "boolean", value: true },
          },
        },
      ]}
      showCategoryToggles={true}
      defaultExpandedCategories={["Security", "Integrations", "Support", "Pricing"]}
      finalCta={{ label: "Start your free trial", href: "/signup" }}
    />
  );
}
