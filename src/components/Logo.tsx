'use client'

import React from 'react'
import Link from 'next/link'

interface LogoProps {
    className?: string
    light?: boolean
}

export default function Logo({ className = '', light = true }: LogoProps) {
    return (
        <Link href="/" className={`flex items-center justify-center md:justify-start  gap-2 group ${className}`}>
            
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
                    text-[36px] font-bold tracking-widest uppercase leading-none
                    ${light ? 'text-white' : 'text-black'}
                `}>
                    Luxury
                </span>
                <span className={`
                    text-[22px] font-light tracking-[0.53em] uppercase leading-none
                    ${light ? 'text-emerald-500' : 'text-emerald-500'}
                `}>
                    Rentals
                </span>
            </div>
        </Link>
    )
}
