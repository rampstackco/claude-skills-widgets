import { PricingTierConfigurator } from "./PricingTierConfigurator";

export function SaasPricingExample() {
  return (
    <PricingTierConfigurator
      title="Find your plan"
      description="Adjust the inputs below; we will recommend the right tier."
      tiers={[
        {
          slug: "starter",
          name: "Starter",
          price: "$29/mo",
          features: ["Up to 5 users", "10GB storage", "Email support"],
          cta: { label: "Choose Starter", href: "/signup?plan=starter" },
        },
        {
          slug: "pro",
          name: "Pro",
          price: "$99/mo",
          features: [
            "Up to 25 users",
            "100GB storage",
            "Priority support",
            "Advanced analytics",
          ],
          cta: { label: "Choose Pro", href: "/signup?plan=pro" },
          badge: "Most popular",
        },
        {
          slug: "enterprise",
          name: "Enterprise",
          price: "Custom",
          features: [
            "Unlimited users",
            "Unlimited storage",
            "Dedicated support",
            "SSO + audit logs",
          ],
          cta: { label: "Contact sales", href: "/sales" },
        },
      ]}
      inputs={[
        {
          name: "users",
          label: "How many users do you need?",
          type: "slider",
          min: 1,
          max: 100,
          step: 1,
          defaultValue: 5,
        },
        {
          name: "needsAnalytics",
          label: "Need advanced analytics?",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "needsSso",
          label: "Need SSO?",
          type: "checkbox",
          defaultValue: false,
        },
      ]}
      recommend={(values) => {
        const users = Number(values.users) || 0;
        if (values.needsSso) return "enterprise";
        if (users > 25 || values.needsAnalytics) return "pro";
        return "starter";
      }}
    />
  );
}

export function VerticalLayoutExample() {
  return (
    <PricingTierConfigurator
      title="Storage plans"
      layout="vertical"
      tiers={[
        {
          slug: "personal",
          name: "Personal",
          price: "$5/mo",
          features: ["50GB storage", "1 device"],
          cta: { label: "Choose Personal", href: "/signup?plan=personal" },
        },
        {
          slug: "family",
          name: "Family",
          price: "$15/mo",
          features: ["1TB storage", "6 devices", "Shared folders"],
          cta: { label: "Choose Family", href: "/signup?plan=family" },
        },
      ]}
      inputs={[
        {
          name: "storage",
          label: "How much storage do you need (GB)?",
          type: "slider",
          min: 10,
          max: 1000,
          step: 10,
          defaultValue: 50,
        },
      ]}
      recommend={(values) => {
        const storage = Number(values.storage) || 0;
        return storage > 100 ? "family" : "personal";
      }}
    />
  );
}
