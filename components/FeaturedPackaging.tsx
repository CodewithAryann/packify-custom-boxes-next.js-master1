'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

// All sub-products from every category
const featuredProducts = [
  // Mailer Boxes
  { name: 'Corrugated Mailer Boxes',       image: '/images/mailer/Corrugated Mailer.png',                                                                                  href: '/products/mailer-boxes/corrugated-mailer-boxes',                  category: 'Mailer Boxes',     bg: '#f0ece4' },
  { name: 'White Mailer Boxes',            image: '/images/mailer/White Mailer Box.png',                                                                                   href: '/products/mailer-boxes/white-mailer-boxes',                       category: 'Mailer Boxes',     bg: '#f0ece4' },
  { name: 'Kraft Mailer Boxes',            image: '/images/mailer/Kraft Mailer Box.jpg',                                                                                   href: '/products/mailer-boxes/kraft-mailer-boxes',                       category: 'Mailer Boxes',     bg: '#f0ece4' },
  { name: 'Black Mailer Boxes',            image: '/images/mailer/Black Mailer Box.png',                                                                                   href: '/products/mailer-boxes/black-mailer-boxes',                       category: 'Mailer Boxes',     bg: '#1e1e1e' },
  { name: 'Pink Mailer Boxes',             image: '/images/mailer/Pink Mailer Box.png',                                                                                    href: '/products/mailer-boxes/pink-mailer-boxes',                        category: 'Mailer Boxes',     bg: '#fdf0f5' },
  { name: 'Sleeved Mailer Boxes',          image: '/images/mailer/sleeved mailer box.jpeg',                                                                                href: '/products/mailer-boxes/sleeved-mailer-boxes',                     category: 'Mailer Boxes',     bg: '#f0ece4' },
  { name: 'Holiday Mailer Boxes',          image: '/images/mailer/Holiday Mailer Box.jpg',                                                                                 href: '/products/mailer-boxes/holiday-mailer-boxes',                     category: 'Mailer Boxes',     bg: '#f7f4ef' },
  { name: 'Custom Bubble Mailers',         image: '/images/mailer/Custom bubble Mailer Box.png',                                                                           href: '/products/mailer-boxes/custom-bubble-mailers',                    category: 'Mailer Boxes',     bg: '#f7f4ef' },
  { name: 'Candle Shipping Boxes',         image: '/images/mailer/Candle Mailer Box.jpg',                                                                                  href: '/products/mailer-boxes/candle-shipping-boxes',                    category: 'Mailer Boxes',     bg: '#f0ece4' },
  { name: 'Literature Mailers',            image: '/images/mailer/Literature Mailer Box.jpg',                                                                              href: '/products/mailer-boxes/literature-mailers',                       category: 'Mailer Boxes',     bg: '#f7f4ef' },
  { name: 'Cardboard Mailers',             image: '/images/mailer/Cardboard Mailer Box.png',                                                                               href: '/products/mailer-boxes/cardboard-mailers',                        category: 'Mailer Boxes',     bg: '#f0ece4' },
  { name: 'Vinyl Record Mailers',          image: '/images/mailer/Vinyl Record Mailer.jpg',                                                                                href: '/products/mailer-boxes/vinyl-record-mailers',                     category: 'Mailer Boxes',     bg: '#1e1e1e' },

  // Tuck Boxes
  { name: 'Tuck Top Boxes',               image: '/images/tuck/Tuck Top Box.png',                                                                                         href: '/products/tuck-boxes/tuck-top-boxes',                             category: 'Tuck Boxes',       bg: '#f7f4ef' },
  { name: 'Auto Lock Boxes',              image: '/images/tuck/Auto Lock Tuck Box.png',                                                                                   href: '/products/tuck-boxes/auto-lock-boxes',                            category: 'Tuck Boxes',       bg: '#f7f4ef' },
  { name: 'Straight Tuck End Boxes',      image: '/images/tuck/Straight Tuck End.png',                                                                                    href: '/products/tuck-boxes/straight-tuck-end-boxes',                    category: 'Tuck Boxes',       bg: '#f7f4ef' },
  { name: 'Kraft Tuck Top Boxes',         image: '/images/tuck/Kraft Tuck Box.png',                                                                                       href: '/products/tuck-boxes/kraft-tuck-top-boxes',                       category: 'Tuck Boxes',       bg: '#efe8d8' },
  { name: 'Snap Lock Bottom Boxes',       image: '/images/tuck/Snap Lock Bottom Boxes.png',                                                                               href: '/products/tuck-boxes/snap-lock-bottom-boxes',                     category: 'Tuck Boxes',       bg: '#f7f4ef' },
  { name: 'Reverse Tuck End Boxes',       image: '/images/tuck/Reverse Tuck Box.png',                                                                                     href: '/products/tuck-boxes/reverse-tuck-end-boxes',                     category: 'Tuck Boxes',       bg: '#f7f4ef' },
  { name: 'CBD Tuck Boxes',               image: '/images/tuck/CBD Tuck Box (2).png',                                                                                     href: '/products/tuck-boxes/cbd-tuck-boxes',                             category: 'Tuck Boxes',       bg: '#eef5ee' },
  { name: 'Roll End Tuck Boxes',          image: '/images/tuck/Roll End Tuck Top.jpg',                                                                                    href: '/products/tuck-boxes/roll-end-tuck-boxes',                        category: 'Tuck Boxes',       bg: '#f7f4ef' },
  { name: '1-2-3 Bottom Boxes',           image: '/images/tuck/1-2-3 Bottom Box.jpg',                                                                                     href: '/products/tuck-boxes/1-2-3-bottom-boxes',                         category: 'Tuck Boxes',       bg: '#f7f4ef' },

  // Rigid Boxes
  { name: 'Magnetic Closure Boxes',       image: '/images/rigid/Magnetic Closure Rigid Boxes.png',                                                                        href: '/products/rigid-boxes/custom-magnetic-closure-boxes',             category: 'Rigid Boxes',      bg: '#1e1e1e' },
  { name: 'Flip Top Boxes',               image: '/images/rigid/Flip Top Rigid Box.png',                                                                                  href: '/products/rigid-boxes/flip-top-boxes',                            category: 'Rigid Boxes',      bg: '#f5f0e8' },
  { name: 'Rigid Gift Boxes',             image: '/images/rigid/Luxury Rigid Gift Boxes.jpg',                                                                             href: '/products/rigid-boxes/rigid-gift-boxes',                          category: 'Rigid Boxes',      bg: '#1e1e1e' },
  { name: 'Kraft Rigid Boxes',            image: '/images/rigid/Kraft Rigid Box.png',                                                                                     href: '/products/rigid-boxes/kraft-rigid-boxes',                         category: 'Rigid Boxes',      bg: '#efe8d8' },
  { name: 'Satin Lined Boxes',            image: '/images/rigid/Satin Lined Rigid Boxes.jpg',                                                                             href: '/products/rigid-boxes/satin-lined-boxes',                         category: 'Rigid Boxes',      bg: '#f5f0f5' },
  { name: 'Two Piece Rigid Boxes',        image: '/images/rigid/Two-Piece Rigid Boxes (Lid & Base).png',                                                                  href: '/products/rigid-boxes/custom-two-piece-boxes',                    category: 'Rigid Boxes',      bg: '#f5f0e8' },
  { name: 'Rigid Drawer Boxes',           image: '/images/rigid/Rigid Drawer Boxes (Slide-Out Boxes).png',                                                                href: '/products/rigid-boxes/custom-rigid-drawer-boxes',                 category: 'Rigid Boxes',      bg: '#f5f0e8' },
  { name: 'Slipcase Boxes',               image: '/images/rigid/Rigid SlipCase Box.png',                                                                                  href: '/products/rigid-boxes/slipcase-boxes',                            category: 'Rigid Boxes',      bg: '#f0ece4' },
  { name: 'Die Cut Boxes',                image: '/images/rigid/Die-Cut Rigid Boxes with Inserts.png',                                                                    href: '/products/rigid-boxes/die-cut-boxes',                             category: 'Rigid Boxes',      bg: '#f5f0e8' },

  // Cosmetic Boxes
  { name: 'Makeup Boxes',                 image: '/images/cosmetic/Custom Makeup Packaging Boxes.png',                                                                    href: '/products/cosmetic-boxes/makeup-boxes',                           category: 'Cosmetic Boxes',   bg: '#fdf0f5' },
  { name: 'Lip Balm Boxes',               image: '/images/cosmetic/Custom Lip Balm Packaging Boxes.png',                                                                  href: '/products/cosmetic-boxes/lip-balm-boxes',                         category: 'Cosmetic Boxes',   bg: '#fdf0f5' },
  { name: 'Cream Boxes',                  image: '/images/cosmetic/Custom Cream Packaging Boxes.png',                                                                     href: '/products/cosmetic-boxes/custom-printed-cream-boxes',             category: 'Cosmetic Boxes',   bg: '#fdf0f5' },
  { name: 'Serum Boxes',                  image: '/images/cosmetic/Custom Serum Packaging Boxes.png',                                                                     href: '/products/cosmetic-boxes/custom-serum-boxes',                     category: 'Cosmetic Boxes',   bg: '#fdf0f5' },
  { name: 'Lipstick Boxes',               image: '/images/cosmetic/Custom Lipstick Packaging Boxes.png',                                                                  href: '/products/cosmetic-boxes/lipstick-boxes',                         category: 'Cosmetic Boxes',   bg: '#fdf0f5' },
  { name: 'Cosmetic Display Boxes',       image: '/images/cosmetic/Custom Cosmetic Packaging Boxes.png',                                                                  href: '/products/cosmetic-boxes/custom-printed-cosmetic-display-boxes',  category: 'Cosmetic Boxes',   bg: '#fdf0f5' },
  { name: 'Hair Extension Boxes',         image: '/images/cosmetic/Straightway Pack your Hair Extension without any Stress into the Print Box.jpg.jpeg',                  href: '/products/cosmetic-boxes/hair-extension-boxes',                   category: 'Cosmetic Boxes',   bg: '#fdf0f5' },

  // Bakery Boxes
  { name: 'Cake Boxes',                   image: '/images/bakery/Custom Cake Boxes.png',                                                                                  href: '/products/bakery-boxes/cake-boxes',                               category: 'Bakery Boxes',     bg: '#fff8f0' },
  { name: 'Cookie Boxes',                 image: '/images/bakery/Custom Cookie Box.png',                                                                                  href: '/products/bakery-boxes/cookie-boxes',                             category: 'Bakery Boxes',     bg: '#fff8f0' },
  { name: 'Cupcake Boxes',                image: '/images/bakery/Custom Cupcake Boxes.jpg',                                                                               href: '/products/bakery-boxes/cupcake-packaging-boxes',                  category: 'Bakery Boxes',     bg: '#fff8f0' },
  { name: 'Donut Boxes',                  image: '/images/bakery/Custom Donut Boxes.png',                                                                                 href: '/products/bakery-boxes/donut-boxes',                              category: 'Bakery Boxes',     bg: '#fff8f0' },
  { name: 'Gable Boxes',                  image: '/images/bakery/Custom Gable Boxes.jpg',                                                                                 href: '/products/bakery-boxes/gable-boxes',                              category: 'Bakery Boxes',     bg: '#fff8f0' },
  { name: 'Pastry Boxes',                 image: '/images/bakery/Custom Pastry Packaging Boxes.png',                                                                      href: '/products/bakery-boxes/pastry-packaging-boxes',                   category: 'Bakery Boxes',     bg: '#fff8f0' },

  // Cigarette / Vape Boxes
  { name: 'CBD E-Cigarette Boxes',        image: '/images/cigarette/CBD CIGAREETE BOX.png',                                                                               href: '/products/cigarette-boxes/cbd-e-cigarette-boxes',                 category: 'Vape Boxes',       bg: '#eef5ee' },
  { name: 'Custom Vape Boxes',            image: '/images/cigarette/Custom Vape box.png',                                                                                 href: '/products/cigarette-boxes/custom-vape-boxes',                     category: 'Vape Boxes',       bg: '#eef5ee' },
  { name: 'THC Vape Boxes',               image: '/images/cigarette/Custom THC Vape Boxes.png',                                                                           href: '/products/cigarette-boxes/thc-vape-boxes',                        category: 'Vape Boxes',       bg: '#eef5ee' },
  { name: 'Custom E-Liquid Boxes',        image: '/images/cigarette/Custom E-Liquid Boxes.png',                                                                           href: '/products/cigarette-boxes/custom-e-liquid-boxes',                 category: 'Vape Boxes',       bg: '#eef5ee' },
  { name: 'Vape Pen Packaging',           image: '/images/cigarette/Custom Cigarette Packaging Boxes.png',                                                                href: '/products/cigarette-boxes/vape-pen-packaging',                    category: 'Vape Boxes',       bg: '#eef5ee' },

  // Dispenser & Burger
  { name: 'Dispenser Boxes',              image: '/images/dispenser/dispenser-main.jpeg',                                                                                 href: '/products/dispenser-boxes',                                       category: 'Dispenser Boxes',  bg: '#f5f5f2' },
  { name: 'Burger Boxes',                 image: '/images/burger/Buger Box MAIN PAGE.png',                                                                                href: '/products/burger-boxes',                                          category: 'Burger Boxes',     bg: '#fff6ee' },
]

const VISIBLE = 4
const AUTO_INTERVAL = 3000

export default function FeaturedPackaging() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = featuredProducts.length
  const maxIndex = total - VISIBLE

  const goTo = useCallback(
    (index: number) => {
      if (animating) return
      setAnimating(true)
      setCurrent(Math.max(0, Math.min(index, maxIndex)))
      setTimeout(() => setAnimating(false), 450)
    },
    [animating, maxIndex]
  )

  const next = useCallback(() => {
    goTo(current >= maxIndex ? 0 : current + 1)
  }, [current, maxIndex, goTo])

  const prev = useCallback(() => {
    goTo(current <= 0 ? maxIndex : current - 1)
  }, [current, maxIndex, goTo])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, AUTO_INTERVAL)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, next])

  const translateX = -(current * (100 / VISIBLE))
  const dotCount = Math.ceil((maxIndex + 1) / 4)
  const activeDot = Math.floor(current / 4)

  return (
    <section className="py-16 bg-[#fafaf8]" id="featured-packaging">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Featured Product{' '}
              <span className="text-orange-500">Packaging</span>
            </h2>
            <span className="hidden sm:block w-px h-7 bg-gray-300" />
            <p className="text-gray-500 text-sm">
              Discover packaging tailored for your products.{' '}
              <span className="text-gray-400">Can&apos;t find what you need?</span>
            </p>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-1 text-orange-500 font-semibold text-sm uppercase tracking-widest hover:text-orange-600 transition-colors whitespace-nowrap"
          >
            View All
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>

        {/* Carousel wrapper */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute -left-5 top-[45%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border-2 border-orange-400 shadow-md flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <ChevronLeft />
          </button>

          {/* Sliding track */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {featuredProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / VISIBLE}%` }}
                >
                  <Link
                    href={product.href}
                    className="group block rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300"
                  >
                    {/* Image */}
                    <div
                      className="relative w-full h-48 overflow-hidden"
                      style={{ backgroundColor: product.bg }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 80vw, 25vw"
                        className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Category badge */}
                      <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-500 text-white uppercase tracking-wide shadow">
                        {product.category}
                      </span>
                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-white">
                      <p className="font-semibold text-gray-900 text-sm leading-snug mb-1 group-hover:text-orange-500 transition-colors duration-200 line-clamp-2">
                        {product.name}
                      </p>
                      <span className="text-xs text-orange-500 font-medium tracking-wide">
                        Request a Quote
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute -right-5 top-[45%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border-2 border-orange-400 shadow-md flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i * 4)}
              aria-label={`Page ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                i === activeDot
                  ? 'bg-orange-500 w-6 scale-110'
                  : 'bg-orange-200 w-2 hover:bg-orange-300'
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-xs text-gray-400 mt-3">
          Showing {Math.min(current + VISIBLE, total)} of {total} products
        </p>
      </div>
    </section>
  )
}
