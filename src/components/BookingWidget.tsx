'use client'

import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

interface BookingWidgetProps {
    vehicle: any
    whatsappUrl: string
}

export default function BookingWidget({ vehicle, whatsappUrl }: BookingWidgetProps) {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [name, setName] = useState('')

    const handleBook = () => {
        if (!startDate || !endDate) return alert('Please select dates')

        const days = Math.floor((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24))
        const total = days * (vehicle.pricePerDay || 0)

        // WhatsApp Message
        const text = `
Hi I want to rent *${vehicle.brand} ${vehicle.model}*.  
*Period*: ${startDate} → ${endDate} (${days} days)
*Pickup*: Gambia
*Estimate*: ${vehicle.currency} ${total}
*My Name*: ${name || 'N/A'}
Please confirm availability. Ref: ${vehicle.id.slice(0, 5)}...
        `.trim()

        // Use the passed whatsappUrl which should be in wa.me/number format
        const baseUrl = whatsappUrl.includes('?') ? whatsappUrl.split('?')[0] : whatsappUrl
        const url = `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}text=${encodeURIComponent(text)}`

        window.open(url, '_blank')
    }

    return (
        <div className="bg-gray-50 text-gray-900 p-8 rounded-2xl sticky top-24">
            <h3 className="text-2xl font-bold mb-6">BOOK THIS CAR</h3>

            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Start Date</label>
                    <input
                        type="date"
                        className="w-full bg-white/10 border border-gray-900 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-emerald-500"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">End Date</label>
                    <input
                        type="date"
                        className="w-full bg-white/10 border border-gray-900 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-emerald-500"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>


                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Your Name (Optional)</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/10 border border-gray-900 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-emerald-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="pt-4">
                    <div className="flex justify-between items-center mb-4 text-sm">
                        <span className="text-gray-400">Rate per day</span>
                        <span className="font-bold">{vehicle.currency} {vehicle.pricePerDay}</span>
                    </div>

                    <button
                        onClick={handleBook}
                        className="w-full bg-emerald-500 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-2"
                    >
                        <span>CONTINUE ON WHATSAPP</span>
                        <MessageCircle className="w-5 h-5" />
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-3">
                        No payment required on site. Direct booking with agent.
                    </p>
                </div>
            </div>
        </div>
    )
}
