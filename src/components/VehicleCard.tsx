import Link from 'next/link'
import { Heart, Fuel, Gauge, Users, Phone, MessageCircle, MapPin } from 'lucide-react'

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
    currency: string
    images: { url: string }[]
    isActive: boolean
    bodyType?: string

    // NEW: tiered pricing
    prices: {
        kombo: number | null
        upcountry: number | null
        outsideCountry: number | null
    }
}

interface VehicleCardProps {
    vehicle: Vehicle
}

const formatMoney = (value: number | null | undefined, currency = 'GMD') => {
    if (value === null || value === undefined) return 'N/A'
    return `${currency} ${new Intl.NumberFormat('en-GM').format(value)}`
}

const PriceLine = ({
    label,
    value,
    currency,
}: {
    label: string
    value: number | null | undefined
    currency: string
}) => {
    const isNA = value === null || value === undefined
    return (
        <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">{label}</span>
            <span className={`font-semibold ${isNA ? 'text-gray-400' : 'text-gray-900'}`}>
                {isNA ? 'N/A' : formatMoney(value, currency)}
            </span>
        </div>
    )
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
    // Pick a "main" price for old/new display:
    // Prefer Kombo if available; else Upcountry; else Outside.
    const mainPrice =
        vehicle.prices?.kombo ?? vehicle.prices?.upcountry ?? vehicle.prices?.outsideCountry ?? null

    const oldPrice = mainPrice ? Math.round(mainPrice * 1.2) : null

    return (
        <div className="group w-full bg-white border border-gray-200 rounded-[20px] p-4 flex flex-col h-full hover:shadow-lg transition-shadow duration-300 relative">
            {/* Top Heart Icon */}
            {/* <div className="absolute top-4 right-4 z-20">
                <button className="w-10 h-10 bg-white-50 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-100 transition-colors">
                    <Heart className="w-5 h-5 fill-black stroke-black hover:fill-red-500 hover:stroke-red-500 transition-colors" />
                </button>
            </div> */}

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
                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4 truncate">
                    {vehicle.brand} {vehicle.model} <span className="text-gray-500 text-sm">{vehicle.year}</span>
                </h3>

                <div className="flex justify-between items-start pb-2">
                    <p className="text-gray-500 text-sm">{vehicle.transmission}</p>
                </div>
            </div>

            {/* Specs Grid */}
            {/* <div className="grid grid-cols-2 gap-2 border-t border-gray-100 border-b py-5 mb-4">
                <div className="flex flex-col items-center justify-center gap-2">
                    <Fuel className="w-6 h-6 text-gray-700 stroke-[2.5]" />
                    <span className="text-xs text-gray-600 font-medium">{vehicle.fuelType}</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                    <Gauge className="w-6 h-6 text-gray-700 stroke-[2.5]" />
                    <span className="text-xs text-gray-600 font-medium">{vehicle.kmPerDay} km/day</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                    <Users className="w-6 h-6 text-gray-700 stroke-[2.5]" />
                    <span className="text-xs text-gray-600 font-medium">{vehicle.seats} Pax</span>
                </div>
            </div> */}

            {/* NEW: Tiered Pricing Box */}
            <div className="mb-5 rounded-[14px] border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <p className=" text-[11px] text-gray-500">Region</p>
                    </div>
                    <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Price per day</span>
                </div>

                <div className="space-y-2">
                    <PriceLine label="Kombo Region" value={vehicle.prices?.kombo} currency={vehicle.currency || 'GMD'} />
                    <PriceLine label="Upcountry" value={vehicle.prices?.upcountry} currency={vehicle.currency || 'GMD'} />
                    <PriceLine label="Outside Country" value={vehicle.prices?.outsideCountry} currency={vehicle.currency || 'GMD'} />
                </div>
            </div>

            {/* Price & Actions Footer */}
            <div className="mt-auto flex items-start justify-between gap-2">
                <div className="grid grid-cols-2 gap-8  ">
                    {/* Fuel */}
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Fuel className="w-6 h-6 text-gray-700 stroke-[2.5]" />
                        <span className="text-xs text-gray-600 font-medium">{vehicle.fuelType}</span>
                    </div>

                    {/* Mileage */}
                    {/* <div className="flex flex-col items-center justify-center gap-2">
                    <Gauge className="w-6 h-6 text-gray-700 stroke-[2.5]" />
                    <span className="text-xs text-gray-600 font-medium">{vehicle.kmPerDay} km/day</span>
                </div> */}

                    {/* Seats */}
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Users className="w-6 h-6 text-gray-700 stroke-[2.5]" />
                        <span className="text-xs text-gray-600 font-medium">{vehicle.seats} Pax</span>
                    </div>
                </div>
                {/* <div>
                    {oldPrice ? (
                        <p className="text-xs text-gray-400 font-medium line-through mb-0.5">
                            {vehicle.currency || 'GMD'} {new Intl.NumberFormat('en-GM').format(oldPrice)} /day
                        </p>
                    ) : (
                        <p className="text-xs text-gray-400 font-medium mb-0.5">Pricing available</p>
                    )}

                    <div className="flex items-baseline gap-2">
                        <span className="text-sm font-bold text-black">{vehicle.currency || 'GMD'}</span>
                        <span className="text-2xl font-bold text-black">
                            {mainPrice ? new Intl.NumberFormat('en-GM').format(mainPrice) : 'N/A'}
                        </span>
                        <span className="text-xs text-gray-500 font-medium">/day</span>
                    </div>

                    <p className="text-[11px] text-gray-500 mt-1">
                        Base price shown: <span className="font-semibold">Kombo</span>
                        {vehicle.prices?.kombo == null && ' (fallback applied)'}
                    </p>
                </div> */}


                {/* Buttons Right */}
                <div className="flex gap-3">
                    <a
                        href="tel:+2207862550"
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
    );
}
