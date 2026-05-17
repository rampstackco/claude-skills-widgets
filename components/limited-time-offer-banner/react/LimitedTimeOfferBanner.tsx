import { useState, useEffect, useCallback } from "react";
import "../styles.css";
import { CountdownTimer } from "../../countdown-timer/react/CountdownTimer";

export type LimitedTimeOfferBannerProps = {
  /** The offer copy displayed in the banner. Keep to a single line on mobile. */
  message: string;
  /**
   * The real, fixed deadline for the offer. Passed directly to CountdownTimer.
   * Must be a genuine business deadline, not a per-visit computed date.
   */
  deadline: Date | string;
  /** Optional CTA. When provided, renders a button-style anchor after the countdown. */
  cta?: {
    label: string;
    href: string;
  };
  /** Viewport edge to pin the banner to. Default: "top" */
  position?: "top" | "bottom";
  /** When true, renders a close button and persists dismiss state to localStorage. Default: true */
  dismissible?: boolean;
  /**
   * localStorage key scoping the dismissed state.
   * Change per campaign to avoid carry-over between promotions. Default: "ltob-dismissed"
   */
  dismissKey?: string;
  /** Visual treatment. Default: "warning" */
  variant?: "warning" | "celebratory" | "minimal";
  /**
   * Behavior when the countdown reaches zero.
   * "hide": remove the banner from the DOM entirely.
   * "show-expired-message": replace the content with expiredMessage.
   * Default: "hide"
   */
  expiredAction?: "hide" | "show-expired-message";
  /** Text shown when expiredAction is "show-expired-message". Default: "This offer has ended" */
  expiredMessage?: string;
  /** Extra class appended to the root element. */
  className?: string;
};

export function LimitedTimeOfferBanner({
  message,
  deadline,
  cta,
  position = "top",
  dismissible = true,
  dismissKey = "ltob-dismissed",
  variant = "warning",
  expiredAction = "hide",
  expiredMessage = "This offer has ended",
  className,
}: LimitedTimeOfferBannerProps) {
  const [dismissed, setDismissed] = useState(false);
  const [expired, setExpired] = useState(false);

  // Read the persisted dismiss state after mount (localStorage is not
  // available during SSR; wrapping in useEffect keeps the component safe
  // in server-rendered contexts).
  useEffect(() => {
    try {
      if (localStorage.getItem(dismissKey) === "1") {
        setDismissed(true);
      }
    } catch {
      // localStorage unavailable (private browsing or storage quota exceeded).
    }
  }, [dismissKey]);

  const handleDismiss = useCallback(() => {
    try {
      localStorage.setItem(dismissKey, "1");
    } catch {
      // localStorage unavailable; state update still hides the banner this session.
    }
    setDismissed(true);
  }, [dismissKey]);

  const handleExpire = useCallback(() => {
    setExpired(true);
  }, []);

  // Already dismissed: render nothing.
  if (dismissed) {
    return null;
  }

  // Expired + "hide" action: remove the banner from the DOM.
  if (expired && expiredAction === "hide") {
    return null;
  }

  const rootClass = [
    "ltob",
    `ltob--${position}`,
    `ltob--${variant}`,
    expired ? "ltob--expired" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  // Expired + "show-expired-message": swap the banner content for the expired notice.
  if (expired && expiredAction === "show-expired-message") {
    return (
      <div
        className={rootClass}
        role="complementary"
        aria-label="Promotional offer"
        data-dismiss-key={dismissKey}
      >
        <p className="ltob__expired-message" role="status">
          {expiredMessage}
        </p>

        {dismissible && (
          <button
            className="ltob__close"
            type="button"
            aria-label="Dismiss promotional offer"
            onClick={handleDismiss}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" width="16" height="16">
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

  return (
    <div
      className={rootClass}
      role="complementary"
      aria-label="Promotional offer"
      data-dismiss-key={dismissKey}
    >
      <p className="ltob__message">{message}</p>

      <CountdownTimer
        deadline={deadline}
        format="compact"
        label="Ends in"
        className="ltob__countdown"
        onExpire={handleExpire}
      />

      {cta && (
        <a className="ltob__cta" href={cta.href}>
          {cta.label}
        </a>
      )}

      {dismissible && (
        <button
          className="ltob__close"
          type="button"
          aria-label="Dismiss promotional offer"
          onClick={handleDismiss}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true" width="16" height="16">
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
