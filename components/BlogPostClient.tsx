'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BlogPost, blogPosts } from '@/lib/blog-content'

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

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const [activeSection, setActiveSection] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[data-section-idx]')
      let current = 0
      sections.forEach((el, i) => {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 160) current = i
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (idx: number) => {
    const el = document.querySelector(`section[data-section-idx="${idx}"]`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="bg-white min-h-screen">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-[6rem] pb-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-orange-600 transition-colors">Blog</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight max-w-4xl">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-gray-500 text-sm mb-6">
          <span className="font-medium text-gray-700">{post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readTime}
          </span>
        </div>
        <div className="relative h-64 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-xl mb-0">
          <Image src={post.image} alt={post.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex gap-10 items-start">

          {/* TOC Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-28 self-start">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Table of Contents</p>
              </div>
              <nav className="px-3 py-3 space-y-1">
                {post.sections.map((section, i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 leading-snug ${
                      activeSection === i
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {section.h2}
                  </button>
                ))}
              </nav>
            </div>

            {/* Sidebar CTA */}
            <div className="mt-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-5 text-white shadow-lg">
              <h3 className="font-bold text-base mb-2">Ready to Order?</h3>
              <p className="text-xs text-white/85 mb-4 leading-relaxed">
                Get a free quote on custom packaging tailored to your brand.
              </p>
              <Link
                href="/get-quote"
                className="inline-block w-full text-center bg-white text-orange-600 font-bold text-sm py-2.5 rounded-xl hover:bg-orange-50 transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </aside>

          {/* Article Body */}
          <article className="flex-1 min-w-0">
            <div className="space-y-10">
              {post.sections.map((section, i) => (
                <section
                  key={i}
                  data-section-idx={i}
                  className="scroll-mt-32"
                >
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {section.h2}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {section.content}
                  </p>

                  {/* Inline product links at midpoint */}
                  {i === Math.floor(post.sections.length / 2) - 1 && post.productLinks && (
                    <div className="mt-6 p-5 bg-orange-50 border border-orange-100 rounded-xl">
                      <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">Explore Our Packaging</p>
                      <div className="flex flex-wrap gap-2">
                        {post.productLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-orange-600 border border-orange-200 rounded-full text-sm font-medium hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-colors"
                          >
                            {link.text}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Product backlinks pill grid */}
            <div className="my-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Our Packaging Products</p>
              <div className="flex flex-wrap gap-2">
                {boxTypes.map((box) => (
                  <Link
                    key={box.href}
                    href={box.href}
                    className="px-3 py-1.5 bg-white text-sm text-gray-700 border border-gray-200 rounded-full hover:text-orange-600 hover:border-orange-300 transition-colors shadow-sm"
                  >
                    {box.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="my-10 relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-8 py-10 text-white shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <svg viewBox="0 0 200 200" fill="none">
                  <circle cx="150" cy="50" r="120" stroke="white" strokeWidth="1" />
                  <circle cx="150" cy="50" r="80" stroke="white" strokeWidth="1" />
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3 leading-tight">
                  Elevate Your Brand With Custom Packaging
                </h3>
                <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed max-w-md">
                  Stand out on every shelf and doorstep. Get packaging designed for your brand — free shipping, no minimums.
                </p>
                <Link
                  href="/get-quote"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-lg text-sm"
                >
                  Start Today
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Author Bio */}
            <div className="my-10 flex items-start gap-5 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Author</p>
                <h4 className="font-bold text-gray-900 text-base mb-2">{post.author}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A packaging industry expert at Packify Custom Boxes. With deep knowledge of custom packaging solutions, materials, and trends, they help businesses make smarter packaging decisions that elevate brand presence and protect products.
                </p>
              </div>
            </div>

            {/* Product CTA links */}
            {post.productLinks && post.productLinks.length > 0 && (
              <div className="mt-10 p-6 bg-orange-50 rounded-2xl border border-orange-100">
                <h3 className="text-base font-bold text-gray-900 mb-4">Explore our custom packaging</h3>
                <div className="flex flex-wrap gap-3">
                  {post.productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-orange-600 font-medium rounded-lg shadow-sm border border-orange-200 hover:bg-orange-100 hover:border-orange-300 transition-colors text-sm"
                    >
                      {link.text}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to blog */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </article>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Related Posts</h2>
              <Link href="/blog" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1">
                More Related Posts
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-orange-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <span>{r.author}</span>
                      <span>·</span>
                      <span>{r.readTime}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2 mb-2 text-sm md:text-base">
                      {r.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{r.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
