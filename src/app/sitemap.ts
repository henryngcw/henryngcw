import type { MetadataRoute } from "next"
import { getPosts } from "@/lib/posts"
import { SITE_URL } from "@/lib/site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()
  return [
    ...["", "/projects", "/blog"].map((p) => ({ url: `${SITE_URL}${p}` })),
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.date,
    })),
  ]
}
