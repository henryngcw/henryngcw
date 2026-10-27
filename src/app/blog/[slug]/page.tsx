import type { Metadata } from "next"
import { getPost, getPosts } from "@/lib/posts"
import { SITE_URL } from "@/lib/site"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
  return (await getPosts()).map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { meta } = await getPost((await params).slug)
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/blog/${meta.slug}` },
    openGraph: {
      type: "article",
      siteName: "Henry Ng",
      title: meta.title,
      description: meta.description,
      publishedTime: meta.date,
      url: `/blog/${meta.slug}`,
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { Content, meta } = await getPost((await params).slug)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    url: `${SITE_URL}/blog/${meta.slug}`,
    author: { "@type": "Person", name: "Henry Ng Cheng Way", url: SITE_URL },
  }

  return (
    <article className="max-w-2xl mx-auto px-6 py-20 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">{meta.title}</h1>
        <time dateTime={meta.date} className="text-xs text-muted-foreground">
          {meta.date}
        </time>
      </header>
      <div className="prose prose-invert prose-neutral max-w-none">
        <Content />
      </div>
    </article>
  )
}
