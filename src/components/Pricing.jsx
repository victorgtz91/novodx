import Container from "./ui/Container";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import Text from "./ui/Text";

export default function Pricing({ title, price, period, bullets = [] }) {
  return (
    <section className="section">
      <div className="container">
        {title ? <h2>{title}</h2> : null}
        <div>
          {(price || period) ? (
            <p>
              <strong>{price}</strong>
              {period ? <span className="muted"> / {period}</span> : null}
            </p>
          ) : null}
          {bullets && bullets.length > 0 ? (
            <ul className="list">
              {bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

