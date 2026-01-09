import { PrismaClient } from '@prisma/client'

export async function seedDatabase(prisma: PrismaClient) {
    console.log('Seeding database...')

    // Clean up
    await prisma.vehicle.deleteMany()
    await prisma.brand.deleteMany()
    await prisma.fAQ.deleteMany()
    await prisma.testimonial.deleteMany()
    await prisma.pageContent.deleteMany()

    // 0. Page Content
    await prisma.pageContent.create({
        data: {
            pageKey: 'services',
            sectionKey: 'hero',
            content: JSON.stringify({
                title: 'Car Rental and Chauffeur Services',
                subtitle: 'Rent VIP number plate Cars and Chauffeur services that are crafted for your Sophistication',
                image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=1920'
            })
        }
    })

    await prisma.pageContent.create({
        data: {
            pageKey: 'services',
            sectionKey: 'intro',
            content: JSON.stringify({
                title: 'Live your Gambia dream in style with Luxury Rentals',
                summary: 'Cruise in a luxury car. Our team handles every detail, so you can relax and enjoy the city with our chauffeur services in Gambia.'
            })
        }
    })

    await prisma.pageContent.create({
        data: {
            pageKey: 'services',
            sectionKey: 'rental',
            content: JSON.stringify({
                title: 'Rent Your Dream Car',
                subtitle: 'Luxury Car Rental Services in Gambia',
                description: 'Travel in style-drive our extraordinary collection of Luxury and Exotic vehicles today!',
                summary: 'Command Rolls-Royce Luxury, unleash Lamborghini power, or cruise in Range Rover elegance. Our handpicked fleet transforms moments into memories. Day rentals to long-term solutions—every pristine vehicle arrives at your door because your time & impression matter.',
                includes: [
                    'Convenient: Self-Drive and Chauffeur Service',
                    'Fast Car Rentals: Short and Long-Term Options',
                    'Flexibility: Hourly, Daily, Weekly and Monthly',
                    '24/7 Support and Instant Online Booking'
                ],
                image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800',
                action: 'car'
            })
        }
    })

    await prisma.pageContent.create({
        data: {
            pageKey: 'services',
            sectionKey: 'chauffeur',
            content: JSON.stringify({
                title: 'Rent a Car with Driver',
                subtitle: 'Chauffeur Services in Gambia',
                description: 'Ride in style and elegance with our luxury chauffeur services, perfect for every occasion in Gambia.',
                summary: 'Glide through Gambia in absolute sophistication with our Chauffeur Services. We merge professional excellence with Luxury, ensuring every journey is stylish and punctual. Perfect for VIPs, Weddings, and Airports.',
                includes: [
                    'Cars at our Chauffeur Services: Rolls-Royce, S-Class, BMW 7 Series',
                    'Real-time GPS Tracking & 24/7 Dispatch Support',
                    'Hourly & Event-Based Packages',
                    'Multilingual Drivers Available',
                    'Trained, Uniformed Drivers'
                ],
                image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800',
                action: 'service'
            })
        }
    })

    await prisma.pageContent.create({
        data: {
            pageKey: 'services',
            sectionKey: 'vip',
            content: JSON.stringify({
                title: 'Drive Like a VIP',
                subtitle: 'Rent Cars with VIP Number Plates',
                description: 'Rent Cars with VIP number plates in Gambia, unique Luxury symbols that turn any drive into a statement.',
                summary: 'These highly demanded plates are more than just numbers they are status symbols and conversation starters that demand respect and attention anywhere you go.',
                includes: [],
                image: 'https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Rolls-Royce-Cullinan-Rental-Dubai.webp',
                action: 'car'
            })
        }
    })

    // 1. Brands
    const brands = ['Lamborghini', 'Ferrari', 'Rolls Royce', 'Mercedes', 'Porsche', 'McLaren', 'Bentley']
    for (const b of brands) {
        await prisma.brand.create({ data: { name: b } })
    }

    // 2. Testimonials
    await prisma.testimonial.createMany({
        data: [
            {
                name: 'Mahammed Safan',
                content: 'The process was smooth and easy to rent a car in Gambia because of Luxury Rentals and their staff named Mr. Mohammed. He was very helpful in selecting my comfort car which I rented with the help of Mr. Saad. I recommend every person who is going to visit Gambia and want to rent a car, choose LUXURY RENTALS.',
                rating: 5,
                role: '2 months ago'
            },
            {
                name: 'Mohammed Shuhaib',
                content: 'I had the best experience with this car rental company! The entire process was smooth, quick, and hassle-free. A special thanks to Mohammed Saad for his excellent service, professionalism, and friendly attitude. He made sure everything was perfectly arranged and went above and beyond to ensure customer satisfaction. Highly recommended!',
                rating: 5,
                role: '2 months ago'
            },
            {
                name: 'Travel with Zahid',
                content: 'I rent A Car 2 time and the staff was very helpful and cars always new model with and they guide us very well especially Mr Adeel is very sported person really I enjoy the service but next time also. Thanks Guys Mr Adeel Also and there all team.',
                rating: 5,
                role: '3 months ago'
            },
            {
                name: 'Rohail Awan',
                content: 'Had a great experience with Mr Malik from Luxury Rentals. Professional. The car was in perfect condition and delivery was free. Definitely recommend renting through him!',
                rating: 5,
                role: '2 months ago'
            },
            {
                name: 'Suleiman Jobe',
                content: 'Best luxury car rental in Banjul! The service is top notch. I rented a GLE for a wedding and it was spotless.',
                rating: 5,
                role: '1 month ago'
            }
        ]
    })

    // 3. FAQs
    await prisma.fAQ.createMany({
        data: [
            {
                question: 'How can I pay at Luxury Rentals?',
                answer: 'We accept Visa, MasterCard, AmEx, Cash, online banking & Bitcoin - choose what works best for you at Luxury Rentals!',
                category: 'General',
                order: 1
            },
            {
                question: 'Which luxury supercars can I rent from Luxury Rentals?',
                answer: 'At Luxury Rentals, we offer an extensive fleet of premium & economy vehicles - all fully insured, impeccably maintained & inspected. Our 24/7 support team is always ready to help. Browse our complete catalog of luxury cars with no deposit required at the lowest market prices!',
                category: 'General',
                order: 2
            },
            {
                question: 'How can I modify or cancel my Luxury Rentals reservation?',
                answer: 'Yes, you can modify or cancel your reservation by contacting our customer service team. All changes must be made at least 48 hours in advance. Modifications or cancellations requested with less than 48 hours notice may incur additional fees.',
                category: 'General',
                order: 3
            },
            {
                question: 'What are Luxury Rentals late return fees and policies?',
                answer: 'We rent vehicles on a 24-hour basis with a 1-hour grace period for returns. After that, hourly charges apply. Beyond 3 hours late, full-day charges apply. No grace period for surcharges, fees, protections, or optional equipment - full-day late charges apply immediately for these items.',
                category: 'General',
                order: 4
            },
            {
                question: 'Does Luxury Rentals provide roadside assistance if I encounter issues with my rental car?',
                answer: 'If you encounter issues with your Luxury Rentals vehicle, call us immediately. For minor problems, our operations team will assist on-site. For major malfunctions, we\'ll provide replacement or roadside assistance. Never abandon your vehicle - stay with the car and wait for our service team or authorities. Our 24/7 support ensures you\'re never stranded during your rental.',
                category: 'General',
                order: 5
            },
            {
                question: 'How do I book a car rental with Luxury Rentals?',
                answer: 'Booking with Luxury Rentals is simple: visit luxuryrentals.gm, select your car, call us or email info@luxuryrentals.gm. No deposit required* with lowest prices!',
                category: 'General',
                order: 6
            },
            {
                question: 'Can I book multiple vehicles at once from Luxury Rentals?',
                answer: 'Yes, you can book multiple vehicles at once with Luxury Rentals. Simply select your desired cars and complete the booking. Our team is ready to assist with any questions.',
                category: 'General',
                order: 7
            }
        ]
    })

    // 4. Vehicles - Expanded to 30 vehicles
    const vehiclesData = [
        // Lamborghini
        {
            brand: 'Lamborghini', model: 'Urus Performante', year: 2024, bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 250,
            pricePerDay: 4999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Lamborghini-Urus-Performante-Rental-Dubai.webp']
        },
        {
            brand: 'Lamborghini', model: 'Huracan EVO', year: 2023, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 2, doors: 2, kmPerDay: 200,
            pricePerDay: 5499, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Lamborghini-Huracan-EVO-Rental-Dubai.webp']
        },
        {
            brand: 'Lamborghini', model: 'Aventador SVJ', year: 2023, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 2, doors: 2, kmPerDay: 200,
            pricePerDay: 7999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Lamborghini-Aventador-SVJ-Rental-Dubai.webp']
        },
        // Ferrari
        {
            brand: 'Ferrari', model: '296 GTB', year: 2024, bodyType: 'Coupe', fuelType: 'Hybrid', transmission: 'Automatic', seats: 2, doors: 2, kmPerDay: 250,
            pricePerDay: 5999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Ferrari-296-GTB-Rental-Dubai.webp']
        },
        {
            brand: 'Ferrari', model: 'F8 Tributo', year: 2023, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 2, doors: 2, kmPerDay: 200,
            pricePerDay: 5499, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Ferrari-F8-Tributo-Rental-Dubai.webp']
        },
        {
            brand: 'Ferrari', model: 'SF90 Stradale', year: 2024, bodyType: 'Coupe', fuelType: 'Hybrid', transmission: 'Automatic', seats: 2, doors: 2, kmPerDay: 250,
            pricePerDay: 8999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Ferrari-SF90-Stradale-Rental-Dubai.webp']
        },
        {
            brand: 'Ferrari', model: 'Roma', year: 2023, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 4, doors: 2, kmPerDay: 200,
            pricePerDay: 4999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Ferrari-Roma-Rental-Dubai.webp']
        },
        // Rolls Royce
        {
            brand: 'Rolls Royce', model: 'Cullinan', year: 2024, bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 200,
            pricePerDay: 7999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Rolls-Royce-Cullinan-Rental-Dubai.webp']
        },
        {
            brand: 'Rolls Royce', model: 'Ghost', year: 2023, bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 200,
            pricePerDay: 6999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Rolls-Royce-Ghost-Rental-Dubai.webp']
        },
        {
            brand: 'Rolls Royce', model: 'Phantom', year: 2024, bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 200,
            pricePerDay: 8999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Rolls-Royce-Phantom-Rental-Dubai.webp']
        },
        // Mercedes
        {
            brand: 'Mercedes', model: 'S-Class S500', year: 2024, bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 300,
            pricePerDay: 1499, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Mercedes-S-Class-S500-Rental-Dubai.webp']
        },
        {
            brand: 'Mercedes', model: 'G63 AMG', year: 2024, bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 250,
            pricePerDay: 3999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Mercedes-G63-AMG-Rental-Dubai.webp']
        },
        {
            brand: 'Mercedes', model: 'AMG GT 63S', year: 2023, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 4, doors: 4, kmPerDay: 250,
            pricePerDay: 2999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Mercedes-AMG-GT-63S-Rental-Dubai.webp']
        },
        {
            brand: 'Mercedes', model: 'EQS 450+', year: 2024, bodyType: 'Sedan', fuelType: 'Electric', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 300,
            pricePerDay: 1999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Mercedes-EQS-450-Rental-Dubai.webp']
        },
        {
            brand: 'Mercedes', model: 'Maybach S680', year: 2024, bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 200,
            pricePerDay: 4999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Mercedes-Maybach-S680-Rental-Dubai.webp']
        },
        // Porsche
        {
            brand: 'Porsche', model: '911 Turbo S', year: 2024, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 4, doors: 2, kmPerDay: 250,
            pricePerDay: 3999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Porsche-911-Turbo-S-Rental-Dubai.webp']
        },
        {
            brand: 'Porsche', model: 'Taycan Turbo S', year: 2024, bodyType: 'Sedan', fuelType: 'Electric', transmission: 'Automatic', seats: 4, doors: 4, kmPerDay: 300,
            pricePerDay: 2999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Porsche-Taycan-Turbo-S-Rental-Dubai.webp']
        },
        {
            brand: 'Porsche', model: 'Cayenne Turbo', year: 2023, bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 300,
            pricePerDay: 1999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Porsche-Cayenne-Turbo-Rental-Dubai.webp']
        },
        {
            brand: 'Porsche', model: 'Panamera Turbo S', year: 2024, bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', seats: 4, doors: 4, kmPerDay: 250,
            pricePerDay: 2499, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Porsche-Panamera-Turbo-S-Rental-Dubai.webp']
        },
        // McLaren
        {
            brand: 'McLaren', model: '720S', year: 2023, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 2, doors: 2, kmPerDay: 200,
            pricePerDay: 5999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/McLaren-720S-Rental-Dubai.webp']
        },
        {
            brand: 'McLaren', model: 'Artura', year: 2024, bodyType: 'Coupe', fuelType: 'Hybrid', transmission: 'Automatic', seats: 2, doors: 2, kmPerDay: 200,
            pricePerDay: 4999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/McLaren-Artura-Rental-Dubai.webp']
        },
        {
            brand: 'McLaren', model: 'GT', year: 2023, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 2, doors: 2, kmPerDay: 250,
            pricePerDay: 3999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/McLaren-GT-Rental-Dubai.webp']
        },
        // Bentley
        {
            brand: 'Bentley', model: 'Bentayga', year: 2024, bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 250,
            pricePerDay: 3999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Bentley-Bentayga-Rental-Dubai.webp']
        },
        {
            brand: 'Bentley', model: 'Continental GT', year: 2024, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 4, doors: 2, kmPerDay: 250,
            pricePerDay: 4499, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Bentley-Continental-GT-Rental-Dubai.webp']
        },
        {
            brand: 'Bentley', model: 'Flying Spur', year: 2023, bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 250,
            pricePerDay: 3499, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Bentley-Flying-Spur-Rental-Dubai.webp']
        },
        // Additional Premium Models
        {
            brand: 'Mercedes', model: 'GLE 450', year: 2024, bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 300,
            pricePerDay: 899, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Mercedes-GLE-450-Rental-Dubai.webp']
        },
        {
            brand: 'Porsche', model: 'Macan S', year: 2024, bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 300,
            pricePerDay: 1299, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Porsche-Macan-S-Rental-Dubai.webp']
        },
        {
            brand: 'Mercedes', model: 'C63 AMG', year: 2023, bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 300,
            pricePerDay: 1499, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Mercedes-C63-AMG-Rental-Dubai.webp']
        },
        {
            brand: 'Bentley', model: 'Continental GTC', year: 2024, bodyType: 'Convertible', fuelType: 'Petrol', transmission: 'Automatic', seats: 4, doors: 2, kmPerDay: 250,
            pricePerDay: 4999, currency: 'AED',
            images: ['https://www.luxuryrentals.gm/wp-content/uploads/2024/11/Bentley-Continental-GTC-Rental-Dubai.webp']
        }
    ]

    for (const v of vehiclesData) {
        await prisma.vehicle.create({
            data: {
                brand: v.brand,
                model: v.model,
                year: v.year,
                bodyType: v.bodyType,
                fuelType: v.fuelType,
                transmission: v.transmission,
                seats: v.seats,
                doors: v.doors,
                kmPerDay: v.kmPerDay,
                pricePerDay: v.pricePerDay,
                currency: v.currency,
                isActive: true,
                images: {
                    create: v.images.map((url, i) => ({ url, isPrimary: i === 0 }))
                }
            }
        })
    }

    console.log('Seeding finished.')
    return 'Seeding finished'
}
