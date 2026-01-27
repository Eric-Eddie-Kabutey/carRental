'use client'

import React from 'react'
import Hero from '@/components/Hero'
import FeaturedCarousel from '@/components/FeaturedCarousel'
import HomePreloader from '@/components/HomePreloader'
import BrandCarousel from '@/components/BrandCarousel'
import HomeServices from '@/components/HomeServices'
import HomeAbout from '@/components/HomeAbout'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import FAQSection from '@/components/FAQSection'
import AnimateOnScroll from '@/components/AnimateOnScroll'

interface HomeViewProps {
    vehicles: any[]
    faqs: any[]
    brands: any[]
    testimonials: any[]
}

export default function HomeView({ vehicles, faqs, brands, testimonials }: HomeViewProps) {
    const [videoReady, setVideoReady] = React.useState(false)
    const [heroLoaded, setHeroLoaded] = React.useState(false)

    const handleVideoReady = React.useCallback(() => {
        setVideoReady(true)
    }, [])

    const handleHeroLoaded = React.useCallback(() => {
        setHeroLoaded(true)
    }, [])

    return (
        <main className="min-h-screen relative">
            <HomePreloader key="home-video" onVideoReady={handleVideoReady} />
            <Hero key="home-hero" show={videoReady} onLoaded={handleHeroLoaded} />

            {heroLoaded && (
                <>
                    {/* <AnimateOnScroll animation="fade-in-up"> */}
                    <FeaturedCarousel vehicles={vehicles} />
                    {/* </AnimateOnScroll> */}

                    {/* <AnimateOnScroll animation="fade-in-up" delay={200}> */}
                    <BrandCarousel brands={brands} isHome={true} />
                    {/* </AnimateOnScroll> */}

                    {/* <AnimateOnScroll animation="fade-in-up"> */}
                    <HomeServices />
                    {/* </AnimateOnScroll> */}

                    <HomeAbout />

                    <ReviewsCarousel testimonials={testimonials} />

                    <FAQSection faqs={faqs} />
                </>
            )}
        </main>
    )
}
