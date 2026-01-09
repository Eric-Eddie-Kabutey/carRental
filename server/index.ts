import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()
const PORT = 3001

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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
