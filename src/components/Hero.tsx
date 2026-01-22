'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.fromTo(containerRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.5, delay: 2.5, ease: 'power3.out' }
        )
    }, [])

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div
                ref={containerRef}
                className="container relative z-10 px-6 text-center text-white"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    DRIVE <span className="text-[#25D366]">THE LEGEND.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Experience the pinnacle of luxury and performance in Gambia. No deposit required for loyal members.
                </p>


                <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 max-w-lg mx-auto flex items-center">
                    <input
                        type="text"
                        placeholder="Search a car (e.g. Mercedes, Tucson...)"
                        className="bg-transparent border-none text-white placeholder-gray-400 px-6 py-3 w-full focus:outline-none"
                    />
                    <button className="bg-[#25D366] text-black px-8 py-3 rounded-full font-bold hover:bg-[#20bd5a] transition-all">
                        SEARCH
                    </button>
                </div>
            </div>
        </section>
    )
}
