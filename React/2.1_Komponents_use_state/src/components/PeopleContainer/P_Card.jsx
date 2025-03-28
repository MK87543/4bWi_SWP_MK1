import React from "react";

export default function P_Card({ name, title, imageUri }) {
  return (
    <div className="border grid grid-cols-2 h-40 m-4">
      <div className="p-4">
        <h2 className="font-bold text-xl">{name}</h2>
        <h2>{title}</h2>
      </div>
      <div className="bg-green-400 w-full  h-39.5">
        <img src={imageUri} alt="" className="object-cover w-full h-full" />
      </div>

    </div>
  );
}
