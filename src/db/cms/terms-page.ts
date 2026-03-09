import mongoose, { Document, Model, Schema } from "mongoose";

interface ITermsPage extends Document {
    header: {
        title: string;
        lastUpdated: string;
    };
    sections: Array<{
        id: string;
        title: string;
        content: string;
        icon: string;
    }>;
    content: string;
    seo: {
        title: string;
        description: string;
    };
}

const TermsSchema: Schema = new Schema({
    header: {
        title: { type: String, default: "Terms and Conditions" },
        lastUpdated: { type: String, default: "March 01, 2026" }
    },
    sections: [
        {
            id: { type: String, default: "introduction" },
            title: { type: String, default: "Introduction" },
            content: { type: String, default: "Welcome to our Service. These Terms and Conditions govern your use of our website." },
            icon: { type: String, default: "info" }
        }
    ],
    content: { type: String, default: "<h1>Terms and Conditions</h1><p>Welcome to our Service. These Terms and Conditions govern your use of our website.</p>" },
    seo: {
        title: { type: String, default: "Terms and Conditions | Travel" },
        description: { type: String, default: "Read our terms and conditions." }
    }
});

const TermsPage: Model<ITermsPage> = mongoose.models.TermsPage || mongoose.model<ITermsPage>("TermsPage", TermsSchema);
export default TermsPage;
