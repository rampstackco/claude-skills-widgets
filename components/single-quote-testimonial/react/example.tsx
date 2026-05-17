import { SingleQuoteTestimonial } from "./SingleQuoteTestimonial";

/** Minimal variant: centered quote with text-only attribution, no background. */
export function MinimalExample() {
  return (
    <SingleQuoteTestimonial
      quote="Shipping confidence went up immediately after we switched. Our on-call rotation is genuinely calm now."
      attribution={{
        name: "Jordan Lee",
        title: "VP Engineering",
        company: "Northwind",
      }}
      style="minimal"
    />
  );
}

/** Card variant: same content wrapped in a subtle background and border. */
export function CardExample() {
  return (
    <SingleQuoteTestimonial
      quote="The onboarding cut our setup time from days to under an hour. I expected the usual week-long back-and-forth and it just didn't happen."
      attribution={{
        name: "Morgan Reyes",
        title: "CTO",
        company: "Crestfield Labs",
      }}
      style="card"
    />
  );
}

/** With-headshot variant: avatar beside the attribution, optional company logo below. */
export function WithHeadshotExample() {
  return (
    <SingleQuoteTestimonial
      quote="The integration team was responsive and the documentation was actually accurate. That combination is rarer than it should be."
      attribution={{
        name: "Casey Tran",
        title: "Head of Platform",
        company: "Harborview",
        avatar: "https://via.placeholder.com/64",
        companyLogo: "https://via.placeholder.com/120x32",
      }}
      style="with-headshot"
    />
  );
}
