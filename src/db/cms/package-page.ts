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
            level: string;
            slug: string;
            type: string;
            description: string;
            features: string[];
            icon: string;
            popular: boolean;
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
                title: { type: String, default: "Available packages" },
                subtitle: { type: String, default: "Expert Training" },
                items: [{
                    level: { type: String, default: "" },
                    slug: { type: String, default: "" },
                    type: { type: String, default: "" },
                    description: { type: String, default: "" },
                    features: { type: [String], default: [] },
                    icon: { type: String, default: "school" },
                    popular: { type: Boolean, default: false }
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
                name: "Default",
                slug: "default",
                type: "default",
                hero: {
                    isVisible: true,
                    badgeText: "Trailor my trip Academy",
                    title: "Chartered Accountancy packages",
                    description: "Join Nepal's premier institute for CA Foundation, Intermediate, and Final levels. Expert guidance for ICAN success.",
                    backgroundImage: "https://images.unsplash.com/photo-1523050335392-9bef867a0571?q=80&w=2070&auto=format&fit=crop",
                    primaryButton: { text: "Explore packages", link: "#packages-grid", icon: "explore" },
                    secondaryButton: { text: "Admissions", link: "/contact", icon: "call" }
                }
            }
        ]
    },
    cta: {
        isVisible: { type: Boolean, default: true },
        title: { type: String, default: "Ready to Start Your CA Journey?" },
        description: { type: String, default: "Join the top-ranked CA institute and turn your goals into professional success." },
        primaryButton: {
            text: { type: String, default: "Enroll for 2025" },
            link: { type: String, default: "/register" },
            icon: { type: String, default: "login" }
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
