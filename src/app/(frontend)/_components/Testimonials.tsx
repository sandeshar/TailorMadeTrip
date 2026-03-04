import { MaterialSymbol } from "@/components/ui/material-symbol";

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        location: "Traveled to Indonesia",
        text: "The trip to Bali was absolutely magical. The guides were knowledgeable, the accommodations were top-notch, and every detail was taken care of.",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu1zlqa1dpkdKbJXLPDSnhHD6FuYe5pGMrrugC_vz14e4fBuZNAloCCb8AeJkVRowumr8azyMWJR3JCCufLXrklgh-GYVHDj7txmLeFlu6YYkNA7tGQVMDsHQnsko-_wiwVw0uvgWSAqWuKwnf5IpUsdrvsFYK6kJp19R-nv3p-_AyoAYNc5sTq2SiLTKKwql9n-jXlhehlWeir-o_v_3eb0Xn4c_xXrm28KSliEHMrUP5Qq3QPdU7Jxt_EezEWV-Fjgz7xKSCcNQn",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Chen",
        location: "Traveled to Greece",
        text: "An unforgettable honeymoon in Santorini. Wanderlust Travels made everything seamless so we could just relax and enjoy the views. Highly recommended!",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8fhqLFwQ-3yc7RE6n7kvDCb2HckJBrjuPmO42WScOIDlWV5Bh5dk1bXaPcBbOwDrYTJr6rXBJb1zUMbMzsbevPebK-WIaoZe4enVpvDycJJXpPuQu9cFDsR6yObyvmE_9x6PLsSiG6lu00l7O0EAZwCheD9yBu4U312ucmOi7VgU6OG_1s0o5pzBF5CShInWcHkkl0KGIHAdHIXiy-GGPB5_tjOU7DNQAG3FIU2cW6Av3vf48J2EP6e_6UXWVKZbW2DHMofganQpt",
        rating: 4.5,
    },
    {
        id: 3,
        name: "Emma Thompson",
        location: "Traveled to Japan",
        text: "I've used many travel agencies before, but this one stands out. The personalized itinerary for our family trip to Japan was perfect for both kids and adults.",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9UwrqYXE2rS0S5W-7xNatFwycYtA1n5AYLb6I6TfEUvPS_N9OP8uYFJZcvF2HVabiF8TekzxEIcRmQdN7WtKV-l95akN2Z_W-CWjz76cQRG1ND4uXrHZLWcX7lekENuJlFfkVfa90eSNIQx9qDz7Vor2aqBoDjd1ERI7lEnLrSkY10wY0eVv0dBXXpofoN2jhqNl3Hm4VWSglNJjusERtYAazZ4kGAnk_NQ0Dx45a6zGASwdwiq6QJqRj0TQrNk6WpGfeOHpWivn9",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="bg-slate-50 py-20 px-4 md:px-12 lg:px-24 w-full max-w-full border-t border-slate-100 italic">
            <div className="max-w-[1800px] mx-auto">
                <div className="text-left mb-12">
                    <h2 className="text-slate-900 text-2xl md:text-3xl lg:text-4xl font-black mb-2 italic uppercase tracking-tight">Voices of Adventure</h2>
                    <p className="text-slate-500 text-sm lg:text-base max-w-2xl italic">Real stories from travelers who have explored the world with us.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 italic">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-6 lg:p-8 rounded-xl relative shadow-sm border border-slate-100 flex flex-col italic group hover:shadow-md transition-shadow">
                            <MaterialSymbol icon="format_quote" size={48} className="absolute top-4 right-4 text-slate-100 group-hover:text-primary/10 transition-colors pointer-events-none" />
                            <div className="flex items-center gap-0.5 text-amber-500 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <MaterialSymbol
                                        key={i}
                                        icon="star"
                                        fill={i < Math.floor(testimonial.rating)}
                                        size={16}
                                    />
                                ))}
                            </div>
                            <p className="text-slate-600 text-sm lg:text-base mb-8 relative z-10 italic leading-relaxed">"{testimonial.text}"</p>
                            <div className="mt-auto flex items-center gap-4">
                                <div
                                    className="w-10 h-10 rounded-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all shadow-inner border border-slate-100"
                                    style={{ backgroundImage: `url("${testimonial.avatar}")` }}
                                ></div>
                                <div>
                                    <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight">{testimonial.name}</h4>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
