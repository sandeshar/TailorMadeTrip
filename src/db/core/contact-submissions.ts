import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContactSubmission extends Document {
    fullName: string;
    email: string;
    phone: string;
    package: string;
    message: string;
    status: 'pending' | 'reviewed' | 'responded' | 'archived';
}

const ContactSubmissionSchema: Schema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    package: { type: String, required: true },
    message: { type: String, required: true },
    status: {
        type: String,
        enum: ['pending', 'reviewed', 'responded', 'archived'],
        default: 'pending'
    }
}, {
    timestamps: true
});

const ContactSubmissionModel: Model<IContactSubmission> = mongoose.models.ContactSubmission || mongoose.model<IContactSubmission>('ContactSubmission', ContactSubmissionSchema);

export default ContactSubmissionModel;
