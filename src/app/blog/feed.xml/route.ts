import { getPosts } from "@/lib/posts"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

export async function GET() {
  const items = (await getPosts())
    .map(
      (p) => `<item>
  <title>${esc(p.title)}</title>
  <link>${SITE_URL}/blog/${p.slug}</link>
  <guid>${SITE_URL}/blog/${p.slug}</guid>
  <description>${esc(p.description)}</description>
  <pubDate>${new Date(p.date).toUTCString()}</pubDate>
</item>`
    )
    .join("\n")

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>Henry Ng — Blog</title>
<link>${SITE_URL}/blog</link>
<description>Thoughts on engineering, product, and life.</description>
${items}
</channel></rss>`,
    { headers: { "Content-Type": "application/xml" } }
  )
}
