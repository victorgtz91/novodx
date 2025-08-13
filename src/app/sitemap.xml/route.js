const base = "https://novodx.vercel.app";
const urls = ["", "about", "technology", "team", "careers", "contact"].map((p) => `${base}/${p}`.replace(/\/$/, ""));

export async function GET() {
  const lastmod = new Date().toISOString();
  const items = urls
    .map(
      (u) =>
        `<url><loc>${u}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`
    )
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${items}</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}

