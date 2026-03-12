import mongoose from 'mongoose';

// Ensure all models are registered with mongoose to avoid "Schema hasn't been registered" errors
import './core/articles';
import './core/categories';
import './core/subcategories';
import './core/contact-submissions';
import './core/faq-categories';
import './core/faq-subcategories';
import './core/newsletter';
import './core/testimonials';
import './core/package-categories';
import './core/package-subcategories';
import './core/packages';
import './cms/about-page';
import './cms/blog-page';
import './cms/contact-page';
import './cms/faq-page';
import './cms/footer';
import './cms/homepage';
import './cms/navbar';
import './cms/site-settings';
import './cms/terms-page';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

/**
 * Global interface for mongoose caching in development
 */
declare global {
    var mongoose: {
        conn: any;
        promise: any;
    } | undefined;
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (!cached) {
        cached = global.mongoose = { conn: null, promise: null };
    }

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((m) => m.connection);
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default dbConnect;