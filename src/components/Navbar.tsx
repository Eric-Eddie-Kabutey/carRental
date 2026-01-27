'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from '@/components/Logo'
import { Menu, X, MessageCircle } from 'lucide-react'
import { ContentService } from '@/services/content-service'

export default function Navbar() {
    const pathname = usePathname()
    const isHomePage = pathname === '/'
    const [isVisible, setIsVisible] = useState(!isHomePage)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [whatsappLink, setWhatsappLink] = useState('#')

    useEffect(() => {
        const fetchSocial = async () => {
            const links = await ContentService.getSocialLinks()
            const wa = links.find(l => l.name === 'whatsapp')?.href || '#'
            setWhatsappLink(wa)
        }
        fetchSocial()
    }, [])

    useEffect(() => {
        if (isHomePage) {
            const handleVideoReady = () => setIsVisible(true)
            window.addEventListener('app-video-ready', handleVideoReady)
            return () => window.removeEventListener('app-video-ready', handleVideoReady)
        } else {
            setIsVisible(true)
        }
    }, [isHomePage])

    // Close menu when pathname changes
    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    const navLinks = [
        { name: 'OUR SERVICES', href: '/#services' },
        { name: 'ABOUT US', href: '/about' },
        { name: 'OUR FLEET', href: '/cars' },
    ]

    return (
        <nav
            className={`fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 text-white transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                {/* Logo */}
                <Logo />

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`hover:text-emerald-500 transition-colors ${pathname === link.href ? 'text-emerald-500' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="hidden md:flex items-center gap-2 bg-emerald-500 text-white px-5 py-2.5 rounded-full font-bold text-sm tracking-wide hover:bg-emerald-600 transition-all"
                    >
                        <span>WHATSAPP US</span>
                    </a>

                    <button
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed w-full h-[calc(100vh-6rem)] top-24 bg-black backdrop-blur-md z-50 md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}
            >
                <div className="flex flex-col h-full p-8 gap-8">
                    <div className="flex flex-col justify-center items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                // onClick={() => setIsMenuOpen(false)}
                                className={`text-2xl font-bold tracking-tighter hover:text-emerald-500 transition-colors ${pathname === link.href ? 'text-emerald-500' : 'text-white'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="pt-12">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-3 bg-emerald-500 text-white w-full py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20"
                        >
                            <MessageCircle className="w-6 h-6" />
                            <span>WHATSAPP US</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
