import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import TrustedBy from '@/components/TrustedBy'
import { FAQSchema } from '@/components/JsonLd'
import { homepageFaqs } from '@/lib/faqs'
import ProductGrid from '@/components/ProductGrid'
import FeaturesHighlight from '@/components/FeaturesHighlight'
import CustomBoxForm from '@/components/CustomBoxForm'
import WhyChooseUs from '@/components/WhyChooseUs'
import HowItWorks from '@/components/HowItWorks'
import WhyCustomBoxes from '@/components/WhyCustomBoxes'
import FAQSection from '@/components/FAQSection'
import BlogPreview from '@/components/BlogPreview'
import QuoteForm from '@/components/QuoteForm'
import Testimonials from '@/components/Testimonials'
import PromoBanner from '@/components/PromoBanner'

export const metadata: Metadata = {
  alternates: { canonical: 'https://packifycustomboxes.com/' },
  openGraph: {
    url: 'https://packifycustomboxes.com/',
    title: 'Custom Packaging Boxes | Custom Boxes with Logo | Wholesale USA',
    description: 'Custom packaging boxes for e-commerce, retail & subscription brands. Mailer, tuck, rigid boxes. No die charges. Free design. No minimum order. Free US shipping.',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Packify Custom Boxes - Custom Packaging USA' }],
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://packifycustomboxes.com/',
    title: 'Custom Packaging Boxes | Wholesale USA',
    description: 'Custom packaging boxes. No die charges. Free design. No minimum order. Free US shipping.',
  },
}

export default function Home() {
  return (
    <>
      <FAQSchema faqs={homepageFaqs} />
      <Hero />      
      <TrustedBy />
      <ProductGrid />
      <AboutSection />
      <FeaturesHighlight />
      <CustomBoxForm />
      {/* <WhyChooseUs /> */}
      <HowItWorks />
      {/* <WhyCustomBoxes /> */}
      <FAQSection />
      <QuoteForm />
      <Testimonials />
      <BlogPreview />
      {/* <PromoBanner/>       */}
    </>
  )
}