import Container from "./ui/Container";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import Text from "./ui/Text";

export default function HowItWorks({ steps = [] }) {
  return (
    <section className="section">
      <div className="container">
        <h2>How it works</h2>
        <ol className="list">
          {steps.map((step, idx) => (
            <li key={idx}>
              <h3>{step.title}</h3>
              {step.desc ? <p>{step.desc}</p> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

