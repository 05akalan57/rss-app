import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'

import '@/styles/globals.css'

import cn from '@/lib/cn'

export const metadata: Metadata = {
  title: 'RSS App',
  description: 'RSS App',
  manifest: '/manifest.json',
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000')
}

export const viewport: Viewport = {
  themeColor: '#fff'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable)}>
      <body>
        <main className="mx-auto max-w-screen-sm px-4 py-8">{children}</main>
      </body>
    </html>
  )
}
