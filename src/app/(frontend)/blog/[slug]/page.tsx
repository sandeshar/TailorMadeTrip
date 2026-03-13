import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleBySlug, getArticles } from '@/actions/articles';
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { NewsletterForm } from '../../_components/NewsletterForm';
import { Suspense } from 'react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    try {
        const article = await getArticleBySlug(slug);
        if (!article || !article._id || article.status !== 'published') return { title: 'Blog' };

        const title = article.seo?.title || article.title;
        const description = article.seo?.description || article.excerpt || 'Insights and articles from Wanderlust Academy.';

        return {
            title,
            description,
        };
    } catch (err) {
        console.error('generateMetadata failed', err);
        return { title: 'Blog' };
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading article...</div>}>
            <BlogPostContent params={params} />
        </Suspense>
    );
}

async function BlogPostContent({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article || !article._id || article.status !== 'published') notFound();

    // Fetch related articles
    let related: any[] = [];
    try {
        const relatedDocs = await getArticles({ status: 'published' }, { createdAt: -1 }, 10);
        if (relatedDocs && relatedDocs.length > 0) {
            const articleIdStr = article._id.toString();
            related = relatedDocs
                .filter((a: any) => a._id.toString() !== articleIdStr)
                .slice(0, 3);
        }
    } catch (err) {
        console.error('Failed to load related articles', err);
    }

    const words = article.content ? (article.content.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length) : 0;
    const readTime = Math.max(1, Math.ceil(words / 200));

    return (
        <main className="relative text-left">
            {/* Hero Header */}
            <div className="w-full h-[70vh] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
                <img
                    alt={article.title}
                    className="w-full h-full object-cover"
                    src={article.featuredImage || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"}
                />
                <div className="absolute bottom-0 left-0 w-full z-20 pb-16">
                    <div className="section-container max-w-4xl">
                        <div className="flex gap-2 mb-4">
                            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {article.categoryId?.name || "Adventure"}
                            </span>
                            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {readTime} Min Read
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            {article.title}
                        </h1>
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full border-2 border-white shadow-lg bg-slate-200 flex items-center justify-center font-bold text-primary">
                                {article.author?.[0] || "T"}
                            </div>
                            <div className="text-white">
                                <p className="font-bold">{article.author || "Travel Team"}</p>
                                <p className="text-sm text-slate-200">
                                    Travel Writer • {new Date(article.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-container py-12 flex flex-col lg:flex-row gap-12">
                {/* Left Sidebar: Social Sharing */}
                <aside className="hidden lg:block w-16">
                    <div className="sticky top-28 flex flex-col gap-4 items-center">
                        <button className="size-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all cursor-pointer">
                            <MaterialSymbol icon="share" />
                        </button>
                        <button className="size-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-500 hover:text-white transition-all cursor-pointer">
                            <MaterialSymbol icon="favorite" />
                        </button>
                        <button className="size-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all cursor-pointer">
                            <MaterialSymbol icon="bookmark" />
                        </button>
                        <div className="h-px w-8 bg-slate-200 my-2"></div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center">Share</p>
                    </div>
                </aside>

                {/* Main Content Column */}
                <article className="flex-1 max-w-4xl mx-auto text-slate-800">
                    <div
                        className="tiptap prose prose-lg prose-slate max-w-none 
                            prose-headings:font-black prose-headings:text-slate-900 
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                            prose-p:text-slate-600 prose-p:leading-relaxed
                            prose-a:text-[#0ea5e9] prose-a:no-underline hover:prose-a:underline
                            prose-blockquote:border-l-4 prose-blockquote:border-[#0ea5e9] prose-blockquote:bg-[#0ea5e9]/5 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-2xl prose-blockquote:italic prose-blockquote:text-slate-700 prose-blockquote:font-medium prose-blockquote:relative prose-blockquote:before:content-['\201C'] prose-blockquote:before:text-6xl prose-blockquote:before:text-[#0ea5e9]/20 prose-blockquote:before:absolute prose-blockquote:before:-top-4 prose-blockquote:before:-left-2 prose-blockquote:after:content-none
                            prose-img:rounded-3xl prose-img:shadow-2xl prose-img:my-12
                            prose-strong:text-slate-900 prose-strong:font-black
                            prose-li:marker:text-[#0ea5e9] prose-li:text-slate-600
                            prose-code:text-[#0ea5e9] prose-code:bg-[#0ea5e9]/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-lg prose-code:before:content-none prose-code:after:content-none
                            prose-hr:border-slate-100
                        "
                        dangerouslySetInnerHTML={{ __html: article.content || '' }}
                    />

                    {/* Related Travel Packages Widget - Mocked with Popular/Recent */}
                    {related.length > 0 && (
                        <section className="mt-20 py-10 border-t border-slate-200">
                            <h3 className="text-2xl font-bold mb-8 text-slate-900">Recommended Reads</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {related.slice(0, 2).map((rel: any) => (
                                    <Link key={rel._id} href={`/blog/${rel.slug || rel._id}`} className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all">
                                        <div className="relative h-48">
                                            <img
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                alt={rel.title}
                                                src={rel.featuredImage || "/placeholder.jpg"}
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{rel.title}</h4>
                                            <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                                                {rel.excerpt || (rel.content?.replace(/<[^>]*>/g, '').substring(0, 100) + '...')}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="flex items-center gap-1 text-sm text-slate-400">
                                                    <MaterialSymbol icon="schedule" size={16} />
                                                    {new Date(rel.createdAt).toLocaleDateString()}
                                                </span>
                                                <span className="text-primary font-bold text-sm flex items-center gap-1">
                                                    Read More <MaterialSymbol icon="arrow_forward" size={16} />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Comments Section */}
                    <section className="mt-12">
                        <h3 className="text-2xl font-bold mb-8 text-slate-900">Comments</h3>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <MaterialSymbol icon="person" className="text-primary" />
                                </div>
                                <div className="flex-1">
                                    <textarea
                                        className="w-full bg-white border border-slate-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none min-h-[100px]"
                                        placeholder="Join the conversation..."
                                        rows={3}
                                    ></textarea>
                                    <div className="flex justify-end mt-2">
                                        <Button className="bg-primary hover:bg-primary/90 text-white font-bold h-10 px-6 cursor-pointer">Post Comment</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>

                {/* Right Sidebar: Author & Related */}
                <aside className="hidden xl:block w-80">
                    <div className="sticky top-28 space-y-10">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">About The Author</h3>
                            <div className="p-5 bg-white rounded-2xl border border-slate-200 text-center">
                                <div className="size-20 rounded-full mx-auto mb-4 border-4 border-slate-50 bg-slate-200 flex items-center justify-center font-bold text-2xl text-primary">
                                    {article.author?.[0] || 'T'}
                                </div>
                                <h4 className="font-bold text-lg text-slate-900">{article.author || 'Travel Expert'}</h4>
                                <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                                    A passionate traveler and writer sharing insights to help you discover the world's most beautiful places.
                                </p>
                                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all font-bold cursor-pointer">
                                    Follow
                                </Button>
                            </div>
                        </div>

                        {related.length > 0 && (
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Trending Stories</h3>
                                <div className="space-y-6">
                                    {related.map((item: any) => (
                                        <Link key={item._id} href={`/blog/${item.slug || item._id}`} className="flex gap-4 group">
                                            <div className="size-16 relative flex-shrink-0">
                                                <img
                                                    src={item.featuredImage || "/placeholder.jpg"}
                                                    className="w-full h-full object-cover rounded-lg"
                                                    alt={item.title}
                                                />
                                            </div>
                                            <div>
                                                <h5 className="text-sm font-bold leading-tight group-hover:text-primary transition-colors text-slate-900 line-clamp-2">
                                                    {item.title}
                                                </h5>
                                                <p className="text-xs text-slate-400 mt-1">
                                                    {new Date(item.createdAt).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="p-6 bg-primary rounded-2xl text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold mb-2">Weekly Newsletter</h3>
                                <p className="text-sm text-white/80 mb-4">Get the best travel stories delivered to your inbox.</p>
                                <NewsletterForm variant="minimal" />
                            </div>
                            <div className="absolute -bottom-4 -right-4 text-white/10 rotate-12">
                                <MaterialSymbol icon="send" size={96} />
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}

