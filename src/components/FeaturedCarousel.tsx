'use client'

import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import VehicleCard, { Vehicle } from '@/components/VehicleCard'

interface FeaturedCarouselProps {
    vehicles: Vehicle[]
}

export default function FeaturedCarousel({ vehicles }: FeaturedCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        let scrollAmount = 0
        const speed = 1
        let animationId: number

        const scroll = () => {
            if (isHovered) {
                animationId = requestAnimationFrame(scroll)
                return
            }

            scrollAmount += speed

            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                scrollContainer.scrollLeft = 0
            } else {
                scrollContainer.scrollLeft += speed
            }

            animationId = requestAnimationFrame(scroll)
        }

        animationId = requestAnimationFrame(scroll)

        return () => cancelAnimationFrame(animationId)
    }, [isHovered])

    const scrollManual = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="pb-20 pt-40 bg-white">
            <div className="container mx-auto px-6">

                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl md:text-5xl font-normal text-black">
                        <span className="">Our Luxury Cars For Rent</span>
                    </h2>
                    <Link
                        href="/cars"
                        className="hidden md:flex items-center text-black gap-2 px-8 py-3 rounded-full border border-black font-bold hover:bg-black hover:text-white transition-all"
                    >
                        View All
                    </Link>
                </div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Scroll Buttons */}
                    {/* <button
                        onClick={() => scrollManual('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => scrollManual('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button> */}

                    {/* Scroll Area */}
                    <div
                        ref={scrollRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-12 hide-scrollbar scroll-smooth snap-x snap-mandatory items-stretch"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {vehicles.slice(0, 4).map((car) => (
                            <div key={car.id} className="min-w-full md:min-w-[auto] snap-center flex">
                                <VehicleCard vehicle={car} />
                            </div>
                        ))}
                    </div>


                    {/* <div className="flex justify-start gap-4">
                        <button
                            onClick={() => scrollManual("left")}
                            className="group w-12 h-12 bg-white border-1 border-gray-900 hover:bg-gray-900 rounded-full flex items-center justify-center transition-all"
                        >
                            <ChevronLeft className="w-5 h-5 stroke-[2] stroke-gray-900 group-hover:stroke-white transition-colors" />
                        </button>

                        <button
                            onClick={() => scrollManual("right")}
                            className="group w-12 h-12 bg-white border-1 border-gray-900 hover:bg-gray-900 rounded-full flex items-center justify-center transition-all"
                        >
                            <ChevronRight className="w-5 h-5 stroke-[2] stroke-gray-900 group-hover:stroke-white transition-colors" />
                        </button>
                    </div> */}

                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/cars"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-black font-bold hover:bg-black hover:text-white transition-all"
                    >
                        View All Cars
                    </Link>
                </div>
            </div>
        </section>
    )
}
