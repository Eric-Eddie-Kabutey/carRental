'use client'

import React from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { Instagram, Youtube, Facebook } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-[#111] text-white pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Logo Column */}
                    <div className="flex flex-col gap-6">
                        <Logo />
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Our Cars</Link></li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Connect With Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className='flex items-center gap-2'> <Instagram className="w-5 h-5" /> <a href="https://instagram.com" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">Instagram</a></li>
                            <li className='flex items-center gap-2'><Youtube className="w-5 h-5" /><a href="https://youtube.com" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">Youtube</a></li>
                            <li className='flex items-center gap-2'><Facebook className="w-5 h-5" /><a href="https://facebook.com" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">Facebook</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
                    <p>&copy; {new Date().getFullYear()}, All Rights Reserved Luxury Rentals</p>
                    <p>Design and Developed With ❤️ By <span className="text-gray-300">A Sleepy Person</span></p>
                </div>
            </div>
        </footer>
    )
}
