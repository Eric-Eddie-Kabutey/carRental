'use client'

import React from 'react'
import ImageWithFallback from './ImageWithFallback'
import Link from 'next/link'
import WhyUs from '@/components/WhyUs'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function HomeAbout() {
    return (
        <section className="bg-black pt-20">
            <div className="container mx-auto px-6 mb-20">
                <AnimateOnScroll animation="fade-in-up">
                    <div className="relative h-[500px] md:h-[600px] w-full rounded-[40px] overflow-hidden group">
                        
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&w=1920&q=80"
                            alt="Pure Luxury background"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6 md:p-12">
                            <span className="text-white/70 text-sm font-bold uppercase tracking-[0.3em] mb-6">About Luxury Rentals</span>
                            <h2 className="text-4xl md:text-7xl font-light text-white uppercase mb-8 leading-tight">
                                Pure Luxury.<br />Pure Perfection.
                            </h2>
                            <p className="text-gray-200 text-sm md:text-lg font-light max-w-3xl mb-10 leading-relaxed">
                                At Luxury Rentals, we turn Luxury Car hire into customized experiences that we design with family-level love.
                                We provide Gambia's safest and fastest rental services through real attention to detail, creating stunning relationships with every customer.
                            </p>
                            <Link
                                href="/about"
                                className="inline-block border border-white text-white px-10 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                            >
                                Know More
                            </Link>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>

            <WhyUs dark={true} />
        </section>
    )
}
