import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strategy | Suubee Portfolios',
  description: 'Our rules-based, leadership-focused investment strategy.',
  openGraph: {
    title: 'Strategy | Suubee Portfolios',
    description: 'Learn how we invest: targeting market leaders with risk control.',
    url: '/strategy',
    type: 'article',
  },
}

export default function StrategyLayout({ children }: { children: React.ReactNode }) {
  return children
}


