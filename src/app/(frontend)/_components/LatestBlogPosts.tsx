import Link from "next/link";

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
        <section className="bg-white py-20 border-t border-slate-100 w-full">
            <div className="section-container">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-slate-900 text-2xl md:text-3xl font-bold">Latest Travel Tips</h2>
                    <Link href="/blog" className="text-primary font-semibold text-sm hover:underline">
                        Read Blog
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="flex flex-col gap-3 group cursor-pointer">
                            <Link href={`/blog/${post.id}`}>
                                <div
                                    className="rounded-lg overflow-hidden h-48 bg-cover bg-center"
                                    style={{ backgroundImage: `url("${post.image}")` }}
                                ></div>
                            </Link>
                            <div className="flex flex-col gap-1">
                                <span className="text-primary text-xs font-bold uppercase tracking-wider">
                                    {post.category}
                                </span>
                                <Link href={`/blog/${post.id}`}>
                                    <h3 className="text-slate-900 font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                </Link>
                                <p className="text-slate-500 text-sm line-clamp-2">{post.excerpt}</p>
                                <span className="text-slate-400 text-xs mt-1">
                                    {post.date} • {post.readTime}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
