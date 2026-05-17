"use client";
import {
  DiagnosticQuizAssessment,
  QuizResult,
  Question,
  ResultTier,
} from "../../diagnostic-quiz-assessment/react/DiagnosticQuizAssessment";

export type ProductMarketFitQuizProps = {
  /** Interpolated into question text. Defaults to "this product". */
  productName?: string;
  /** Include "How often do you use it?" as question 2. Defaults to true. */
  includeUsageQuestion?: boolean;
  /** Include the open-ended "main benefit" text question. Defaults to true. */
  includeOpenEnded?: boolean;
  /** Called when the quiz finishes with the raw QuizResult. */
  onComplete?: (result: QuizResult) => void;
  /** Extra class forwarded to the DiagnosticQuizAssessment root. */
  className?: string;
};

const RESULT_TIERS: ResultTier[] = [
  {
    minScore: 3,
    maxScore: 99,
    title: "Strong PMF",
    description:
      "Your product shows strong product-market fit. Focus on growth and retention.",
    recommendation:
      "Double down on what your most loyal users value. Systematize onboarding so new users reach that same moment faster.",
  },
  {
    minScore: 1,
    maxScore: 2,
    title: "Emerging PMF",
    description:
      "Your product shows emerging fit. Iterate on what your most-disappointed users value.",
    recommendation:
      "Identify the subset of users who would be very disappointed and study their use case. Close the gap for that segment first.",
  },
  {
    minScore: 0,
    maxScore: 0,
    title: "No PMF yet",
    description:
      "Product-market fit is not yet established. Consider repositioning or talking to more users.",
    recommendation:
      "Run qualitative interviews with current users to understand what would need to change for them to feel the product is indispensable.",
  },
];

export function ProductMarketFitQuiz({
  productName = "this product",
  includeUsageQuestion = true,
  includeOpenEnded = true,
  onComplete,
  className,
}: ProductMarketFitQuizProps) {
  const questions: Question[] = [
    {
      id: "disappointment",
      text: `How would you feel if you could no longer use ${productName}?`,
      type: "single-select",
      options: [
        { value: "very", label: "Very disappointed", score: 3 },
        { value: "somewhat", label: "Somewhat disappointed", score: 1 },
        { value: "not", label: "Not disappointed", score: 0 },
        {
          value: "na",
          label: "Not applicable / I no longer use it",
          score: 0,
        },
      ],
    },
  ];

  if (includeUsageQuestion) {
    questions.push({
      id: "usage-frequency",
      text: `How often do you use ${productName}?`,
      type: "single-select",
      options: [
        { value: "daily", label: "Daily" },
        { value: "weekly", label: "Weekly" },
        { value: "monthly", label: "Monthly" },
        { value: "less", label: "Less often" },
      ],
    });
  }

  if (includeOpenEnded) {
    questions.push({
      id: "main-benefit",
      text: `What is the main benefit you receive from ${productName}?`,
      type: "text",
      required: false,
    });
  }

  return (
    <DiagnosticQuizAssessment
      title="Product-Market Fit Assessment"
      description="Answer a few questions to get a signal on how this product is landing with you."
      questions={questions}
      resultTiers={RESULT_TIERS}
      onComplete={onComplete}
      className={className}
    />
  );
}
