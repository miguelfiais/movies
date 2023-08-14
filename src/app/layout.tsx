import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dev Movies',
  description: 'Informações sobre filmes, séries e artistas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-gray-900`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
