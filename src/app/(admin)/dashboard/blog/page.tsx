import React from 'react';
import { Button } from "@/components/ui/button";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Badge } from "@/components/ui/badge";

export default function BlogAdminPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
                <Button className="gap-2">
                    <MaterialSymbol icon="add" size={20} />
                    New Post
                </Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-6 bg-card border rounded-2xl p-4 hover:shadow-md transition-all group">
                        <div className="w-40 h-24 bg-muted rounded-xl animate-pulse group-hover:scale-105 transition-transform" />
                        <div className="flex-1 space-y-2">
                            <h3 className="text-lg font-bold">10 Tips for Exploring the Remote Regions of Nepal</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
                                <span className="flex items-center gap-1"><MaterialSymbol icon="person" size={16} /> John Doe</span>
                                <span className="flex items-center gap-1"><MaterialSymbol icon="calendar_today" size={16} /> May 21, 2026</span>
                                <Badge variant="secondary">Travel Tips</Badge>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button variant="outline" size="sm" className="gap-2">
                                <MaterialSymbol icon="visibility" size={16} />
                                Preview
                            </Button>
                            <Button variant="ghost" size="sm" className="gap-2">
                                <MaterialSymbol icon="edit" size={16} />
                                Edit
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
