'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        gsap.fromTo(containerRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.5, delay: 2.5, ease: 'power3.out' }
        )
    }, [])

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/cars?search=${encodeURIComponent(searchQuery.trim())}`)
        } else {
            router.push('/cars')
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div
                ref={containerRef}
                className="container relative z-10 px-6 text-center text-white"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    DRIVE <span className="text-emerald-500">THE LEGEND.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Experience the pinnacle of luxury and performance in Gambia. No deposit required for loyal members.
                </p>


                <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 max-w-lg mx-auto flex items-center shadow-2xl">
                    <input
                        type="text"
                        placeholder="Search a car (e.g. Mercedes, Tucson...)"
                        className="bg-transparent border-none text-white placeholder-gray-400 px-6 py-3 w-full focus:outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-emerald-500 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-600 transition-all active:scale-95"
                    >
                        SEARCH
                    </button>
                </div>
            </div>
        </section>
    )
}
