import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invest | Suubee Portfolios',
  description: "Learn how Suubee Portfolios works, who it's for, our highlights, transparent pricing, and how to get started.",
  openGraph: {
    title: 'Invest | Suubee Portfolios',
    description: 'Why choose Suubee, portfolio fit, highlights, simple costs, and FAQs.',
    url: '/invest',
    type: 'article',
  },
}

export default function InvestLayout({ children }: { children: React.ReactNode }) {
  return children
}


