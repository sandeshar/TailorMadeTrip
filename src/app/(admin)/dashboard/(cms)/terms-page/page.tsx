"use client";

import CMSPage from "../../_components/CMSPage";
import CMSSection from "../../_components/CMSSection";
import RichTextEditor from "../../_components/RichTextEditor";
import { getTermsPage, updateTermsPage } from "@/actions/cms-actions";

const TABS = [
    { id: "header", label: "Header", icon: "title" },
    { id: "content", label: "Page Content", icon: "description" },
    { id: "seo", label: "SEO", icon: "search" },
];

export default function TermsCMS() {
    const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium";

    return (
        <CMSPage
            title="Terms and Conditions CMS"
            description="Manage your legal pages content."
            getAction={getTermsPage}
            updateAction={updateTermsPage}
            tabs={TABS}
            renderTabContent={(activeTab, data, setData) => (
                <>
                    {activeTab === "header" && (
                        <CMSSection title="Header Section">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Page Title</label>
                                    <input
                                        type="text"
                                        value={data.header.title}
                                        onChange={(e) => setData({ ...data, header: { ...data.header, title: e.target.value } })}
                                        className={inputClass}
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Updated Date</label>
                                    <input
                                        type="text"
                                        value={data.header.lastUpdated}
                                        onChange={(e) => setData({ ...data, header: { ...data.header, lastUpdated: e.target.value } })}
                                        className={inputClass}
                                        placeholder="e.g., March 01, 2026"
                                    />
                                </div>
                            </div>
                        </CMSSection>
                    )}

                    {activeTab === "content" && (
                        <CMSSection title="Full Terms & Conditions">
                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-gray-700">Write your whole terms and conditions here</label>
                                <RichTextEditor
                                    value={data.content || ""}
                                    onChange={(content) => setData({ ...data, content })}
                                />
                            </div>
                        </CMSSection>
                    )}

                    {activeTab === "seo" && (
                        <CMSSection title="SEO Settings">
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Meta Title</label>
                                    <input
                                        type="text"
                                        value={data.seo.title}
                                        onChange={(e) => setData({ ...data, seo: { ...data.seo, title: e.target.value } })}
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Meta Description</label>
                                    <textarea
                                        rows={3}
                                        value={data.seo.description}
                                        onChange={(e) => setData({ ...data, seo: { ...data.seo, description: e.target.value } })}
                                        className={inputClass}
                                    />
                                </div>
                            </div>
                        </CMSSection>
                    )}
                </>
            )}
        />
    );
}
