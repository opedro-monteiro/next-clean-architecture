import '@/app/globals.css'
import { Header } from '@/components/layout/header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NextJS with clean architecture',
  description: 'A simple NextJS app with clean architecture',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
