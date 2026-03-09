import React from "react";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Button } from "@/components/ui/button";
import { getTermsPage } from "@/actions/cms-actions";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getTermsPage();
    return {
        title: page?.seo?.title || "Terms and Conditions | Travel",
        description: page?.seo?.description || "Read our terms and conditions.",
    };
}

export default async function TermsPage() {
    const page = await getTermsPage();
    if (!page) return null;
    const { header, content } = page;

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <main className="flex-1 section-container py-12 lg:py-20">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xs">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-slate-100">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3 uppercase">{header?.title}</h1>
                            <p className="text-slate-400 flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                                <MaterialSymbol icon="update" size={16} className="text-primary" />
                                Last Updated: {header?.lastUpdated}
                            </p>
                        </div>
                    </div>

                    <div
                        className="tiptap prose prose-slate prose-base lg:prose-lg max-w-none text-slate-700 focus:outline-none prose-headings:text-slate-900 prose-headings:font-bold prose-h1:text-4xl prose-strong:text-slate-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline mb-12"
                        dangerouslySetInnerHTML={{ __html: content || "" }}
                    />

                    <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-slate-600 text-sm font-medium">
                            Have questions about these terms? We are here to help.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="outline" className="px-6 py-6 rounded-xl border border-primary text-primary font-bold hover:bg-primary/5 transition-colors">
                                Support Center
                            </Button>
                            <Button className="px-6 py-6 rounded-xl bg-slate-900 text-white font-bold hover:opacity-90 transition-opacity">
                                Accept Terms
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
