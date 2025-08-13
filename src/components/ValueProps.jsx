import Container from "./ui/Container";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import Text from "./ui/Text";

export default function ValueProps({ title, items = [] }) {
  return (
    <section className="section">
      <div className="container">
        {title ? <h2>{title}</h2> : null}
        <div className="list">
          {items.map((item, idx) => (
            <div key={idx}>
              <h3>{item.title}</h3>
              {item.desc ? <p>{item.desc}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

