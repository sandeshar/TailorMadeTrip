import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IDestinationSubcategory extends Document {
    name: string;
    slug: string;
    description?: string;
    categoryId: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const DestinationSubcategorySchema: Schema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String },
    categoryId: { type: Schema.Types.ObjectId, ref: 'DestinationCategory', required: true },
}, {
    timestamps: true
});

DestinationSubcategorySchema.index({ name: 1, categoryId: 1 }, { unique: true });
DestinationSubcategorySchema.index({ slug: 1, categoryId: 1 }, { unique: true });

const DestinationSubcategory: Model<IDestinationSubcategory> = mongoose.models.DestinationSubcategory || mongoose.model<IDestinationSubcategory>('DestinationSubcategory', DestinationSubcategorySchema);

export default DestinationSubcategory;
