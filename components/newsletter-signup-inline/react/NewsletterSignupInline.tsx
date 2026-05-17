import React, { useState, useId } from "react";
import "../styles.css";

export type NSISubmitState = "idle" | "submitting" | "success" | "error";

export type NewsletterSignupInlineProps = {
  /** Called with the trimmed email address on submit. Throw to trigger error state. */
  onSubmit: (email: string) => void | Promise<void>;
  /** Optional heading displayed above the form */
  headline?: string;
  /** Optional supporting copy displayed below the headline */
  description?: string;
  /** Placeholder text for the email input */
  placeholder?: string;
  /** Label for the submit button */
  buttonLabel?: string;
  /** Fine-print disclaimer shown below the form */
  disclaimerText?: string;
  /** Message displayed after a successful submission */
  successText?: string;
  /** Visual treatment of the container */
  style?: "default" | "minimal" | "card";
  /** Extra class applied to the root element */
  className?: string;
};

const RETRY_MESSAGE = "Something went wrong. Check your entry and try again.";

export function NewsletterSignupInline({
  onSubmit,
  headline,
  description,
  placeholder = "you@company.com",
  buttonLabel = "Subscribe",
  disclaimerText = "Unsubscribe anytime. No spam.",
  successText = "Thanks for subscribing.",
  style = "default",
  className,
}: NewsletterSignupInlineProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<NSISubmitState>("idle");

  const uid = useId();
  const inputId = `nsi-input-${uid}`;
  const errorId = `nsi-error-${uid}`;

  const isDisabled = status === "submitting";

  const rootClass = [
    "nsi",
    `nsi--${style}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || isDisabled) return;

    setStatus("submitting");
    try {
      await onSubmit(trimmed);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className={rootClass} aria-live="polite">
        {headline ? (
          <h2 className="nsi__headline">{headline}</h2>
        ) : null}
        {description ? (
          <p className="nsi__description">{description}</p>
        ) : null}
        <p className="nsi__success">{successText}</p>
      </section>
    );
  }

  return (
    <section className={rootClass}>
      {headline ? (
        <h2 className="nsi__headline">{headline}</h2>
      ) : null}
      {description ? (
        <p className="nsi__description">{description}</p>
      ) : null}

      <form className="nsi__form" onSubmit={handleSubmit} noValidate>
        {/* The label is always present in the DOM for accessibility.
            It uses the visually-hidden class because the headline and
            description already provide visible context. */}
        <label
          className="nsi__label nsi__label--visually-hidden"
          htmlFor={inputId}
        >
          Email address
        </label>

        <input
          id={inputId}
          className="nsi__input"
          type="email"
          value={email}
          placeholder={placeholder}
          autoComplete="email"
          disabled={isDisabled}
          required
          aria-describedby={status === "error" ? errorId : undefined}
          aria-invalid={status === "error" ? "true" : undefined}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
        />

        <button
          className="nsi__button"
          type="submit"
          disabled={isDisabled}
        >
          {status === "submitting" ? "Sending..." : buttonLabel}
        </button>
      </form>

      {status === "error" ? (
        <p id={errorId} className="nsi__error" role="alert">
          {RETRY_MESSAGE}
        </p>
      ) : null}

      {disclaimerText ? (
        <p className="nsi__disclaimer">{disclaimerText}</p>
      ) : null}
    </section>
  );
}
