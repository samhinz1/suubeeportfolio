import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Suubee Portfolios',
  description: 'Get in touch with Suubee Portfolios. We are here to help.',
  openGraph: {
    title: 'Contact | Suubee Portfolios',
    description: 'Contact Suubee Portfolios for questions and support.',
    url: '/contact',
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}


