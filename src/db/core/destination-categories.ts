import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IDestinationCategory extends Document {
    name: string;
    slug: string;
    order: number;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

const DestinationCategorySchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    order: { type: Number, default: 0 },
    description: { type: String },
}, {
    timestamps: true
});

const DestinationCategory: Model<IDestinationCategory> = mongoose.models.DestinationCategory || mongoose.model<IDestinationCategory>('DestinationCategory', DestinationCategorySchema);

export default DestinationCategory;
