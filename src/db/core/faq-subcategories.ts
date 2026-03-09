import mongoose, { Document, Model, Schema } from "mongoose";

export interface IFAQSubcategory extends Document {
    categoryId: mongoose.Types.ObjectId;
    name: string;
    slug: string;
    description?: string;
    icon?: string;
    order: number;
    seo?: {
        title?: string;
        description?: string;
        keywords?: string;
    };
    isActive: boolean;
}

const FAQSubcategorySchema: Schema = new Schema({
    categoryId: { type: Schema.Types.ObjectId, ref: 'FAQCategory', required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    icon: { type: String, default: 'help' },
    order: { type: Number, default: 0 },
    seo: {
        title: { type: String },
        description: { type: String },
        keywords: { type: String }
    },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

const FAQSubcategory: Model<IFAQSubcategory> = mongoose.models.FAQSubcategory || mongoose.model<IFAQSubcategory>("FAQSubcategory", FAQSubcategorySchema);
export default FAQSubcategory;
