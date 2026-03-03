import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductSchema } from '@/components/JsonLd'
import Link from 'next/link'
import ProductDetail from '@/components/ProductDetail'
import ProductTabs from '@/components/ProductTabs'
import ProductQuoteForm from '@/components/ProductQuoteForm'
import ProductOverview from '@/components/ProductOverview'
import ProductInserts from '@/components/ProductInserts'
import ProductSeoSection from '@/components/ProductSeoSection'
import { productsData } from '@/lib/products-data'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = productsData[params.slug as keyof typeof productsData]
  if (!product) return { title: 'Product Not Found' }
  const keywords = product.keywords?.join(', ') || 'custom packaging boxes, Packify Custom Boxes'
  const url = `https://packifycustomboxes.com/products/${params.slug}/`
  const title = `${product.title} | Custom Boxes USA | Packify Custom Boxes`
  return {
    title,
    description: product.metaDescription,
    keywords: `${keywords}, custom printed boxes USA, eco-friendly packaging, free US shipping, no minimums`,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: product.metaDescription,
      url,
      type: 'website',
      siteName: 'Packify Custom Boxes',
      images: [{ url: product.mainImage, width: 1200, height: 630, alt: product.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: product.metaDescription,
      images: [product.mainImage],
    },
  }
}

export default function ProductPage({ params }: Props) {
  const product = productsData[params.slug as keyof typeof productsData]

  if (!product) {
    notFound()
  }

  // Optional long-form overview / learn-more content
  const productAny = product as any
  const productOverview = productAny.productOverview || null
  const overviewLearnMore = productOverview?.learnMore || null
  const learnMoreSection = productAny.learnMoreSection || null

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <ProductSchema
        name={product.title}
        description={product.description}
        image={product.mainImage}
        url={`https://packifycustomboxes.com/products/${params.slug}/`}
      />
      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-[6rem] pb-4">
        <nav className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/products" className="hover:text-orange-600 transition-colors">
            Products
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900 font-semibold">{product.title}</span>
        </nav>
      </div>

      

      {/* Hero Product Detail Section */}
      {'learnMoreSection' in product && 'capabilitiesSection' in product && 'customization' in product ? (
        <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 bg-white rounded-3xl shadow-2xl border border-gray-100">
          <ProductDetail product={product} />
          <div id="quote-form" className="md:sticky md:top-32 md:self-start">
            <ProductQuoteForm productName={(product as any).title} />
          </div>
        </main>
      ) : (
        <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 bg-white rounded-3xl shadow-2xl border border-gray-100">
          <div id="quote-form" className="md:sticky md:top-32 md:self-start">
            <ProductQuoteForm productName={(product as any).title} />
          </div>
        </main>
      )}
      {/* SEO Content Section */}
      <ProductSeoSection productSlug={params.slug} />

      {/* Product Inserts Section */}
      {params.slug === 'mailer-boxes' && (
        <ProductInserts productType="mailer" />
      )}

      {/* Enhanced Product Variants Grid */}
      {'variants' in product && product.variants && product.variants.length > 0 && (
        <section className="relative max-w-7xl mx-auto px-6 py-20 overflow-hidden">
          
          {/* Background Decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20" />
          
          <div className="relative">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent">
                {product.title} Collection
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our premium selection of {product.title.toLowerCase()} designed to protect and elevate your brand
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" />
                <div className="w-16 h-1 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full" />
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {'variants' in product && product.variants.map((variant: typeof product.variants[number], index: number) => {
                const variantSlug = variant.name
                  .toLowerCase()
                  .replace(/\s+/g, '-')
                  .replace(/[^\w-]/g, '')
                
                return (
                  <Link
                    key={index}
                    href={`/products/${params.slug}/${variantSlug}`}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-orange-200"
                  >
                    {/* Image Container */}
                    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 aspect-square overflow-hidden">
                      <img
                        src={variant.image}
                        alt={variant.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        width={336}
                        height={336}
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Quick View Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 text-center">
                      <h3 className="font-bold text-base md:text-lg text-gray-800 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {variant.name}
                      </h3>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600 group-hover:text-orange-600 transition-colors">
                        <span className="font-medium">View Details</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </Link>
                )
              })}

              {/* Custom Quote CTA Card */}
              <div className="group relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-center p-8 text-center min-h-[280px] border-2 border-orange-400/20">
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                
                {/* Icon */}
                <div className="relative mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 className="text-white font-bold text-lg md:text-xl leading-tight">
                    Need Something Custom?
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    We create fully customized packaging tailored to your exact specifications—any size, style, or finish.
                  </p>
                  
                  {/* CTA Button */}
                  <Link
                    href="/get-quote"
                    className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mt-4"
                  >
                    <span>Get Custom Quote</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>

                {/* Sparkle Effects */}
                <div className="absolute top-6 left-6 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse" />
                <div className="absolute top-12 right-8 w-1.5 h-1.5 bg-white rounded-full opacity-40 animate-pulse delay-75" />
                <div className="absolute bottom-8 right-6 w-2 h-2 bg-white rounded-full opacity-50 animate-pulse delay-150" />
              </div>
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
              <Link
                href="#quote-form"
                className="inline-flex items-center gap-3 bg-white text-orange-600 font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl border-2 border-orange-200 hover:border-orange-300 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Request a Quote for Any Size
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Materials, Printing, Finishes Tabs */}
      <div className="bg-white">
        <ProductTabs productSlug={params.slug} />
      </div>

      {/* Product Overview Section (hero-style summary) */}
      <ProductOverview product={product} />

      {/* Learn More / Long-Form Content – similar to live site */}
      {(productOverview || learnMoreSection) && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          {/* Heading & intro */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {productOverview?.title || `Learn More About Custom ${product.title}`}
            </h2>
            {productOverview?.description && (
              <p className="text-lg text-gray-700 leading-relaxed">
                {productOverview.description}
              </p>
            )}
          </div>

          {/* Key bullet points */}
          {productOverview?.bullets && productOverview.bullets.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {productOverview.bullets.map((bullet: any, i: number) => (
                <article
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {bullet.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {bullet.description}
                  </p>
                </article>
              ))}
            </div>
          )}

          {/* Deep-dive learn-more sections (subheadings & paragraphs) */}
          {overviewLearnMore?.sections && overviewLearnMore.sections.length > 0 && (
            <div className="space-y-8 mb-12">
              {overviewLearnMore.sections.map((section: any, idx: number) => (
                <div key={idx}>
                  {section.heading && (
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {section.heading}
                    </h3>
                  )}
                  {section.content && (
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {section.content}
                    </p>
                  )}
                  {section.list && section.list.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {section.list.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Feature-style learn more (from learnMoreSection.features) */}
          {learnMoreSection?.features && learnMoreSection.features.length > 0 && (
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {learnMoreSection.features.map((feature: any, i: number) => (
                <article
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          )}

          {/* Simple FAQ list (non-collapsing, SEO-friendly) */}
          {learnMoreSection?.faqs && learnMoreSection.faqs.length > 0 && (
            <div className="border-t border-gray-200 pt-8 space-y-6">
              {learnMoreSection.faqs.map((faq: any, idx: number) => (
                <div key={idx}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  )
}