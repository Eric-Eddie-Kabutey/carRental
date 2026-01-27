'use client'

import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'

interface Testimonial {
    id: string
    name: string
    content: string
    rating: number
    date: string
}

interface ReviewsCarouselProps {
    testimonials: Testimonial[]
}

export default function ReviewsCarousel({ testimonials }: ReviewsCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2

            scrollRef.current.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            })
        }
    }

    if (!testimonials || testimonials.length === 0) return null

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container">
                <div className=" flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <AnimateOnScroll animation="fade-in-left">
                        <h2 className="text-4xl md:text-6xl font-light text-gray-900 uppercase tracking-tight">
                            Customer <br /> Reviews
                        </h2>
                    </AnimateOnScroll>

                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="group w-14 h-14 rounded-full border border-gray-900 flex items-center justify-center hover:bg-gray-900 transition-all cursor-pointer"
                            aria-label="Previous review"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-900 group-hover:text-white " />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="group w-14 h-14 rounded-full border border-gray-900 flex items-center justify-center hover:bg-gray-900 transition-all cursor-pointer"
                            aria-label="Next review"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-900 group-hover:text-white " />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((review, idx) => (
                        <div
                            key={review.id}
                            className="min-w-[300px] md:min-w-[450px] snap-start bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col h-full"
                        >
                            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-0 md:items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold text-xl uppercase">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 leading-none mb-1">{review.name}</h4>
                                        <p className="text-gray-400 text-xs uppercase tracking-widest">{review.date}</p>
                                    </div>
                                </div>
                                <div className="flex gap-0.5 text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            fill={i < review.rating ? "currentColor" : "none"}
                                            className={i < review.rating ? "" : "text-gray-200"}
                                        />
                                    ))}
                                </div>
                            </div>

                            <p className="text-gray-600 font-light leading-relaxed grow italic">
                                "{review.content}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    )
}
