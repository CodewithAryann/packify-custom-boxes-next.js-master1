// lib/product-seo-content.ts

export const productSeoContent: Record<string, {
  h1: string
  h2: string
  description: string
  whyChoose: {
    title: string
    items: string[]
  }
  industries: {
    title: string
    items: string[]
  }
}> = {
  'mailer-boxes': {
    h1: 'Custom Mailer Boxes USA',
    h2: 'Self-Locking Shipping Boxes for E-Commerce & Subscription',
    description: 'Custom mailer boxes with tape-free self-lock closure. Corrugated or paperboard. Full-color printing inside and out. For e-commerce, subscription, and D2C shipping. No minimum order. Free US shipping. 8–10 day turnaround.',
    whyChoose: {
      title: 'Why Choose Our Mailer Boxes',
      items: [
        'Tape-free self-locking flaps',
        'Interior and exterior printing',
        'Corrugated, kraft, or white SBS',
        'No minimum order',
        'Free US shipping, 8–10 day production'
      ]
    },
    industries: {
      title: 'Perfect For',
      items: [
        'E-commerce and D2C brands',
        'Subscription box services',
        'Cosmetics and apparel',
        'Electronics and accessories',
        'Promotional kits and samples'
      ]
    }
  },
  'tuck-boxes': {
    h1: 'Custom Tuck Boxes USA',
    h2: 'Folding Cartons with Tuck-End Closure for Retail',
    description: 'Tuck boxes are folding cartons with flaps that tuck in to close—no glue or tape. Cosmetics, jewelry, supplements, small retail. SBS, kraft, recycled board. Full-color printing. No minimum. Free US shipping. 7–10 day production.',
    whyChoose: {
      title: 'Why Choose Our Tuck Boxes',
      items: [
        'Tuck closure—no glue or tape',
        'Fast assembly, under 10 seconds per box',
        'SBS, kraft, recycled board',
        'Full-color, foil, embossing',
        'No minimum order'
      ]
    },
    industries: {
      title: 'Perfect For',
      items: [
        'Cosmetics and skincare',
        'Jewelry and supplements',
        'Candles and electronics',
        'Food and pharma',
        'Small retail products'
      ]
    }
  },
  'rigid-boxes': {
    h1: 'Custom Rigid Boxes USA',
    h2: 'Luxury Chipboard Packaging for Jewelry, Cosmetics & Gifts',
    description: 'Rigid boxes use thick chipboard that holds its shape—non-collapsible. Wrapped in art paper, fabric, or leather. Magnetic closure, satin lining, foil stamping. Jewelry, watches, cosmetics, gifts. No minimum. Free US shipping.',
    whyChoose: {
      title: 'Why Choose Our Rigid Boxes',
      items: [
        'Thick chipboard (1200–1800 GSM)',
        'Magnetic closure, ribbon pull, two-piece',
        'Satin lining, velvet, foam inserts',
        'Foil, embossing, soft-touch',
        'No minimum order'
      ]
    },
    industries: {
      title: 'Ideal For',
      items: [
        'Jewelry and watches',
        'Luxury cosmetics',
        'Premium electronics',
        'Designer gifts',
        'Corporate gifting'
      ]
    }
  },
  'dispenser-boxes': {
    h1: 'Custom Dispenser Boxes USA',
    h2: 'Tear-Out & Flip-Top Retail Packaging',
    description: 'Dispenser boxes hold multiple units with controlled access—tear-out perforations or flip-top lid. Candy, gum, snacks, sachets, travel cosmetics. Stand-up shelf display. Food-safe options. No minimum. Free US shipping.',
    whyChoose: {
      title: 'Why Choose Our Dispenser Boxes',
      items: [
        'Tear-out or flip-top access',
        'Stand-up shelf display',
        'Cardboard or corrugated',
        'Food-safe options',
        'No minimum order'
      ]
    },
    industries: {
      title: 'Best Used For',
      items: [
        'Candy, gum, protein bars',
        'Tea bags and sachets',
        'Travel cosmetics',
        'Convenience and checkout',
        'Retail countertop'
      ]
    }
  },
  'cigarette-boxes': {
    h1: 'Custom Cigarette & Vape Boxes USA',
    h2: 'Compliant Tobacco and Nicotine Product Packaging',
    description: 'Custom cigarette and vape boxes. Health warning space, child-resistant options. For tobacco, e-cigarettes, vape pens, e-liquid, disposables. Compliant packaging. No minimum. Free US shipping.',
    whyChoose: {
      title: 'Why Choose Our Cigarette Boxes',
      items: [
        'Industry-standard dimensions',
        'Moisture-resistant materials',
        'High-quality offset printing',
        'Foil stamping available',
        'Tamper-evident features'
      ]
    },
    industries: {
      title: 'Applications',
      items: [
        'Tobacco products',
        'Herbal cigarettes',
        'Vape cartridges',
        'Rolling papers',
        'Specialty tobacco items'
      ]
    }
  },
  'burger-boxes': {
    h1: 'Custom Burger Boxes USA',
    h2: 'Grease-Resistant Takeout & Delivery Packaging',
    description: 'Keep your burgers fresh and presentation perfect with our custom burger boxes. Made from food-grade materials with grease-resistant coating, these boxes maintain quality during delivery while showcasing your brand to hungry customers.',
    whyChoose: {
      title: 'Why Choose Our Burger Boxes',
      items: [
        'Food-grade safe materials',
        'Grease and moisture resistant',
        'Keeps food hot and fresh',
        'Custom printed branding',
        'Eco-friendly options available'
      ]
    },
    industries: {
      title: 'Perfect For',
      items: [
        'Fast food restaurants',
        'Food trucks',
        'Cafes and diners',
        'Catering services',
        'Ghost kitchens'
      ]
    }
  },
  'magnetic-closure': {
    h1: 'Magnetic Closure Boxes',
    h2: 'Elegant Magnetic Closure Boxes for Premium Packaging',
    description: 'Experience luxury packaging with our magnetic closure boxes. Featuring strong embedded magnets for a satisfying closure, these boxes deliver a premium unboxing experience that enhances perceived product value and brand prestige.',
    whyChoose: {
      title: 'Why Choose Magnetic Closure Boxes',
      items: [
        'Premium magnetic closure system',
        'Reusable and durable design',
        'Luxury unboxing experience',
        'High-end finishing options',
        'Perfect for gift packaging'
      ]
    },
    industries: {
      title: 'Ideal For',
      items: [
        'Luxury jewelry',
        'High-end cosmetics',
        'Premium tech accessories',
        'Designer watches',
        'Exclusive gift sets'
      ]
    }
  },
  'cosmetic-boxes': {
    h1: 'Custom Cosmetic Boxes USA',
    h2: 'Makeup, Skincare & Beauty Packaging',
    description: 'Showcase your beauty products with our custom cosmetic boxes. Designed specifically for makeup, skincare, and beauty items, these boxes combine protective packaging with stunning visual appeal to attract customers and build brand loyalty.',
    whyChoose: {
      title: 'Why Choose Our Cosmetic Boxes',
      items: [
        'Beauty-focused design options',
        'UV coating and lamination',
        'Window cutout options',
        'Sustainable material choices',
        'Perfect for retail shelves'
      ]
    },
    industries: {
      title: 'Product Categories',
      items: [
        'Makeup and cosmetics',
        'Skincare products',
        'Perfumes and fragrances',
        'Hair care items',
        'Beauty tools and accessories'
      ]
    }
  }
}