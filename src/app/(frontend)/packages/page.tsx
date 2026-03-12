import { MaterialSymbol } from "@/components/ui/material-symbol";
import Link from "next/link";
import { getPackages } from "@/actions/packages";
import { getPackageCategories } from "@/actions/categories";
import { HeroSection } from "../_components/HeroSection";

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
    }>
}) {
    const params = await searchParams;
    const { category, sort, minPrice, maxPrice, duration, rating } = params;
    const categories = await getPackageCategories();

    // Filter packages based on params
    const filter: any = { status: 'active' };

    if (category) {
        const cat = categories.find((c: any) => c.slug === category);
        if (cat) filter.categoryId = cat._id;
    }

    if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) filter.price.$gte = Number(minPrice);
        if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    if (duration) {
        // Simple string match for duration like "5 Days", "7 Days"
        filter.duration = { $regex: duration, $options: 'i' };
    }

    if (rating) {
        filter.rating = { $gte: Number(rating) };
    }

    const sortOption: any = sort === 'price_asc' ? { price: 1 } : sort === 'price_desc' ? { price: -1 } : { createdAt: -1 };
    const packages = await getPackages(filter, sortOption);

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">
            <HeroSection
                title="Curated Travel Packages"
                subtitle="Stop searching and start living. We've hand-picked the world's most incredible journeys so you can focus on the memories."
                badgeText="Adventure Reimagined"
            />

            <div className="section-container py-24">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-72 shrink-0">
                        <div className="sticky top-32 space-y-8 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 font-bold">Price Range</h3>
                                    {(minPrice || maxPrice) && (
                                        <Link href={{ query: { ...params, minPrice: undefined, maxPrice: undefined } }} className="text-[9px] font-black uppercase text-primary hover:underline">Reset</Link>
                                    )}
                                </div>

                                <form action="/packages" method="GET" className="space-y-4">
                                    {/* Keep other existing params as hidden inputs to preserve state */}
                                    {category && <input type="hidden" name="category" value={category} />}
                                    {sort && <input type="hidden" name="sort" value={sort} />}
                                    {duration && <input type="hidden" name="duration" value={duration} />}
                                    {rating && <input type="hidden" name="rating" value={rating} />}

                                    <div className="flex items-center gap-2 group">
                                        <div className="relative flex-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">$</span>
                                            <input
                                                type="number"
                                                name="minPrice"
                                                placeholder="Min"
                                                defaultValue={minPrice}
                                                className="w-full pl-6 pr-3 py-2.5 bg-white border border-slate-100 rounded-xl text-xs font-bold focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-slate-300"
                                            />
                                        </div>
                                        <div className="w-2 h-0.5 bg-slate-200" />
                                        <div className="relative flex-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">$</span>
                                            <input
                                                type="number"
                                                name="maxPrice"
                                                placeholder="Max"
                                                defaultValue={maxPrice}
                                                className="w-full pl-6 pr-3 py-2.5 bg-white border border-slate-100 rounded-xl text-xs font-bold focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-slate-300"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-2.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary transition-colors shadow-lg shadow-black/5 active:scale-[0.98]"
                                    >
                                        Apply Range
                                    </button>
                                </form>

                                <div className="mt-6 grid grid-cols-2 gap-2">
                                    {[
                                        { label: '< $1k', min: 0, max: 1000 },
                                        { label: '$1k - $3k', min: 1000, max: 3000 },
                                        { label: '$3k - $5k', min: 3000, max: 5000 },
                                        { label: '$5k+', min: 5000, max: 50000 },
                                    ].map((range) => {
                                        const isActive = minPrice === range.min.toString() && maxPrice === range.max.toString();
                                        return (
                                            <Link
                                                key={range.label}
                                                href={{ query: { ...params, minPrice: range.min, maxPrice: range.max } }}
                                                className={`px-3 py-2 rounded-lg text-[9px] font-black uppercase tracking-tighter text-center transition-all border ${isActive ? 'bg-primary/10 text-primary border-primary/20 shadow-sm' : 'bg-white border-slate-100 text-slate-500 hover:border-primary/30'}`}
                                            >
                                                {range.label}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="h-px bg-slate-200/50" />

                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 font-bold">Duration</h3>
                                    {duration && (
                                        <Link href={{ query: { ...params, duration: undefined } }} className="text-[9px] font-black uppercase text-primary hover:underline">Reset</Link>
                                    )}
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {['3-5 Days', '6-9 Days', '10-14 Days', '15+ Days'].map((d) => {
                                        const isActive = duration === d;
                                        return (
                                            <Link
                                                key={d}
                                                href={{ query: { ...params, duration: d } }}
                                                className={`px-3 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-tight text-center transition-all border ${isActive ? 'bg-slate-900 text-white border-slate-900 shadow-md' : 'bg-white border-slate-100 text-slate-500 hover:border-primary/30'}`}
                                            >
                                                {d}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="pt-4">
                                <Link
                                    href="/packages"
                                    className="flex items-center justify-center w-full py-4 rounded-2xl bg-white text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-all border border-slate-100 hover:border-primary/30 shadow-sm"
                                >
                                    Clear All
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Package Listing */}
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 pb-8 border-b border-slate-100 gap-6">
                            <div>
                                <h2 className="text-4xl font-black tracking-tight uppercase italic mb-2">
                                    {category ? category : 'Exploring'} <span className="text-primary">Packages.</span>
                                </h2>
                                <p className="text-slate-500 font-medium text-sm">Showing {packages.length} results matching your choices</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sort By:</span>
                                <div className="flex bg-slate-50 p-1 rounded-xl">
                                    <Link
                                        href={{ query: { ...params, sort: 'latest' } }}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${(!sort || sort === 'latest') ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                                    >
                                        Newest
                                    </Link>
                                    <Link
                                        href={{ query: { ...params, sort: 'price_asc' } }}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${sort === 'price_asc' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                                    >
                                        Price: Low
                                    </Link>
                                    <Link
                                        href={{ query: { ...params, sort: 'price_desc' } }}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${sort === 'price_desc' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                                    >
                                        Price: High
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {packages.length === 0 ? (
                            <div className="py-32 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                                    <MaterialSymbol icon="filter_alt_off" size={40} className="text-slate-300" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 uppercase italic">No Matches Found</h3>
                                <p className="text-slate-500 mt-2 font-medium">Try lightening up your filters or clearing all choices.</p>
                                <Link href="/packages" className="inline-block mt-8 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-xl shadow-black/10">Reset Filters</Link>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                {packages.map((item: any) => (
                                    <Link href={`/packages/${item.slug}`} key={item._id} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1">
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="absolute top-5 left-5 flex flex-col gap-2">
                                                {item.isBestSeller && (
                                                    <div className="bg-primary text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                                                        Best Seller
                                                    </div>
                                                )}
                                                <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 self-start shadow-md">
                                                    <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">{item.categoryId?.name || 'Adventure'}</span>
                                                </div>
                                            </div>

                                            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between pointer-events-none transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg border border-white/20">
                                                    <MaterialSymbol icon="schedule" size={16} className="text-primary" />
                                                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">{item.duration}</span>
                                                </div>
                                                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg border border-white/20">
                                                    <MaterialSymbol icon="star" size={16} fill className="text-amber-500" />
                                                    <span className="text-[10px] font-black text-slate-900">{item.rating}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-1">
                                            <h3 className="text-xl font-black text-slate-900 mb-4 line-clamp-2 uppercase tracking-tight group-hover:text-primary transition-colors italic leading-tight">
                                                {item.title}
                                            </h3>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {item.tripGrade && (
                                                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-lg uppercase tracking-wider">{item.tripGrade}</span>
                                                )}
                                                {item.tripType && (
                                                    <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-lg uppercase tracking-wider">{item.tripType}</span>
                                                )}
                                            </div>

                                            <div className="grid grid-cols-2 gap-3 mb-6">
                                                <div className="flex items-center gap-2 text-slate-500">
                                                    <MaterialSymbol icon="location_on" size={16} className="text-primary" />
                                                    <span className="text-[10px] font-bold uppercase truncate">{item.tripDestination || 'Global'}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-500">
                                                    <MaterialSymbol icon="altitude" size={16} className="text-primary" />
                                                    <span className="text-[10px] font-bold uppercase truncate">{item.maxAltitude || 'N/A'}</span>
                                                </div>
                                            </div>

                                            <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                                <div className="flex flex-col">
                                                    <span className="text-[9px] font-bold text-slate-400 uppercase block tracking-widest mb-0.5">Starting From</span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-2xl font-black text-primary tracking-tighter italic">${item.price}</span>
                                                    </div>
                                                </div>
                                                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-primary transition-all duration-300 group-hover:shadow-xl group-hover:rotate-6">
                                                    <MaterialSymbol icon="arrow_outward" size={22} />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
} 
