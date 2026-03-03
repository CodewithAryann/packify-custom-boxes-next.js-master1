import { Metadata } from 'next'
import Link from 'next/link'
import { HowToSchema, BreadcrumbListSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Artwork Guidelines | Print-Ready Files | Packify Custom Boxes USA',
  description: 'Print-ready specs: AI, EPS, PDF. CMYK, 300 DPI, bleed & safe zone. Free design support. No dieline fees. USA custom box manufacturer.',
  keywords: 'artwork guidelines, print-ready files, dieline templates, CMYK packaging, Packify Custom Boxes USA',
  alternates: { canonical: 'https://packifycustomboxes.com/artwork-guidelines/' },
  openGraph: {
    title: 'Artwork Guidelines | Print-Ready Files | Packify Custom Boxes USA',
    description: 'AI, EPS, PDF. CMYK, 300 DPI, bleed & safe zone. Free design support. No dieline fees.',
    url: 'https://packifycustomboxes.com/artwork-guidelines/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Artwork Guidelines - Packify Custom Boxes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artwork Guidelines | Packify Custom Boxes USA',
    description: 'Print-ready specs: AI, EPS, PDF. CMYK, 300 DPI. Free design support.',
    images: ['/images/og-image.jpg'],
  },
}

const guidelines = [
  {
    number: 1,
    title: 'File Format',
    items: [
      'Preferred formats: AI, EPS, PDF (vector files)',
      'High-resolution PSD, PNG, or JPEG (minimum 300 DPI) accepted for images',
      'Convert all text to outlines or curves to avoid font issues',
    ],
  },
  {
    number: 2,
    title: 'Color Mode',
    content: 'Use CMYK color mode for all artwork. RGB files will be converted to CMYK, which may cause color shifts.',
  },
  {
    number: 3,
    title: 'Bleed & Safe Zone',
    items: [
      'Include a bleed of at least 0.125" (3mm) on all sides',
      'Keep important text and logos inside the safe zone (at least 0.125" from the edge)',
    ],
  },
  {
    number: 4,
    title: 'Dielines',
    content: 'If using a custom dieline template, place your artwork within the dieline layers.',
    items: [
      'Cut lines in 100% magenta (no stroke)',
      'Fold lines in 100% cyan dashed lines',
      'Keep dieline on a separate layer named "Dieline"',
    ],
  },
  {
    number: 5,
    title: 'Fonts and Images',
    items: [
      'All fonts must be outlined or embedded',
      'Linked images must be embedded or included with your file',
      'Image resolution should be at least 300 DPI',
    ],
  },
  {
    number: 6,
    title: 'File Naming',
    content: 'Name your files clearly with your company name and box type.',
    example: 'Packify_MailerBox_Design.pdf',
  },
]

const howToSteps = guidelines.map((g) => ({
  name: g.title,
  text: (g.content || (g.items ? g.items.join('. ') : '') || g.title) as string,
}))

export default function ArtworkGuidelinesPage() {
  return (
    <main className="min-h-screen">
      <HowToSchema
        name="Artwork Guidelines for Custom Boxes"
        description="Print-ready specs: AI, EPS, PDF. CMYK, 300 DPI, bleed & safe zone. Free design support. No dieline fees."
        steps={howToSteps}
      />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com/' },
          { name: 'Artwork Guidelines', url: 'https://packifycustomboxes.com/artwork-guidelines/' },
        ]}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 to-white pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Artwork <span className="text-orange-500">Guidelines</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these guidelines to ensure the highest print quality for your custom packaging at Packify Custom Boxes.
          </p>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {guidelines.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
                    {item.number}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
                </div>
                {item.content && (
                  <p className="text-gray-600 mb-3">{item.content}</p>
                )}
                {item.items && (
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="text-orange-500 mt-1 flex-shrink-0">•</span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.example && (
                  <code className="block mt-3 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-mono">
                    {item.example}
                  </code>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Need Help with Artwork?</h2>
            <p className="text-gray-600 mb-6">
              We offer free file checks and affordable design assistance. Email us your files and we&apos;ll help you get print-ready.
            </p>
            <a
              href="mailto:info@packifycustomboxes.com"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@packifycustomboxes.com
            </a>
            <p className="mt-6">
              <Link href="/how-to-order" className="text-orange-600 font-medium hover:underline">
                View how to order →
              </Link>
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-6">Last updated: July 18, 2025</p>
        </div>
      </section>
    </main>
  )
}
