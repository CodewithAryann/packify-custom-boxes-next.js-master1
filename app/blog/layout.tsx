import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Packaging Blog | Custom Boxes Tips USA | Packify Custom Boxes',
  description: 'Expert packaging tips for USA brands. Eco-friendly trends, mailer vs rigid vs folding boxes, shipping costs, design tips. Free US shipping, no minimums.',
  keywords: 'custom packaging blog USA, eco-friendly packaging 2025, mailer vs rigid boxes, sustainable packaging, Packify Custom Boxes',
  alternates: { canonical: 'https://packifycustomboxes.com/blog/' },
  openGraph: {
    title: 'Packaging Blog | Custom Boxes Tips USA | Packify Custom Boxes',
    description: 'Expert packaging tips for USA brands. Eco-friendly trends, mailer vs rigid vs folding boxes. Free US shipping, no minimums.',
    url: 'https://packifycustomboxes.com/blog/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Packify Custom Boxes Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packaging Blog | Custom Boxes Tips USA | Packify Custom Boxes',
    description: 'Expert packaging tips for USA brands. Eco-friendly trends, mailer vs rigid boxes. Free US shipping, no minimums.',
    images: ['/images/og-image.jpg'],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
