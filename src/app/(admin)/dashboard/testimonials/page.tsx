"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial, getTestimonialTags } from "@/actions/testimonials";
import ImageUploader from "@/components/ImageUploader";

interface ITestimonial {
    _id: string;
    name: string;
    role?: string;
    content: string;
    image?: string;
    rating: number;
    status: "active" | "inactive";
    tags?: string[];
    createdAt: string;
}

export default function TestimonialManagement() {
    const router = useRouter();
    const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingItem, setEditingItem] = useState<ITestimonial | null>(null);
    const [availableTags, setAvailableTags] = useState<{ id: string, label: string, type: string }[]>([]);
    const [tagSearch, setTagSearch] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        role: "",
        content: "",
        image: "",
        rating: 5,
        status: "active" as "active" | "inactive",
        tags: [] as string[]
    });

    useEffect(() => {
        fetchData();
        loadTags();
    }, []);

    const loadTags = async () => {
        const tags = await getTestimonialTags();
        setAvailableTags(tags);
    };

    const fetchData = async () => {
        try {
            const data = await getTestimonials();
            setTestimonials(data);
        } catch (error) {
            toast.error("Failed to fetch testimonials");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingItem) {
                await updateTestimonial(editingItem._id, formData);
                toast.success("Testimonial updated");
            } else {
                await createTestimonial(formData);
                toast.success("Testimonial created");
            }

            setShowModal(false);
            setEditingItem(null);
            resetForm();
            fetchData();
        } catch (error: any) {
            toast.error(error.message || "Failed to save testimonial");
        }
    };

    const resetForm = () => {
        setFormData({
            name: "",
            role: "",
            content: "",
            image: "",
            rating: 5,
            status: "active",
            tags: []
        });
    };

    const handleEdit = (item: ITestimonial) => {
        setEditingItem(item);
        setFormData({
            name: item.name,
            role: item.role || "",
            content: item.content,
            image: item.image || "",
            rating: item.rating,
            status: item.status,
            tags: item.tags || []
        });
        setShowModal(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure?")) return;
        try {
            await deleteTestimonial(id);
            toast.success("Testimonial deleted");
            fetchData();
        } catch (error) {
            toast.error("Failed to delete testimonial");
        }
    };

    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const tags = value.split(',').map(tag => tag.trim());
        setFormData({ ...formData, tags });
    };

    const toggleTag = (tagId: string) => {
        const currentTags = [...formData.tags];
        const index = currentTags.indexOf(tagId);
        if (index > -1) {
            currentTags.splice(index, 1);
        } else {
            currentTags.push(tagId);
        }
        setFormData({ ...formData, tags: currentTags });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Testimonials</h1>
                    <p className="text-gray-500 mt-1">Manage customer feedback and success stories.</p>
                </div>
                <button
                    onClick={() => {
                        setEditingItem(null);
                        resetForm();
                        setShowModal(true);
                    }}
                    className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2"
                >
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Add Testimonial
                </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Client</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Content</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Rating</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 italic">
                        {isLoading ? (
                            <tr><td colSpan={5} className="px-6 py-8 text-center text-gray-500">Loading...</td></tr>
                        ) : testimonials.length === 0 ? (
                            <tr><td colSpan={5} className="px-6 py-8 text-center text-gray-500">No testimonials found.</td></tr>
                        ) : (
                            testimonials.map((item) => (
                                <tr key={item._id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            {item.image ? (
                                                <img src={item.image} alt="" className="size-10 rounded-full object-cover border-2 border-white shadow-sm" />
                                            ) : (
                                                <div className="size-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold uppercase text-xs">
                                                    {item.name[0]}
                                                </div>
                                            )}
                                            <div className="flex flex-col">
                                                <span className="font-bold text-gray-900 leading-tight">
                                                    {item.name}
                                                </span>
                                                <span className="text-xs text-gray-400 font-normal">{item.role}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 max-w-xs">
                                        <p className="text-xs text-gray-500 line-clamp-2 not-italic">{item.content}</p>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex items-center justify-center gap-0.5 text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className={`material-symbols-outlined text-sm ${i < item.rating ? '[font-variation-settings:\'FILL\'_1]' : 'opacity-30'}`}>
                                                    star
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 text-[10px] font-black rounded-full uppercase border ${item.status === 'active'
                                            ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                                            : 'bg-gray-50 text-gray-500 border-gray-100'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={() => handleEdit(item)} className="p-2 text-gray-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">
                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button onClick={() => handleDelete(item._id)} className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-all">
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] shadow-xl flex flex-col animate-in fade-in zoom-in duration-200">
                        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between shrink-0">
                            <h2 className="text-lg font-bold text-slate-900">{editingItem ? "Edit Testimonial" : "New Testimonial"}</h2>
                            <button onClick={() => setShowModal(false)} className="size-8 hover:bg-slate-50 rounded-full text-slate-400 flex items-center justify-center transition-colors">
                                <span className="material-symbols-outlined text-xl">close</span>
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                            <form onSubmit={handleSubmit} id="testimonial-form" className="space-y-6">
                                {/* Basic Info Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Client Details</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm"
                                                placeholder="Name"
                                            />
                                            <input
                                                type="text"
                                                value={formData.role}
                                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm"
                                                placeholder="Role / Tagline"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Rating</label>
                                                <select
                                                    value={formData.rating}
                                                    onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none"
                                                >
                                                    {[5, 4, 3, 2, 1].map(r => (
                                                        <option key={r} value={r}>{r} Stars</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex items-end pb-1 text-center">
                                                <label className="flex items-center gap-2 cursor-pointer group px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg w-full">
                                                    <input
                                                        type="checkbox"
                                                        checked={formData.status === 'active'}
                                                        onChange={(e) => setFormData({ ...formData, status: e.target.checked ? 'active' : 'inactive' })}
                                                        className="size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <span className="text-sm font-medium text-slate-600">Visible</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Client Photo</label>
                                        <div className="border-2 border-dashed border-slate-100 rounded-xl p-2 bg-slate-50/50">
                                            <ImageUploader
                                                onChange={(url: string) => setFormData({ ...formData, image: url })}
                                                value={formData.image}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Feedback Content</label>
                                    <textarea
                                        required
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all min-h-[120px] text-sm leading-relaxed"
                                        placeholder="Write the client's testimonial here..."
                                    />
                                </div>

                                {/* Tagging Section - Redesigned to be more compact */}
                                <div className="space-y-3 pt-2 border-t border-slate-100">
                                    <div className="flex items-center justify-between">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Display on Pages</label>
                                        <input
                                            type="text"
                                            placeholder="Search pages..."
                                            className="px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-full focus:ring-2 focus:ring-indigo-500/10 outline-none w-48 shadow-sm"
                                            value={tagSearch}
                                            onChange={(e) => setTagSearch(e.target.value)}
                                        />
                                    </div>

                                    <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-4 max-h-[220px] overflow-y-auto custom-scrollbar">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {["Destinations", "Packages", "General"].map(type => {
                                                const filteredByType = availableTags.filter(t =>
                                                    t.type === type &&
                                                    t.label.toLowerCase().includes(tagSearch.toLowerCase())
                                                );

                                                if (filteredByType.length === 0) return null;

                                                return (
                                                    <div key={type} className="space-y-2">
                                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{type}</h4>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            {filteredByType.map((tag) => (
                                                                <button
                                                                    key={tag.id}
                                                                    type="button"
                                                                    onClick={() => toggleTag(tag.id)}
                                                                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all border ${formData.tags.includes(tag.id)
                                                                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                                                                            : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
                                                                        }`}
                                                                >
                                                                    {tag.label}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {tagSearch && !["Destinations", "Packages", "General"].some(type =>
                                            availableTags.some(t => t.type === type && t.label.toLowerCase().includes(tagSearch.toLowerCase()))
                                        ) && (
                                                <div className="text-center py-8 text-slate-400 text-sm italic">No pages found matching "{tagSearch}"</div>
                                            )}
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/30 shrink-0">
                            <div className="flex items-center justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-5 py-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-white hover:shadow-sm border border-transparent transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    form="testimonial-form"
                                    type="submit"
                                    className="px-8 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]"
                                >
                                    {editingItem ? "Update Testimonial" : "Create Testimonial"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
