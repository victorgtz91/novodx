import {
  Hero,
  ValueProps,
  HowItWorks,
  TechnologyOverview,
  Pricing,
  SocialProof,
  FAQ,
  CTASection,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero
        title="NOVODX — Diagnostics reimagined"
        subtitle="Miniaturized immunofluorescence for home and field."
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "Learn the tech", href: "/technology" }}
      />

      <ValueProps
        title="Why NOVODX"
        items={[
          { title: "Precision", desc: "Lab-grade immunofluorescence in a handheld device." },
          { title: "Speed", desc: "Actionable results in minutes." },
          { title: "Platform", desc: "One reader, many assays." },
        ]}
      />

      <HowItWorks
        steps={[
          { title: "Collect", desc: "Sample with a simple cartridge." },
          { title: "Read", desc: "Insert into the reader; automatic analysis." },
          { title: "Act", desc: "Clear, quantitative results." },
        ]}
      />

      <TechnologyOverview
        title="Technology overview"
        bullets={[
          "Fluorescent immunoassay optics",
          "On-device calibration",
          "Connectivity ready",
        ]}
      />

      <Pricing
        title="Early access"
        price="By invitation"
        period=""
        bullets={[
          "Pilot programs",
          "Developer documentation",
          "Priority support",
        ]}
      />

      <SocialProof
        quotes={[
          { quote: "The future of decentralized diagnostics.", author: "Advisor, MD PhD" },
        ]}
      />

      <FAQ
        items={[
          { q: "Who is NOVODX for?", a: "Healthcare teams and partners pioneering point-of-need testing." },
          { q: "When can I try it?", a: "Join our early access list via the contact page." },
        ]}
      />

      <CTASection
        title="Build with us"
        subtitle="Partners, clinicians and innovators — let’s accelerate access."
        ctaLabel="Contact us"
        ctaHref="/contact"
      />
    </main>
  );
}
