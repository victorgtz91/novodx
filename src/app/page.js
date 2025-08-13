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
        title="Empowering Tomorrow’s Health—Today."
        subtitle="Bring lab-grade precision to the palm of your hand. Results in minutes. Decisions in the moment. Total control of your health."
        primaryCta={{ label: "See the Future of Testing", href: "#technology" }}
        secondaryCta={{ label: "Get in Touch", href: "/contact" }}
      />

      <div id="why" />
      <ValueProps
        title="From Days to Minutes. From Labs to You."
        items={[
          { title: "Lab-Quality at Your Fingertips", desc: "Clinical-grade diagnostics without the wait or travel." },
          { title: "Instant Clarity", desc: "Fast results for confident, informed decisions." },
          { title: "One Reader, Unlimited Tests", desc: "A single device powering a rapidly expanding menu—from women’s health to infectious diseases." },
        ]}
      />

      <div id="how" />
      <HowItWorks
        steps={[
          { title: "Choose Your Test", desc: "From fertility and wellness to critical disease detection." },
          { title: "Run It Anywhere", desc: "At home, at work, or in the field—no heavy setup." },
          { title: "See Instant Results", desc: "Clear readings on-device and in your app." },
        ]}
      />

      <div id="technology" />
      <TechnologyOverview
        title="Core Technology"
        bullets={[
          "Miniaturized immunofluorescence optics (Class I device)",
          "Multi-assay capability across key use cases",
          "Connectivity for guidance, results, and programs",
        ]}
      />

      <section id="use-cases" className="section">
        <div className="container">
          <h2>Designed for Every Moment That Matters.</h2>
          <ul className="list">
            <li>At Home — Take control without unnecessary appointments.</li>
            <li>In the Field — Trusted tool for mobile clinics and rapid response.</li>
            <li>For Professionals — Precise data for clinicians, researchers, and programs.</li>
          </ul>
        </div>
      </section>

      <div id="proof" />
      <SocialProof quotes={[{ quote: "The future of decentralized diagnostics.", author: "Healthcare Advisor" }]} />

      <div id="faq" />
      <FAQ
        items={[
          { q: "Who is NOVODX for?", a: "Partners and care teams pioneering point-of-need testing." },
          { q: "When can I try it?", a: "Contact us to discuss pilots and early access." },
        ]}
      />

      <div id="cta" />
      <CTASection
        title="Your Health Journey Starts Now."
        subtitle="Join the movement—partners, clinicians, and innovators building the future of diagnostics."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </main>
  );
}
