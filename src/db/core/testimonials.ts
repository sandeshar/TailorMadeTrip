import mongoose, { Schema, Document } from "mongoose";

export interface ITestimonial extends Document {
    name: string;
    role?: string;
    content: string;
    image?: string;
    rating: number;
    status: "active" | "inactive";
    featured: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const TestimonialSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        role: { type: String },
        content: { type: String, required: true },
        image: { type: String },
        rating: { type: Number, default: 5, min: 1, max: 5 },
        status: { type: String, enum: ["active", "inactive"], default: "active" },
        featured: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.models.Testimonial || mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);
