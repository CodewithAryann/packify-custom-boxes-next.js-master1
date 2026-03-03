import type { MetadataRoute } from 'next'
import { productsData } from '@/lib/products-data'
import { blogPosts } from '@/lib/blog-content'

const BASE = 'https://packifycustomboxes.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/get-quote/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/how-to-order/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/how-to-measure/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/artwork-guidelines/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/reviews/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/terms/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/privacy/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/refund-returns/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/shipping-policy/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  const productPages: MetadataRoute.Sitemap = Object.keys(productsData).map((slug) => {
    const product = productsData[slug as keyof typeof productsData]
    return {
      url: `${BASE}/products/${slug}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }
  })

  const variantPages: MetadataRoute.Sitemap = []
  Object.keys(productsData).forEach((slug) => {
    const product = productsData[slug as keyof typeof productsData]
    if ('variants' in product && Array.isArray(product.variants)) {
      product.variants.forEach((v: { name: string }) => {
        variantPages.push({
          url: `${BASE}/products/${slug}/${v.name.toLowerCase().replace(/\s+/g, '-')}/`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        })
      })
    }
  })

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...productPages, ...variantPages, ...blogPages]
}
