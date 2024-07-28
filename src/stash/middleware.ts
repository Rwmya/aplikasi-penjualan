import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET as string;

export function middleware(request: NextRequest) {
  const loginState = false;
  const url = request.url;
  const { pathname } = request.nextUrl;
  const publicPath = ["/login", "/register"];
  const token = request.cookies.get("session")?.value;

  console.log(token);
  if (!token && !publicPath.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", url));
  }

  if (token) {
    const a = jwt.verify(token, secret);
    console.log(a);
    try {
      jwt.verify(token, secret);
      console.log("sukses");
    } catch (err) {
      console.log("error");
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }
  }
  // try {
  //   if (token) jwt.verify(token, secret);
  //   console.log("success");
  //   console.log(token);
  //   return NextResponse.next();
  // } catch (err) {
  //   console.log("error");
  //   return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  // }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next|icon.png).*)",
};
