import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Suubee Portfolios',
  description: 'Meet the Suubee Portfolios team and our mission.',
  openGraph: {
    title: 'About | Suubee Portfolios',
    description: 'Learn about the Suubee Portfolios team and what we do.',
    url: '/about',
    type: 'website',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}


