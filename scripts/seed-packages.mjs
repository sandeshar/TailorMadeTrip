import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: '.env' });

// We use relative paths for imports in scripts, or we can use the full path
// Since this is a .mjs file, we might have issues with TS files. 
// However, we can use mongoose directly and define schemas if needed, 
// or use a simpler approach for a seeder.

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Please define the MONGODB_URI environment variable in .env.local');
    process.exit(1);
}

// Define Schemas inline to avoid TS/ESM import complexities for a simple script
const PackageCategorySchema = new mongoose.Schema({
    name: String,
    slug: String,
    order: Number,
}, { timestamps: true });

const PackageSchema = new mongoose.Schema({
    title: String,
    slug: String,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'PackageCategory' },
    description: String,
    duration: String,
    price: Number,
    image: String,
    isBestSeller: Boolean,
    tripGrade: String,
    startsAt: String,
    endsAt: String,
    features: [String],
    itinerary: [{
        day: Number,
        title: String,
        content: String,
        proTip: String
    }],
    highlights: [String],
    inclusions: [String],
    exclusions: [String],
    status: String,
}, { timestamps: true });

const PackageCategory = mongoose.models.PackageCategory || mongoose.model('PackageCategory', PackageCategorySchema);
const Package = mongoose.models.Package || mongoose.model('Package', PackageSchema);

const seedData = async () => {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('Connected successfully.');

        // 1. Create Categories
        console.log('Creating categories...');
        const categories = [
            { name: 'Trekking in Nepal', slug: 'trekking-in-nepal', order: 1 },
            { name: 'Peak Climbing', slug: 'peak-climbing', order: 2 },
            { name: 'Tours & Culture', slug: 'tours-and-culture', order: 3 },
            { name: 'Adventure Sports', slug: 'adventure-sports', order: 4 },
        ];

        const createdCategories = [];
        for (const cat of categories) {
            const existing = await PackageCategory.findOne({ slug: cat.slug });
            if (existing) {
                createdCategories.push(existing);
            } else {
                const newCat = await PackageCategory.create(cat);
                createdCategories.push(newCat);
            }
        }
        console.log(`Ensured ${createdCategories.length} categories.`);

        // 2. Create Packages
        console.log('Creating packages...');
        const packages = [
            {
                title: 'Everest Base Camp Trek',
                slug: 'everest-base-camp-trek',
                categoryId: createdCategories[0]._id,
                description: '<p>The Everest Base Camp trek is one of the most famous trekking routes in the world. It offers breathtaking views of the world\'s highest peaks and a deep dive into Sherpa culture.</p>',
                duration: '14 Days',
                price: 1250,
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop',
                isBestSeller: true,
                tripGrade: 'Hard',
                startsAt: 'Kathmandu',
                endsAt: 'Kathmandu',
                features: ['Sherpa Guides', 'High Altitude', 'Iconic Views'],
                highlights: [
                    'Stand at the foot of the world\'s highest mountain',
                    'Visit the historic Tengboche Monastery',
                    'Stunning views from Kala Patthar',
                    'Experience Sherpa hospitality'
                ],
                inclusions: [
                    'Kathmandu-Lukla flights',
                    'Trekking permits',
                    'Professional guide',
                    'All meals during trek'
                ],
                exclusions: [
                    'International flights',
                    'Travel insurance',
                    'Personal expenses',
                    'Tips for staff'
                ],
                itinerary: [
                    { day: 1, title: 'Arrival in Kathmandu', content: '<p>Transfer to your hotel and trek briefing.</p>', proTip: 'Rest well for the adventure ahead.' },
                    { day: 2, title: 'Fly to Lukla, Trek to Phakding', content: '<p>A scenic flight followed by a 3-hour walk.</p>', proTip: 'Keep your camera ready for the flight.' }
                ],
                status: 'active'
            },
            {
                title: 'Annapurna Circuit Trek',
                slug: 'annapurna-circuit-trek',
                categoryId: createdCategories[0]._id,
                description: '<p>A classic trek that circles the Annapurna massif, crossing the high Thorong La Pass (5,416m).</p>',
                duration: '12 Days',
                price: 980,
                image: 'https://images.unsplash.com/photo-1582294109823-3b609e9908cf?q=80&w=2070&auto=format&fit=crop',
                isBestSeller: true,
                tripGrade: 'Moderate-Hard',
                startsAt: 'Kathmandu / Besisahar',
                endsAt: 'Pokhara',
                features: ['Varied Landscapes', 'High Pass', 'Teahouse Experience'],
                highlights: [
                    'Crossing Thorong La Pass',
                    'Visit the holy Muktinath temple',
                    'Panoramic views of Dhaulagiri and Annapurna',
                    'Relax in Pokhara lakeside'
                ],
                inclusions: [
                    'All ground transfers',
                    'Permits and TIMS card',
                    'Experienced guide and porter',
                    'Accommodation and meals'
                ],
                exclusions: [
                    'Bar bills and bottled water',
                    'Emergency evacuation',
                    'Gratuities'
                ],
                itinerary: [
                    { day: 1, title: 'Drive to Besisahar', content: '<p>Scenic drive along the Trishuli river.</p>' },
                    { day: 2, title: 'Trek to Chame', content: '<p>Entering the higher valleys with pine forests.</p>' }
                ],
                status: 'active'
            },
            {
                title: 'Mardi Himal Base Camp Trek',
                slug: 'mardi-himal-base-camp-trek',
                categoryId: createdCategories[0]._id,
                description: '<p>A short and stunning trek in the Annapurna region that offers close-up views of Machhapuchhre (Fishtail).</p>',
                duration: '6 Days',
                price: 450,
                image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1974&auto=format&fit=crop',
                isBestSeller: false,
                tripGrade: 'Moderate',
                startsAt: 'Pokhara',
                endsAt: 'Pokhara',
                features: ['Hidden Gem', 'Short Duration', 'Great Views'],
                highlights: [
                    'Close up view of Mt. Machhapuchhre',
                    'Walking through lush rhododendron forests',
                    'Stunning sunrise from High Camp'
                ],
                inclusions: ['Guide', 'Permits', 'Meals during trek'],
                exclusions: ['Personal gear', 'Insurance'],
                status: 'active'
            }
        ];

        for (const pkg of packages) {
            await Package.findOneAndUpdate(
                { slug: pkg.slug },
                pkg,
                { upsert: true, new: true }
            );
        }
        console.log(`Ensured ${packages.length} packages.`);

        console.log('Seeding completed successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
