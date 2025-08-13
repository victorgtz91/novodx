"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const itemH = 60;
  const linkCss = { color: "#fff", display: "flex", alignItems: "center", height: itemH, lineHeight: `${itemH}px` };
  return (
    <header
      style={{
        position: "fixed",
        top: 12,
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      <div
        className="container"
        style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr" }}
      >
        <nav
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,.18) 0%, rgba(255,255,255,.08) 45%, rgba(0,0,0,0) 70%), rgba(74,74,74,.8)",
            borderRadius: 12,
            height: itemH,
            padding: "0 32px",
            color: "#fff",
            boxShadow: "0 8px 24px rgba(0,0,0,.2)",
            gridColumn: "1 / 4",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            columnGap: 18,
          }}
        >
          <div style={{ display: "flex", gap: 16, alignItems: "center", height: itemH }}>
            <Link href="/" className="navlink" style={linkCss}>Home</Link>
            <Link href="/#why" className="navlink" style={linkCss}>Why</Link>
            <Link href="/#how" className="navlink" style={linkCss}>How</Link>
            <Link href="/#technology" className="navlink" style={linkCss}>Technology</Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: itemH }}>
            <Link href="/" aria-label="NOVODX" style={{ display: "flex", alignItems: "center", height: itemH }}>
              <Image src="/images/novodx-logo.png" alt="NOVODX" width={90} height={21} style={{ display: "block", maxWidth: 90, height: "auto" }} />
            </Link>
          </div>
          <div style={{ display: "flex", gap: 16, justifyContent: "flex-end", alignItems: "center", height: itemH }}>
            <Link href="/about" className="navlink" style={linkCss}>About</Link>
            <Link href="/technology" className="navlink" style={linkCss}>Technology</Link>
            <Link href="/team" className="navlink" style={linkCss}>Team</Link>
            <Link href="/careers" className="navlink" style={linkCss}>Careers</Link>
            <Link href="/contact" className="navlink" style={linkCss}>Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

