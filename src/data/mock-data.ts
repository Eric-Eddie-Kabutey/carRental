export const MOCK_DATA = {
    // 1. Page Content (Mapped from 'services' to 'home' for landing page)
    pageContent: {
        home: {
            hero: {
                title: 'Car Rental and Chauffeur Services',
                subtitle: 'Rent VIP number plate Cars and Chauffeur services that are crafted for your Sophistication',
                image: 'shen-liu-H2rb85HSrfo-unsplash.jpg'
            },
            intro: {
                title: 'Live your Gambian dream in style with Luxury Rentals',
                summary: 'Cruise in a luxury car. Our team handles every detail, so you can relax and enjoy the city with our chauffeur services in Gambia.'
            },
            rental: {
                title: 'Rent Your Dream Car',
                subtitle: 'Cheap Cars for Rent in Gambia',
                description: 'Travel in style-drive our extraordinary collection of Luxury and Exotic vehicles today!',
                summary: 'Experience premium comfort with our Hyundai Tucson, sophisticated style with the Mercedes CLA, or reliable elegance with the Toyota Corolla. Our handpicked fleet transforms moments into memories. Day rentals to long-term solutions—every pristine vehicle arrives at your door because your time & impression matter.',
                includes: [
                    'Convenient: Self-Drive and Chauffeur Service',
                    'Fast Car Rentals: Short and Long-Term Options',
                    'Flexibility: Hourly, Daily, Weekly and Monthly',
                    '24/7 Support and Instant Online Booking'
                ],
                image: '/vehicles/xc60.avif',
                action: 'car'
            },
            chauffeur: {
                title: 'Rent a Car with Driver',
                subtitle: 'Chauffeur Services in Gambia',
                description: 'Ride in style and elegance with our luxury chauffeur services, perfect for every occasion in Gambia.',
                summary: 'Glide through Gambia in absolute sophistication with our Chauffeur Services. We merge professional excellence with Luxury, ensuring every journey is stylish and punctual. Perfect for VIPs, Weddings, and Airports.',
                includes: [
                    'Cars at our Chauffeur Services: Mercedes-Benz CLA, Hyundai Tucson',
                    'Real-time GPS Tracking & 24/7 Dispatch Support',
                    'Hourly & Event-Based Packages',
                    'Multilingual Drivers Available',
                    'Trained, Uniformed Drivers'
                ],
                image: '/services/thibault-penin-a8r2KKLSntA-unsplash.jpg',
                action: 'service'
            },
            vip: {
                title: 'Drive luxury cars',
                subtitle: 'Experience Luxury',
                description: 'Rent luxury cars in Gambia. Unique Luxury symbols that turn any drive into a statement.',
                summary: 'These highly luxurious cars are more than just cars they are status symbols and conversation starters that demand respect and attention anywhere you go.',
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

    // 3. Testimonials
    testimonials: [
        {
            id: '1',
            name: 'Mahammed Safan',
            content: 'The process was smooth and easy to rent a car in Gambia because of Luxury Rentals and their staff named Mr. Mohammed. He was very helpful in selecting my comfort car which I rented with the help of Mr. Saad. I recommend every person who is going to visit Gambia and want to rent a car, choose LUXURY RENTALS.',
            rating: 5,
            role: '2 months ago',
            isActive: true
        },
        {
            id: '2',
            name: 'Mohammed Shuhaib',
            content: 'I had the best experience with this car rental company! The entire process was smooth, quick, and hassle-free. A special thanks to Mohammed Saad for his excellent service, professionalism, and friendly attitude. He made sure everything was perfectly arranged and went above and beyond to ensure customer satisfaction. Highly recommended!',
            rating: 5,
            role: '2 months ago',
            isActive: true
        },
        {
            id: '3',
            name: 'Travel with Zahid',
            content: 'I rent A Car 2 time and the staff was very helpful and cars always new model with and they guide us very well especially Mr Adeel is very sported person really I enjoy the service but next time also. Thanks Guys Mr Adeel Also and there all team.',
            rating: 5,
            role: '3 months ago',
            isActive: true
        }
    ],

    // 4. FAQs
    faqs: [
        {
            id: '1',
            question: 'How can I pay at Luxury Rentals?',
            answer: 'We accept Visa, MasterCard, AmEx, Cash, online banking & Bitcoin - choose what works best for you at Luxury Rentals!',
            category: 'General',
            order: 1,
            isActive: true
        },
        {
            id: '2',
            question: 'Which luxury supercars can I rent from Luxury Rentals?',
            answer: 'At Luxury Rentals, we offer an extensive fleet of premium & economy vehicles - all fully insured, impeccably maintained & inspected. Our 24/7 support team is always ready to help. Browse our complete catalog of luxury cars with no deposit required at the lowest market prices!',
            category: 'General',
            order: 2,
            isActive: true
        },
        {
            id: '3',
            question: 'How can I modify or cancel my Luxury Rentals reservation?',
            answer: 'Yes, you can modify or cancel your reservation by contacting our customer service team. All changes must be made at least 48 hours in advance. Modifications or cancellations requested with less than 48 hours notice may incur additional fees.',
            category: 'General',
            order: 3,
            isActive: true
        },
        {
            id: '4',
            question: 'What are Luxury Rentals late return fees and policies?',
            answer: 'We rent vehicles on a 24-hour basis with a 1-hour grace period for returns. After that, hourly charges apply. Beyond 3 hours late, full-day charges apply. No grace period for surcharges, fees, protections, or optional equipment - full-day late charges apply immediately for these items.',
            category: 'General',
            order: 4,
            isActive: true
        },
        {
            id: '5',
            question: 'Does Luxury Rentals provide roadside assistance if I encounter issues with my rental car?',
            answer: 'If you encounter issues with your Luxury Rentals vehicle, call us immediately. For minor problems, our operations team will assist on-site. For major malfunctions, we\'ll provide replacement or roadside assistance. Never abandon your vehicle - stay with the car and wait for our service team or authorities. Our 24/7 support ensures you\'re never stranded during your rental.',
            category: 'General',
            order: 5,
            isActive: true
        },
        {
            id: '6',
            question: 'How do I book a car rental with Luxury Rentals?',
            answer: 'Booking with Luxury Rentals is simple: visit luxuryrentals.gm, select your car, call us or email info@luxuryrentals.gm. No deposit required* with lowest prices!',
            category: 'General',
            order: 6,
            isActive: true
        },
        {
            id: '7',
            question: 'Can I book multiple vehicles at once from Luxury Rentals?',
            answer: 'Yes, you can book multiple vehicles at once with Luxury Rentals. Simply select your desired cars and complete the booking. Our team is ready to assist with any questions.',
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
            year: 2022,
            bodyType: 'SUV',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            seats: 5,
            doors: 4,
            kmPerDay: 250,
            pricePerDay: 6500,
            currency: 'GMD',
            isActive: true,
            description: "A versatile and comfortable SUV perfectly suited for Gambian roads.",
            images: [
                { url: '/vehicles/xc60.avif', isPrimary: true },
                { url: '/vehicles/xc60.avif', isPrimary: false },
                { url: '/vehicles/xc60.avif', isPrimary: false },
                { url: '/vehicles/xc60.avif', isPrimary: false },
            ],
            colors: [
                { name: 'Crystal White', hex: '#F8F8F8' }
            ]
        },
        {
            id: '2',
            brand: 'Volvo',
            model: 'XC90',
            year: 2021,
            bodyType: 'SUV',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            seats: 7,
            doors: 4,
            kmPerDay: 200,
            pricePerDay: 8500,
            currency: 'GMD',
            isActive: true,
            description: "A premium SUV with space, comfort, and a smooth ride for long trips.",
            images: [
                { url: '/vehicles/xc90.avif', isPrimary: true },
                { url: '/vehicles/xc90.avif', isPrimary: false },
                { url: '/vehicles/xc90.avif', isPrimary: false },
                { url: '/vehicles/xc90.avif', isPrimary: false },
            ],
            colors: [
                { name: 'Denim Blue', hex: '#1E3A5F' }
            ]
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
            pricePerDay: 4500,
            currency: 'GMD',
            isActive: true,
            description: "Rugged and reliable SUV that handles tough roads confidently.",
            images: [
                { url: '/vehicles/4runner.jpg', isPrimary: true },
                { url: '/vehicles/4runner.jpg', isPrimary: false },
                { url: '/vehicles/4runner.jpg', isPrimary: false },
                { url: '/vehicles/4runner.jpg', isPrimary: false },
            ],
            colors: [
                { name: 'Super White', hex: '#FFFFFF' }
            ]
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
            pricePerDay: 4800,
            currency: 'GMD',
            isActive: true,
            description: "Efficient and comfortable sedan for city driving and daily use.",
            images: [
                { url: '/vehicles/accent.avif', isPrimary: true },
                { url: '/vehicles/accent.avif', isPrimary: false },
                { url: '/vehicles/accent.avif', isPrimary: false },
                { url: '/vehicles/accent.avif', isPrimary: false },
                { url: '/vehicles/accent.avif', isPrimary: false },
            ],
            colors: [
                { name: 'Frost White', hex: '#F0F8FF' }
            ]
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
            pricePerDay: 6500,
            currency: 'GMD',
            isActive: true,
            description: "Luxury sedan with premium comfort and smooth performance.",
            images: [
                { url: '/vehicles/genesis2015.avif', isPrimary: true },
                { url: '/vehicles/genesis2015.avif', isPrimary: false },
                { url: '/vehicles/genesis2015.avif', isPrimary: false },
                { url: '/vehicles/genesis2015.avif', isPrimary: false },
                { url: '/vehicles/genesis2015.avif', isPrimary: false },
            ],
            colors: [
                { name: 'Flame Red', hex: '#CE2029' },
            ]
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
            pricePerDay: 8500,
            currency: 'GMD',
            isActive: true,
            description: "Modern luxury sedan with a refined ride and premium interior.",
            images: [{ url: '/vehicles/genesis2019.jpg', isPrimary: true }],
            colors: [
                { name: 'Flame Red', hex: '#CE2029' },
            ]
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
            pricePerDay: 4500,
            currency: 'GMD',
            isActive: true,
            description: "Stylish luxury sedan with comfort, tech, and smooth handling.",
            images: [
                { url: '/vehicles/genesis2021.avif', isPrimary: true },
                { url: '/vehicles/genesis2021.avif', isPrimary: false },
                { url: '/vehicles/genesis2021.avif', isPrimary: false },
                { url: '/vehicles/genesis2021.avif', isPrimary: false },
                { url: '/vehicles/genesis2021.avif', isPrimary: false },
            ],
            colors: [
                { name: 'Flame Red', hex: '#CE2029' },
            ]
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
            pricePerDay: 4800,
            currency: 'GMD',
            isActive: true,
            description: "Powerful pickup truck with serious road presence and comfort.",
            images: [
                { url: '/vehicles/ram2024.avif', isPrimary: true },
                { url: '/vehicles/ram2024.avif', isPrimary: false },
                { url: '/vehicles/ram2024.avif', isPrimary: false },
                { url: '/vehicles/ram2024.avif', isPrimary: false },
                { url: '/vehicles/ram2024.avif', isPrimary: false },
            ],
            colors: [
                { name: 'Flame Red', hex: '#CE2029' },
            ]
        }
    ]

}
