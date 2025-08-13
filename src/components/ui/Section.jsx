export default function Section({ id, children }) {
  return (
    <section id={id} style={{ padding: "48px 0" }}>
      {children}
    </section>
  );
}

