'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQ {
    question: string
    answer: string
}

interface FAQAccordionProps {
    faqs: FAQ[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="max-w-5xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
                <div
                    key={idx}
                    className="faq-item bg-white border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 hover:border-black/30"
                >
                    <button
                        onClick={() => toggleAccordion(idx)}
                        className="faq-question w-full flex items-center justify-between text-left px-5 py-4 focus:outline-none bg-transparent"
                    >
                        <h4 className="text-[17px] md:text-[19px] font-medium text-gray-800">
                            {faq.question}
                        </h4>
                        <span className="flex-shrink-0 ml-4 transition-transform duration-300">
                            {openIndex === idx ? (
                                <Plus className="w-5 h-5 text-gray-400 rotate-45" />
                            ) : (
                                <Plus className="w-5 h-5 text-gray-400" />
                            )}
                        </span>
                    </button>

                    <div
                        className="faq-answer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                        style={{
                            maxHeight: openIndex === idx ? '500px' : '0px',
                            opacity: openIndex === idx ? 1 : 0
                        }}
                    >
                        <div className="px-5 pb-5">
                            <p className="text-[16px] text-gray-600 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
