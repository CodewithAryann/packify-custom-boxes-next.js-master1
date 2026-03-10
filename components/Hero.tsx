'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative text-white overflow-hidden px-[40px] pt-0 pb-0"
      style={{
        backgroundImage: "url('/images/banner.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center relative z-10 min-h-[400px] pt-[6rem]">
        {/* Left Text Content */}
        <div className="px-6 pt-[4px] pb-[52px] md:pt-16 md:pb-16 space-y-6 z-20 relative">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Custom Packaging Boxes
          </h1>
          <p className="text-lg sm:text-xl">
            Premium custom boxes for e-commerce, retail, and subscription brands. Mailer boxes, tuck boxes, rigid boxes — fully printed, custom sized, ready to ship. No die or plate charges. Free design support.
          </p>
          <p className="text-sm sm:text-base opacity-90">
            Kraft, corrugated, and paperboard options. Recyclable and eco-friendly materials available.
          </p>
          <p className="text-lg font-bold">
            Free U.S. Shipping · No Minimums · 8–10 Day Turnaround
          </p>
          <Link
            href="#type"
            aria-label="Start your custom box"
            className="mt-4 inline-block px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg shadow-md hover:bg-orange-100 transition"
          >
            Start Your Custom Box
          </Link>
        </div>
      </div>
    </section>
  )
}