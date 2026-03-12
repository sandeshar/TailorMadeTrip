"use server";

import dbConnect from "@/db/db";
import Testimonial from "@/db/core/testimonials";
import { cacheTag, revalidatePath, revalidateTag } from "next/cache";
import { CACHE_TAGS } from "@/utils/cachetags";

export async function getTestimonialTags() {
    "use cache";
    cacheTag(CACHE_TAGS.TESTIMONIALS);
    try {
        await dbConnect();

        const tags = [
            { id: "home", label: "Homepage", type: "General" },
            { id: "about", label: "About Page", type: "General" },
        ];

        return JSON.parse(JSON.stringify(tags));
    } catch (error) {
        console.error("Error fetching testimonial tags:", error);
        return [];
    }
}

export async function getTestimonials(query = {}, sort = { createdAt: -1 }, limit = 0) {
    "use cache";
    cacheTag(CACHE_TAGS.TESTIMONIALS);
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
    "use cache";
    cacheTag(CACHE_TAGS.TESTIMONIALS + id);
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
        revalidateTag(CACHE_TAGS.TESTIMONIALS, "max");
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
        revalidateTag(CACHE_TAGS.TESTIMONIALS, "max");
        revalidateTag(CACHE_TAGS.TESTIMONIALS + id, "max");
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
        revalidateTag(CACHE_TAGS.TESTIMONIALS, "max");
        revalidateTag(CACHE_TAGS.TESTIMONIALS + id, "max");
        revalidatePath("/dashboard/testimonials");
        revalidatePath("/");
        return { success: true };
    } catch (error: any) {
        console.error("Error deleting testimonial:", error);
        return { success: false, error: error.message };
    }
}
