import Container from "./ui/Container";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import Text from "./ui/Text";

export default function FAQ({ items = [] }) {
  return (
    <section className="section" id="faq">
      <div className="container">
        <h2 className="reveal-base" data-reveal="">Frequently asked questions</h2>
        <div style={{ marginTop: "var(--s3)" }}>
          {items.map((it, i) => (
            <details key={i} style={{ borderTop: "1px solid var(--border)", paddingBlock: "var(--s2)" }} className="reveal-base" data-reveal="" data-delay={i}>
              <summary style={{ cursor: "pointer", fontWeight: 600 }}>{it.q}</summary>
              <p className="muted" style={{ marginTop: "var(--s2)" }}>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

