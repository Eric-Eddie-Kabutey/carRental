export const MOCK_DATA = {
    // 1. Page Content (Mapped from 'services' to 'home' for landing page)
    pageContent: {
        home: {
            hero: {
                title: 'Affordable Car Rental & Chauffeur Services',
                subtitle: 'Reliable vehicles and professional drivers—easy booking, fair prices, and smooth trips across The Gambia.',
                image: 'shen-liu-H2rb85HSrfo-unsplash.jpg'
            },
            intro: {
                title: 'Explore The Gambia with Easy Car Rental',
                summary: 'Get around with affordable, reliable cars and stress-free chauffeur services. We handle the details so you can focus on your trip.'
            },
            rental: {
                title: 'Rent a Car in Minutes',
                subtitle: 'Affordable Cars for Rent in Gambia',
                description: 'Clean, reliable vehicles for daily use, business trips, and family travel—book today!',
                summary:
                    'Choose from comfortable SUVs, practical sedans, and budget-friendly options that fit your plans. Our fleet is well-maintained and ready when you are—whether you need a car for a day, a week, or long-term. We deliver to your location because your time matters.',
                includes: [
                    'Convenient: Self-Drive and Chauffeur Service',
                    'Fast Rentals: Short and Long-Term Options',
                    'Flexible Plans: Hourly, Daily, Weekly and Monthly',
                    '24/7 Support and Instant Booking'
                ],
                image: '/vehicles/xc60.jpg',
                action: 'car'
            },
            chauffeur: {
                title: 'Rent a Car with Driver',
                subtitle: 'Chauffeur Services in Gambia',
                description: 'Professional drivers, reliable cars, and on-time pickups—perfect for any occasion in The Gambia.',
                summary:
                    'Move around The Gambia comfortably with our chauffeur services. We combine experienced drivers with reliable vehicles to keep every trip smooth, safe, and punctual—ideal for airport runs, events, and business travel.',
                includes: [
                    'Available Cars: Mercedes-Benz CLA, Hyundai Tucson',
                    'Real-time GPS Tracking & 24/7 Dispatch Support',
                    'Hourly & Event-Based Packages',
                    'Multilingual Drivers Available',
                    'Trained, Professional Drivers'
                ],
                image: '/services/thibault-penin-a8r2KKLSntA-unsplash.jpg',
                action: 'service'
            },
            vip: {
                title: 'Premium Cars When You Need Them',
                subtitle: 'Comfort & Style',
                description: 'Upgrade your ride with premium options—comfort, presence, and a smooth driving experience.',
                summary:
                    'Want something more premium for a special moment? Choose from our higher-end vehicles for extra comfort and a polished feel—great for weddings, photos, and important meetings.',
                includes: [],
                image: '/vehicles/genesis2021.avif',
                action: 'car'
            }
        }
    },


    // 2. Brands
    brands: [
        { id: '1', name: 'Mercedes', file: 'mercedes-benz-9-20260108093916.svg', isActive: true },
        { id: '2', name: 'Toyota', file: 'toyota-7-20260108093456.svg', isActive: true },
        { id: '3', name: 'BMW', file: 'bmw-2-20260108094138.svg', isActive: true },
        { id: '4', name: 'Rolls Royce', file: 'rolls-royce-20260108093738.svg', isActive: true },
        { id: '5', name: 'Porsche', file: 'porsche-6-20260108093833.svg', isActive: true },
        { id: '6', name: 'Bentley', file: 'bentley-motors-2-20260108155752.svg', isActive: true }
    ],

    links: [
        { id: '1', name: 'instagram', href: 'https://instagram.com' },
        { id: '2', name: 'youtube', href: 'https://youtube.com' },
        { id: '3', name: 'facebook', href: 'https://facebook.com' },
        { id: '4', name: 'whatsapp', href: 'https://wa.me/+2207862550' },
    ],

    // 3. Testimonials
    testimonials: [
        {
            id: '1',
            name: 'Eric Kabutey',
            content: 'Renting a car in The Gambia was super smooth thanks to Easy Car Rentals. The team helped me choose an affordable option that was still really comfortable and reliable. If you’re visiting and need a dependable car without overpaying, Easy Car Rentals is the way to go.',
            rating: 4,
            date: '21 Dec, 2025',
            isActive: true
        },
        {
            id: '2',
            name: 'Isata P.B Dainkeh',
            content: 'I had an amazing experience with this car rental company. The process was quick, simple, and totally hassle-free. Everything was well arranged and the vehicle performed perfectly. Highly recommended if you want something affordable and dependable.',
            rating: 5,
            date: '29 Nov, 2025',
            isActive: true
        },
        {
            id: '3',
            name: 'Richard Kofi',
            content: 'I’ve rented a car from Easy Car Rentals twice, and both times the service was excellent. The staff is very helpful, and the cars are always clean, well-maintained, and reliable—plus the prices are affordable. I really enjoyed the service and I’ll definitely rent again next time.',
            rating: 4,
            date: '15 Jan, 2026',
            isActive: true
        }
    ],

    // 4. FAQs
    faqs: [
        {
            id: '1',
            question: 'How can I pay at Easy Car Rental?',
            answer:
                'We accept Visa, MasterCard, WAVE, cash, online banking, and crypto, so you can pay in the way that’s easiest for you.',
            category: 'General',
            order: 1,
            isActive: true
        },
        {
            id: '2',
            question: 'Which cars can I rent from Easy Car Rental?',
            answer:
                'We offer a wide range of vehicles—from premium options to affordable economy cars. Every vehicle is fully insured, well-maintained, and inspected for reliability. Our support team is available 24/7, and you can browse our full catalog with no deposit required.',
            category: 'General',
            order: 2,
            isActive: true
        },
        {
            id: '3',
            question: 'How can I modify or cancel my Easy Car Rental reservation?',
            answer:
                'You can modify or cancel your reservation by contacting our customer service team. Changes should be made at least 48 hours before your booking. Requests made within 48 hours may incur additional fees.',
            category: 'General',
            order: 3,
            isActive: true
        },
        {
            id: '4',
            question: 'What are Easy Car Rental late return fees and policies?',
            answer:
                'Rentals are charged in 24-hour periods with a 1-hour grace period for returns. After 1 hour, hourly charges apply. If a vehicle is returned more than 3 hours late, a full-day charge applies. Optional items (protections, fees, add-ons, and equipment) are charged as a full day immediately if returned late.',
            category: 'General',
            order: 4,
            isActive: true
        },
        {
            id: '5',
            question: 'Does Easy Car Rental provide roadside assistance if I encounter issues with my rental car?',
            answer:
                'Yes. If you experience any issues, contact us immediately. For minor problems, our operations team can assist on-site. For major issues, we’ll arrange roadside assistance or provide a replacement vehicle when available. Please don’t abandon the vehicle—stay with it and wait for our team or the appropriate authorities. Our 24/7 support is here to keep you safe and moving.',
            category: 'General',
            order: 5,
            isActive: true
        },
        {
            id: '6',
            question: 'How do I book a car rental with Easy Car Rental?',
            answer:
                'Booking is easy: visit easycarrentals.gm, choose your vehicle, and then call us on +220 7862550 or reach out to us on whatsapp to confirm. We offer reliable cars at great prices, with no deposit required*.',
            category: 'General',
            order: 6,
            isActive: true
        },
        {
            id: '7',
            question: 'Can I book multiple vehicles at once from Easy Car Rental?',
            answer:
                'Yes—you can book multiple vehicles at once. Select the cars you want and complete your booking, or contact our team and we’ll help you arrange everything quickly.',
            category: 'General',
            order: 7,
            isActive: true
        }
    ],


    // 5. Vehicles
    vehicles: [
        {
            id: '1',
            brand: 'Volvo',
            model: 'XC60',
            year: 2008,
            bodyType: 'SUV',
            fuelType: 'Diesel',
            transmission: 'Automatic',
            seats: 7,
            doors: 4,
            kmPerDay: 250,
            currency: 'GMD',
            prices: {
                kombo: 4000,
                upcountry: 7500,
                outsideCountry: 10000
            },
            isActive: true,
            description: "A versatile and comfortable SUV perfectly suited for Gambian roads.",
            images: [
                { url: '/vehicles/xc60.jpg', isPrimary: true },
                { url: '/vehicles/xc60.jpg', isPrimary: false },
                { url: '/vehicles/xc60.jpg', isPrimary: false },
                { url: '/vehicles/xc60.jpg', isPrimary: false }
            ],
            colors: [{ name: 'Crystal White', hex: '#F8F8F8' }]
        },
        {
            id: '2',
            brand: 'Volvo',
            model: 'XC90',
            year: 2009,
            bodyType: 'SUV',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            seats: 7,
            doors: 4,
            kmPerDay: 200,
            currency: 'GMD',
            prices: {
                kombo: 4000,
                upcountry: 7500,
                outsideCountry: 10000
            },
            isActive: true,
            description: "A premium SUV with space, comfort, and a smooth ride for long trips.",
            images: [
                { url: '/vehicles/xc90.jpg', isPrimary: true },
                { url: '/vehicles/xc90.jpg', isPrimary: false },
                { url: '/vehicles/xc90.jpg', isPrimary: false },
                { url: '/vehicles/xc90.jpg', isPrimary: false }
            ],
            colors: [{ name: 'Denim Blue', hex: '#1E3A5F' }]
        },
        {
            id: '3',
            brand: 'Toyota',
            model: '4Runner',
            year: 2022,
            bodyType: 'SUV',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            seats: 5,
            doors: 4,
            kmPerDay: 300,
            currency: 'GMD',
            prices: {
                kombo: 3000,
                upcountry: 5000,
                outsideCountry: null
            },
            isActive: true,
            description: "Rugged and reliable SUV that handles tough roads confidently.",
            images: [
                { url: '/vehicles/4runner.jpg', isPrimary: true },
                { url: '/vehicles/4runner.jpg', isPrimary: false },
                { url: '/vehicles/4runner.jpg', isPrimary: false },
                { url: '/vehicles/4runner.jpg', isPrimary: false }
            ],
            colors: [{ name: 'Super White', hex: '#FFFFFF' }]
        },
        {
            id: '4',
            brand: 'Hyundai',
            model: 'Accent',
            year: 2011,
            bodyType: 'Sedan',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            seats: 5,
            doors: 4,
            kmPerDay: 300,
            currency: 'GMD',
            prices: {
                kombo: 3000,
                upcountry: null,
                outsideCountry: null
            },
            isActive: true,
            description: "Efficient and comfortable sedan for city driving and daily use.",
            images: [
                { url: '/vehicles/accent.avif', isPrimary: true },
                { url: '/vehicles/accent.avif', isPrimary: false },
                { url: '/vehicles/accent.avif', isPrimary: false },
                { url: '/vehicles/accent.avif', isPrimary: false },
                { url: '/vehicles/accent.avif', isPrimary: false }
            ],
            colors: [{ name: 'Frost White', hex: '#F0F8FF' }]
        },
        {
            id: '5',
            brand: 'Genesis',
            model: 'Genesis',
            year: 2015,
            bodyType: 'Sedan',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            seats: 5,
            doors: 4,
            kmPerDay: 250,
            currency: 'GMD',
            prices: {
                kombo: 7000,
                upcountry: 10000,
                outsideCountry: 15000
            },
            isActive: true,
            description: "Luxury sedan with premium comfort and smooth performance.",
            images: [
                { url: '/vehicles/genesis2015.avif', isPrimary: true },
                { url: '/vehicles/genesis2015.avif', isPrimary: false },
                { url: '/vehicles/genesis2015.avif', isPrimary: false },
                { url: '/vehicles/genesis2015.avif', isPrimary: false },
                { url: '/vehicles/genesis2015.avif', isPrimary: false }
            ],
            colors: [{ name: 'Flame Red', hex: '#CE2029' }]
        },
        {
            id: '6',
            brand: 'Genesis',
            model: 'Genesis',
            year: 2019,
            bodyType: 'Sedan',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            seats: 5,
            doors: 4,
            kmPerDay: 200,
            currency: 'GMD',
            prices: {
                kombo: 7000,
                upcountry: 10000,
                outsideCountry: 15000
            },
            isActive: true,
            description: "Modern luxury sedan with a refined ride and premium interior.",
            images: [{ url: '/vehicles/genesis2019.jpg', isPrimary: true }],
            colors: [{ name: 'Flame Red', hex: '#CE2029' }]
        },
        {
            id: '7',
            brand: 'Genesis',
            model: 'Genesis',
            year: 2021,
            bodyType: 'Sedan',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            seats: 5,
            doors: 4,
            kmPerDay: 300,
            currency: 'GMD',
            prices: {
                kombo: 7000,
                upcountry: 10000,
                outsideCountry: 15000
            },
            isActive: true,
            description: "Stylish luxury sedan with comfort, tech, and smooth handling.",
            images: [
                { url: '/vehicles/genesis2021.avif', isPrimary: true },
                { url: '/vehicles/genesis2021.avif', isPrimary: false },
                { url: '/vehicles/genesis2021.avif', isPrimary: false },
                { url: '/vehicles/genesis2021.avif', isPrimary: false },
                { url: '/vehicles/genesis2021.avif', isPrimary: false }
            ],
            colors: [{ name: 'Flame Red', hex: '#CE2029' }]
        },
        {
            id: '8',
            brand: 'RAM',
            model: '1500',
            year: 2024,
            bodyType: 'Truck',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            seats: 5,
            doors: 4,
            kmPerDay: 300,
            currency: 'GMD',
            prices: {
                kombo: 10000,
                upcountry: 15000,
                outsideCountry: 20000
            },
            isActive: true,
            description: "Powerful pickup truck with serious road presence and comfort.",
            images: [
                { url: '/vehicles/ram2024.avif', isPrimary: true },
                { url: '/vehicles/ram2024.avif', isPrimary: false },
                { url: '/vehicles/ram2024.avif', isPrimary: false },
                { url: '/vehicles/ram2024.avif', isPrimary: false },
                { url: '/vehicles/ram2024.avif', isPrimary: false }
            ],
            colors: [{ name: 'Flame Red', hex: '#CE2029' }]
        }
    ]


}
