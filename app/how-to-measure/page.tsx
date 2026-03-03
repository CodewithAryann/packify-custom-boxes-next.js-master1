import { Metadata } from 'next'
import Link from 'next/link'
import { HowToSchema, BreadcrumbListSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'How to Measure Box Dimensions | L×W×H Guide | Packify USA',
  description: 'Measure custom boxes correctly: Length × Width × Height (interior). Print-ready specs for mailer, tuck, rigid boxes. Free design support. USA-based.',
  keywords: 'measure box dimensions, L×W×H, interior dimensions, custom packaging specs USA, Packify Custom Boxes',
  alternates: { canonical: 'https://packifycustomboxes.com/how-to-measure/' },
  openGraph: {
    title: 'How to Measure Box Dimensions | L×W×H Guide | Packify USA',
    description: 'Measure custom boxes correctly: Length × Width × Height. Print-ready specs. Free design support. USA-based.',
    url: 'https://packifycustomboxes.com/how-to-measure/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'How to Measure Box Dimensions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Measure Box Dimensions | Packify USA',
    description: 'Length × Width × Height guide. Print-ready specs. Free design support.',
    images: ['/images/og-image.jpg'],
  },
}

const measurementTips = [
  'Use a ruler or tape measure with inches or millimeters',
  'Measure to the nearest 1/16" or 1mm',
  'Double-check each dimension to avoid fitting issues',
  'Consider the product, padding, and insert space',
]

const dimensions = [
  { label: 'Length (L)', desc: 'The longest side of the base' },
  { label: 'Width (W)', desc: 'The shorter side of the base' },
  { label: 'Height (H)', desc: 'The vertical dimension' },
]

const howToSteps = [
  { name: 'Use standard L×W×H order', text: 'Measure box dimensions in order: Length (longest side of base) × Width (shorter side of base) × Height (vertical dimension). Use interior dimensions for custom fits.' },
  ...dimensions.map((d) => ({ name: d.label, text: d.desc })),
  { name: 'Measurement tips', text: measurementTips.join('. ') },
]

export default function HowToMeasurePage() {
  return (
    <main className="min-h-screen">
      <HowToSchema
        name="How to Measure Box Dimensions"
        description="Measure custom boxes correctly: Length × Width × Height (interior). Print-ready specs for mailer, tuck, rigid boxes."
        steps={howToSteps}
      />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com/' },
          { name: 'How to Measure', url: 'https://packifycustomboxes.com/how-to-measure/' },
        ]}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 to-white pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            How to <span className="text-orange-500">Measure</span> a Box
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Accurate box dimensions are essential for a perfect custom fit. Here&apos;s the standard industry method used at Packify Custom Boxes.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* L×W×H Order */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </span>
              <h2 className="text-2xl font-bold text-gray-900">Standard Measurement Order</h2>
            </div>
            <p className="text-gray-600 mb-4">The correct order is always:</p>
            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 sm:p-8 text-center">
              <p className="text-2xl sm:text-3xl font-bold text-orange-600">
                Length × Width × Height
              </p>
              <p className="text-gray-500 text-sm mt-2">(L × W × H)</p>
            </div>
          </div>

          {/* Interior dimensions */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8 4-8-4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </span>
              <h2 className="text-2xl font-bold text-gray-900">Measure from the Inside</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Always measure the <strong>internal dimensions</strong> of the box. External dimensions may vary slightly due to material thickness.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {dimensions.map((d) => (
                <div key={d.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="font-bold text-gray-900">{d.label}</p>
                  <p className="text-sm text-gray-600 mt-1">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              <h2 className="text-2xl font-bold text-gray-900">Tips for Accurate Measuring</h2>
            </div>
            <ul className="space-y-3">
              {measurementTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-6">
            Ready to order custom boxes? Share your dimensions with us for a quick quote.
          </p>
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Request a Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-sm text-gray-500 mt-8">Last updated: July 18, 2025</p>
        </div>
      </section>
    </main>
  )
}
