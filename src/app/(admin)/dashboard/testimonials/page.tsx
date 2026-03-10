"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from "@/actions/testimonials";
import ImageUploader from "@/components/ImageUploader";

interface ITestimonial {
    _id: string;
    name: string;
    role?: string;
    content: string;
    image?: string;
    rating: number;
    status: "active" | "inactive";
    featured: boolean;
    createdAt: string;
}

export default function TestimonialManagement() {
    const router = useRouter();
    const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingItem, setEditingItem] = useState<ITestimonial | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        role: "",
        content: "",
        image: "",
        rating: 5,
        status: "active" as "active" | "inactive",
        featured: false
    });

    useEffect(() => {
        fetchData();
    }, []);

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
            featured: false
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
            featured: item.featured || false
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
                                                    {item.featured && (
                                                        <span className="ml-2 text-[10px] bg-yellow-400 text-white px-1.5 py-0.5 rounded-full font-black uppercase">Featured</span>
                                                    )}
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
                                            {[...Array(item.rating)].map((_, i) => (
                                                <span key={i} className="material-symbols-outlined text-sm fill-1">star</span>
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
                    <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-slate-900">{editingItem ? "Edit Testimonial" : "New Testimonial"}</h2>
                            <button onClick={() => setShowModal(false)} className="size-8 hover:bg-slate-50 rounded-full text-slate-400 flex items-center justify-center transition-colors">
                                <span className="material-symbols-outlined text-xl">close</span>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-slate-700">Client Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                                        placeholder="e.g. John Doe"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-slate-700">Role / Tagline</label>
                                    <input
                                        type="text"
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                                        placeholder="e.g. Solo Traveler"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-slate-700">Rating</label>
                                    <select
                                        value={formData.rating}
                                        onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                                    >
                                        {[5, 4, 3, 2, 1].map(r => (
                                            <option key={r} value={r}>{r} Stars</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex items-center gap-6 pt-6">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            checked={formData.featured}
                                            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                                            className="size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <span className="text-sm font-medium text-slate-600 group-hover:text-indigo-600 transition-colors">Featured</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            checked={formData.status === 'active'}
                                            onChange={(e) => setFormData({ ...formData, status: e.target.checked ? 'active' : 'inactive' })}
                                            className="size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <span className="text-sm font-medium text-slate-600 group-hover:text-indigo-600 transition-colors">Visible</span>
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">Client Photo</label>
                                <ImageUploader
                                    onChange={(url: string) => setFormData({ ...formData, image: url })}
                                    value={formData.image}
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">Feedback Content</label>
                                <textarea
                                    required
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all min-h-[100px]"
                                    placeholder="What did the client say?"
                                />
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 px-4 py-2.5 rounded-lg font-bold text-slate-600 hover:bg-slate-50 border border-slate-200 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-[2] bg-indigo-600 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100"
                                >
                                    {editingItem ? "Save Changes" : "Add Testimonial"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
