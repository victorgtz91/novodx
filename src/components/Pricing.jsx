import Container from "./ui/Container";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import Text from "./ui/Text";

export default function Pricing({ title, price, period, bullets = [] }) {
  return (
    <Section>
      <Container>
        <div style={{ display: "grid", gap: 16 }}>
          {title ? <Heading as="h2">{title}</Heading> : null}
          <div>
            {(price || period) ? (
              <Text>
                <strong>{price}</strong>
                {period ? <span style={{ color: "#666" }}> / {period}</span> : null}
              </Text>
            ) : null}
            {bullets && bullets.length > 0 ? (
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}

