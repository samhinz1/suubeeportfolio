import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Suubee Portfolios',
  description: 'Terms governing the use of Suubee Portfolios.',
  openGraph: {
    title: 'Terms of Service | Suubee Portfolios',
    description: 'Review the Suubee Portfolios Terms of Service.',
    url: '/tos',
    type: 'article',
  },
}

export default function TOSLayout({ children }: { children: React.ReactNode }) {
  return children
}


