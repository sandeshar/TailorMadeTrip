"use server";

import { cacheTag, revalidatePath, revalidateTag } from "next/cache";
import dbConnect from "@/db/db";
import AboutPage from "@/db/cms/about-page";
import ContactPage from "@/db/cms/contact-page";
import PackagePage from "@/db/cms/package-page";
import Homepage from "@/db/cms/homepage";
import BlogPage from "@/db/cms/blog-page";
import { CACHE_TAGS } from "@/utils/cachetags";
import { hasPermission } from "@/utils/auth";

export const getHomepage = async () => {
    "use cache";
    cacheTag(CACHE_TAGS.HOMEPAGE);
    await dbConnect();
    let page = await Homepage.findOne().lean();
    if (!page) {
        page = await Homepage.create({});
    }
    return JSON.parse(JSON.stringify(page));
};
export const updateHomepage = async (data: any) => {
    if (!(await hasPermission('cms'))) throw new Error("Unauthorized");
    await dbConnect();
    let page = await Homepage.findOneAndUpdate({}, data, { new: true, upsert: true }).lean();
    revalidateTag(CACHE_TAGS.HOMEPAGE, 'max');
    revalidatePath('/', 'layout');
    revalidatePath('/dashboard', 'layout');
    return JSON.parse(JSON.stringify(page));
};

export const getAboutPage = async () => {
    "use cache";
    cacheTag(CACHE_TAGS.ABOUTPAGE);
    await dbConnect();
    let page = await AboutPage.findOne().lean();
    if (!page) {
        page = await AboutPage.create({});
    }
    return JSON.parse(JSON.stringify(page));
};
export const updateAboutPage = async (data: any) => {
    if (!(await hasPermission('cms'))) throw new Error("Unauthorized");
    await dbConnect();
    let page = await AboutPage.findOneAndUpdate({}, data, { new: true, upsert: true }).lean();
    revalidateTag(CACHE_TAGS.ABOUTPAGE, 'max');
    revalidatePath('/', 'layout');
    revalidatePath('/dashboard', 'layout');
    return JSON.parse(JSON.stringify(page));
};

export const getContactPage = async () => {
    "use cache";
    cacheTag(CACHE_TAGS.CONTACTPAGE);
    await dbConnect();
    let page = await ContactPage.findOne().lean();
    if (!page) {
        page = await ContactPage.create({});
    }
    return JSON.parse(JSON.stringify(page));
};
export const updateContactPage = async (data: any) => {
    if (!(await hasPermission('cms'))) throw new Error("Unauthorized");
    await dbConnect();
    let page = await ContactPage.findOneAndUpdate({}, data, { new: true, upsert: true }).lean();
    revalidateTag(CACHE_TAGS.CONTACTPAGE, 'max');
    revalidatePath('/', 'layout');
    revalidatePath('/dashboard', 'layout');
    return JSON.parse(JSON.stringify(page));
};

export const getPackagePage = async () => {
    "use cache";
    cacheTag(CACHE_TAGS.PACKAGEPAGE);
    await dbConnect();
    let page = await PackagePage.findOne().lean();
    if (!page) {
        page = await PackagePage.create({});
    }
    return JSON.parse(JSON.stringify(page));
};
export const updatePackagePage = async (data: any) => {
    if (!(await hasPermission('packages'))) throw new Error("Unauthorized");
    await dbConnect();
    let page = await PackagePage.findOneAndUpdate({}, data, { new: true, upsert: true }).lean();
    revalidateTag(CACHE_TAGS.PACKAGEPAGE, 'max');
    revalidatePath('/', 'layout');
    revalidatePath('/dashboard', 'layout');
    return JSON.parse(JSON.stringify(page));
};

export const getBlogPage = async () => {
    "use cache";
    cacheTag(CACHE_TAGS.BLOGPAGE);
    await dbConnect();
    let page = await BlogPage.findOne().lean();
    if (!page) {
        page = await BlogPage.create({});
    }
    return JSON.parse(JSON.stringify(page));
};
export const updateBlogPage = async (data: any) => {
    if (!(await hasPermission('cms'))) throw new Error("Unauthorized");
    await dbConnect();
    let page = await BlogPage.findOneAndUpdate({}, data, { new: true, upsert: true }).lean();
    revalidateTag(CACHE_TAGS.BLOGPAGE, 'max');
    revalidatePath('/', 'layout');
    revalidatePath('/dashboard', 'layout');
    return JSON.parse(JSON.stringify(page));
};
