import "../styles.css";
import { SingleQuoteTestimonial } from "../../single-quote-testimonial/react/SingleQuoteTestimonial";

export type Testimonial = {
  /** The testimonial text displayed inside the blockquote */
  quote: string;
  /** Speaker full name */
  name: string;
  /** Speaker job title */
  title?: string;
  /** Employer or organization name */
  company?: string;
  /** URL of the speaker headshot image */
  avatar?: string;
};

export type TestimonialGridProps = {
  /** Array of 3 to 6 testimonial objects */
  testimonials: Testimonial[];
  /** Number of columns at desktop widths */
  columns?: 2 | 3;
  /** Visual treatment applied to each item */
  style?: "minimal" | "card";
  /** Small label displayed above the headline */
  eyebrow?: string;
  /** Section heading displayed above the grid */
  headline?: string;
  /** Extra class appended to the root element */
  className?: string;
};

export function TestimonialGrid({
  testimonials,
  columns = 3,
  style = "card",
  eyebrow,
  headline,
  className,
}: TestimonialGridProps) {
  const rootClass = [
    "tg",
    `tg--cols-${columns}`,
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={rootClass}>
      {eyebrow && <p className="tg__eyebrow">{eyebrow}</p>}
      {headline && <h2 className="tg__headline">{headline}</h2>}
      <div className="tg__grid">
        {testimonials.map((t, index) => {
          // When a testimonial includes an avatar, use the with-headshot style
          // to show the photo beside the attribution.
          const itemStyle =
            t.avatar ? "with-headshot" : style;

          return (
            <div key={index} className="tg__item">
              <SingleQuoteTestimonial
                quote={t.quote}
                attribution={{
                  name: t.name,
                  title: t.title,
                  company: t.company,
                  avatar: t.avatar,
                }}
                style={itemStyle}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
