import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { blogPostMetadata, getBlogPost, getBlogPosts } from '@/lib/blog'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Article not found | AgentForge',
    }
  }

  return blogPostMetadata(post)
}

function renderBlock(block: string, index: number) {
  if (block.startsWith('## ')) {
    return (
      <h2 key={index} className="mt-14 text-3xl font-semibold tracking-[-0.03em] text-stone-50">
        {block.replace('## ', '')}
      </h2>
    )
  }

  if (block.includes('\n- ')) {
    const [intro, ...items] = block.split('\n- ')

    return (
      <div key={index} className="space-y-4">
        {intro && <p className="leading-8 text-stone-300" dangerouslySetInnerHTML={{ __html: intro.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />}
        <ul className="list-disc space-y-2 pl-6 leading-8 text-stone-300">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <p
      key={index}
      className="leading-8 text-stone-300"
      dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
    />
  )
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <article>
        <section className="border-b border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10 lg:px-12">
            <header className="flex items-center justify-between gap-6">
              <Link href="/" className="text-sm font-medium uppercase tracking-[0.35em] text-amber-200/80">
                AgentForge
              </Link>
              <Link href="/blog" className="text-sm font-medium text-stone-300 transition hover:text-amber-200">
                Blog
              </Link>
            </header>

            <div className="py-20">
              <p className="text-sm text-stone-400">
                {new Date(`${post.date}T00:00:00`).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })} · {post.readingTime}
              </p>
              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-balance sm:text-6xl">
                {post.title}
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-8 text-stone-300">{post.description}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16 sm:px-10 lg:px-12">
          <div className="mb-12 rounded-[2rem] border border-amber-200/20 bg-amber-200/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200/70">Article theme</p>
            <p className="mt-3 text-sm leading-6 text-stone-300">{post.imageAlt}</p>
          </div>
          <div className="space-y-6 text-lg">{post.body.map(renderBlock)}</div>

          <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200/70">Need this in your workflow?</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-stone-50">
              AgentForge designs and operates AI agents with clear roles, permissions, and approval paths.
            </h2>
            <Link href="/#contact" className="mt-6 inline-flex rounded-full bg-amber-200 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-100">
              Book a workflow call
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
