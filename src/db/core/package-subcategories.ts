import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPackageSubcategory extends Document {
    name: string;
    slug: string;
    categoryId: mongoose.Types.ObjectId;
    order: number;
    description?: string;
    seo?: {
        title?: string;
        description?: string;
        keywords?: string;
    };
    createdAt: Date;
    updatedAt: Date;
}

const PackageSubcategorySchema: Schema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'PackageCategory', required: true },
    order: { type: Number, default: 0 },
    description: { type: String },
    seo: {
        title: { type: String },
        description: { type: String },
        keywords: { type: String },
    },
}, {
    timestamps: true
});

// Compound index to ensure slug is unique per category if needed, 
// or globally unique. Usually globally unique is better for slugs.
PackageSubcategorySchema.index({ slug: 1, categoryId: 1 }, { unique: true });

const PackageSubcategory: Model<IPackageSubcategory> = mongoose.models.PackageSubcategory || mongoose.model<IPackageSubcategory>('PackageSubcategory', PackageSubcategorySchema);

export default PackageSubcategory;
