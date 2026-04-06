import 'server-only';
import {createServerClient} from '@supabase/ssr';
import {cookies} from 'next/headers';

const isProd = process.env.NODE_ENV === 'production';

export async function createClient() {
    const cookieStore = await cookies();

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    try {
                        for (const {name, value, options} of cookiesToSet) {
                            cookieStore.set(name, value, {
                                ...options,
                                ...(isProd ? {domain: 'domain.ro'} : {}),
                                path: '/',
                                sameSite: 'lax',
                                secure: isProd
                            });
                        }
                    } catch {}
                }
            }
        }
    );
}
