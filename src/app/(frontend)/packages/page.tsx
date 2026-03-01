import { MaterialSymbol } from "@/components/ui/material-symbol";
import Link from "next/link";
import { HeroSection } from "../_components/HeroSection";

const packages = [
    {
        id: "swiss-alps-hiking",
        category: "Adventure",
        title: "Swiss Alps Hiking Adventure",
        description: "Experience the breathtaking views of the Swiss Alps with guided hiking tours and cozy cabin stays.",
        duration: "5 Days / 4 Nights",
        rating: 4.9,
        reviews: 45,
        price: 1299,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_qLFK844cgSxAcmrzj19HgZoC9smhWLWHvQNlRigD7L_I7wZFh5ltIi1N2wFryKdxnaYl7pN2wo2Yygdap4bsGIw-huUueYCu8W4uxpNc8bBJx9VknZE_PE1OU3XNn0scShnVWf8z_kpH7rs6OqRvpPsR3bEuq7jKm0UDyAu0wo3kKJYCYPePu7cMkl2N6nW8eqlZUQlrmPzkfoiXenVrzBNqzw5r3HL0FOmAQhlwszq5QKqnnity-B-NFcqF8_VcebLRS4-eyh9r",
    },
    {
        id: "kyoto-cultural",
        category: "Cultural",
        title: "Kyoto Cultural Immersion",
        description: "Dive deep into the history of Japan. Visit ancient temples and participate in tea ceremonies.",
        duration: "8 Days / 7 Nights",
        rating: 4.8,
        reviews: 32,
        price: 2450,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOr6Udhy0iLbK87FBUrsd-wAQcXFU9pToUbCQEuJs7yq-bknLkUbU8bTXlUq60c0RuqOVYqRH4YpL0vA1uFzNbl8m4HU1PJ_yaBGZT4lfp8ZKYQUL_4DGcvN6mBn6yTkroA9uSw7Xo92ijMvbHctdX5PXr7cMlJ4oCUQmdCvu3iEqHyD4cbhZeHto5OLGo9cqjcPNuQXrlaUyKg6JIuKwmP1m_5BdkXGwGCGb80Pi9EPp1RCXKqEw3saIT1DAC1FNfQuuECwSVFx75",
    },
    {
        id: "maldives-luxury",
        category: "Relaxation",
        title: "Maldives Luxury Escape",
        description: "Relax in a private overwater bungalow surrounded by turquoise waters. All-inclusive luxury.",
        duration: "6 Days / 5 Nights",
        rating: 5.0,
        reviews: 89,
        price: 3899,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-geBB_Lf0WOOOTIhPYXeOjlb77BxCG-iZKidqbCLJD14G4tDTYtCziA9WLBjSdun2knqaJPvG3hK_LFc3TyLPJqCKrtdWKsHrmHd9Pmaca7PaGm9m49vg_tIxPbv5Fiy9dDIn6eVs4bUMiqRIbGjpwq7gaI7IfPYVKNVjVyRRbYvpQkeKupTIoxKq8MsRdBNZaDrrQXc53okr_BG1oajVjyt7tt_j9vkbsfsV4y4sqcP4_guLS7iSI3FlCiP0aUkLN0u4wR9rUnNi",
        isBestSeller: true,
    },
];

export default function PackagesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title="Curated Travel Packages"
                subtitle="Hand-picked experiences designed for comfort, adventure, and unforgettable memories."
                badgeText="Tour Packages"
                backgroundImage="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2070"
                showSearch={true}
            />

            <main className="flex-1 py-12 bg-slate-50">
                <div className="section-container">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
                        <div>
                            <h2 className="text-slate-900 text-2xl font-bold leading-tight tracking-tight">Available Packages</h2>
                            <p className="text-slate-500 mt-1 text-sm font-normal">Showing the best matches for your search</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="font-medium text-slate-500">Sort by:</span>
                            <div className="relative">
                                <select className="appearance-none bg-white border border-slate-200 text-slate-700 py-2 pl-4 pr-10 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium shadow-sm">
                                    <option>Recommended</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Duration: Shortest</option>
                                    <option>Duration: Longest</option>
                                </select>
                                <MaterialSymbol icon="expand_more" className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        <aside className="w-full lg:w-72 flex-shrink-0">
                            <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col gap-6">
                                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                                    <h3 className="font-bold text-lg text-slate-900">Filters</h3>
                                    <button className="text-primary text-sm font-medium hover:underline">Reset</button>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="font-bold text-sm text-slate-700">Destination</h4>
                                    <div className="space-y-2">
                                        {['Europe', 'Asia', 'North America', 'South America'].map((dest) => (
                                            <label key={dest} className="flex items-center gap-3 cursor-pointer group">
                                                <input className="rounded border-slate-300 text-primary focus:ring-primary/30 size-4" type="checkbox" defaultChecked={dest === 'Asia'} />
                                                <span className="text-sm text-slate-600 group-hover:text-slate-900">{dest}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-slate-100">
                                    <h4 className="font-bold text-sm text-slate-700">Price Range</h4>
                                    <div className="flex items-center gap-2">
                                        <div className="relative w-full">
                                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 text-xs">$</span>
                                            <input className="w-full pl-5 pr-2 py-1.5 text-sm border border-slate-200 rounded-md focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="Min" type="number" />
                                        </div>
                                        <span className="text-slate-400">-</span>
                                        <div className="relative w-full">
                                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 text-xs">$</span>
                                            <input className="w-full pl-5 pr-2 py-1.5 text-sm border border-slate-200 rounded-md focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="Max" type="number" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-slate-100">
                                    <h4 className="font-bold text-sm text-slate-700">Trip Duration</h4>
                                    <div className="space-y-2">
                                        {['Up to 3 days', '4 to 7 days', '8 to 14 days', '15+ days'].map((dur) => (
                                            <label key={dur} className="flex items-center gap-3 cursor-pointer group">
                                                <input className="rounded border-slate-300 text-primary focus:ring-primary/30 size-4" type="checkbox" />
                                                <span className="text-sm text-slate-600 group-hover:text-slate-900">{dur}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-slate-100">
                                    <h4 className="font-bold text-sm text-slate-700">Star Rating</h4>
                                    <div className="flex flex-col gap-2">
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input className="text-primary focus:ring-primary/30 size-4 border-slate-300" name="rating" type="radio" />
                                            <div className="flex text-amber-400">
                                                {[1, 2, 3, 4, 5].map((s) => <MaterialSymbol key={s} icon="star" fill size={16} />)}
                                            </div>
                                            <span className="text-xs text-slate-500 ml-auto">5.0 Only</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input className="text-primary focus:ring-primary/30 size-4 border-slate-300" name="rating" type="radio" />
                                            <div className="flex text-amber-400">
                                                {[1, 2, 3, 4].map((s) => <MaterialSymbol key={s} icon="star" fill size={16} />)}
                                                <MaterialSymbol icon="star" size={16} className="text-slate-200" />
                                            </div>
                                            <span className="text-xs text-slate-500 ml-auto">4.0 & up</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        <div className="flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {packages.map((pkg) => (
                                    <article key={pkg.id} className="flex flex-col bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow">
                                        <div className="relative h-48 overflow-hidden">
                                            {pkg.isBestSeller && (
                                                <div className="absolute top-3 left-3 z-10 bg-rose-500 text-white px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                                                    Best Seller
                                                </div>
                                            )}
                                            <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                                                <MaterialSymbol icon="star" fill size={16} className="text-amber-400" />
                                                <span className="text-xs font-bold text-slate-800">{pkg.rating}</span>
                                            </div>
                                            <img alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={pkg.image} />
                                        </div>
                                        <div className="p-5 flex flex-col flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium 
                                                    ${pkg.category === 'Adventure' ? 'bg-blue-50 text-blue-700' :
                                                        pkg.category === 'Cultural' ? 'bg-purple-50 text-purple-700' :
                                                            'bg-emerald-50 text-emerald-700'}`}>
                                                    {pkg.category}
                                                </span>
                                                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                                                    <MaterialSymbol icon="schedule" size={14} />
                                                    {pkg.duration}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{pkg.title}</h3>
                                            <p className="text-slate-500 text-sm mb-4 line-clamp-2">{pkg.description}</p>
                                            <div className="mt-auto flex items-end justify-between pt-4 border-t border-slate-50">
                                                <div>
                                                    <p className="text-xs text-slate-400 mb-0.5">From</p>
                                                    <p className="text-xl font-bold text-primary">${pkg.price}</p>
                                                </div>
                                                <button className="px-4 py-2 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-lg text-sm font-bold transition-all">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            <div className="mt-12 flex justify-center items-center gap-2">
                                <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                    <MaterialSymbol icon="chevron_left" />
                                </button>
                                <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-md shadow-blue-200">1</button>
                                <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">2</button>
                                <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">3</button>
                                <span className="text-slate-400 px-2">...</span>
                                <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">12</button>
                                <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                    <MaterialSymbol icon="chevron_right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
