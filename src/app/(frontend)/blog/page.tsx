import { MaterialSymbol } from "@/components/ui/material-symbol";
import Link from "next/link";
import { getBlogPage } from "@/actions/cms-actions";
import { getArticlesWithPagination, getFeaturedArticle } from "@/actions/articles";
import { Metadata } from "next";
import { Suspense } from "react";
import { NewsletterForm } from "../_components/NewsletterForm";

export async function generateMetadata(): Promise<Metadata> {
    const data = await getBlogPage();

    return {
        title: data?.seo?.title || "Blog - Trailor my trip",
        description: data?.seo?.description || "Expert travel insights, guides, and resources to plan your next adventure.",
    };
}

async function BlogContent({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const { page } = await searchParams;
    const currentPage = parseInt(page || '1', 10);
    const limit = 6;

    const [data, featured, paginationResult] = await Promise.all([
        getBlogPage(),
        getFeaturedArticle(),
        getArticlesWithPagination({ status: 'published' }, { createdAt: -1 }, limit, currentPage)
    ]);
    const { articles, totalPages } = paginationResult;

    const latestArticles = articles.filter((a: any) => a._id.toString() !== featured?._id.toString());

    return (
        <main className="section-container py-16">
            {/* <div className="mb-12 text-left">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 font-lexend">
                    {data?.hero?.title || "Wanderlust Journals"}
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                    {data?.hero?.subtitle || "Stories, tips, and inspiration from every corner of the globe. Your next adventure starts with a single read."}
                </p>
            </div> */}

            {/* Featured Post */}
            {featured && currentPage === 1 && (
                <section className="mb-16">
                    <Link href={`/blog/${featured.slug || featured._id}`} className="block relative overflow-hidden rounded-2xl h-[480px] group cursor-pointer shadow-xl">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%), url('${featured.featuredImage || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"}')`,
                            }}
                        ></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl text-left">
                            <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-black rounded-full mb-4 uppercase tracking-[0.2em]">
                                Featured Article
                            </span>
                            <h2 className="text-white text-3xl md:text-5xl font-black leading-tight mb-4 font-lexend italic uppercase tracking-tight">
                                {featured.title}
                            </h2>
                            <p className="text-slate-200 text-lg mb-6 line-clamp-2">
                                {featured.excerpt || (featured.content?.replace(/<[^>]*>/g, '').substring(0, 160) + '...')}
                            </p>
                            <div className="flex items-center gap-4 text-white text-sm font-bold uppercase tracking-wider">
                                <div className="flex items-center gap-2">
                                    <MaterialSymbol icon="calendar_today" size={18} />
                                    <span>{new Date(featured.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MaterialSymbol icon="schedule" size={18} />
                                    <span>{Math.max(1, Math.ceil((featured.content || '').split(/\s+/).length / 200))} min read</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>
            )}

            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        {articles.length === 0 && (
                            <div className="col-span-full py-20 text-center bg-white rounded-2xl border border-dashed border-slate-200">
                                <MaterialSymbol icon="article" size={48} className="mx-auto mb-4 text-slate-300" />
                                <p className="text-slate-500 font-medium">No published articles found yet.</p>
                                <p className="text-xs text-slate-400 mt-2">Checking database connection and article status...</p>
                            </div>
                        )}
                        {latestArticles.map((post: any) => (
                            <Link key={post._id} href={`/blog/${post.slug || post._id}`} className="flex flex-col gap-4 group">
                                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${post.featuredImage || "/placeholder.jpg"}')` }}
                                    ></div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary text-[10px] font-black uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded">
                                            {post.categoryId?.name || "Article"}
                                        </span>
                                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">• {Math.max(1, Math.ceil((post.content || '').split(/\s+/).length / 200))} min read</span>
                                    </div>
                                    <h3 className="text-xl font-black group-hover:text-primary transition-colors font-lexend uppercase tracking-tight italic">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-medium">
                                        {post.excerpt || (post.content?.replace(/<[^>]*>/g, '').substring(0, 120) + '...')}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="mt-12 flex justify-center gap-2">
                            {currentPage > 1 && (
                                <Link href={`/blog?page=${currentPage - 1}`} className="px-6 py-2 border border-slate-300 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-100 transition-colors">
                                    Previous
                                </Link>
                            )}
                            {currentPage < totalPages && (
                                <Link href={`/blog?page=${currentPage + 1}`} className="px-6 py-2 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest hover:opacity-90 transition-opacity">
                                    Next Page
                                </Link>
                            )}
                        </div>
                    )}
                </div>

                <aside className="lg:w-1/3 flex flex-col gap-10 text-left">
                    {/* Newsletter */}
                    <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/50">
                        <h4 className="text-slate-900 font-black text-lg mb-4 flex items-center gap-2 font-lexend uppercase tracking-tight italic">
                            <MaterialSymbol icon="mail" fill className="text-primary" />
                            Newsletter
                        </h4>
                        <p className="text-slate-500 text-sm mb-6 font-medium leading-relaxed">
                            {data?.newsletter?.description || "Get weekly travel inspiration, budget tips, and exclusive deals delivered to your inbox."}
                        </p>
                        <NewsletterForm variant="sidebar" />
                    </div>

                    {/* CTA */}
                    <div className="p-8 bg-slate-900 rounded-2xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <h4 className="text-white font-black text-xl mb-4 font-lexend uppercase tracking-tight italic">Planning a trip?</h4>
                            <p className="text-slate-300 text-sm mb-6 font-medium leading-relaxed">
                                Chat with our experts and design your custom itinerary today.
                            </p>
                            <Link className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-primary hover:text-white group-hover:translate-x-1" href="/contact">
                                Talk to a Specialist
                                <MaterialSymbol
                                    icon="arrow_forward"
                                    size={18}
                                />
                            </Link>
                        </div>
                        <div className="absolute -right-8 -bottom-8 text-white/5 rotate-12 group-hover:scale-110 transition-transform duration-700">
                            <MaterialSymbol icon="travel_explore" size={160} />
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}

export default function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-slate-50/50">
            <Suspense fallback={
                <div className="section-container py-16 animate-pulse">
                    <div className="h-10 w-64 bg-slate-200 rounded mb-4" />
                    <div className="h-20 w-full max-w-2xl bg-slate-200 rounded mb-12" />
                    <div className="h-[480px] w-full bg-slate-200 rounded-2xl mb-16" />
                </div>
            }>
                <BlogContent searchParams={searchParams} />
            </Suspense>
        </div>
    );
}




