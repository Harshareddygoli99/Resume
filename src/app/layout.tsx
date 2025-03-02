import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Harsha Portfolio',
  description: 'A futuristic, interactive resume website showcasing skills and experience with fluid animations and immersive UI.',
  keywords: ['resume', 'portfolio', 'interactive', 'developer', 'designer', '3D', 'animation'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="font-sans bg-dark text-light">
        {children}
      </body>
    </html>
  )
} 