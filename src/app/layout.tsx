import Link from "next/link"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Henry Ng",
  description: "Senior Front End Engineer based in Malaysia.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="min-h-dvh flex flex-col bg-background text-foreground">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
          <nav className="max-w-2xl mx-auto px-6 h-12 flex items-center justify-between">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-muted-foreground"
            >
              Henry Ng
            </Link>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>
          </nav>
        </header>

        <main className="flex-1 pt-12">{children}</main>

        <footer className="border-t border-border/50">
          <div className="max-w-2xl mx-auto px-6 py-6 text-xs text-muted-foreground">
            © 2026 Henry Ng Cheng Way
          </div>
        </footer>
      </body>
    </html>
  )
}
