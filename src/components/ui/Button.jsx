import Link from "next/link";

export default function Button({ href = "#", label, variant = "primary" }) {
  const isPrimary = variant === "primary";
  const styles = {
    display: "inline-block",
    padding: "10px 16px",
    borderRadius: 6,
    textDecoration: "none",
    background: isPrimary ? "#111" : "transparent",
    color: isPrimary ? "#fff" : "#111",
    border: isPrimary ? "1px solid #111" : "1px solid #ccc",
  };

  return (
    <Link href={href} style={styles}>
      {label}
    </Link>
  );
}

