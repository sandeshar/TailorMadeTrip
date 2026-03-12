"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { getPackages, deletePackage } from "@/actions/packages";
import { toast } from "react-hot-toast";
import Image from "next/image";

export default function PackagesListPage() {
    const [packages, setPackages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchPackages = async () => {
        try {
            const data = await getPackages();
            setPackages(data);
        } catch (error) {
            toast.error("Failed to fetch packages");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPackages();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this package?")) return;

        try {
            await deletePackage(id);
            toast.success("Package deleted");
            fetchPackages();
        } catch (error) {
            toast.error("Delete failed");
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Packages</h1>
                    <p className="text-gray-500">Manage your travel packages and itineraries.</p>
                </div>
                <Link
                    href="/dashboard/packages/new"
                    className="bg-primary text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-primary/90 transition-all font-bold"
                >
                    <MaterialSymbol icon="add" size={20} />
                    Add Package
                </Link>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Package</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Price / Duration</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {loading ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-10 text-center text-gray-400">Loading packages...</td>
                            </tr>
                        ) : packages.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-10 text-center text-gray-400">No packages found.</td>
                            </tr>
                        ) : (
                            packages.map((pkg) => (
                                <tr key={pkg._id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                                                {pkg.image ? (
                                                    <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                        <MaterialSymbol icon="image" size={20} />
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">{pkg.title}</div>
                                                <div className="text-xs text-gray-500">{pkg.slug}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">
                                            {pkg.categoryId?.name || 'Uncategorized'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-bold text-gray-900">${pkg.price}</div>
                                        <div className="text-xs text-gray-500">{pkg.duration}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {pkg.status === 'active' ? (
                                            <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                                                Active
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold rounded-full uppercase tracking-wider">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                                Inactive
                                            </span>
                                        )}
                                        {pkg.isBestSeller && (
                                            <div className="mt-1 flex items-center gap-1 text-[9px] font-black text-amber-600 uppercase tracking-tighter">
                                                <MaterialSymbol icon="grade" size={10} />
                                                Best Seller
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <Link
                                                href={`/dashboard/packages/edit/${pkg._id}`}
                                                className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors"
                                            >
                                                <MaterialSymbol icon="edit" size={18} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(pkg._id)}
                                                className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition-colors"
                                            >
                                                <MaterialSymbol icon="delete" size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}







