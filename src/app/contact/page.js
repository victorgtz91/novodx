"use client";

import { Hero, FAQ } from "@/components";

export default function ContactPage() {
  return (
    <main>
      <Hero title="Contact" subtitle="We’d love to hear from potential partners and collaborators." />

      <section className="section">
        <div className="container">
          <h2>Reach us</h2>
          <p>
            For general inquiries and partnerships, email
            {" "}
            <a href="mailto:hello@novodx.com">hello@novodx.com</a>.
          </p>
        </div>
      </section>

      <FAQ
        items={[
          { q: "Do you offer pilot programs?", a: "Yes — contact us to discuss scope and timelines." },
          { q: "Who can partner with NOVODX?", a: "Healthcare teams, research groups and solution providers." },
        ]}
      />
    </main>
  );
}
  