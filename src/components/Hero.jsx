import Image from "next/image";
import Button from "./ui/Button";

export default function Hero({ title, subtitle, primaryCta, secondaryCta }) {
  return (
    <section className="hero section" id="top" style={{ paddingBottom: 0, borderRadius: 12, overflow: "hidden" }}>
      <Image
        src="/images/goldn-hero.jpg"
        alt=""
        fill
        priority
        sizes="(max-width: 640px) 100vw, 100vw"
        style={{ objectFit: "cover", objectPosition: "62% center", zIndex: -2 }}
      />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__content hero__cols" style={{ position: "relative" }}>
        <div />
        <div className="hero__contentInner" style={{ textAlign: "right" }}>
          <h1>{title}</h1>
          {subtitle ? <p className="muted" style={{ marginTop: 12 }}>{subtitle}</p> : null}
          <div style={{ display: "flex", gap: 12, marginTop: 20, justifyContent: "flex-end" }}>
            {primaryCta?.label ? (
              <Button href={primaryCta.href} label={primaryCta.label} variant="primary" />
            ) : null}
            {secondaryCta?.label ? (
              <Button href={secondaryCta.href} label={secondaryCta.label} variant="secondary" />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

