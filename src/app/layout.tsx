import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AsilMedia - Eng so\'nggi tarjima kinolar va media portal',
  description: 'O\'zbekistondagi eng birinchi super kino portal! Eng so\'nggi tarjima kinolarni bizda tomosha qiling.',
  keywords: ['tarjima kinolar', 'asilmedia', 'kino portal', 'uzbek tilida', 'hd kinolar', 'yangi kinolar', 'seriallar'],
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    url: 'https://asilmedia.org',
    siteName: 'AsilMedia',
    title: 'AsilMedia - Eng so\'nggi tarjima kinolar va media portal',
    description: 'Eng so\'nggi tarjima kinolar va media kontentlar portali.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased selection:bg-primary/30">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
