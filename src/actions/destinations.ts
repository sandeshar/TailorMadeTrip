"use server";

import { cacheTag, revalidatePath, revalidateTag } from "next/cache";
import dbConnect from "@/db/db";
import Destination from "@/db/core/destinations";
import { CACHE_TAGS } from "@/utils/cachetags";
import { hasPermission } from "@/utils/auth";

export async function getDestinations(filter: any = {}, sort: any = { createdAt: -1 }) {
    "use cache";
    cacheTag('destinations');
    try {
        await dbConnect();
        const Destinations = await Destination.find(filter)
            .populate('categoryId', 'name slug')
            .populate('subcategoryId', 'name slug')
            .sort(sort).lean();
        return JSON.parse(JSON.stringify(Destinations));
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function getDestinationById(id: string) {
    "use cache";
    cacheTag('destinations');
    try {
        await dbConnect();
        const destination = await Destination.findById(id).lean();
        return JSON.parse(JSON.stringify(destination));
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function createDestination(data: any) {
    if (!(await hasPermission('Destinations'))) throw new Error("Unauthorized");
    try {
        const sanitizedData = { ...data };
        if (sanitizedData.subcategoryId === "") {
            delete sanitizedData.subcategoryId;
        }

        await dbConnect();
        const destination = await Destination.create(sanitizedData);
        revalidateTag('destinations', 'max');
        revalidatePath('/Destinations', 'layout');
        return JSON.parse(JSON.stringify(destination));
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function updateDestination(id: string, data: any) {
    if (!(await hasPermission('Destinations'))) throw new Error("Unauthorized");
    try {
        const sanitizedData = { ...data };
        if (sanitizedData.subcategoryId === "") {
            sanitizedData.subcategoryId = null;
        }

        await dbConnect();
        const destination = await Destination.findByIdAndUpdate(id, sanitizedData, { new: true }).lean();
        revalidateTag('destinations', 'max');
        revalidatePath('/Destinations', 'layout');
        return JSON.parse(JSON.stringify(destination));
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function deleteDestination(id: string) {
    if (!(await hasPermission('Destinations'))) throw new Error("Unauthorized");
    try {
        await dbConnect();
        await Destination.findByIdAndDelete(id);
        revalidateTag('destinations', 'max');
        revalidatePath('/Destinations', 'layout');
        return { success: true };
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function getDestinationBySlug(slug: string) {
    "use cache";
    cacheTag('destinations');
    try {
        await dbConnect();
        const destination = await Destination.findOne({ slug }).lean();
        return JSON.parse(JSON.stringify(destination));
    } catch (error: any) {
        throw new Error(error.message);
    }
}
