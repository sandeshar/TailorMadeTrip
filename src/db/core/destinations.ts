import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IDestination extends Document {
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

const DestinationSchema: Schema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'DestinationCategory', required: true },
    subcategoryId: { type: Schema.Types.ObjectId, ref: 'DestinationSubcategory' },
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

const Destination: Model<IDestination> = mongoose.models.Destination || mongoose.model<IDestination>('Destination', DestinationSchema);

export default Destination;
