import Container from "./ui/Container";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import Text from "./ui/Text";

export default function FAQ({ items = [] }) {
  return (
    <Section>
      <Container>
        <div style={{ display: "grid", gap: 16 }}>
          <Heading as="h2">Frequently asked questions</Heading>
          <dl style={{ display: "grid", gap: 12, margin: 0 }}>
            {items.map((item, idx) => (
              <div key={idx}>
                <dt style={{ fontWeight: 600 }}>{item.q}</dt>
                <dd style={{ margin: 0 }}>
                  <Text>{item.a}</Text>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}

