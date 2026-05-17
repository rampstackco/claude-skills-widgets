import { WaitlistPositionDisplay } from "./WaitlistPositionDisplay";

/** Expanded card with a welcome email, position, total count, and a referral mechanic. */
export function ExpandedWithEmailAndReferral() {
  return (
    <WaitlistPositionDisplay
      position={847}
      total={12400}
      userEmail="you@example.com"
      referralLink={{
        url: "https://yourapp.com/ref/abc123",
        copyButtonLabel: "Copy your link",
      }}
      onReferralCopy={() => {
        console.log("Referral link copied");
      }}
      style="expanded"
    />
  );
}

/** Compact variant: reduced padding, no welcome line, no referral block. */
export function CompactNoReferral() {
  return (
    <WaitlistPositionDisplay
      position={312}
      total={8900}
      style="compact"
    />
  );
}

/** Expanded card with a custom headline but no referral link. */
export function ExpandedNoReferral() {
  return (
    <WaitlistPositionDisplay
      position={203}
      total={5000}
      userEmail="alex@example.com"
      headline="Here is where you stand"
      style="expanded"
    />
  );
}
