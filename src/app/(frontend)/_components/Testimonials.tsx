import { MaterialSymbol } from "@/components/ui/material-symbol";

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
    ];

    return (
        <section className="bg-white py-24 px-4 md:px-12 lg:px-24 w-full relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-amber-50/50 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-16">
                    <span className="text-indigo-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Testimonials</span>
                    <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight">{title}</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6 rounded-full" />
                    <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {displayItems.map((testimonial, idx) => {
                        const content = testimonial.content || testimonial.text;
                        const avatar = testimonial.image || testimonial.avatar;
                        const role = testimonial.role || testimonial.location;

                        return (
                            <div key={idx} className="flex flex-col h-full group">
                                <div className="bg-slate-50/50 p-8 rounded-3xl border border-transparent group-hover:bg-white group-hover:border-slate-100 group-hover:shadow-xl group-hover:shadow-indigo-500/5 transition-all duration-500 flex flex-col h-full relative">
                                    {/* Quote Mark */}
                                    <div className="text-indigo-600/10 mb-6 flex justify-between items-start">
                                        <MaterialSymbol icon="format_quote" size={40} fill={true} />
                                        <div className="flex items-center gap-0.5 text-amber-500">
                                            {[...Array(5)].map((_, i) => (
                                                <MaterialSymbol
                                                    key={i}
                                                    icon="star"
                                                    fill={i < Math.floor(testimonial.rating)}
                                                    className={i >= Math.floor(testimonial.rating) ? "opacity-20" : ""}
                                                    size={14}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-slate-600 text-base leading-relaxed flex-1 mb-8 font-medium">
                                        {content}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="relative shrink-0">
                                            {avatar ? (
                                                <img 
                                                    src={avatar} 
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white group-hover:ring-indigo-100 transition-all duration-500 shadow-sm"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg uppercase">
                                                    {testimonial.name[0]}
                                                </div>
                                            )}
                                        </div>
                                        <div className="overflow-hidden">
                                            <h4 className="font-bold text-slate-900 text-base truncate">{testimonial.name}</h4>
                                            <p className="text-xs text-slate-400 font-medium truncate">{role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
