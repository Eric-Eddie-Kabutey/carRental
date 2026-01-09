import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

console.log('Initializing Prisma Client...')
console.log('DATABASE_URL present:', !!process.env.DATABASE_URL)
console.log('DATABASE_URL length:', process.env.DATABASE_URL?.length)

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL
        }
    }
})
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// --- Routes ---

// GET /api/vehicles
app.get('/api/vehicles', async (req, res) => {
    try {
        const { brand, maxPrice } = req.query
        const where: any = { isActive: true }

        if (brand) where.brand = String(brand)
        if (maxPrice) where.pricePerDay = { lte: parseFloat(String(maxPrice)) }

        const vehicles = await prisma.vehicle.findMany({
            where,
            include: { images: true },
            orderBy: { createdAt: 'desc' }
        })
        res.json(vehicles)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to fetch vehicles' })
    }
})

// GET /api/vehicles/:id
app.get('/api/vehicles/:id', async (req, res) => {
    try {
        const { id } = req.params
        const vehicle = await prisma.vehicle.findUnique({
            where: { id },
            include: {
                images: true,
                blocks: true,
                bookings: { where: { status: 'confirmed' } }
            }
        })

        if (!vehicle) {
            res.status(404).json({ error: 'Not found' })
            return
        }
        res.json(vehicle)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// GET /api/content/home
app.get('/api/content/home', async (req, res) => {
    try {
        const heroContent = await prisma.pageContent.findUnique({
            where: {
                pageKey_sectionKey: { pageKey: 'home', sectionKey: 'hero' }
            }
        })
        const brands = await prisma.brand.findMany({ where: { isActive: true } })
        const testimonials = await prisma.testimonial.findMany({ where: { isActive: true }, take: 3 })
        const faqs = await prisma.fAQ.findMany({ where: { isActive: true, category: 'Home' }, take: 5 })

        res.json({
            hero: heroContent ? JSON.parse(heroContent.content) : null,
            brands,
            testimonials,
            faqs
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to fetch content' })
    }
})

// GET /api/content/:pageKey
app.get('/api/content/:pageKey', async (req, res) => {
    try {
        const { pageKey } = req.params
        const contents = await prisma.pageContent.findMany({
            where: { pageKey }
        })

        // transform into object { sectionKey: content }
        const result = contents.reduce((acc, curr) => {
            acc[curr.sectionKey] = JSON.parse(curr.content)
            return acc
        }, {} as Record<string, any>)

        res.json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to fetch page content' })
    }
})

// GET /api/faqs
app.get('/api/faqs', async (req, res) => {
    try {
        const faqs = await prisma.fAQ.findMany({
            where: { isActive: true },
            orderBy: { order: 'asc' }
        })
        res.json(faqs)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to fetch FAQs' })
    }
})

// TEMP: Seed database
import { seedDatabase } from './seeder'
app.get('/api/seed', async (req, res) => {
    try {
        await seedDatabase(prisma)
        res.json({ message: 'Seeding finished' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Seeding failed' })
    }
})

// Start server only if not in Vercel serverless environment
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
}

// Export for Vercel serverless functions
export default app
