import Container from "./ui/Container";
import Section from "./ui/Section";
import Heading from "./ui/Heading";

export default function TechnologyOverview({ title, bullets = [] }) {
  return (
    <section className="section">
      <div className="container">
        {title ? <h2>{title}</h2> : null}
        <ul className="list">
          {bullets.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

