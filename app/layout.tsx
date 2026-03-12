import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { OrganizationSchema, WebSiteSchema } from '@/components/JsonLd'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PromoBanner from '@/components/PromoBanner'
import WhatsAppButton from '@/components/WhatsAppButton'
import ClubPopup from '@/components/ClubPopup'
import Script from 'next/script'
import Tawk from '@/components/Tawk'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://packifycustomboxes.com'),

  alternates: {
    canonical: '/',
  },

  title: 'Custom Packaging Boxes | Custom Boxes with Logo | Wholesale USA',
  description:
    'Custom packaging boxes for e-commerce, retail & subscription brands. Mailer, tuck, rigid boxes. No die or plate charges. Free design support. No minimum order. Free US shipping. 8–10 day turnaround. USA-based.',

  keywords:
    'custom packaging boxes, custom boxes with logo, wholesale custom boxes, custom printed boxes USA, mailer boxes, tuck boxes, rigid boxes, cosmetic boxes, CBD boxes, subscription box packaging, kraft boxes, corrugated boxes, no minimum order, free design support, Packify Custom Boxes',

  authors: [{ name: 'Custom Box USA' }],

  robots: 'index, follow',

  openGraph: {
    title: 'Custom Packaging Boxes | Custom Boxes with Logo | Wholesale USA',
    description:
      'Custom packaging boxes for e-commerce, retail & subscription brands. No die charges. Free design. No minimum order. Free US shipping. USA-based.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Packify Custom Boxes',
    url: 'https://packifycustomboxes.com',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom Packaging Boxes USA',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Custom Packaging Boxes | Wholesale USA',
    description:
      'Custom packaging boxes for e-commerce, retail & subscription brands. No die charges. Free design. No minimum order. Free US shipping.',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-white.png" />
        <link rel="icon" href="/images/Favicon.webp" />

        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="tsfU_k96qBeW0MTfbS8ER5eUy1XQ_E4OMfKFUJSelPo"
        />

        {/* GOOGLE ANALYTICS */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Q9X5E4D8X4"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q9X5E4D8X4');
          `}
        </Script>

        <OrganizationSchema />
        <WebSiteSchema />
      </head>

      <body className={inter.className}>
        <Suspense fallback={null}>
          <Header />
        </Suspense>

        <main className="min-h-screen">{children}</main>

        <Tawk />
        <Footer />
        <WhatsAppButton />

        {/* Tawk Chat Widget */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/687ff2649e6e70191a1b4f39/1j0pslmr5';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        {/* GSAP Scripts */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}