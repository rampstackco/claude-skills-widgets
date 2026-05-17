import { useState, useEffect } from "react";
import "../styles.css";
import { PrimaryButtonCTA } from "../../primary-button-cta/react/PrimaryButtonCTA";

export type StickyBarCTAProps = {
  /** Main copy shown inside the bar */
  message: string;
  /** Label and destination for the action button */
  cta: {
    label: string;
    href: string;
  };
  /** When true, a close button is rendered. Default: true */
  dismissible?: boolean;
  /** localStorage key used to persist the dismissed state. Default: "sticky-bar-dismissed" */
  dismissKey?: string;
  /** Viewport edge the bar is pinned to. Default: "bottom" */
  position?: "bottom" | "top";
  /** Visual treatment. "solid" fills with --sbc-bg; "minimal" uses a transparent background with an accent border. Default: "solid" */
  variant?: "solid" | "minimal";
  /** Extra class appended to the root element */
  className?: string;
};

export function StickyBarCTA({
  message,
  cta,
  dismissible = true,
  dismissKey = "sticky-bar-dismissed",
  position = "bottom",
  variant = "solid",
  className,
}: StickyBarCTAProps) {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(dismissKey) === "1") {
        setDismissed(true);
      }
    } catch {
      // localStorage unavailable (private browsing restrictions, etc.)
    }
  }, [dismissKey]);

  if (dismissed) {
    return null;
  }

  function handleDismiss() {
    try {
      localStorage.setItem(dismissKey, "1");
    } catch {
      // localStorage unavailable; state update still hides the bar for this session
    }
    setDismissed(true);
  }

  const rootClass = [
    "sbc",
    `sbc--${position}`,
    `sbc--${variant}`,
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={rootClass}
      role="complementary"
      aria-label="Site banner"
      data-dismiss-key={dismissKey}
    >
      <p className="sbc__message">{message}</p>

      <div className="sbc__action">
        <PrimaryButtonCTA label={cta.label} href={cta.href} />
      </div>

      {dismissible && (
        <button
          className="sbc__close"
          type="button"
          aria-label="Dismiss"
          onClick={handleDismiss}
        >
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            width="16"
            height="16"
          >
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
