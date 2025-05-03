import '@/app/globals.css'
import { Header } from '@/components/layout/header'
import { ThemeProvider } from '@/components/theme-provider'
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
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
