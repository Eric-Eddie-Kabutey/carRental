'use client'

import React from 'react'
import ImageWithFallback from './ImageWithFallback'

interface Brand {
    name: string
    file: string
}

interface BrandCarouselProps {
    brands: Brand[]
    isHome?: boolean
}

export default function BrandCarousel({ brands, isHome = false }: BrandCarouselProps) {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className={`container mx-auto px-6 mb-12 text-center ${isHome ? '' : 'hidden'}`}>
                <h2 className="text-3xl md:text-5xl font-light text-black">
                    <span className="">Rent Your Favorite Luxury Brand</span>
                </h2>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-scroll">
                    <div className="flex gap-6 px-3">
                        {brands.map((brand) => (
                            <BrandCard key={`set1-${brand.name}`} brand={brand} />
                        ))}
                    </div>
                    <div className="flex gap-6 px-3">
                        {brands.map((brand) => (
                            <BrandCard key={`set2-${brand.name}`} brand={brand} />
                        ))}
                    </div>
                </div>

 
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-white-50 pointer-events-none" />
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-white-50 pointer-events-none" />
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    )
}

function BrandCard({ brand }: { brand: { name: string, file: string } }) {
    return (
        <div className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] flex-shrink-0 bg-white border border-gray-200 rounded-[20px] flex items-center justify-center p-6 hover:shadow-lg hover:border-black transition-all duration-300 cursor-pointer group">
            <div className="relative w-full h-full flex items-center justify-center">
                <ImageWithFallback
                    src={`/brands/${brand.file}`}
                    alt={brand.name}
                    className="object-contain max-w-full max-h-full group-hover:scale-110 transition-transform duration-300"
                    style={{ width: 'auto', height: 'auto' }}
                />
            </div>
        </div>
    )
}
