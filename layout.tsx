import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Free QR Code Generator & Scanner – Create, Scan, Copy',
  description: 'Create, scan, and copy QR codes instantly with our free online QR Code Generator & Scanner. Customize designs and download high-quality codes.',
  generator: '',
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
