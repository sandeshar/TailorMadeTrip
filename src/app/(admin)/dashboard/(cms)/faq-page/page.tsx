"use client";

import { useState, useEffect } from "react";
import CMSPage from "../../_components/CMSPage";
import CMSSection from "../../_components/CMSSection";
import IconChooser from "../../_components/IconChooser";
import { getFAQPage, updateFAQPage } from "@/actions/cms-actions";
import { getFAQCategories } from "@/actions/categories";

const TABS = [
    { id: "header", label: "Header", icon: "title" },
    { id: "items", label: "FAQ Items", icon: "quiz" },
    { id: "cta", label: "CTA", icon: "campaign" },
    { id: "seo", label: "SEO", icon: "search" },
];

export default function FAQCMS() {
    const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium";
    const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
    const [expandedItem, setExpandedItem] = useState<number | null>(null);
    const [dbCategories, setDbCategories] = useState<any[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const cats = await getFAQCategories();
                setDbCategories(cats);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <CMSPage
            title="FAQ CMS"
            description="Manage your Frequently Asked Questions."
            getAction={getFAQPage}
            updateAction={updateFAQPage}
            tabs={TABS}
            renderTabContent={(activeTab, data, setData) => {
                const filteredItems = selectedCategoryId
                    ? data.items.map((item: any, idx: number) => ({ ...item, originalIndex: idx })).filter((item: any) => item.categoryId === selectedCategoryId)
                    : data.items.map((item: any, idx: number) => ({ ...item, originalIndex: idx }));

                return (
                    <>
                        {activeTab === "header" && (
                            <CMSSection title="Header Section">
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Title</label>
                                        <input
                                            type="text"
                                            value={data.header.title}
                                            onChange={(e) => setData({ ...data, header: { ...data.header, title: e.target.value } })}
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                                        <textarea
                                            rows={3}
                                            value={data.header.description}
                                            onChange={(e) => setData({ ...data, header: { ...data.header, description: e.target.value } })}
                                            className={inputClass}
                                        />
                                    </div>
                                </div>
                            </CMSSection>
                        )}

                        {activeTab === "items" && (
                            <CMSSection title="FAQ Questions & Answers">
                                <div className="mb-8 p-6 bg-primary/5 border border-primary/10 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="font-bold text-gray-900">Filter by Category</h3>
                                        <p className="text-sm text-gray-500">Pick a category to manage its specific questions.</p>
                                    </div>
                                    <select
                                        className={`${inputClass} !w-auto min-w-[240px]`}
                                        value={selectedCategoryId}
                                        onChange={(e) => setSelectedCategoryId(e.target.value)}
                                    >
                                        <option value="">All Categories</option>
                                        {dbCategories.map((cat: any) => (
                                            <option key={cat.id || cat._id} value={cat.id || cat._id}>{cat.name || cat.title}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-4">
                                    {filteredItems.map((item: any) => (
                                        <div key={item.originalIndex} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                                            <div
                                                className={`p-5 flex items-center justify-between cursor-pointer transition-colors ${expandedItem === item.originalIndex ? 'bg-primary/5' : 'hover:bg-gray-50'}`}
                                                onClick={() => setExpandedItem(expandedItem === item.originalIndex ? null : item.originalIndex)}
                                            >
                                                <div className="flex items-center gap-4 flex-1 min-w-0">
                                                    <div className="flex flex-col gap-1 mr-1 border-r border-gray-100 pr-3">
                                                        <button
                                                            disabled={item.originalIndex === (selectedCategoryId ? filteredItems[0].originalIndex : 0)}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                const newItems = [...data.items];
                                                                const targetIdx = item.originalIndex;
                                                                let swapWith = -1;
                                                                if (selectedCategoryId) {
                                                                    for (let i = targetIdx - 1; i >= 0; i--) {
                                                                        if (newItems[i].categoryId === selectedCategoryId) { swapWith = i; break; }
                                                                    }
                                                                } else { swapWith = targetIdx - 1; }

                                                                if (swapWith !== -1) {
                                                                    const temp = newItems[targetIdx];
                                                                    newItems[targetIdx] = newItems[swapWith];
                                                                    newItems[swapWith] = temp;
                                                                    setData({ ...data, items: newItems });
                                                                    if (expandedItem === targetIdx) setExpandedItem(swapWith);
                                                                    else if (expandedItem === swapWith) setExpandedItem(targetIdx);
                                                                }
                                                            }}
                                                            className="text-gray-400 hover:text-primary disabled:opacity-20 p-1"
                                                            title="Move Up"
                                                        >
                                                            <span className="material-symbols-outlined text-[18px]">keyboard_arrow_up</span>
                                                        </button>
                                                        <button
                                                            disabled={item.originalIndex === (selectedCategoryId ? filteredItems[filteredItems.length - 1].originalIndex : data.items.length - 1)}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                const newItems = [...data.items];
                                                                const targetIdx = item.originalIndex;
                                                                let swapWith = -1;
                                                                if (selectedCategoryId) {
                                                                    for (let i = targetIdx + 1; i < newItems.length; i++) {
                                                                        if (newItems[i].categoryId === selectedCategoryId) { swapWith = i; break; }
                                                                    }
                                                                } else { swapWith = targetIdx + 1; }

                                                                if (swapWith !== -1 && swapWith < newItems.length) {
                                                                    const temp = newItems[targetIdx];
                                                                    newItems[targetIdx] = newItems[swapWith];
                                                                    newItems[swapWith] = temp;
                                                                    setData({ ...data, items: newItems });
                                                                    if (expandedItem === targetIdx) setExpandedItem(swapWith);
                                                                    else if (expandedItem === swapWith) setExpandedItem(targetIdx);
                                                                }
                                                            }}
                                                            className="text-gray-400 hover:text-primary disabled:opacity-20 p-1"
                                                            title="Move Down"
                                                        >
                                                            <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
                                                        </button>
                                                    </div>
                                                    <div className={`p-2 rounded-lg ${item.isHighlighted ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                                                        <span className="material-symbols-outlined text-[20px]">{item.isHighlighted ? 'star' : 'help'}</span>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-bold text-gray-900 truncate">{item.question || "Untitled Question"}</h4>
                                                        <p className="text-xs text-gray-400 mt-0.5">
                                                            Category: {dbCategories.find(c => (c.id || c._id) === item.categoryId)?.name || "Uncategorized"}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            if (confirm("Are you sure you want to delete this FAQ item?")) {
                                                                const newItems = [...data.items];
                                                                newItems.splice(item.originalIndex, 1);
                                                                setData({ ...data, items: newItems });
                                                            }
                                                        }}
                                                        className="text-red-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-all"
                                                    >
                                                        <span className="material-symbols-outlined">delete</span>
                                                    </button>
                                                    <span className={`material-symbols-outlined text-gray-300 transition-transform duration-300 ${expandedItem === item.originalIndex ? 'rotate-180' : ''}`}>expand_more</span>
                                                </div>
                                            </div>

                                            {expandedItem === item.originalIndex && (
                                                <div className="p-6 border-t border-gray-50 bg-white animate-in slide-in-from-top-2 duration-300">
                                                    <div className="grid grid-cols-1 gap-6">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            <div>
                                                                <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                                                                <select
                                                                    value={item.categoryId}
                                                                    onChange={(e) => {
                                                                        const newItems = [...data.items];
                                                                        newItems[item.originalIndex].categoryId = e.target.value;
                                                                        setData({ ...data, items: newItems });
                                                                    }}
                                                                    className={inputClass}
                                                                >
                                                                    <option value="">Select Category</option>
                                                                    {dbCategories.map((cat: any) => (
                                                                        <option key={cat.id || cat._id} value={cat.id || cat._id}>{cat.name || cat.title}</option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            <div className="flex items-center gap-2 pt-8">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={item.isHighlighted}
                                                                    onChange={(e) => {
                                                                        const newItems = [...data.items];
                                                                        newItems[item.originalIndex].isHighlighted = e.target.checked;
                                                                        setData({ ...data, items: newItems });
                                                                    }}
                                                                    className="w-5 h-5 accent-primary cursor-pointer"
                                                                />
                                                                <label className="text-sm font-bold text-gray-700">Highlighted Style</label>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-bold text-gray-700 mb-2">Question</label>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter the question..."
                                                                value={item.question}
                                                                onChange={(e) => {
                                                                    const newItems = [...data.items];
                                                                    newItems[item.originalIndex].question = e.target.value;
                                                                    setData({ ...data, items: newItems });
                                                                }}
                                                                className={inputClass}
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-bold text-gray-700 mb-2">Answer</label>
                                                            <textarea
                                                                rows={4}
                                                                placeholder="Enter the answer..."
                                                                value={item.answer}
                                                                onChange={(e) => {
                                                                    const newItems = [...data.items];
                                                                    newItems[item.originalIndex].answer = e.target.value;
                                                                    setData({ ...data, items: newItems });
                                                                }}
                                                                className={inputClass}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <button
                                        onClick={() => {
                                            const newItems = [...data.items];
                                            newItems.push({
                                                categoryId: selectedCategoryId || "",
                                                question: "",
                                                answer: "",
                                                isHighlighted: false
                                            });
                                            setData({ ...data, items: newItems });
                                            setExpandedItem(newItems.length - 1);
                                        }}
                                        className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-500 font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                                    >
                                        <span className="material-symbols-outlined">add</span>
                                        Add FAQ Item {selectedCategoryId ? `in ${dbCategories.find((c: any) => (c.id || c._id) === selectedCategoryId)?.name || dbCategories.find((c: any) => (c.id || c._id) === selectedCategoryId)?.title}` : ''}
                                    </button>
                                </div>
                            </CMSSection>
                        )}

                        {activeTab === "cta" && (
                            <CMSSection title="Call to Action Section">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Title</label>
                                        <input
                                            type="text"
                                            value={data.cta.title}
                                            onChange={(e) => setData({ ...data, cta: { ...data.cta, title: e.target.value } })}
                                            className={inputClass}
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                                        <textarea
                                            rows={2}
                                            value={data.cta.description}
                                            onChange={(e) => setData({ ...data, cta: { ...data.cta, description: e.target.value } })}
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Primary Button Text</label>
                                        <input
                                            type="text"
                                            value={data.cta.buttonText}
                                            onChange={(e) => setData({ ...data, cta: { ...data.cta, buttonText: e.target.value } })}
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Primary Button Link</label>
                                        <input
                                            type="text"
                                            value={data.cta.buttonLink}
                                            onChange={(e) => setData({ ...data, cta: { ...data.cta, buttonLink: e.target.value } })}
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Secondary Button Text</label>
                                        <input
                                            type="text"
                                            value={data.cta.secondaryButtonText}
                                            onChange={(e) => setData({ ...data, cta: { ...data.cta, secondaryButtonText: e.target.value } })}
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Secondary Button Link</label>
                                        <input
                                            type="text"
                                            value={data.cta.secondaryButtonLink}
                                            onChange={(e) => setData({ ...data, cta: { ...data.cta, secondaryButtonLink: e.target.value } })}
                                            className={inputClass}
                                        />
                                    </div>
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
                );
            }}
        />
    );
}
