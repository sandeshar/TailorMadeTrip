import { MaterialSymbol } from "@/components/ui/material-symbol";
import Link from "next/link";
import { getPackages } from "@/actions/packages";

export async function FeaturedPackages() {
    const packages = await getPackages({ isBestSeller: true, status: 'active' });

    if (!packages || packages.length === 0) return null;

    return (
        <section className="py-20 border-t border-slate-100 italic">
            <div className="section-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
                    <div>
                        <h2 className="text-slate-900 text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight italic uppercase">Handpicked Adventures</h2>
                        <p className="text-slate-500 text-sm lg:text-base mt-2 italic">Curated tours designed for the modern explorer.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 italic">
                    {packages.map((pkg: any) => (
                        <div key={pkg._id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 transition-all flex flex-col group italic">
                            <div className="relative aspect-video bg-cover bg-center shrink-0 overflow-hidden" style={{ backgroundImage: `url("${pkg.image}")` }}>
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm uppercase">
                                    {pkg.duration}
                                </div>
                            </div>
                            <div className="p-5 text-left flex flex-col flex-1 italic">
                                <div className="flex items-center gap-1 text-amber-500 text-xs font-black mb-2 uppercase">
                                    <MaterialSymbol icon="star" size={14} fill />
                                    {pkg.rating} <span className="text-slate-400 font-medium ml-1">({pkg.reviews} reviews)</span>
                                </div>
                                <h3 className="text-slate-900 text-base lg:text-lg font-black mb-2 line-clamp-1 uppercase tracking-tight">{pkg.title}</h3>
                                <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-4">
                                    <MaterialSymbol icon="location_on" size={14} className="text-primary" />
                                    {pkg.tripDestination || 'Global'}
                                </div>
                                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                                    <div>
                                        <p className="text-primary text-xl font-black">${pkg.price}</p>
                                    </div>
                                    <Link href={`/packages/${pkg.slug}`} className="inline-flex items-center gap-1 px-4 py-2 bg-slate-900 text-white text-[10px] font-black rounded-lg hover:bg-primary transition-colors uppercase tracking-widest">
                                        Explore <MaterialSymbol icon="arrow_forward" size={12} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
