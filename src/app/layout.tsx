import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ServiceWorkerRegistration } from '@/components/ServiceWorkerRegistration'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AsilMedia.NET - Eng so\'ngi 2026 tarjima kinolar! Barchasi HD Original kesilmagan holda!',
  description: 'O\'zbekistondagi eng birinchi super kino portal! Hoziroq tarjima kinolarni bizda tomosha qiling!',
  keywords: ['kinolar', 'onlayn ko\'rish', 'yuklab olish', 'bepul tomosha', 'seriallar', 'multfilm', 'Tarjima kinolar', 'Hind kinolar', 'HD original kesilmagan', 'Ujas kinolar', 'Jangari kinolar', 'O\'zbek tilida', 'Uzbekcha tarjima kino', 'Uzbek filmlar', '2025', '2026', 'yangi kinolar'],
  metadataBase: new URL('https://asilmedia.org'), // Upgraded production URL
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    url: '/',
    siteName: 'AsilMedia.NET',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AsilMedia.NET',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AsilMedia.NET - Eng so\'ngi 2026 tarjima kinolar!',
    description: 'O\'zbekistondagi eng birinchi super kino portal! Hoziroq tarjima kinolarni bizda tomosha qiling!',
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
        <meta name="monetag" content="268c533339d8d783ef9781fbe99d2927" />
        <script src="https://5gvci.com/act/files/tag.min.js?z=10702261" data-cfasync="false" async></script>
        <script src="https://quge5.com/88/tag.min.js" data-zone="218305" async data-cfasync="false"></script>
      </head>
      <body className="bg-background text-foreground antialiased overflow-x-hidden">
        <ServiceWorkerRegistration />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
