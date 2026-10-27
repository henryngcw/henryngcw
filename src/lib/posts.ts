import fs from "node:fs"
import path from "node:path"

export type PostMeta = { title: string; description: string; date: string }
export type Post = PostMeta & { slug: string }

const DIR = path.join(process.cwd(), "src/content/blog")

export async function getPost(slug: string) {
  const mod = await import(`@/content/blog/${slug}.mdx`)
  return { Content: mod.default, meta: { ...(mod.metadata as PostMeta), slug } }
}

export async function getPosts(): Promise<Post[]> {
  const slugs = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
  const posts = await Promise.all(
    slugs.map(async (s) => (await getPost(s)).meta)
  )
  return posts.sort((a, b) => b.date.localeCompare(a.date))
}
