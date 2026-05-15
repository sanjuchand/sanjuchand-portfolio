import type { Metadata } from 'next'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
  imageAlt: string
  body: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-agents-need-job-design-more-than-bigger-models',
    title: 'AI agents need job design more than bigger models',
    description:
      'Enterprise AI agents need clear roles, permissions, approvals, handoffs, observability, and ownership before they can responsibly take action in real workflows.',
    date: '2026-05-15',
    readingTime: '5 min read',
    imageAlt:
      'Enterprise workflow diagram showing AI agents assigned to clearly defined roles, permissions, approval gates, handoffs, observability, and human ownership.',
    body: [
      `A lot of the conversation around AI agents still starts with the model.`,
      `Which model is smarter? Which benchmark improved? Which tool can reason longer, code faster, or use more context?`,
      `Those things matter.`,
      `But in enterprise work, I think a different question is becoming more important:`,
      `What is the agent’s job?`,
      `Not its prompt. Not its demo. Not its theoretical capability. Its actual job.`,
      `What work is it responsible for? What inputs does it receive? What systems can it touch? What decisions can it make? What actions require approval? What happens when it is uncertain? Who reviews its output? Who owns the result? How do we know if it made the workflow better?`,
      `That is job design.`,
      `And most AI agent projects do not spend enough time there.`,
      `## The model is not the role`,
      `A more capable model can make an agent more useful.`,
      `But capability does not automatically create accountability.`,
      `If a human joins a company, we do not say, “This person is intelligent, so let’s give them access to everything and see what happens.”`,
      `We define a role. We decide what they own. We define permissions. We explain what good work looks like. We set escalation paths. We decide what requires review. We measure whether the role is helping the business.`,
      `AI agents need the same kind of thinking.`,
      `The fact that an agent can summarize, search, draft, classify, call tools, update systems, or trigger workflows does not mean it should do all of those things without boundaries.`,
      `The useful question is not only: “Can the agent do this?”`,
      `It is: “Should this agent be allowed to do this, in this workflow, under these conditions, with this level of oversight?”`,
      `## The missing middle: ownership, permissions, and handoffs`,
      `Many agent demos look impressive because they skip the messy middle of real work.`,
      `A demo usually shows the happy path: the input is clean, the goal is clear, the tool calls work, the output looks reasonable, and no one asks who is accountable if something goes wrong.`,
      `Production work is different.`,
      `The hard questions show up quickly:`,
      `- Who owns the agent after launch?\n- What data is it allowed to use?\n- What tools can it call?\n- What action is it allowed to take on its own?\n- Where does human approval belong?\n- How are exceptions handled?\n- What logs are reviewed?\n- When should the agent stop instead of continuing?\n- What metric proves the workflow improved?`,
      `Without those answers, the organization does not really have an agent.`,
      `It has an experiment with credentials.`,
      `That may be fine in a sandbox.`,
      `It is risky in a business process.`,
      `## Agents should have job descriptions`,
      `One practical exercise I like is writing a job description for the agent before building it.`,
      `For example:`,
      `**Agent role:** Intake assistant for support tickets`,
      `**Primary responsibility:** Read new tickets, classify intent, gather missing context, suggest routing, and draft first-response options.`,
      `**Allowed actions:**\n- read incoming ticket text\n- search approved knowledge sources\n- classify urgency and category\n- suggest routing\n- draft a response for human review`,
      `**Not allowed:**\n- close tickets automatically\n- promise refunds or credits\n- change customer account settings\n- message customers without approval\n- use unapproved knowledge sources`,
      `**Escalation rules:**\n- send billing issues to a human\n- flag legal/compliance language\n- stop if confidence is low\n- escalate if customer sentiment is severe`,
      `**Success measures:**\n- faster triage time\n- fewer misrouted tickets\n- better first-response quality\n- lower support backlog\n- no increase in compliance exceptions`,
      `That kind of clarity changes the build.`,
      `It changes the prompt. It changes the tools. It changes the permissions. It changes the approval flow. It changes the evaluation.`,
      `Most importantly, it changes the conversation from “look what the model can do” to “here is the work this agent is responsible for, and here is how we know it is doing that work safely.”`,
      `## Bigger models will not fix unclear work`,
      `If the workflow is badly defined, a better model may only make the confusion faster.`,
      `It may generate more polished outputs for a process nobody owns. It may automate steps that should have been redesigned first. It may create the appearance of progress while adding hidden review work downstream. It may expand risk because the agent has access without accountability.`,
      `This is why I think agent design needs to borrow more from operating model design, org design, and process engineering.`,
      `The model is part of the system.`,
      `But the system also includes workflow ownership, permissions, approval gates, exception paths, observability, evaluation, lifecycle management, and human accountability.`,
      `That is where trust gets built.`,
      `## The practical shift`,
      `The next phase of enterprise AI will not be won by companies that simply deploy the most agents.`,
      `It will be won by companies that know what their agents are for.`,
      `Agents with clear jobs. Agents with bounded authority. Agents with measurable outcomes. Agents with escalation paths. Agents with owners. Agents that make a workflow better instead of just making a demo look smarter.`,
      `The model still matters.`,
      `But the job design may matter more.`,
      `Because once an AI agent can take action inside a real workflow, the question is no longer just intelligence.`,
      `It is responsibility.`,
    ],
  },
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function blogPostMetadata(post: BlogPost): Metadata {
  return {
    title: `${post.title} | AgentForge`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}
