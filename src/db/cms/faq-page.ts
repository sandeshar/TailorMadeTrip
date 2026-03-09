import mongoose, { Document, Model, Schema } from "mongoose";

interface IFAQPage extends Document {
    header: {
        title: string;
        description: string;
    };
    categories: Array<{
        title: string;
        icon: string;
        id: string;
    }>;
    items: Array<{
        question: string;
        answer: string;
        categoryId: string;
        isHighlighted: boolean;
    }>;
    cta: {
        title: string;
        description: string;
        buttonText: string;
        buttonLink: string;
        secondaryButtonText?: string;
        secondaryButtonLink?: string;
    };
    seo: {
        title: string;
        description: string;
    };
}

const FAQSchema: Schema = new Schema({
    header: {
        title: { type: String, default: "Help Center" },
        description: { type: String, default: "Find everything you need to know about booking, payments, and our travel policies." }
    },
    categories: [
        {
            title: { type: String, default: "Booking & Payments" },
            icon: { type: String, default: "payments" },
            id: { type: String, default: "booking" }
        }
    ],
    items: [
        {
            question: { type: String, default: "How do I book a travel package?" },
            answer: { type: String, default: "To book a package, simply browse our Destinations or Packages page, select your desired itinerary, and click \"Book Now\". Follow the prompts to enter traveler details and complete your payment securely. You'll receive a confirmation email within minutes." },
            categoryId: { type: String, default: "booking" },
            isHighlighted: { type: Boolean, default: false }
        }
    ],
    cta: {
        title: { type: String, default: "Still have questions?" },
        description: { type: String, default: "We’re available 24/7 to assist you with any concerns." },
        buttonText: { type: String, default: "Contact Us" },
        buttonLink: { type: String, default: "/contact" },
        secondaryButtonText: { type: String, default: "Email Support" },
        secondaryButtonLink: { type: String, default: "mailto:support@travel.com" }
    },
    seo: {
        title: { type: String, default: "FAQ | Travel" },
        description: { type: String, default: "Frequently Asked Questions" }
    }
});

const FAQPage: Model<IFAQPage> = mongoose.models.FAQPage || mongoose.model<IFAQPage>("FAQPage", FAQSchema);
export default FAQPage;
