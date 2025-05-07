import { LoadingOverlay } from '@/components/loading/loading-overlay'
import { QueryProvider } from '@/components/providers/query-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
              {children}
            </main>
            <Toaster richColors />
            <LoadingOverlay />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
