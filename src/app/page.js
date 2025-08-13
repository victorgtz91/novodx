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
        title="Transforming diagnostics for everyone"
        subtitle="Bring lab-grade precision to the palm of your hand. Results in minutes. Decisions in the moment. Total control of your health."
        primaryCta={{ label: "Explore Our Technology", href: "/technology" }}
        secondaryCta={{ label: "Get in Touch", href: "/contact" }}
        backgroundImage="/hero-girl-goldn.jpg"
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
            <li>At-home — Take control without unnecessary appointments.</li>
            <li>Field Programs — Trusted tool for mobile clinics and rapid response.</li>
            <li>Clinics & Research — Precise data for clinicians, researchers, and programs.</li>
          </ul>
        </div>
      </section>

      <div id="proof" />
      <SocialProof quotes={[{ quote: "The future of decentralized diagnostics.", author: "Healthcare Advisor" }]} />

      <div id="faq" />
      <FAQ
        items={[
          { q: "Can the reader be used more than once? And cassettes?", a: "Reader can be used up to 1500 times. Each cassette can only be used once." },
          { q: "Do I need an internet connection?", a: "No, you only need a phone with Bluetooth." },
          { q: "Can more than one person use a single device?", a: "Yes, you can use one single device to test your entire household." },
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
