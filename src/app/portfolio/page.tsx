import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio — Henry Ng",
  description: "Freelance projects and client work.",
}

export default function Portfolio() {
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
      </section>
    </div>
  )
}
