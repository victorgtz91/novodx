"use client";

import { Hero, ValueProps, CTASection } from "@/components";

export default function CareersPage() {
  return (
    <main>
      <Hero title="Careers" subtitle="Join a small team solving meaningful problems in diagnostics." />

      <ValueProps
        title="Why join"
        items={[
          { title: "Ownership", desc: "End-to-end responsibility over impactful work." },
          { title: "Learning", desc: "Work across engineering, science and product." },
          { title: "Mission", desc: "Contribute to accessible healthcare technology." },
        ]}
      />

      <section className="section">
        <div className="container">
          <h2>How we work</h2>
          <p>
            We value clarity, iteration and close collaboration with partners. We keep teams small
            to move quickly and focus on outcomes.
          </p>
        </div>
      </section>

      <CTASection title="Contact us" subtitle="Reach out to explore roles and projects." ctaLabel="Get in touch" ctaHref="/contact" />
    </main>
  );
}
  