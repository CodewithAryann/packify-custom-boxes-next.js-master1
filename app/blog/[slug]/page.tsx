import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleSchema } from '@/components/JsonLd'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/lib/blog-content'

type Props = {
  params: { slug: string }
}

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Blog Post Not Found' }
  const url = `https://packifycustomboxes.com/blog/${params.slug}/`
  const title = `${post.title} | Packify Custom Boxes Blog`
  return {
    title,
    description: post.excerpt,
    keywords: 'custom packaging, eco-friendly packaging, packaging tips, Packify Custom Boxes, mailer boxes, rigid boxes, USA custom boxes',
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.excerpt,
      url,
      type: 'article',
      siteName: 'Packify Custom Boxes',
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      authors: [post.author],
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) notFound()

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3)

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <ArticleSchema
        title={post.title}
        excerpt={post.excerpt}
        image={post.image}
        url={`https://packifycustomboxes.com/blog/${params.slug}/`}
        datePublished={post.date}
        author={post.author}
      />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-[6rem] pb-6">
        <nav className="flex items-center gap-2 text-sm text-gray-600" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <span className="text-gray-400">›</span>
          <Link href="/blog" className="hover:text-orange-600 transition-colors">Blog</Link>
          <span className="text-gray-400">›</span>
          <span className="font-semibold text-gray-900 truncate max-w-[180px] sm:max-w-none">
            {post.title}
          </span>
        </nav>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-16">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-500 text-sm mb-8">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <Image src={post.image} alt={post.title} fill priority className="object-cover" />
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed">
          {post.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{section.h2}</h2>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>

        {/* Mid-article backlinks */}
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

        {/* Product links CTA from post data */}
        {post.productLinks && post.productLinks.length > 0 && (
          <div className="mt-12 p-6 bg-orange-50 rounded-2xl border border-orange-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Explore our custom packaging</h3>
            <div className="flex flex-wrap gap-3">
              {post.productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-orange-600 font-medium rounded-lg shadow-sm border border-orange-200 hover:bg-orange-100 hover:border-orange-300 transition-colors"
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

        {/* Bottom backlinks grid */}
        <div className="mt-14 pt-8 border-t border-gray-200 space-y-6">
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-3">You might also be interested in:</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {boxTypes.slice(1).map((box) => (
                <Link
                  key={box.href}
                  href={box.href}
                  className="flex items-center px-4 py-3 bg-white border border-gray-100 rounded-xl hover:border-orange-300 hover:shadow-sm hover:text-orange-600 text-gray-700 font-medium text-sm transition-all"
                >
                  {box.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image src={r.image} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{r.excerpt}</p>
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