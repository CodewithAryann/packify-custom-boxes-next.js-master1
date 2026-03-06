'use client'

import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Mailer Boxes',
    description: 'Custom mailer boxes for e-commerce and subscription shipping. Self-locking, tape-free. Full-color printing inside and out. Corrugated or paperboard. Ideal for D2C, apparel, cosmetics.',
    image: '/images/WhatsApp_Image_2025-08-05_at_3.48.16_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.48.17_AM-removebg-preview.webp',
    href: '/products/mailer-boxes',
  },
  {
    id: 2,
    name: 'Tuck Boxes',
    description: 'Custom tuck boxes for cosmetics, jewelry, supplements, and retail. Folding cartons with tuck flaps. Cost-effective, fast assembly. Full-color printing, window cutouts, kraft or white board.',
    image: '/images/WhatsApp_Image_2025-08-05_at_3.24.40_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.24.39_AM-removebg-preview.webp',
    href: '/products/tuck-boxes',
  },
  {
    id: 3,
    name: 'Rigid Boxes',
    description: 'Luxury rigid boxes for jewelry, watches, cosmetics, and gifts. Chipboard construction. Magnetic closure, satin lining. Foil stamping, embossing. Reusable keepsake packaging.',
    image: '/images/WhatsApp_Image_2025-08-05_at_3.57.58_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.57.58_AM__1_-removebg-preview.webp',
    href: '/products/rigid-boxes',
  },
  {
    id: 4,
    name: 'Dispenser Boxes',
    description: 'Dispenser boxes for snacks, supplements, and retail. Tear-out perforations or flip-top lid. Controlled dispensing. Corrugated or paperboard. Custom printed for brand visibility.',
    image: '/images/Dispenser-1.webp',
    hoverImage: '/images/Dispenser-2.webp',
    href: '/products/dispenser-boxes',
  },
  {
    id: 5,
    name: 'Cigarette Boxes',
    description: 'Custom cigarette and vape boxes. Compliant packaging for tobacco and nicotine products. Health warning space, child-resistant options. For dispensaries, retailers, and brands.',
    image: '/images/Cigarette-1.webp',
    hoverImage: '/images/Cigarette-2.webp',
    href: '/products/cigarette-boxes',
  },
  {
    id: 6,
    name: 'Burger Boxes',
    description: 'Custom burger boxes for restaurants, food trucks, and delivery. Grease-resistant, FDA-compliant. Full-color printing. Sizes for sliders, singles, combos. Eco-friendly kraft options.',
    image: '/images/WhatsApp_Image_2025-08-05_at_4.12.26_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_4.12.27_AM-removebg-preview.webp',
    href: '/products/burger-boxes',
  },
  {
    id: 7,
    name: 'Magnetic Closure',
    description: 'Magnetic closure boxes for jewelry, watches, cosmetics, and gifts. Neodymium magnets. Rigid chipboard. Soft-touch, foil stamping. Reusable luxury packaging.',
    image: '/images/WhatsApp_Image_2025-08-05_at_3.37.56_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.37.56_AM__1_-removebg-preview.webp',
    href: '/products/magnetic-closure',
  },
  {
    id: 8,
    name: 'Cosmetic Boxes',
    description: 'Custom cosmetic boxes for makeup, skincare, and beauty. Tuck, rigid, or mailer styles. Window cutouts, foil, embossing. Retail and e-commerce ready.',
    image: '/images/WhatsApp_Image_2025-08-05_at_3.43.00_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.43.00_AM__1_-removebg-preview.webp',
    href: '/products/cosmetic-boxes',
  },
  {
    id: 9,
    name: 'Bakery Boxes',
    description: 'Custom bakery boxes for bread, pastries, and baked goods. Compliant packaging for food safety. Print options for branding and product information.',
    image: '/images/bakery/Bakery Box MAIN PAGE.jpg',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.49.00_AM__1_-removebg-preview.webp',
    href: '/products/bakery-boxes',
  },
]

export default function ProductGrid() {
  return (
    <section className="type py-16 bg-white" id="type">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-4">
          <span className="text-black">Custom Boxes</span> by Style
        </h2>
        <p className="text-black text-lg mb-12 max-w-3xl mx-auto">
          Mailer boxes for e-commerce and subscription shipping. Tuck boxes for cosmetics and retail. Rigid boxes for luxury and gifts. Choose the style that fits your product and industry.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 hover:ring-2 hover:ring-orange-300"
            >
              <div className="relative w-full h-48 overflow-hidden group bg-[#f7f4ef]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                />
                <Image
                  src={product.hoverImage}
                  alt={`${product.name} Hover`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="p-5 text-left">
                <p className="text-xl text-black font-semibold mb-2">{product.name}</p>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}