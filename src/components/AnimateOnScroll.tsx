'use client'

import React, { useEffect, useRef, useState } from 'react'

interface AnimateOnScrollProps {
    children: React.ReactNode
    className?: string
    animation?: 'fade-in' | 'fade-in-up' | 'fade-in-left' | 'fade-in-right'
    delay?: number
    duration?: number
}

export default function AnimateOnScroll({
    children,
    className = '',
    animation = 'fade-in-up',
    delay = 0,
    duration = 1000
}: AnimateOnScrollProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    const getAnimationClass = () => {
        if (!isVisible) {
            switch (animation) {
                case 'fade-in-up': return 'opacity-0 translate-y-10'
                case 'fade-in-left': return 'opacity-0 -translate-x-10'
                case 'fade-in-right': return 'opacity-0 translate-x-10'
                default: return 'opacity-0'
            }
        }
        return 'opacity-100 translate-y-0 translate-x-0'
    }

    return (
        <div
            ref={ref}
            className={`${getAnimationClass()} transition-all ease-out ${className}`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    )
}
