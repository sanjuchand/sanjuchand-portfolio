import Link from 'next/link'
import type { Metadata } from 'next'
import { getBlogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | AgentForge',
  description: 'Practical writing on AI agents, managed workflows, and enterprise automation from AgentForge.',
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <section className="border-b border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-5xl px-6 py-10 sm:px-10 lg:px-12">
          <header className="flex items-center justify-between gap-6">
            <Link href="/" className="text-sm font-medium uppercase tracking-[0.35em] text-amber-200/80">
              AgentForge
            </Link>
            <Link href="/#contact" className="rounded-full border border-amber-200/30 px-5 py-2 text-sm font-medium text-amber-100 transition hover:border-amber-200 hover:bg-amber-200 hover:text-stone-950">
              Book a call
            </Link>
          </header>
          <div className="py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/70">Blog</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-balance sm:text-6xl">
              Notes on building AI workflows that hold up in the real world.
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-5">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-amber-200/30 hover:bg-white/[0.06]">
              <p className="text-sm text-stone-400">
                {new Date(`${post.date}T00:00:00`).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })} · {post.readingTime}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-stone-50">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-stone-400">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex text-sm font-semibold text-amber-200 hover:text-amber-100">
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
