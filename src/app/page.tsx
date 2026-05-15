const services = [
  {
    title: 'Workflow discovery',
    description:
      'Map the messy handoffs, approvals, tools, and edge cases that slow down high-value work.',
  },
  {
    title: 'Agentic implementation',
    description:
      'Build managed AI workflows with clear roles, durable memory, human approvals, and operational guardrails.',
  },
  {
    title: 'Ongoing operations',
    description:
      'Monitor runs, tune prompts, improve automations, and keep the system aligned as the business changes.',
  },
]

const workflowExamples = [
  'Inbox triage and customer follow-up',
  'Internal research and briefing agents',
  'Proposal, RFP, and document workflows',
  'Operations checklists with human approvals',
  'Knowledge base and support automation',
  'Executive reporting and daily summaries',
]

const principles = [
  'Start with one painful workflow, not a vague AI strategy.',
  'Keep humans in the loop where judgment, trust, or risk matters.',
  'Design for reliability, visibility, and ownership from day one.',
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-stone-950 text-stone-100">
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-amber-200/80">
                AgentForge
              </p>
              <p className="mt-1 text-sm text-stone-400">by Sanju Chand</p>
            </div>
            <nav className="flex items-center gap-4">
              <a href="/blog" className="text-sm font-medium text-stone-300 transition hover:text-amber-200">
                Blog
              </a>
              <a
                href="#contact"
                className="rounded-full border border-amber-200/30 px-5 py-2 text-sm font-medium text-amber-100 transition hover:border-amber-200 hover:bg-amber-200 hover:text-stone-950"
              >
                Book a call
              </a>
            </nav>
          </header>

          <div className="grid flex-1 items-center gap-16 py-24 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-300 backdrop-blur">
                Managed AI workflow implementations
              </p>
              <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-balance sm:text-6xl lg:text-7xl">
                Turn operational drag into reliable agent-powered workflows.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
                AgentForge helps teams identify, build, and operate custom AI workflows that move real work across people, tools, and decisions — without leaving the business to babysit brittle demos.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-amber-200 px-7 py-3 text-center text-sm font-semibold text-stone-950 transition hover:bg-amber-100"
                >
                  Book a workflow call
                </a>
                <a
                  href="#approach"
                  className="rounded-full border border-white/15 px-7 py-3 text-center text-sm font-semibold text-stone-100 transition hover:border-white/35 hover:bg-white/5"
                >
                  See the approach
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="rounded-[1.5rem] border border-amber-200/15 bg-stone-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-200/70">Implementation loop</p>
                <div className="mt-8 space-y-5">
                  {['Discover workflow', 'Design agent roles', 'Build guarded automation', 'Operate and improve'].map((step, index) => (
                    <div key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-200 text-sm font-bold text-stone-950">
                        {index + 1}
                      </span>
                      <span className="text-stone-200">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/70">What we build</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
            AI systems that do work, not just answer questions.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-xl font-semibold text-stone-50">{service.title}</h3>
              <p className="mt-4 leading-7 text-stone-400">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/70">Use cases</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
              Start where the business already feels the friction.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {workflowExamples.map((example) => (
              <div key={example} className="rounded-2xl border border-white/10 bg-stone-950/50 p-5 text-stone-200">
                {example}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/70">Why AgentForge</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
              Founder-led implementation for teams that need judgment, not hype.
            </h2>
          </div>
          <div className="space-y-4">
            {principles.map((principle) => (
              <div key={principle} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-lg leading-8 text-stone-300">
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/70">Latest thinking</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
              Practical notes on agent-powered work.
            </h2>
          </div>
          <article className="rounded-3xl border border-white/10 bg-stone-950/50 p-7">
            <p className="text-sm text-stone-400">May 15, 2026 · 5 min read</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-stone-50">
              <a href="/blog/ai-agents-need-job-design-more-than-bigger-models">AI agents need job design more than bigger models</a>
            </h3>
            <p className="mt-4 max-w-3xl leading-7 text-stone-400">
              Enterprise AI agents need clear roles, permissions, approvals, handoffs, observability, and ownership before they can responsibly take action in real workflows.
            </p>
            <a href="/blog/ai-agents-need-job-design-more-than-bigger-models" className="mt-6 inline-flex text-sm font-semibold text-amber-200 hover:text-amber-100">
              Read article →
            </a>
          </article>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-amber-200/20 bg-amber-200 p-8 text-stone-950 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-700">Book a call</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
            Let’s find the first workflow worth forging.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-800">
            Share the workflow that feels slow, expensive, or hard to keep consistent. We’ll use that as the starting point for a focused implementation conversation.
          </p>
          <form className="mt-8 grid gap-4" action="mailto:photoniczia@gmail.com" method="post" encType="text/plain">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-2xl border border-stone-950/10 bg-white/80 px-5 py-4 outline-none placeholder:text-stone-500 focus:border-stone-950" name="name" placeholder="Name" />
              <input className="rounded-2xl border border-stone-950/10 bg-white/80 px-5 py-4 outline-none placeholder:text-stone-500 focus:border-stone-950" name="email" type="email" placeholder="Email" />
            </div>
            <textarea className="min-h-36 rounded-2xl border border-stone-950/10 bg-white/80 px-5 py-4 outline-none placeholder:text-stone-500 focus:border-stone-950" name="workflow" placeholder="What workflow should AI help you run better?" />
            <button className="rounded-full bg-stone-950 px-7 py-4 text-sm font-semibold text-amber-100 transition hover:bg-stone-800" type="submit">
              Send inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
