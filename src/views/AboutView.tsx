'use client'

import React from 'react'
import ImageWithFallback from '@/components/ImageWithFallback'
import Link from 'next/link'
import BrandCarousel from '@/components/BrandCarousel'
import SignatureServices from '@/components/SignatureServices'
import WhyUs from '@/components/WhyUs'
import VIPSection from '@/components/VIPSection'
import FAQSection from '@/components/FAQSection'
import AnimateOnScroll from '@/components/AnimateOnScroll'

interface AboutViewProps {
    brands: any[]
    servicesData: any
    faqs: any[]
}

export default function AboutView({ brands, servicesData, faqs }: AboutViewProps) {
    return (
        <main className="bg-white min-h-screen text-black overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[80vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <ImageWithFallback
                    src="/bornil-amin-zWF4s53USyc-unsplash.jpg"
                    alt="Luxury Fleet"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
                    <AnimateOnScroll animation="fade-in-up" delay={500}>
                        <h1 className="text-5xl md:text-8xl font-light mb-6 tracking-tight uppercase max-w-5xl leading-tight">
                            Best in Luxury Car <br className="hidden md:block" /> Rentals in Gambia
                        </h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade-in-up" delay={800}>
                        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                            Luxury Rentals delivers premium luxury cars, and chauffeur services in Gambia. We're committed to providing unforgettable experiences that combine sophistication and reliability.
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Brands Section */}
            <div className="py-20 bg-white">
                <h2 className="text-center text-sm font-bold text-black-400 uppercase tracking-widest mb-12">
                    Book Your Premium Car from Top Car Rental Brands
                </h2>
                <BrandCarousel brands={brands} />
            </div>

            {/* Our Journey Section */}
            <section className="py-24 md:py-32 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <AnimateOnScroll animation="fade-in-left">
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-2">Our Journey</h2>
                                <h3 className="text-5xl md:text-7xl font-light text-black uppercase">How we began</h3>
                            </div>
                            <div className="space-y-6 text-gray-600 text-lg md:text-xl font-light leading-relaxed">
                                <p>
                                    A team of Luxury Enthusiasts and Hospitality experts founded Luxury Rentals with the aim to provide the highest quality service with the most premium vehicles in the market to our customers.
                                </p>
                                <p>
                                    We started as a Boutique Car Rental and soon grew into a trusted provider of Chauffeured experiences. Our team has ensured that Luxury Rentals becomes synonymous with reliability, discretion and obsession for customer satisfaction.
                                </p>
                                <p>
                                    As the best luxury car service in Gambia, we create memorable experiences with a focus on luxury and personalization.
                                </p>
                            </div>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade-in-right" delay={200}>
                        <div className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl">
                            <ImageWithFallback
                                src="/vehicles/erik-mclean-lv4FWmDfb4Y-unsplash.jpg"
                                alt="Luxury Car Close-up"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <WhyUs />

            {/* Signature Services Section */}
            <SignatureServices data={servicesData} />

            {/* VIP Number Plate Section */}
            <VIPSection />

            {/* FAQ Section */}
            <FAQSection faqs={faqs} />
        </main>
    )
}
