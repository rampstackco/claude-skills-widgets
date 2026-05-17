import { useState, useEffect } from "react";
import "../styles.css";

export type WaitlistPositionDisplayProps = {
  /** The user's current position in the queue (required) */
  position: number;
  /** Total number of people in the queue */
  total?: number;
  /** Displayed as a personalized welcome line when provided */
  userEmail?: string;
  /** When provided, renders a referral URL and copy-to-clipboard button */
  referralLink?: {
    url: string;
    copyButtonLabel?: string;
  };
  /** Called once after a successful clipboard write */
  onReferralCopy?: () => void;
  /** Controls layout density; "compact" reduces padding and hides the welcome line */
  style?: "compact" | "expanded";
  /** Overrides the default headline derived from the position */
  headline?: string;
  /** Extra class appended to the root element */
  className?: string;
};

function formatNumber(n: number): string {
  return n.toLocaleString();
}

export function WaitlistPositionDisplay({
  position,
  total,
  userEmail,
  referralLink,
  onReferralCopy,
  style = "expanded",
  headline,
  className,
}: WaitlistPositionDisplayProps) {
  const [copied, setCopied] = useState(false);
  const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerId !== null) clearTimeout(timerId);
    };
  }, [timerId]);

  async function handleCopy() {
    if (!referralLink) return;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(referralLink.url);
      } else {
        // Fallback: create a temporary input, select its text, and use execCommand
        const input = document.createElement("input");
        input.value = referralLink.url;
        input.style.position = "fixed";
        input.style.opacity = "0";
        input.style.pointerEvents = "none";
        document.body.appendChild(input);
        input.select();
        input.setSelectionRange(0, input.value.length);
        document.execCommand("copy");
        document.body.removeChild(input);
      }

      setCopied(true);
      onReferralCopy?.();

      const id = setTimeout(() => {
        setCopied(false);
        setTimerId(null);
      }, 2000);
      setTimerId(id);
    } catch {
      // Copy failed silently; button reverts to default label
    }
  }

  const rootClass = [
    "wpd",
    style === "compact" ? "wpd--compact" : "wpd--expanded",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const resolvedHeadline = headline ?? "You are in line";
  const copyLabel = referralLink?.copyButtonLabel ?? "Copy your link";
  const ariaLabel = `You are number ${formatNumber(position)} in the waitlist`;

  return (
    <section className={rootClass} aria-label={ariaLabel}>
      {userEmail && (
        <p className="wpd__welcome">Welcome, {userEmail}</p>
      )}

      <h2 className="wpd__headline">{resolvedHeadline}</h2>

      <p className="wpd__position">
        <span className="wpd__position-prefix" aria-hidden="true">#</span>
        {formatNumber(position)}
      </p>

      {total !== undefined && (
        <p className="wpd__total">
          of {formatNumber(total)} people on the waitlist
        </p>
      )}

      {referralLink && (
        <div className="wpd__referral">
          <span className="wpd__referral-url" title={referralLink.url}>
            {referralLink.url}
          </span>

          <button
            className={[
              "wpd__copy-button",
              copied ? "wpd__copy-button--copied" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            type="button"
            aria-label={copied ? "Referral link copied" : "Copy referral link"}
            onClick={handleCopy}
          >
            {copied ? "Copied" : copyLabel}
          </button>

          <span className="wpd__copy-status" aria-live="polite">
            {copied ? "Referral link copied to clipboard." : ""}
          </span>
        </div>
      )}
    </section>
  );
}
