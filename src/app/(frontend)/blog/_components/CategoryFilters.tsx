import React from 'react';
import Link from 'next/link';
import { getBlogCategories } from '@/actions/categories';
import { MaterialSymbol } from "@/components/ui/material-symbol";

const CategoryFilters = async ({ selectedCategory }: { selectedCategory?: string }) => {
    let categories: any[] = [];
    try {
        categories = await getBlogCategories();
    } catch (err) {
        console.error('Failed to load categories', err);
    }

    return (
        <section className="overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex gap-3 min-w-max">
                <Link
                    href="/blog"
                    className={`flex h-10 items-center gap-x-2 rounded-full pl-4 pr-6 transition-all ${!selectedCategory ? 'bg-primary text-white scale-105' : 'bg-[#e8ebf3] text-[#0e121b] hover:bg-gray-200'}`}
                >
                    <MaterialSymbol icon="apps" size={20} />
                    <span className="text-sm font-medium">All Posts</span>
                </Link>
                {categories.map((cat) => (
                    <Link
                        key={cat._id}
                        href={`/blog?category=${cat.slug}`}
                        className={`flex h-10 items-center gap-x-2 rounded-full pl-4 pr-6 transition-all ${selectedCategory === cat.slug ? 'bg-primary text-white scale-105' : 'bg-[#e8ebf3] text-[#0e121b] hover:bg-gray-200'}`}
                    >
                        <MaterialSymbol icon="menu_book" size={20} />
                        <span className="text-sm font-medium">{cat.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CategoryFilters;
