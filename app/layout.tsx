import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
// import { ThemeProvider } from 'next-themes'
import ClientThemeProvider from '@/app/provider'

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

export const metadata: Metadata = {
  title: "Sam's Portfolio",
  description: 'Modern and Awesome JS Mastery Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  )
}
