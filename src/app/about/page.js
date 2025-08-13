import { Hero, ValueProps, SocialProof, CTASection } from "@/components";

export default function AboutPage() {
  return (
    <main>
      <Hero title="About NOVODX" subtitle="We are building accessible diagnostics for everyone." />

      <ValueProps
        title="What drives us"
        items={[
          { title: "Mission", desc: "Advance point-of-need testing with practical engineering." },
          { title: "Integrity", desc: "Evidence-led decisions and transparent communication." },
          { title: "Impact", desc: "Design for clinicians, partners and patients." },
        ]}
      />

      <section className="section">
        <div className="container">
          <h2>Our story</h2>
          <p>
            NOVODX started with a simple idea: make high-quality diagnostics available wherever
            they are needed most.
          </p>
          <p>
            Our team blends engineering, biology and product to turn complex workflows into
            reliable, portable tools.
          </p>
          <p>
            We are iterating with partners to validate the platform and expand the menu of assays.
          </p>
        </div>
      </section>

      <SocialProof quotes={[{ quote: "Focused on real-world usability.", author: "Clinical advisor" }]} />

      <CTASection title="Get in touch" subtitle="We’re forming early collaborations." ctaLabel="Contact" ctaHref="/contact" />
    </main>
  );
}
  