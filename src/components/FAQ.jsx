import Container from "./ui/Container";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import Text from "./ui/Text";

export default function FAQ({ items = [] }) {
  return (
    <section className="section">
      <div className="container">
        <h2>Frequently asked questions</h2>
        <dl className="list" style={{ margin: 0 }}>
          {items.map((item, idx) => (
            <div key={idx}>
              <dt style={{ fontWeight: 600 }}>{item.q}</dt>
              <dd style={{ margin: 0 }}>
                <p>{item.a}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

