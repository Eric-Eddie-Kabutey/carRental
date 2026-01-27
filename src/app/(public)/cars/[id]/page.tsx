import { VehicleService } from '@/services/vehicle-service'
import { ContentService } from '@/services/content-service'
import BookingWidget from '@/components/BookingWidget'
import ImageWithFallback from '@/components/ImageWithFallback'

export default async function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const vehicle = await VehicleService.getVehicleById(id)
    const links = await ContentService.getSocialLinks()
    const whatsappUrl = links.find(link => link.name === 'whatsapp')?.href || '#'

    if (!vehicle) return <div className="text-center py-40">Vehicle not found</div>

    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Gallery & Content (8 cols) */}
                    <div className="lg:col-span-8 space-y-10">
                        {/* Main Image */}
                        <div className="relative aspect-video bg-gray-100 rounded-[32px] overflow-hidden shadow-sm">
                            <ImageWithFallback
                                src={vehicle.images[0]?.url}
                                alt={vehicle.model}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Title & Brand */}
                        <div>
                            <span className="text-[#25D366] font-bold tracking-widest uppercase text-sm mb-3 block">{vehicle.brand}</span>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                                {vehicle.model} <span className="text-gray-300 font-normal ml-2">{vehicle.year}</span>
                            </h1>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-3 mb-10">
                                <Badge label={`${vehicle.seats} Seats`} />
                                <Badge label={vehicle.transmission} />
                                <Badge label={vehicle.fuelType} />
                                <Badge label={vehicle.bodyType || 'Coupe'} />
                                <Badge label={'Standard'} />
                            </div>

                            {/* Description */}
                            <div className="prose max-w-none mb-12">
                                <h3 className="text-xl font-bold text-gray-900 uppercase mb-4">Description</h3>
                                <p className="text-gray-500 leading-relaxed text-lg">
                                    {vehicle.description || 'Experience luxury with this premium vehicle. Perfect for business meetings, special events, or just cruising the city. Our fleet ensures you arrive in style and comfort, no matter the destination.'}
                                </p>
                            </div>

                            {/* Tiered Pricing */}
                            <div className="mb-12 bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wider">Price per day By region</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <DetailPriceLine label="Kombo Region" value={vehicle.prices?.kombo} currency={vehicle.currency} />
                                    <DetailPriceLine label="Upcountry" value={vehicle.prices?.upcountry} currency={vehicle.currency} />
                                    <DetailPriceLine label="Outside Country" value={vehicle.prices?.outsideCountry} currency={vehicle.currency} />
                                </div>
                            </div>

                            {/* Booked Periods */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 uppercase mb-6">Booked Periods</h3>
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <p className="text-gray-400 italic font-medium">This vehicle is fully available for the upcoming month.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Booking Widget (4 cols) */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32">
                            <BookingWidget vehicle={vehicle} whatsappUrl={whatsappUrl} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Badge({ label }: { label: string }) {
    return (
        <span className="bg-gray-100/80 text-gray-600 px-6 py-3 rounded-full text-sm font-bold border border-gray-200/50 backdrop-blur-sm">
            {label}
        </span>
    )
}

function DetailPriceLine({ label, value, currency }: { label: string, value: number | null | undefined, currency: string }) {
    const isNA = value === null || value === undefined
    const formattedValue = isNA ? 'N/A' : `${currency} ${new Intl.NumberFormat('en-GM').format(value)}`

    return (
        <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</span>
            <span className={`text-xl font-bold ${isNA ? 'text-gray-300' : 'text-gray-900'}`}>
                {formattedValue}
                {!isNA && <span className="text-xs text-gray-400 font-normal ml-1">/day</span>}
            </span>
        </div>
    )
}
