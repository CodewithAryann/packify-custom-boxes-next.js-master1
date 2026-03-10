'use client'

import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2">
          <span className="text-black">Your Custom Packaging</span> <span className="text-orange-500">Partner</span>
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          USA-Based Custom Box Manufacturer — E-Commerce, Retail & Subscription Brands
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-gray-700">
              Packify Custom Boxes is a USA-based custom packaging manufacturer. We produce custom boxes with logo — mailer boxes, tuck boxes, rigid boxes, dispenser boxes, cosmetic boxes, and more — for e-commerce, retail, subscription, and D2C brands.
            </p>
            <p className="text-gray-700">
              From kraft mailers to luxury rigid gift boxes, we help you choose the right material, style, and print finish. Full-color CMYK printing, foil stamping, embossing, and custom sizing. No die or plate charges. Free design assistance.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✓</span>
                Custom printed boxes — logo, branding, full-color
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✓</span>
                Kraft, corrugated, paperboard — recyclable materials
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✓</span>
                No minimums — order from 1 unit
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✓</span>
                Free U.S. shipping · 8–10 day production · worldwide delivery
              </li>
            </ul>
            <div className="mt-4 flex flex-nowrap items-center gap-4 overflow-x-auto text-sm text-gray-700">
              <span className="font-medium">Global Operations:</span>
              {['us', 'cn', 'sa', 'gb', 'ae'].map((code) => (
                <Image
                  key={code}
                  src={`https://flagcdn.com/${code}.svg`}
                  alt={code}
                  width={24}
                  height={24}
                  className="rounded-sm border border-gray-300"
                />
              ))}
              <span className="font-medium ml-6">Logistics Partners:</span>
              <Image src="/images/images-removebg-preview.png" alt="USPS" width={50} height={20} />
              <Image src="/images/DHL-Symbol.png" alt="DHL" width={50} height={20} />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg"
                alt="FedEx"
                width={50}
                height={20}
              />
            </div>
          </div>

          <div
            className="relative w-full overflow-hidden rounded-[10px] shadow-lg"
            style={{ aspectRatio: '4 / 3' }}
          >
            <Image
              src="/images/WhatsApp Image 2025-08-05 at 11.11.00 PM.webp"
              alt="Custom Box"
              fill
              className="object-cover object-top rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}