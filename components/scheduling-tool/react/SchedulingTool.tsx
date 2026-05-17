"use client";
import "../styles.css";
import { useId, useMemo, useState } from "react";
import { PrimaryButtonCTA } from "../../primary-button-cta/react/PrimaryButtonCTA";

export type AvailableSlot = {
  date: string;
  times: string[];
};

export type FormField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  placeholder?: string;
};

export type BookingSelection = {
  date: string;
  time: string;
  duration: number;
  formValues: Record<string, string>;
};

export type SchedulingToolProps = {
  title?: string;
  description?: string;
  duration?: number;
  availableSlots?: AvailableSlot[];
  onConfirm: (selection: BookingSelection) => Promise<void>;
  formFields?: FormField[];
  timezone?: string;
  successText?: string;
  className?: string;
};

const DEFAULT_FORM_FIELDS: FormField[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
];

function generateDefaultSlots(): AvailableSlot[] {
  const slots: AvailableSlot[] = [];
  const defaultTimes = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
  ];
  const today = new Date();
  let daysAdded = 0;
  let dayOffset = 1;
  while (daysAdded < 14) {
    const date = new Date(today);
    date.setDate(date.getDate() + dayOffset);
    const dayOfWeek = date.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      slots.push({
        date: date.toISOString().split("T")[0],
        times: defaultTimes,
      });
      daysAdded++;
    }
    dayOffset++;
  }
  return slots;
}

function formatDate(dateStr: string): {
  weekday: string;
  day: string;
  month: string;
} {
  const date = new Date(dateStr);
  return {
    weekday: new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date),
    day: new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(date),
    month: new Intl.DateTimeFormat("en-US", { month: "short" }).format(date),
  };
}

function formatTime(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes);
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

export function SchedulingTool({
  title,
  description,
  duration = 30,
  availableSlots,
  onConfirm,
  formFields = DEFAULT_FORM_FIELDS,
  timezone = "Your local timezone",
  successText = "Booking confirmed",
  className,
}: SchedulingToolProps) {
  const idPrefix = useId();
  const slots = useMemo(
    () => availableSlots || generateDefaultSlots(),
    [availableSlots]
  );

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const selectedDateSlot = slots.find((s) => s.date === selectedDate);
  const availableTimes = selectedDateSlot?.times || [];

  function handleDateClick(date: string) {
    setSelectedDate(date);
    setSelectedTime(null);
  }

  function handleTimeClick(time: string) {
    setSelectedTime(time);
  }

  function handleFieldChange(name: string, value: string) {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function canSubmit(): boolean {
    if (!selectedDate || !selectedTime) return false;
    for (const field of formFields) {
      if (field.required !== false && !formValues[field.name]?.trim()) {
        return false;
      }
    }
    return true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit() || !selectedDate || !selectedTime) return;
    setStatus("submitting");
    try {
      await onConfirm({
        date: selectedDate,
        time: selectedTime,
        duration,
        formValues,
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Booking failed");
    }
  }

  const rootClassName = ["sch", className || ""].filter(Boolean).join(" ");

  if (status === "success") {
    const dateInfo = selectedDate ? formatDate(selectedDate) : null;
    return (
      <section className={rootClassName}>
        <div className="sch__success" role="status" aria-live="polite">
          <div className="sch__success-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M5 12l5 5 9-9"
                stroke="white"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>
          <p className="sch__success-message">{successText}</p>
          {dateInfo && selectedTime && (
            <p className="sch__success-details">
              {dateInfo.weekday}, {dateInfo.month} {dateInfo.day} at{" "}
              {formatTime(selectedTime)}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className={rootClassName}>
      {title && <h2 className="sch__title">{title}</h2>}
      <p className="sch__duration">{duration} minute meeting</p>
      {description && <p className="sch__description">{description}</p>}

      <p className="sch__step-label">1. Pick a date</p>
      <div className="sch__dates" role="group" aria-label="Available dates">
        {slots.map((slot) => {
          const info = formatDate(slot.date);
          return (
            <button
              key={slot.date}
              className="sch__date"
              type="button"
              onClick={() => handleDateClick(slot.date)}
              aria-pressed={selectedDate === slot.date}
            >
              <span className="sch__date-weekday">{info.weekday}</span>
              <span className="sch__date-day">{info.day}</span>
              <span className="sch__date-month">{info.month}</span>
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <>
          <p className="sch__step-label">2. Pick a time</p>
          <div className="sch__times" role="group" aria-label="Available times">
            {availableTimes.map((time) => (
              <button
                key={time}
                className="sch__time"
                type="button"
                onClick={() => handleTimeClick(time)}
                aria-pressed={selectedTime === time}
              >
                {formatTime(time)}
              </button>
            ))}
          </div>
        </>
      )}

      {selectedDate && selectedTime && (
        <form className="sch__form" onSubmit={handleSubmit}>
          <p className="sch__step-label">3. Your details</p>
          {formFields.map((field) => {
            const fieldId = `${idPrefix}-${field.name}`;
            return (
              <div key={field.name} className="sch__field">
                <label htmlFor={fieldId} className="sch__field-label">
                  {field.label}
                  {field.required !== false && (
                    <span aria-hidden="true"> *</span>
                  )}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={fieldId}
                    className="sch__field-textarea"
                    value={formValues[field.name] || ""}
                    onChange={(e) =>
                      handleFieldChange(field.name, e.target.value)
                    }
                    placeholder={field.placeholder}
                    required={field.required !== false}
                  />
                ) : (
                  <input
                    id={fieldId}
                    className="sch__field-input"
                    type={field.type || "text"}
                    value={formValues[field.name] || ""}
                    onChange={(e) =>
                      handleFieldChange(field.name, e.target.value)
                    }
                    placeholder={field.placeholder}
                    required={field.required !== false}
                  />
                )}
              </div>
            );
          })}

          {status === "error" && (
            <p role="alert" style={{ color: "crimson", margin: 0 }}>
              {errorMsg}
            </p>
          )}

          <div className="sch__actions">
            <PrimaryButtonCTA
              label={status === "submitting" ? "Booking..." : "Confirm booking"}
              type="submit"
            />
          </div>

          <p className="sch__timezone">{timezone}</p>
        </form>
      )}
    </section>
  );
}
