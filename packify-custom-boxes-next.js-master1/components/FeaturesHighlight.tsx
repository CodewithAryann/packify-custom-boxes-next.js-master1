'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function WhyChoosePackify() {
  const highlights = [
    {
      title: 'No Die or Plate Charges',
      desc: 'No setup fees for dies or plates. The price you see is the price you pay — no hidden costs.',
      icon: '/images/svg-2.webp',
    },
    {
      title: 'No Minimum Order',
      desc: 'Order from 1 unit. Perfect for prototypes, small batches, and wholesale. No commitments.',
      icon: '/images/svg.webp',
    },
    {
      title: 'Free Design Support',
      desc: 'Our designers help prepare print-ready files and artwork. Free file checks and layout assistance.',
      icon: '/images/svg-3.webp',
    },
    {
      title: '8–10 Day Production',
      desc: 'Quick turnaround. Production in 8–10 business days. Rush orders available. Free US shipping.',
      icon: '/images/svg-3.webp',
    },
    {
      title: '3,000+ Brands Served',
      desc: 'Trusted by e-commerce, retail, subscription, and D2C brands for custom packaging in the USA.',
      icon: '/images/svg-2.webp',
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-orange-50" id="why-packify">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Why Choose <span className="text-[#f97316]">Packify Custom Boxes?</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          USA-based custom box manufacturer. No die or plate charges. Free design support. No minimum order. Free US shipping. 8–10 day production. Full-color printing, kraft, corrugated, rigid — mailer boxes, tuck boxes, and more for e-commerce, retail, and subscription brands.
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <Image src={item.icon} alt={item.title} width={50} height={50} />
              </div>
              <p className="text-xl font-semibold text-gray-800 mb-2">{item.title}</p>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-14">
          <p className="text-gray-700 text-base max-w-2xl mx-auto mb-6">
            Full-color printing, foil stamping, embossing, and custom sizing. Right-sized to your product for lower shipping costs. Request a quote — no obligation.
          </p>
          <Link
            href="/get-quote"
            aria-label="Request a quote for custom boxes"
            className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-lg py-4 px-10 rounded-full shadow-lg transition-all duration-300"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
