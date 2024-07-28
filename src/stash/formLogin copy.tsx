"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

export const FormLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { username, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Login menggunakan\nusername: ${username}\npassword ${password}`);
    // alert(`username: ${username}\npassword: ${password}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <h1 className="mx-auto text-2xl">Halaman Login</h1>
          <h2 className="mx-auto text-xl">Aplikasi Penjualan UMKM</h2>
          <div className="flex flex-col gap-2">
            <label className="text-lg">username</label>
            <input
              name="username"
              className="py-1 px-3 rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
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
              className="py-1 px-3 rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
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
