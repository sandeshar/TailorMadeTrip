import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    return (
        <article className="container mx-auto py-20 px-4 max-w-4xl">
            <div className="flex flex-col items-center text-center space-y-8 mb-20 max-w-3xl mx-auto">
                <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="px-4 py-1.5 text-sm font-semibold tracking-wider uppercase">Travel Tips</Badge>
                    <span className="text-muted-foreground font-medium text-lg">May 21, 2026</span>
                </div>
                <h1 className="text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
                    10 Hidden Gems in Nepal for Your Next Trip
                </h1>
                <p className="text-zinc-500 text-2xl leading-relaxed italic border-x-4 border-primary/20 px-8">
                    Discover off-the-beaten-path destinations that offer authentic Nepalese culture and stunning scenery.
                </p>
                <div className="flex items-center space-x-6 py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl shadow-xl shadow-primary/5">JD</div>
                    <div className="text-left">
                        <p className="font-bold text-xl text-zinc-900 tracking-tight">John Doe</p>
                        <p className="text-zinc-500 font-medium">Head of Travel Exploration</p>
                    </div>
                </div>
            </div>

            <div className="aspect-[21/9] bg-muted animate-pulse rounded-3xl shadow-2xl mb-24 overflow-hidden border-8 border-white shadow-zinc-200/50" />

            <div className="prose prose-zinc prose-2xl  max-w-none prose-headings:font-extrabold prose-headings:tracking-tighter prose-p:text-zinc-600 prose-p:leading-[1.8] prose-strong:text-zinc-900 prose-li:text-zinc-600 space-y-12">
                <p className="first-letter:text-8xl first-letter:font-black first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:leading-none">
                    Nepal is mostly known for its towering peaks and the bustling streets of Kathmandu. However, beyond the popular tourist routes lies a world of untouched beauty and ancient traditions waiting to be explored by the curious traveler.
                </p>

                <h2 className="text-4xl font-black mt-20 mb-8 tracking-tighter text-zinc-900">1. Upper Mustang: The Last Forbidden Kingdom</h2>
                <p>
                    Once a restricted area, Upper Mustang offers a unique look into ancient Tibetan culture. The landscape is a stark contrast to the rest of Nepal, with dramatic red cliffs and whitewashed villages. It's a journey through time as much as through space.
                </p>

                <blockquote className="border-l-8 border-primary pl-10 my-16 py-6 italic text-3xl font-bold text-zinc-800 leading-relaxed bg-zinc-50/50 rounded-r-3xl">
                    "Nepal is not just a destination; it's a feeling that stays with you long after you've left its mountains behind."
                </blockquote>

                <h2 className="text-4xl font-black mt-20 mb-8 tracking-tighter text-zinc-900">2. Rara Lake: A Hidden Gem in the West</h2>
                <p>
                    Tucked away in the remote Mugu district, Rara Lake is the largest lake in Nepal. Its shimmering blue waters and pine-forested surroundings make it a paradise for nature lovers seeking peace and quiet away from the crowds.
                </p>

                <div className="grid grid-cols-2 gap-8 my-20">
                    <div className="h-64 bg-zinc-100 rounded-2xl animate-pulse" />
                    <div className="h-64 bg-zinc-100 rounded-2xl animate-pulse" />
                </div>

                <h2 className="text-4xl font-black mt-20 mb-8 tracking-tighter text-zinc-900">3. Bandipur: Living Museum of Newari Culture</h2>
                <p>
                    This hilltop settlement is a beautifully preserved example of Newari architecture. With its brick-paved streets and traditional houses, Bandipur feels like a step back into the golden age of the Kathmandu Valley's artisans.
                </p>
            </div>

            <Separator className="my-24 h-0.5 bg-zinc-100" />

            <div className="max-w-3xl mx-auto py-12 px-10 bg-zinc-50/50 rounded-[2.5rem] border border-zinc-100 flex flex-col items-center text-center space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">Share this adventure</h3>
                <div className="flex gap-6">
                    {['X', 'Facebook', 'LinkedIn', 'Instagram'].map(social => (
                        <span key={social} className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-white hover:text-primary hover:border-primary transition-all cursor-pointer font-bold text-zinc-600 shadow-sm">{social[0]}</span>
                    ))}
                </div>
            </div>
        </article>
    );
}
