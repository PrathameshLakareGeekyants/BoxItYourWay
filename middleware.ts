import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const sessionToken = request.cookies.get("next-auth.session-token")?.value;
  const protectedRoutes = [
    "/cart",
    "/my-orders",
    "/order-options",
    "/address",
    "/order",
  ];

  if (sessionToken) {
    if (
      request.nextUrl.pathname === "/signin" ||
      request.nextUrl.pathname === "/signup"
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  }

  if (!sessionToken && protectedRoutes.includes(pathname)) {
    if (pathname === "/signin" || pathname === "/signup") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/signin",
    "/signup",
    "/products",
    "/cart",
    "/my-orders",
    "/order-options",
    "/address",
    "/order",
  ],
};
