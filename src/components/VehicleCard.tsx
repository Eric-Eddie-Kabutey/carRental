import Link from 'next/link'
import { Heart, Fuel, Gauge, Users, Phone, MessageCircle } from 'lucide-react'

import ImageWithFallback from './ImageWithFallback'

export interface Vehicle {
    id: string
    brand: string
    model: string
    year: number
    transmission: string
    fuelType: string
    kmPerDay: number
    seats: number
    pricePerDay: number
    currency: string
    images: { url: string }[]
    isActive: boolean
    bodyType?: string
}

interface VehicleCardProps {
    vehicle: Vehicle
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
    const oldPrice = Math.round(vehicle.pricePerDay * 1.2)

    return (
        <div className="group w-full bg-white border border-gray-200 rounded-[20px] p-4 flex flex-col h-full hover:shadow-lg transition-shadow duration-300 relative">

            {/* Top Heart Icon   shadow-sm*/}
            <div className="absolute top-4 right-4 z-20">
                <button className="w-10 h-10 bg-white-50 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-100 transition-colors">
                    <Heart className="w-5 h-5 fill-black stroke-black hover:fill-red-500 hover:stroke-red-500 transition-colors" />
                </button>
            </div>

            {/* Image Area */}
            <div className="relative aspect-16/10 mb-2 overflow-hidden rounded-[10px] border border-gray-300 isolate">
                <ImageWithFallback
                    src={vehicle.images?.[0]?.url}
                    alt={vehicle.model}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Title & Badge Section */}
            <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4 truncate">{vehicle.brand} {vehicle.model}</h3>
                <div className="flex justify-between items-start">
                    <p className="text-gray-500 text-sm">{vehicle.transmission}</p>

                    {/* Special Plate Badge */}
                    <div className="border border-gray-400 rounded-[10px] mb-2 px-2 py-0.5 ml-auto mt-[-2px]">
                        <span className="text-[10px] font-bold text-gray-700 uppercase tracking-tight">Special Number Plate</span>
                    </div>
                </div>
            </div>

            {/* Specs Grid  */}
            <div className="grid grid-cols-3 gap-2 border-t border-gray-100 border-b py-5 mb-5">
                {/* Fuel */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <Fuel className="w-6 h-6 text-gray-700 stroke-[2.5]" />
                    <span className="text-xs text-gray-600 font-medium">{vehicle.fuelType}</span>
                </div>

                {/* Mileage */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <Gauge className="w-6 h-6 text-gray-700 stroke-[2.5]" />
                    <span className="text-xs text-gray-600 font-medium">{vehicle.kmPerDay} km/day</span>
                </div>

                {/* Seats */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <Users className="w-6 h-6 text-gray-700 stroke-[2.5]" />
                    <span className="text-xs text-gray-600 font-medium">{vehicle.seats} Pax</span>
                </div>
            </div>

            {/* Price & Actions Footer */}
            <div className="mt-auto flex items-end justify-between gap-2">


                <div>
                    <p className="text-xs text-gray-400 font-medium line-through mb-0.5">{vehicle.currency || 'GMD'} {oldPrice} /day</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold text-black">{vehicle.currency || 'GMD'}</span>
                        <span className="text-2xl font-bold text-black">{vehicle.pricePerDay}</span>
                    </div>
                </div>

                {/* Buttons Right */}
                <div className="flex gap-3">

                    <a
                        href="tel:+2200000000"
                        className="w-12 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                    </a>

                    <Link
                        href={`/cars/${vehicle.id}`}
                        className="w-12 h-10 rounded-full border border-emerald-500 text-emerald-500 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                    >
                        <MessageCircle className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
