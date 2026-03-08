import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPackageSubcategory extends Document {
    name: string;
    slug: string;
    description?: string;
    categoryId: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const PackageSubcategorySchema: Schema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String },
    categoryId: { type: Schema.Types.ObjectId, ref: 'PackageCategory', required: true },
}, {
    timestamps: true
});

PackageSubcategorySchema.index({ name: 1, categoryId: 1 }, { unique: true });
PackageSubcategorySchema.index({ slug: 1, categoryId: 1 }, { unique: true });

const PackageSubcategory: Model<IPackageSubcategory> = mongoose.models.PackageSubcategory || mongoose.model<IPackageSubcategory>('PackageSubcategory', PackageSubcategorySchema);

export default PackageSubcategory;
