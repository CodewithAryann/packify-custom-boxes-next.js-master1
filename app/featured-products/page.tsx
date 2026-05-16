import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BreadcrumbListSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Featured Custom Packaging Products | Packify Custom Boxes',
  description: 'Explore our full range of custom packaging solutions — mailer boxes, rigid boxes, tuck boxes, bakery boxes, cosmetic boxes, and more. Free shipping across the US. No minimums.',
  keywords: 'custom packaging USA, featured packaging products, mailer boxes, rigid boxes, tuck boxes, bakery boxes, cigarette boxes, cosmetic boxes',
  alternates: { canonical: 'https://packifycustomboxes.com/featured-products/' },
  openGraph: {
    title: 'Featured Custom Packaging Products | Packify Custom Boxes',
    description: 'Every box type we offer — browse our featured product range with specs, features, and instant quoting.',
    url: 'https://packifycustomboxes.com/featured-products/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Packify Featured Products' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Featured Custom Packaging Products | Packify Custom Boxes',
    description: 'Every box type we offer — browse our featured product range with specs, features, and instant quoting.',
    images: ['/images/og-image.jpg'],
  },
}

const featuredProducts = [
  {
    slug: 'mailer-boxes',
    name: 'Custom Mailer Boxes',
    tagline: 'The #1 choice for e-commerce shipping',
    description: 'Self-locking, no-tape-needed mailer boxes built for DTC brands. Sturdy corrugated walls protect products in transit while full-color printing turns every delivery into a branded unboxing moment.',
    image: '/images/mailer/Mailer Box MAIN PAGE.png',
    badge: 'Best Seller',
    features: ['No Minimum Order', 'Free US Shipping', '8–10 Day Turnaround', 'Full-Color Printing'],
    specs: 'Corrugated · CMYK + PMS · Gloss / Matte / Spot UV',
    variants: ['Standard Mailer', 'Tear Strip Mailer', 'Candle Boxes', 'CBD Mailer'],
  },
  {
    slug: 'rigid-boxes',
    name: 'Custom Rigid Boxes',
    tagline: 'Luxury packaging that commands attention',
    description: 'Premium set-up boxes for jewelry, electronics, cosmetics, and high-end retail. Thick chipboard wrapped in custom printed material delivers an unboxing experience customers remember and share.',
    image: '/images/rigid/Rigid Box MAIN PAGE.png',
    badge: 'Premium',
    features: ['No Minimum Order', 'Rush Available', '4–8 Day Turnaround', 'Embossing & Foiling'],
    specs: '10pt – 28pt Chipboard · Soft-Touch · Hot Foil · Emboss',
    variants: ['Collapsible Rigid', 'Shoulder Neck Box', 'Sliding Drawer', 'Hinged Lid'],
  },
  {
    slug: 'tuck-boxes',
    name: 'Custom Tuck Boxes',
    tagline: 'Versatile folding cartons for every industry',
    description: 'Straight tuck, reverse tuck, and auto-lock bottom cartons for retail, cosmetics, food, and pharma. Fast production, vibrant printing, and eco options make tuck boxes the backbone of product packaging.',
    image: '/images/tuck/Tuck Top MAIN PAGE.png',
    badge: 'Most Versatile',
    features: ['No Minimum Order', 'Free US Shipping', '7–10 Day Turnaround', 'Eco-Friendly Options'],
    specs: '12pt – 24pt SBS · Kraft · Recycled Board · Window Cutouts',
    variants: ['Straight Tuck End', 'Reverse Tuck End', 'Auto-Lock Bottom', 'Seal End'],
  },
  {
    slug: 'cosmetic-boxes',
    name: 'Custom Cosmetic Boxes',
    tagline: 'Beauty packaging as bold as your brand',
    description: 'Skincare, makeup, perfume, and haircare boxes with premium finishes. Window cutouts, soft-touch lamination, and hot foil stamping make your product irresistible on retail shelves and in online hauls.',
    image: '/images/cosmetic/cosmetic-main.jpeg',
    badge: 'Trending',
    features: ['No Minimum Order', 'Free US Shipping', '7–10 Day Turnaround', 'Window Cutouts'],
    specs: '12pt – 24pt SBS · Soft-Touch · Window · UV Coating',
    variants: ['Serum Boxes', 'Lipstick Boxes', 'Perfume Boxes', 'Skincare Gift Boxes'],
  },
  {
    slug: 'bakery-boxes',
    name: 'Custom Bakery Boxes',
    tagline: 'Food-safe packaging for every baked good',
    description: 'FDA-compliant paperboard with grease-resistant coatings for cakes, cupcakes, cookies, donuts, and pastries. Optional PET windows, cupcake inserts, and donut trays. Full-color food-safe printing.',
    image: '/images/bakery/Bakery Box MAIN PAGE.jpg',
    badge: 'Food-Safe',
    features: ['From 100 Units', 'Free US Shipping', '7–10 Day Turnaround', 'PET Window Options'],
    specs: 'FDA-Compliant Board · Grease-Resistant · CMYK Food-Safe Inks',
    variants: ['Cake Boxes', 'Cupcake Boxes', 'Cookie Boxes', 'Donut Boxes'],
  },
  {
    slug: 'magnetic-closure',
    name: 'Magnetic Closure Boxes',
    tagline: 'The satisfying snap of luxury unboxing',
    description: 'Embedded magnets, satin liners, and ribbon pulls for the ultimate premium gift experience. Perfect for jewellery, watches, electronics, and corporate gifting where first impressions close deals.',
    image: '/images/magnetic/magnetic-main.jpeg',
    badge: 'Luxury',
    features: ['No Minimum Order', 'Free US Shipping', '10–14 Day Turnaround', 'Ribbon & Insert Options'],
    specs: '24pt – 36pt Chipboard · Embedded Magnets · Satin Liner · Foiling',
    variants: ['Classic Magnetic', 'Foldable Magnetic', 'Magnetic with Tray', 'Gift Set Box'],
  },
  {
    slug: 'cigarette-boxes',
    name: 'Cigarette & Vape Boxes',
    tagline: 'Compliant packaging for tobacco & vape brands',
    description: 'Child-resistant options, health warning space, and compliance labeling built in. For tobacco, e-cigarettes, vape pens, CBD, THC, and e-liquid — packaging that meets regulations and stands out on the shelf.',
    image: '/images/cigarette/Cigarette Box photo.jpg',
    badge: 'Compliant',
    features: ['No Minimum Order', 'Free US Shipping', '7–10 Day Turnaround', 'Child-Resistant Options'],
    specs: '12pt – 24pt SBS · Matte UV · Foil Stamping · Compliance Labels',
    variants: ['Cigarette Boxes', 'Vape Pen Boxes', 'CBD Boxes', 'THC Vape Boxes'],
  },
  {
    slug: 'dispenser-boxes',
    name: 'Dispenser Boxes',
    tagline: 'Counter displays that sell for you',
    description: 'Tear-out and flip-top retail counter display boxes that merchandise your product at point of sale. Perfect for candy, mints, lip balm, health products, and any impulse-buy category.',
    image: '/images/dispenser/dispenser-main.jpeg',
    badge: 'Retail Ready',
    features: ['No Minimum Order', 'Free US Shipping', '8–12 Day Turnaround', 'Tear Strip Option'],
    specs: '14pt – 24pt SBS · E-Flute Corrugated · Gloss AQ · Spot UV',
    variants: ['Tear-Out Dispenser', 'Flip-Top Display', 'Counter Display', 'Header Card Box'],
  },
  {
    slug: 'burger-boxes',
    name: 'Custom Burger Boxes',
    tagline: 'Food service packaging with brand impact',
    description: 'Grease-resistant, food-grade paperboard burger and sandwich boxes for restaurants, ghost kitchens, and food trucks. Food-safe inks, eco-friendly materials, and bold branding make every meal memorable.',
    image: '/images/burger/burger-main.jpeg',
    badge: 'Food Grade',
    features: ['No Minimum Order', 'Free US Shipping', '7–10 Day Turnaround', 'Eco Options'],
    specs: 'Food-Grade SBS · Grease-Resistant Coating · CMYK Food-Safe Inks',
    variants: ['Burger Clamshell', 'Sandwich Box', 'Slider Box', 'Gourmet Burger Box'],
  },
]

const whyUs = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Fast Turnaround',
    desc: '7–14 business days from proof approval to your door. Rush orders available on request.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Free Design Support',
    desc: 'Our in-house designers help you from concept to print-ready file at zero cost.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    ),
    title: 'No Minimums',
    desc: 'Order from 1 unit. Perfect for prototypes, small batches, and large wholesale runs.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Free US Shipping',
    desc: 'Every order ships free to the continental United States. No hidden fees at checkout.',
  },
]

export default function FeaturedProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com/' },
          { name: 'Featured Products', url: 'https://packifycustomboxes.com/featured-products/' },
        ]}
      />

      {/* ── Breadcrumb + Intro Header ── */}
      <div className="max-w-7xl mx-auto px-6 pt-[6rem] pb-10">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900 font-semibold">Featured Products</span>
        </nav>

        <header className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Our Featured Range
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Custom Packaging Boxes{' '}
            <span className="text-orange-500">by Category</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mailer boxes for e-commerce. Tuck boxes for cosmetics and retail. Rigid boxes for luxury and gifts.
            Choose the custom box style that fits your product. No minimums. Free US shipping. 8–10 day turnaround.
          </p>
        </header>
      </div>

      {/* ── Stats Bar ── */}
      <div className="bg-orange-50 border-y border-orange-100 py-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: 'Products & Variants' },
              { value: 'No Min.', label: 'Order Minimum' },
              { value: 'Free', label: 'US Shipping' },
              { value: '24hr', label: 'Quote Turnaround' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-extrabold text-orange-500">{s.value}</div>
                <div className="text-sm text-gray-600 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Products Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-4">
            <span className="text-black">Custom Boxes</span> by Style
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Every product is made to order — your dimensions, your design, your brand.
            Full-color printing, premium finishes, and fast delivery on every box.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <div
              key={product.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:ring-2 hover:ring-orange-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-52 bg-[#f7f4ef]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  {product.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tagline */}
                <p className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-1">
                  {product.tagline}
                </p>

                {/* Title */}
                <h3 className="text-xl text-black font-semibold mb-2 group-hover:text-orange-500 transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-2.5 mb-4">
                  <p className="text-xs text-gray-500 font-medium">{product.specs}</p>
                </div>

                {/* Feature ticks */}
                <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-4">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-xs text-gray-700">
                      <svg className="w-3.5 h-3.5 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>

                {/* Variant pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.variants.map((v) => (
                    <span key={v} className="text-xs bg-gray-100 text-gray-700 border border-gray-200 px-2.5 py-1 rounded-full font-medium">
                      {v}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-3 mt-auto">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-1 text-center bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                  >
                    View Product
                  </Link>
                  <Link
                    href="/get-quote"
                    className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-500 mb-4">
            <span className="text-black">Why Choose us for </span> Custom Boxes?
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            USA-based custom box manufacturer. No die or plate charges. Free design support. No minimum order.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center bg-white shadow-xl rounded-xl p-6 transition transform hover:scale-105 hover:shadow-orange-200"
              >
                <div className="mb-4 bg-orange-100 p-4 rounded-full shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works strip ── */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>Simple ordering process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            How it <span className="text-orange-500">works</span>
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Order custom packaging in four steps: share your specs, approve design and pricing, we produce and ship — free, fast.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { n: '1', label: 'Consultation', desc: 'Share your specs & we recommend the best material and style.' },
              { n: '2', label: 'Design Prep', desc: 'We create or check your artwork. Free file checks included.' },
              { n: '3', label: 'Production', desc: 'Print-ready approval triggers production. 7–14 business days.' },
              { n: '4', label: 'Delivery', desc: 'Quality-checked and shipped free across the continental US.' },
            ].map((step) => (
              <div
                key={step.n}
                className="relative flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-orange-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute -top-3 -right-3 w-9 h-9 flex items-center justify-center bg-orange-500 text-white font-bold text-base rounded-full shadow-md">
                  {step.n}
                </div>
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl mb-4">
                  <span className="text-2xl font-extrabold text-orange-500">{step.n}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{step.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/get-quote"
            aria-label="Request a quote for custom boxes"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg py-4 px-10 rounded-full shadow-lg transition-all duration-300"
          >
            Request a Quote
          </Link>
          <p className="mt-4 text-sm text-gray-500">No die charges · Free design help · 8–10 day turnaround</p>
        </div>
      </section>

      {/* ── Bottom CTA banner (matches QuoteForm section style) ── */}
      <section className="py-16 bg-white" id="quote-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-4">
            <span className="text-black">Ready to Build Your </span>Custom Packaging?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Tell us your product dimensions, quantity, and design vision.
            We'll send you a free quote within 24 hours — no obligation, no hidden fees.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/get-quote"
              aria-label="Start my free quote"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg py-4 px-10 rounded-full shadow-lg transition-all duration-300"
            >
              Start My Free Quote
            </Link>
            <Link
              href="/products"
              className="inline-block bg-white hover:bg-gray-50 text-gray-900 font-semibold text-lg py-4 px-10 rounded-full shadow-md border border-gray-200 transition-all duration-300"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
