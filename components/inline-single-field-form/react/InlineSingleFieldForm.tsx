import { useState, useId } from "react";
import "../styles.css";

export type SubmitState = "idle" | "submitting" | "success" | "error";

export type InlineSingleFieldFormProps = {
  /** Input type: "email", "text", or "tel" */
  fieldType?: "email" | "text" | "tel";
  /** Placeholder text for the input. Defaults by fieldType if omitted. */
  placeholder?: string;
  /** Label text for the submit button */
  buttonLabel?: string;
  /** Called with the trimmed input value on submit. May return a Promise. */
  onSubmit: (value: string) => void | Promise<void>;
  /** Optional fine-print shown below the form row */
  disclaimerText?: string;
  /** Text displayed after a successful submit */
  successText?: string;
  /** Visible label text for the input field (recommended for accessibility) */
  label?: string;
  /** Extra class applied to the root form element */
  className?: string;
};

const DEFAULT_PLACEHOLDERS: Record<string, string> = {
  email: "you@company.com",
  text: "Your answer",
  tel: "+1 (555) 000-0000",
};

const RETRY_MESSAGE =
  "Something went wrong. Check your entry and try again.";

export function InlineSingleFieldForm({
  fieldType = "email",
  placeholder,
  buttonLabel = "Subscribe",
  onSubmit,
  disclaimerText,
  successText = "Thanks!",
  label,
  className,
}: InlineSingleFieldFormProps) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<SubmitState>("idle");

  const uid = useId();
  const inputId = `isff-input-${uid}`;
  const errorId = `isff-error-${uid}`;

  const resolvedPlaceholder =
    placeholder ?? DEFAULT_PLACEHOLDERS[fieldType] ?? "";

  const isDisabled = status === "submitting";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = value.trim();
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
      <form
        className={["isff", className].filter(Boolean).join(" ")}
        aria-live="polite"
      >
        <p className="isff__success">{successText}</p>
      </form>
    );
  }

  return (
    <form
      className={["isff", className].filter(Boolean).join(" ")}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="isff__row">
        <div className="isff__field">
          {label ? (
            <label htmlFor={inputId}>{label}</label>
          ) : null}
          <input
            id={inputId}
            className="isff__input"
            type={fieldType}
            value={value}
            placeholder={resolvedPlaceholder}
            onChange={(e) => {
              setValue(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            disabled={isDisabled}
            autoComplete={fieldType === "email" ? "email" : fieldType === "tel" ? "tel" : "off"}
            aria-label={!label ? "Enter your " + fieldType : undefined}
            aria-describedby={status === "error" ? errorId : undefined}
            aria-invalid={status === "error" ? "true" : undefined}
            required
          />
        </div>

        <button
          className="isff__button"
          type="submit"
          disabled={isDisabled}
        >
          {status === "submitting" ? "Sending..." : buttonLabel}
        </button>
      </div>

      {status === "error" ? (
        <p id={errorId} className="isff__error" role="alert">
          {RETRY_MESSAGE}
        </p>
      ) : null}

      {disclaimerText ? (
        <p className="isff__disclaimer">{disclaimerText}</p>
      ) : null}
    </form>
  );
}
