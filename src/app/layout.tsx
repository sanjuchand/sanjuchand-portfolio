import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'AgentForge by Sanju Chand | Managed AI Workflow Implementations',
  description:
    'AgentForge builds and operates managed AI workflow implementations for teams that want reliable agent-powered systems, not brittle demos.',
  keywords: [
    'Managed AI workflow implementations',
    'AgentForge',
    'AI automation',
    'Agentic workflows',
    'Sanju Chand',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
