import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/logoutButton";

export default function Home() {
  return (
    <>
      <h1 className="text-xl font-bold text-center">Homepage</h1>
      <div className="text-md font-bold text-center">
        <LogoutButton>Logout</LogoutButton>
      </div>
    </>
  );
}
