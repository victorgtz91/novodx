import Link from "next/link";
import Container from "./ui/Container";

export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid #eee" }}>
      <Container>
        <nav style={{ display: "flex", gap: 16, alignItems: "center", padding: "12px 0" }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/team">Team</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </Container>
    </header>
  );
}

