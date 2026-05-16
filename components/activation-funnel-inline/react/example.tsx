import { ActivationFunnelInline } from "./ActivationFunnelInline";

export function DefaultExample() {
  return (
    <ActivationFunnelInline
      title="Sample funnel"
      steps={[
        { label: "Sign-up",      value: 100 },
        { label: "Verified",     value: 68,  dropoff: 32 },
        { label: "First action", value: 53,  dropoff: 15 },
        { label: "Activated",    value: 47,  dropoff: 6  },
      ]}
    />
  );
}

export function OnboardingFunnelExample() {
  return (
    <ActivationFunnelInline
      title="Onboarding funnel"
      steps={[
        { label: "Invited",     value: 100 },
        { label: "Accepted",    value: 74,  dropoff: 26 },
        { label: "Profile set", value: 61,  dropoff: 13 },
        { label: "Connected",   value: 55,  dropoff: 6  },
        { label: "Published",   value: 38,  dropoff: 17 },
      ]}
      ariaLabel="Onboarding funnel with 5 stages from invite to first publish."
    />
  );
}
