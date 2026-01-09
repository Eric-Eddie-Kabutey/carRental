import { MOCK_DATA } from '../data/mock-data'

export const ContentService = {
    // Get Home Page Content
    async getHomePageContent() {
        // Return static home content derived from seed 'services' data
        return {
            hero: MOCK_DATA.pageContent.home.hero,
            brands: MOCK_DATA.brands,
            testimonials: MOCK_DATA.testimonials,
            faqs: MOCK_DATA.faqs.filter(f => f.category === 'General')
        }
    },

    // Get Content for any page by key
    async getPageContent(pageKey: string) {
        // Support only 'home' for now as that's what we have mapped
        if (pageKey === 'home' || pageKey === 'services') {
            return MOCK_DATA.pageContent.home
        }
        return {}
    },

    async getAllFAQs() {
        return MOCK_DATA.faqs
    },

    async getSocialLinks() {
        return []
    }

}
