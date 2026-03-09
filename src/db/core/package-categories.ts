import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPackageCategory extends Document {
    name: string;
    slug: string;
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

const PackageCategorySchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
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

const PackageCategory: Model<IPackageCategory> = mongoose.models.PackageCategory || mongoose.model<IPackageCategory>('PackageCategory', PackageCategorySchema);

export default PackageCategory;
