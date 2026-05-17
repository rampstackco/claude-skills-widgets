"use client";
import "../styles.css";
import { useState } from "react";

export type WizardQuestion = {
  id: string;
  text: string;
  description?: string;
  options: {
    value: string;
    label: string;
    nextQuestion?: string;
  }[];
};

export type Recommendation = {
  id: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  matchAnswers: Record<string, string>;
};

export type MultiStepRecommendationWizardProps = {
  title?: string;
  description?: string;
  questions: WizardQuestion[];
  recommendations: Recommendation[];
  defaultRecommendation?: Recommendation;
  className?: string;
};

type ScreenState =
  | { phase: "idle" }
  | { phase: "question"; questionId: string }
  | { phase: "result"; recommendation: Recommendation | null };

/**
 * Find the first recommendation whose every matchAnswers key matches the
 * collected answers. An empty matchAnswers map matches any answer set.
 */
function matchRecommendation(
  answers: Record<string, string>,
  recommendations: Recommendation[]
): Recommendation | null {
  for (const rec of recommendations) {
    const keys = Object.keys(rec.matchAnswers);
    const allMatch = keys.every((k) => answers[k] === rec.matchAnswers[k]);
    if (allMatch) return rec;
  }
  return null;
}

/**
 * Given a question and the chosen option value, return the id of the next
 * question to show. Returns null when there is no next question.
 */
function resolveNextQuestionId(
  question: WizardQuestion,
  chosenValue: string,
  questions: WizardQuestion[]
): string | null {
  const option = question.options.find((o) => o.value === chosenValue);
  if (option?.nextQuestion) return option.nextQuestion;

  // Linear fallback: next entry in array order
  const currentIndex = questions.findIndex((q) => q.id === question.id);
  if (currentIndex === -1 || currentIndex === questions.length - 1) return null;
  return questions[currentIndex + 1].id;
}

export function MultiStepRecommendationWizard({
  title,
  description,
  questions,
  recommendations,
  defaultRecommendation,
  className,
}: MultiStepRecommendationWizardProps) {
  const [screen, setScreen] = useState<ScreenState>({ phase: "idle" });
  // answers maps question id to chosen option value
  const [answers, setAnswers] = useState<Record<string, string>>({});
  // history is the stack of visited question ids (earliest first)
  const [history, setHistory] = useState<string[]>([]);

  const rootClassName = ["mrw", className || ""].filter(Boolean).join(" ");

  function start() {
    if (questions.length === 0) return;
    const firstId = questions[0].id;
    setScreen({ phase: "question", questionId: firstId });
    setHistory([firstId]);
  }

  function selectOption(questionId: string, value: string) {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const nextId = resolveNextQuestionId(question, value, questions);
    if (nextId === null) {
      // No more questions: compute result
      const matched = matchRecommendation(newAnswers, recommendations);
      const result = matched ?? defaultRecommendation ?? null;
      setScreen({ phase: "result", recommendation: result });
    } else {
      setHistory((prev) => [...prev, nextId]);
      setScreen({ phase: "question", questionId: nextId });
    }
  }

  function back() {
    if (history.length <= 1) {
      // Back from the first question returns to the landing screen
      setScreen({ phase: "idle" });
      setHistory([]);
      return;
    }
    const newHistory = history.slice(0, -1);
    const prevId = newHistory[newHistory.length - 1];
    setHistory(newHistory);
    setScreen({ phase: "question", questionId: prevId });
  }

  function restart() {
    setAnswers({});
    setHistory([]);
    setScreen({ phase: "idle" });
  }

  // ---- Landing screen ----
  if (screen.phase === "idle") {
    return (
      <section className={rootClassName}>
        {title && <h2 className="mrw__title">{title}</h2>}
        {description && <p className="mrw__description">{description}</p>}
        <div className="mrw__actions">
          <button
            className="mrw__button mrw__button--primary"
            type="button"
            onClick={start}
          >
            Start
          </button>
        </div>
      </section>
    );
  }

  // ---- Result screen ----
  if (screen.phase === "result") {
    const rec = screen.recommendation;
    return (
      <section className={rootClassName}>
        <div
          role="region"
          aria-label="Your recommendation"
        >
          {rec ? (
            <div className="mrw__recommendation">
              {rec.imageSrc && (
                <img
                  className="mrw__recommendation-image"
                  src={rec.imageSrc}
                  alt=""
                  aria-hidden="true"
                />
              )}
              <h2 className="mrw__recommendation-title">{rec.title}</h2>
              <p className="mrw__recommendation-description">{rec.description}</p>
              {rec.ctaLabel && rec.ctaHref && (
                <a
                  className="mrw__recommendation-cta"
                  href={rec.ctaHref}
                >
                  {rec.ctaLabel}
                </a>
              )}
            </div>
          ) : (
            <p className="mrw__no-match">
              No specific recommendation matched your answers. Contact us and we
              can walk through the options together.
            </p>
          )}
          <div className="mrw__result-actions">
            <button
              className="mrw__button mrw__button--secondary"
              type="button"
              onClick={restart}
            >
              Start over
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ---- Question screen ----
  const currentQuestion = questions.find(
    (q) => q.id === screen.questionId
  );

  if (!currentQuestion) return null;

  const visitedCount = history.length;
  // Total possible steps is not fixed in a branching flow, so we show a
  // visited count rather than a fraction of total.
  const progressPct = Math.min(
    (visitedCount / questions.length) * 100,
    95
  );

  const selectedValue = answers[currentQuestion.id];

  return (
    <section className={rootClassName}>
      <p className="mrw__progress-label" aria-live="polite">
        Step {visitedCount}
      </p>
      <div
        className="mrw__progress"
        role="progressbar"
        aria-valuenow={visitedCount}
        aria-valuemin={1}
        aria-valuemax={questions.length}
      >
        <div
          className="mrw__progress-fill"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <h2 className="mrw__question">{currentQuestion.text}</h2>
      {currentQuestion.description && (
        <p className="mrw__question-description">
          {currentQuestion.description}
        </p>
      )}

      <div className="mrw__options">
        {currentQuestion.options.map((opt) => {
          const isSelected = selectedValue === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              className={
                isSelected
                  ? "mrw__option mrw__option--selected"
                  : "mrw__option"
              }
              onClick={() => selectOption(currentQuestion.id, opt.value)}
              aria-pressed={isSelected}
            >
              {opt.label}
              {isSelected && (
                <svg
                  className="mrw__option-check"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="9" cy="9" r="9" fill="currentColor" opacity="0.15" />
                  <path
                    d="M5 9l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          );
        })}
      </div>

      <div className="mrw__actions">
        {history.length > 0 && (
          <button
            className="mrw__button mrw__button--secondary"
            type="button"
            onClick={back}
          >
            Back
          </button>
        )}
      </div>
    </section>
  );
}
