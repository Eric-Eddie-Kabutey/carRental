import React from 'react'
import { ContentService } from '@/services/content-service'
import ServicesView from '@/views/ServicesView'

// Dynamic so it fetches from DB on request
export const dynamic = 'force-dynamic'

export default async function ServicesPage() {
    const pageContent = await ContentService.getPageContent('services')
    const faqs = await ContentService.getAllFAQs()

    return <ServicesView pageContent={pageContent} faqs={faqs} />
}
