import { MaterialSymbol } from "@/components/ui/material-symbol";
import Link from "next/link"; import { Button } from "@/components/ui/button";
import { NewsletterForm } from "../_components/NewsletterForm";

const packages = [
    {
        id: "swiss-alps-hiking",
        category: "Adventure",
        title: "Swiss Alps Hiking Adventure",
        location: "Zermatt, Switzerland",
        description: "Experience the breathtaking views of the Swiss Alps with guided hiking tours and cozy cabin stays. Traverse high-altitude trails with expert local mountain guides.",
        duration: "5 Days / 4 Nights",
        rating: 4.9,
        reviews: 45,
        price: 1299,
        originalPrice: 1499,
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000",
        tags: ["Mountain", "Guided", "All-Inclusive"]
    },
    {
        id: "kyoto-cultural",
        category: "Cultural",
        title: "Kyoto Cultural Immersion",
        location: "Kyoto, Japan",
        description: "Dive deep into the history of Japan. Visit ancient temples and participate in authentic tea ceremonies led by masters of the craft.",
        duration: "8 Days / 7 Nights",
        rating: 4.8,
        reviews: 32,
        price: 2450,
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000",
        tags: ["History", "Temples", "Food"]
    },
    {
        id: "maldives-luxury",
        category: "Relaxation",
        title: "Maldives Luxury Escape",
        location: "Maafushi, Maldives",
        description: "Relax in a private overwater bungalow surrounded by turquoise waters. All-inclusive luxury with personalized concierge service.",
        duration: "6 Days / 5 Nights",
        rating: 5.0,
        reviews: 89,
        price: 3899,
        isBestSeller: true,
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000",
        tags: ["Beach", "Luxury", "Romantic"]
    },
    {
        id: "rome-amalfi",
        category: "Discovery",
        title: "Amalfi Coast & Rome Discovery",
        location: "Italy",
        description: "Explore the eternal city of Rome before heading to the stunning cliffs and lemon groves of the Amalfi Coast.",
        duration: "10 Days / 9 Nights",
        rating: 4.9,
        reviews: 124,
        price: 2499,
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000",
        tags: ["Coastal", "History", "Summer"]
    }
];

export default function PackagesPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">
            {/* Minimalist Hero Section */}
            <header className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="section-container relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Curated Experiences
                        </div>
                        <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-[0.9] mb-8">
                            Travel <span className="text-primary italic">Redefined.</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-2xl mb-12">
                            Stop searching and start living. We've hand-picked the world's most incredible journeys so you can focus on the memories.
                        </p>

                        {/* Modern Floating Search Bar */}
                        <div className="flex flex-col md:flex-row bg-white p-2 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 max-w-4xl">
                            <div className="flex-1 flex items-center gap-4 px-6 py-4 border-b md:border-b-0 md:border-r border-slate-100">
                                <MaterialSymbol icon="location_on" size={24} className="text-primary" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Destination</span>
                                    <input type="text" placeholder="Where to?" className="bg-transparent border-none outline-none font-bold text-slate-900 placeholder:text-slate-300 w-full" />
                                </div>
                            </div>
                            <div className="flex-1 flex items-center gap-4 px-6 py-4 border-b md:border-b-0 md:border-r border-slate-100">
                                <MaterialSymbol icon="calendar_today" size={24} className="text-primary" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Travel Dates</span>
                                    <input type="text" placeholder="Add dates" className="bg-transparent border-none outline-none font-bold text-slate-900 placeholder:text-slate-300 w-full" />
                                </div>
                            </div>
                            <Button className="bg-primary text-white hover:bg-slate-900 rounded-2xl md:rounded-2xl px-10 py-8 transition-all font-black text-lg group">
                                Search
                                <MaterialSymbol icon="arrow_forward" size={24} className="group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="py-24">
                <div className="section-container">
                    {/* Filter Navigation */}
                    <div className="flex flex-wrap items-center justify-between gap-8 mb-16">
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 min-w-max">
                            {['All Packages', 'Adventure', 'Cultural', 'Relaxation', 'Winter'].map((cat, idx) => (
                                <button key={cat} className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${idx === 0 ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-slate-400">Sort by</span>
                            <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                                <button className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-slate-900 shadow-sm">Popular</button>
                                <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-slate-600">Price</button>
                            </div>
                        </div>
                    </div>

                    {/* Modern Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                        {packages.map((pkg) => (
                            <Link href={`/packages/${pkg.id}`} key={pkg.id} className="group relative flex flex-col">
                                {/* Image Container with Hover Effects */}
                                <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-6 shadow-2xl shadow-slate-200/50">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    {/* Glassmorphism Overlays */}
                                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                                        <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-2xl text-[10px] font-black uppercase text-white tracking-widest border border-white/30">
                                            {pkg.category}
                                        </div>
                                        {pkg.isBestSeller && (
                                            <div className="px-4 py-2 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20">
                                                Must-Do
                                            </div>
                                        )}
                                    </div>

                                    <div className="absolute bottom-6 right-6 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-2xl text-[10px] font-black uppercase text-white tracking-widest border border-white/10">
                                        {pkg.duration}
                                    </div>

                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                        <p className="text-white/80 text-sm font-medium leading-relaxed line-clamp-2">
                                            {pkg.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="px-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-primary transition-colors">
                                            {pkg.title}
                                        </h3>
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <MaterialSymbol icon="star" size={16} fill className="text-amber-400" />
                                            <span className="text-sm font-black text-slate-900">{pkg.rating}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mb-6 text-slate-400 font-bold text-xs uppercase tracking-wider">
                                        <MaterialSymbol icon="location_on" size={14} />
                                        {pkg.location}
                                    </div>

                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Price starts at</span>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-3xl font-black text-slate-900">${pkg.price}</span>
                                                {pkg.originalPrice && (
                                                    <span className="text-sm font-bold text-slate-300 line-through">${pkg.originalPrice}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <MaterialSymbol icon="arrow_outward" size={28} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="mt-24 flex justify-center">
                        <button className="px-12 py-6 border-2 border-slate-100 text-slate-900 font-black rounded-3xl hover:bg-slate-50 transition-all flex items-center gap-4 text-lg">
                            Load More Journeys
                            <MaterialSymbol icon="refresh" size={24} />
                        </button>
                    </div>
                </div>
            </main>

            {/* Newsletter Section */}
            <div className="mb-24">
                <NewsletterForm variant="section" noBackground={true} />
            </div>


            <NewsletterForm variant="section" />
        </div>
    );
}
