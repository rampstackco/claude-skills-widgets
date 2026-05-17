"use client";
import "../styles.css";
import { useId, useMemo, useState } from "react";
import { PrimaryButtonCTA } from "../../primary-button-cta/react/PrimaryButtonCTA";

export type Tier = {
  slug: string;
  name: string;
  description?: string;
  price: string;
  features: string[];
  cta: { label: string; href: string };
  badge?: string;
};

export type Input = {
  name: string;
  label: string;
  type: "slider" | "select" | "checkbox";
  defaultValue?: number | string | boolean;
  min?: number;
  max?: number;
  step?: number;
  options?: { value: string; label: string }[];
  helpText?: string;
};

export type PricingTierConfiguratorProps = {
  title?: string;
  description?: string;
  tiers: Tier[];
  inputs: Input[];
  recommend: (
    values: Record<string, number | string | boolean>
  ) => string;
  layout?: "horizontal" | "vertical";
  onTierChange?: (recommendedSlug: string) => void;
  className?: string;
};

export function PricingTierConfigurator({
  title,
  description,
  tiers,
  inputs,
  recommend,
  layout = "horizontal",
  onTierChange,
  className,
}: PricingTierConfiguratorProps) {
  const idPrefix = useId();

  const [values, setValues] = useState<
    Record<string, number | string | boolean>
  >(() => {
    const initial: Record<string, number | string | boolean> = {};
    inputs.forEach((input) => {
      initial[input.name] =
        input.defaultValue !== undefined
          ? input.defaultValue
          : input.type === "checkbox"
          ? false
          : input.type === "slider"
          ? input.min ?? 0
          : input.options?.[0]?.value || "";
    });
    return initial;
  });

  const recommendedSlug = useMemo(() => recommend(values), [values, recommend]);

  function setValue(name: string, value: number | string | boolean) {
    setValues((prev) => {
      const next = { ...prev, [name]: value };
      const nextRec = recommend(next);
      if (nextRec !== recommend(prev)) {
        onTierChange?.(nextRec);
      }
      return next;
    });
  }

  const rootClassName = [
    "ptc",
    `ptc--${layout}`,
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={rootClassName}>
      {(title || description) && (
        <header className="ptc__header">
          {title && <h2 className="ptc__title">{title}</h2>}
          {description && <p className="ptc__description">{description}</p>}
        </header>
      )}

      <div className="ptc__inputs" aria-live="polite">
        {inputs.map((input) => {
          const fieldId = `${idPrefix}-${input.name}`;
          return (
            <div key={input.name} className="ptc__input-field">
              {input.type === "checkbox" ? (
                <div className="ptc__checkbox-row">
                  <input
                    id={fieldId}
                    type="checkbox"
                    className="ptc__checkbox"
                    checked={Boolean(values[input.name])}
                    onChange={(e) =>
                      setValue(input.name, e.target.checked)
                    }
                  />
                  <label htmlFor={fieldId} className="ptc__input-label">
                    {input.label}
                  </label>
                </div>
              ) : (
                <>
                  <label htmlFor={fieldId} className="ptc__input-label">
                    {input.label}
                  </label>
                  {input.type === "slider" && (
                    <div className="ptc__input-row">
                      <input
                        id={fieldId}
                        type="range"
                        className="ptc__slider"
                        min={input.min}
                        max={input.max}
                        step={input.step}
                        value={Number(values[input.name])}
                        onChange={(e) =>
                          setValue(input.name, Number(e.target.value))
                        }
                      />
                      <span className="ptc__slider-value">
                        {values[input.name]}
                      </span>
                    </div>
                  )}
                  {input.type === "select" && input.options && (
                    <select
                      id={fieldId}
                      value={String(values[input.name])}
                      onChange={(e) => setValue(input.name, e.target.value)}
                    >
                      {input.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  )}
                </>
              )}
              {input.helpText && (
                <p className="ptc__help-text">{input.helpText}</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="ptc__tiers">
        {tiers.map((tier) => {
          const isRecommended = tier.slug === recommendedSlug;
          const tierClassName = isRecommended
            ? "ptc__tier ptc__tier--recommended"
            : "ptc__tier";
          return (
            <div key={tier.slug} className={tierClassName}>
              {tier.badge && (
                <span className="ptc__badge">{tier.badge}</span>
              )}
              {isRecommended && !tier.badge && (
                <span className="ptc__recommended-flag">Recommended</span>
              )}
              {isRecommended && (
                <span className="ptc__visually-hidden">
                  Recommended based on your inputs
                </span>
              )}
              <h3 className="ptc__tier-name">{tier.name}</h3>
              {tier.description && (
                <p className="ptc__tier-description">{tier.description}</p>
              )}
              <div className="ptc__tier-price">{tier.price}</div>
              <ul className="ptc__tier-features">
                {tier.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <PrimaryButtonCTA
                label={tier.cta.label}
                href={tier.cta.href}
                variant={isRecommended ? "solid" : "outlined"}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
