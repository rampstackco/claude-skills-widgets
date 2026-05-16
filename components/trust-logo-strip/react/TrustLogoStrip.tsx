import "./../styles.css";

export type Logo = {
  /** Brand name; used for alt text */
  name: string;
  /** Logo image source */
  src: string;
  /** Optional URL to link the logo */
  href?: string;
};

export type TrustLogoStripProps = {
  /** Label text above the logo row */
  eyebrow?: string;
  /** Array of logos to display */
  logos: Logo[];
  /** Optional extra class name for the root element */
  className?: string;
};

export function TrustLogoStrip({
  eyebrow = "Trusted by teams at",
  logos,
  className,
}: TrustLogoStripProps) {
  const rootClassName = className ? `tls ${className}` : "tls";

  return (
    <section className={rootClassName}>
      {eyebrow && <p className="tls__eyebrow">{eyebrow}</p>}
      <ul className="tls__list">
        {logos.map((logo) => (
          <li key={logo.name} className="tls__item">
            {logo.href ? (
              <a
                className="tls__item-link"
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="tls__logo"
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                />
              </a>
            ) : (
              <img
                className="tls__logo"
                src={logo.src}
                alt={logo.name}
                loading="lazy"
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
