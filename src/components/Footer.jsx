export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "16px 0" }}>
      <div className="container small center">© {new Date().getFullYear()} NOVODX — All rights reserved.</div>
    </footer>
  );
}

