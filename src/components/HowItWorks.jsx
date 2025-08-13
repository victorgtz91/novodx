import Container from "./ui/Container";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import Text from "./ui/Text";

export default function HowItWorks({ steps = [] }) {
  return (
    <Section>
      <Container>
        <div style={{ display: "grid", gap: 16 }}>
          <Heading as="h2">How it works</Heading>
          <ol style={{ display: "grid", gap: 12, margin: 0, paddingLeft: 20 }}>
            {steps.map((step, idx) => (
              <li key={idx}>
                <Heading as="h3">{step.title}</Heading>
                {step.desc ? <Text>{step.desc}</Text> : null}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}

