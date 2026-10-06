import { NextResponse, type NextRequest } from "next/server";
/** Locale is selected by the public URL, never by a browser preference or cookie. */
export function proxy(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-bouw-locale", /^\/en(?:\/|$)/.test(request.nextUrl.pathname) ? "en" : "nl");
  return NextResponse.next({ request: { headers } });
}
export const config = { matcher: ["/((?!api|_next|images|icon.svg|favicon.ico).*)"] };
