import './globals.css'
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'

const display = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-display' })
const sans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-sans' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' })

const description =
  'Leandro Labiano — smart contract developer and auditor. On-chain games, DeFi tooling, trading bots and AI agents.'

export const metadata = {
  metadataBase: new URL('https://www.leanlabiano.com'),
  title: 'Leandro Labiano — Smart contracts & AI agents',
  description,
  openGraph: {
    title: 'Leandro Labiano',
    description,
    url: 'https://www.leanlabiano.com',
    images: ['/og.webp'],
  },
  twitter: { card: 'summary_large_image', creator: '@leanlabiano' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
