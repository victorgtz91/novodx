"use client";

import { Hero, CTASection } from "@/components";

export default function TeamPage() {
  return (
    <main>
      <Hero title="Our Team" subtitle="A multidisciplinary group building practical diagnostics." />

      <section className="section">
        <div className="container">
          <h2>Team</h2>
          <div className="grid-2">
            <div>
              <h3>First Last</h3>
              <p className="muted">Role</p>
            </div>
            <div>
              <h3>First Last</h3>
              <p className="muted">Role</p>
            </div>
            <div>
              <h3>First Last</h3>
              <p className="muted">Role</p>
            </div>
            <div>
              <h3>First Last</h3>
              <p className="muted">Role</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Careers" subtitle="We’re assembling a small, focused team." ctaLabel="Open roles" ctaHref="/careers" />
    </main>
  );
}
  