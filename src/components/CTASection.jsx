import Container from "./ui/Container";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import Text from "./ui/Text";
import Button from "./ui/Button";

export default function CTASection({ title, subtitle, ctaLabel, ctaHref = "#" }) {
  return (
    <Section>
      <Container>
        <div style={{ display: "grid", gap: 16 }}>
          {title ? <Heading as="h2">{title}</Heading> : null}
          {subtitle ? <Text>{subtitle}</Text> : null}
          {ctaLabel ? <Button href={ctaHref} label={ctaLabel} variant="primary" /> : null}
        </div>
      </Container>
    </Section>
  );
}

