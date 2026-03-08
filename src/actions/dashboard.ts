"use server";

import dbConnect from "@/db/db";
import User from "@/db/auth/users";
import Article from "@/db/core/articles";
import ContactSubmission from "@/db/core/contact-submissions";
import { hasPermission, getSession } from "@/utils/auth";

export async function getDashboardStats() {
    try {
        const session = await getSession();
        if (!session) {
            throw new Error("Unauthorized");
        }
        await dbConnect();
        const [users, articles, contacts] = await Promise.all([
            User.countDocuments(),
            Article.countDocuments(),
            ContactSubmission.countDocuments({ status: { $ne: 'archived' } })
        ]);

        return {
            users,
            articles,
            contacts,
            teachers: 0,
            notices: 0
        };
    } catch (error: any) {
        console.error("getDashboardStats error:", error);
        throw new Error(error.message);
    }
}
