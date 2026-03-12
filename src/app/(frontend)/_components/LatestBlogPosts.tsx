import Link from "next/link";
import { MaterialSymbol } from "@/components/ui/material-symbol";

const blogPosts = [
    {
        id: 1,
        title: "Top 10 Hidden Gems in Switzerland",
        category: "Guides",
        excerpt: "Discover the secret spots that tourists often miss when visiting the Swiss Alps.",
        date: "Oct 12, 2023",
        readTime: "5 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLGPSs-Lde8_xXTKVK70jv4GnpF3718xWVNqE7Uhrj6nkSZWRbCOt-gFg0tsSHTYRDBR3JeVTW7hVsi6LzYHEg9V0GahSXo7xDqAYc05_1XtWFJ_sMwfY1p3RRF2HqODqN3XHF-8Zk8Swn2NBcJ4S2SA4YsQZXiJ61q27wAJxfb6MGmFz2XdDzwI5USpkJYVUjgd5xQA-qmDPFAI96B5oFBEwI8rRpWAAthB6up6CGVyMd-yO80fifPAB1OA_FPWYx1sSivrMFhliw",
    },
    {
        id: 2,
        title: "Solo Travel: A Beginner's Guide",
        category: "Tips",
        excerpt: "Everything you need to know before embarking on your first solo adventure.",
        date: "Sep 28, 2023",
        readTime: "8 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu1zlqa1dpkdKbJXLPDSnhHD6FuYe5pGMrrugC_vz14e4fBuZNAloCCb8AeJkVRowumr8azyMWJR3JCCufLXrklgh-GYVHDj7txmLeFlu6YYkNA7tGQVMDsHQnsko-_wiwVw0uvgWSAqWuKwnf5IpUsdrvsFYK6kJp19R-nv3p-_AyoAYNc5sTq2SiLTKKwql9n-jXlhehlWeir-o_v_3eb0Xn4c_xXrm28KSliEHMrUP5Qq3QPdU7Jxt_EezEWV-Fjgz7xKSCcNQn",
    },
    {
        id: 3,
        title: "Packing Light for Tropical Getaways",
        category: "Lifestyle",
        excerpt: "Essential items to bring and what to leave behind for your beach vacation.",
        date: "Sep 15, 2023",
        readTime: "4 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9UwrqYXE2rS0S5W-7xNatFwycYtA1n5AYLb6I6TfEUvPS_N9OP8uYFJZcvF2HVabiF8TekzxEIcRmQdN7WtKV-l95akN2Z_W-CWjz76cQRG1ND4uXrHZLWcX7lekENuJlFfkVfa90eSNIQx9qDz7Vor2aqBoDjd1ERI7lEnLrSkY10wY0eVv0dBXXpofoN2jhqNl3Hm4VWSglNJjusERtYAazZ4kGAnk_NQ0Dx45a6zGASwdwiq6QJqRj0TQrNk6WpGfeOHpWivn9",
    },
    {
        id: 4,
        title: "How to Travel Europe on a Budget",
        category: "Finance",
        excerpt: "Practical tips to save money on accommodation, transport, and food in Europe.",
        date: "Aug 30, 2023",
        readTime: "6 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8fhqLFwQ-3yc7RE6n7kvDCb2HckJBrjuPmO42WScOIDlWV5Bh5dk1bXaPcBbOwDrYTJr6rXBJb1zUMbMzsbevPebK-WIaoZe4enVpvDycJJXpPuQu9cFDsR6yObyvmE_9x6PLsSiG6lu00l7O0EAZwCheD9yBu4U312ucmOi7VgU6OG_1s0o5pzBF5CShInWcHkkl0KGIHAdHIXiy-GGPB5_tjOU7DNQAG3FIU2cW6Av3vf48J2EP6e_6UXWVKZbW2DHMofganQpt",
    },
];

export function LatestBlogPosts() {
    return (
        <section className="py-20 border-t border-slate-100 italic">
            <div className="section-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
                    <div>
                        <h2 className="text-slate-900 text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight italic uppercase">Travel Insights</h2>
                        <p className="text-slate-500 text-sm lg:text-base mt-2 italic">Stories, tips, and guides from our expert globetrotters.</p>
                    </div>
                    <Link className="text-primary text-sm font-black hover:text-slate-900 flex items-center gap-2 group whitespace-nowrap mb-1 uppercase tracking-widest transition-colors" href="#">
                        Read All Stories
                        <MaterialSymbol icon="arrow_forward" size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 italic">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="flex flex-col gap-4 group cursor-pointer text-left italic">
                            <div className="rounded-xl overflow-hidden aspect-[4/3] bg-cover bg-center transition-transform duration-700 shadow-sm hover:shadow-xl relative" style={{ backgroundImage: `url("${post.image}")` }}>
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
                            </div>
                            <div className="flex flex-col gap-1.5 italic">
                                <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">{post.category}</span>
                                <h3 className="text-slate-900 font-black text-lg lg:text-xl leading-snug group-hover:text-primary transition-colors tracking-tight italic uppercase">{post.title}</h3>
                                <p className="text-slate-500 text-xs lg:text-sm line-clamp-2 leading-relaxed italic">{post.excerpt}</p>
                                <div className="flex items-center gap-2 text-slate-400 text-[10px] mt-2 font-black uppercase tracking-wider">
                                    <span>{post.date}</span>
                                    <span className="size-1 rounded-full bg-slate-200" />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

