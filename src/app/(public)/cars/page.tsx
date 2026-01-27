'use client'

import { useState, useEffect, Suspense, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import VehicleCard, { Vehicle } from '@/components/VehicleCard'
import { VehicleService } from '@/services/vehicle-service'
import { Search, SlidersHorizontal, ChevronDown, RefreshCw, X, Filter } from 'lucide-react'

function CarsContent() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([])
    const [filteredVehicles, setFilteredVehicles] = useState<any[]>([])
    const gridRef = useRef<HTMLDivElement>(null)
    const [loading, setLoading] = useState(true)

    // Filters
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedBrand, setSelectedBrand] = useState<string>('all')
    const [selectedBodyType, setSelectedBodyType] = useState<string>('all')
    const [selectedTransmission, setSelectedTransmission] = useState<string>('all')
    const [selectedFuelType, setSelectedFuelType] = useState<string>('all')
    const [selectedSeats, setSelectedSeats] = useState<string>('all')
    const [priceRange, setPriceRange] = useState<number>(10000)
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    // Sort
    const [sortBy, setSortBy] = useState<string>('id')

    const searchParams = useSearchParams()

    // Handle search query and other filters from URL
    useEffect(() => {
        const search = searchParams.get('search')
        const brand = searchParams.get('brand')
        const bodyType = searchParams.get('bodyType')
        const transmission = searchParams.get('transmission')
        const fuelType = searchParams.get('fuelType')
        const seats = searchParams.get('seats')

        if (search) setSearchTerm(search)
        if (brand && brand !== 'all') setSelectedBrand(brand)
        if (bodyType && bodyType !== 'all') setSelectedBodyType(bodyType)
        if (transmission && transmission !== 'all') setSelectedTransmission(transmission)
        if (fuelType && fuelType !== 'all') setSelectedFuelType(fuelType)
        if (seats && seats !== 'all') setSelectedSeats(seats)
    }, [searchParams])

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
    const transmissions = Array.from(new Set(vehicles.map(v => v.transmission))).sort()
    const fuelTypes = Array.from(new Set(vehicles.map(v => v.fuelType))).sort()
    const seatOptions = Array.from(new Set(vehicles.map(v => v.seats))).sort((a, b) => a - b)

    // Apply filters and sort
    useEffect(() => {
        let result = [...vehicles]

        // 1. Filter
        if (searchTerm) {
            const term = searchTerm.toLowerCase()
            result = result.filter(v =>
                v.brand.toLowerCase().includes(term) ||
                v.model.toLowerCase().includes(term) ||
                v.bodyType?.toLowerCase().includes(term) ||
                v.fuelType.toLowerCase().includes(term) ||
                v.transmission.toLowerCase().includes(term)
            )
        }
        if (selectedBrand !== 'all') {
            result = result.filter(v => v.brand === selectedBrand)
        }
        if (selectedBodyType !== 'all') {
            result = result.filter(v => v.bodyType === selectedBodyType)
        }
        if (selectedTransmission !== 'all') {
            result = result.filter(v => v.transmission === selectedTransmission)
        }
        if (selectedFuelType !== 'all') {
            result = result.filter(v => v.fuelType === selectedFuelType)
        }
        if (selectedSeats !== 'all') {
            result = result.filter(v => v.seats === Number(selectedSeats))
        }
        result = result.filter(v => (v.prices?.kombo ?? 0) <= priceRange)

        // 2. Sort
        switch (sortBy) {
            case 'price-asc':
                result.sort((a, b) => (a.prices?.kombo ?? 0) - (b.prices?.kombo ?? 0))
                break
            case 'price-desc':
                result.sort((a, b) => (b.prices?.kombo ?? 0) - (a.prices?.kombo ?? 0))
                break
            case 'newest':
                result.sort((a, b) => b.year - a.year)
                break
            case 'id':
            default:
                // Sort by ID as requested by the user
                result.sort((a, b) => Number(a.id) - Number(b.id))
                break
        }

        setFilteredVehicles(result)
    }, [searchTerm, selectedBrand, selectedBodyType, selectedTransmission, selectedFuelType, selectedSeats, priceRange, sortBy, vehicles])

    const clearFilters = () => {
        setSearchTerm('')
        setSelectedBrand('all')
        setSelectedBodyType('all')
        setSelectedTransmission('all')
        setSelectedFuelType('all')
        setSelectedSeats('all')
        setPriceRange(10000)
        setSortBy('id')
    }
    const scrollToResults = () => {
        gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-16">
            <div className="container">

                {/* Mobile Filter Toggle */}
                <div className="lg:hidden mb-6">
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 py-4 rounded-2xl shadow-sm text-gray-900 font-bold hover:bg-gray-50 transition-all active:scale-[0.98]"
                    >
                        {isFilterOpen ? <X className="w-5 h-5" /> : <SlidersHorizontal className="w-5 h-5" />}
                        {isFilterOpen ? 'Close Filters' : 'Show Filters'}
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-4">

                    {/* Left Sidebar - Filters */}
                    <aside className={`w-full lg:w-1/6 shrink-0 transition-all duration-300 ease-in-out ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-3 py-4 sticky top-28">

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
                                        placeholder="Search... "
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all shadow-sm"
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
                                        className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl text-xs text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent cursor-pointer transition-all shadow-sm"
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
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Body Type</label>
                                <div className="relative">
                                    <select
                                        value={selectedBodyType}
                                        onChange={(e) => setSelectedBodyType(e.target.value)}
                                        className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl text-xs text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent cursor-pointer transition-all shadow-sm"
                                    >
                                        <option value="all">Select Body Type</option>
                                        {bodyTypes.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                </div>
                            </div>

                            {/* Transmission Filter */}
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Transmission</label>
                                <div className="relative">
                                    <select
                                        value={selectedTransmission}
                                        onChange={(e) => setSelectedTransmission(e.target.value)}
                                        className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl text-xs text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent cursor-pointer transition-all shadow-sm"
                                    >
                                        <option value="all">Select Transmission</option>
                                        {transmissions.map(item => (
                                            <option key={item} value={item}>{item}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                </div>
                            </div>

                            {/* Fuel Type Filter */}
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Fuel Type</label>
                                <div className="relative">
                                    <select
                                        value={selectedFuelType}
                                        onChange={(e) => setSelectedFuelType(e.target.value)}
                                        className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl text-xs text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent cursor-pointer transition-all shadow-sm"
                                    >
                                        <option value="all">Select Fuel Type</option>
                                        {fuelTypes.map(item => (
                                            <option key={item} value={item}>{item}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                </div>
                            </div>

                            {/* Seats Filter */}
                            <div className="mb-8">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Seats</label>
                                <div className="relative">
                                    <select
                                        value={selectedSeats}
                                        onChange={(e) => setSelectedSeats(e.target.value)}
                                        className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl text-xs text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent cursor-pointer transition-all shadow-sm"
                                    >
                                        <option value="all">Select Seats</option>
                                        {seatOptions.map(item => (
                                            <option key={item} value={item}>{item} Seats</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="flex justify-between items-center">
                                    {/* <label className="text-sm font-bold text-gray-900">Max Price</label> */}
                                    <span className="text-xs font-bold text-[#25D366]">GMD {priceRange.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="2000"
                                    max="10000"
                                    step="50"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(Number(e.target.value))}
                                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                                />
                                <div className="flex justify-between text-[8px] text-gray-400 mt-2 font-medium">
                                    <span>GMD 2k</span>
                                    <span>GMD 10k</span>
                                </div>
                            </div>

                            {/* Sidebar Action Button */}
                            <button
                                onClick={scrollToResults}
                                className="w-full bg-black text-xs text-white py-4 rounded-xl font-bold hover:bg-emerald-500 transition-colors shadow-lg active:scale-[0.98] duration-200"
                            >
                                Search Vehicles
                            </button>
                        </div>
                    </aside>

                    {/* Right Content - Grid */}
                    <main className="w-full lg:w-5/6">

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
                                        <option value="id">Default (ID)</option>
                                        <option value="newest">Newest First</option>
                                        <option value="price-asc">Price: Low to High</option>
                                        <option value="price-desc">Price: High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Grid */}
                        {loading ? (
                            <div className="flex justify-center py-20">
                                <RefreshCw className="w-8 h-8 animate-spin text-gray-400" />
                            </div>
                        ) : filteredVehicles.length > 0 ? (
                            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
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
export default function CarsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 pt-32 flex justify-center">
                <RefreshCw className="w-10 h-10 animate-spin text-emerald-500" />
            </div>
        }>
            <CarsContent />
        </Suspense>
    )
}
