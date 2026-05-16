// components/ProductSpecsTable.tsx

import React from 'react'

export interface SpecRow {
  label: string
  value: string
}

interface Props {
  specs?: SpecRow[]
  productSlug?: string
}

// Default specs per product – these are overridden when a variant passes its own
const defaultSpecs: Record<string, SpecRow[]> = {
  'mailer-boxes': [
    { label: 'Box Style', value: 'Mailer / Shipping Box' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: '18pt to 32pt Corrugated, Kraft, White SBS' },
    { label: 'Printing', value: 'No Printing, CMYK, CMYK + 1 PMS, CMYK + 2 PMS' },
    { label: 'Finishing', value: 'Gloss Lamination, Matte Lamination, Gloss AQ, Spot UV, Embossing, Foiling' },
    { label: 'Included Options', value: 'Die Cutting, Gluing, Scored, Perforation' },
    { label: 'Additional Options', value: 'Eco-Friendly, Recycled Boxes, Biodegradable' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '8 – 10 Business Days, RUSH' },
    { label: 'Shipping', value: 'FREE (Continental US)' },
  ],
  'tuck-boxes': [
    { label: 'Box Style', value: 'Tuck End / Folding Carton' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: '12pt to 24pt SBS, Kraft, Recycled Board' },
    { label: 'Printing', value: 'No Printing, CMYK, CMYK + 1 PMS, CMYK + 2 PMS' },
    { label: 'Finishing', value: 'Gloss Lamination, Matte Lamination, Gloss AQ, Gloss UV, Matte UV, Spot UV, Embossing, Foiling' },
    { label: 'Included Options', value: 'Die Cutting, Gluing, Scored, Perforation' },
    { label: 'Additional Options', value: 'Eco-Friendly, Recycled Boxes, Biodegradable' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '7 – 10 Business Days, RUSH' },
    { label: 'Shipping', value: 'FREE (Continental US)' },
  ],
  'rigid-boxes': [
    { label: 'Box Style', value: 'Rigid / Set-Up Box' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: '10pt to 28pt (60lb to 400lb) Eco-Friendly Kraft, E-flute Corrugated, Bux Board, Cardstock' },
    { label: 'Printing', value: 'No Printing, CMYK, CMYK + 1 PMS color, CMYK + 2 PMS colors' },
    { label: 'Finishing', value: 'Gloss Lamination, Matte Lamination, Gloss AQ, Gloss UV, Matte UV, Spot UV, Embossing, Foiling' },
    { label: 'Included Options', value: 'Die Cutting, Gluing, Scored, Perforation' },
    { label: 'Additional Options', value: 'Eco-Friendly, Recycled Boxes, Biodegradable' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '4 – 8 Business Days, RUSH' },
    { label: 'Shipping', value: 'FLAT' },
  ],
  'dispenser-boxes': [
    { label: 'Box Style', value: 'Counter Display / Dispenser Box' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: '14pt to 24pt SBS, E-Flute Corrugated, Kraft' },
    { label: 'Printing', value: 'No Printing, CMYK, CMYK + 1 PMS, CMYK + 2 PMS' },
    { label: 'Finishing', value: 'Gloss Lamination, Matte Lamination, Gloss AQ, Spot UV, Embossing, Foiling' },
    { label: 'Included Options', value: 'Die Cutting, Gluing, Scored, Perforation, Tear Strip' },
    { label: 'Additional Options', value: 'Eco-Friendly, Recycled Boxes, Biodegradable' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '8 – 12 Business Days, RUSH' },
    { label: 'Shipping', value: 'FREE (Continental US)' },
  ],
  'cigarette-boxes': [
    { label: 'Box Style', value: 'Cigarette / Vape / E-Cigarette Box' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: '12pt to 24pt SBS, Kraft, Recycled Board' },
    { label: 'Printing', value: 'No Printing, CMYK, CMYK + 1 PMS, CMYK + 2 PMS' },
    { label: 'Finishing', value: 'Gloss Lamination, Matte Lamination, Matte UV, Spot UV, Embossing, Foil Stamping' },
    { label: 'Included Options', value: 'Die Cutting, Gluing, Scored, Child-Resistant Options' },
    { label: 'Additional Options', value: 'Eco-Friendly, Recycled, Health Warning Space, Compliance Labeling' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '7 – 10 Business Days, RUSH' },
    { label: 'Shipping', value: 'FREE (Continental US)' },
  ],
  'burger-boxes': [
    { label: 'Box Style', value: 'Burger / Food Service Box' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: 'Food-Grade SBS, Kraft, Grease-Resistant Paperboard' },
    { label: 'Printing', value: 'No Printing, CMYK, CMYK + 1 PMS, CMYK + 2 PMS (Food-Safe Inks)' },
    { label: 'Finishing', value: 'Gloss AQ, Matte Lamination, Spot UV' },
    { label: 'Included Options', value: 'Die Cutting, Gluing, Grease-Resistant Coating' },
    { label: 'Additional Options', value: 'Eco-Friendly, Compostable, Recycled Materials' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '7 – 10 Business Days, RUSH' },
    { label: 'Shipping', value: 'FREE (Continental US)' },
  ],
  'magnetic-closure': [
    { label: 'Box Style', value: 'Magnetic Closure / Rigid Gift Box' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: '24pt to 36pt Chipboard, Wrapped Rigid Board' },
    { label: 'Printing', value: 'No Printing, CMYK, CMYK + 1 PMS, CMYK + 2 PMS' },
    { label: 'Finishing', value: 'Gloss Lamination, Matte Lamination, Soft-Touch, Spot UV, Embossing, Hot Foil Stamping' },
    { label: 'Included Options', value: 'Embedded Magnets, Ribbon Pull, Foam Insert, Satin Liner' },
    { label: 'Additional Options', value: 'Eco-Friendly Wrapping, Custom Inserts, Logo Debossing' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '10 – 14 Business Days, RUSH' },
    { label: 'Shipping', value: 'FREE (Continental US)' },
  ],
  'cosmetic-boxes': [
    { label: 'Box Style', value: 'Cosmetic / Beauty Box' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: '12pt to 24pt SBS, Kraft, Recycled Board' },
    { label: 'Printing', value: 'No Printing, CMYK, CMYK + 1 PMS, CMYK + 2 PMS' },
    { label: 'Finishing', value: 'Gloss Lamination, Matte Lamination, Soft-Touch, Spot UV, Embossing, Foiling, Window Cutout' },
    { label: 'Included Options', value: 'Die Cutting, Gluing, Scored, Perforation' },
    { label: 'Additional Options', value: 'Eco-Friendly, Recycled, Biodegradable, UV Coating' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '7 – 10 Business Days, RUSH' },
    { label: 'Shipping', value: 'FREE (Continental US)' },
  ],
  'bakery-boxes': [
    { label: 'Box Style', value: 'Bakery / Food Box' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'From 100 Units' },
    { label: 'Stock', value: 'FDA-Compliant Paperboard, Grease-Resistant Coating, Kraft, Recycled Board' },
    { label: 'Printing', value: 'CMYK, CMYK + 1 PMS, CMYK + 2 PMS (Food-Safe Inks)' },
    { label: 'Finishing', value: 'Gloss AQ, Matte Lamination, Spot UV, Window Cutout (PET Film)' },
    { label: 'Included Options', value: 'Die Cutting, Gluing, Cupcake Inserts, Donut Trays, Dividers' },
    { label: 'Additional Options', value: 'Eco-Friendly, Compostable, Recycled Board' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '7 – 10 Business Days' },
    { label: 'Shipping', value: 'FREE (Continental US)' },
  ],
}

export default function ProductSpecsTable({ specs, productSlug }: Props) {
  const rows = specs ?? (productSlug ? defaultSpecs[productSlug] : undefined)

  if (!rows || rows.length === 0) return null

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Product Specification
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'} hover:bg-orange-50/40 transition-colors`}
                >
                  <td className="px-8 py-4 w-1/3">
                    <span className="font-semibold text-gray-900 text-sm md:text-base">
                      {row.label}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-gray-600 text-sm md:text-base">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer CTA */}
        <div className="bg-orange-50 border-t border-orange-100 px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-gray-600">
            Need custom dimensions or special finishes?{' '}
            <span className="font-semibold text-gray-900">We manufacture to your exact specs.</span>
          </p>
          <a
            href="/get-quote"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap shadow-md"
          >
            Get a Free Quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
