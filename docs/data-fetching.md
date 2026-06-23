# Data fetching: do we need a client-state library (TanStack Query) in Next.js?

**Decision for this repo: No.** Fetch in Server Components. We removed TanStack
Query after trialing it for the GitHub-stars feature. This doc records why, so we
don't re-litigate it every time we add a project card.

## The actual question

Next.js App Router has two places to fetch:

- **Server Components** (default) — run on the server, can `await fetch(...)`
  directly, ship **zero JS** for the fetch, and the result is baked into the
  prerendered HTML. Caching/freshness is controlled by `fetch(..., { next: {
revalidate: N } })`.
- **Client Components** (`"use client"`) — run in the browser. To fetch here you
  need either `useEffect` + state (manual) or a library like TanStack Query / SWR
  that handles caching, loading/error states, refetching, etc.

TanStack Query is a **client** library. Using it means opting _out_ of the server
fetch and back into browser-side fetching — plus a `QueryClientProvider` wrapping
the app and ~12kb of JS shipped to every visitor.

## What each is actually good at

| Need                                                                           | Server Component                         | TanStack Query             |
| ------------------------------------------------------------------------------ | ---------------------------------------- | -------------------------- |
| Display data known at request/build time (stars, blog posts, repo info)        | ✅ ideal                                 | overkill                   |
| Zero client JS, content in the HTML, good SEO                                  | ✅                                       | ❌ fetches after hydration |
| Revalidate every N seconds / on-demand                                         | ✅ `next.revalidate`, `revalidateTag`    | n/a (different model)      |
| Data that changes from **user interaction** (filters, search, infinite scroll) | ❌ needs a round-trip per change         | ✅ this is its job         |
| Refetch on window focus / interval polling / live dashboards                   | ❌                                       | ✅                         |
| Mutations with optimistic updates, retry, rollback                             | ❌ (use Server Actions for simple cases) | ✅                         |
| Cache shared across many client components, dedup in-flight requests           | ❌                                       | ✅                         |

Rule of thumb: **Server Components for _render-time_ data, TanStack Query for
_interaction-time_ data.** If a human clicking something is what triggers the
next fetch, a client library earns its place. If the data is just "what's true
when the page renders," the server already has it.

## Industry standard (App Router era)

- Pre-App-Router (Pages Router / SPA), a client fetching library was nearly
  mandatory — `getServerSideProps` was clunky and most fetching happened in the
  browser. TanStack Query / SWR were the default and remain extremely popular.
- With RSC + Server Components, the official Next.js guidance is **fetch on the
  server by default**; reach for a client library only for the interaction-driven
  cases above. The React and Next teams explicitly position RSC as removing the
  need for a client cache for most _initial_ data.
- So both are "standard" — but for **different layers**. A modern App Router app
  commonly has **no** client fetching library at all if it's mostly server-rendered
  content. Apps with rich client interactivity (dashboards, feeds, editors) still
  pull in TanStack Query, often alongside server fetching, not instead of it.
- SWR vs TanStack Query: both fine. TanStack Query is more featureful (mutations,
  devtools, infinite queries); SWR is lighter and Vercel-made. Neither belongs in
  a portfolio that just displays data.

## This portfolio specifically

The pages are static content — project descriptions, a GitHub star count, blog
posts. None of it changes from user interaction; it only needs to be reasonably
fresh. That's the exact sweet spot for a Server Component fetch with hourly
revalidation:

```tsx
// src/app/portfolio/page.tsx
async function getStars(repo: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: 3600 }, // cached, refreshed hourly, zero client JS
    })
    if (!res.ok) return null
    return (await res.json()).stargazers_count ?? null
  } catch {
    return null
  }
}

export default async function Portfolio() {
  const stars = await getStars("henryngcw/claude-usage-menubar")
  // ...render. Count is in the HTML — no flicker, no provider, no extra bundle.
}
```

The TanStack version did the same thing but worse here: the star count flickered
in after hydration, shipped a provider + library to every page, and added two
files.

## When we _would_ add TanStack Query later

Add it the day this site grows a genuinely interactive, data-driven surface — e.g.
a searchable/filterable project list that queries an API as you type, a live
"current Claude usage" widget that polls, infinite-scroll content, or
authenticated mutations with optimistic UI. At that point, install it, add the
provider, and use it **only** for those client components — keep the static stuff
on the server.

Until then: server fetch. No library.
