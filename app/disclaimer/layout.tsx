import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | Suubee Portfolios',
  description: 'Important disclaimers regarding information on this website.',
  openGraph: {
    title: 'Disclaimer | Suubee Portfolios',
    description: 'Read our website disclaimer and important notices.',
    url: '/disclaimer',
    type: 'website',
  },
}

export default function DisclaimerLayout({ children }: { children: React.ReactNode }) {
  return children
}


