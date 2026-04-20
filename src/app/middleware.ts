import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        request.cookies.set({ name, value, ...options }),
                    );
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set({ name, value, ...options }),
                    );
                },
            },
        },
    );

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const url = request.nextUrl.clone();
    const isLoginPage = url.pathname === '/admin/login';
    const isRootAdmin = url.pathname === '/admin';
    const isAdminArea = url.pathname.startsWith('/admin');

    if (!user && isAdminArea && !isLoginPage) {
        url.pathname = '/admin/login';
        return NextResponse.redirect(url);
    }

    if (user && (isLoginPage || isRootAdmin)) {
        url.pathname = '/admin/dashboard';
        return NextResponse.redirect(url);
    }

    return response;
}

export const config = {
    matcher: ['/admin/:path*'],
};
