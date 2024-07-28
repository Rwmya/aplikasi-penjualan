import { Card } from "@/components/card";
import { FormRegister } from "@/components/formRegister";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registrasi pengguna",
};

export default async function Register() {
  // const ayachan = getData("http://localhost:3000/api/register");
  // console.log(ayachan);
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <Card>
          <FormRegister></FormRegister>
        </Card>
      </div>
    </>
  );
}
