import Button from "./ui/Button";

export default function CTASection({ title, subtitle, ctaLabel, ctaHref = "#" }) {
  return (
    <section className="section">
      <div className="container">
        {title ? <h2>{title}</h2> : null}
        {subtitle ? <p>{subtitle}</p> : null}
        {ctaLabel ? <Button href={ctaHref} label={ctaLabel} variant="primary" /> : null}
      </div>
    </section>
  );
}

