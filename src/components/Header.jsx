import Link from "next/link";

export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid var(--border)" }}>
      <nav className="container" style={{ display: "flex", gap: 16, padding: "14px 0" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/technology">Technology</Link>
        <Link href="/team">Team</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

