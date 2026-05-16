import { useState, useEffect } from "react";
import "../styles.css";

export type CountdownTimerProps = {
  /** The target deadline. Accepts a Date object or an ISO 8601 string.
   *  Must be a genuine, fixed deadline from server-side or business logic. */
  deadline: Date | string;
  /** Context copy displayed above the countdown digits. */
  label?: string;
  /** Text shown once the deadline has passed, replacing the timer. */
  expiredLabel?: string;
  /** "full" renders "2 days 3 hours 45 minutes 12 seconds".
   *  "compact" renders "02d 03h 45m 12s". */
  format?: "full" | "compact";
  /** Callback fired once when the timer transitions to expired. */
  onExpire?: () => void;
  /** Extra class applied to the root .cdt element. */
  className?: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(deadline: Date): TimeLeft | null {
  const diff = deadline.getTime() - Date.now();
  if (diff <= 0) return null;
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function formatFull(t: TimeLeft): string {
  const parts: string[] = [];
  if (t.days > 0) parts.push(`${t.days} ${t.days === 1 ? "day" : "days"}`);
  if (t.hours > 0 || t.days > 0) parts.push(`${t.hours} ${t.hours === 1 ? "hour" : "hours"}`);
  parts.push(`${t.minutes} ${t.minutes === 1 ? "minute" : "minutes"}`);
  parts.push(`${t.seconds} ${t.seconds === 1 ? "second" : "seconds"}`);
  return parts.join(" ");
}

function formatCompact(t: TimeLeft): string {
  const parts: string[] = [];
  if (t.days > 0) parts.push(`${pad(t.days)}d`);
  parts.push(`${pad(t.hours)}h`);
  parts.push(`${pad(t.minutes)}m`);
  parts.push(`${pad(t.seconds)}s`);
  return parts.join(" ");
}

export function CountdownTimer({
  deadline,
  label = "Ends in",
  expiredLabel = "Deal ended",
  format = "full",
  onExpire,
  className,
}: CountdownTimerProps) {
  const deadlineDate: Date =
    deadline instanceof Date ? deadline : new Date(deadline);

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() =>
    getTimeLeft(deadlineDate)
  );
  const [expired, setExpired] = useState<boolean>(() =>
    getTimeLeft(deadlineDate) === null
  );

  useEffect(() => {
    // If already expired on mount, fire the callback once and stop.
    if (getTimeLeft(deadlineDate) === null) {
      setExpired(true);
      onExpire?.();
      return;
    }

    const id = setInterval(() => {
      const remaining = getTimeLeft(deadlineDate);
      if (remaining === null) {
        setTimeLeft(null);
        setExpired(true);
        onExpire?.();
        clearInterval(id);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(id);
    // onExpire is intentionally excluded from deps to avoid re-registering
    // the interval on every render if the caller passes an inline function.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deadlineDate.getTime()]);

  const rootClass = [
    "cdt",
    expired ? "cdt--expired" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const displayText: string = expired
    ? expiredLabel
    : timeLeft
    ? format === "compact"
      ? formatCompact(timeLeft)
      : formatFull(timeLeft)
    : expiredLabel;

  return (
    <section className={rootClass}>
      <p className="cdt__label">{label}</p>
      <p className="cdt__display" aria-live="off">
        {displayText}
      </p>
    </section>
  );
}
