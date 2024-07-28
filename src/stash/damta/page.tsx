"use client";
import React, { useState, useEffect } from "react";

export default function Damta() {
  const [data, setData] = useState("");

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setData("aya");
  };

  const ambil = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/register");
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // fetch("http://localhost:3000/api/register")
    //   .then((response) => response.json())
    //   .then((json) => setData(json.response));
    const loadData = async () => {
      const result = await ambil();
      setData(JSON.stringify(result));
    };
    loadData();
    console.log("hey there");
  }, []);

  return (
    <>
      <button onClick={handleButton}>ssssssss</button>
      <button onClick={() => setData("rin")}>rin</button>
      <h1>{data}</h1>
    </>
  );
}
