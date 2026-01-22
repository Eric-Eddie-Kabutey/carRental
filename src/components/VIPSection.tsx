'use client'

import React from 'react'
import ImageWithFallback from './ImageWithFallback'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function VIPSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <AnimateOnScroll animation="fade-in-left" className="order-2 md:order-1">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-light text-black uppercase mb-4">Drive Like a VIP</h2>
                                <h3 className="text-2xl md:text-3xl font-light text-gray-500 uppercase">Rent Cars with VIP Number Plates</h3>
                            </div>
                            <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                                Rent Cars with VIP number plates in Gambia, unique Luxury symbols that turn any drive into a statement.
                                These highly demanded plates are more than just numbers—they are status symbols and conversation starters that demand respect and attention anywhere you go.
                            </p>
                            <Link
                                href="/cars"
                                className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-emerald-500 transition-colors"
                            >
                                Rent a VIP Car
                            </Link>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade-in-right" delay={200} className="order-1 md:order-2">
                        <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
                            <ImageWithFallback
                                src="/ilya-godze-4jd8GtBpIhM-unsplash.jpg"
                                alt="VIP Number Plate"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    )
}
