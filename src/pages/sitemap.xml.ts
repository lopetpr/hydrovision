import type { APIRoute } from "astro";

const siteUrl = "https://hydrovision.cc";

const pages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/servicios", priority: "0.9", changefreq: "monthly" },
  { url: "/productos", priority: "0.9", changefreq: "monthly" },
  { url: "/nosotros", priority: "0.7", changefreq: "monthly" },
  { url: "/contactanos", priority: "0.8", changefreq: "monthly" },
];

const lastmod = new Date().toISOString().split("T")[0];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ url, priority, changefreq }) => `  <url>
    <loc>${siteUrl}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
