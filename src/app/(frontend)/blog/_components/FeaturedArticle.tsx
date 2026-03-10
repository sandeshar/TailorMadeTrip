import React from 'react';
import Link from 'next/link';
import CardShare from './CardShare';
import apiUrl from '@/utils/apiUrl';
import { getFeaturedArticle } from '@/actions/articles';
import { getBlogCategoryBySlug } from '@/actions/categories';
import { MaterialSymbol } from "@/components/ui/material-symbol";

const FeaturedArticle = async ({ selectedCategory }: { selectedCategory?: string }) => {
    let first: any = null;

    try {
        let categoryFilter = {};
        if (selectedCategory) {
            const categoryDoc = await getBlogCategoryBySlug(selectedCategory);
            if (categoryDoc) {
                categoryFilter = { categoryId: categoryDoc._id };
            }
        }

        first = await getFeaturedArticle(categoryFilter);
    } catch (err) {
        console.error('Failed to load featured article', err);
    }

    if (!first) {
        return (
            <section className="mb-12">
                <div className="text-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold">No featured article</h3>
                    <p className="text-sm text-gray-500 mt-2">There are no featured articles to show. Mark some from the admin dashboard.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="mb-12">
            <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div
                    className="w-full lg:w-3/5 bg-gray-200 rounded-lg overflow-hidden relative aspect-video lg:aspect-auto min-h-75"
                    style={{
                        backgroundImage: `url('${first?.featuredImage || '/placeholder.jpg'}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Featured
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-6 lg:w-2/5">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                            <MaterialSymbol icon="verified" size={18} />
                            <span>{first?.categoryId?.name || 'Blog'}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 font-lexend">
                            {first?.title || 'Featured Article'}
                        </h1>
                        <p className="text-slate-500 text-base leading-relaxed">
                            {first?.excerpt || (first?.content && first.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...') || 'Read our featured article for insights and travel tips.'}
                        </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                        <span>By {first?.author || 'Travel Team'}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span>{first?.createdAt ? new Date(first.createdAt).toLocaleDateString() : ''}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span>{first ? (first.content?.split(' ').length > 0 ? Math.ceil(first.content.split(' ').length / 200) + ' min read' : '1 min read') : ''}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href={`/blog/${first?.slug || first?._id}`} className="w-fit h-12 px-6 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2">
                            <span>Read Full Article</span>
                            <MaterialSymbol icon="arrow_forward" size={18} />
                        </Link>
                        <CardShare title={first?.title || ''} url={apiUrl(`/blog/${first?.slug || first?._id}`)} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedArticle;
