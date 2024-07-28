import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const secret = process.env.JWT_SECRET as string;
const prisma = new PrismaClient();

export async function POST(request: Request) {
  const requestData = await request.json();
  const { usr, pwd } = requestData;

  console.log(`POST data username: ${usr}`);
  console.log(`POST data password: ${pwd}`);

  try {
    const user = await prisma.user.findFirst({ where: { username: usr } });

    if (!user) {
      throw new Error();
    } else if (user.password !== pwd) {
      throw new Error();
    }

    const token = jwt.sign({ usr }, secret, { expiresIn: "1h" });
    const expires = 3600;
    cookies().set("session", token, {
      maxAge: expires,
      httpOnly: true,
      sameSite: "strict",
      path: "/",
    });

    const okMsg = "Login berhasil";
    console.log(okMsg);
    console.log(user);
    return new Response(JSON.stringify({ status: okMsg }));
  } catch (err) {
    const errMsg = "Login gagal";
    console.log(errMsg);
    return NextResponse.json({ status: errMsg }, { status: 401 });
  }
}

export async function GET(response: Request) {
  return redirect("/");
}
