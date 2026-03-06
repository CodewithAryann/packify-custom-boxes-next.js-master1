'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  // { name: 'Why Choose Us', href: '#choose' },
  { name: 'How it Works', href: '#it-works' },
  { name: 'Blog', href: '/blog' },
  { name: 'Request a Quote', href: '/get-quote' },
]

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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  // Smooth scroll handler for ?scrollTo= queries
  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo')
    if (scrollTo) {
      const el = document.querySelector(scrollTo)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [searchParams])

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (pathname === '/') {
        const el = document.querySelector(href)
        el?.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push(`/?scrollTo=${href}`)
      }
    } else {
      router.push(href)
    }
    setMobileMenuOpen(false)
    setDropdownOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md text-white shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between lg:px-[64px] lg:py-[18px]">
        {/* Logo */}
       <div
  className="flex items-center gap-2 cursor-pointer select-none"
  onClick={() => handleNavClick('/')}
  role="link"
  aria-label="Go to homepage"
>
  {/* Logo Image */}
  <img
    src="/images/navbar-logo.png"   
    alt="Packify CustomBoxes Logo"
    className="w-10 h-10 object-contain"
  />

  {/* Text */}
  <div className="text-xl sm:text-2xl font-bold">
    Packify<span className="text-orange-500">CustomBoxes</span>
  </div>
</div>


        {/* Hamburger Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10 p-2 rounded-md hover:bg-white/10 transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
            }`}
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center font-medium">
          {navLinks.map((link) =>
            link.name === 'Products' ? (
              <div key={link.name} className="group relative">
                <button className="flex items-center gap-1 hover:text-orange-400 transition">
                  {link.name}
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                  {boxTypes.map((box) => (
                    <button
                      key={box.name}
                      onClick={() => handleNavClick(box.href)}
                      className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                    >
                      {box.name}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-orange-400 transition"
              >
                {link.name}
              </button>
            )
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed left-0 w-full bg-black/60 backdrop-blur-md text-white transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? 'opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-3 text-lg font-medium">
          {navLinks.map((link) =>
            link.name === 'Products' ? (
              <div key={link.name} className="w-full">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex justify-center items-center gap-1 py-2 hover:text-orange-400 transition"
                >
                  {link.name}
                  <svg
                    className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="flex flex-col bg-white text-gray-800 rounded-lg overflow-hidden transition-all duration-300">
                    {boxTypes.map((box) => (
                      <button
                        key={box.name}
                        onClick={() => handleNavClick(box.href)}
                        className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                      >
                        {box.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="block w-full hover:text-orange-400 transition"
              >
                {link.name}
              </button>
            )
          )}
        </div>
      </div>
    </header>
  )
}
