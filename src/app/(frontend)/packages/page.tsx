import { MaterialSymbol } from "@/components/ui/material-symbol";
import Link from "next/link";
import { getPackages } from "@/actions/packages";
import { getPackageCategories } from "@/actions/categories";
import { cn } from "@/lib/utils";
import { CategorySearch, SortFilter, DestinationFilter } from "./PackageFilters";
import { Suspense } from "react";

export default async function PackagesPage({
    searchParams
}: {
    searchParams: Promise<{
        category?: string;
        sort?: string;
        minPrice?: string;
        maxPrice?: string;
        duration?: string;
        rating?: string;
        location?: string;
    }>
}) {
    const params = await searchParams;
    const { category, sort, minPrice, maxPrice, duration, rating, location } = params;
    const categories = await getPackageCategories();

    // Filter packages based on params
    const filter: any = {};

    if (category) {
        const cat = categories.find((c: any) => c.slug === category);
        if (cat) filter.categoryId = cat._id;
    }

    if (location) {
        filter.$or = [
            { location: { $regex: location, $options: 'i' } },
            { tripDestination: { $regex: location, $options: 'i' } },
            { startsAt: { $regex: location, $options: 'i' } }
        ];
    }

    if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) filter.price.$gte = Number(minPrice);
        if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    if (duration) {
        filter.duration = { $regex: duration, $options: 'i' };
    }

    if (rating) {
        filter.rating = { $gte: Number(rating) };
    }

    const sortOption: any = sort === 'price_asc' ? { price: 1 } : sort === 'price_desc' ? { price: -1 } : { createdAt: -1 };

    // Fetch ALL packages if no active status is strictly required, 
    // but usually status: 'active' is preferred for frontend.
    // If some are missing code might be due to the 'active' filter.
    // Let's remove status: 'active' for a moment to see if that's why they are missing.
    const packages = await getPackages(filter, sortOption);

    return (
        <div className="bg-background-light min-h-screen font-display antialiased overflow-x-hidden text-slate-900">
            {/* Hero Section */}
            <section className="relative italic w-full">
                <div
                    className="w-full min-h-[500px] lg:min-h-[700px] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20 relative"
                    style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.6)), url("https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2560&auto=format&fit=crop")` }}
                >
                    <div className="relative z-10 flex flex-col items-center text-center section-container space-y-4 mb-12">
                        <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-black/10">
                            Adventure Reimagined
                        </span>
                        <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight uppercase italic drop-shadow-2xl font-serif">
                            Curated Travel Packages
                        </h1>
                        <p className="text-white/80 text-sm md:text-base lg:text-lg font-medium max-w-2xl leading-relaxed italic drop-shadow-lg font-sans">
                            Stop searching and start living. We've hand-picked the world's most incredible journeys so you can focus on the memories.
                        </p>
                    </div>

                    <div className="relative z-10 w-full max-w-6xl bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/20 p-2 lg:p-4 italic border border-white/20">
                        <form className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-2 lg:gap-4">
                            <div className="md:col-span-2 lg:col-span-4 relative group">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40">
                                    <MaterialSymbol icon="location_on" size={20} />
                                </div>
                                <div className="flex flex-col justify-center h-16 pl-14 pr-4 bg-white/10 rounded-xl border border-white/10 focus-within:border-primary focus-within:bg-white/20 transition-all">
                                    <label className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-1 italic">Destination</label>
                                    <input
                                        className="w-full bg-transparent border-none p-0 text-white placeholder-white/40 focus:ring-0 text-sm font-black uppercase tracking-tight outline-none italic"
                                        placeholder="Where to?"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-1 lg:col-span-3 relative group">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40">
                                    <MaterialSymbol icon="calendar_today" size={20} />
                                </div>
                                <div className="flex flex-col justify-center h-16 pl-14 pr-4 bg-white/10 rounded-xl border border-white/10 focus-within:border-primary focus-within:bg-white/20 transition-all">
                                    <label className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-1 italic">Date</label>
                                    <input
                                        className="w-full bg-transparent border-none p-0 text-white placeholder-white/40 focus:ring-0 text-sm font-black uppercase tracking-tight outline-none italic"
                                        placeholder="When?"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-1 lg:col-span-3 relative group">
                                <Suspense fallback={<div className="h-16 bg-white/10 rounded-xl" />}>
                                    <CategorySearch categories={categories} currentCategory={category} className="h-16 bg-white/10 border-white/10 focus-within:bg-white/20 text-white label-white/60 icon-white" />
                                </Suspense>
                            </div>

                            <div className="md:col-span-4 lg:col-span-2 flex italic">
                                <button className="w-full h-16 flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-black rounded-xl transition-all shadow-xl shadow-primary/20 cursor-pointer uppercase text-xs tracking-[0.2em] group" type="button">
                                    <MaterialSymbol icon="travel_explore" size={20} className="group-hover:scale-110 transition-transform" />
                                    <span>Find</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="flex-1 layout-container px-4 md:px-10 py-12 bg-background-light">
                <div className="mx-auto max-w-[1400px]">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
                        <div>
                            <h2 className="text-slate-900 text-2xl font-bold leading-tight tracking-tight">Available Packages ({packages.length})</h2>
                            <p className="text-slate-500 mt-1 text-sm font-normal italic">
                                {category ? `Showing ${category} matches` : 'Showing the best matches for your search'}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-slate-500">Sort by:</span>
                            <Suspense fallback={<div className="w-40 h-10 bg-white" />}>
                                <SortFilter currentSort={sort} />
                            </Suspense>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filters Sidebar */}
                        <aside className="w-full lg:w-72 flex-shrink-0">
                            <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col gap-6">
                                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                                    <h3 className="font-bold text-lg text-slate-900">Filters</h3>
                                    <Link href="/packages" className="text-primary text-sm font-medium hover:underline">Reset</Link>
                                </div>

                                {/* Destination Info */}
                                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                                    <div className="flex items-center gap-2 text-primary mb-2">
                                        <MaterialSymbol icon="info" size={18} />
                                        <span className="font-bold text-[10px] uppercase">Data Check</span>
                                    </div>
                                    <p className="text-[11px] text-slate-600 leading-relaxed">
                                        Total of {packages.length} packages loaded from database. Use categories below to refine.
                                    </p>
                                </div>

                                {/* Categories */}
                                <div className="space-y-3 pt-4 border-t border-slate-100">
                                    <h4 className="font-bold text-sm text-slate-700">Categories</h4>
                                    <div className="space-y-2">
                                        {categories.map((cat: any) => (
                                            <Link
                                                key={cat._id}
                                                href={`/packages?category=${cat.slug}${sort ? `&sort=${sort}` : ''}`}
                                                className={cn(
                                                    "flex items-center justify-between text-sm transition-all group",
                                                    category === cat.slug ? "text-primary font-bold" : "text-slate-600 hover:text-slate-900"
                                                )}
                                            >
                                                <span>{cat.name}</span>
                                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-400">
                                                    {packages.filter((p: any) => p.categoryId?._id === cat._id).length || 0}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Packages Grid */}
                        <div className="flex-1">
                            {packages.length === 0 ? (
                                <div className="bg-white rounded-xl border border-dashed border-slate-200 p-12 text-center">
                                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                                        <MaterialSymbol icon="search_off" size={32} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">No packages found</h3>
                                    <p className="text-slate-500 text-sm mt-1">Try resetting filters to see all packages.</p>
                                    <Link href="/packages" className="inline-flex mt-6 px-6 py-2 bg-primary text-white rounded-lg font-bold text-sm">
                                        View All Packages
                                    </Link>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {packages.map((pkg: any) => (
                                        <article key={pkg._id} className="flex flex-col bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow">
                                            <div className="relative h-48 overflow-hidden">
                                                <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                                                    <MaterialSymbol icon="star" size={16} className="text-amber-400" />
                                                    <span className="text-xs font-bold text-slate-800">{pkg.rating || '4.9'}</span>
                                                </div>
                                                <Link href={`/packages/${pkg.slug}`} className="block h-full">
                                                    <img
                                                        src={pkg.image || (pkg.images?.[0]) || "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop"}
                                                        alt={pkg.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="p-5 flex flex-col flex-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700">
                                                        {pkg.categoryId?.name || 'Adventure'}
                                                    </span>
                                                    <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                                                        <MaterialSymbol icon="schedule" size={14} />
                                                        {pkg.duration}
                                                    </span>
                                                </div>
                                                <Link href={`/packages/${pkg.slug}`} className="hover:text-primary transition-colors">
                                                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug line-clamp-1">{pkg.title}</h3>
                                                </Link>
                                                <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                                                    {pkg.description ? pkg.description.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...' : 'Experience the breathtaking views and unique culture of this destination.'}
                                                </p>
                                                <div className="mt-auto flex items-end justify-between pt-4 border-t border-slate-50">
                                                    <div>
                                                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-0.5">From</p>
                                                        <p className="text-xl font-bold text-primary">${pkg.price}</p>
                                                    </div>
                                                    <Link href={`/packages/${pkg.slug}`} className="px-4 py-2 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-lg text-sm font-bold transition-all">
                                                        View Details
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
