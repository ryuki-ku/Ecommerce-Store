import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist, Roboto } from 'next/font/google'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'

const fontStore = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HomePage Store',
  description: 'HomePage Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
      className={fontStore.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
