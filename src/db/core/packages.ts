import mongoose, { Schema, Document, Model } from 'mongoose';
import './package-categories';
import './package-subcategories';

export interface IPackage extends Document {
    title: string;
    slug: string;
    categoryId: mongoose.Types.ObjectId;
    subcategoryId?: mongoose.Types.ObjectId;
    description: string;
    duration: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    isBestSeller: boolean;
    tripGrade?: string;
    startsAt?: string;
    endsAt?: string;
    tripType?: string;
    transport?: string;
    tripDestination?: string;
    maxAltitude?: string;
    accommodation?: string;
    features: string[];
    images?: string[];
    itinerary?: {
        day: number;
        title: string;
        content: string;
        proTip?: string;
    }[];
    highlights?: string[];
    inclusions?: string[];
    exclusions?: string[];
    costDetails?: string;
    usefulInfo?: string;
    status: 'active' | 'inactive';
    seo?: {
        title?: string;
        description?: string;
        keywords?: string;
    };
    createdAt: Date;
    updatedAt: Date;
}

const PackageSchema: Schema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'PackageCategory', required: true },
    subcategoryId: { type: Schema.Types.ObjectId, ref: 'PackageSubcategory' },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    image: { type: String, required: true },
    isBestSeller: { type: Boolean, default: false },
    startsAt: { type: String },
    endsAt: { type: String },
    tripType: { type: String },
    transport: { type: String },
    tripDestination: { type: String },
    maxAltitude: { type: String },
    accommodation: { type: String },
    tripGrade: { type: String },
    features: { type: [String], default: [] },
    images: { type: [String], default: [] },
    itinerary: [{
        day: { type: Number },
        title: { type: String },
        content: { type: String },
        proTip: { type: String }
    }],
    highlights: { type: [String], default: [] },
    inclusions: { type: [String], default: [] },
    exclusions: { type: [String], default: [] },
    costDetails: { type: String },
    departures: [{
        startDate: { type: Date },
        endDate: { type: Date },
        price: { type: Number },
        status: { type: String, enum: ['guaranteed', 'available', 'limited', 'full'], default: 'available' }
    }],
    usefulInfo: { type: String },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    seo: {
        title: { type: String },
        description: { type: String },
        keywords: { type: String }
    }
}, {
    timestamps: true
});

const Package: Model<IPackage> = mongoose.models.Package || mongoose.model<IPackage>('Package', PackageSchema);

export default Package;
