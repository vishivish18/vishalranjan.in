import type { Metadata } from 'next'
import { Space_Grotesk, Inter, Caveat } from 'next/font/google'
import CustomCursor from '@/components/CustomCursor'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-space-grotesk',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-caveat',
})

export const metadata: Metadata = {
  title: 'Vishal Ranjan — Director of AI & Engineering',
  description: 'Generalist Engineer gone deep on AI. 12+ years building intelligent systems. Experimenting since 2010, shipping production since 2014.',
  openGraph: {
    title: 'Vishal Ranjan — Director of AI & Engineering',
    description: 'Generalist Engineer gone deep on AI. 12+ years building intelligent systems. Experimenting since 2010, shipping production since 2014.',
    url: 'https://vishalranjan.in',
    siteName: 'Vishal Ranjan',
    images: [
      {
        url: '/og-image.png',
        width: 1536,
        height: 768,
        alt: 'Vishal Ranjan — Obsessed with how things work.',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishal Ranjan — Director of AI & Engineering',
    description: 'Generalist Engineer gone deep on AI. 12+ years building intelligent systems. Experimenting since 2010, shipping production since 2014.',
    images: ['/og-image.png'],
    creator: '@vishivish18',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${caveat.variable} text-on-surface antialiased selection:bg-primary-fixed selection:text-white`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
