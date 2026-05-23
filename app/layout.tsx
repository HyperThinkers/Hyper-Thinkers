import type { Metadata } from 'next'
import {
  Space_Grotesk,
  Inter,
  JetBrains_Mono,
  Orbitron,
} from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hyper Thinkers | Production Engineering Ecosystem',
  description:
    'Futuristic AI engineering ecosystem focused on production-ready systems, advanced learning, full stack engineering, and scalable architecture.',
  generator: 'Hyper Thinkers',
  keywords: [
    'AI Engineering',
    'Full Stack',
    'Production Systems',
    'DevOps',
    'Cyberpunk UI',
    'Futuristic Portfolio',
    'AI Ecosystem',
  ],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${spaceGrotesk.variable}
        ${inter.variable}
        ${jetbrainsMono.variable}
        ${orbitron.variable}
        scroll-smooth
      `}
    >
      <body className="bg-background text-foreground antialiased overflow-x-hidden font-sans">
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}