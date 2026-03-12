'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === '/') {
      e.preventDefault()
      const element = document.querySelector(id)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const companyLinks = [
    { label: 'Products', href: '/products' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: pathname === '/' ? '#quote' : '/#quote', scroll: '#quote' },
    { label: 'Refund & Returns', href: '/refund-returns' },
    { label: 'Shipping Policy', href: '/shipping-policy' },
    { label: 'Reviews', href: '/reviews' },
  ]

  const helpLinks = [
    { label: 'How to Order', href: '/how-to-order' },
    { label: 'FAQ', href: pathname === '/' ? '#faqs' : '/#faqs', scroll: '#faqs' },
    { label: 'Artwork Guidelines', href: '/artwork-guidelines' },
    { label: 'How to Measure a Box', href: '/how-to-measure' },
    { label: 'Blog', href: '/blog' },
  ]

  const productLinks = [
    { label: 'Mailer Boxes', href: '/products/mailer-boxes' },
    { label: 'Tuck Boxes', href: '/products/tuck-boxes' },
    { label: 'Rigid Boxes', href: '/products/rigid-boxes' },
    { label: 'Dispenser Boxes', href: '/products/dispenser-boxes' },
    { label: 'Cosmetic Boxes', href: '/products/cosmetic-boxes' },
    { label: 'Bakery Boxes', href: '/products/bakery-boxes' },
  ]

  return (
    <footer className="relative text-white overflow-hidden rounded-t-[2.5rem]"
      style={{ background: 'linear-gradient(160deg, #ea6a00 0%, #f97316 40%, #ea6a00 100%)' }}
    >
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}
      />

      {/* Glow orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-900/30 rounded-full blur-[80px] pointer-events-none" />

      {/* Top shimmer line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* ── CTA Banner ── */}
      <div className="relative z-10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-1">Start Today</p>
            <h3 className="text-2xl md:text-3xl font-black text-white drop-shadow-sm">
              Ready to box your brand?
            </h3>
            <p className="text-sm text-white/70 mt-1">No minimums · Free U.S. shipping · 8–10 day turnaround</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-900/30 hover:bg-orange-50 text-sm"
            >
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm backdrop-blur-sm"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand — spans 2 cols */}
        <div className="lg:col-span-2 flex flex-col items-start">
          <div className="mb-5">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-3xl font-black tracking-tight text-white drop-shadow-sm">Packify Custom Boxes</span>
              {/* <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80 border border-white/30 px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm">
                Custom Boxes
              </span> */}
            </div>
            <p className="text-[11px] text-white/50 tracking-widest uppercase mt-1.5 font-medium">
              House of Premium Packaging
            </p>
          </div>

          <p className="text-sm text-white/75 leading-relaxed max-w-sm mb-7">
            USA-based custom packaging manufacturer serving e-commerce, retail, and D2C brands worldwide.
            Full-color printing, foil stamping, embossing — no die charges, free design support.
          </p>

          {/* Stats */}
          {/* <div className="flex gap-6 mb-7 p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm w-full max-w-xs">
            {[
              { value: '3,000+', label: 'Brands' },
              { value: '50M+', label: 'Boxes' },
              { value: '4.9★', label: 'Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center flex-1">
                <p className="text-lg font-black text-white">{stat.value}</p>
                <p className="text-[10px] text-white/55 uppercase tracking-wider mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div> */}

          {/* Socials */}
          <div className="flex gap-3">
            {[
              { href: 'https://www.instagram.com/packifycustomboxes', icon: 'fab fa-instagram', label: 'Instagram' },
              { href: 'https://www.facebook.com/people/Packifycustomboxes/61581915925085/#', icon: 'fab fa-facebook-f', label: 'Facebook' },
              { href: 'https://wa.me/+971561210175', icon: 'fa-brands fa-whatsapp', label: 'WhatsApp' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-orange-500 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <i className={`${s.icon} text-sm`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 mb-5">Products</h3>
          <ul className="space-y-3">
            {productLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-white/0 group-hover:bg-white transition-all duration-200 flex-shrink-0" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 mb-5">Company</h3>
          <ul className="space-y-3">
            {companyLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={item.scroll ? (e) => handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>, item.scroll!) : undefined}
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-white/0 group-hover:bg-white transition-all duration-200 flex-shrink-0" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help + Contact */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 mb-5">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={item.scroll ? (e) => handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>, item.scroll!) : undefined}
                    className="text-sm text-white/80 hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/0 group-hover:bg-white transition-all duration-200 flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 mb-5">Contact</h3>
            <ul className="space-y-3.5">
              <li>
                <a href="tel:+12132248421" className="text-sm text-white/80 hover:text-white transition-colors flex items-start gap-2.5 group">
                  <span className="w-7 h-7 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-orange-500 transition-all">
                    <i className="fas fa-phone text-[10px]"></i>
                  </span>
                  +1 213-224-8421
                </a>
              </li>
              <li>
                <a href="mailto:packifycustomboxes@gmail.com" className="text-sm text-white/80 hover:text-white transition-colors flex items-start gap-2.5 group break-all">
                  <span className="w-7 h-7 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-orange-500 transition-all">
                    <i className="fas fa-envelope text-[10px]"></i>
                  </span>
                  packifycustomboxes@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="fas fa-map-marker-alt text-[10px]"></i>
                </span>
                <span className="text-sm text-white/80 leading-relaxed">
                  30 N Gould St Ste N,<br />Sheridan, WY 82801 USA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Trust Bar ── */}
      <div className="relative z-10 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Global Ops</span>
              <div className="w-px h-3 bg-white/20" />
              {['us', 'cn', 'sa', 'gb', 'ae'].map((code) => (
                <Image
                  key={code}
                  src={`https://flagcdn.com/${code}.svg`}
                  alt={code}
                  width={22}
                  height={16}
                  className="rounded-sm border border-white/20 opacity-80 hover:opacity-100 transition"
                />
              ))}
            </div>

            <div className="hidden md:block h-5 w-px bg-white/20" />

            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Logistics</span>
              <div className="w-px h-3 bg-white/20" />
              <Image src="/images/images-removebg-preview.png" alt="USPS" width={46} height={18} className="opacity-70 hover:opacity-100 transition brightness-0 invert" />
              <Image src="/images/DHL-Symbol.png" alt="DHL" width={46} height={18} className="opacity-70 hover:opacity-100 transition brightness-0 invert" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg" alt="FedEx" width={46} height={18} className="opacity-70 hover:opacity-100 transition brightness-0 invert" />
            </div>

            <div className="hidden md:block h-5 w-px bg-white/20" />

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Payments</span>
              <div className="w-px h-3 bg-white/20" />
              <Image src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" width={34} height={34} className="opacity-80 hover:opacity-100 transition" />
              <Image src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" width={34} height={34} className="opacity-80 hover:opacity-100 transition" />
              <Image src="https://img.icons8.com/color/48/000000/paypal.png" alt="Paypal" width={34} height={34} className="opacity-80 hover:opacity-100 transition" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="relative z-10 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © 2026 <span className="text-white/80 font-semibold">Packify Custom Boxes</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/50">
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="w-px h-3 bg-white/20" />
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}