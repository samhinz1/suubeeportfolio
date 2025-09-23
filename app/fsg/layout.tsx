import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial Services Guide | Suubee Portfolios',
  description: 'Important information about our financial services and operations.',
  openGraph: {
    title: 'Financial Services Guide | Suubee Portfolios',
    description: 'Read our Financial Services Guide (FSG).',
    url: '/fsg',
    type: 'article',
  },
}

export default function FSGLayout({ children }: { children: React.ReactNode }) {
  return children
}


