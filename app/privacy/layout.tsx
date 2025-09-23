import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Suubee Portfolios',
  description: 'How Suubee Portfolios collects and handles your data.',
  openGraph: {
    title: 'Privacy Policy | Suubee Portfolios',
    description: 'Read the Suubee Portfolios Privacy Policy.',
    url: '/privacy',
    type: 'article',
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}


