"use client";

import { MaterialSymbol } from "@/components/ui/material-symbol";
import { useState, useRef } from "react";

interface TestimonialItem {
    name: string;
    role?: string;
    location?: string; // and this for backward compatibility if needed
    content?: string;
    text?: string;
    avatar?: string;
    image?: string;
    rating: number;
}

interface TestimonialsProps {
    title?: string;
    description?: string;
    items?: TestimonialItem[];
}

export function Testimonials({
    title = "Voices of Adventure",
    description = "Real stories from travelers who have explored the world with us.",
    items = []
}: TestimonialsProps) {
    const [activeIdx, setActiveIdx] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Optimized scroll handler using RequestAnimationFrame if needed, 
    // but standard onScroll is fine here with this math.
    const handleScroll = () => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        const children = Array.from(container.querySelectorAll('[data-testimonial-card]')) as HTMLElement[];

        let closestIndex = 0;
        let minDistance = Infinity;

        children.forEach((child, index) => {
            const childCenter = child.offsetLeft + (child.offsetWidth / 2);
            const scrollCenter = scrollLeft + (containerWidth / 2);
            const distance = Math.abs(childCenter - scrollCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        if (closestIndex !== activeIdx) {
            setActiveIdx(closestIndex);
        }
    };

    const scrollTo = (index: number) => {
        const container = scrollRef.current;
        if (!container) return;

        const children = Array.from(container.querySelectorAll('[data-testimonial-card]')) as HTMLElement[];
        const targetChild = children[index];

        if (targetChild) {
            const containerWidth = container.offsetWidth;
            const targetCenter = targetChild.offsetLeft + (targetChild.offsetWidth / 2);
            const scrollPos = targetCenter - (containerWidth / 2);

            container.scrollTo({
                left: scrollPos,
                behavior: 'smooth'
            });
        }
    };

    const displayItems = items.length > 0 ? items : [
        {
            name: "Sarah Jenkins",
            role: "Traveled to Indonesia",
            content: "The trip to Bali was absolutely magical. The guides were knowledgeable, the accommodations were top-notch, and every detail was taken care of.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
            rating: 5,
        },
        {
            name: "Michael Chen",
            role: "Traveled to Greece",
            content: "An unforgettable honeymoon in Santorini. Wanderlust Travels made everything seamless so we could just relax and enjoy the views. Highly recommended!",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
            rating: 4,
        },
        {
            name: "Emma Thompson",
            role: "Traveled to Japan",
            content: "I've used many travel agencies before, but this one stands out. The personalized itinerary for our family trip to Japan was perfect for both kids and adults.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
            rating: 5,
        },
        {
            name: "David Wilson",
            role: "Traveled to Switzerland",
            content: "Hiking through the Swiss Alps was a dream come true. The logistics were handled perfectly, from mountain huts to scenic train transfers.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
            rating: 5,
        },
    ];

    return (
        <section className="py-24 px-0 relative overflow-hidden">
            <div className="section-container relative">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Testimonials</span>
                    <h2 className="text-slate-900 text-3xl md:text-5xl lg:text-5xl font-black mb-6 tracking-tight">{title}</h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full opacity-80" />
                </div>

                <style jsx global>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .no-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto pb-8 gap-6 md:gap-8 no-scrollbar snap-x snap-mandatory scroll-smooth"
                >
                    {displayItems.map((testimonial, idx) => {
                        const content = testimonial.content || testimonial.text;
                        const avatar = testimonial.image || testimonial.avatar;
                        const role = testimonial.role || testimonial.location;

                        return (
                            <div
                                key={idx}
                                data-testimonial-card
                                className="flex flex-col group min-w-[280px] md:min-w-[360px] max-w-[380px] snap-center shrink-0"
                            >
                                <div className="bg-transparent p-6 md:p-7 rounded-[1.5rem] border border-slate-100 group-hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col relative h-full min-h-[220px]">
                                    {/* Quote Mark */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="size-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                                            <MaterialSymbol icon="format_quote" size={20} fill={true} />
                                        </div>
                                        <div className="flex items-center gap-0.5 text-amber-500 bg-amber-50/50 px-2 py-0.5 rounded-full shrink-0">
                                            {[...Array(5)].map((_, i) => (
                                                <MaterialSymbol
                                                    key={i}
                                                    icon="star"
                                                    fill={i < Math.floor(testimonial.rating)}
                                                    className={i >= Math.floor(testimonial.rating) ? "text-slate-200" : "text-amber-400"}
                                                    size={12}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex-1 mb-6">
                                        <p className="text-slate-600 text-[1rem] leading-[1.5] font-medium italic">
                                            "{content}"
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 pt-5 border-t border-slate-50 mt-auto">
                                        <div className="relative shrink-0">
                                            {avatar ? (
                                                <img
                                                    src={avatar}
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 rounded-lg object-cover ring-2 ring-white group-hover:ring-primary/10 transition-all duration-500 shadow-sm"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white font-black text-base uppercase shadow-lg shadow-primary/20">
                                                    {testimonial.name[0]}
                                                </div>
                                            )}
                                            <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                                                <MaterialSymbol icon="verified" size={8} className="text-white" fill />
                                            </div>
                                        </div>
                                        <div className="overflow-hidden">
                                            <h4 className="font-extrabold text-slate-900 text-sm tracking-tight truncate">{testimonial.name}</h4>
                                            <p className="text-[10px] text-primary font-bold tracking-wide truncate">{role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Dotted Slider Indicators */}
                <div className="flex items-center justify-center gap-2.5 mt-10">
                    {displayItems.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
                            className={`h-2 transition-all duration-300 rounded-full ${activeIdx === i
                                    ? "w-8 bg-primary"
                                    : "w-2 bg-slate-200 hover:bg-slate-300"
                                }`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
