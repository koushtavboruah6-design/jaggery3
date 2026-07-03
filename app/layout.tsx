import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const bebas = Bebas_Neue({
  variable: '--font-bebas',
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Jaggery — Hospitality Consultancy',
  description:
    'Jaggery Hospitality Consultancy helps hotels, restaurants, cafés, and food businesses launch, optimize, and grow with hands-on operational support.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf8f5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${bebas.variable} bg-background`}
      style={{ colorScheme: 'light' }}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
