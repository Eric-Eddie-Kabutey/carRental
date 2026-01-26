'use client'

import React from 'react'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'

interface WhyUsProps {
    dark?: boolean
}

export default function WhyUs({ dark = false }: WhyUsProps) {
    const features = [
        {
            icon: '/whyUs/cars.webp',
            title: 'Luxury Cars for Rent in Gambia',
            desc: 'Luxury Cars and VIP rentals suitable for family and business use.'
        },
        {
            icon: '/whyUs/top-rating.webp',
            title: 'Top Rated Car Rental Service in Gambia',
            desc: 'Building lasting relationships through exceptional service.'
        },
        {
            icon: '/whyUs/247-black.svg',
            title: '24/7 Cars Available for Rent in Gambia',
            desc: 'Instant booking with 24/7 service assistance.'
        },
        {
            icon: '/whyUs/map-black.svg',
            title: 'Luxury Car Rental Services Available Throughout Gambia',
            desc: 'Enjoy seamless doorstep delivery across the Gambia.'
        }
    ]

    return (
        <section className={`py-24 ${dark ? 'bg-black' : 'bg-white'}`}>
            <div className="container mx-auto px-6">
                <h3 className={`text-4xl md:text-5xl font-light capitalize text-center mb-20 ${dark ? 'text-white' : 'text-black'}`}>
                    Why should you rent a car with us?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {features.map((feature, idx) => (
                        <AnimateOnScroll key={idx} animation="fade-in-up" delay={idx * 100}>
                            <div className="flex flex-col items-center">
                                <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={64}
                                        height={64}
                                        className={`object-contain ${dark ? 'brightness-0 invert' : 'brightness-0'}`}
                                    />
                                </div>
                                <h4 className={`text-xl font-bold mb-4 leading-snug capitalize line-clamp-2 ${dark ? 'text-white' : 'text-black'}`}>
                                    {feature.title}
                                </h4>
                                <p className={`text-sm font-light leading-relaxed max-w-[250px] capitalize line-clamp-2 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {feature.desc}
                                </p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    )
}
