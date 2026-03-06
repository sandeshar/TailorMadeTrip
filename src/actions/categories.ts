"use server";

import { cacheTag, revalidatePath, revalidateTag } from "next/cache";
import dbConnect from "@/db/db";
import Category from "@/db/categories";
import Subcategory from "@/db/subcategories";
import { CACHE_TAGS } from "@/utils/cachetags";
import { hasPermission } from "@/utils/auth";

// Generic category actions - Internal helpers
async function createCategoryDirect(Model: any, data: any) {
    if (!(await hasPermission('cms'))) {
        throw new Error("Unauthorized");
    }
    await dbConnect();
    if (data.order === undefined) {
        const lastCategory = await Model.findOne({}).sort({ order: -1 }).lean();
        data.order = lastCategory ? (lastCategory.order || 0) + 1 : 0;
    }
    const category = await Model.create(data);
    (revalidateTag as any)(CACHE_TAGS.CATEGORIES);
    revalidatePath('/', 'layout');
    revalidatePath('/dashboard/category', 'page');
    return JSON.parse(JSON.stringify(category));
}

async function updateCategoryDirect(Model: any, id: string, data: any) {
    if (!(await hasPermission('cms'))) {
        throw new Error("Unauthorized");
    }
    await dbConnect();
    const category = await Model.findByIdAndUpdate(id, data, { new: true }).lean();
    (revalidateTag as any)(CACHE_TAGS.CATEGORIES);
    revalidatePath('/', 'layout');
    revalidatePath('/dashboard/category', 'page');
    return JSON.parse(JSON.stringify(category));
}

async function deleteCategoryDirect(Model: any, id: string) {
    if (!(await hasPermission('cms'))) {
        throw new Error("Unauthorized");
    }
    await dbConnect();
    const category = await Model.findByIdAndDelete(id).lean();
    (revalidateTag as any)(CACHE_TAGS.CATEGORIES);
    revalidatePath('/', 'layout');
    revalidatePath('/dashboard/category', 'page');
    return JSON.parse(JSON.stringify(category));
}

// Categories
export const getCategories = async () => {
    // "use cache"; // Enable if using canary/experimental
    // cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const categories = await Category.find({}).sort({ order: 1, createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(categories));
};
export const createCategory = async (data: any) => createCategoryDirect(Category, data);
export const updateCategory = async (id: string, data: any) => updateCategoryDirect(Category, id, data);
export const deleteCategory = async (id: string = "") => deleteCategoryDirect(Category, id);

// Subcategories
export const getSubcategories = async (categoryId?: string) => {
    // "use cache";
    // cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const filter = categoryId ? { categoryId } : {};
    const subcategories = await Subcategory.find(filter).sort({ order: 1, createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(subcategories));
};
export const createSubcategory = async (data: any) => createCategoryDirect(Subcategory, data);
export const updateSubcategory = async (id: string, data: any) => updateCategoryDirect(Subcategory, id, data);
export const deleteSubcategory = async (id: string) => deleteCategoryDirect(Subcategory, id);
