export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 space-y-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          Henry Ng Cheng Way
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
          Senior Front End Engineer building products at the intersection of
          design and engineering. Currently at{" "}
          <a
            href="https://rytbank.my"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
          >
            Ryt Bank
          </a>
          , Malaysia&apos;s first AI-powered digital bank.
        </p>
      </section>

      {/* Projects */}
      <section className="space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Projects
        </h2>
        <ul className="divide-y divide-border/50">
          <li>
            <a
              href="https://canyouaffordyourshit.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-3 hover:opacity-80 transition-opacity"
            >
              <div className="space-y-0.5">
                <p className="text-sm font-medium">Can You Afford Your Shit</p>
                <p className="text-xs text-muted-foreground">
                  Finance planner · Next.js · TypeScript · Tailwind
                </p>
              </div>
              <span className="text-muted-foreground text-sm group-hover:translate-x-0.5 transition-transform">
                ↗
              </span>
            </a>
          </li>
        </ul>
      </section>

      {/* Career */}
      <section className="space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Career
        </h2>
        <ul className="space-y-5">
          <li className="flex gap-8">
            <span className="text-xs text-muted-foreground w-16 shrink-0 pt-px">
              Now
            </span>
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Ryt Bank</p>
              <p className="text-xs text-muted-foreground">
                Senior Front End Engineer
              </p>
            </div>
          </li>
          <li className="flex gap-8">
            <span className="text-xs text-muted-foreground w-16 shrink-0 pt-px">
              Prev
            </span>
            <div className="space-y-0.5">
              <p className="text-sm font-medium">MoneyLion</p>
              <p className="text-xs text-muted-foreground">Software Engineer</p>
            </div>
          </li>
        </ul>
      </section>

      {/* Writing */}
      <section className="space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Writing
        </h2>
        <p className="text-sm text-muted-foreground">No posts yet.</p>
      </section>

      {/* Connect */}
      <section className="space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Connect
        </h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li>
            <a
              href="mailto:henryng0023@gmail.com"
              className="text-muted-foreground underline underline-offset-4 decoration-border hover:text-foreground hover:decoration-foreground transition-colors"
            >
              Email
            </a>
          </li>
          <li>
            {/* ponytail: placeholder handle — confirm/swap */}
            <a
              href="https://www.linkedin.com/in/henryngchengway"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground underline underline-offset-4 decoration-border hover:text-foreground hover:decoration-foreground transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            {/* ponytail: placeholder handle — confirm/swap */}
            <a
              href="https://x.com/henryngchengway"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground underline underline-offset-4 decoration-border hover:text-foreground hover:decoration-foreground transition-colors"
            >
              Twitter
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
