'use client'

import { MessageCircle, ChevronDown, MapPin } from 'lucide-react'
import { useState } from 'react'
import { Vehicle } from './VehicleCard'

interface BookingWidgetProps {
    vehicle: Vehicle
    whatsappUrl: string
}

export default function BookingWidget({ vehicle, whatsappUrl }: BookingWidgetProps) {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [name, setName] = useState('')
    const [selectedRegion, setSelectedRegion] = useState<keyof Vehicle['prices']>(
        vehicle.prices?.kombo ? 'kombo' : (vehicle.prices?.upcountry ? 'upcountry' : 'outsideCountry')
    )

    const regionLabels: Record<keyof Vehicle['prices'], string> = {
        kombo: 'Kombo Region',
        upcountry: 'Upcountry',
        outsideCountry: 'Outside Country'
    }

    const currentPrice = vehicle.prices?.[selectedRegion] || 0

    const handleBook = () => {
        if (!startDate || !endDate) return alert('Please select dates')

        const days = Math.floor((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24))
        if (days <= 0) return alert('End date must be after start date')

        const total = days * currentPrice

        // WhatsApp Message
        const text = `
Hi EASY CAR RENTAL!, I want to rent the ${vehicle.brand} ${vehicle.model} ${vehicle.year}.  

*Region*: ${regionLabels[selectedRegion]},
*Period*: ${startDate} → ${endDate} (${days} days),
*Estimate*: ${vehicle.currency} ${new Intl.NumberFormat('en-GM').format(total)}
*My Name*: ${name || 'N/A'}
Please confirm availability. Ref: ${vehicle.id.slice(0, 5)}...
        `.trim()

        // Use the passed whatsappUrl which should be in wa.me/number format
        const baseUrl = whatsappUrl.includes('?') ? whatsappUrl.split('?')[0] : whatsappUrl
        const url = `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}text=${encodeURIComponent(text)}`

        window.open(url, '_blank')
    }

    return (
        <div className="bg-gray-50 text-gray-900 p-8 rounded-2xl sticky top-24 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">BOOK THIS CAR</h3>

            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Select Region</label>
                    <div className="relative">
                        <select
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value as keyof Vehicle['prices'])}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
                        >
                            {Object.entries(regionLabels).map(([key, label]) => {
                                const price = vehicle.prices?.[key as keyof Vehicle['prices']]
                                if (price === null || price === undefined) return null
                                return (
                                    <option key={key} value={key}>
                                        {label} - {vehicle.currency} {new Intl.NumberFormat('en-GM').format(price)}/day
                                    </option>
                                )
                            })}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        <MapPin className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500 opacity-0" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Start Date</label>
                        <input
                            type="date"
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">End Date</label>
                        <input
                            type="date"
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Your Name (Optional)</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="pt-4 border-t border-gray-100 mt-6">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-sm">Rate per day</span>
                        <span className="font-bold text-black">
                            {vehicle.currency} {new Intl.NumberFormat('en-GM').format(currentPrice)}
                        </span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Region: {regionLabels[selectedRegion]}</span>
                    </div>

                    <button
                        onClick={handleBook}
                        className="w-full bg-emerald-500 text-white font-bold py-4 rounded-2xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.98] duration-200"
                    >
                        <span>CONTINUE ON WHATSAPP</span>
                        <MessageCircle className="w-5 h-5" />
                    </button>
                    <p className="text-[10px] text-center text-gray-400 mt-4 uppercase font-bold tracking-widest">
                        Direct booking with agent • No site payment
                    </p>
                </div>
            </div>
        </div>
    )
}
