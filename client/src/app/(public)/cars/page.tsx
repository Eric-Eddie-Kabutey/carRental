'use client'

import { useState, useEffect } from 'react'
import VehicleCard, { Vehicle } from '@/components/VehicleCard'
import { VehicleService } from '@/services/vehicle-service'
import { Search, SlidersHorizontal, ChevronDown, RefreshCw } from 'lucide-react'

export default function CarsPage() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([])
    const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([])
    const [loading, setLoading] = useState(true)

    // Filters
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedBrand, setSelectedBrand] = useState<string>('all')
    const [selectedBodyType, setSelectedBodyType] = useState<string>('all')
    const [priceRange, setPriceRange] = useState<number>(10000)

    // Sort
    const [sortBy, setSortBy] = useState<string>('newest')

    // Fetch vehicles (Static)
    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const data = await VehicleService.getVehicles()
                setVehicles(data)
                setFilteredVehicles(data)
            } catch (error) {
                console.error('Failed to load vehicles:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchVehicles()
    }, [])

    // Get unique options
    const brands = Array.from(new Set(vehicles.map(v => v.brand))).sort()
    const bodyTypes = Array.from(new Set(vehicles.map(v => v.bodyType).filter(Boolean))).sort()

    // Apply filters and sort
    useEffect(() => {
        let result = [...vehicles]

        // 1. Filter
        if (searchTerm) {
            result = result.filter(v =>
                `${v.brand} ${v.model}`.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }
        if (selectedBrand !== 'all') {
            result = result.filter(v => v.brand === selectedBrand)
        }
        if (selectedBodyType !== 'all') {
            result = result.filter(v => v.bodyType === selectedBodyType)
        }
        result = result.filter(v => v.pricePerDay <= priceRange)

        // 2. Sort
        switch (sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.pricePerDay - b.pricePerDay)
                break
            case 'price-desc':
                result.sort((a, b) => b.pricePerDay - a.pricePerDay)
                break
            case 'newest':
            default:
                // Assuming original order is relatively "newest" or by ID, 
                // but since we don't have a date field other than year, we can sort by year then ID
                result.sort((a, b) => b.year - a.year)
                break
        }

        setFilteredVehicles(result)
    }, [searchTerm, selectedBrand, selectedBodyType, priceRange, sortBy, vehicles])

    const clearFilters = () => {
        setSearchTerm('')
        setSelectedBrand('all')
        setSelectedBodyType('all')
        setPriceRange(10000)
        setSortBy('newest')
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-16">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Sidebar - Filters */}
                    <aside className="w-full lg:w-1/4 flex-shrink-0">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-28">

                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-2">
                                    <SlidersHorizontal className="w-5 h-5 text-black" />
                                    <h2 className="text-xl font-bold text-gray-900">Filter</h2>
                                </div>
                                <button
                                    onClick={clearFilters}
                                    className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
                                >
                                    Reset
                                </button>
                            </div>

                            {/* Search */}
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Vehicle Type</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search by brand or model..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-4 pr-10 py-4 bg-white border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all shadow-sm"
                                    />
                                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                </div>
                            </div>

                            {/* Brand Filter */}
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Vehicle Brand</label>
                                <div className="relative">
                                    <select
                                        value={selectedBrand}
                                        onChange={(e) => setSelectedBrand(e.target.value)}
                                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent cursor-pointer transition-all shadow-sm"
                                    >
                                        <option value="all">Select Brand</option>
                                        {brands.map(brand => (
                                            <option key={brand} value={brand}>{brand}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                </div>
                            </div>

                            {/* Body Type Filter */}
                            <div className="mb-8">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Body Type</label>
                                <div className="relative">
                                    <select
                                        value={selectedBodyType}
                                        onChange={(e) => setSelectedBodyType(e.target.value)}
                                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent cursor-pointer transition-all shadow-sm"
                                    >
                                        <option value="all">Select Body Type</option>
                                        {bodyTypes.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="flex justify-between items-center mb-4">
                                    <label className="text-sm font-bold text-gray-900">Max Price</label>
                                    <span className="text-sm font-bold text-[#25D366]">AED {priceRange}</span>
                                </div>
                                <input
                                    type="range"
                                    min="500"
                                    max="10000"
                                    step="100"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                                    <span>AED 500</span>
                                    <span>AED 10k+</span>
                                </div>
                            </div>

                            {/* Sidebar Action Button */}
                            <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg active:scale-[0.98] duration-200">
                                Search Vehicles
                            </button>
                        </div>
                    </aside>

                    {/* Right Content - Grid */}
                    <main className="w-full lg:w-3/4">

                        {/* Top Bar */}
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                            <p className="text-gray-500 text-sm">
                                Showing <span className="font-bold text-black">1</span> to <span className="font-bold text-black">{filteredVehicles.length}</span> of <span className="font-bold text-black">{vehicles.length}</span> Vehicles
                            </p>

                            <div className="flex items-center gap-3">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Sort By</label>
                                <div className="relative">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent cursor-pointer shadow-sm transition-all hover:border-gray-300"
                                    >
                                        <option value="newest">Newest First</option>
                                        <option value="price-asc">Price: Low to High</option>
                                        <option value="price-desc">Price: High to Low</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Grid */}
                        {loading ? (
                            <div className="flex justify-center py-20">
                                <RefreshCw className="w-8 h-8 animate-spin text-gray-400" />
                            </div>
                        ) : filteredVehicles.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredVehicles.map(vehicle => (
                                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                                <p className="text-gray-500 text-lg mb-4">No vehicles match your criteria</p>
                                <button
                                    onClick={clearFilters}
                                    className="text-black font-bold hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </main>

                </div>
            </div>
        </div>
    )
}
