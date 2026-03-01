import React from 'react';
import { Button } from "@/components/ui/button";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Badge } from "@/components/ui/badge";

export default function PackagesAdminPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">Manage Packages</h1>
                <Button className="gap-2">
                    <MaterialSymbol icon="add" size={20} />
                    Add New Package
                </Button>
            </div>

            <div className="bg-card border rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-muted/50 border-b">
                            <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider">Package Name</th>
                            <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider">Category</th>
                            <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider">Price</th>
                            <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <tr key={i} className="hover:bg-muted/30 transition-colors">
                                <td className="px-6 py-4 font-medium">Mountain Adventure in {['Everest', 'Annapurna', 'Langtang'][i % 3]}</td>
                                <td className="px-6 py-4 text-muted-foreground">Trekking</td>
                                <td className="px-6 py-4 font-bold">${999 + i * 100}</td>
                                <td className="px-6 py-4">
                                    <Badge variant={i % 2 === 0 ? "default" : "secondary"}>
                                        {i % 2 === 0 ? "Active" : "Draft"}
                                    </Badge>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex gap-2 justify-end">
                                        <Button variant="ghost" size="icon">
                                            <MaterialSymbol icon="edit" size={18} />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-destructive">
                                            <MaterialSymbol icon="delete" size={18} />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
