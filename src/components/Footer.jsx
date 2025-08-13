import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #eee", color: "#666" }}>
      <Container>
        <div style={{ padding: "16px 0", fontSize: 14 }}>© {new Date().getFullYear()} Novodx</div>
      </Container>
    </footer>
  );
}

