import "../styles.css";
import { useId, useMemo, useState } from "react";

export type InputDef = {
  name: string;
  label: string;
  type: "number" | "text" | "select";
  defaultValue?: number | string;
  prefix?: string;
  suffix?: string;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  step?: number;
};

export type Result = {
  label: string;
  value: number | string;
  format?: "currency" | "percent" | "number" | "months" | "raw";
  emphasized?: boolean;
  prefix?: string;
  suffix?: string;
};

export type SavingsCalculatorProps = {
  title?: string;
  description?: string;
  inputs: InputDef[];
  compute: (values: Record<string, string>) => Result[];
  layout?: "stacked" | "side-by-side";
  className?: string;
};

function formatValue(value: number | string, format?: Result["format"]): string {
  if (format === "raw" || format === undefined) return String(value);
  const num = typeof value === "number" ? value : Number(value);
  if (format === "currency") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(num);
  }
  if (format === "percent") return `${num}%`;
  if (format === "months") return `${num} month${num === 1 ? "" : "s"}`;
  if (format === "number") return new Intl.NumberFormat("en-US").format(num);
  return String(value);
}

export function SavingsCalculator({
  title,
  description,
  inputs,
  compute,
  layout = "stacked",
  className,
}: SavingsCalculatorProps) {
  const idPrefix = useId();
  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    inputs.forEach((input) => {
      initial[input.name] =
        input.defaultValue !== undefined ? String(input.defaultValue) : "";
    });
    return initial;
  });

  const results = useMemo(() => compute(values), [values, compute]);

  const rootClassName = [
    "sc",
    layout === "side-by-side" ? "sc--side-by-side" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className={rootClassName}>
      <div className="sc__panel">
        {title && <h2 className="sc__title">{title}</h2>}
        {description && <p className="sc__description">{description}</p>}

        <form className="sc__inputs" noValidate>
          {inputs.map((input) => {
            const fieldId = `${idPrefix}-${input.name}`;
            return (
              <label key={input.name} className="sc__field" htmlFor={fieldId}>
                <span className="sc__label">{input.label}</span>
                {input.type === "select" ? (
                  <select
                    id={fieldId}
                    className="sc__input"
                    value={values[input.name]}
                    onChange={(e) => handleChange(input.name, e.target.value)}
                  >
                    {input.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="sc__input-group">
                    {input.prefix && (
                      <span className="sc__prefix">{input.prefix}</span>
                    )}
                    <input
                      id={fieldId}
                      className="sc__input"
                      type={input.type}
                      value={values[input.name]}
                      onChange={(e) => handleChange(input.name, e.target.value)}
                      min={input.min}
                      max={input.max}
                      step={input.step}
                    />
                    {input.suffix && (
                      <span className="sc__suffix">{input.suffix}</span>
                    )}
                  </div>
                )}
              </label>
            );
          })}
        </form>
      </div>

      <div className="sc__results" aria-live="polite">
        {results.map((result, index) => (
          <div
            key={`${result.label}-${index}`}
            className={
              result.emphasized
                ? "sc__result sc__result--emphasized"
                : "sc__result"
            }
          >
            <span className="sc__result-label">{result.label}</span>
            <span className="sc__result-value">
              {result.prefix}
              {formatValue(result.value, result.format)}
              {result.suffix}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
