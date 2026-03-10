"use client";

import ImageUploader from "../../_components/ImageUploader";
import IconChooser from "../../_components/IconChooser";
import CMSSection from "../../_components/CMSSection";
import CMSPage from "../../_components/CMSPage";
import { getHomepage, updateHomepage } from "@/actions/cms-actions";

const TABS = [
    { id: "hero", label: "Hero", icon: "bolt" },
    { id: "highlights", label: "Highlights", icon: "star" },
    { id: "packages", label: "packages", icon: "school" },
    { id: "testimonials", label: "Testimonials", icon: "forum" },
    { id: "why", label: "Why Choose Us", icon: "thumb_up" },
    { id: "cta", label: "CTA", icon: "campaign" },
    { id: "seo", label: "SEO", icon: "search" },
];

export default function HomepageCMS() {
    const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium";

    return (
        <CMSPage
            title="Homepage CMS"
            description="Manage the content of your landing page."
            getAction={getHomepage}
            updateAction={updateHomepage}
            tabs={TABS}
            renderTabContent={(activeTab: string, data: any, setData: (data: any) => void) => (
                <>
                    {activeTab === "hero" && (
                        <CMSSection
                            title="Hero Section"
                            isVisible={data.hero.isVisible}
                            onVisibilityChange={(v) => setData({ ...data, hero: { ...data.hero, isVisible: v } })}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Background Image</label>
                                    <ImageUploader
                                        value={data.hero.backgroundImage}
                                        onChange={(url) => setData({ ...data, hero: { ...data.hero, backgroundImage: url } })}
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="text-sm font-bold text-gray-700 mb-2 flex justify-between">
                                        <span>Overlay Opacity</span>
                                        <span className="text-primary">{data.hero.overlayOpacity || 40}%</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        step="5"
                                        value={data.hero.overlayOpacity || 40}
                                        onChange={(e) => setData({ ...data, hero: { ...data.hero, overlayOpacity: parseInt(e.target.value) } })}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                    <div className="flex justify-between text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-wider">
                                        <span>Clear</span>
                                        <span>Vibrant</span>
                                        <span>Dark</span>
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Badge Text</label>
                                    <input
                                        type="text"
                                        value={data.hero.badgeText}
                                        onChange={(e) => setData({ ...data, hero: { ...data.hero, badgeText: e.target.value } })}
                                        className={inputClass}
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Title</label>
                                    <input
                                        type="text"
                                        value={data.hero.title}
                                        onChange={(e) => setData({ ...data, hero: { ...data.hero, title: e.target.value } })}
                                        className={inputClass}
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                                    <textarea
                                        rows={3}
                                        value={data.hero.description}
                                        onChange={(e) => setData({ ...data, hero: { ...data.hero, description: e.target.value } })}
                                        className={inputClass}
                                    />
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                    <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">link</span>
                                        Primary Button
                                    </h3>
                                    <div className="space-y-4">
                                        <IconChooser
                                            value={data.hero.primaryButton.icon || ''}
                                            onChange={(icon) => setData({ ...data, hero: { ...data.hero, primaryButton: { ...data.hero.primaryButton, icon } } })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Button Text"
                                            value={data.hero.primaryButton.text}
                                            onChange={(e) => setData({ ...data, hero: { ...data.hero, primaryButton: { ...data.hero.primaryButton, text: e.target.value } } })}
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                        <input
                                            type="text"
                                            placeholder="URL / Link"
                                            value={data.hero.primaryButton.link}
                                            onChange={(e) => setData({ ...data, hero: { ...data.hero, primaryButton: { ...data.hero.primaryButton, link: e.target.value } } })}
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                    <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-secondary text-lg">link</span>
                                        Secondary Button
                                    </h3>
                                    <div className="space-y-4">
                                        <IconChooser
                                            value={data.hero.secondaryButton.icon || ''}
                                            onChange={(icon) => setData({ ...data, hero: { ...data.hero, secondaryButton: { ...data.hero.secondaryButton, icon } } })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Button Text"
                                            value={data.hero.secondaryButton.text}
                                            onChange={(e) => setData({ ...data, hero: { ...data.hero, secondaryButton: { ...data.hero.secondaryButton, text: e.target.value } } })}
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-secondary/20"
                                        />
                                        <input
                                            type="text"
                                            placeholder="URL / Link"
                                            value={data.hero.secondaryButton.link}
                                            onChange={(e) => setData({ ...data, hero: { ...data.hero, secondaryButton: { ...data.hero.secondaryButton, link: e.target.value } } })}
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-secondary/20"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CMSSection>
                    )}

                    {activeTab === "highlights" && (
                        <CMSSection
                            title="Highlights Section"
                            isVisible={data.highlights.isVisible}
                            onVisibilityChange={(v) => setData({ ...data, highlights: { ...data.highlights, isVisible: v } })}
                        >
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Section Title</label>
                                    <input
                                        type="text"
                                        value={data.highlights.title}
                                        onChange={(e) => setData({ ...data, highlights: { ...data.highlights, title: e.target.value } })}
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                                    <textarea
                                        rows={2}
                                        value={data.highlights.description}
                                        onChange={(e) => setData({ ...data, highlights: { ...data.highlights, description: e.target.value } })}
                                        className={inputClass}
                                    />
                                </div>
                                <div className="space-y-4 pt-4 border-t">
                                    <h4 className="font-bold text-gray-700">Highlights Items</h4>
                                    {data.highlights.items.map((item: any, idx: number) => (
                                        <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col md:flex-row gap-4 items-start">
                                            <IconChooser
                                                value={item.icon}
                                                className="w-full md:w-48 shrink-0"
                                                onChange={(icon) => {
                                                    const newItems = [...data.highlights.items];
                                                    newItems[idx].icon = icon;
                                                    setData({ ...data, highlights: { ...data.highlights, items: newItems } });
                                                }}
                                            />
                                            <div className="flex-1 space-y-2">
                                                <input
                                                    placeholder="Item Title"
                                                    value={item.title}
                                                    onChange={(e) => {
                                                        const newItems = [...data.highlights.items];
                                                        newItems[idx].title = e.target.value;
                                                        setData({ ...data, highlights: { ...data.highlights, items: newItems } });
                                                    }}
                                                    className="w-full px-4 py-2 border rounded-lg text-gray-900"
                                                />
                                                <input
                                                    placeholder="Item Description"
                                                    value={item.description}
                                                    onChange={(e) => {
                                                        const newItems = [...data.highlights.items];
                                                        newItems[idx].description = e.target.value;
                                                        setData({ ...data, highlights: { ...data.highlights, items: newItems } });
                                                    }}
                                                    className="w-full px-4 py-2 border rounded-lg text-gray-900"
                                                />
                                            </div>
                                            <button
                                                onClick={() => {
                                                    const newItems = data.highlights.items.filter((_: any, i: number) => i !== idx);
                                                    setData({ ...data, highlights: { ...data.highlights, items: newItems } });
                                                }}
                                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                                            >
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        onClick={() => setData({ ...data, highlights: { ...data.highlights, items: [...data.highlights.items, { icon: "star", title: "", description: "" }] } })}
                                        className="w-full py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                                    >
                                        <span className="material-symbols-outlined">add</span>
                                        Add New Highlight
                                    </button>
                                </div>
                            </div>
                        </CMSSection>
                    )}

                    {activeTab === "packages" && (
                        <CMSSection
                            title="Packages Section"
                            isVisible={data.Packages.isVisible}
                            onVisibilityChange={(v) => setData({ ...data, Packages: { ...data.Packages, isVisible: v } })}
                        >
                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Section Title</label>
                                        <input
                                            type="text"
                                            value={data.Packages.title}
                                            onChange={(e) => setData({ ...data, Packages: { ...data.Packages, title: e.target.value } })}
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Section Subtitle</label>
                                        <input
                                            type="text"
                                            value={data.Packages.subtitle}
                                            onChange={(e) => setData({ ...data, Packages: { ...data.Packages, subtitle: e.target.value } })}
                                            className={inputClass}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4 border-t">
                                    <h4 className="font-bold text-gray-700">Package Items</h4>
                                    {data.Packages.items && data.Packages.items.map((item: any, idx: number) => (
                                        <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col md:flex-row gap-4 items-start">
                                            <IconChooser
                                                value={item.icon}
                                                className="w-full md:w-48 shrink-0"
                                                onChange={(icon) => {
                                                    const newItems = [...data.Packages.items];
                                                    newItems[idx].icon = icon;
                                                    setData({ ...data, Packages: { ...data.Packages, items: newItems } });
                                                }}
                                            />
                                            <div className="flex-1 space-y-2">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <input
                                                        placeholder="Level (e.g. CAP-I)"
                                                        value={item.level}
                                                        onChange={(e) => {
                                                            const newItems = [...data.Packages.items];
                                                            newItems[idx].level = e.target.value;
                                                            setData({ ...data, Packages: { ...data.Packages, items: newItems } });
                                                        }}
                                                        className="w-full px-4 py-2 border rounded-lg text-gray-900"
                                                    />
                                                    <input
                                                        placeholder="Type (e.g. Foundation)"
                                                        value={item.type}
                                                        onChange={(e) => {
                                                            const newItems = [...data.Packages.items];
                                                            newItems[idx].type = e.target.value;
                                                            setData({ ...data, Packages: { ...data.Packages, items: newItems } });
                                                        }}
                                                        className="w-full px-4 py-2 border rounded-lg text-gray-900"
                                                    />
                                                </div>
                                                <textarea
                                                    placeholder="Description"
                                                    value={item.description}
                                                    rows={2}
                                                    onChange={(e) => {
                                                        const newItems = [...data.Packages.items];
                                                        newItems[idx].description = e.target.value;
                                                        setData({ ...data, Packages: { ...data.Packages, items: newItems } });
                                                    }}
                                                    className="w-full px-4 py-2 border rounded-lg text-gray-900"
                                                />
                                                <label className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        checked={item.popular || false}
                                                        onChange={(e) => {
                                                            const newItems = [...data.Packages.items];
                                                            newItems[idx].popular = e.target.checked;
                                                            setData({ ...data, Packages: { ...data.Packages, items: newItems } });
                                                        }}
                                                        className="w-4 h-4 text-primary rounded"
                                                    />
                                                    <span className="text-sm text-gray-600">Mark as Popular</span>
                                                </label>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    const newItems = data.Packages.items.filter((_: any, i: number) => i !== idx);
                                                    setData({ ...data, Packages: { ...data.Packages, items: newItems } });
                                                }}
                                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                                            >
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        onClick={() => {
                                            const currentItems = data.Packages.items || [];
                                            setData({ ...data, Packages: { ...data.Packages, items: [...currentItems, { icon: "school", level: "", type: "", description: "", popular: false }] } });
                                        }}
                                        className="w-full py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                                    >
                                        <span className="material-symbols-outlined">add</span>
                                        Add New Package
                                    </button>
                                </div>
                            </div>
                        </CMSSection>
                    )}

                    {activeTab === "testimonials" && (
                        <CMSSection
                            title="Testimonials Section"
                            isVisible={data.testimonials.isVisible}
                            onVisibilityChange={(v) => setData({ ...data, testimonials: { ...data.testimonials, isVisible: v } })}
                        >
                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Section Title</label>
                                        <input
                                            type="text"
                                            value={data.testimonials.title}
                                            onChange={(e) => setData({ ...data, testimonials: { ...data.testimonials, title: e.target.value } })}
                                            className={inputClass}
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Section Description</label>
                                        <textarea
                                            rows={2}
                                            value={data.testimonials.description}
                                            onChange={(e) => setData({ ...data, testimonials: { ...data.testimonials, description: e.target.value } })}
                                            className={inputClass}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4 border-t">
                                    <h4 className="font-bold text-gray-700">Testimonials</h4>
                                    {data.testimonials.items && data.testimonials.items.map((item: any, idx: number) => (
                                        <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
                                            <div className="flex flex-col md:flex-row gap-4 items-start">
                                                <div className="w-full md:w-48 shrink-0">
                                                    <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Avatar</label>
                                                    <ImageUploader
                                                        value={item.avatar}
                                                        onChange={(url) => {
                                                            const newItems = [...data.testimonials.items];
                                                            newItems[idx].avatar = url;
                                                            setData({ ...data, testimonials: { ...data.testimonials, items: newItems } });
                                                        }}
                                                    />
                                                </div>
                                                <div className="flex-1 space-y-4 w-full">
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        <div>
                                                            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Name</label>
                                                            <input
                                                                value={item.name}
                                                                onChange={(e) => {
                                                                    const newItems = [...data.testimonials.items];
                                                                    newItems[idx].name = e.target.value;
                                                                    setData({ ...data, testimonials: { ...data.testimonials, items: newItems } });
                                                                }}
                                                                className="w-full px-4 py-2 border rounded-lg text-gray-900"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Location/Details</label>
                                                            <input
                                                                value={item.location}
                                                                onChange={(e) => {
                                                                    const newItems = [...data.testimonials.items];
                                                                    newItems[idx].location = e.target.value;
                                                                    setData({ ...data, testimonials: { ...data.testimonials, items: newItems } });
                                                                }}
                                                                className="w-full px-4 py-2 border rounded-lg text-gray-900"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Rating (1-5)</label>
                                                            <input
                                                                type="number"
                                                                min="1"
                                                                max="5"
                                                                value={item.rating}
                                                                onChange={(e) => {
                                                                    const newItems = [...data.testimonials.items];
                                                                    newItems[idx].rating = parseInt(e.target.value);
                                                                    setData({ ...data, testimonials: { ...data.testimonials, items: newItems } });
                                                                }}
                                                                className="w-full px-4 py-2 border rounded-lg text-gray-900"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Testimonial Text</label>
                                                        <textarea
                                                            value={item.text}
                                                            rows={3}
                                                            onChange={(e) => {
                                                                const newItems = [...data.testimonials.items];
                                                                newItems[idx].text = e.target.value;
                                                                setData({ ...data, testimonials: { ...data.testimonials, items: newItems } });
                                                            }}
                                                            className="w-full px-4 py-2 border rounded-lg text-gray-900"
                                                        />
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        const newItems = data.testimonials.items.filter((_: any, i: number) => i !== idx);
                                                        setData({ ...data, testimonials: { ...data.testimonials, items: newItems } });
                                                    }}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg self-start md:self-center"
                                                >
                                                    <span className="material-symbols-outlined">delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        onClick={() => {
                                            const currentItems = data.testimonials.items || [];
                                            setData({ ...data, testimonials: { ...data.testimonials, items: [...currentItems, { name: "", location: "", text: "", avatar: "", rating: 5 }] } });
                                        }}
                                        className="w-full py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                                    >
                                        <span className="material-symbols-outlined">add</span>
                                        Add New Testimonial
                                    </button>
                                </div>
                            </div>
                        </CMSSection>
                    )}

                    {activeTab === "why" && (
                        <CMSSection
                            title="Why Choose Us Section"
                            isVisible={data.whyChooseUs.isVisible}
                            onVisibilityChange={(v) => setData({ ...data, whyChooseUs: { ...data.whyChooseUs, isVisible: v } })}
                        >
                            <div className="space-y-6">
                                <ImageUploader
                                    value={data.whyChooseUs.imageUrl}
                                    onChange={(url) => setData({ ...data, whyChooseUs: { ...data.whyChooseUs, imageUrl: url } })}
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Badge Text</label>
                                        <input value={data.whyChooseUs.badgeText} onChange={(e) => setData({ ...data, whyChooseUs: { ...data.whyChooseUs, badgeText: e.target.value } })} className={inputClass} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Title</label>
                                        <input value={data.whyChooseUs.title} onChange={(e) => setData({ ...data, whyChooseUs: { ...data.whyChooseUs, title: e.target.value } })} className={inputClass} />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                                        <textarea rows={2} value={data.whyChooseUs.description} onChange={(e) => setData({ ...data, whyChooseUs: { ...data.whyChooseUs, description: e.target.value } })} className={inputClass} />
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4 border-t">
                                    <h4 className="font-bold text-gray-700">Reasons List</h4>
                                    {data.whyChooseUs.reasons.map((reason: any, idx: number) => (
                                        <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col md:flex-row gap-4 items-start">
                                            <IconChooser
                                                value={reason.icon}
                                                className="w-full md:w-48 shrink-0"
                                                onChange={(icon) => {
                                                    const newReasons = [...data.whyChooseUs.reasons];
                                                    // Handle potential legacy string data by converting to object
                                                    const current = typeof newReasons[idx] === 'string' ? { title: newReasons[idx], icon: 'check', description: '' } : newReasons[idx];
                                                    newReasons[idx] = { ...current, icon };
                                                    setData({ ...data, whyChooseUs: { ...data.whyChooseUs, reasons: newReasons } });
                                                }}
                                            />
                                            <div className="flex-1 space-y-2">
                                                <input
                                                    placeholder="Title"
                                                    value={typeof reason === 'string' ? reason : reason.title}
                                                    onChange={(e) => {
                                                        const newReasons = [...data.whyChooseUs.reasons];
                                                        const current = typeof newReasons[idx] === 'string' ? { icon: 'check', description: '' } : newReasons[idx];
                                                        newReasons[idx] = { ...current, title: e.target.value };
                                                        setData({ ...data, whyChooseUs: { ...data.whyChooseUs, reasons: newReasons } });
                                                    }}
                                                    className="w-full px-4 py-2 border rounded-lg text-gray-900"
                                                />
                                                <input
                                                    placeholder="Description"
                                                    value={typeof reason === 'string' ? '' : reason.description}
                                                    onChange={(e) => {
                                                        const newReasons = [...data.whyChooseUs.reasons];
                                                        const current = typeof newReasons[idx] === 'string' ? { title: newReasons[idx], icon: 'check' } : newReasons[idx];
                                                        newReasons[idx] = { ...current, description: e.target.value };
                                                        setData({ ...data, whyChooseUs: { ...data.whyChooseUs, reasons: newReasons } });
                                                    }}
                                                    className="w-full px-4 py-2 border rounded-lg text-gray-900"
                                                />
                                            </div>
                                            <button onClick={() => {
                                                const newReasons = data.whyChooseUs.reasons.filter((_: any, i: number) => i !== idx);
                                                setData({ ...data, whyChooseUs: { ...data.whyChooseUs, reasons: newReasons } });
                                            }} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        onClick={() => setData({ ...data, whyChooseUs: { ...data.whyChooseUs, reasons: [...data.whyChooseUs.reasons, { icon: "check_circle", title: "", description: "" }] } })}
                                        className="w-full py-2 border-2 border-dashed rounded-xl text-gray-500"
                                    >
                                        + Add Reason
                                    </button>
                                </div>
                            </div>
                        </CMSSection>
                    )}

                    {activeTab === "cta" && (
                        <CMSSection
                            title="Bottom CTA Section"
                            isVisible={data.cta.isVisible}
                            onVisibilityChange={(v) => setData({ ...data, cta: { ...data.cta, isVisible: v } })}
                        >
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
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                    <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">link</span>
                                        Primary Button
                                    </h3>
                                    <div className="space-y-4">
                                        <IconChooser
                                            value={data.cta.primaryButton.icon || ''}
                                            onChange={(icon) => setData({ ...data, cta: { ...data.cta, primaryButton: { ...data.cta.primaryButton, icon } } })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Text"
                                            value={data.cta.primaryButton.text}
                                            onChange={(e) => setData({ ...data, cta: { ...data.cta, primaryButton: { ...data.cta.primaryButton, text: e.target.value } } })}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Link"
                                            value={data.cta.primaryButton.link}
                                            onChange={(e) => setData({ ...data, cta: { ...data.cta, primaryButton: { ...data.cta.primaryButton, link: e.target.value } } })}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                    <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-secondary text-lg">link</span>
                                        Secondary Button
                                    </h3>
                                    <div className="space-y-4">
                                        <IconChooser
                                            value={data.cta.secondaryButton.icon || ''}
                                            onChange={(icon) => setData({ ...data, cta: { ...data.cta, secondaryButton: { ...data.cta.secondaryButton, icon } } })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Text"
                                            value={data.cta.secondaryButton.text}
                                            onChange={(e) => setData({ ...data, cta: { ...data.cta, secondaryButton: { ...data.cta.secondaryButton, text: e.target.value } } })}
                                            className="w-full px-4 py-3.5 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-secondary/20"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Link"
                                            value={data.cta.secondaryButton.link}
                                            onChange={(e) => setData({ ...data, cta: { ...data.cta, secondaryButton: { ...data.cta.secondaryButton, link: e.target.value } } })}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-secondary/20"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CMSSection>
                    )}

                    {activeTab === "seo" && (
                        <CMSSection title="SEO Settings">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Meta Title</label>
                                    <input
                                        type="text"
                                        value={data.seo?.title || ""}
                                        onChange={(e) => setData({ ...data, seo: { ...data.seo, title: e.target.value } })}
                                        className={inputClass}
                                        placeholder="Homepage Title"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Meta Description</label>
                                    <textarea
                                        rows={3}
                                        value={data.seo?.description || ""}
                                        onChange={(e) => setData({ ...data, seo: { ...data.seo, description: e.target.value } })}
                                        className={inputClass}
                                        placeholder="Enter meta description"
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
