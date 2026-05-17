import { ProductMarketFitQuiz } from "./ProductMarketFitQuiz";

/**
 * Default example: all three questions, named product, result logged on completion.
 */
export function ProductMarketFitQuizExample() {
  return (
    <ProductMarketFitQuiz
      productName="Compass"
      onComplete={(result) => {
        console.log("PMF quiz complete:", result.score, result.tier?.title);
      }}
    />
  );
}

/**
 * Minimal example: disappointment question only, no usage or open-ended question.
 * Use this when you want the shortest possible survey with a single scored signal.
 */
export function ProductMarketFitQuizMinimalExample() {
  return (
    <ProductMarketFitQuiz
      productName="Compass"
      includeUsageQuestion={false}
      includeOpenEnded={false}
    />
  );
}
