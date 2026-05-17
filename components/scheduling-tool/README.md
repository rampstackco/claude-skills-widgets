# SchedulingTool

**Implements pattern**: [`patterns/interactive-tooling/10-scheduling-tool.md`](../../patterns/interactive-tooling/10-scheduling-tool.md)
**Category**: Interactive Tooling
**Stability**: v2.6

## What it is

Calendly-style scheduling UI. User selects a date from upcoming days, then a time slot, then provides contact info. The component renders the UI; consumers handle the actual booking via the onConfirm callback.

## React usage

```tsx
import { SchedulingTool } from "claude-skills-widgets/scheduling-tool";

<SchedulingTool
  title="Book a 30-minute intro call"
  duration={30}
  availableSlots={[
    { date: "2026-05-20", times: ["09:00", "09:30", "10:00", "14:00"] },
    { date: "2026-05-21", times: ["10:00", "11:00", "15:00", "15:30"] },
    { date: "2026-05-22", times: ["09:00", "13:00", "13:30", "14:00"] },
  ]}
  onConfirm={async (selection) => {
    // Wire your booking backend here
    await fetch("/api/book", { method: "POST", body: JSON.stringify(selection) });
  }}
/>
```

## HTML usage

(See `html/index.html` for self-contained example with inline vanilla JS state machine.)

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| title | string | undefined | Tool heading |
| description | string | undefined | Supporting copy |
| duration | number | 30 | Meeting length in minutes; shown to user |
| availableSlots | AvailableSlot[] | auto-generated | Pre-defined slots; if omitted, generates next 14 weekdays with default times |
| onConfirm | (selection) => Promise<void> | required | Called on submit; should book the meeting |
| formFields | FormField[] | name + email | Additional form fields beyond name/email |
| timezone | string | "Your timezone" | Display label for the timezone context |
| successText | string | "Booking confirmed" | Shown after successful submit |
| className | string | undefined | Extra class |

Where `AvailableSlot`:

```typescript
type AvailableSlot = {
  date: string;          // ISO date "2026-05-20"
  times: string[];       // ["09:00", "09:30", "10:00", ...] (24-hour format)
};
```

Where `FormField`:

```typescript
type FormField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  placeholder?: string;
};
```

And the `BookingSelection` passed to `onConfirm`:

```typescript
type BookingSelection = {
  date: string;
  time: string;
  duration: number;
  formValues: Record<string, string>;
};
```

## Customization (CSS variables)

```css
.sch {
  --sch-bg: var(--brand-surface, white);
  --sch-text-color: var(--brand-ink, #102542);
  --sch-muted-color: rgba(16, 37, 66, 0.6);
  --sch-accent: var(--brand-accent, #1e5fcf);
  --sch-date-bg: white;
  --sch-date-border: rgba(0, 0, 0, 0.1);
  --sch-date-bg-selected: var(--sch-accent);
  --sch-date-text-selected: white;
  --sch-date-bg-hover: rgba(0, 0, 0, 0.025);
  --sch-time-bg: white;
  --sch-time-border: rgba(0, 0, 0, 0.1);
  --sch-time-bg-selected: var(--sch-accent);
  --sch-time-text-selected: white;
  --sch-input-border: rgba(0, 0, 0, 0.12);
  --sch-radius: 0.75rem;
  --sch-section-padding: 2rem;
  --sch-gap: 1rem;
}
```

## Accessibility

- Date and time buttons are `<button>` elements (not divs with click handlers)
- Selected state announced via aria-pressed
- Time slot grid uses role="grid" with proper row/column semantics
- Form inputs have associated labels via useId
- Confirmation state uses role="status" with aria-live="polite"
- Date format uses Intl.DateTimeFormat for locale-aware display

## Honesty note

Show only times you can actually honor. Fake availability (slots that get marked unavailable on click) damages trust. If your real availability is limited, show fewer slots rather than disabling them after selection.

## Browser support

Modern browsers. Uses Intl.DateTimeFormat for date display.

## Migration history

- v2.6: initial implementation of `patterns/interactive-tooling/10-scheduling-tool.md`
