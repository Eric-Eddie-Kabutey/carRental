'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

interface SignatureServicesProps {
    data: {
        rental: any
        chauffeur: any
        vip: any
    }
}

export default function SignatureServices({ data }: SignatureServicesProps) {
    const { rental, chauffeur, vip } = data

    return (
        <section className="py-20 bg-black overflow-hidden px-4 md:px-10">
            <div className="relative h-[800px] md:h-[600px] w-full rounded-[40px] overflow-hidden group">
                {/* Background Image */}
                <Image
                    src="/home/home-service.webp"
                    alt="Signature Services"
                    fill
                    className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Grid */}
                <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3">
                    {/* Left Column */}
                    <div className="md:col-span-2 flex flex-col">
                        {/* Top: Title & Intro */}
                        <AnimateOnScroll animation="fade-in-up" className="p-8 md:p-16 flex-grow border-b border-white/10 md:border-b-0 md:border-r border-white/10">
                            <div className="max-w-md">
                                <h2 className="text-4xl md:text-6xl font-light text-white mb-6 uppercase tracking-tight">
                                    Our Signature <br /> Services
                                </h2>
                                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                                    Welcome to Luxury Rentals, where every journey becomes a statement!
                                    We offer tailored Luxury Services for Supercar Rentals, VIP Transfers, & Chauffeur Services in Gambia.
                                </p>
                            </div>
                        </AnimateOnScroll>

                        {/* Bottom: Car & VIP Side-by-Side */}
                        <div className="grid grid-cols-1 md:grid-cols-2 flex-shrink-0 border-t border-white/10">
                            <AnimateOnScroll animation="fade-in-up" delay={200} className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-3">{rental?.subtitle || 'Luxury Car Rental Services'}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                    {rental?.description || 'Find the best Luxury Car Rentals in Gambia with Luxury Rentals. Choose from our premium fleet.'}
                                </p>
                                <Link
                                    href="/cars"
                                    className="inline-block border border-white/30 rounded-full px-8 py-2 text-xs font-bold text-white hover:bg-white hover:text-black transition-all"
                                >
                                    Hire a Car
                                </Link>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fade-in-up" delay={400} className="p-8 md:p-12 hover:bg-white/5 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-3">{vip?.subtitle || 'Luxury VIP Services'}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                    {vip?.description || 'Rent Cars with VIP number plates in Gambia, unique Luxury symbols that turn any drive into a statement.'}
                                </p>
                                <Link
                                    href="/cars"
                                    className="inline-block border border-white/30 rounded-full px-8 py-2 text-xs font-bold text-white hover:bg-white hover:text-black transition-all"
                                >
                                    Experience VIP
                                </Link>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    {/* Right Column */}
                    <AnimateOnScroll animation="fade-in-left" delay={600} className="p-8 md:p-16 bg-black/20 backdrop-blur-sm flex flex-col border-t md:border-t-0 border-white/10 hover:bg-white/5 transition-colors">
                        <div className="flex-grow">
                            <h3 className="text-2xl md:text-3xl font-light text-white mb-6 uppercase">
                                {chauffeur?.subtitle || 'Luxury Chauffeur Services'}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8">
                                {chauffeur?.description || 'At Luxury Rentals, we excel at Luxury Travel. Our top-notch Luxury Chauffeur Services provide unparalleled elegance for every trip in Gambia.'}
                            </p>
                        </div>
                        <Link
                            href="/cars"
                            className="w-full text-center border border-white/30 rounded-full py-4 text-sm font-bold text-white hover:bg-white hover:text-black transition-all"
                        >
                            Hire a Chauffeur
                        </Link>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    )
}
