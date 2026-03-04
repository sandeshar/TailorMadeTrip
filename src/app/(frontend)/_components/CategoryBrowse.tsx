import { MaterialSymbol } from "@/components/ui/material-symbol";
import Link from "next/link";

const categories = [
    { name: "Beach", icon: "beach_access", color: "bg-blue-50 text-blue-600" },
    { name: "Mountain", icon: "terrain", color: "bg-emerald-50 text-emerald-600" },
    { name: "City", icon: "location_city", color: "bg-orange-50 text-orange-600" },
    { name: "Adventure", icon: "hiking", color: "bg-rose-50 text-rose-600" },
    { name: "Cultural", icon: "museum", color: "bg-purple-50 text-purple-600" },
    { name: "Wildlife", icon: "psychology_alt", color: "bg-amber-50 text-amber-600" },
];

export function CategoryBrowse() {
    return (
        <section className="px-4 md:px-12 lg:px-24 py-20 w-full max-w-full italic border-t border-slate-100">
            <div className="max-w-[1800px] mx-auto italic">
                <div className="text-left mb-12">
                    <h2 className="text-slate-900 text-2xl md:text-3xl lg:text-4xl font-black mb-2 italic uppercase tracking-tight leading-tight">Explore Categories</h2>
                    <p className="text-slate-500 text-sm lg:text-base italic">Browse adventures by your favorite travel style.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 italic uppercase font-black">
                    {categories.map((cat, index) => (
                        <Link
                            key={index}
                            href={`/packages?category=${cat.name.toLowerCase()}`}
                            className="group flex flex-col items-center p-8 bg-slate-50 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200 border border-transparent hover:border-slate-100 italic"
                        >
                            <div className={`size-16 rounded-full ${cat.color} flex items-center justify-center mb-6 transition-all group-hover:scale-110 shadow-sm`}>
                                <MaterialSymbol icon={cat.icon} size={28} />
                            </div>
                            <h3 className="text-slate-900 text-xs tracking-widest group-hover:text-primary transition-colors italic">{cat.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
