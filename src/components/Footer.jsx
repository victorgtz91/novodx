export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "16px 0" }}>
      <div className="container small center">© {new Date().getFullYear()} NOVODX — All rights reserved.</div>
      <div className="container small center" style={{ marginTop: 8 }}>
        For investigational use only. The GoldN Companion reader has not been approved by the FDA yet.
      </div>
    </footer>
  );
}

