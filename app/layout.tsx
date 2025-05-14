import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Suubee Portfolios',
  description: 'Expertly managed portfolios',
  icons: {
    icon: process.env.NODE_ENV === 'production' ? '/suubeeportfolio/Asset 1.svg' : '/Asset 1.svg',
    apple: process.env.NODE_ENV === 'production' ? '/suubeeportfolio/Asset 1.svg' : '/Asset 1.svg'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
