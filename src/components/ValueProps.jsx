import Container from "./ui/Container";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import Text from "./ui/Text";

export default function ValueProps({ title, items = [] }) {
  return (
    <Section>
      <Container>
        <div style={{ display: "grid", gap: 24 }}>
          {title ? <Heading as="h2">{title}</Heading> : null}
          <div style={{ display: "grid", gap: 16 }}>
            {items.map((item, idx) => (
              <div key={idx}>
                <Heading as="h3">{item.title}</Heading>
                {item.desc ? <Text>{item.desc}</Text> : null}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

