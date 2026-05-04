import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleSchema } from '@/components/JsonLd'
import { blogPosts } from '@/lib/blog-content'
import BlogPostClient from '@/components/BlogPostClient'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Blog Post Not Found' }

  const url = `https://packifycustomboxes.com/blog/${params.slug}/`
  const title = post.seoTitle || `${post.title} | Packify Custom Boxes Blog`

  return {
    metadataBase: new URL('https://packifycustomboxes.com'),
    title,
    description: post.metaDescription || post.excerpt,
    keywords: 'custom packaging, eco-friendly packaging, packaging tips, Packify Custom Boxes, mailer boxes, rigid boxes, USA custom boxes',
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.metaDescription || post.excerpt,
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
      description: post.metaDescription || post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <>
      <ArticleSchema
        title={post.title}
        excerpt={post.excerpt}
        image={post.image}
        url={`https://packifycustomboxes.com/blog/${params.slug}/`}
        datePublished={post.date}
        author={post.author}
      />
      <BlogPostClient post={post} />
    </>
  )
}
