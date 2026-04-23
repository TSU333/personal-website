import { NextRequest, NextResponse } from "next/server";

const blockedPathPatterns = [
  /^\/\.env(?:\.|$|\/)/i,
  /^\/\.git(?:$|\/)/i,
  /^\/\.svn(?:$|\/)/i,
  /^\/\.hg(?:$|\/)/i,
  /^\/wp-admin(?:$|\/)/i,
  /^\/wp-login\.php$/i,
  /^\/xmlrpc\.php$/i,
  /^\/phpmyadmin(?:$|\/)/i,
  /^\/admin(?:$|\/)/i,
  /^\/login(?:$|\/)/i,
  /^\/register(?:$|\/)/i,
  /^\/forgot-password(?:$|\/)/i,
  /^\/reset-password(?:$|\/)/i,
  /^\/send-code(?:$|\/)/i,
  /^\/api(?:$|\/)/i,
];

function isBlockedProbe(pathname: string) {
  return blockedPathPatterns.some((pattern) => pattern.test(pathname));
}

export function proxy(request: NextRequest) {
  const { nextUrl } = request;

  if (process.env.NODE_ENV === "production") {
    const forwardedProto = request.headers.get("x-forwarded-proto");

    if (forwardedProto === "http") {
      const httpsUrl = nextUrl.clone();
      httpsUrl.protocol = "https:";
      return NextResponse.redirect(httpsUrl, 308);
    }
  }

  if (isBlockedProbe(nextUrl.pathname)) {
    // Keep scanner responses generic so hidden routes and framework details are not disclosed.
    return new NextResponse(null, {
      status: 404,
      headers: {
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|tsu-mark.svg).*)",
  ],
};
