import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET() {
  cookies().delete("session");
  console.log("Cookie berhasil dihapus");
  // return NextResponse.json({ status: "Cookie berhasil dihapus" });
  return redirect("/login");
}
