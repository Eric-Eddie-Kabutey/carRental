'use client'

import React from 'react'
import Link from 'next/link'
import ImageWithFallback from './ImageWithFallback'

interface LogoProps {
    className?: string
    light?: boolean
}

export default function Logo({ className = '', light = true }: LogoProps) {
    return (
        <Link href="/" className={`flex items-center gap-3 group ${className}`}>
            <div className="relative w-36 h-auto flex items-center justify-center">
                <ImageWithFallback
                    src="/logo.svg"
                    alt="Luxury Rentals Logo"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* <div className="flex flex-col justify-center">
                <span className={`
                    text-xl md:text-2xl font-bold tracking-[0.05em] uppercase leading-none
                    ${light ? 'text-white' : 'text-black'}
                `}>
                    Luxury
                </span>
                <span className={`
                    text-[10px] md:text-[11px] font-medium tracking-[0.4em] uppercase mt-1
                    ${light ? 'text-[#25D366]' : 'text-[#1a9a4b]'}
                `}>
                    Rentals
                </span>
            </div> */}
        </Link>
    )
}
