import { VehicleService } from '@/services/vehicle-service'
import { ContentService } from '@/services/content-service'
import HomeView from '@/views/HomeView'
import fs from 'fs'
import path from 'path'

// Force dynamic since we are fetching data
export const dynamic = 'force-dynamic'

export default async function Home() {
  const [vehicles, homePageContent] = await Promise.all([
    VehicleService.getVehicles(),
    ContentService.getHomePageContent()
  ])

  const { testimonials, faqs } = homePageContent

  // Read brands dynamically from public/brands
  const brandsDir = path.join(process.cwd(), 'public', 'brands')
  let brands: any[] = []

  if (fs.existsSync(brandsDir)) {
    const brandFiles = fs.readdirSync(brandsDir).filter(file => file.endsWith('.svg'))
    brands = brandFiles.map(file => ({
      name: file.replace('.svg', '').split('-')[0].charAt(0).toUpperCase() + file.replace('.svg', '').split('-')[0].slice(1),
      file: file
    }))
  }

  return <HomeView vehicles={vehicles} faqs={faqs} brands={brands} testimonials={testimonials} />
}
