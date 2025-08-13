import Container from "./ui/Container";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import Text from "./ui/Text";

export default function ValueProps({ title, items = [] }) {
  return (
    <section className="section">
      <div className="container">
        {title ? <h2 className="reveal-base" data-reveal="">{title}</h2> : null}
        <div className="grid grid-cols-1 grid-cols-2 grid-cols-3" style={{ marginTop: "var(--s3)" }}>
          {items.map((item, idx) => (
            <div key={idx} className="card reveal-base" data-reveal="" data-delay={idx} tabIndex={0} style={{ outline: "none" }}>
              <h3 style={{ marginBottom: "6px" }}>{item.title}</h3>
              {item.desc ? <p className="muted">{item.desc}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

