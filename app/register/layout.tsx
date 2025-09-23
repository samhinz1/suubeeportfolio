import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register | Suubee Portfolios',
  description: 'Create your Suubee Portfolios account in minutes.',
  openGraph: {
    title: 'Register | Suubee Portfolios',
    description: 'Get started with Suubee Portfolios.',
    url: '/register',
    type: 'website',
  },
}

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children
}


