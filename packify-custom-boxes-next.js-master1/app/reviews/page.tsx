import { Metadata } from 'next'
import Link from 'next/link'
import { AggregateRatingSchema, BreadcrumbListSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Customer Reviews | Trusted by 3,000+ USA Businesses | Packify',
  description: 'Packify Custom Boxes reviews. 3,000+ USA businesses trust us for custom boxes. Mailer, rigid, tuck boxes. Free US shipping. No minimums. 100% satisfaction.',
  keywords: 'Packify Custom Boxes reviews, custom packaging testimonials USA, 3000 businesses, trusted packaging',
  alternates: { canonical: 'https://packifycustomboxes.com/reviews/' },
  openGraph: {
    title: 'Customer Reviews | Trusted by 3,000+ USA Businesses | Packify',
    description: '3,000+ USA businesses trust us. Mailer, rigid, tuck boxes. Free US shipping. No minimums. 100% satisfaction.',
    url: 'https://packifycustomboxes.com/reviews/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Packify Custom Boxes Reviews' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Reviews | Packify Custom Boxes',
    description: '3,000+ USA businesses trust us. Free US shipping. No minimums.',
    images: ['/images/og-image.jpg'],
  },
}

const StarIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.545l6.564-.955L10 1l2.948 5.59 6.564.955-4.756 4.998 1.122 6.545z" />
  </svg>
)

export default function ReviewsPage() {
  const reviews: { name: string; rating: number; text: string }[] = [
    {
      name: 'Marcus T.',
      rating: 5,
      text: 'Ordered 1,200 mailer boxes for our skincare brand. The print quality on the kraft was way better than the last supplier we used. Boxes showed up in about 10 days, which is what they quoted. One small thing—a few boxes had slightly bent corners in the middle of the stack, but nothing that affected the ones we actually ship. Will order again.',
    },
    {
      name: 'Jennifer L.',
      rating: 4,
      text: 'First time ordering custom tuck boxes for our jewelry line. The proof process was smooth and they caught a typo we missed. Turnaround was maybe 2 days longer than estimated but they kept us updated. Boxes look great on the shelf. Price was fair compared to other quotes we got.',
    },
    {
      name: 'David P.',
      rating: 5,
      text: 'We\'ve done 3 orders now—rigid boxes for watches and mailers for apparel. No die charges is huge for us since we do smaller runs. The rigid boxes have that nice magnetic closure and our customers have actually mentioned the packaging in reviews. Solid company.',
    },
    {
      name: 'Amanda K.',
      rating: 5,
      text: 'Needed 500 cosmetic boxes fast for a product launch. They offered a rush option and we got them in 6 business days. The matte finish came out exactly like our mockup. Shipping was free which I wasn\'t expecting. Definitely using them for our next drop.',
    },
    {
      name: 'Robert M.',
      rating: 4,
      text: 'Good experience overall. Ordered dispenser boxes for protein bars. The structural quality is solid. Had to send our artwork back once because of bleed issues—their team pointed it out before print so that was appreciated. Would give 5 stars if the website was a bit easier to navigate when requesting quotes.',
    },
    {
      name: 'Sandra C.',
      rating: 5,
      text: 'I run a small candle business and was nervous about minimums. Being able to order just 100 tuck boxes for a new scent was a game changer. The boxes arrived well-packed, no damage. Customer service answered my (probably dumb) questions about dimensions quickly. Will scale up with them as we grow.',
    },
  ]

  const avgRating = Math.round((reviews.reduce((a, r) => a + r.rating, 0) / reviews.length) * 10) / 10

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 pt-[8rem] space-y-12">
      <AggregateRatingSchema ratingValue={avgRating} reviewCount={reviews.length} />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com/' },
          { name: 'Reviews', url: 'https://packifycustomboxes.com/reviews/' },
        ]}
      />

      <nav className="flex items-center gap-2 text-sm text-gray-600">
        <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
        <span className="text-gray-400">›</span>
        <span className="text-gray-900 font-semibold">Customer Reviews</span>
      </nav>

      {/* Header with H1 and aggregate rating */}
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Customer Reviews | Trusted by 3,000+ USA <span className="text-orange-500">Businesses</span>
        </h1>
        <div className="flex items-center justify-center gap-4 text-gray-600 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.round(avgRating) ? 'text-yellow-400' : 'text-gray-300'}>
                ★
              </span>
            ))}
          </div>
          <span className="font-semibold text-gray-800">{avgRating} out of 5</span>
          <span>based on {reviews.length} reviews</span>
        </div>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Hear what our happy customers have to say about their experience with <strong>Packify Custom Boxes</strong>. Quality packaging, reliable service, and excellent support. Over 3,000 USA businesses trust us for custom mailer boxes, rigid boxes, tuck boxes, and more.
        </p>
      </header>

      {/* Reviews Grid */}
      <section className="grid md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <article key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                    <StarIcon />
                  </div>
                ))}
              </div>
              <p className="ml-3 font-semibold text-gray-700">{review.name}</p>
            </div>
            <p className="text-gray-700">{review.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}