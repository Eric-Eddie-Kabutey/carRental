'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface HomePreloaderProps {
    onVideoReady?: () => void
}

export default function HomePreloader({ onVideoReady }: HomePreloaderProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [selectedVideo, setSelectedVideo] = useState<string>('')

    useEffect(() => {
        const videos = ['animate1.mp4']
        const randomVideo = videos[Math.floor(Math.random() * videos.length)]
        setSelectedVideo(randomVideo)
    }, [])

    useEffect(() => {
        if (selectedVideo && videoRef.current) {
            const handlePlay = () => {
                gsap.to(videoRef.current, {
                    opacity: 0.6,
                    duration: 1.5,
                    ease: 'power2.out',
                    onComplete: () => {
                        window.dispatchEvent(new CustomEvent('app-video-ready'))
                        if (onVideoReady) onVideoReady()
                    }
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
    }, [selectedVideo, onVideoReady])

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
                        className="w-full h-full object-cover opacity-0 transition-none"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </>
            )}
        </div>
    )
}