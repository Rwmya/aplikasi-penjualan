import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/logoutButton";

export default function Home() {
  return (
    <>
      <h1 className="text-xl font-bold text-white">TEST</h1>
      <h1 className="text-xl font-bold ml-64">Homepage</h1>
      <div className="text-md font-bold ml-64">
        <LogoutButton>Logout</LogoutButton>
      </div>
    </>
  );
}
