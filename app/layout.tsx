import React from "react"
import type { Metadata, Viewport } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'RASHQ - Luxury Fashion',
  description: 'Discover RASHQ, a premium Middle Eastern luxury fashion brand blending elegance, culture, and modern couture.',
  generator: 'v0.app',
  openGraph: {
    title: 'RASHQ - Luxury Fashion',
    description: 'Premium Middle Eastern luxury fashion brand',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a3d2a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
