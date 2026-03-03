'use client'

import { useState } from 'react'
import { homepageFaqs } from '@/lib/faqs'

const faqs = homepageFaqs

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-500 mb-4">
          <span className="text-black">FAQs on</span> Custom Packaging Boxes
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Common questions about ordering, pricing, artwork, samples, and delivery.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border rounded-lg overflow-hidden"
              open={openIndex === index}
            >
              <summary
                className="flex justify-between items-center cursor-pointer p-4 text-lg font-semibold text-gray-800 hover:bg-gray-50 list-none [&::-webkit-details-marker]:hidden"
                onClick={(e) => {
                  e.preventDefault()
                  toggleFAQ(index)
                }}
              >
                {faq.question}
                <span className={`ml-2 text-orange-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </summary>
              <div className={`px-4 pb-4 ${openIndex !== index ? 'sr-only' : ''}`}>
                <p className="mt-0 text-gray-600">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}