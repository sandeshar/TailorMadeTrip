"use server";

import { cacheTag, revalidatePath, revalidateTag } from "next/cache";
import dbConnect from "@/db/db";
import PackageCategory from "@/db/core/package-categories";
import PackageSubcategory from "@/db/core/package-subcategories";
import Category from "@/db/core/categories";
import Subcategory from "@/db/core/subcategories";
import FAQCategory from "@/db/core/faq-categories";
import FAQSubcategory from "@/db/core/faq-subcategories";
import DestinationCategory from "@/db/core/destination-categories";
import DestinationSubcategory from "@/db/core/destination-subcategories";
import { CACHE_TAGS } from "@/utils/cachetags";
import { hasPermission } from "@/utils/auth";

// Generic category actions - Internal helpers (NOT cached, do not call directly from outside)
async function createCategory(Model: any, data: any) {
    if (!(await hasPermission('cms')) &&
        !(await hasPermission('blog')) &&
        !(await hasPermission('packages'))) {
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
    if (!(await hasPermission('cms')) &&
        !(await hasPermission('blog')) &&
        !(await hasPermission('packages'))) {
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
        !(await hasPermission('packages'))) {
        throw new Error("Unauthorized");
    }
    await dbConnect();
    const category = await Model.findByIdAndDelete(id).lean();
    revalidateTag(CACHE_TAGS.CATEGORIES, 'max');
    revalidatePath('/', 'layout');
    revalidatePath('/dashboard', 'layout');
    return JSON.parse(JSON.stringify(category));
}

// Package Categories
export const getPackageCategories = async (projection: any = {}) => {
    "use cache";
    cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const categories = await PackageCategory.find({}, projection).sort({ order: 1, createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(categories));
};
export const getPackageCategoryBySlug = async (slug: string) => {
    "use cache";
    cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const category = await PackageCategory.findOne({ slug }).lean();
    return JSON.parse(JSON.stringify(category));
};
export const getPackageCategoryById = async (id: string) => {
    "use cache";
    cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const category = await PackageCategory.findById(id).lean();
    return JSON.parse(JSON.stringify(category));
};
export const createPackageCategory = async (data: any) => createCategory(PackageCategory, data);
export const updatePackageCategory = async (id: string, data: any) => updateCategory(PackageCategory, id, data);
export const deletePackageCategory = async (id: string) => deleteCategory(PackageCategory, id);

// Package Subcategories
export const getPackageSubcategories = async (categoryId?: string, projection: any = {}) => {
    "use cache";
    cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const filter = categoryId ? { categoryId } : {};
    const subcategories = await PackageSubcategory.find(filter, projection).sort({ order: 1, createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(subcategories));
};
export const getPackageSubcategoryBySlug = async (slug: string) => {
    "use cache";
    cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const subcategory = await PackageSubcategory.findOne({ slug }).lean();
    return JSON.parse(JSON.stringify(subcategory));
};
export const createPackageSubcategory = async (data: any) => createCategory(PackageSubcategory, data);
export const updatePackageSubcategory = async (id: string, data: any) => updateCategory(PackageSubcategory, id, data);
export const deletePackageSubcategory = async (id: string) => deleteCategory(PackageSubcategory, id);

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
    const subcategories = await Subcategory.find(filter).sort({ order: 1, createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(subcategories));
};
export const getBlogSubcategoryBySlug = async (slug: string) => {
    "use cache";
    cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const subcategory = await Subcategory.findOne({ slug }).lean();
    return JSON.parse(JSON.stringify(subcategory));
};
export const createBlogSubcategory = async (data: any) => createCategory(Subcategory, data);
export const updateBlogSubcategory = async (id: string, data: any) => updateCategory(Subcategory, id, data);
export const deleteBlogSubcategory = async (id: string) => deleteCategory(Subcategory, id);

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

// Destination Categories
export const getDestinationCategories = async () => {
    "use cache";
    cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const categories = await DestinationCategory.find({}).sort({ order: 1, createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(categories));
};
export const getDestinationCategoryById = async (id: string) => {
    "use cache";
    cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const category = await DestinationCategory.findById(id).lean();
    return JSON.parse(JSON.stringify(category));
};
export const createDestinationCategory = async (data: any) => createCategory(DestinationCategory, data);
export const updateDestinationCategory = async (id: string, data: any) => updateCategory(DestinationCategory, id, data);
export const deleteDestinationCategory = async (id: string) => deleteCategory(DestinationCategory, id);

// Destination Subcategories
export const getDestinationSubcategories = async (categoryId?: string) => {
    "use cache";
    cacheTag(CACHE_TAGS.CATEGORIES);
    await dbConnect();
    const filter = categoryId ? { categoryId } : {};
    const subcategories = await DestinationSubcategory.find(filter).sort({ order: 1, createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(subcategories));
};
export const createDestinationSubcategory = async (data: any) => createCategory(DestinationSubcategory, data);
export const updateDestinationSubcategory = async (id: string, data: any) => updateCategory(DestinationSubcategory, id, data);
export const deleteDestinationSubcategory = async (id: string) => deleteCategory(DestinationSubcategory, id);


