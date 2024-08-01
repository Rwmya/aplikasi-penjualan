"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { sendData } from "./util";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai"

export const FormRegister = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [authState, setAuthState] = useState(0);
  const [message, setMessage] = useState("");
  const [msgStyle, setMsgStyle] = useState("");
  const [textBox, setTextBox] = useState(
    "border-slate-300 focus:ring-1 focus:ring-blue-400",
  );
  const { username, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTextBox("border-slate-300 focus:ring-1 focus:ring-blue-400");
    setAuthState(0);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = async () => {
      const ayachan = await sendData(username, password, "register");
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
      setMessage("Sukses akun berhasil dibuat");
      setMsgStyle("text-green-600");
    } else if (authState == 2) {
      setMsgStyle("text-pink-600");
      setMessage("Error username telah digunakan");
      setTextBox(
        "text-pink-600 border-pink-500 focus:border-pink-600 ring-pink-600",
      );
    }
  }, [authState]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <h1 className="mx-auto text-2xl text-center">Halaman Registrasi</h1>
          <h2 className="mx-auto text-xl text-center">Aplikasi Penjualan UMKM</h2>
          <div className="flex flex-col gap-2">
            <p className={`text-sm text-center ${msgStyle}`}>{message}</p>
            <label className="text-lg">{<AiOutlineUser className="mr-1 inline-block"/>}username</label>
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
            <label className="text-lg">{<AiOutlineLock className="mr-1 inline-block"/>}password</label>
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
            <button
              type="submit"
              className="flex-1 text-lg py-1 px-3 rounded-md text-white bg-blue-400 hover:bg-blue-500"
            >
              register
            </button>
          </div>
          <p className="text-center">
            Sudah memiliki akun? anda dapat{" "}
            <Link className="text-blue-600 hover:text-blue-500" href="/login">
              masuk ke akun anda
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};
