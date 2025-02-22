import { LOCALES } from "@/config";
import createMiddleware from "next-intl/middleware";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

const i18nMiddleware = createMiddleware({
  locales: LOCALES.split("|"),
  defaultLocale: "en",
  localeCookie: true,
  localeDetection: true,
});

export async function middleware(req: NextRequest) {
  const cookie = await cookies();
  const headerList = await headers();
  const locale =
    headerList.get("X-NEXT-INTL-LOCALE") || cookie.get("NEXT_LOCALE")?.value;

  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(`${req.nextUrl.origin}/${locale}`);
  }

  return i18nMiddleware(req);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
    `/(${LOCALES})/:path*`,
  ],
};
