

import React from 'react'
import Link from 'next/link'
import ImageWithFallback from '@/components/ImageWithFallback'
import { ContentService } from '@/services/content-service'

interface ServiceDetailsBlockProps {
    id: string
    title: string
    subtitle: string
    description: string
    summary: string
    includes?: string[]
    image: string
    action: string
    theme?: 'light' | 'dark' | 'black'
    reverse?: boolean
}

export default async function ServiceDetailsBlock({
    id,
    title,
    subtitle,
    description,
    summary,
    includes = [],
    image,
    action,
    theme = 'light',
    reverse = false
}: ServiceDetailsBlockProps) {
    const isDark = theme === 'black' || theme === 'dark'
    const bgClass = theme === 'black' ? 'bg-black' : theme === 'dark' ? 'bg-[#111]' : 'bg-white'
    const textClass = isDark ? 'text-white' : 'text-black'
    const subtitleClass = isDark ? 'text-gray-400' : 'text-gray-600'

    const links = await ContentService.getSocialLinks();
    const whatsappLink = links.find(link => link.name === 'whatsapp')?.href || '#';

    return (
        <section id={id} className={`${bgClass} ${textClass} py-20 md:py-32 transition-colors duration-500`}>
            <div className="container mx-auto px-6">
                <div className={`flex flex-col md:flex-row items-center gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className="w-full md:w-1/2">
                        <h3 className={`text-xs font-semibold mb-2 uppercase tracking-widest text-emerald-500`}>
                            {title}
                        </h3>
                        <h4 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                            {subtitle}
                        </h4>

                        <div className="space-y-4 mb-8">
                            <p className={`text-xl font-light leading-relaxed ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                {description}
                            </p>
                            <p className={`text-lg leading-relaxed whitespace-pre-line ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                {summary}
                            </p>
                        </div>

                        {includes.length > 0 && (
                            <ul className="space-y-4 mb-10">
                                {includes.map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-300">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-4" />
                                        <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <Link
                            href={action === 'car' ? (id === 'vip' ? '/cars?vip=true' : '/cars') : `${whatsappLink}`}
                            className={`
                                inline-block px-10 py-4 rounded-full font-bold uppercase tracking-wide transition-all
                                ${isDark
                                    ? 'bg-white text-black hover:bg-emerald-500 hover:text-white'
                                    : 'bg-black text-white hover:bg-emerald-500'}
                            `}
                        >
                            {action === 'car' ? 'Explore Fleet' : 'Contact Us'}
                        </Link>
                    </div>

                    {/* Image */}
                    <div className={`w-full md:w-1/2 h-[400px] md:h-[550px] relative rounded-2xl overflow-hidden shadow-2xl group`}>
                        <ImageWithFallback
                            src={image}
                            alt={subtitle}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                    </div>
                </div>
            </div>
        </section>
    )
}
