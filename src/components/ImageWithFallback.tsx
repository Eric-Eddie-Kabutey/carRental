'use client'

import { useState, ImgHTMLAttributes } from 'react'

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string
}

const DEFAULT_FALLBACK = '/home/stock-vehicle.jpg'

export default function ImageWithFallback({
    src,
    fallbackSrc = DEFAULT_FALLBACK,
    alt,
    ...props
}: ImageWithFallbackProps) {
    const [imgSrc, setImgSrc] = useState(src)

    return (
        <img
            {...props}
            src={imgSrc || fallbackSrc}
            alt={alt}
            onError={() => {
                setImgSrc(fallbackSrc)
            }}
        />
    )
}
