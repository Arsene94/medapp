import 'server-only';
import {createServerClient} from '@supabase/ssr';
import {NextRequest, NextResponse} from 'next/server';

const isProd = process.env.NODE_ENV === 'production';

export async function updateSession(request: NextRequest) {
    let response = NextResponse.next({request});

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    for (const {name, value} of cookiesToSet) {
                        request.cookies.set(name, value);
                    }

                    response = NextResponse.next({request});

                    for (const {name, value, options} of cookiesToSet) {
                        response.cookies.set(name, value, {
                            ...options,
                            ...(isProd ? {domain: 'domain.ro'} : {}),
                            path: '/',
                            sameSite: 'lax',
                            secure: isProd
                        });
                    }
                }
            }
        }
    );

    await supabase.auth.getClaims();
    return response;
}
