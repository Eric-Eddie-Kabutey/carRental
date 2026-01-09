'use client'

import React from 'react'
import Link from 'next/link'
import FAQSection from '@/components/FAQSection'
import ServiceDetailsBlock from '@/components/ServiceDetailsBlock'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import ImageWithFallback from '@/components/ImageWithFallback'

interface ServicesViewProps {
    pageContent: any
    faqs: any[]
}

export default function ServicesView({ pageContent, faqs }: ServicesViewProps) {
    const { hero, intro, rental, chauffeur, vip } = pageContent

    return (
        <main className="bg-white min-h-screen text-black">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                {hero?.image && (
                    <ImageWithFallback
                        src={hero.image}
                        alt="Services Banner"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
                    <AnimateOnScroll animation="fade-in-up">
                        <h1 className="text-4xl md:text-7xl font-light mb-4 tracking-tight uppercase">
                            {hero?.title || 'Services'}
                        </h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade-in-up" delay={200}>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light">
                            {hero?.subtitle}
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 md:py-32 bg-white">
                <AnimateOnScroll animation="fade-in-up">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-5xl font-light text-[#333] max-w-4xl mx-auto leading-tight mb-8">
                            {intro?.title}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {intro?.summary}
                        </p>
                    </div>
                </AnimateOnScroll>
            </section>

            {/* Service Details Blocks */}
            <AnimateOnScroll animation="fade-in-up">
                <ServiceDetailsBlock
                    id="rental"
                    {...rental}
                    theme="black"
                />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up">
                <ServiceDetailsBlock
                    id="chauffeur"
                    {...chauffeur}
                    theme="dark"
                    reverse
                />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up">
                <ServiceDetailsBlock
                    id="vip"
                    {...vip}
                    theme="light"
                />
            </AnimateOnScroll>

            <FAQSection faqs={faqs} />
        </main>
    )
}
