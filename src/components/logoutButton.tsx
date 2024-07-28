"use client";

import React from "react";
import { useRouter } from "next/navigation";

export const LogoutButton = (props: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <>
      <button
        className="text-center w-3 bg-white rounded-md shadow-xl p-10"
        onClick={() => router.push("/api/logout")}
      >
        {props.children}
      </button>
    </>
  );
};
