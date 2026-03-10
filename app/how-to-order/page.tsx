import { Metadata } from 'next'
import Link from 'next/link'
import { HowToSchema, BreadcrumbListSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'How to Order Custom Boxes | Step-by-Step Guide | Packify USA',
  description: 'Order custom boxes in 5 steps: request quote, approve pricing, submit artwork, approve proof, receive delivery. Free US shipping. No minimums. 10-day turnaround.',
  keywords: 'how to order custom boxes USA, custom packaging order process, request quote, submit artwork, Packify Custom Boxes',
  alternates: { canonical: 'https://packifycustomboxes.com/how-to-order/' },
  openGraph: {
    title: 'How to Order Custom Boxes | Step-by-Step Guide | Packify USA',
    description: 'Order custom boxes in 5 steps: request quote, approve pricing, submit artwork, approve proof. Free US shipping. No minimums.',
    url: 'https://packifycustomboxes.com/how-to-order/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'How to Order Custom Boxes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Order Custom Boxes | Packify USA',
    description: '5 steps: request quote, approve pricing, submit artwork, approve proof. Free US shipping. No minimums.',
    images: ['/images/og-image.jpg'],
  },
}

const steps = [
  {
    number: 1,
    title: 'Request a Quote',
    description: 'Fill out our Quote Request Form with your box specifications, including size, material, quantity, printing type, and any custom features. Our team will get back to you within 24 hours with a detailed quote.',
    link: '/get-quote',
    linkText: 'Get a Quote',
  },
  {
    number: 2,
    title: 'Approve Pricing & Place Order',
    description: "Once you're happy with the pricing, confirm your order and make payment through our secure checkout process. We accept major credit cards, PayPal, and more.",
  },
  {
    number: 3,
    title: 'Submit Your Artwork',
    description: 'Upload your logo, designs, and any artwork files. If needed, our design team can assist you in preparing print-ready files that meet packaging guidelines.',
    link: '/artwork-guidelines',
    linkText: 'View Artwork Guidelines',
  },
  {
    number: 4,
    title: 'Receive a Digital Proof',
    description: "We'll send you a digital 3D mockup or PDF proof to review. You'll have a chance to approve the final design or request changes before we proceed with production.",
  },
  {
    number: 5,
    title: 'Production & Shipping',
    description: "Once approved, we start production. Turnaround time depends on the box type and quantity. After completion, your boxes are securely packaged and shipped to your location. You'll receive tracking info via email.",
  },
]

export default function HowToOrder() {
  return (
    <main className="min-h-screen">
      <HowToSchema
        name="How to Order Custom Boxes"
        description="Order custom boxes in 5 steps: request quote, approve pricing, submit artwork, approve proof, receive delivery. Free US shipping. No minimums."
        steps={steps.map((s) => ({ name: s.title, text: s.description }))}
      />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com/' },
          { name: 'How to Order', url: 'https://packifycustomboxes.com/how-to-order/' },
        ]}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 to-white pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            How to <span className="text-orange-500">Order</span> Custom Boxes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ordering with Packify Custom Boxes is quick, easy, and stress-free. Follow these five simple steps to get started.
          </p>
          <p className="text-gray-600 mt-2">
            Browse our <Link href="/products/mailer-boxes" className="text-orange-600 font-medium hover:underline">mailer boxes</Link>,{' '}
            <Link href="/products/tuck-boxes" className="text-orange-600 font-medium hover:underline">tuck boxes</Link>,{' '}
            <Link href="/products/rigid-boxes" className="text-orange-600 font-medium hover:underline">rigid boxes</Link>, and{' '}
            <Link href="/products" className="text-orange-600 font-medium hover:underline">more</Link>.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex gap-6 p-6 sm:p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              {/* Step number circle */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{step.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                {step.link && (
                  <Link
                    href={step.link}
                    className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                  >
                    {step.linkText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Need Help?</h2>
            <p className="text-gray-600 mb-6">
              Our customer support team is here to assist you at any step. Reach out anytime.
            </p>
            <a
              href="mailto:packifycustomboxes@gmail.com"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              packifycustomboxes@gmail.com
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">Last updated: July 18, 2025</p>
        </div>
      </section>
    </main>
  )
}
