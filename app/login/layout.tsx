import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login | Suubee Portfolios',
  description: 'Access your Suubee Portfolios account.',
  openGraph: {
    title: 'Login | Suubee Portfolios',
    description: 'Sign in to Suubee Portfolios.',
    url: '/login',
    type: 'website',
  },
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children
}


