import type { Metadata } from 'next'
import { Space_Grotesk, Inter, Caveat } from 'next/font/google'
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
  title: 'Vishal Ranjan — AI Engineer',
  description: 'Bridging the gap between cutting-edge neural architectures and practical, human-centric software.',
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
        {children}
      </body>
    </html>
  )
}
