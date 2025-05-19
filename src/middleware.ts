import { NextResponse } from "next/server";

export function middleware() {
  // Allow access to all routes without any authentication checks
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};