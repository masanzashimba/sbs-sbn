import React, { Children } from "react";

export default function Header(props) {
  return (
    <div className="py-16 flex flex-col text-white items-center justify-center bg-cyan-950 p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{props.title}</h1>
      <p className="text-xl md:text-2xl mb-8 opacity-90 text-white">
        {props.subtitle}
      </p>
      <p className="text-lg text-white md:text-xl text-center max-w-2xl">
        {props.description}
      </p>
    </div>
  );
}
