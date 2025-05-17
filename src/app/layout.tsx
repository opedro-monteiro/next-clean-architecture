import { LoadingOverlay } from '@/components/loading/loading-overlay'
import Providers from '@/components/providers/progress-provider'
import { QueryProvider } from '@/components/providers/query-provider'
import { ReduxProvider } from '@/components/providers/redux-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ReduxProvider>
          <QueryProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              <Providers>{children}</Providers>
              <Toaster richColors />
              <LoadingOverlay />
            </ThemeProvider>
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
