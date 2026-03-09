import mongoose, { Document, Model, Schema } from "mongoose";

export interface IFAQCategory extends Document {
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

const FAQCategorySchema: Schema = new Schema({
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

const FAQCategory: Model<IFAQCategory> = mongoose.models.FAQCategory || mongoose.model<IFAQCategory>("FAQCategory", FAQCategorySchema);
export default FAQCategory;
