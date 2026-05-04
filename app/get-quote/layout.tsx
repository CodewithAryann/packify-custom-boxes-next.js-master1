import { Metadata } from 'next'
import { BreadcrumbListSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Get a Custom Box Quote, Free & Fast Reply | Packify',
  description: 'Send your size, style, and quantity for a custom packaging quote with all-inclusive US shipping. No design fees, no minimums on standard runs.',
  keywords: 'custom box quote, packaging quote USA, mailer box quote, rigid box quote, no minimum order, Packify Custom Boxes, free US shipping',
  alternates: { canonical: 'https://packifycustomboxes.com/get-quote/' },
  openGraph: {
    title: 'Get a Custom Box Quote, Free & Fast Reply | Packify',
    description: 'Send your size, style, and quantity for a custom packaging quote with all-inclusive US shipping. No design fees, no minimums on standard runs.',
    url: 'https://packifycustomboxes.com/get-quote/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Request a Quote - Packify Custom Boxes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get a Custom Box Quote, Free & Fast Reply | Packify',
    description: 'Send your size, style, and quantity for a custom packaging quote with all-inclusive US shipping. No design fees, no minimums on standard runs.',
    images: ['/images/og-image.jpg'],
  },
}

export default function GetQuoteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com/' },
          { name: 'Get Quote', url: 'https://packifycustomboxes.com/get-quote/' },
        ]}
      />
      {children}
    </>
  )
}
