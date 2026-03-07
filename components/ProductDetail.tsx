'use client'

import Image from 'next/image'
import { Product } from '@/lib/products-data'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <section className="Products col-span-1">
      <h1 className="text-4xl font-extrabold mb-6 text-orange-600">
        Custom {product.title} USA
      </h1>
      
      <div className="relative w-full h-[350px] overflow-hidden rounded-xl mb-6 bg-[#f7f4ef]">
        <Image
          src={product.mainImage}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>
      
      <p className="text-gray-700 text-lg mb-8">
        {product.description}
      </p>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
        {product.features.map((feature, index) => (
          <div key={index}>
            <Image
              src={`/images/${getFeatureIcon(feature)}.webp`}
              alt={feature}
              width={32}
              height={32}
              className="mx-auto"
            />
            <p className="mt-2 text-gray-600">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function getFeatureIcon(feature: string): string {
  const iconMap: Record<string, string> = {
    'Fast Turnaround': 'clock',
    'Full Color Printing': 'paint-swatch',
    'Design Support': 'paint-palette',
    'Free Shipping': 'delivery',
  }
  return iconMap[feature] || 'clock'
}