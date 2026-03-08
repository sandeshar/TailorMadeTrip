import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPackage extends Document {
    title: string;
    slug: string;
    categoryId: mongoose.Types.ObjectId;
    subcategoryId?: mongoose.Types.ObjectId;
    description: string;
    features: string[];
    icon?: string;
    type?: string;
    level?: string;
    popular: boolean;
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
    features: { type: [String], default: [] },
    icon: { type: String, default: 'school' },
    type: { type: String },
    level: { type: String },
    popular: { type: Boolean, default: false },
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
