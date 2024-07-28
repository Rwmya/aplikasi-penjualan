import { Card } from "@/components/card";
import { FormLogin } from "@/components/formLogin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otentikasi pengguna",
};

export default function Login() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <Card>
          <FormLogin></FormLogin>
        </Card>
      </div>
    </>
  );
}
