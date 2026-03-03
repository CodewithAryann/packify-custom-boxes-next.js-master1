import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BreadcrumbListSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'About Us | Custom Packaging Manufacturer USA | Packify Custom Boxes',
  description: 'Packify Custom Boxes — custom packaging manufacturer since 2018. USA-based. Mailer, tuck, rigid boxes. 3,000+ businesses trust us. No minimums. Free design support. Free US shipping.',
  keywords: 'about Packify Custom Boxes, custom box manufacturer USA, packaging company, mailer box manufacturer, Packify',
  alternates: { canonical: 'https://packifycustomboxes.com/about/' },
  openGraph: {
    title: 'About Us | Custom Packaging Manufacturer USA | Packify Custom Boxes',
    description: 'USA-based custom packaging manufacturer. 3,000+ businesses trust us. No minimums. Free US shipping.',
    url: 'https://packifycustomboxes.com/about/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Packify Custom Boxes - About Us' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Packify Custom Boxes',
    description: 'USA-based custom packaging manufacturer. 3,000+ businesses trust us.',
    images: ['/images/og-image.jpg'],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com/' },
          { name: 'About', url: 'https://packifycustomboxes.com/about/' },
        ]}
      />
      <main className="max-w-5xl mx-auto px-6 py-10 pt-[8rem] space-y-12">
        <nav className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900 font-semibold">About</span>
        </nav>

        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Your Custom Packaging <span className="text-orange-500">Partner</span>
          </h1>
          <p className="text-xl text-gray-600">
            USA-Based Custom Box Manufacturer — E-Commerce, Retail & Subscription Brands
          </p>
        </header>

        {/* Company Story & Origin */}
        <section className="bg-white rounded-2xl p-8 md:p-10 shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Packify Custom Boxes was founded in 2018 with a simple mission: make premium custom packaging accessible to brands of every size. We started after seeing too many small businesses and startups shut out by high minimums, die charges, and long lead times. Our team had years of experience in packaging manufacturing and knew there was a better way.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Today we serve over 3,000 businesses across the USA—from single-person e-commerce brands to established retailers and subscription services. We operate with a USA-based team and global production partners to deliver quality custom boxes without the traditional barriers. No minimums, no die or plate fees, and free design support. That philosophy hasn&apos;t changed since day one.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Packify Custom Boxes is a USA-based custom packaging manufacturer. We produce custom boxes with logo — mailer boxes, tuck boxes, rigid boxes, dispenser boxes, cosmetic boxes, and more — for e-commerce, retail, subscription, and D2C brands. Trusted by over 3,000 businesses across the USA.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From kraft mailers to luxury rigid gift boxes, we help you choose the right material, style, and print finish. Full-color CMYK printing, foil stamping, embossing, and custom sizing. No die or plate charges. Free design assistance.
            </p>
          </div>
          <div className="relative w-full h-[18rem] md:h-[26rem] overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/WhatsApp Image 2025-08-05 at 11.11.00 PM.webp"
              alt="Custom packaging boxes from Packify Custom Boxes"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">✓</span>
              Custom printed boxes — logo, branding, full-color
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">✓</span>
              Kraft, corrugated, paperboard — recyclable materials
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">✓</span>
              No minimums — order from 1 unit
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">✓</span>
              Free U.S. shipping · 8–10 day production · worldwide delivery
            </li>
          </ul>
        </section>

        {/* Team & Credibility */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our team includes packaging specialists, print production experts, and customer success managers with decades of combined experience. We focus on expertise—helping you choose the right box style, material, and finish for your product and budget.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every quote is reviewed by our production team. Our design support helps with artwork, bleed, and print specs so your files are ready before we run them. That attention to detail reduces errors and keeps projects on track.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quality & Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We work with certified suppliers and use materials that meet industry standards. Our packaging is suitable for food-grade applications where required, and we offer eco-friendly options including kraft, recycled content, and recyclable materials.
            </p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✓</span> Recyclable and sustainably sourced options
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✓</span> Food-safe materials for edible products
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✓</span> Production quality control at every stage
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="font-bold text-orange-600 mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">We deliver packaging that protects your product and reflects your brand. Every box is built to meet your specifications.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="font-bold text-orange-600 mb-2">No Hidden Fees</h3>
              <p className="text-gray-600 text-sm">No die or plate charges. Free design support. What you quote is what you pay.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="font-bold text-orange-600 mb-2">Fast Turnaround</h3>
              <p className="text-gray-600 text-sm">8–10 business days production. Free US shipping. Rush options available.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-orange-600 transition"
          >
            Request a Custom Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </section>
      </main>
    </div>
  )
}
