import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kiwi Cash - Sistema Universal de Pontos e Cashback',
  description: 'Plataforma para empresas criarem programas de pontos e cashback',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
