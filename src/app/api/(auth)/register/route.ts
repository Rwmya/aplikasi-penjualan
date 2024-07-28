import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const requestData = await request.json();
  const { usr, pwd } = requestData;

  console.log(`POST data username: ${usr}`);
  console.log(`POST data password: ${pwd}`);

  try {
    const user = await prisma.user.create({
      data: { username: usr, password: pwd },
    });
    console.log(user);
    if (!user) {
      throw new Error();
    }
    const okMsg = "Sukses, user berhasil dibuat";
    console.log(okMsg);
    return new Response(JSON.stringify({ status: okMsg }));
  } catch (err) {
    const errMsg = "Error, username telah digunakan";
    console.log(errMsg);
    return new Response(JSON.stringify({ status: errMsg }), {
      status: 409,
    });
  }
}

export async function GET(response: Request) {
  return new Response(JSON.stringify({ response: "I love aya" }));
}
