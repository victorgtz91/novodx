export function GET() {
  const body = `User-agent: *
Allow: /
Sitemap: https://novodx.vercel.app/sitemap.xml
`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}

