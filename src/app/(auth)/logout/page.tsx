import { redirect } from "next/navigation"

export default function Logout(){
  return redirect("/api/logout")
}
