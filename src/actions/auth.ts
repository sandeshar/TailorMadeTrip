'use server';

import { signToken, JWTPayload } from '@/utils/jwt';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginAction(prevState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // TEMPORARY: Hardcoded check for demonstration. Replace with your actual user authentication logic.
    if (email === 'admin@example.com' && password === 'admin123') {
        const user: JWTPayload = { userId: '1', email, role: 'admin' };
        const token = await signToken(user);

        const cookieStore = await cookies();
        cookieStore.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 86400, // 1 day
            path: '/',
        });

        return { success: true, message: 'Login successful' };
    }

    return { success: false, message: 'Invalid credentials' };
}

