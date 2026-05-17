import React, { useState, useId } from "react";
import "../styles.css";

export type FormField = {
  /** Field name, used as the key in the submitted values object */
  name: string;
  /** Visible label text */
  label: string;
  /** Input type. Use "select" to render a dropdown. Defaults to "text". */
  type?: "text" | "email" | "tel" | "url" | "select";
  /** Options for type="select" fields */
  options?: { value: string; label: string }[];
  /** Marks the field required and triggers client-side validation before submit */
  required?: boolean;
  /** Placeholder text for input fields */
  placeholder?: string;
  /** Value for the HTML autocomplete attribute */
  autocomplete?: string;
};

export type SubmitState = "idle" | "submitting" | "success" | "error";

export type InlineMultiFieldFormProps = {
  /** Ordered list of form fields to render (3 to 5 recommended) */
  fields: FormField[];
  /** Submit button label */
  buttonLabel?: string;
  /** Called with all field values on valid submission; may return a Promise */
  onSubmit: (values: Record<string, string>) => void | Promise<void>;
  /** Controls field arrangement */
  layout?: "horizontal" | "stacked" | "grid";
  /** Optional fine-print shown below the button */
  disclaimerText?: string;
  /** Text shown after a successful submission */
  successText?: string;
  /** Text shown when the onSubmit handler throws */
  errorText?: string;
  /** Extra class applied to the root form element */
  className?: string;
};

const DEFAULT_ERROR_TEXT =
  "Something went wrong. Check your entries and try again.";

function validateEmail(value: string): boolean {
  // Lightweight RFC 5322 surface-level check sufficient for client-side UX.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateField(field: FormField, value: string): string | null {
  const trimmed = value.trim();

  if (field.required && !trimmed) {
    return `${field.label} is required.`;
  }

  if (trimmed && field.type === "email" && !validateEmail(trimmed)) {
    return "Please enter a valid email address.";
  }

  return null;
}

export function InlineMultiFieldForm({
  fields,
  buttonLabel = "Get in touch",
  onSubmit,
  layout = "grid",
  disclaimerText,
  successText = "Thanks, we will be in touch.",
  errorText = DEFAULT_ERROR_TEXT,
  className,
}: InlineMultiFieldFormProps) {
  const uid = useId();

  // Initialize form values keyed by field name.
  const initialValues = Object.fromEntries(fields.map((f) => [f.name, ""]));
  const [values, setValues] = useState<Record<string, string>>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmitState>("idle");

  const isDisabled = status === "submitting";

  function getInputId(fieldName: string) {
    return `imff-${uid}-${fieldName}`;
  }

  function getErrorId(fieldName: string) {
    return `imff-err-${uid}-${fieldName}`;
  }

  function handleChange(fieldName: string, value: string) {
    setValues((prev) => ({ ...prev, [fieldName]: value }));
    // Clear the per-field error as the user edits.
    if (fieldErrors[fieldName]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[fieldName];
        return next;
      });
    }
    // Clear the form-level error state so it does not persist across edits.
    if (status === "error") setStatus("idle");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isDisabled) return;

    // Per-field client-side validation.
    const errors: Record<string, string> = {};
    for (const field of fields) {
      const error = validateField(field, values[field.name] ?? "");
      if (error) errors[field.name] = error;
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setStatus("submitting");

    // Trim all values before passing to the handler.
    const trimmedValues = Object.fromEntries(
      Object.entries(values).map(([k, v]) => [k, v.trim()])
    );

    try {
      await onSubmit(trimmedValues);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const layoutClass = `imff--${layout}`;
  const rootClass = ["imff", layoutClass, className].filter(Boolean).join(" ");

  if (status === "success") {
    return (
      <form className={rootClass} aria-live="polite">
        <p className="imff__success">{successText}</p>
      </form>
    );
  }

  return (
    <form
      className={rootClass}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="imff__fields">
        {fields.map((field) => {
          const inputId = getInputId(field.name);
          const errorId = getErrorId(field.name);
          const fieldError = fieldErrors[field.name];
          const hasError = Boolean(fieldError);
          const currentValue = values[field.name] ?? "";

          return (
            <div key={field.name} className="imff__field">
              <label className="imff__label" htmlFor={inputId}>
                {field.label}
              </label>

              {field.type === "select" ? (
                <select
                  id={inputId}
                  className="imff__select"
                  name={field.name}
                  value={currentValue}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  disabled={isDisabled}
                  required={field.required}
                  aria-required={field.required ? "true" : undefined}
                  aria-invalid={hasError ? "true" : undefined}
                  aria-describedby={hasError ? errorId : undefined}
                >
                  {(field.options ?? []).map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={inputId}
                  className="imff__input"
                  type={field.type ?? "text"}
                  name={field.name}
                  value={currentValue}
                  placeholder={field.placeholder}
                  autoComplete={field.autocomplete}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  disabled={isDisabled}
                  required={field.required}
                  aria-required={field.required ? "true" : undefined}
                  aria-invalid={hasError ? "true" : undefined}
                  aria-describedby={hasError ? errorId : undefined}
                />
              )}

              {hasError ? (
                <p id={errorId} className="imff__error" role="alert">
                  {fieldError}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="imff__actions">
        <button className="imff__button" type="submit" disabled={isDisabled}>
          {status === "submitting" ? "Sending..." : buttonLabel}
        </button>

        {status === "error" ? (
          <p className="imff__error" role="alert">
            {errorText}
          </p>
        ) : null}

        {disclaimerText ? (
          <p className="imff__disclaimer">{disclaimerText}</p>
        ) : null}
      </div>
    </form>
  );
}
