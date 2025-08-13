import Link from "next/link";

export default function Button({ href = "#", label = "", variant = "primary" }) {
  const cls = variant === "secondary" ? "btn btn-secondary" : "btn btn-primary";
  return (
    <Link href={href} className={cls}>
      {label}
    </Link>
  );
}

