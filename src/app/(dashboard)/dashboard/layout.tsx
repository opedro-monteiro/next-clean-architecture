import '@/app/globals.css'
import { HeaderDashboard } from '@/components/layout/header-dashboard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NextJS Dashboard',
  description: 'A dashboard for the NextJS app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <HeaderDashboard />
      <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        {children}
      </main>
    </>
  )
}
