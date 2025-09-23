import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coming Soon | Suubee Portfolios',
  description: 'This page is coming soon. Stay tuned.',
  openGraph: {
    title: 'Coming Soon | Suubee Portfolios',
    description: 'Suubee Portfolios feature coming soon.',
    url: '/coming-soon',
    type: 'website',
  },
}

export default function ComingSoonLayout({ children }: { children: React.ReactNode }) {
  return children
}


