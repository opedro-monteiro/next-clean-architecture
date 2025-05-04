import '@/app/globals.css'
import { HeaderDashboard } from '@/components/layout/header-dashboard'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'

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
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <HeaderDashboard />
            <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
              {children}
            </main>
            <Toaster richColors />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
