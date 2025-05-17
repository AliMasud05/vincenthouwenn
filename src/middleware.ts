import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
  role?: string;
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  let decoded: CustomJwtPayload | null = null;

  if (token) {
    try {
      decoded = jwtDecode<CustomJwtPayload>(token);
    } catch (error) {
      console.error("Invalid token:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  const role = decoded?.role;
  const url = new URL(request.url);

  // Public routes that don't require authentication
  const publicRoutes = [
    "/login",
    "/register",
    "/",
    "/unauthorized",
    "/authenticate",
    "/products", // Products listing
    "/products/*", // Product details (dynamic route)
    "/verify-email", // Email verification
  ];

  // Protected routes that require specific roles
  const protectedRoutes = {
    "/dashboard": ["ADMIN", "SUPER_ADMIN"], // Admin-only routes
    "/profile": ["ADMIN", "USER", "SUPER_ADMIN"], // Accessible by all roles
    "/user-address": ["USER",'SUPER_ADMIN','ADMIN'], // User-only routes
  };

  // Prevent logged-in users from accessing the /authenticate route
  if (token && url.pathname === "/authenticate") {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect to home or another route
  }

  // Check if the route is public
  const isPublicRoute = publicRoutes.some((route) =>
    matchRoute(route, url.pathname)
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Redirect to login if no token is present
  if (!token) {
    const loginUrl = new URL("/authenticate", request.url);
    loginUrl.searchParams.set("redirect", url.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Check if the route is protected and requires specific roles
  const matchedProtectedRoute = Object.keys(protectedRoutes).find((route) =>
    url.pathname.startsWith(route)
  );

  if (matchedProtectedRoute) {
    const allowedRoles = protectedRoutes[matchedProtectedRoute as keyof typeof protectedRoutes];

    // Redirect to home if the user's role is not allowed
    if (!allowedRoles.includes(role || "")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Default behavior: allow access
  return NextResponse.next();
}

// Helper function to match routes, including dynamic routes
function matchRoute(route: string, pathname: string): boolean {
  if (route.endsWith("/*")) {
    const baseRoute = route.replace("/*", "");
    return pathname.startsWith(baseRoute);
  }
  return route === pathname;
}

// Apply middleware to relevant routes
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};