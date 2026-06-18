import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog — Henry Ng",
  description: "Thoughts on engineering, product, and life.",
}

export default function BlogPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 space-y-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Writing</h1>
        <p className="text-sm text-muted-foreground">
          Thoughts on engineering, product, and life.
        </p>
      </section>

      <p className="text-sm text-muted-foreground">No posts yet.</p>
    </div>
  )
}
