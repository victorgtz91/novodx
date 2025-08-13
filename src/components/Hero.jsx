import Container from "./ui/Container";
import Heading from "./ui/Heading";
import Text from "./ui/Text";
import Button from "./ui/Button";

export default function Hero({ title, subtitle, primaryCta, secondaryCta }) {
  return (
    <section style={{ padding: "64px 0" }}>
      <Container>
        <div style={{ display: "grid", gap: 16 }}>
          <Heading as="h1">{title}</Heading>
          {subtitle ? <Text>{subtitle}</Text> : null}
          <div style={{ display: "flex", gap: 12 }}>
            {primaryCta ? (
              <Button href={primaryCta.href} label={primaryCta.label} variant="primary" />
            ) : null}
            {secondaryCta ? (
              <Button href={secondaryCta.href} label={secondaryCta.label} variant="secondary" />
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

