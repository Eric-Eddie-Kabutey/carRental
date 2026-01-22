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
                title: 'Live your Gambia dream in style with Luxury Rentals',
                summary: 'Cruise in a luxury car. Our team handles every detail, so you can relax and enjoy the city with our chauffeur services in Gambia.'
            },
            rental: {
                title: 'Rent Your Dream Car',
                subtitle: 'Luxury Car Rental Services in Gambia',
                description: 'Travel in style-drive our extraordinary collection of Luxury and Exotic vehicles today!',
                summary: 'Experience premium comfort with our Hyundai Tucson, sophisticated style with the Mercedes CLA, or reliable elegance with the Toyota Corolla. Our handpicked fleet transforms moments into memories. Day rentals to long-term solutions—every pristine vehicle arrives at your door because your time & impression matter.',
                includes: [
                    'Convenient: Self-Drive and Chauffeur Service',
                    'Fast Car Rentals: Short and Long-Term Options',
                    'Flexibility: Hourly, Daily, Weekly and Monthly',
                    '24/7 Support and Instant Online Booking'
                ],
                image: '/services/freddy-g--e3Qdeqh_E4-unsplash.jpg',
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
                title: 'Drive Like a VIP',
                subtitle: 'Rent Cars with VIP Number Plates',
                description: 'Rent Cars with VIP number plates in Gambia, unique Luxury symbols that turn any drive into a statement.',
                summary: 'These highly demanded plates are more than just numbers they are status symbols and conversation starters that demand respect and attention anywhere you go.',
                includes: [],
                image: '/services/bornil-amin-L6Or6uTKKMg-unsplash.jpg',
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
        },
        {
            id: '4',
            name: 'Rohail Awan',
            content: 'Had a great experience with Mr Malik from Luxury Rentals. Professional. The car was in perfect condition and delivery was free. Definitely recommend renting through him!',
            rating: 5,
            role: '2 months ago',
            isActive: true
        },
        {
            id: '5',
            name: 'Suleiman Jobe',
            content: 'Best luxury car rental in Banjul! The service is top notch. I rented a GLE for a wedding and it was spotless.',
            rating: 5,
            role: '1 month ago',
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
        // Lamborghini
        {
            id: '1', brand: 'Hyundai', model: 'Tucson', year: 2022, bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 250,
            pricePerDay: 6500, currency: 'GMD', isActive: true,
            description: "A versatile and comfortable SUV perfectly suited for Gambian roads. The Hyundai Tucson offers modern features, a spacious interior, and excellent fuel efficiency for your daily travels.",
            images: [{ url: '/vehicles/duncan-winslow-Xs69Y3k1ru4-unsplash.jpg', isPrimary: true }]
        },
        {
            id: '2', brand: 'Mercedes-Benz', model: 'CLA Coupe', year: 2021, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 4, doors: 4, kmPerDay: 200,
            pricePerDay: 8500, currency: 'GMD', isActive: true,
            description: "Experience the sleek design and premium feel of the Mercedes-Benz CLA. This compact luxury coupe combines sportiness with elegance, making it an ideal choice for city driving and special occasions.",
            images: [{ url: '/vehicles/erik-mclean-lv4FWmDfb4Y-unsplash.jpg', isPrimary: true }]
        },
        {
            id: '3', brand: 'Toyota', model: 'Corolla', year: 2022, bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 300,
            pricePerDay: 4500, currency: 'GMD', isActive: true,
            description: "The world's most reliable sedan, now available for your journey in Gambia. The Toyota Corolla provides a smooth ride, advanced safety features, and legendary durability for any trip.",
            images: [{ url: '/vehicles/krish-parmar-HrbMyWmS7yU-unsplash.jpg', isPrimary: true }]
        },
        {
            id: '4', brand: 'Honda', model: 'Civic', year: 2021, bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 300,
            pricePerDay: 4800, currency: 'GMD', isActive: true,
            description: "Sporty, efficient, and packed with technology. The Honda Civic is designed to deliver a fun driving experience while maintaining the comfort and reliability you expect for your rental needs.",
            images: [{ url: '/vehicles/topsphere-media-ht14f-Hvtcg-unsplash.jpg', isPrimary: true }]
        }

        // // Ferrari
        // {
        //     id: 'ferrari-296-gtb', brand: 'Ferrari', model: '296 GTB', year: 2024, bodyType: 'Coupe', fuelType: 'Hybrid', transmission: 'Automatic', seats: 2, doors: 2, kmPerDay: 250,
        //     pricePerDay: 5999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'ferrari-f8-tributo', brand: 'Ferrari', model: 'F8 Tributo', year: 2023, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 2, doors: 2, kmPerDay: 200,
        //     pricePerDay: 5499, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'ferrari-sf90-stradale', brand: 'Ferrari', model: 'SF90 Stradale', year: 2024, bodyType: 'Coupe', fuelType: 'Hybrid', transmission: 'Automatic', seats: 2, doors: 2, kmPerDay: 250,
        //     pricePerDay: 8999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'ferrari-roma', brand: 'Ferrari', model: 'Roma', year: 2023, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 4, doors: 2, kmPerDay: 200,
        //     pricePerDay: 4999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800', isPrimary: true }]
        // },

        // // Rolls Royce
        // {
        //     id: 'rolls-royce-cullinan', brand: 'Rolls Royce', model: 'Cullinan', year: 2024, bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 200,
        //     pricePerDay: 7999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1631295868223-632658513171?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'rolls-royce-ghost', brand: 'Rolls Royce', model: 'Ghost', year: 2023, bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 200,
        //     pricePerDay: 6999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1631295868223-632658513171?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'rolls-royce-phantom', brand: 'Rolls Royce', model: 'Phantom', year: 2024, bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 200,
        //     pricePerDay: 8999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1631295868223-632658513171?auto=format&fit=crop&w=800', isPrimary: true }]
        // },

        // // Mercedes
        // {
        //     id: 'mercedes-s-class-s500', brand: 'Mercedes', model: 'S-Class S500', year: 2024, bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 300,
        //     pricePerDay: 1499, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1618765373808-0b5c1970258d?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'mercedes-g63-amg', brand: 'Mercedes', model: 'G63 AMG', year: 2024, bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 250,
        //     pricePerDay: 3999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1618765373808-0b5c1970258d?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'mercedes-amg-gt-63s', brand: 'Mercedes', model: 'AMG GT 63S', year: 2023, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 4, doors: 4, kmPerDay: 250,
        //     pricePerDay: 2999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1618765373808-0b5c1970258d?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'mercedes-eqs-450', brand: 'Mercedes', model: 'EQS 450+', year: 2024, bodyType: 'Sedan', fuelType: 'Electric', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 300,
        //     pricePerDay: 1999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1618765373808-0b5c1970258d?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'mercedes-maybach-s680', brand: 'Mercedes', model: 'Maybach S680', year: 2024, bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 200,
        //     pricePerDay: 4999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1618765373808-0b5c1970258d?auto=format&fit=crop&w=800', isPrimary: true }]
        // },

        // // Porsche
        // {
        //     id: 'porsche-911-turbo-s', brand: 'Porsche', model: '911 Turbo S', year: 2024, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 4, doors: 2, kmPerDay: 250,
        //     pricePerDay: 3999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'porsche-taycan-turbo-s', brand: 'Porsche', model: 'Taycan Turbo S', year: 2024, bodyType: 'Sedan', fuelType: 'Electric', transmission: 'Automatic', seats: 4, doors: 4, kmPerDay: 300,
        //     pricePerDay: 2999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'porsche-cayenne-turbo', brand: 'Porsche', model: 'Cayenne Turbo', year: 2023, bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 300,
        //     pricePerDay: 1999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'porsche-panamera-turbo-s', brand: 'Porsche', model: 'Panamera Turbo S', year: 2024, bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', seats: 4, doors: 4, kmPerDay: 250,
        //     pricePerDay: 2499, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=800', isPrimary: true }]
        // },

        // // McLaren
        // {
        //     id: 'mclaren-720s', brand: 'McLaren', model: '720S', year: 2023, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 2, doors: 2, kmPerDay: 200,
        //     pricePerDay: 5999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'mclaren-artura', brand: 'McLaren', model: 'Artura', year: 2024, bodyType: 'Coupe', fuelType: 'Hybrid', transmission: 'Automatic', seats: 2, doors: 2, kmPerDay: 200,
        //     pricePerDay: 4999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'mclaren-gt', brand: 'McLaren', model: 'GT', year: 2023, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 2, doors: 2, kmPerDay: 250,
        //     pricePerDay: 3999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800', isPrimary: true }]
        // },

        // // Bentley
        // {
        //     id: 'bentley-bentayga', brand: 'Bentley', model: 'Bentayga', year: 2024, bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 250,
        //     pricePerDay: 3999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'bentley-continental-gt', brand: 'Bentley', model: 'Continental GT', year: 2024, bodyType: 'Coupe', fuelType: 'Petrol', transmission: 'Automatic', seats: 4, doors: 2, kmPerDay: 250,
        //     pricePerDay: 4499, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'bentley-flying-spur', brand: 'Bentley', model: 'Flying Spur', year: 2023, bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 250,
        //     pricePerDay: 3499, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800', isPrimary: true }]
        // },

        // Additional Premium Models
        // {
        //     id: 'mercedes-gle-450', brand: 'Mercedes', model: 'GLE 450', year: 2024, bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 300,
        //     pricePerDay: 899, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1618765373808-0b5c1970258d?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'porsche-macan-s', brand: 'Porsche', model: 'Macan S', year: 2024, bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 300,
        //     pricePerDay: 1299, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'mercedes-c63-amg', brand: 'Mercedes', model: 'C63 AMG', year: 2023, bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic', seats: 5, doors: 4, kmPerDay: 300,
        //     pricePerDay: 1499, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1618765373808-0b5c1970258d?auto=format&fit=crop&w=800', isPrimary: true }]
        // },
        // {
        //     id: 'bentley-continental-gtc', brand: 'Bentley', model: 'Continental GTC', year: 2024, bodyType: 'Convertible', fuelType: 'Petrol', transmission: 'Automatic', seats: 4, doors: 2, kmPerDay: 250,
        //     pricePerDay: 4999, currency: 'AED', isActive: true,
        //     description: "Experience the ultimate in luxury and performance with this premium vehicle. Whether for a special occasion or a weekend getaway, this car offers unmatched comfort and style.",
        //     images: [{ url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800', isPrimary: true }]
        // }
    ]
}
