import Button from "./ui/Button";

export default function Hero({ title, subtitle, primaryCta, secondaryCta }) {
  return (
    <section className="section">
      <div className="container">
        <h1>{title}</h1>
        {subtitle ? <p className="muted">{subtitle}</p> : null}
        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
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

