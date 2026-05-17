"use client";
import "../styles.css";
import { useId, useState } from "react";

export type Question = {
  id: string;
  text: string;
  type: "single-select" | "multi-select" | "scale" | "text";
  options?: { value: string; label: string; score?: number }[];
  scaleMin?: number;
  scaleMax?: number;
  scaleLowLabel?: string;
  scaleHighLabel?: string;
  required?: boolean;
  description?: string;
};

export type ResultTier = {
  minScore: number;
  maxScore: number;
  title: string;
  description: string;
  recommendation?: string;
};

export type QuizResult = {
  score: number;
  tier: ResultTier | null;
  answers: Record<string, string | string[] | number>;
};

export type DiagnosticQuizAssessmentProps = {
  title?: string;
  description?: string;
  questions: Question[];
  resultTiers?: ResultTier[];
  scoring?: (answers: Record<string, string | string[] | number>) => number;
  onComplete?: (result: QuizResult) => void;
  startButtonLabel?: string;
  nextButtonLabel?: string;
  submitButtonLabel?: string;
  restartButtonLabel?: string;
  showProgress?: boolean;
  allowBack?: boolean;
  className?: string;
};

type ScreenState =
  | { phase: "idle" }
  | { phase: "question"; index: number }
  | { phase: "result"; result: QuizResult };

function defaultScoring(
  answers: Record<string, string | string[] | number>,
  questions: Question[]
): number {
  let score = 0;
  for (const q of questions) {
    const answer = answers[q.id];
    if (answer === undefined) continue;
    if (q.type === "single-select") {
      const option = q.options?.find((o) => o.value === answer);
      score += option?.score || 0;
    } else if (q.type === "multi-select") {
      const selected = Array.isArray(answer) ? answer : [];
      for (const val of selected) {
        const option = q.options?.find((o) => o.value === val);
        score += option?.score || 0;
      }
    } else if (q.type === "scale") {
      score += typeof answer === "number" ? answer : 0;
    }
  }
  return score;
}

function findTier(
  score: number,
  tiers: ResultTier[] | undefined
): ResultTier | null {
  if (!tiers) return null;
  return tiers.find((t) => score >= t.minScore && score <= t.maxScore) || null;
}

export function DiagnosticQuizAssessment({
  title,
  description,
  questions,
  resultTiers,
  scoring,
  onComplete,
  startButtonLabel = "Start",
  nextButtonLabel = "Next",
  submitButtonLabel = "Submit",
  restartButtonLabel = "Retake",
  showProgress = true,
  allowBack = true,
  className,
}: DiagnosticQuizAssessmentProps) {
  const idPrefix = useId();
  const [screen, setScreen] = useState<ScreenState>({ phase: "idle" });
  const [answers, setAnswers] = useState<
    Record<string, string | string[] | number>
  >({});

  const rootClassName = ["dqa", className || ""].filter(Boolean).join(" ");

  function start() {
    setScreen({ phase: "question", index: 0 });
  }

  function back() {
    if (screen.phase === "question" && screen.index > 0) {
      setScreen({ phase: "question", index: screen.index - 1 });
    }
  }

  function next() {
    if (screen.phase !== "question") return;
    if (screen.index < questions.length - 1) {
      setScreen({ phase: "question", index: screen.index + 1 });
    } else {
      const score = scoring
        ? scoring(answers)
        : defaultScoring(answers, questions);
      const tier = findTier(score, resultTiers);
      const result: QuizResult = { score, tier, answers };
      setScreen({ phase: "result", result });
      onComplete?.(result);
    }
  }

  function restart() {
    setAnswers({});
    setScreen({ phase: "idle" });
  }

  function setAnswer(qId: string, value: string | string[] | number) {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  }

  function isAnswered(q: Question): boolean {
    if (q.required === false) return true;
    const a = answers[q.id];
    if (a === undefined) return false;
    if (Array.isArray(a) && a.length === 0) return false;
    if (a === "") return false;
    return true;
  }

  if (screen.phase === "idle") {
    return (
      <section className={rootClassName}>
        {title && <h2 className="dqa__title">{title}</h2>}
        {description && <p className="dqa__description">{description}</p>}
        <div className="dqa__actions">
          <button
            className="dqa__button dqa__button--primary"
            type="button"
            onClick={start}
          >
            {startButtonLabel}
          </button>
        </div>
      </section>
    );
  }

  if (screen.phase === "result") {
    return (
      <section className={rootClassName}>
        <div className="dqa__result" role="region" aria-label="Quiz results">
          <p className="dqa__result-score">{screen.result.score}</p>
          {screen.result.tier && (
            <>
              <h2 className="dqa__result-tier">{screen.result.tier.title}</h2>
              <p className="dqa__result-description">
                {screen.result.tier.description}
              </p>
              {screen.result.tier.recommendation && (
                <p className="dqa__result-recommendation">
                  {screen.result.tier.recommendation}
                </p>
              )}
            </>
          )}
          <div className="dqa__actions">
            <button
              className="dqa__button dqa__button--secondary"
              type="button"
              onClick={restart}
            >
              {restartButtonLabel}
            </button>
          </div>
        </div>
      </section>
    );
  }

  const q = questions[screen.index];
  const progress = ((screen.index + 1) / questions.length) * 100;

  return (
    <section className={rootClassName}>
      {showProgress && (
        <>
          <p className="dqa__progress-label" aria-live="polite">
            Question {screen.index + 1} of {questions.length}
          </p>
          <div
            className="dqa__progress"
            role="progressbar"
            aria-valuenow={screen.index + 1}
            aria-valuemin={1}
            aria-valuemax={questions.length}
          >
            <div
              className="dqa__progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </>
      )}

      <h2 className="dqa__question">{q.text}</h2>
      {q.description && (
        <p className="dqa__question-description">{q.description}</p>
      )}

      {q.type === "single-select" && q.options && (
        <div className="dqa__options" role="radiogroup">
          {q.options.map((opt) => {
            const fieldId = `${idPrefix}-${q.id}-${opt.value}`;
            return (
              <label key={opt.value} className="dqa__option" htmlFor={fieldId}>
                <input
                  id={fieldId}
                  type="radio"
                  name={q.id}
                  value={opt.value}
                  checked={answers[q.id] === opt.value}
                  onChange={() => setAnswer(q.id, opt.value)}
                />
                <span className="dqa__option-label">{opt.label}</span>
              </label>
            );
          })}
        </div>
      )}

      {q.type === "multi-select" && q.options && (
        <div className="dqa__options">
          {q.options.map((opt) => {
            const fieldId = `${idPrefix}-${q.id}-${opt.value}`;
            const selected = Array.isArray(answers[q.id])
              ? (answers[q.id] as string[])
              : [];
            return (
              <label key={opt.value} className="dqa__option" htmlFor={fieldId}>
                <input
                  id={fieldId}
                  type="checkbox"
                  name={q.id}
                  value={opt.value}
                  checked={selected.includes(opt.value)}
                  onChange={(e) => {
                    const newSelected = e.target.checked
                      ? [...selected, opt.value]
                      : selected.filter((v) => v !== opt.value);
                    setAnswer(q.id, newSelected);
                  }}
                />
                <span className="dqa__option-label">{opt.label}</span>
              </label>
            );
          })}
        </div>
      )}

      {q.type === "scale" && (
        <div className="dqa__scale">
          <input
            className="dqa__scale-input"
            type="range"
            min={q.scaleMin ?? 0}
            max={q.scaleMax ?? 10}
            value={
              typeof answers[q.id] === "number"
                ? (answers[q.id] as number)
                : q.scaleMin ?? 0
            }
            onChange={(e) => setAnswer(q.id, Number(e.target.value))}
          />
          <div className="dqa__scale-labels">
            <span>{q.scaleLowLabel || q.scaleMin || 0}</span>
            <span>{q.scaleHighLabel || q.scaleMax || 10}</span>
          </div>
          <p className="dqa__scale-value">
            {typeof answers[q.id] === "number"
              ? (answers[q.id] as number)
              : q.scaleMin ?? 0}
          </p>
        </div>
      )}

      {q.type === "text" && (
        <textarea
          className="dqa__text-input"
          value={
            typeof answers[q.id] === "string" ? (answers[q.id] as string) : ""
          }
          onChange={(e) => setAnswer(q.id, e.target.value)}
          placeholder="Your response..."
        />
      )}

      <div className="dqa__actions">
        {allowBack && screen.index > 0 && (
          <button
            className="dqa__button dqa__button--secondary"
            type="button"
            onClick={back}
          >
            Back
          </button>
        )}
        <button
          className="dqa__button dqa__button--primary"
          type="button"
          onClick={next}
          disabled={!isAnswered(q)}
        >
          {screen.index === questions.length - 1
            ? submitButtonLabel
            : nextButtonLabel}
        </button>
      </div>
    </section>
  );
}
