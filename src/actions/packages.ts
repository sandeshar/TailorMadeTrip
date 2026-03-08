"use server";

import { cacheTag, revalidatePath, revalidateTag } from "next/cache";
import dbConnect from "@/db/db";
import Package from "@/db/core/packages";
import { CACHE_TAGS } from "@/utils/cachetags";
import { hasPermission } from "@/utils/auth";

export async function getPackages(filter: any = {}, sort: any = { createdAt: -1 }) {
    "use cache";
    cacheTag('packages');
    try {
        await dbConnect();
        const Packages = await Package.find(filter)
            .populate('categoryId', 'name slug')
            .populate('subcategoryId', 'name slug')
            .sort(sort).lean();
        return JSON.parse(JSON.stringify(Packages));
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function getPackageById(id: string) {
    "use cache";
    cacheTag('packages');
    try {
        await dbConnect();
        const pkg = await Package.findById(id).lean();
        return JSON.parse(JSON.stringify(pkg));
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function createPackage(data: any) {
    if (!(await hasPermission('Packages'))) throw new Error("Unauthorized");
    try {
        const sanitizedData = { ...data };
        if (sanitizedData.subcategoryId === "") {
            delete sanitizedData.subcategoryId;
        }

        await dbConnect();
        const pkg = await Package.create(sanitizedData);
        revalidateTag('packages', 'max');
        revalidatePath('/Packages', 'layout');
        return JSON.parse(JSON.stringify(pkg));
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function updatePackage(id: string, data: any) {
    if (!(await hasPermission('Packages'))) throw new Error("Unauthorized");
    try {
        const sanitizedData = { ...data };
        if (sanitizedData.subcategoryId === "") {
            sanitizedData.subcategoryId = null;
        }

        await dbConnect();
        const pkg = await Package.findByIdAndUpdate(id, sanitizedData, { new: true }).lean();
        revalidateTag('packages', 'max');
        revalidatePath('/Packages', 'layout');
        return JSON.parse(JSON.stringify(pkg));
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function deletePackage(id: string) {
    if (!(await hasPermission('Packages'))) throw new Error("Unauthorized");
    try {
        await dbConnect();
        await Package.findByIdAndDelete(id);
        revalidateTag('packages', 'max');
        revalidatePath('/Packages', 'layout');
        return { success: true };
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function getPackageBySlug(slug: string) {
    "use cache";
    cacheTag('packages');
    try {
        await dbConnect();
        const pkg = await Package.findOne({ slug }).lean();
        return JSON.parse(JSON.stringify(pkg));
    } catch (error: any) {
        throw new Error(error.message);
    }
}
