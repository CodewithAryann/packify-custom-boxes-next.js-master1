// components/ProductSeoSection.tsx

import { productSeoContent } from '@/lib/product-seo-content'

type Props = {
  productSlug: string
}

export default function ProductSeoSection({ productSlug }: Props) {
  const seoContent = productSeoContent[productSlug]

  if (!seoContent) {
    return null
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
        {/* Main Heading - H2 for hierarchy (page H1 is in ProductDetail) */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent">
          {seoContent.h1}
        </h2>

        {/* Subheading */}
        <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">
          {seoContent.h2}
        </h3>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          {seoContent.description}
        </p>

        {/* Two Column Layout for Lists */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Why Choose Section */}
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border border-orange-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {seoContent.whyChoose.title}
            </h3>
            <ul className="space-y-3">
              {seoContent.whyChoose.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Section */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {seoContent.industries.title}
            </h3>
            <ul className="space-y-3">
              {seoContent.industries.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}