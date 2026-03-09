import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eng so\'nggi 2026 Tarjima Kinolar',
  description: 'Eng so\'nggi 2026 Tarjima Kinolar',
  keywords: ['kinolar', 'onlayn ko\'rish', 'yuklab olish', 'bepul tomosha', 'seriallar', 'multfilm'],
  metadataBase: new URL('http://localhost:3000'), // Replace with your production URL later
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    url: '/',
    siteName: 'Eng so\'nggi 2026 Tarjima Kinolar',
    images: [
      {
        url: '/og-image.jpg', // You might want to generate/add this later
        width: 1200,
        height: 630,
        alt: 'Eng so\'nggi 2026 Tarjima Kinolar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eng so\'nggi 2026 Tarjima Kinolar',
    description: 'Eng so\'nggi 2026 Tarjima Kinolar',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <head>
        <script src="https://5gvci.com/act/files/tag.min.js?z=10702261" data-cfasync="false" async></script>
      </head>
      <body className="bg-background text-foreground antialiased overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
