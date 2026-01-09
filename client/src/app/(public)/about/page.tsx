import { ContentService } from '@/services/content-service'
import AboutView from '@/views/AboutView'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

export default async function AboutPage() {
    // Fetch brands
    const brandsDir = path.join(process.cwd(), 'public', 'brands')
    let brands: any[] = []

    if (fs.existsSync(brandsDir)) {
        const brandFiles = fs.readdirSync(brandsDir).filter(file => file.endsWith('.svg'))
        brands = brandFiles.map(file => ({
            name: file.replace('.svg', '').split('-')[0].charAt(0).toUpperCase() + file.replace('.svg', '').split('-')[0].slice(1),
            file: file
        }))
    }

    // Fetch services data for SignatureServices component
    const servicesData = await ContentService.getPageContent('services')

    // Fetch FAQs
    const faqs = await ContentService.getAllFAQs()

    return (
        <AboutView
            brands={brands}
            servicesData={servicesData}
            faqs={faqs}
        />
    )
}
