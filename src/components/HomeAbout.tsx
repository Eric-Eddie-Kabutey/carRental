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
                    <div className="relative h-[700px] md:h-[600px] w-full rounded-[40px] overflow-hidden group">

                        <ImageWithFallback
                            src="/vehicles/4runner.jpg"
                            alt="Pure Luxury background"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30" />


                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6 md:p-12">
                            <span className="text-emerald-500 text-sm font-bold uppercase tracking-[0.3em] mb-6">
                                About Easy Car Rental
                            </span>

                            <h2 className="text-4xl md:text-7xl font-light text-white uppercase mb-8 leading-tight">
                                Affordable Rides.<br />Reliable Service.
                            </h2>

                            <p className="text-gray-200 text-sm md:text-lg font-light max-w-3xl mb-10 leading-relaxed">
                                At Easy Car Rental, we make car hire simple, affordable, and stress-free.
                                Our vehicles are reliable, well-maintained, and ready for both family trips and business travel.
                                With real attention to detail and friendly support, we focus on getting you on the road quickly and safely—every time.
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
