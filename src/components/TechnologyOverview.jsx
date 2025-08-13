import Container from "./ui/Container";
import Section from "./ui/Section";
import Heading from "./ui/Heading";

export default function TechnologyOverview({ title, bullets = [] }) {
  return (
    <Section>
      <Container>
        <div style={{ display: "grid", gap: 16 }}>
          {title ? <Heading as="h2">{title}</Heading> : null}
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

