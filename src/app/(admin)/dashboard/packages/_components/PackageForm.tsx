"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { createPackage, updatePackage, getPackageById } from "@/actions/packages";
import { getPackageCategories, getPackageSubcategories } from "@/actions/categories";
import ImageUploader from "../../_components/ImageUploader";
import RichTextEditor from "@/components/RichTextEditor";
import ItineraryManager from "./ItineraryManager";
import ArrayInput from "./ArrayInput";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { cn } from "@/lib/utils";

export default function PackageForm({ params }: { params?: { id: string } }) {
    const router = useRouter();
    const isEditing = !!params?.id;

    const [categories, setCategories] = useState<any[]>([]);
    const [subcategories, setSubcategories] = useState<any[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeTab, setActiveTab] = useState("basic");

    const tabs = [
        { id: "basic", label: "Basic Info", icon: "info" },
        { id: "media", label: "Media", icon: "image" },
        { id: "content", label: "Content", icon: "article" },
        { id: "logistics", label: "Inclusions/Exclusions", icon: "fact_check" },
        { id: "itinerary", label: "Itinerary", icon: "route" },
        { id: "departures", label: "Departures", icon: "calendar_month" },
        { id: "seo", label: "SEO Settings", icon: "search" },
    ];

    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        categoryId: "",
        subcategoryId: "",
        description: "",
        duration: "",
        price: 0,
        image: "",
        images: [] as string[],
        isBestSeller: false,
        tripGrade: "",
        startsAt: "",
        endsAt: "",
        tripType: "",
        transport: "",
        tripDestination: "",
        maxAltitude: "",
        accommodation: "",
        features: [] as string[],
        highlights: [] as string[],
        inclusions: [] as string[],
        exclusions: [] as string[],
        costDetails: "",
        departures: [] as { startDate: string; endDate: string; price: number; status: string }[],
        usefulInfo: "",
        itinerary: [] as { day: number; title: string; content: string; proTip?: string }[],
        status: "active" as "active" | "inactive",
        seo: {
            title: "",
            description: "",
            keywords: ""
        }
    });

    useEffect(() => {
        fetchCategories();
        if (isEditing) {
            fetchPackage();
        }
    }, [isEditing]);

    const fetchCategories = async () => {
        try {
            const data = await getPackageCategories();
            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories", error);
        }
    };

    const fetchSubcategories = async (catId: string) => {
        try {
            const data = await getPackageSubcategories(catId);
            setSubcategories(data);
        } catch (error) {
            console.error("Error fetching subcategories", error);
        }
    };

    const fetchPackage = async () => {
        if (!params?.id) return;
        try {
            const data = await getPackageById(params.id);
            setFormData({
                ...data,
                features: Array.isArray(data.features) ? data.features : [],
                highlights: Array.isArray(data.highlights) ? data.highlights : [],
                inclusions: Array.isArray(data.inclusions) ? data.inclusions : [],
                exclusions: Array.isArray(data.exclusions) ? data.exclusions : [],
                images: Array.isArray(data.images) ? data.images : [],
                itinerary: Array.isArray(data.itinerary) ? data.itinerary : [],
                seo: {
                    title: data.seo?.title || "",
                    description: data.seo?.description || "",
                    keywords: data.seo?.keywords || ""
                }
            });
            if (data.categoryId) {
                const catId = typeof data.categoryId === 'object' ? data.categoryId._id : data.categoryId;
                fetchSubcategories(catId);
            }
        } catch (error) {
            console.error("Error fetching package", error);
            toast.error("Failed to load package details");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        if (e) e.preventDefault();
        setIsSubmitting(true);

        const payload = { ...formData };
        if (!payload.subcategoryId) {
            (payload as any).subcategoryId = "";
        }

        try {
            if (isEditing && params?.id) {
                await updatePackage(params.id, payload);
                toast.success("Package updated successfully");
            } else {
                await createPackage(payload);
                toast.success("Package created successfully");
            }
            router.push("/dashboard/packages");
        } catch (error: any) {
            console.error("Error saving package", error);
            toast.error(error.message || "Something went wrong");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto pb-20">
            <div className="sticky top-0 z-50 bg-gray-50/90 backdrop-blur-md -mx-8 px-8 py-6 mb-8 border-b border-gray-200 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 tracking-tight">{isEditing ? "Edit" : "Create"} Package</h1>
                        <p className="text-gray-500 mt-1">Manage tour packages, pricing, and details.</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={() => router.push("/dashboard/packages")}
                            className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm"
                        >
                            Back
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 disabled:opacity-50"
                        >
                            {isSubmitting ? "Saving..." : "Save Package"}
                        </button>
                    </div>
                </div>

                <div className="flex gap-1 overflow-x-auto pb-1 no-scrollbar border-t pt-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap",
                                activeTab === tab.id
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
                            )}
                        >
                            <MaterialSymbol icon={tab.icon as any} size={18} />
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {activeTab === "basic" && (
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <h2 className="text-xl font-bold text-gray-900 border-b pb-4">Basic Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Package Title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => {
                                        const title = e.target.value;
                                        setFormData({
                                            ...formData,
                                            title,
                                            slug: isEditing ? formData.slug : title.toLowerCase().replace(/\s+/g, '-')
                                        });
                                    }}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                                <input
                                    type="text"
                                    value={formData.slug}
                                    onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <select
                                    value={formData.categoryId}
                                    onChange={(e) => {
                                        const catId = e.target.value;
                                        setFormData({ ...formData, categoryId: catId, subcategoryId: "" });
                                        if (catId) fetchSubcategories(catId);
                                    }}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    required
                                >
                                    <option value="">Select Category</option>
                                    {categories.map(cat => (
                                        <option key={cat._id} value={cat._id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subcategory (Optional)</label>
                                <select
                                    value={formData.subcategoryId}
                                    onChange={(e) => setFormData({ ...formData, subcategoryId: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                >
                                    <option value="">None</option>
                                    {subcategories.map(sub => (
                                        <option key={sub._id} value={sub._id}>{sub.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                                <input
                                    type="number"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Duration (e.g. 5 Days / 4 Nights)</label>
                                <input
                                    type="text"
                                    value={formData.duration}
                                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    required
                                />
                            </div>

                            <div className="flex items-center gap-3">
                                <label className="inline-flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.isBestSeller}
                                        onChange={(e) => setFormData({ ...formData, isBestSeller: e.target.checked })}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-sm font-medium text-gray-700">Best Seller</span>
                                </label>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Good to Know (Trip Details)</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Trip Grade</label>
                                    <input
                                        type="text"
                                        value={formData.tripGrade}
                                        onChange={(e) => setFormData({ ...formData, tripGrade: e.target.value })}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        placeholder="e.g. Moderate"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Starts At</label>
                                    <input
                                        type="text"
                                        value={formData.startsAt}
                                        onChange={(e) => setFormData({ ...formData, startsAt: e.target.value })}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        placeholder="e.g. Kathmandu"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Ends At</label>
                                    <input
                                        type="text"
                                        value={formData.endsAt}
                                        onChange={(e) => setFormData({ ...formData, endsAt: e.target.value })}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        placeholder="e.g. Kathmandu"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Trip Type</label>
                                    <input
                                        type="text"
                                        value={formData.tripType}
                                        onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        placeholder="e.g. Adventurous Hike"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Transport</label>
                                    <input
                                        type="text"
                                        value={formData.transport}
                                        onChange={(e) => setFormData({ ...formData, transport: e.target.value })}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        placeholder="e.g. Private vehicle / By Air"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Trip Destination</label>
                                    <input
                                        type="text"
                                        value={formData.tripDestination}
                                        onChange={(e) => setFormData({ ...formData, tripDestination: e.target.value })}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        placeholder="e.g. Lukla, Namche"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Max Altitude</label>
                                    <input
                                        type="text"
                                        value={formData.maxAltitude}
                                        onChange={(e) => setFormData({ ...formData, maxAltitude: e.target.value })}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        placeholder="e.g. 5,545m"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Accommodation</label>
                                    <input
                                        type="text"
                                        value={formData.accommodation}
                                        onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        placeholder="e.g. Teahouse"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "media" && (
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <h2 className="text-xl font-bold text-gray-900 border-b pb-4">Media Gallery</h2>
                        <ImageUploader
                            label="Main Image"
                            value={formData.image}
                            onChange={(url) => setFormData({ ...formData, image: url })}
                            description="Main thumbnail for the package"
                        />
                        <div className="pt-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Images (Gallery)</label>
                            <ImageUploader
                                label="Gallery Images"
                                value={formData.images || []}
                                onChange={(urls) => setFormData({ ...formData, images: urls })}
                                multiple={true}
                                description="Add multiple photos for the trip gallery"
                            />
                        </div>
                    </div>
                )}

                {activeTab === "content" && (
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <h2 className="text-xl font-bold text-gray-900 border-b pb-4">Content & Details</h2>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1 font-bold">Main Description</label>
                                <RichTextEditor
                                    value={formData.description}
                                    onChange={(content) => setFormData({ ...formData, description: content })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <MaterialSymbol icon="star_rate" size={18} className="text-amber-500" />
                                        Key Highlights
                                    </h4>
                                    <ArrayInput
                                        value={formData.highlights || []}
                                        onChange={(items) => setFormData({ ...formData, highlights: items })}
                                        placeholder="Add a highlight (e.g. Everest views)..."
                                    />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <MaterialSymbol icon="check_circle" size={18} className="text-green-500" />
                                        Main Features
                                    </h4>
                                    <ArrayInput
                                        value={formData.features || []}
                                        onChange={(items) => setFormData({ ...formData, features: items })}
                                        placeholder="Add a feature (e.g. 24/7 Support)..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "logistics" && (
                    <>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <h2 className="text-xl font-bold text-gray-900 border-b pb-4">Inclusions & Exclusions</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <MaterialSymbol icon="add_task" size={18} className="text-emerald-500" />
                                        What's Included
                                    </h4>
                                    <ArrayInput
                                        value={formData.inclusions || []}
                                        onChange={(items) => setFormData({ ...formData, inclusions: items })}
                                        placeholder="E.g. Breakfast, Driver, Guide..."
                                    />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <MaterialSymbol icon="cancel" size={18} className="text-rose-500" />
                                        What's Excluded
                                    </h4>
                                    <ArrayInput
                                        value={formData.exclusions || []}
                                        onChange={(items) => setFormData({ ...formData, exclusions: items })}
                                        placeholder="E.g. Flights, Tips, Medical..."
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8 mt-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <h2 className="text-xl font-bold text-gray-900 border-b pb-4">Cost Details & Useful Info</h2>
                            <div className="grid grid-cols-1 gap-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 font-bold">Cost Details (Detailed inclusions/exclusions)</label>
                                    <RichTextEditor
                                        value={formData.costDetails}
                                        onChange={(content) => setFormData({ ...formData, costDetails: content })}
                                        placeholder="Detailed breakdown of costs..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 font-bold">Useful Info (Visa, Insurance, Weather, etc.)</label>
                                    <RichTextEditor
                                        value={formData.usefulInfo}
                                        onChange={(content) => setFormData({ ...formData, usefulInfo: content })}
                                        placeholder="Essential information for travelers..."
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === "departures" && (
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900 border-b pb-4">Upcoming Departures</h2>
                            <button
                                type="button"
                                onClick={() => {
                                    const newDeps = [...(formData.departures || []), { startDate: "", endDate: "", price: formData.price, status: "available" }];
                                    setFormData({ ...formData, departures: newDeps });
                                }}
                                className="px-4 py-2 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-2"
                            >
                                <MaterialSymbol icon="add" size={18} />
                                Add Departure
                            </button>
                        </div>
                        <div className="space-y-4">
                            {(formData.departures || []).map((dep, index) => (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 items-end">
                                    <div className="md:col-span-1">
                                        <label className="block text-[10px] uppercase font-black text-gray-400 mb-1">Start Date</label>
                                        <input
                                            type="date"
                                            value={dep.startDate ? new Date(dep.startDate).toISOString().split('T')[0] : ""}
                                            onChange={(e) => {
                                                const newDeps = [...formData.departures];
                                                newDeps[index] = { ...newDeps[index], startDate: e.target.value };
                                                setFormData({ ...formData, departures: newDeps });
                                            }}
                                            className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm"
                                        />
                                    </div>
                                    <div className="md:col-span-1">
                                        <label className="block text-[10px] uppercase font-black text-gray-400 mb-1">End Date</label>
                                        <input
                                            type="date"
                                            value={dep.endDate ? new Date(dep.endDate).toISOString().split('T')[0] : ""}
                                            onChange={(e) => {
                                                const newDeps = [...formData.departures];
                                                newDeps[index] = { ...newDeps[index], endDate: e.target.value };
                                                setFormData({ ...formData, departures: newDeps });
                                            }}
                                            className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm"
                                        />
                                    </div>
                                    <div className="md:col-span-1">
                                        <label className="block text-[10px] uppercase font-black text-gray-400 mb-1">Price</label>
                                        <input
                                            type="number"
                                            value={dep.price}
                                            onChange={(e) => {
                                                const newDeps = [...formData.departures];
                                                newDeps[index] = { ...newDeps[index], price: Number(e.target.value) };
                                                setFormData({ ...formData, departures: newDeps });
                                            }}
                                            className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm"
                                        />
                                    </div>
                                    <div className="md:col-span-1">
                                        <label className="block text-[10px] uppercase font-black text-gray-400 mb-1">Status</label>
                                        <select
                                            value={dep.status}
                                            onChange={(e) => {
                                                const newDeps = [...formData.departures];
                                                newDeps[index] = { ...newDeps[index], status: e.target.value };
                                                setFormData({ ...formData, departures: newDeps });
                                            }}
                                            className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm"
                                        >
                                            <option value="available">Available</option>
                                            <option value="guaranteed">Guaranteed</option>
                                            <option value="limited">Limited</option>
                                            <option value="full">Full</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-1">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const newDeps = formData.departures.filter((_, i) => i !== index);
                                                setFormData({ ...formData, departures: newDeps });
                                            }}
                                            className="w-full px-3 py-2 bg-red-50 text-red-600 font-bold rounded-lg hover:bg-red-100 transition-colors text-xs"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                            {(!formData.departures || formData.departures.length === 0) && (
                                <p className="text-center py-8 text-gray-400 border-2 border-dashed border-gray-100 rounded-xl text-sm font-medium">No departures added yet.</p>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === "itinerary" && (
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <ItineraryManager
                            value={formData.itinerary}
                            onChange={(newItinerary) => setFormData({ ...formData, itinerary: newItinerary })}
                        />
                    </div>
                )}

                {activeTab === "seo" && (
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Search Engine Optimization (SEO)</h2>
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Title</label>
                                <input
                                    type="text"
                                    value={formData.seo.title}
                                    onChange={(e) => setFormData({ ...formData, seo: { ...formData.seo, title: e.target.value } })}
                                    placeholder="Enter meta title..."
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Description</label>
                                <textarea
                                    value={formData.seo.description}
                                    onChange={(e) => setFormData({ ...formData, seo: { ...formData.seo, description: e.target.value } })}
                                    placeholder="Enter meta description..."
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    rows={4}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Keywords</label>
                                <input
                                    type="text"
                                    value={formData.seo.keywords}
                                    onChange={(e) => setFormData({ ...formData, seo: { ...formData.seo, keywords: e.target.value } })}
                                    placeholder="keyword1, keyword2, keyword3..."
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}
