"use server";

import dbConnect from "@/db/db";
import ContactSubmission from "@/db/core/contact-submissions";
import { revalidatePath } from "next/cache";
import { sendMail } from "@/utils/mail";
import SiteSettings from "@/db/cms/site-settings";
import { hasPermission } from "@/utils/auth";

export async function submitContactForm(formData: FormData) {
    try {
        await dbConnect();

        const fullName = formData.get("fullName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const pkg = formData.get("package") as string;
        const message = formData.get("message") as string;

        if (!fullName || !email || !phone || !pkg || !message) {
            return { error: "All fields are required" };
        }

        const submission = new ContactSubmission({
            fullName,
            email,
            phone,
            pkg,
            message
        });

        await submission.save();

        // Send Email Notification to Admin
        const settings = await SiteSettings.findOne().lean() as any;
        const adminEmail = settings?.contactEmail || settings?.smtp?.user;

        if (adminEmail) {
            await sendMail({
                to: adminEmail,
                subject: `New Inquiry: ${fullName} - ${pkg.toUpperCase()}`,
                text: `New contact form submission:\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\npackage: ${pkg}\nMessage: ${message}`,
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                        <h2 style="color: #2563eb;">New Student Inquiry</h2>
                        <p><strong>Sender:</strong> ${fullName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Interested Package:</strong> <span style="text-transform: uppercase;">${pkg}</span></p>
                        <div style="margin-top: 20px; padding: 15px; background: #f9fafb; border-radius: 8px;">
                            <p style="margin-top: 0; font-weight: bold;">Message:</p>
                            <p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
                        </div>
                        <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">This inquiry has been saved in your dashboard.</p>
                    </div>
                `
            });
        }

        // Optional: Send auto-reply to user
        if (email) {
            await sendMail({
                to: email,
                subject: `Thank you for contacting Trailor my trip`,
                text: `Dear ${fullName},\n\nThank you for your interest in Trailor my trip. We have received your inquiry regarding ${pkg.toUpperCase()} and our team will get back to you shortly.\n\nBest regards,\nTrailor my trip Team`,
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                        <h2 style="color: #2563eb;">Thank You for Reaching Out!</h2>
                        <p>Dear ${fullName},</p>
                        <p>Thank you for your interest in Trailor my trip. We have received your inquiry regarding <strong>${pkg.toUpperCase()}</strong>.</p>
                        <p>Our admission team will review your message and get back to you within 24 hours.</p>
                        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                        <p style="font-size: 14px; color: #4b5563;">Best regards,<br /><strong>Trailor my trip Team</strong></p>
                    </div>
                `
            });
        }

        revalidatePath("/dashboard/contacts");
        return { success: "Message sent successfully" };
    } catch (error: any) {
        console.error("submitContactForm error:", error);
        return { error: error.message || "Failed to send message" };
    }
}

export async function getContactSubmissions() {
    try {
        if (!(await hasPermission('contacts'))) throw new Error("Unauthorized");
        await dbConnect();
        const submissions = await ContactSubmission.find().sort({ createdAt: -1 }).lean();
        return JSON.parse(JSON.stringify(submissions));
    } catch (error: any) {
        console.error("getContactSubmissions error:", error);
        throw new Error(error.message);
    }
}

export async function getContactStats() {
    try {
        if (!(await hasPermission('contacts'))) throw new Error("Unauthorized");
        await dbConnect();
        const [total, pending, responded, archived] = await Promise.all([
            ContactSubmission.countDocuments(),
            ContactSubmission.countDocuments({ status: 'pending' }),
            ContactSubmission.countDocuments({ status: 'responded' }),
            ContactSubmission.countDocuments({ status: 'archived' }),
        ]);
        return { total, pending, responded, archived };
    } catch (error: any) {
        console.error("getContactStats error:", error);
        throw new Error(error.message);
    }
}

export async function updateSubmissionStatus(id: string, status: string) {
    try {
        if (!(await hasPermission('contacts'))) throw new Error("Unauthorized");
        await dbConnect();
        await ContactSubmission.findByIdAndUpdate(id, { status });
        revalidatePath("/dashboard", "layout");
        revalidatePath("/dashboard/contacts");
        return { success: true };
    } catch (error: any) {
        console.error("updateSubmissionStatus error:", error);
        return { error: error.message };
    }
}

export async function deleteSubmission(id: string) {
    try {
        if (!(await hasPermission('contacts'))) throw new Error("Unauthorized");
        await dbConnect();
        await ContactSubmission.findByIdAndDelete(id);
        revalidatePath("/dashboard", "layout");
        revalidatePath("/dashboard/contacts");
        return { success: true };
    } catch (error: any) {
        console.error("deleteSubmission error:", error);
        return { error: error.message };
    }
}
