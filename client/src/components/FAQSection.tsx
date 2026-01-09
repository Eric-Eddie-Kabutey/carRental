'use client'

import React from 'react'
import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'
import AnimateOnScroll from '@/components/AnimateOnScroll'

interface FAQ {
    question: string
    answer: string
}

interface FAQSectionProps {
    faqs: FAQ[]
    title?: string
    subtitle?: string
}

export default function FAQSection({
    faqs,
    title = "Frequently Asked Questions",
    subtitle = "Got questions? We've got answers to help you navigate your rental experience in Gambia!"
}: FAQSectionProps) {
    if (!faqs || faqs.length === 0) return null

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <AnimateOnScroll animation="fade-in-up">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-light mb-4 text-black">{title}</h2>
                        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block border border-gray-400 px-8 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white hover:border-black transition-all text-black"
                        >
                            Help Center
                        </Link>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in-up" delay={200}>
                    <div className="max-w-5xl mx-auto">
                        <FAQAccordion faqs={faqs} />
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    )
}
