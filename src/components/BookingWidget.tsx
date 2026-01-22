'use client'

import { useState } from 'react'

interface BookingWidgetProps {
    vehicle: any
}

export default function BookingWidget({ vehicle }: BookingWidgetProps) {
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

        const phone = '971500000000'
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`

        window.open(url, '_blank')
    }

    return (
        <div className="bg-black text-white p-8 rounded-2xl sticky top-24">
            <h3 className="text-2xl font-bold mb-6">BOOK THIS CAR</h3>

            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Start Date</label>
                    <input
                        type="date"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#25D366]"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">End Date</label>
                    <input
                        type="date"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#25D366]"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>


                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Your Name (Optional)</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#25D366]"
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
                        className="w-full bg-[#25D366] text-black font-bold py-4 rounded-xl hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2"
                    >
                        <span>CONTINUE ON WHATSAPP</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.68-2.031-9.67-.272-.099-.47-.149-.669-.149-.198 0-.42.001-.643.001-.223 0-.586.085-.892.446-.306.361-1.171 1.146-1.171 2.796 0 1.65 1.2 3.243 1.368 3.466.168.223 2.365 3.612 5.732 5.066 3.367 1.455 3.367.97 3.996.907.63-.062 2.031-8.31 2.318-1.166.288-.356.5-.595.574-.719z" /></svg>
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-3">
                        No payment required on site. Direct booking with agent.
                    </p>
                </div>
            </div>
        </div>
    )
}
