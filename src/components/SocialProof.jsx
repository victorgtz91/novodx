import Container from "./ui/Container";
import Section from "./ui/Section";

export default function SocialProof({ logos = [], quotes = [] }) {
  return (
    <Section>
      <Container>
        {logos.length > 0 ? (
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            {logos.map((logo, idx) => (
              <div key={idx} style={{ width: 100, height: 40, background: "#f2f2f2" }} aria-label="logo placeholder" />
            ))}
          </div>
        ) : null}
        {quotes.length > 0 ? (
          <div style={{ display: "grid", gap: 12 }}>
            {quotes.map((q, idx) => (
              <figure key={idx} style={{ margin: 0 }}>
                <blockquote style={{ margin: 0 }}>&ldquo;{q.quote}&rdquo;</blockquote>
                <figcaption style={{ color: "#666", fontSize: 14 }}>{q.author}</figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  );
}

