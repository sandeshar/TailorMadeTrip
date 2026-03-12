import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPackagePageCategory {
    _id?: string;
    name: string;
    slug: string;
    type: 'category' | 'subcategory' | 'default';
    hero: {
        isVisible: boolean;
        badgeText: string;
        title: string;
        description: string;
        backgroundImage: string;
        primaryButton: {
            text: string;
            link: string;
            icon?: string;
        };
        secondaryButton: {
            text: string;
            link: string;
            icon?: string;
        };
    };
    content?: string;
    packages?: {
        title: string;
        subtitle: string;
        items: {
            title: string;
            slug: string;
            price: number;
            duration: string;
            rating: number;
            reviews: number;
            image: string;
            description: string;
            features: string[];
            isBestSeller: boolean;
        }[];
    };
    richTextItems?: {
        title: string;
        content: string;
        icon?: string;
    }[];
    seo?: {
        title: string;
        description: string;
    };
}

export interface IPackagePage extends Document {
    categories: IPackagePageCategory[];
    cta: {
        isVisible: boolean;
        title: string;
        description: string;
        primaryButton: {
            text: string;
            link: string;
            icon?: string;
        };
        secondaryButton: {
            text: string;
            link: string;
            icon?: string;
        };
    };
    createdAt: Date;
    updatedAt: Date;
}

const PackagePageSchema: Schema = new Schema({
    categories: {
        type: [{
            name: { type: String, required: true },
            slug: { type: String, required: true },
            type: { type: String, enum: ['category', 'subcategory', 'default'], default: 'category' },
            hero: {
                isVisible: { type: Boolean, default: true },
                badgeText: { type: String, default: "Explore the World" },
                title: { type: String, default: "Our Featured Packages" },
                description: { type: String, default: "Discover hand-picked travel experiences designed for comfort, adventure, and unforgettable memories." },
                backgroundImage: { type: String, default: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop" },
                primaryButton: {
                    text: { type: String, default: "View All Tours" },
                    link: { type: String, default: "/packages" },
                    icon: { type: String, default: "explore" }
                },
                secondaryButton: {
                    text: { type: String, default: "Contact Support" },
                    link: { type: String, default: "/contact" },
                    icon: { type: String, default: "support_agent" }
                }
            },
            content: { type: String, default: "" },
            packages: {
                title: { type: String, default: "Available Packages" },
                subtitle: { type: String, default: "Hand-picked Tours" },
                items: [{
                    title: { type: String, default: "" },
                    slug: { type: String, default: "" },
                    price: { type: Number, default: 0 },
                    duration: { type: String, default: "" },
                    rating: { type: Number, default: 5 },
                    reviews: { type: Number, default: 0 },
                    image: { type: String, default: "" },
                    description: { type: String, default: "" },
                    features: { type: [String], default: [] },
                    isBestSeller: { type: Boolean, default: false }
                }]
            },
            richTextItems: [{
                title: { type: String, default: "" },
                content: { type: String, default: "" },
                icon: { type: String, default: "menu_book" }
            }],
            seo: {
                title: { type: String, default: "" },
                description: { type: String, default: "" }
            }
        }],
        default: [
            {
                name: "Packages",
                slug: "packages",
                type: "default",
                hero: {
                    isVisible: true,
                    badgeText: "Curated Travel Packages",
                    title: "Hand-picked experiences designed for comfort, adventure, and unforgettable memories.",
                    description: "Explore our specialized travel packages and programs tailored for your next adventure.",
                    backgroundImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2070",
                    primaryButton: { text: "Explore Tours", link: "#packages", icon: "explore" },
                    secondaryButton: { text: "Contact Us", link: "/contact", icon: "support_agent" }
                }
            }
        ]
    },
    cta: {
        isVisible: { type: Boolean, default: true },
        title: { type: String, default: "Ready to Start Your Journey?" },
        description: { type: String, default: "Join thousands of happy travelers and create memories that last a lifetime." },
        primaryButton: {
            text: { type: String, default: "Book Now" },
            link: { type: String, default: "/packages" },
            icon: { type: String, default: "event" }
        },
        secondaryButton: {
            text: { type: String, default: "Talk to an Expert" },
            link: { type: String, default: "/contact" },
            icon: { type: String, default: "chat" }
        }
    }
}, {
    timestamps: true
});

const PackagePage: Model<IPackagePage> = mongoose.models.PackagePage || mongoose.model<IPackagePage>('PackagePage', PackagePageSchema);

export default PackagePage;
