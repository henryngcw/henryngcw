import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Portfolio — Henry Ng",
  description: "Freelance projects and client work.",
}

// Live star count, revalidated hourly. Falls back to null on any error.
async function getStars(repo: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    return (await res.json()).stargazers_count ?? null
  } catch {
    return null
  }
}

export default async function Portfolio() {
  const stars = await getStars("henryngcw/claude-usage-menubar")
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 space-y-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
      {/* Intro */}
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">Portfolio</h1>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
          Selected freelance and client work.
        </p>
      </section>

      {/* Projects */}
      <section className="space-y-8">
        {/* Plus Vibes */}
        <article className="space-y-4">
          <header className="space-y-0.5">
            <h2 className="text-sm font-medium">Plus Vibes</h2>
            <p className="text-xs text-muted-foreground">
              Mental-health counselling platform · Hono.js · React Native ·
              TypeScript
            </p>
          </header>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Migrating a legacy Ruby on Rails backend to a modern Hono.js +
            TypeScript stack, and building the products on top of it —
            connecting people who need support with volunteer and professional
            counsellors:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-8">
              <span className="text-xs text-muted-foreground w-24 shrink-0 pt-px">
                Internal admin
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Web dashboard for Plus Vibes staff, operators, and stakeholders
                — full CRUD over client data.
              </p>
            </li>
            <li className="flex gap-8">
              <span className="text-xs text-muted-foreground w-24 shrink-0 pt-px">
                External admin
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Client-facing web admin where Plus Vibes&apos; customers view
                their company&apos;s analytics.
              </p>
            </li>
            <li className="flex gap-8">
              <span className="text-xs text-muted-foreground w-24 shrink-0 pt-px">
                User app
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                React Native app where users reach counsellors — volunteers with
                counselling experience, plus professional specialists for those
                facing depression or suicidal thoughts.
              </p>
            </li>
            <li className="flex gap-8">
              <span className="text-xs text-muted-foreground w-24 shrink-0 pt-px">
                Counsellor app
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                React Native app where volunteer and professional counsellors
                connect with and support the users who reach out.
              </p>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground leading-relaxed">
            At the core of both apps is a real-time chat that pairs a user with
            a counsellor in a session. Access runs on subscription tiers — a
            free tier with limited sessions up to paid tiers with more —
            alongside supporting content like motivational videos and
            specialist-designed questionnaires that let users self-assess their
            mental wellbeing.
          </p>
        </article>

        {/* Claude Usage Menu Bar */}
        <article className="space-y-4">
          <header className="flex items-baseline justify-between gap-4">
            <div className="space-y-0.5">
              <h2 className="text-sm font-medium">Claude Usage Menu Bar</h2>
              <p className="text-xs text-muted-foreground">
                macOS menu bar · SwiftBar · Shell
              </p>
            </div>
            <a
              href="https://github.com/henryngcw/claude-usage-menubar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              GitHub ↗{stars !== null && ` · ★ ${stars}`}
            </a>
          </header>
          <Image
            src="/claude-usage-menubar.png"
            alt="Claude Code usage shown in the macOS menu bar"
            width={1550}
            height={62}
            className="w-full h-auto rounded-md border border-border/50"
          />
          <p className="text-sm text-muted-foreground leading-relaxed">
            A SwiftBar plugin that shows live Claude Code subscription usage in
            the macOS menu bar — the same numbers <code>/usage</code> reports,
            pulled from the OAuth usage endpoint. The bar shows the current
            5-hour window usage and next reset time; the dropdown adds the
            weekly window. The access token is read straight from the macOS
            keychain, with graceful fallbacks when usage data can&apos;t be
            fetched.
          </p>
        </article>
      </section>
    </div>
  )
}
