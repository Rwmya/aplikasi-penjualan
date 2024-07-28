import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(request: NextRequest) {
  const loginState = false;
  const url = request.url;
  const { pathname } = request.nextUrl;
  const publicPath = ["/login", "/register"];
  const apiPath = ["/api/login", "/api/register", "/api/logout"]; //semua path setelah /api e.g. /api/*
  const token = request.cookies.get("session")?.value;

  if (!token && !publicPath.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", url));
  }

  if (token && !apiPath.includes(pathname)) {
    try {
      await jwtVerify(token, secret);
      console.log("sukses token user valid");
    } catch (err) {
      console.log("error token user tidak valid");
      return NextResponse.redirect(new URL("/api/logout", url));
    }
  }

  if (token && publicPath.includes(pathname)) {
    return NextResponse.redirect(new URL("/", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next|icon.png).*)",
};
