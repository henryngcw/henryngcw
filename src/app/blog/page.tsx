import Link from "next/link"
import type { Metadata } from "next"
import { getPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on engineering, product, and life.",
  alternates: { canonical: "/blog" },
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="max-w-2xl mx-auto px-6 py-20 space-y-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Writing</h1>
        <p className="text-sm text-muted-foreground">
          Thoughts on engineering, product, and life.
        </p>
      </section>

      {posts.length === 0 ? (
        <p className="text-sm text-muted-foreground">No posts yet.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block space-y-1"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-sm font-medium group-hover:text-muted-foreground transition-colors">
                    {post.title}
                  </h2>
                  <time
                    dateTime={post.date}
                    className="shrink-0 text-xs text-muted-foreground"
                  >
                    {post.date}
                  </time>
                </div>
                <p className="text-sm text-muted-foreground">
                  {post.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
