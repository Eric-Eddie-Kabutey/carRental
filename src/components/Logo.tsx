'use client'

import React from 'react'
import Link from 'next/link'

interface LogoProps {
    className?: string
    light?: boolean
}

export default function Logo({ className = '', light = true }: LogoProps) {
    return (
        <Link href="/" className={`flex items-center gap-2 group ${className}`}>
            
            {/* group-hover:bg-[#25D366]/10 group-hover:border-[#25D366]/30 */}
            {/* <div className={`
                flex items-center justify-center 
                transition-all duration-700 
            `}>
                <span className={`
                    text-[40px] font-mono italic tracking-tighter font-bold
                    ${light ? 'text-white' : 'text-black'}
                `}>
                    LR
                </span>
            </div> */}

            <div className="flex flex-col justify-center">
                <span className={`
                    text-[26px] font-bold tracking-[0.1em] uppercase leading-none
                    ${light ? 'text-white' : 'text-black'}
                `}>
                    Luxury
                </span>
                <span className={`
                    text-[12px] font-light tracking-[0.9em] uppercase leading-none
                    ${light ? 'text-[#25D366]' : 'text-[#1a9a4b]'}
                `}>
                    Rentals
                </span>
            </div>
        </Link>
    )
}
