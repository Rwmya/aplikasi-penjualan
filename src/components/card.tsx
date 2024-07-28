import React from "react";

export const Card = (props: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col w-80 bg-white rounded-md shadow-xl p-10">
        {props.children}
      </div>
    </>
  );
};
