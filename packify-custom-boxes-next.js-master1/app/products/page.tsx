import { Metadata } from 'next'
import Link from 'next/link'
import ProductGrid from '@/components/ProductGrid'
import { BreadcrumbListSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Custom Packaging Boxes | Mailer, Tuck, Rigid & More | Packify USA',
  description: 'Browse custom boxes by style: mailer boxes, tuck boxes, rigid boxes, dispenser boxes, cosmetic boxes, and more. No minimum order. Free US shipping. 8–10 day turnaround.',
  keywords: 'custom boxes, custom packaging boxes USA, mailer boxes, tuck boxes, rigid boxes, cosmetic boxes, wholesale packaging, Packify Custom Boxes',
  alternates: { canonical: 'https://packifycustomboxes.com/products/' },
  openGraph: {
    title: 'Custom Packaging Boxes | Mailer, Tuck, Rigid & More | Packify USA',
    description: 'Browse custom boxes by style. No minimum order. Free US shipping. 8–10 day turnaround.',
    url: 'https://packifycustomboxes.com/products/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Custom Packaging Boxes USA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Packaging Boxes | Packify USA',
    description: 'Mailer, tuck, rigid boxes and more. No minimums. Free US shipping.',
    images: ['/images/og-image.jpg'],
  },
}

export default function ProductsIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com/' },
          { name: 'Products', url: 'https://packifycustomboxes.com/products/' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-6 pt-[6rem] pb-12">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900 font-semibold">Custom Packaging Boxes</span>
        </nav>

        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Custom Packaging Boxes <span className="text-orange-500">USA</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mailer boxes for e-commerce. Tuck boxes for cosmetics and retail. Rigid boxes for luxury and gifts. Choose the custom box style that fits your product. No minimums. Free US shipping. 8–10 day turnaround.
          </p>
        </header>

        <ProductGrid />
      </div>
    </div>
  )
}
