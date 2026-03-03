import { Metadata } from 'next'
import { BreadcrumbListSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Request a Quote | Custom Packaging Boxes USA | Packify Custom Boxes',
  description: 'Get a free custom quote for custom boxes. USA-based. No minimums. Mailer, tuck, rigid, dispenser, cosmetic boxes. Free US shipping. 10-day turnaround. Trusted by 3,000+ businesses.',
  keywords: 'custom box quote, packaging quote USA, mailer box quote, rigid box quote, no minimum order, Packify Custom Boxes, free US shipping',
  alternates: { canonical: 'https://packifycustomboxes.com/get-quote/' },
  openGraph: {
    title: 'Request a Quote | Custom Packaging Boxes USA | Packify Custom Boxes',
    description: 'Get a free custom quote for custom boxes. USA-based. No minimums. Free US shipping. 10-day turnaround.',
    url: 'https://packifycustomboxes.com/get-quote/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Request a Quote - Packify Custom Boxes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request a Quote | Custom Packaging USA | Packify Custom Boxes',
    description: 'Get a free custom quote. No minimums. Free US shipping. 10-day turnaround.',
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
