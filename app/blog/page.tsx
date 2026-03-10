'use client'

import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/lib/blog-content'

const boxTypes = [
  { name: 'View All Products', href: '/products' },
  { name: 'Mailer Boxes', href: '/products/mailer-boxes' },
  { name: 'Tuck Boxes', href: '/products/tuck-boxes' },
  { name: 'Rigid Boxes', href: '/products/rigid-boxes' },
  { name: 'Dispenser Boxes', href: '/products/dispenser-boxes' },
  { name: 'Cigarette Boxes', href: '/products/cigarette-boxes' },
  { name: 'Burger Boxes', href: '/products/burger-boxes' },
  { name: 'Magnetic Closure', href: '/products/magnetic-closure' },
  { name: 'Cosmetic Boxes', href: '/products/cosmetic-boxes' },
  { name: 'Bakery Boxes', href: '/products/bakery-boxes' },
]

export default function BlogPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 text-white py-24 pt-[8rem]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block text-orange-200/90 text-sm font-semibold mb-4">Resources & Guides</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Packaging Insights & Trends
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
            Expert advice, industry trends, and practical tips to help you make better packaging decisions.
          </p>
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-orange-200">
            <Link href="/" className="hover:text-white transition-colors underline underline-offset-2">Home</Link>
            <span>›</span>
            <span className="text-white font-medium">Blog</span>
          </div>
        </div>
      </section>

      {/* Internal Navigation Pills */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-2">
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="text-gray-500 font-medium self-center">Browse:</span>
          {boxTypes.map((box) => (
            <Link
              key={box.href}
              href={box.href}
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-orange-600 hover:border-orange-300 transition-colors shadow-sm"
            >
              {box.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-sm group/link"
                >
                  <span>Read Full Article</span>
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </article>
          ))}
        </div>
      </section>

      {/* Product Backlinks Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Browse Our Custom Packaging Products</h2>
          <p className="text-sm text-gray-500 mb-6">Free U.S. shipping · No minimums · 8–10 day turnaround</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {boxTypes.map((box) => (
              <Link
                key={box.href}
                href={box.href}
                className="flex items-center justify-center text-center px-3 py-3 bg-white rounded-xl border border-gray-100 hover:border-orange-300 hover:shadow-md hover:text-orange-600 text-gray-700 font-medium text-sm transition-all"
              >
                {box.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get a custom quote for your packaging needs today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
            >
              <span>Request a Quote</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border border-white/20 transition-all duration-300 hover:scale-105"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}