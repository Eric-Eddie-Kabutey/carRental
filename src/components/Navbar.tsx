'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from '@/components/Logo'

export default function Navbar() {
    const pathname = usePathname()
    const isHomePage = pathname === '/'
    const [isVisible, setIsVisible] = useState(!isHomePage)

    useEffect(() => {
        if (isHomePage) {
            const timer = setTimeout(() => {
                setIsVisible(true)
            }, 2500)
            return () => clearTimeout(timer)
        } else {
            setIsVisible(true)
        }
    }, [isHomePage])

    return (
        <nav
            className={`fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 text-white transition-opacity duration-[2000ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Logo />

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
                    <Link href="/services" className="hover:text-[#25D366] transition-colors">OUR SERVICES</Link>
                    <Link href="/about" className="hover:text-[#25D366] transition-colors">ABOUT US</Link>
                    <Link href="/cars" className="hover:text-[#25D366] transition-colors">OUR FLEET</Link>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://wa.me/971500000000"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden md:flex items-center gap-2 bg-[#25D366] text-black px-5 py-2.5 rounded-full font-bold text-sm tracking-wide hover:bg-[#20bd5a] transition-all"
                    >
                        <span>WHATSAPP US</span>
                    </a>

                    {/* Mobile Menu Button , I Dont Want To Do This */}
                    <button className="md:hidden text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}
