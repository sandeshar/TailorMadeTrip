"use server";

import dbConnect from "@/db/db";
import Testimonial from "@/db/core/testimonials";
import Destination from "@/db/core/destinations";
import Package from "@/db/core/packages";
import { revalidatePath } from "next/cache";

export async function getTestimonialTags() {
    try {
        await dbConnect();
        const [destinations, packages] = await Promise.all([
            Destination.find({ status: "active" }, "slug title").lean(),
            Package.find({ status: "active" }, "slug title").lean()
        ]);

        const tags = [
            { id: "home", label: "Homepage", type: "General" },
            { id: "about", label: "About Page", type: "General" },
            ...destinations.map((d: any) => ({ id: `destination-${d.slug}`, label: d.title, type: "Destinations" })),
            ...packages.map((p: any) => ({ id: `package-${p.slug}`, label: p.title, type: "Packages" }))
        ];

        return JSON.parse(JSON.stringify(tags));
    } catch (error) {
        console.error("Error fetching testimonial tags:", error);
        return [];
    }
}

export async function getTestimonials(query = {}, sort = { createdAt: -1 }, limit = 0) {
    try {
        await dbConnect();
        const testimonials = await Testimonial.find(query)
            .sort(sort as any)
            .limit(limit)
            .lean();
        return JSON.parse(JSON.stringify(testimonials));
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        return [];
    }
}

export async function getTestimonialById(id: string) {
    try {
        await dbConnect();
        const testimonial = await Testimonial.findById(id).lean();
        return JSON.parse(JSON.stringify(testimonial));
    } catch (error) {
        console.error("Error fetching testimonial:", error);
        return null;
    }
}

export async function createTestimonial(data: any) {
    try {
        await dbConnect();
        const testimonial = await Testimonial.create(data);
        revalidatePath("/dashboard/testimonials");
        revalidatePath("/");
        return { success: true, data: JSON.parse(JSON.stringify(testimonial)) };
    } catch (error: any) {
        console.error("Error creating testimonial:", error);
        return { success: false, error: error.message };
    }
}

export async function updateTestimonial(id: string, data: any) {
    try {
        await dbConnect();
        const testimonial = await Testimonial.findByIdAndUpdate(id, data, { new: true });
        revalidatePath("/dashboard/testimonials");
        revalidatePath("/");
        return { success: true, data: JSON.parse(JSON.stringify(testimonial)) };
    } catch (error: any) {
        console.error("Error updating testimonial:", error);
        return { success: false, error: error.message };
    }
}

export async function deleteTestimonial(id: string) {
    try {
        await dbConnect();
        await Testimonial.findByIdAndDelete(id);
        revalidatePath("/dashboard/testimonials");
        revalidatePath("/");
        return { success: true };
    } catch (error: any) {
        console.error("Error deleting testimonial:", error);
        return { success: false, error: error.message };
    }
}
