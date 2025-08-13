import Button from "./ui/Button";

export default function Hero({ title, subtitle, primaryCta, secondaryCta }) {
  return (
    <section className="hero section" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container" style={{ position: "relative" }}>
        <h1>{title}</h1>
        {subtitle ? <p className="muted" style={{ maxWidth: 700, marginTop: 8 }}>{subtitle}</p> : null}
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          {primaryCta?.label ? (
            <Button href={primaryCta.href} label={primaryCta.label} variant="primary" />
          ) : null}
          {secondaryCta?.label ? (
            <Button href={secondaryCta.href} label={secondaryCta.label} variant="secondary" />
          ) : null}
        </div>
      </div>
    </section>
  );
}

