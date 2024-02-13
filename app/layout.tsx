import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist, Roboto } from 'next/font/google'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import { ClerkProvider } from '@clerk/nextjs'

const fontStore = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Old-things Store',
  description: 'Old-things Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body 
      className={"bg-slate-200"}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  )
}
