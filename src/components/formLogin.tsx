"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { sendData } from "./util";
import { useRouter } from "next/navigation";

export const FormLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [authState, setAuthState] = useState(0);
  const [message, setMessage] = useState("");
  const [msgStyle, setMsgStyle] = useState("");
  const [textBox, setTextBox] = useState(
    "border-slate-300 focus:ring-1 focus:ring-blue-400",
  );
  const { username, password } = formData;
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTextBox("border-slate-300 focus:ring-1 focus:ring-blue-400");
    setAuthState(0);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const auth = async () => {
      e.preventDefault();
      const ayachan = await sendData(username, password, "login");
      if (!ayachan) {
        setAuthState(2);
      } else {
        setAuthState(1);
      }
    };
    auth();
  };

  useEffect(() => {
    if (authState == 1) {
      setMessage("Sukses login berhasil");
      setMsgStyle("text-green-600");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else if (authState == 2) {
      setMsgStyle("text-pink-600");
      setMessage("Error username atau password salah");
      setTextBox(
        "text-pink-600 border-pink-500 focus:border-pink-600 ring-pink-600",
      );
    }
  }, [authState, router]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <h1 className="mx-auto text-2xl">Halaman Login</h1>
          <h2 className="mx-auto text-xl">Aplikasi Penjualan UMKM</h2>
          <div className="flex flex-col gap-2">
            <p className={`text-sm ${msgStyle}`}>{message}</p>
            <label className="text-lg">username</label>
            <input
              name="username"
              className={`py-1 px-3 rounded border focus:outline-none ${textBox}`}
              type="text"
              placeholder="masukan username anda"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg">password</label>
            <input
              name="password"
              className={`py-1 px-3 rounded border focus:outline-none ${textBox}`}
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="masukan password anda"
              required
            />
          </div>
          <div className="flex justify-between gap-3">
            <button className="flex-1 text-lg py-1 px-3 rounded-md text-white bg-blue-400 hover:bg-blue-500">
              login
            </button>
          </div>
          <p className="text-center">
            Belum memiliki akun? anda dapat{" "}
            <Link
              className="text-blue-600 hover:text-blue-500"
              href="/register"
            >
              membuat akun baru
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};
