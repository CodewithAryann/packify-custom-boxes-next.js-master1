'use client'

import Image from 'next/image'

const logos = [
  { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Walmart', src: '/images/logo-vector-graphics-brand-walmart-portable-network-graphics-png-favpng-RNmwyt5haE5GzqfvtZfVWaRk3-removebg-preview.webp' },
  { name: 'FedEx', src: '/images/133-1330613_fedex-logo-vector-by-windytheplaneh-on-deviantart-fedex-logo-vector-by-windytheplaneh-removebg-preview.webp' },
  { name: 'Starbucks', src: '/images/Starbucks_Corporation_Logo_2011.svg-100.webp' },
  { name: 'Maison Velours', src: '/images/maison.png' },
  { name: 'Lindt Lindor', src: '/images/lindor.png' },
  { name: 'Barilla', src: '/images/barilla.png' },
]

export default function TrustedBy() {
  return (
    <section className="py-12 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="overflow-hidden relative w-full py-6">
          <div className="flex animate-scroll space-x-12">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain transition duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}