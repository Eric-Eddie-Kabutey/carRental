import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const redHat = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-redhat'
})

export const metadata: Metadata = {
  title: 'LuxuryRentals | Premium Car Rental',
  description: 'Rent the world\'s most exclusive cars in Gambia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${redHat.className} font-sans bg-black antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
