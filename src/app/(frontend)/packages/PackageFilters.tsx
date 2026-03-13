"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { cn } from "@/lib/utils";

interface Category {
    _id: string;
    slug: string;
    name: string;
    count?: number;
}

interface CategorySearchProps {
    categories: Category[];
    currentCategory?: string;
    className?: string;
}

export function CategorySearch({ categories, currentCategory, className }: CategorySearchProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleCategoryChange = (slug: string) => {
        const params = new URLSearchParams(searchParams.toString() || "");
        if (slug) {
            params.set("category", slug);
        } else {
            params.delete("category");
        }
        router.push(`/packages?${params.toString()}`);
    };

    const isHeroSearch = className?.includes("bg-white/10");

    return (
        <div className={cn(
            "flex-1 flex items-center px-4 py-3 gap-3 relative group",
            isHeroSearch ? "h-16 bg-white/10 rounded-xl border border-white/10 focus-within:border-primary focus-within:bg-white/20 transition-all" : "",
            className
        )}>
            <div className={cn(
                "absolute left-5 top-1/2 -translate-y-1/2",
                isHeroSearch ? "text-white" : "text-slate-400"
            )}>
                <MaterialSymbol icon="category" size={20} />
            </div>
            <div className={cn(
                "flex flex-col justify-center w-full",
                isHeroSearch ? "pl-10" : "pl-8"
            )}>
                <label className={cn(
                    "text-[10px] font-black uppercase tracking-widest mb-1 italic",
                    isHeroSearch ? "text-white/60" : "text-slate-400"
                )}>
                    Category
                </label>
                <select
                    name="category"
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    value={currentCategory || ""}
                    className={cn(
                        "w-full bg-transparent border-none p-0 text-sm font-black uppercase tracking-tight outline-none italic cursor-pointer appearance-none",
                        isHeroSearch ? "text-white focus:ring-0" : "text-slate-900 focus:ring-0"
                    )}
                >
                    <option value="" className="text-slate-900">All Activities</option>
                    {categories.map((cat) => (
                        <option key={cat._id} value={cat.slug} className="text-slate-900">
                            {cat.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export function SortFilter({ currentSort }: { currentSort?: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSortChange = (sort: string) => {
        const params = new URLSearchParams(searchParams.toString() || "");
        if (sort && sort !== "latest") {
            params.set("sort", sort);
        } else {
            params.delete("sort");
        }
        router.push(`/packages?${params.toString()}`);
    };

    return (
        <div className="relative">
            <select
                onChange={(e) => handleSortChange(e.target.value)}
                value={currentSort || "latest"}
                className="appearance-none bg-white border border-slate-200 text-slate-700 py-2 pl-4 pr-10 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-medium shadow-sm italic"
            >
                <option value="latest">Recommended</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
                <MaterialSymbol icon="expand_more" />
            </div>
        </div>
    );
}

export function DestinationFilter({ locations }: { locations: string[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleChange = (loc: string, checked: boolean) => {
        const params = new URLSearchParams(searchParams.toString());
        // For now, handling single selection in this UI style, could be expanded to multi-select
        if (checked) {
            params.set("location", loc);
        } else {
            params.delete("location");
        }
        router.push(`/packages?${params.toString()}`);
    };

    return (
        <div className="space-y-2">
            {locations.map((loc) => (
                <label key={loc} className="flex items-center gap-3 cursor-pointer group">
                    <input
                        className="rounded border-slate-300 text-primary focus:ring-primary/30 size-4 cursor-pointer"
                        type="checkbox"
                        checked={searchParams.get("location") === loc}
                        onChange={(e) => handleChange(loc, e.target.checked)}
                    />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors tracking-tight font-medium">{loc}</span>
                </label>
            ))}
        </div>
    );
}
