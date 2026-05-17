"use client";
import "../styles.css";
import { useId, useMemo, useState } from "react";
import { PrimaryButtonCTA } from "../../primary-button-cta/react/PrimaryButtonCTA";

export type OptionDef = {
  value: string;
  label: string;
  description?: string;
  price?: number;
  imageSrc?: string;
};

export type OptionGroup = {
  name: string;
  label: string;
  description?: string;
  type: "select" | "radio" | "checkbox";
  required?: boolean;
  options: OptionDef[];
};

export type ProductFeatureConfiguratorProps = {
  title?: string;
  description?: string;
  basePrice: number;
  currency?: string;
  groups: OptionGroup[];
  finalCta?: { label: string; href: string };
  onConfigChange?: (
    selections: Record<string, string | string[]>,
    totalPrice: number
  ) => void;
  layout?: "stacked" | "side-by-side";
  showPreview?: boolean;
  className?: string;
};

function buildInitialSelections(
  groups: OptionGroup[]
): Record<string, string | string[]> {
  const initial: Record<string, string | string[]> = {};
  groups.forEach((group) => {
    if (group.type === "checkbox") {
      initial[group.name] = [];
    } else {
      // For select and radio, default to the first option value if required, else empty string.
      initial[group.name] =
        group.required && group.options.length > 0
          ? group.options[0].value
          : group.options.length > 0
          ? group.options[0].value
          : "";
    }
  });
  return initial;
}

function computeTotal(
  basePrice: number,
  groups: OptionGroup[],
  selections: Record<string, string | string[]>
): number {
  let total = basePrice;
  groups.forEach((group) => {
    const sel = selections[group.name];
    if (group.type === "checkbox") {
      const checked = Array.isArray(sel) ? sel : [];
      checked.forEach((val) => {
        const opt = group.options.find((o) => o.value === val);
        if (opt && typeof opt.price === "number") {
          total += opt.price;
        }
      });
    } else {
      const val = typeof sel === "string" ? sel : "";
      const opt = group.options.find((o) => o.value === val);
      if (opt && typeof opt.price === "number") {
        total += opt.price;
      }
    }
  });
  return total;
}

function formatPrice(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatDelta(price: number | undefined, currency: string): string {
  if (price === undefined || price === 0) return "";
  const sign = price > 0 ? "+" : "";
  return (
    sign +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(price)
  );
}

type GroupProps = {
  group: OptionGroup;
  idPrefix: string;
  currency: string;
  selection: string | string[];
  onChange: (name: string, value: string | string[]) => void;
};

function OptionGroupField({
  group,
  idPrefix,
  currency,
  selection,
  onChange,
}: GroupProps) {
  const legendId = `${idPrefix}-${group.name}-legend`;

  function handleRadioChange(value: string) {
    onChange(group.name, value);
  }

  function handleSelectChange(value: string) {
    onChange(group.name, value);
  }

  function handleCheckboxChange(value: string, checked: boolean) {
    const current = Array.isArray(selection) ? selection : [];
    if (checked) {
      onChange(group.name, [...current, value]);
    } else {
      onChange(group.name, current.filter((v) => v !== value));
    }
  }

  return (
    <fieldset
      className="pfc__group"
      aria-required={group.required ? "true" : undefined}
    >
      <legend className="pfc__group-label" id={legendId}>
        {group.label}
        {group.required && (
          <span className="pfc__visually-hidden"> (required)</span>
        )}
      </legend>
      {group.description && (
        <p className="pfc__group-description">{group.description}</p>
      )}

      {group.type === "select" && (
        <div className="pfc__options">
          <select
            className="pfc__select"
            aria-labelledby={legendId}
            value={typeof selection === "string" ? selection : ""}
            onChange={(e) => handleSelectChange(e.target.value)}
          >
            {group.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
                {opt.price ? ` (${formatDelta(opt.price, currency)})` : ""}
              </option>
            ))}
          </select>
        </div>
      )}

      {group.type === "radio" && (
        <div className="pfc__options" role="group" aria-labelledby={legendId}>
          {group.options.map((opt) => {
            const inputId = `${idPrefix}-${group.name}-${opt.value}`;
            const isChecked =
              typeof selection === "string" && selection === opt.value;
            return (
              <label key={opt.value} className="pfc__option" htmlFor={inputId}>
                <input
                  id={inputId}
                  type="radio"
                  name={`${idPrefix}-${group.name}`}
                  value={opt.value}
                  checked={isChecked}
                  onChange={() => handleRadioChange(opt.value)}
                />
                <span className="pfc__option-label">
                  <span className="pfc__option-name">{opt.label}</span>
                  {opt.description && (
                    <span className="pfc__option-desc">{opt.description}</span>
                  )}
                </span>
                {opt.price !== undefined && opt.price !== 0 && (
                  <span className="pfc__option-price">
                    {formatDelta(opt.price, currency)}
                  </span>
                )}
              </label>
            );
          })}
        </div>
      )}

      {group.type === "checkbox" && (
        <div className="pfc__options">
          {group.options.map((opt) => {
            const inputId = `${idPrefix}-${group.name}-${opt.value}`;
            const checked = Array.isArray(selection)
              ? selection.includes(opt.value)
              : false;
            return (
              <label key={opt.value} className="pfc__option" htmlFor={inputId}>
                <input
                  id={inputId}
                  type="checkbox"
                  value={opt.value}
                  checked={checked}
                  onChange={(e) =>
                    handleCheckboxChange(opt.value, e.target.checked)
                  }
                />
                <span className="pfc__option-label">
                  <span className="pfc__option-name">{opt.label}</span>
                  {opt.description && (
                    <span className="pfc__option-desc">{opt.description}</span>
                  )}
                </span>
                {opt.price !== undefined && opt.price !== 0 && (
                  <span className="pfc__option-price">
                    {formatDelta(opt.price, currency)}
                  </span>
                )}
              </label>
            );
          })}
        </div>
      )}
    </fieldset>
  );
}

export function ProductFeatureConfigurator({
  title,
  description,
  basePrice,
  currency = "USD",
  groups,
  finalCta,
  onConfigChange,
  layout = "stacked",
  showPreview = false,
  className,
}: ProductFeatureConfiguratorProps) {
  const idPrefix = useId();

  const [selections, setSelections] = useState<
    Record<string, string | string[]>
  >(() => buildInitialSelections(groups));

  const totalPrice = useMemo(
    () => computeTotal(basePrice, groups, selections),
    [basePrice, groups, selections]
  );

  const formattedTotal = useMemo(
    () => formatPrice(totalPrice, currency),
    [totalPrice, currency]
  );

  function handleChange(name: string, value: string | string[]) {
    setSelections((prev) => {
      const next = { ...prev, [name]: value };
      const nextTotal = computeTotal(basePrice, groups, next);
      onConfigChange?.(next, nextTotal);
      return next;
    });
  }

  // Collect preview images: for each group, find the most recently selected option that has imageSrc.
  const previewImages = useMemo(() => {
    if (!showPreview) return [];
    const images: { src: string; alt: string }[] = [];
    groups.forEach((group) => {
      const sel = selections[group.name];
      const selectedValues: string[] = Array.isArray(sel) ? sel : [sel];
      // Take the last selected value that carries an image.
      for (let i = selectedValues.length - 1; i >= 0; i--) {
        const opt = group.options.find(
          (o) => o.value === selectedValues[i] && o.imageSrc
        );
        if (opt && opt.imageSrc) {
          images.push({ src: opt.imageSrc, alt: `${group.label}: ${opt.label}` });
          break;
        }
      }
    });
    return images;
  }, [showPreview, groups, selections]);

  // Build summary lines: one per group showing the selected option label(s).
  const summaryLines = useMemo(() => {
    return groups.map((group) => {
      const sel = selections[group.name];
      let display = "";
      if (group.type === "checkbox") {
        const checked = Array.isArray(sel) ? sel : [];
        if (checked.length === 0) {
          display = "None";
        } else {
          display = checked
            .map((v) => group.options.find((o) => o.value === v)?.label ?? v)
            .join(", ");
        }
      } else {
        const val = typeof sel === "string" ? sel : "";
        display = (group.options.find((o) => o.value === val)?.label ?? val) || "None";
      }
      return { key: group.label, value: display };
    });
  }, [groups, selections]);

  const rootClassName = ["pfc", `pfc--${layout}`, className || ""]
    .filter(Boolean)
    .join(" ");

  const hasPreview =
    showPreview && previewImages.length > 0;

  return (
    <section className={rootClassName}>
      {(title || description) && (
        <header className="pfc__header">
          {title && <h2 className="pfc__title">{title}</h2>}
          {description && <p className="pfc__description">{description}</p>}
        </header>
      )}

      <div className="pfc__body">
        {/* Left / top column: option groups */}
        <div className="pfc__groups">
          {groups.map((group) => (
            <OptionGroupField
              key={group.name}
              group={group}
              idPrefix={idPrefix}
              currency={currency}
              selection={selections[group.name]}
              onChange={handleChange}
            />
          ))}
        </div>

        {/* Right / bottom column: preview (optional) + summary + actions */}
        <div className="pfc__right">
          {hasPreview && (
            <div className="pfc__preview" aria-hidden="true">
              {previewImages.map((img, idx) => (
                <img
                  key={idx}
                  className="pfc__preview-img"
                  src={img.src}
                  alt={img.alt}
                />
              ))}
              {previewImages.length > 0 && (
                <p className="pfc__preview-caption">
                  {previewImages.map((img) => img.alt).join(" / ")}
                </p>
              )}
            </div>
          )}

          <div className="pfc__summary" aria-live="polite">
            <p className="pfc__summary-heading">Your configuration</p>
            {summaryLines.map((line) => (
              <div key={line.key} className="pfc__summary-line">
                <span className="pfc__summary-key">{line.key}</span>
                <span className="pfc__summary-val">{line.value}</span>
              </div>
            ))}
            <div className="pfc__total">
              <span className="pfc__total-label">Total</span>
              <span className="pfc__total-price">{formattedTotal}</span>
            </div>
          </div>

          {finalCta && (
            <div className="pfc__actions">
              <PrimaryButtonCTA
                label={finalCta.label}
                href={finalCta.href}
                variant="solid"
                shape="rounded"
                icon="arrow-right"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
