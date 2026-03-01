import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DestinationsPage() {
    return (
        <main className="section-container py-20 px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">Explore Popular Destinations</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {['Mountain', 'Beach', 'Culture', 'Jungle', 'City', 'Desert', 'Winter', 'Tropical'].map((dest, i) => (
                    <Card key={i} className="group cursor-pointer overflow-hidden relative">
                        <div className="h-64 bg-muted animate-pulse group-hover:scale-105 transition-transform" />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                            <Badge className="w-fit mb-2">Category</Badge>
                            <CardTitle className="text-white">Beautiful {dest} Region</CardTitle>
                        </div>
                    </Card>
                ))}
            </div>
        </main>
    );
}
