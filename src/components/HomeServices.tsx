'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ContentService } from '@/services/content-service'
import ImageWithFallback from './ImageWithFallback'

export default function HomeServices() {
    const [content, setContent] = useState<any>(null)

    useEffect(() => {
        const fetchContent = async () => {
            const data = await ContentService.getPageContent('services')
            setContent(data)
        }
        fetchContent()
    }, [])

    if (!content) return null

    const services = [
        {
            id: 'rental',
            title: content.rental?.subtitle || 'Car Rental Services',
            description: content.rental?.description || 'Find the best Car Rentals in Gambia with Luxury Rentals.',
            image: content.rental?.image || '/services/freddy-g--e3Qdeqh_E4-unsplash.jpg',
            link: '/services#rental'
        },
        {
            id: 'chauffeur',
            title: content.chauffeur?.subtitle || 'Luxury Chauffeur Services',
            description: content.chauffeur?.description || 'Ride in style and elegance with our luxury chauffeur services in Gambia.',
            image: content.chauffeur?.image || '/services/thibault-penin-a8r2KKLSntA-unsplash.jpg',
            link: '/services#chauffeur'
        },
        {
            id: 'vip',
            title: content.vip?.subtitle || 'Drive Like a VIP',
            description: content.vip?.description || 'Rent Cars with VIP number plates in Gambia, unique Luxury symbols.',
            image: content.vip?.image || '/services/bornil-amin-L6Or6uTKKMg-unsplash.jpg',
            link: '/services#vip'
        }
    ]

    return (
        <section className="relative bg-white pb-32">
            <div className="container"> 
                <div className="relative bg-black rounded-[40px] mx-4 md:mx-10 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <ImageWithFallback
                        src="/home/home-service.webp"
                        alt="Hero background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black z-0" />

                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <h5 className="text-sm text-emerald-500 font-bold uppercase tracking-[0.2em] mb-2">Our Rental Services</h5>
                    <h2 className="text-4xl md:text-6xl font-light mb-4 max-w-4xl capitalize mx-auto leading-tight ">
                        {content.intro?.title || 'That Redefines Luxury Travel'}
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-4 capitalize font-light text-lg">
                        {content.intro?.summary || 'We specialize in Luxury Car hire across Gambia, creating complete Luxury experiences.'}
                    </p>
                    <Link
                        href="/services"
                        className="inline-block border border-white/30 px-10 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-bold uppercase text-sm"
                    >
                        View All
                    </Link>
                </div>
            </div>
            </div>

            <div className="container mx-auto px-6 -mt-24 md:-mt-32 relative z-20 top-20">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {services.map((service, idx) => (
                        <div key={idx} className="p-4 flex flex-col h-full group transition-transform duration-300">
                            <div className="relative h-[250px] w-full mb-6 rounded-[14px] overflow-hidden">
                                <ImageWithFallback
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                                />
                            </div>
                            <div className="flex flex-col grow">
                                <h3 className="text-2xl font-bold mb-2 text-black group-hover:text-gray-700 transition-colors line-clamp-1">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 mb-8 font-light leading-relaxed grow line-clamp-2">
                                    {service.description}
                                </p>
                                <Link
                                    href={service.link}
                                    className="text-black font-bold uppercase text-xs tracking-widest border-b border-black/10 pb-2 w-max hover:border-black transition-all"
                                >
                                    Know More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
