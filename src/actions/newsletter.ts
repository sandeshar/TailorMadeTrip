"use server";

import db from "@/db/db";
import Newsletter from "@/db/core/newsletter";
import { revalidatePath } from "next/cache";

export async function subscribeToNewsletter(email: string, sourceUrl?: string) {
    try {
        await db();

        const existing = await Newsletter.findOne({ email: email.toLowerCase() });
        if (existing) {
            if (existing.status === 'unsubscribed') {
                existing.status = 'active';
                existing.sourceUrl = sourceUrl;
                await existing.save();
                return { success: true, message: "Welcome back! You have been re-subscribed." };
            }
            return { success: false, message: "This email is already subscribed." };
        }

        await Newsletter.create({
            email: email.toLowerCase(),
            sourceUrl: sourceUrl
        });
        return { success: true, message: "Thank you for subscribing!" };
    } catch (error: any) {
        console.error("Newsletter Subscription Error:", error);
        return { success: false, message: error.message || "Failed to subscribe. Please try again later." };
    }
}

export async function getSubscribers(page: number = 1, limit: number = 20) {
    try {
        await db();
        const skip = (page - 1) * limit;

        const [subscribers, total] = await Promise.all([
            Newsletter.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
            Newsletter.countDocuments({})
        ]);

        return {
            subscribers: JSON.parse(JSON.stringify(subscribers)),
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page
        };
    } catch (error) {
        console.error("Fetch Subscribers Error:", error);
        throw new Error("Failed to fetch subscribers");
    }
}

export async function deleteSubscriber(id: string) {
    try {
        await db();
        await Newsletter.findByIdAndDelete(id);
        revalidatePath("/dashboard/marketing/newsletter");
        return { success: true };
    } catch (error) {
        console.error("Delete Subscriber Error:", error);
        return { success: false };
    }
}
