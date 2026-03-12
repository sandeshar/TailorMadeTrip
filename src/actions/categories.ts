"use server";

import { cacheTag, revalidatePath, revalidateTag } from "next/cache";
import dbConnect from "@/db/db";
import Category from "@/db/core/categories";
import FAQCategory from "@/db/core/faq-categories";
import FAQSubcategory from "@/db/core/faq-subcategories";
import { CACHE_TAGS } from "@/utils/cachetags";
import { hasPermission } from "@/utils/auth";

// Generic category actions - Internal helpers (NOT cached, do not call directly from outside)
async function createCategory(Model: any, data: any) {
    if (!(await hasPermission('cms')) &&
        !(await hasPermission('blog')) &&
        !(await hasPermission('Packages'))) {
        throw new Error("Unauthorized");
    }
    await dbConnect();
    // Support both 'name' (TaxonomyManager) and 'title' (Legacy/Internal)
    if (data.name && !data.title) {
        data.title = data.name;
    }
    if (data.title && !data.name) {
        data.name = data.title;
    }
    if (data.order === undefined) {
        const lastCategory = await Model.findOne({}).sort({ order: -1 }).lean();
        data.order = lastCategory ? (lastCategory.order || 0) + 1 : 0;
    }
    const category = await Model.create(data);
    revalidateTag(CACHE_TAGS.CATEGORIES, 'max');
    revalidatePath('/', 'layout');
    revalidatePath('/dashboard', 'layout');
    return JSON.parse(JSON.stringify(category));
}

async function updateCategory(Model: any, id: string, data: any) {
    if (!(await hasPermission('cms'))  &&
        !(await hasPermission('Packages'))&&
        !(await hasPermission('blog'))) {
        throw new Error("Unauthorized");
    }
    await dbConnect();
    // Support both 'name' and 'title'
    if (data.name && !data.title) {
        data.title = data.name;
    }
    if (data.title && !data.name) {
        data.name = data.title;
    }
    const category = await Model.findByIdAndUpdate(id, data, { new: true }).lean();
    revalidateTag(CACHE_TAGS.CATEGORIES, 'max');
    revalidatePath('/', 'layout');
    revalidatePath('/dashboard', 'layout');
    return JSON.parse(JSON.stringify(category));
}

async function deleteCategory(Model: any, id: string) {
    if (!(await hasPermission('cms')) &&
        !(await hasPermission('blog')) &&
        !(await hasPermission('Packages'))) {
        throw new Error("Unauthorized");
    }
    await dbConnect();
    const category = await Model.findByIdAndDelete(id).lean();
    revalidateTag(CACHE_TAGS.CATEGORIES, 'max');
    revalidatePath('/', 'layout');
    revalidatePath('/dashboard', 'layout');
    return JSON.parse(JSON.stringify(category));
}

// Blog Categories
export const getBlogCategories = async () => {
    "use cache";
    cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const categories = await Category.find({}).sort({ order: 1, createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(categories));
};
export const getBlogCategoryBySlug = async (slug: string) => {
    "use cache";
    cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const category = await Category.findOne({ slug }).lean();
    return JSON.parse(JSON.stringify(category));
};
export const createBlogCategory = async (data: any) => createCategory(Category, data);
export const updateBlogCategory = async (id: string, data: any) => updateCategory(Category, id, data);
export const deleteBlogCategory = async (id: string) => deleteCategory(Category, id);

// Blog Subcategories
export const getBlogSubcategories = async (categoryId?: string) => {
    "use cache";
    cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const filter = categoryId ? { categoryId } : {};
    const subcategories = await Category.find(filter).sort({ order: 1, createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(subcategories));
};
export const getBlogSubcategoryBySlug = async (slug: string) => {
    "use cache";
    cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const subcategory = await Category.findOne({ slug }).lean();
    return JSON.parse(JSON.stringify(subcategory));
};
export const createBlogSubcategory = async (data: any) => createCategory(Category, data);
export const updateBlogSubcategory = async (id: string, data: any) => updateCategory(Category, id, data);
export const deleteBlogSubcategory = async (id: string) => deleteCategory(Category, id);

// FAQ Categories
export const getFAQCategories = async () => {
    "use cache";
    cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const categories = await FAQCategory.find({}).sort({ order: 1, createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(categories));
};
export const getFAQCategoryById = async (id: string) => {
    "use cache";
    cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const category = await FAQCategory.findById(id).lean();
    return JSON.parse(JSON.stringify(category));
};
export const createFAQCategory = async (data: any) => createCategory(FAQCategory, data);
export const updateFAQCategory = async (id: string, data: any) => updateCategory(FAQCategory, id, data);
export const deleteFAQCategory = async (id: string) => deleteCategory(FAQCategory, id);

// FAQ Subcategories
export const getFAQSubcategories = async (categoryId?: string) => {
    "use cache";
    cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const filter = categoryId ? { categoryId } : {};
    const subcategories = await FAQSubcategory.find(filter).sort({ order: 1, createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(subcategories));
};
export const createFAQSubcategory = async (data: any) => createCategory(FAQSubcategory, data);
export const updateFAQSubcategory = async (id: string, data: any) => updateCategory(FAQSubcategory, id, data);
export const deleteFAQSubcategory = async (id: string) => deleteCategory(FAQSubcategory, id);

