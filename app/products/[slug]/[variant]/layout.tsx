import { Metadata } from 'next'
import { productsData } from '@/lib/products-data'
import { ProductSchema, FAQSchema } from '@/components/JsonLd'

type Props = { params: { slug: string; variant: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = (productsData as Record<string, any>)[params.slug]
  if (!product?.variants) return {}
  const variant = product.variants.find(
    (v: any) => v.name.toLowerCase().replace(/\s+/g, '-') === params.variant
  )
  if (!variant) return {}
  const title = `${variant.name} | ${product.title} | Packify Custom Boxes`
  const desc = variant.description || product.description || product.metaDescription
  const kw = product.keywords?.join(', ') || ''
  const url = `https://packifycustomboxes.com/products/${params.slug}/${params.variant}/`
  const ogImage = variant.image || product.mainImage
  return {
    title,
    description: desc,
    keywords: `${kw}, ${variant.name}, custom boxes USA, free US shipping, no minimums`,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      type: 'website',
      siteName: 'Packify Custom Boxes',
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${variant.name} - ${product.title}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [ogImage],
    },
  }
}

export async function generateStaticParams() {
  const params: { slug: string; variant: string }[] = []
  
  Object.keys(productsData).forEach((slug) => {
    const product = productsData[slug as keyof typeof productsData]
    if ('variants' in product && Array.isArray(product.variants)) {
      product.variants.forEach((variant: any) => {
        params.push({
          slug: slug,
          variant: variant.name.toLowerCase().replace(/\s+/g, '-')
        })
      })
    }
  })
  
  return params
}

export default async function ProductVariantLayout({ 
  children,
  params,
}: { 
  children: React.ReactNode
  params: { slug: string; variant: string }
}) {
  const product = (productsData as Record<string, any>)[params.slug]
  const variant = product?.variants?.find(
    (v: any) => v.name.toLowerCase().replace(/\s+/g, '-') === params.variant
  )
  const url = `https://packifycustomboxes.com/products/${params.slug}/${params.variant}/`
  const faqs = variant?.learnMoreSection?.faqs ?? []

  return (
    <>
      {variant && (
        <ProductSchema
          name={`${variant.name} | ${product.title}`}
          description={variant.description || product.description || product.metaDescription}
          image={variant.image || product.mainImage}
          url={url}
        />
      )}
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      {children}
    </>
  )
}