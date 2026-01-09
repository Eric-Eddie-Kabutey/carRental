import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

export async function GET() {
    try {
        const heroContent = await prisma.pageContent.findUnique({
            where: {
                pageKey_sectionKey: {
                    pageKey: 'home',
                    sectionKey: 'hero'
                }
            }
        })

        const brands = await prisma.brand.findMany({ where: { isActive: true } })
        const testimonials = await prisma.testimonial.findMany({ where: { isActive: true }, take: 3 })
        const faqs = await prisma.fAQ.findMany({ where: { isActive: true, category: 'Home' }, take: 5 })

        return NextResponse.json({
            hero: heroContent ? JSON.parse(heroContent.content) : null,
            brands,
            testimonials,
            faqs
        })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 })
    }
}
