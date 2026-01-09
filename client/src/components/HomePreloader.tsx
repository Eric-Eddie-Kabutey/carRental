'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function HomePreloader() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [selectedVideo, setSelectedVideo] = useState<string>('')

    useEffect(() => {
        const videos = ['animate1.mp4', 'animate2.mp4', 'animate3.mp4']
        const randomVideo = videos[Math.floor(Math.random() * videos.length)]
        setSelectedVideo(randomVideo)
    }, [])

    useEffect(() => {
        if (selectedVideo && videoRef.current) {
            const handlePlay = () => {
                gsap.to(videoRef.current, {
                    opacity: 0.6,
                    duration: 1.5,
                    ease: 'power2.out'
                })
            }

            const video = videoRef.current
            video.addEventListener('playing', handlePlay)

            const fallback = setTimeout(handlePlay, 1000)

            return () => {
                video.removeEventListener('playing', handlePlay)
                clearTimeout(fallback)
            }
        }
    }, [selectedVideo])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden bg-black"
        >
            {selectedVideo && (
                <>
                    <video
                        ref={videoRef}
                        src={`/videos/${selectedVideo}`}
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="w-full h-full object-cover opacity-0 transition-none"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </>
            )}
        </div>
    )
}