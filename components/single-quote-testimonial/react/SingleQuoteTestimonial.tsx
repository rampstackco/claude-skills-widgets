import "../styles.css";

export type Attribution = {
  /** Speaker full name */
  name: string;
  /** Speaker job title */
  title?: string;
  /** Employer or organization name */
  company?: string;
  /** URL of the speaker headshot image */
  avatar?: string;
  /** URL of the company logo image */
  companyLogo?: string;
};

export type SingleQuoteTestimonialProps = {
  /** The testimonial text displayed inside the blockquote */
  quote: string;
  /** Speaker identity */
  attribution: Attribution;
  /** Visual treatment */
  style?: "minimal" | "card" | "with-headshot";
  /** Extra class appended to the root element */
  className?: string;
};

export function SingleQuoteTestimonial({
  quote,
  attribution,
  style = "minimal",
  className,
}: SingleQuoteTestimonialProps) {
  const { name, title, company, avatar, companyLogo } = attribution;

  const metaParts = [title, company].filter(Boolean).join(", ");

  const rootClass = [
    "sqt",
    `sqt--${style}`,
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <figure className={rootClass}>
      <blockquote className="sqt__quote">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="sqt__attribution">
        {(style === "with-headshot" && avatar) && (
          <img
            className="sqt__avatar"
            src={avatar}
            alt={name}
            width={48}
            height={48}
          />
        )}
        <span>
          <span className="sqt__name">{name}</span>
          {metaParts && (
            <span className="sqt__meta">{metaParts}</span>
          )}
          {companyLogo && company && (
            <img
              className="sqt__logo"
              src={companyLogo}
              alt={company}
            />
          )}
        </span>
      </figcaption>
    </figure>
  );
}
