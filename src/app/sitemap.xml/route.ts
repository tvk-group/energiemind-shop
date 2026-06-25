import { generateSitemapIndexXml } from "@/lib/sitemap";

export async function GET() {
  const xml = generateSitemapIndexXml();
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
