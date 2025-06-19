import type { Metadata } from 'next'
import './globals.css'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/JsonLd'
import { PostHogProvider } from '@/components/PostHogProvider'
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
})

export const metadata: Metadata = {
  title: 'Suubee Portfolios',
  description: 'Expertly managed portfolios designed to provide exposure to market leaders',
  keywords: 'portfolio management, investments, financial services, wealth management, diversified portfolios, invest in leadership, invest in US stocks',
  authors: [{ name: 'Suubee' }],
  category: 'Finance',
  robots: 'index, follow',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://suubeeportfolios.com'),
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    title: 'Suubee Portfolios | Invest in Leadership',
    description: 'Expertly managed investment portfolios designed to provide exposure to leading stocks and themes, locally and abroad.',
    siteName: 'Suubee Portfolios',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Suubee Portfolios',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suubee Portfolios | Invest in Leadership',
    description: 'Expertly managed investment portfolios designed to provide exposure to leading stocks and themes, locally and abroad.',
    images: ['/twitter-image.jpg'],
    creator: '@suubeeportfolios',
  },
  verification: {
    google: 'google-site-verification-code',
  },
  icons: {
    icon: '/Asset 1.svg',
    apple: '/Asset 1.svg',
    shortcut: '/Asset 1.svg',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={urbanist.variable}>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="min-h-screen font-urbanist">
        <PostHogProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black">
            Skip to main content
          </a>
          <div id="main-content" role="main">
            {children}
          </div>
        </PostHogProvider>
      </body>
    </html>
  )
}
