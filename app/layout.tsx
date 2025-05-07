import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Suubee Portfolios',
  description: 'Expertly managed portfolios',
  icons: {
    icon: '/suubee-circle.png',
    apple: '/suubee-circle.png'
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
