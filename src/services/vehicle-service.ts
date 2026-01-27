import { MOCK_DATA } from '../data/mock-data'

export const VehicleService = {
    // Get all vehicles with optional filters
    async getVehicles(filters?: { brand?: string; bodyType?: string; minPrice?: number; maxPrice?: number }) {
        let vehicles = [...MOCK_DATA.vehicles]

        if (filters?.brand) {
            vehicles = vehicles.filter(v => v.brand.toLowerCase() === filters.brand?.toLowerCase())
        }
        if (filters?.maxPrice) {
            vehicles = vehicles.filter(v => v.prices.kombo <= filters.maxPrice!)
        }

        // Simulating async delay optionally? No need for static.
        vehicles.sort((a, b) => Number(a.id) - Number(b.id))
        return vehicles
    },

    // Get single vehicle by ID
    async getVehicleById(id: string) {
        const vehicle = MOCK_DATA.vehicles.find(v => v.id === id)
        return vehicle || null
    },

    // Get all brands
    async getBrands() {
        // Derive brands directly from vehicle data to ensure consistency
        const brands = new Set(MOCK_DATA.vehicles.map((v: any) => v.brand))
        return Array.from(brands).map(b => ({ brand: b as string }))
    }
}
