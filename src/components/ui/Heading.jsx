export default function Heading({ as = "h1", children }) {
  const Tag = as;
  return (
    <Tag style={{ margin: 0 }}>{children}</Tag>
  );
}

