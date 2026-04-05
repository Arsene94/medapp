import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';
import {routing} from '@/i18n/routing';

const handleI18nRouting = createMiddleware(routing);

const ROOT_DOMAIN = 'domain.ro';
const APP_HOST = `app.${ROOT_DOMAIN}`;
const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '0.0.0.0']);

function getHostname(request: NextRequest) {
    return (
        request.headers.get('x-forwarded-host') ??
        request.headers.get('host') ??
        ''
    )
        .split(':')[0]
        .toLowerCase();
}

function stripPrefix(path: string, prefix: string) {
    if (path === prefix) return '/';
    return path.replace(new RegExp(`^${prefix}(?=/|$)`), '') || '/';
}

function buildPath(locale: string, section: 'landing' | 'application', rest: string) {
    const normalizedRest = rest === '/' ? '' : rest;
    return `/${locale}/${section}${normalizedRest}`;
}

export default function proxy(request: NextRequest) {
    const response = handleI18nRouting(request);

    // Lasă next-intl să gestioneze redirecturile lui (/ -> /ro etc.)
    if (!response.ok) return response;

    const host = getHostname(request);

    const effectiveUrl = new URL(
        response.headers.get('x-middleware-rewrite') || request.url
    );

    const pathname = effectiveUrl.pathname;
    const segments = pathname.split('/').filter(Boolean);

    const locale = segments[0];
    const rest = '/' + segments.slice(1).join('/');

    const isLocal =
        process.env.NODE_ENV !== 'production' || LOCAL_HOSTS.has(host);

    if (!locale) {
        return response;
    }

    const isAppRoute =
        rest === '/application' || rest.startsWith('/application/');

    // LOCAL:
    // - /ro                  -> internally /ro/landing
    // - /ro/application      -> rămâne așa, fără rewrite suplimentar
    // - /ro/application/...  -> rămâne așa
    if (isLocal) {
        if (isAppRoute) {
            return response;
        }

        const target = buildPath(locale, 'landing', rest || '/');

        return NextResponse.rewrite(
            new URL(`${target}${effectiveUrl.search}`, request.url),
            {headers: response.headers}
        );
    }

    // PROD:
    // app.domain.ro/ro            -> /ro/application
    // app.domain.ro/ro/consult    -> /ro/application/consult
    // domain.ro/ro                -> /ro/landing
    // domain.ro/ro/pricing        -> /ro/landing/pricing
    if (host === APP_HOST) {
        const cleanRest = stripPrefix(rest || '/', '/application');
        const target = buildPath(locale, 'application', cleanRest);

        return NextResponse.rewrite(
            new URL(`${target}${effectiveUrl.search}`, request.url),
            {headers: response.headers}
        );
    }

    const cleanRest = stripPrefix(rest || '/', '/landing');
    const target = buildPath(locale, 'landing', cleanRest);

    return NextResponse.rewrite(
        new URL(`${target}${effectiveUrl.search}`, request.url),
        {headers: response.headers}
    );
}

export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
