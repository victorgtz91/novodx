"use client";

import { Hero, TechnologyOverview, HowItWorks, FAQ, CTASection } from "@/components";

export default function TechnologyPage() {
  return (
    <main>
      <Hero title="Technology" subtitle="A compact platform for quantitative immunofluorescence." />

      <TechnologyOverview
        title="Overview"
        bullets={["Optical readout", "On-device calibration", "Cartridge-based assays", "Portable form factor"]}
      />

      <HowItWorks
        steps={[
          { title: "Prepare", desc: "Load the sample into a simple cartridge." },
          { title: "Measure", desc: "Reader performs the analysis and normalization." },
          { title: "Report", desc: "Results shown clearly and consistently." },
        ]}
      />

      <FAQ
        items={[
          { q: "Is this for professional use?", a: "We are validating for point-of-need workflows with partners." },
          { q: "Can it connect to systems?", a: "Yes, the platform is designed to support connectivity." },
          { q: "What’s next?", a: "Expanding assays and pilot programs." },
        ]}
      />

      <CTASection title="Learn more" subtitle="Explore collaborations and pilots." ctaLabel="Contact" ctaHref="/contact" />
    </main>
  );
}
  